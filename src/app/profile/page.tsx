//プロフィールページ
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProfileMain from "@/features/profile/ProfileMain";

import SetPageAttribute from "@/components/SetPageAttribute";

export default function Home() {
	SetPageAttribute();
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
