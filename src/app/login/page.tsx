//ログインページ

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoginMain from "@/features/login/LoginMain";

export default function Home() {
    return (
        <>
            <Header showGlobalNav={false}/>
            {/*ヘッダー*/}
            <LoginMain />
            {/*メイン*/}
            <Footer showBreadCrumb = {false}/>
            {/*フッター*/}
        </>
    );
}
