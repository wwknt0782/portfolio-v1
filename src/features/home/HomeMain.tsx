import PageTransitionButton from "@/components/PageTransitionButton";
import {
    WorksCard01,
    WorksCard02,
    WorksCard03,
} from "@/features/works/WorksCards";
import Link from "next/link";

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
                    <p className="mt-1">こちらは渡邉幹太の</p>
                    <p className="mt-1">ポートフォリオサイトです。</p>
                </div>

                {/*プロフィールリンク----------------------------------------*/}
                <div className="mt-6">
                    <Link href="/profile">
                        <PageTransitionButton
                            type="button"
                            buttonName="プロフィールを見る"
                            theme="profile"
                        />
                    </Link>
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
                                <Link
                                    href="/works"
                                    className="flex flex-col grow"
                                >
                                    <WorksCard01 />
                                </Link>
                                <Link
                                    href="/works"
                                    className="flex flex-col grow"
                                >
                                    <WorksCard02 />
                                </Link>
                                <Link
                                    href="/works"
                                    className="flex flex-col grow"
                                >
                                    <WorksCard03 />
                                </Link>
                            </div>
                        </div>

                        {/*制作実績リンク----------------------------------------*/}
                        <div className="mt-10">
                            <Link href="/works">
                                <PageTransitionButton
                                    type="button"
                                    buttonName="制作実績を見る"
                                    theme="works"
                                />
                            </Link>
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
                            <Link href="/contact">
                                <PageTransitionButton
                                    type="button"
                                    buttonName="お問い合わせはこちら"
                                    theme="contact"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
