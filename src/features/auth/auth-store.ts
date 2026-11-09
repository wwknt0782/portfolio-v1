import { create } from "zustand";
import { AuthStore } from "./auth-types";
import {
    getAuthenticatedUser,
    getAuthState,
    loginApi,
    logoutApi,
} from "./auth-api";
import { setUnauthorizedHandler } from "@/lib/fetcher";
import { ApiError } from "./api-error";

// 認証のバージョン管理用
let authVersion = 0;
// 実行中認証処理を保持
let restorePromise: Promise<void> | null = null;

export const useAuthStore = create<AuthStore>((set, get) => ({
    user: null,
    isAuthenticated: false,
    isLoggingIn: false,
    isRestoring: true,
    isLoggingOut: false,
    restoreError: null,

    login: async (data) => {
        // 通常ログイン
        set({ isLoggingIn: true });

        try {
            await loginApi(data);
            const user = await getAuthenticatedUser("ignore");
            set({
                user: user,
                isAuthenticated: true,
            });
        } finally {
            set({ isLoggingIn: false });
        }
    },
    logout: async () => {
        // ログアウト
        if (get().isLoggingOut) {
            return;
        }
        authVersion += 1;
        set({ isLoggingOut: true });
        try {
            await logoutApi();
        } finally {
            set({
                user: null,
                isAuthenticated: false,
                isLoggingOut: false,
                isRestoring: false, // restoreAuthが途中で打ち切られた場合のため
                restoreError: null,
            });
        }
    },
    restoreAuth: () => {
        // 復元処理が実行中ならそのPromiseを返す(復元を重複実行しない)
        if (restorePromise) {
            return restorePromise;
        }

        // 復元処理を開始してPromiseを保存する
        restorePromise = (async (): Promise<void> => {
            const version = authVersion;
            // ページリロード時の認証状態再問合わせ
            set({ isRestoring: true, restoreError: null });
            try {
                const authStatus = await getAuthState();
                // リクエスト中にログアウト処理によってauthVersionが変わっていたら終了
                if (version != authVersion) {
                    return;
                }
                // 認証されている場合
                if (
                    authStatus.authenticated /*&&
                authStatus.status === "AUTHENTICATED"*/
                ) {
                    const user = await getAuthenticatedUser("ignore");
                    // リクエスト中にログアウト処理によってauthVersionが変わっていたら終了
                    if (version != authVersion) {
                        return;
                    }
                    set({
                        user: user,
                        isAuthenticated: true,
                        restoreError: null,
                    });

                    return;
                }
                // 認証期限切れの場合
                if (authStatus.status === "TOKEN_EXPIRED") {
                    await get().logout();

                    return;
                }

                // 未認証の場合
                set({
                    user: null,
                    isAuthenticated: false,
                    restoreError: null,
                });
            } catch (error) {
                // 復元開始後に認証状態が変更されていたら古いリクエストの結果を反映しない
                if (version !== authVersion) {
                    return;
                }
                // 認証復元中の401は未認証として扱う
                if (error instanceof ApiError && error.status === 401) {
                    get().clearAuth();
                    return;
                }
                // その他の失敗の時は認証状態を破棄
                set({
                    user: null,
                    isAuthenticated: false,
                    restoreError:
                        "認証状態を確認できませんでした。通信環境を確認して再読み込みしてください。",
                });
            } finally {
                // リクエスト中にログアウト処理によってauthVersionが変わっていたら終了
                if (version === authVersion) {
                    set({ isRestoring: false });
                }
            }
        })().finally(() => {
            // 成否によらずPromiseの参照を解除
            restorePromise = null;
        });
        return restorePromise;
    },
    refreshCurrentUser: async () => {
        const version = authVersion;
        // ログイン中のみユーザー状態再取得
        const state = get();
        if (!state.isAuthenticated || state.isLoggingOut || state.isRestoring) {
            return;
        }
        const user = await getAuthenticatedUser();
        // 非同期処理実行後に再度ログイン状態かどうかを確認する
        const afterState = get();
        if (
            !afterState.isAuthenticated ||
            afterState.isLoggingOut ||
            afterState.isRestoring
        ) {
            return;
        }
        // リクエスト中にログアウト処理によってauthVersionが変わっていたら終了
        if (version != authVersion) {
            return;
        }
        set({
            user: user,
        });
    },
    clearAuth: () => {
        // 実行中の古い認証処理を無効にする
        authVersion += 1;
        // ローカルの認証状態を破棄する
        set({
            user: null,
            isAuthenticated: false,
            isRestoring: false,
            restoreError: null,
        });
    },
}));

// fetcherから直接clearAuth()を呼ぶと循環参照になるためハンドラーに登録して呼ぶ
setUnauthorizedHandler(() => {
    useAuthStore.getState().clearAuth();
});
