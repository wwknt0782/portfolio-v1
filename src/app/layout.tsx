//ルートレイアウト　サイト全体の仕様をここに記述
import type { Metadata } from "next";
import "~/globals.css";

import PrelineScriptWrapper from "@/components/PrelineScriptWrapper"; //Preline UI
//import WelcomeScreen from "@/components/WelcomeAnimation";
import { quicksand, zenKakuGothicAntique } from "@/fonts/Fonts"; //Googleフォント
import { PageTransitionAnimation } from "@/components/PageTransition";
import WelcomeScreen from "@/components/WelcomeAnimation";

export const metadata: Metadata = {
    title: "K-WATANABE",
    description: "This is the portfolio site of K-WATANABE",
    openGraph: {
        type: "website",
        url: "https://k-watanabe.com",
        title: "K-WATANABE",
        description: "K-WATANABEのポートフォリオサイト",
        siteName: "K-WATANABE",
        images: [{ url: "https://k-watanabe.com/ogp.jpg" }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
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
                <WelcomeScreen />

                <PageTransitionAnimation />
                {children}
            </body>

            <PrelineScriptWrapper />
        </html>
    );
}
