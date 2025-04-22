//制作実績ページ
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WorksMain from "@/features/works/WorksMain";

import SetPageAttribute from "@/components/SetPageAttribute";

export default function Home() {
	SetPageAttribute();
	return (
		<>
			<Header />
			{/*ヘッダー*/}

			<WorksMain />
			{/*メイン*/}

			<Footer />
			{/*フッター*/}
		</>
	);
}
