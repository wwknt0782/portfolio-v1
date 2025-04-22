import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageBackButton from "@/components/PageBackButton";
import SetPageAttribute from "@/components/SetPageAttribute";
import Link from "next/link";

export default function NotFound() {
	return (
		<div
			className="flex flex-col min-h-screen theme-404
        bg-[var(--color-secondary)] dark:bg-[var(--color-dark-secondary)]
        dark:text-[var(--color-dark-text)]"
		>
			<Header />
			<div className="grow flex flex-col items-center justify-center text-center mt-16">
				<h2 className="text-5xl text-[var(--color-primary)] dark:text-[var(--color-dark-primary)] ">
					Not Found
				</h2>
				<p className="mt-3 mb-8">お探しのページが見つかりません</p>
				<div>
					<Link href="/">
						<PageBackButton buttonName="HOMEへ戻る" theme="home" />
					</Link>
				</div>
			</div>

			<Footer />
		</div>
	);
}
