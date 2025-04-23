import PageTitle from "@/components/PageTitle";

export default function ProfileMain() {
    return (
        <main className="grow mt-16 overflow-auto">
            <div className="mx-4 md:px-10 lg:px-20">
                {/*ページタイトル===========================================================================================*/}
                <div
                    className="h-[250px] 
					flex flex-col justify-center
					text-left whitespace-nowrap"
                >
                    <PageTitle title="profile" />
                    <p className="mt-8 ml-2">
                        当サイトの作者の情報を掲載しています。
                    </p>
                </div>

                {/*基本情報===========================================================================================*/}
                <div className=" mt-20 relative">
                    <h2 className="text-2xl border-b-1 w-full text-left mb-8">
                        <span className="text-3xl">基</span>本情報
                    </h2>
                    <p className="absolute left-28 top-[14.5px] text-sm">
                        Basic infomation
                    </p>
                    {/*本文----------------------------------------------------------*/}
                    <div className="flex flex-col">
                        <div className="md:flex flex-row">
                            <div className="w-30 h-40 mx-auto bg-gray-400 hidden">
                                {/*写真*/}
                            </div>
                            <div className="">
                                {/*情報*/}
                                <div className="flex flex-row mt-3 relative">
                                    <p className="w-43 text-4xl">渡邉 幹太</p>
                                    <p className="pt-4.5 text-bold">
                                        Watanabe Kanta
                                    </p>
                                    <span className="absolute top-8 border-b-9 border-[var(--color-primary)]/40 w-100">
                                        {" "}
                                    </span>
                                </div>
                                <div className="flex flex-row items-center mt-3">
                                    <p className="w-35 text-xs text-center">
                                        生年月日
                                    </p>
                                    <p className="text-md">
                                        1998年 1月 22日 (27歳)
                                    </p>
                                </div>
                                <div className="flex flex-row items-center mt-1">
                                    <p className="w-35 text-xs text-center">
                                        メールアドレス
                                    </p>
                                    <p className="text-md">
                                        wwknt0782@gmail.com
                                    </p>
                                </div>
                                <div className="flex flex-row items-center mt-1">
                                    <p className="w-35 text-xs text-center">
                                        趣味・特技
                                    </p>
                                    <p className="text-md">
                                        イラスト，ゲーム(主にRPG)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="mt-6">
                                おもにWeb制作全般の勉強をしています。制作時には特にサイトの見やすさ，わかりやすさ，操作の気持ちよさにこだわっています。また、学生時代から情報工学に関する学習も進めており、Pythonについては自己学習の上で研究のデータ処理に活用していました。卒業後はITパスポートの資格取得に加え，現在HTML5、CSS3，JavaScriptの学習を進めています。
                            </p>
                        </div>
                    </div>
                </div>

                {/*経歴===========================================================================================*/}
                <div className="mt-30 relative">
                    <h2 className=" text-2xl border-b-1 w-full text-left mb-15">
                        <span className=" text-3xl">経</span>歴
                    </h2>
                    <p className="absolute left-16 top-[14.5px] text-sm">
                        Career
                    </p>
                    {/*本文----------------------------------------------------------*/}
                    <div className="flex flex-col justify-center items-center">
                        <div>{/*縦ライン*/}</div>
                        <div>
                            <div>{/*年*/}</div>
                            <div>{/*概略*/}</div>
                        </div>
                    </div>
                </div>

                {/*スキル===========================================================================================*/}
                <div className=" mt-20 relative">
                    <h2 className="text-2xl border-b-1 w-full text-left mb-8">
                        <span className="text-3xl">ス</span>キル
                    </h2>
                    <p className="absolute left-22 top-[14.5px] text-sm">
                        Skills
                    </p>
                    {/*本文----------------------------------------------------------*/}
                    <div className="flex flex-col items-center justify-center">
                        <div>{/*スキルカード*/}</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
