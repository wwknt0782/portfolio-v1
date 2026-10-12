import { API_BASE_URL } from "@/config/api";

export async function fetcher<T>(
    path: string,
    options: RequestInit = {},
): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
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
        const error = new Error(message);
        (error as Error & { status?: number }).status = response.status;
        throw error;
    }

    if (response.status === 204) {
        return undefined as T;
    }

    return response.json() as Promise<T>;
}
