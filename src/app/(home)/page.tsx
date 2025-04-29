//トップページ

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeMain from "@/features/home/HomeMain";

export default function Home() {
    return (
        <div>
            <Header />
            {/*ヘッダー*/}

            <HomeMain />
            {/*メイン*/}

            <Footer />
            {/*フッター*/}
        </div>
    );
}
