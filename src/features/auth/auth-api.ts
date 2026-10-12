import { fetcher } from "@/lib/fetcher";
import type {
    LoginRequest,
    LoginResponse,
    ApiErrorResponse,
    AuthUser,
    VerifyMfaRequest,
    AuthStateResponse,
} from "./auth-types";
import { API_BASE_URL } from "@/config/api";

// 管理者ログイン
export async function loginApi(data: LoginRequest): Promise<LoginResponse> {
    return fetcher<LoginResponse>("/auth/admin/login", {
        method: "POST",
        body: JSON.stringify(data),
    });
}

// 認証状態取得
export async function getAuthState(): Promise<AuthStateResponse> {
    return fetcher<AuthStateResponse>("/auth/admin/status");
}

// ログイン中ユーザー取得
export async function getAuthenticatedUser(): Promise<AuthUser> {
    return fetcher<AuthUser>("/auth/admin/me");
}

// ログアウト
export async function logoutApi(): Promise<void> {
    await fetcher<void>("/auth/logout", {
        method: "POST",
    });
}

// MFA検証
export async function verifyMfa(data: VerifyMfaRequest): Promise<void> {
    await fetcher<void>("/mfa/verify-mfa", {
        method: "POST",
        body: JSON.stringify(data),
    });
}

//

// ログインリクエスト
export async function requestLogin(
    request: LoginRequest,
): Promise<LoginResponse> {
    const response = await fetch(API_BASE_URL + "/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
    });

    // ステータスに応じたエラーメッセージを出力する
    if (!response.ok) {
        const serverMessage = await readErrorMessage(response);
        throw new LoginApiError(
            getDefaultMessage(response.status),
            response.status,
        );
    }
    return (await response.json()) as LoginResponse;
}

// ログインAPI専用エラークラス
export class LoginApiError extends Error {
    public readonly status: number;
    constructor(message: string, status: number) {
        super(message);
        this.name = "LoginApiError";
        this.status = status;
    }
}

// レスポンスからエラーメッセージを取得する
async function readErrorMessage(
    response: Response,
): Promise<string | undefined> {
    try {
        const body = (await response.json()) as ApiErrorResponse;
        return body.message;
    } catch {
        return undefined;
    }
}

// エラーごとに基本のメッセージを定義
function getDefaultMessage(status: number): string {
    switch (status) {
        case 400:
            return "入力内容を確認してください。";
        case 401:
            return "ユーザーIDまたはパスワードが違います。";
        case 429:
            return "ログイン試行回数が多すぎます。時間をおいて再度お試しください。";
        default:
            return "ログイン処理に失敗しました。";
    }
}
