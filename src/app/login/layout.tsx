"use client";

import { useAuthStore } from "@/features/auth/auth-store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function loginLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const router = useRouter();
    const isRestoring = useAuthStore((state) => state.isRestoring);
    const restoreError = useAuthStore((state) => state.restoreError);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    useEffect(() => {
        // 認証状態確認中なら何もしない
        if (isRestoring || restoreError) {
            return;
        }

        // ログイン済みならトップページへ遷移
        if (isAuthenticated) {
            router.replace("/");
        }
    }, [isRestoring, restoreError, isAuthenticated]);

    // 待機中画面表示
    if (isRestoring) {
        return <div>認証中</div>;
    }

    // 認証エラー
    if (restoreError) {
        <div role="alert">
            <p>{restoreError}</p>
            <button type="button" onClick={() => window.location.reload()}>
                再読み込み
            </button>
        </div>;
    }

    return <div data-page="login">{children}</div>;
}
