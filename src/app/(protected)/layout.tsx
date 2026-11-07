"use client";
import "~/globals.css";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/features/auth/auth-store";
import { useEffect } from "react";

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const router = useRouter();
    const isRestoring = useAuthStore((state) => state.isRestoring);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const restoreError = useAuthStore((state) => state.restoreError);

    useEffect(() => {
        // 認証状態確認中なら何もしない
        if (isRestoring || restoreError) {
            return;
        }
        // 未認証ならログイン画面へ遷移
        if (!isAuthenticated) {
            router.replace("/login");
            return;
        }
    }, [isAuthenticated, isRestoring, restoreError, router]);

    // 待機中画面表示
    if (isRestoring) {
        return <div>認証中</div>;
    }

    // 認証エラー
    if (restoreError) {
        return (
            <div role="alert">
                <p>{restoreError}</p>
                <button type="button" onClick={() => window.location.reload()}>
                    再読み込み
                </button>
            </div>
        );
    }
    // リダイレクトするまでは配下のページを表示しない
    if (!isAuthenticated) {
        return null;
    }

    // 認証済みなら配下のページを表示する
    if (isAuthenticated) {
        return <>{children}</>;
    }
}
