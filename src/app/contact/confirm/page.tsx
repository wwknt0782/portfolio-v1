//お問い合わせ内容確認ページ
"use client";

import { POST } from "@/app/api/send/route";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageBackButton from "@/components/PageBackButton";
import PageTitle from "@/components/PageTitle";
import PageTransitionButton from "@/components/PageTransitionButton";
import SetPageAttribute from "@/components/SetPageAttribute";
import ContactMain from "@/features/contact/ContactMain";
import { useFormStore } from "@/store/FormStore";
import Form from "next/form";
import Link from "next/link";
import { type SubmitHandler, useForm } from "react-hook-form";

export default function Home() {
	const { handleSubmit } = useForm({
		defaultValues: { name: "", company: "", email: "", text: "" },
	});
	const { data } = useFormStore();

	const onSubmit = async () => {
		try {
			console.log("フォーム送信開始");

			const response = await fetch("/api/send", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ sendTo: data.email }),
			});
			console.log(data.email);

			if (!response.ok) throw new Error("送信に失敗しました");

			console.log("フォーム送信成功");
		} catch (err) {
			console.error("フォーム送信エラー:", err);
		}
	};

	SetPageAttribute("contact"); //テーマカラーをセット
	return (
		<>
			<Header />
			{/*ヘッダー*/}

			<main className="grow mt-16 overflow-auto">
				<div className="mx-4 md:px-10 lg:px-20">
					{/*ページタイトル===========================================================================================*/}
					<div
						className="h-[250px] 
                    flex flex-col justify-center
                    text-left whitespace-nowrap"
					>
						<PageTitle title="contact" />
					</div>

					<div className="flex flex-col items-center mx-auto w-50vw max-w-200">
						{/*お名前----------------------------------------------*/}
						<div className="flex flex-col w-full">
							<label
								htmlFor="inputName"
								className="text-xl flex items-center my-2"
							>
								お名前
								<strong className="inline-block text-sm text-[var(--color-home-secondary)] bg-red-600 mx-4 px-2 py-0.5 rounded-sm">
									必須
								</strong>
							</label>
							<div>
								<p>{data.name}</p>
							</div>
						</div>
						{/*会社名----------------------------------------------*/}
						<div className="flex flex-col w-full mt-10">
							<label
								htmlFor="inputCompany"
								className="text-xl flex items-center my-2"
							>
								会社名{" "}
								<strong className="inline-block text-sm text-[var(--color-home-secondary)] bg-sky-500 mx-4 px-2 py-0.5 rounded-sm">
									任意
								</strong>
							</label>
							<div>
								<p>{data.company}</p>
							</div>
						</div>
						{/*メールアドレス----------------------------------------------*/}
						<div className="flex flex-col w-full mt-10">
							<label
								htmlFor="inputMail"
								className="text-xl flex items-center my-2"
							>
								メールアドレス{" "}
								<strong className="inline-block text-sm text-[var(--color-home-secondary)] bg-red-600 mx-4 px-2 py-0.5 rounded-sm">
									必須
								</strong>
							</label>
							<div>{data.email}</div>
						</div>
						{/*お問い合わせ内容----------------------------------------------*/}
						<div className="flex flex-col w-full mt-10 ">
							<label
								htmlFor="inputText"
								className="text-xl flex items-center my-2"
							>
								お問い合わせ内容{" "}
								<strong className="inline-block text-sm text-[var(--color-home-secondary)] bg-red-600 mx-4 px-2 py-0.5 rounded-sm">
									必須
								</strong>
							</label>
							<div>{data.text}</div>
						</div>
						<div className="flex flex-row mt-10">
							{/*ボタン*/}
							{/*戻るボタン*/}
							<div className="">
								<Link href="/contact">
									<PageBackButton buttonName="戻る" theme="gray" />
								</Link>
							</div>
							{/*確認ボタン*/}

							<div className="ml-5">
								<Form action="/" onSubmit={handleSubmit(onSubmit)} noValidate>
									<PageTransitionButton
										type="submit"
										buttonName="送信する"
										theme="contact"
									/>
								</Form>
							</div>
						</div>
					</div>
				</div>
			</main>

			<Footer />
			{/*フッター*/}
		</>
	);
}
