//お問い合わせ完了ページ
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageBackButton from "@/components/PageBackButton";
import SetPageAttribute from "@/components/SetPageAttribute";
import Link from "next/link";
export default function Home() {
    SetPageAttribute(); //テーマカラーをセット
    return (
        <div
            className="flex flex-col min-h-screen
        bg-[var(--color-secondary)] dark:bg-[var(--color-dark-secondary)]
        dark:text-[var(--color-dark-text)]"
        >
            <Header />
            <div className="grow flex flex-col items-center justify-center text-center mt-16">
                <h2 className="text-2xl text-[var(--color-primary)] dark:text-[var(--color-dark-primary)] ">
                    お問い合わせありがとうございます。
                </h2>
                <p className="mt-3 mb-8">
                    内容を確認後，ご連絡させていただきます。
                </p>
                <div>
                    <Link href="/">
                        <PageBackButton
                            buttonName="HOMEへ戻る"
                            theme="contact"
                        />
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}
