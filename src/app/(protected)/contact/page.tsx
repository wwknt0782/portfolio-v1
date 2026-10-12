//お問い合わせページ
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactMain from "@/features/contact/ContactMain";

export default function Home() {
    return (
        <>
            <Header />
            {/*ヘッダー*/}

            <ContactMain />
            {/*メイン*/}

            <Footer />
            {/*フッター*/}
        </>
    );
}
