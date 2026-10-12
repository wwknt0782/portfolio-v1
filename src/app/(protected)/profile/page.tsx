//プロフィールページ

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProfileMain from "@/features/profile/ProfileMain";

export default function Home() {
    return (
        <>
            <Header />
            {/*ヘッダー*/}
            <ProfileMain />
            {/*メイン*/}
            <Footer />
            {/*フッター*/}
        </>
    );
}
