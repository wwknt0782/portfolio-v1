//お問い合わせ内容確認ページ
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageBackButton from "@/components/PageBackButton";
import PageTitle from "@/components/PageTitle";
import PageTransitionButton from "@/components/PageTransitionButton";
import { useFormStore } from "@/store/FormStore";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendContactForm } from "@/lib/contactApi";

export default function Home() {
    const [msg, setMsg] = useState("");
    const router = useRouter();
    const { data } = useFormStore(); //zustandに保存したデータを取得

    //送信ボタンが押されたらフォームデータを送信===================================================
    const sendForm = async () => {
        try {
            await sendContactForm({
                name: data.name,
                companyName: data.company,
                email: data.email,
                message: data.text,
            });

            setMsg(""); //エラーメッセージ削除
            await router.push("/contact/complete"); //送信完了ページに遷移
        } catch (error) {
            setMsg(
                "フォームの送信に失敗しました。しばらく時間をあけてから再度お試しください。"
            );
            console.error(
                "ネットワークまたはデータにエラーがあります: ",
                error
            );
        }
    };

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
                    <div>
                        <p className="text-red-600">{msg}</p>
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
                        <div className="flex flex-col-reverse md:flex-row gap-5 mt-10 ">
                            {/*ボタン*/}
                            {/*戻るボタン*/}
                            <div className="">
                                <Link href="/contact">
                                    <PageBackButton
                                        buttonName="戻る"
                                        theme="gray"
                                    />
                                </Link>
                            </div>
                            {/*確認ボタン*/}

                            <div className="">
                                <PageTransitionButton
                                    type="button"
                                    buttonName="送信する"
                                    onClick={sendForm}
                                    theme="contact"
                                />
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
