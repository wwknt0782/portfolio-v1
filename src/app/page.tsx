//トップページ
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeMain from "@/features/home/HomeMain";

import SetPageAttribute from "@/components/SetPageAttribute";

export default function Home() {
	SetPageAttribute();
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
