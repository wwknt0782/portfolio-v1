//テスト用
"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import PageTransitionButton from "@/components/PageTransitionButton";

import { FormSchema } from "@/constants/FormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "next/form";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { z } from "zod";

export default function ContactMain() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: { name: "", company: "", email: "", text: "" },
        resolver: zodResolver(FormSchema),
    });

    const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = () => {
        if (errors) {
            console.log(errors);
        }
    };

    //const inputName = watch("name");

    return (
        <div>
            <Header />
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

                    <Form
                        action="/confirm"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                    >
                        <div>
                            {errors && (
                                <p className="text-red-600 pb-4">
                                    入力項目に誤りがあります。
                                </p>
                            )}
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
                                <input
                                    type="text"
                                    id="name"
                                    {...register("name")}
                                    placeholder=""
                                    required
                                    className="border-2 border-[var(--color-primary)]/40 rounded-md p-2"
                                />
                                <div>
                                    {/*エラーメッセージ*/}
                                    {errors.name && (
                                        <p className="text-red-600">
                                            {errors.name.message}
                                        </p>
                                    )}
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
                                <input
                                    type="text"
                                    id="company"
                                    {...register("company")}
                                    placeholder=""
                                    className="border-2 border-[var(--color-primary)]/40 rounded-md p-2"
                                />
                                <div>
                                    {/*エラーメッセージ*/}
                                    {errors.company && (
                                        <p className="text-red-600">
                                            {errors.company.message}
                                        </p>
                                    )}
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
                                <input
                                    type="email"
                                    id="email"
                                    {...register("email")}
                                    placeholder="abc@example.com"
                                    className="border-2 border-[var(--color-primary)]/40 rounded-md p-2"
                                />
                                <div>
                                    {/*エラーメッセージ*/}
                                    {errors.email && (
                                        <p className="text-red-600">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
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
                                <textarea
                                    id="text"
                                    {...register("text")}
                                    className="h-[176px] border-2 border-[var(--color-primary)]/40 rounded-md p-2 leading-5"
                                />
                                <div>
                                    {/*エラーメッセージ*/}
                                    {errors.text && (
                                        <p className="text-red-600">
                                            {errors.text.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            {/*確認ボタン*/}
                            <div className="mt-10">
                                <PageTransitionButton
                                    type="submit"
                                    buttonName="入力内容を確認する"
                                    theme="contact"
                                />
                            </div>
                        </div>
                    </Form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
