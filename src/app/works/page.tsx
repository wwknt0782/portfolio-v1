//制作実績ページ

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WorksMain from "@/features/works/WorksMain";
import { Suspense } from "react";

export default function Home() {
    return (
        <>
            <Header />
            {/*ヘッダー*/}

            <Suspense fallback={<div>Loading...</div>}>
                <WorksMain />
                {/*メイン 子でuseSearchParamsを呼び出しているのでSuspenseで囲む*/}
            </Suspense>
            <Footer />
            {/*フッター*/}
        </>
    );
}
