//ルートレイアウト サイト全体の仕様をここに記述
"use client";
import type { Metadata } from "next";
import "~/globals.css";

import PrelineScriptWrapper from "@/components/PrelineScriptWrapper"; //Preline UI
//import WelcomeScreen from "@/components/WelcomeAnimation";
import { quicksand, zenKakuGothicAntique } from "@/fonts/Fonts"; //Googleフォント
import { PageTransitionAnimation } from "@/components/PageTransition";
import WelcomeScreen from "@/components/WelcomeAnimation";
import { useAuthStore } from "@/features/auth/auth-store";
import { useEffect } from "react";

//export const metadata: Metadata = {
//    title: "K-WATANABE",
//    description: "This is the portfolio site of K-WATANABE",
//    openGraph: {
//        type: "website",
//        url: "https://k-watanabe.com",
//        title: "K-WATANABE",
//        description: "K-WATANABEのポートフォリオサイト",
//        siteName: "K-WATANABE",
//        images: [{ url: "https://k-watanabe.com/ogp.jpg" }],
//    },
//};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    // 認証処理
    const restoreAuth = useAuthStore((state) => state.restoreAuth);
    const currentUser = useAuthStore((state) => state.refreshCurrentUser);
    const {
        user,
        isAuthenticated,
        isLoading,
        isLoggingOut,
        isMfaRequired,
        isRestoring,
    } = useAuthStore();
    useEffect(() => {
        void restoreAuth();
        void currentUser();
    }, [restoreAuth, currentUser]);

    return (
        <html
            lang="ja"
            className={`${quicksand.className} ${zenKakuGothicAntique.className}`}
        >
            <body
                className="flex flex-col min-h-screen
            text-[var(--color-home-text)] dark:text-[var(--color-home-dark-text)]
            bg-[var(--color-home-secondary)] dark:bg-[var(--color-home-dark-secondary)]"
            >
                <div className="z-10000 bg-white">
                    <p>user: {String(user?.userName)}</p>
                    <p>isAuthenticated: {String(isAuthenticated)}</p>
                    <p>isLoading: {String(isLoading)}</p>
                    <p>isRestoring: {String(isRestoring)}</p>
                    <p>isLoggingOut: {String(isLoggingOut)}</p>
                    <p>isMfaRequired: {String(isMfaRequired)}</p>
                </div>

                {children}
            </body>

            <PrelineScriptWrapper />
        </html>
    );
}
