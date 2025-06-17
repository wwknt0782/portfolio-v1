import PageTransitionButton from "@/components/PageTransitionButton";
import { CalendarDays } from "lucide-react";
import {
    WorksCard01,
    WorksCard02,
    WorksCard03,
} from "@/features/works/WorksCards";
import { AnimatedLink } from "@/components/PageTransition";

export default function HomeMain() {
    return (
        <main className="grow mt-16 overflow-auto">
            {/*プロフィール===========================================================================================*/}
            <div
                className="h-[250px] 
			bg-[url('/top.svg')] dark:bg-[url('/top.svg')]
			bg-cover bg-center bg-no-repeat
			flex flex-col justify-center
			text-center whitespace-nowrap"
            >
                <p>ご覧いただきありがとうございます。</p>
                <div className="flex flex-col md:flex-row justify-center">
                    <p className="mt-1">
                        こちらは{process.env.NEXT_PUBLIC_MY_NAME}の
                    </p>
                    <p className="mt-1">ポートフォリオサイトです。</p>
                </div>

                {/*プロフィールリンク----------------------------------------*/}
                <div className="mt-6 w-fit mx-auto">
                    <AnimatedLink href="/profile">
                        <PageTransitionButton
                            type="button"
                            buttonName="プロフィールを見る"
                            theme="profile"
                        />
                    </AnimatedLink>
                </div>
            </div>

            <div className="mx-4 md:px-10 lg:px-20">
                {/*制作実績===========================================================================================*/}
                <div className=" mt-20 relative">
                    <h2 className="text-2xl border-b-1 w-full text-left mb-8 text-green-700">
                        <span className="text-3xl">制</span>作実績
                    </h2>
                    <p className="absolute left-28 top-[14.5px] text-sm text-green-700">
                        Works
                    </p>
                    <div className="flex flex-col items-center justify-center">
                        {/*サムネイル----------------------------------------*/}
                        <div className="max-w-[75rem] px-4 sm:px-6 lg:px-8 mx-auto">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <AnimatedLink
                                    href="/works?from=home&to=modal01"
                                    className="flex flex-col grow"
                                >
                                    <WorksCard01 />
                                </AnimatedLink>
                                <AnimatedLink
                                    href="/works?from=home&to=modal02"
                                    className="flex flex-col grow"
                                >
                                    <WorksCard02 />
                                </AnimatedLink>

                                <WorksCard03 />
                            </div>
                        </div>

                        {/*制作実績リンク----------------------------------------*/}
                        <div className="mt-10">
                            <AnimatedLink href="/works">
                                <PageTransitionButton
                                    type="button"
                                    buttonName="制作実績を見る"
                                    theme="works"
                                />
                            </AnimatedLink>
                        </div>
                    </div>
                </div>

                {/*お問い合わせ===========================================================================================*/}
                <div className="mt-30 relative">
                    <h2 className=" text-2xl border-b-1 w-full text-left mb-15 text-purple-800">
                        <span className=" text-3xl">お</span>問い合わせ
                    </h2>
                    <p className="absolute left-40 top-[14.5px] text-sm text-purple-800">
                        Contact
                    </p>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-center mb-5">
                            お問い合わせ事項がございましたら，お気軽にご連絡ください。
                        </p>

                        {/*お問い合わせリンク----------------------------------------*/}
                        <div className="mt-4">
                            <AnimatedLink href="/contact">
                                <PageTransitionButton
                                    type="button"
                                    buttonName="お問い合わせはこちら"
                                    theme="contact"
                                />
                            </AnimatedLink>
                        </div>
                    </div>
                </div>

                {/*更新履歴---------------------------------------------------*/}
                <div className="mt-30 relative">
                    <h2 className=" text-2xl border-b-1 w-full text-left mb-15">
                        <span className=" text-3xl">更</span>新履歴
                    </h2>
                    <p className="absolute left-29 top-[14.5px] text-sm">
                        Update history
                    </p>

                    <div className="">
                        <ol>
                            <li>
                                {/*更新履歴1 サイト公開*/}
                                <div className="flex flex-row pt-1">
                                    {/*縦線|*/}
                                    <svg
                                        className={`size-10 stroke-3 stroke-[var(--color-primary)] dark:stroke-[var(--color-dark-primary)] my-auto`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <title> </title>
                                        <line x1="16" y1="0" x2="16" y2="24" />
                                    </svg>
                                    <div className="w-full mr-5">
                                        <p className="text-sm text-[var(--color-primary)]">
                                            <CalendarDays className="inline-block size-4 mb-1 mr-1" />
                                            2025.04.30
                                        </p>

                                        <p className=" border-b-1 border-[var(--color-primary)]">
                                            サイトを公開しました。
                                        </p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                {/*更新履歴2 ページ遷移アニメーション追加*/}
                                <div className="flex flex-row pt-4">
                                    {/*縦線|*/}
                                    <svg
                                        className={`size-10 stroke-3 stroke-[var(--color-primary)] dark:stroke-[var(--color-dark-primary)] my-auto`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <title> </title>
                                        <line x1="16" y1="0" x2="16" y2="24" />
                                    </svg>
                                    <div className="w-full mr-5">
                                        <p className="text-sm text-[var(--color-primary)]">
                                            <CalendarDays className="inline-block size-4 mb-1 mr-1" />
                                            2025.05.08
                                        </p>

                                        <p className=" border-b-1 border-[var(--color-primary)]">
                                            ページ遷移アニメーションを追加しました。
                                        </p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                {/*更新履歴3 制作実績にtodolist追加*/}
                                <div className="flex flex-row pt-4">
                                    {/*縦線|*/}
                                    <svg
                                        className={`size-10 stroke-3 stroke-[var(--color-primary)] dark:stroke-[var(--color-dark-primary)] my-auto`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <title> </title>
                                        <line x1="16" y1="0" x2="16" y2="24" />
                                    </svg>
                                    <div className="w-full mr-5">
                                        <p className="text-sm text-[var(--color-primary)]">
                                            <CalendarDays className="inline-block size-4 mb-1 mr-1" />
                                            2025.06.17
                                        </p>

                                        <p className=" border-b-1 border-[var(--color-primary)]">
                                            製作実績に「タスク管理アプリ」を追加しました。
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </main>
    );
}
