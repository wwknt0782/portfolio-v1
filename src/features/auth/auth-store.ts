import { create } from "zustand";
import { AuthState } from "./auth-types";
import {
    getAuthenticatedUser,
    getAuthState,
    loginApi,
    logoutApi,
    verifyMfa,
} from "./auth-api";

export const useAuthStore = create<AuthState>((set, get) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    isRestoring: true,
    isLoggingOut: false,
    isMfaRequired: false,

    login: async (data) => {
        // 通常ログイン
        set({ isLoading: true });

        try {
            const response = await loginApi(data);
            // 二段階認証が必要な場合
            if (response.mfaRequired) {
                set({
                    user: null,
                    isAuthenticated: false,
                    isMfaRequired: true,
                });
                return { isMfaRequired: true };
            }
            // 二段階認証が不要な場合
            const user = await getAuthenticatedUser();
            set({
                user: user,
                isAuthenticated: true,
                isMfaRequired: false,
            });
        } finally {
            set({ isLoading: false });
        }

        return { isMfaRequired: false };
    },
    verifyMfaAndLogin: async (data) => {
        // 二段階認証コードをバックエンドで認証してログイン
        set({
            isLoading: true,
        });
        try {
            await verifyMfa(data);
            const user = await getAuthenticatedUser();
            set({
                user: user,
                isAuthenticated: true,
                isMfaRequired: false,
            });
        } finally {
            set({
                isLoading: false,
            });
        }
    },
    logout: async () => {
        // ログアウト
        if (get().isLoggingOut) {
            return;
        }

        set({ isLoggingOut: true });
        try {
            await logoutApi();
        } finally {
            set({
                user: null,
                isAuthenticated: false,
                isMfaRequired: false,
                isLoggingOut: false,
            });
        }
    },
    restoreAuth: async () => {
        // ページリロード時の認証状態再問合わせ
        set({ isRestoring: true });
        try {
            const authStatus = await getAuthState();
            // 認証されている場合
            if (
                authStatus.authenticated /*&&
                authStatus.status === "AUTHENTICATED"*/
            ) {
                const user = await getAuthenticatedUser();
                set({
                    user: user,
                    isAuthenticated: true,
                    isMfaRequired: false,
                });
                console.log("認証状態：ログイン中");
                return;
            }
            // MFA要求中の場合
            if (authStatus.status === "MFA_REQUIRED") {
                set({
                    user: null,
                    isAuthenticated: false,
                    isMfaRequired: true,
                });
                console.log("二段階認証を要求中");
                return;
            }

            // 認証期限切れの場合
            if (
                authStatus.status === "MFA_TOKEN_EXPIRED" ||
                authStatus.status === "TOKEN_EXPIRED"
            ) {
                await get().logout();
                console.log("認証期限切れ");
                return;
            }

            // 未認証の場合
            set({
                user: null,
                isAuthenticated: false,
                isMfaRequired: false,
            });
            console.log("未認証");
        } finally {
            set({ isRestoring: false });
        }
    },
    refreshCurrentUser: async () => {
        // ユーザー状態再取得
        const user = await getAuthenticatedUser();

        set({
            user: user,
            isAuthenticated: true,
            isMfaRequired: false,
        });
    },
}));
