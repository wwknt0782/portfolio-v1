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
    const isLoading = useAuthStore((state) => state.isLoading);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const isMfaRequired = useAuthStore((state) => state.isMfaRequired);

    useEffect(() => {
        // 認証状態確認中なら何もしない
        if (isRestoring) {
            return;
        }
        // 二段階認証中なら二段階認証ページへ遷移
        if (isMfaRequired) {
            router.replace("/mfa");
            return;
        }
        // 未認証ならログイン画面へ遷移
        if (!isAuthenticated) {
            router.replace("/login");
            return;
        }
    }, [isAuthenticated, isMfaRequired, isRestoring]);

    // 待機中画面表示
    if (isRestoring) {
        return <div>認証中</div>;
    }
    // リダイレクトするまでは配下のページを表示しない
    if (isMfaRequired || !isAuthenticated) {
        return null;
    }

    // 認証済みなら配下のページを表示する
    if (isAuthenticated) {
        return <>{children}</>;
    }
}
