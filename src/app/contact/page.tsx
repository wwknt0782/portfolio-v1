//お問い合わせページ
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactMain from "@/features/contact/ContactMain";

import SetPageAttribute from "@/components/SetPageAttribute";

export default function Home() {
	SetPageAttribute();
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
