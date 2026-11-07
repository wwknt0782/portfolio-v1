import { fetcher, UnauthorizedPolicy } from "@/lib/fetcher";
import type {
    LoginCredentials,
    AuthUser,
    AuthStateResponse,
} from "./auth-types";

// ログイン
export async function loginApi(data: LoginCredentials): Promise<void> {
    await fetcher<unknown>("/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        // もともと認証されていないので何もしない
        unauthorized: "ignore",
    });
}

// 認証状態取得
export async function getAuthState(): Promise<AuthStateResponse> {
    return fetcher<AuthStateResponse>("/auth/status", {
        // 認証状態の破棄はrestoreAuth()で実施する
        unauthorized: "ignore",
    });
}

// ユーザー情報取得
export async function getAuthenticatedUser(
    unauthorized: UnauthorizedPolicy = "invalidate",
): Promise<AuthUser> {
    return fetcher<AuthUser>("/auth/me", {
        // 呼び出しもとによって401の処理が変わるので引数に指定
        unauthorized: unauthorized,
    });
}

// ログアウト
export async function logoutApi(): Promise<void> {
    await fetcher<void>("/auth/logout", {
        method: "POST",
        // 401が帰ってきても再度ログアウト処理をしない
        unauthorized: "ignore",
    });
}
