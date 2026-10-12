//トップページ

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeMain from "@/features/home/HomeMain";

export default function Home() {
    return (
        <>
            <Header />
            {/*ヘッダー*/}

            <HomeMain />
            {/*メイン*/}

            <Footer />
            {/*フッター*/}
        </>
    );
}
