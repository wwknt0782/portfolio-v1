import { API_BASE_URL } from "@/config/api";
import { AuthenticationError, ApiError } from "@/features/auth/api-error";

// 通常の保護されたAPI：invalidate 共通で認証状態を即時破棄する
// 認証状態復元API，ログインAPI：ignore 共通処理せず呼び出しもとに認証状態の扱いを移譲する
export type UnauthorizedPolicy = "invalidate" | "ignore";

type FetcherOptions = RequestInit & {
    unauthorized?: UnauthorizedPolicy;
};

let unauthorizedHandler: (() => void) | null = null;
export function setUnauthorizedHandler(handler: () => void): void {
    unauthorizedHandler = handler;
}

export async function fetcher<T>(
    path: string,
    options: FetcherOptions = {},
): Promise<T> {
    const { unauthorized = "invalidate", ...requestOptions } = options;
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...requestOptions,
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...requestOptions.headers,
        },
    });

    // リクエストに失敗した場合の処理
    if (!response.ok) {
        let message = "リクエストに失敗しました";
        try {
            const body = await response.json();
            if (body.message) {
                message = body.message;
            }
        } catch {
            // JSONでない場合はデフォルトメッセージ
        }
        // エラーメッセージを出力
        // 401かつデフォルト設定(認証状態を即時破棄)の場合
        if (response.status === 401 && unauthorized === "invalidate") {
            unauthorizedHandler?.();
            throw new AuthenticationError();
        }
        // それ以外の場合
        throw new ApiError(message, response.status);
    }

    if (response.status === 204) {
        return undefined as T;
    }

    return response.json() as Promise<T>;
}
