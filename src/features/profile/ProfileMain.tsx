import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import Image from "next/image";

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
                    <h2 className="text-2xl border-b-1 w-full text-left mb-5">
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
                                    <p className="w-43 text-4xl">{/*氏名*/}</p>
                                    <p className="pt-4.5 text-bold">
                                        {/*name*/}
                                    </p>
                                    <span className="absolute top-8 border-b-9 border-[var(--color-primary)]/40 w-100">
                                        {" "}
                                    </span>
                                </div>
                                <div className="flex flex-row items-center mt-3">
                                    <p className="w-35 text-xs text-center">
                                        生年月日
                                    </p>
                                    <p className="text-md">{/*生年月日*/}</p>
                                </div>
                                <div className="flex flex-row items-center mt-1">
                                    <p className="w-35 text-xs text-center">
                                        メールアドレス
                                    </p>
                                    <p className="text-md">
                                        {/*メールアドレス*/}
                                    </p>
                                </div>
                                <div className="flex flex-row items-center mt-1">
                                    <p className="w-35 text-xs text-center">
                                        趣味・特技
                                    </p>
                                    <p className="text-md">{/*趣味・特技*/}</p>
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
                    <h2 className=" text-2xl border-b-1 w-full text-left mb-5">
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
                    <h2 className="text-2xl border-b-1 w-full text-left mb-5">
                        <span className="text-3xl">ス</span>キル
                    </h2>
                    <p className="absolute left-22 top-[14.5px] text-sm">
                        Skills
                    </p>
                    {/*本文----------------------------------------------------------*/}
                    <div className="flex flex-col justify-center">
                        <p className="text-left">
                            開発に使用した経験のある言語，ツール等を掲載しています。
                        </p>
                        <div className="flex flex-col items-center justify-center mt-12">
                            <h3 className="text-2xl mb-3 text-center">
                                ― 言語 ―
                            </h3>
                            <div className="grid gap-3 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                                {/*スキルカード*/}
                                <Image
                                    src="/icon-html5.svg"
                                    alt="icon-html5"
                                    width="200"
                                    height="200"
                                    priority={true}
                                ></Image>
                                <Image
                                    src="/icon-css3.svg"
                                    alt="icon-css3"
                                    width="200"
                                    height="200"
                                    priority={true}
                                ></Image>
                                <Image
                                    src="/icon-javascript.svg"
                                    alt="icon-javascript"
                                    width="200"
                                    height="200"
                                    priority={true}
                                ></Image>
                                <Image
                                    src="/icon-typescript.svg"
                                    alt="icon-typescript"
                                    width="200"
                                    height="200"
                                    priority={true}
                                ></Image>
                                <Image
                                    src="/icon-python.svg"
                                    alt="icon-python"
                                    width="200"
                                    height="200"
                                    priority={true}
                                ></Image>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center mt-12">
                            <h3 className="text-2xl mb-3 text-center">
                                ― ライブラリ・フレームワーク ―
                            </h3>
                            <div className="grid gap-3 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                                {/*スキルカード*/}
                                <Image
                                    src="/icon-react.svg"
                                    alt="icon-react"
                                    width="200"
                                    height="200"
                                    priority={true}
                                ></Image>
                                <Image
                                    src="/icon-next.svg"
                                    alt="icon-next"
                                    width="200"
                                    height="200"
                                    priority={true}
                                ></Image>
                                <Image
                                    src="/icon-tailwindcss.svg"
                                    alt="icon-tailwindcss"
                                    width="200"
                                    height="200"
                                    priority={true}
                                ></Image>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center mt-12">
                            <h3 className="text-2xl mb-3 text-center">
                                ― その他ツール等 ―
                            </h3>
                            <div className="grid gap-3 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                                {/*スキルカード*/}
                                <Image
                                    src="/icon-vscode.svg"
                                    alt="icon-vscode"
                                    width="200"
                                    height="200"
                                    priority={true}
                                ></Image>
                                <Image
                                    src="/icon-node.svg"
                                    alt="icon-node"
                                    width="200"
                                    height="200"
                                    priority={true}
                                ></Image>
                                <Image
                                    src="/icon-github.svg"
                                    alt="icon-github"
                                    width="200"
                                    height="200"
                                    priority={true}
                                ></Image>
                                <Image
                                    src="/icon-figma.svg"
                                    alt="icon-figma"
                                    width="200"
                                    height="200"
                                    priority={true}
                                ></Image>
                                <Image
                                    src="/icon-clipstudio.svg"
                                    alt="icon-clipstudio"
                                    width="200"
                                    height="200"
                                    priority={true}
                                ></Image>
                            </div>
                        </div>
                    </div>
                    {/*スキル本文*/}
                    <div className="mt-10">
                        {/*ライセンス・リンク*/}
                        <p>
                            {/*言語*/}
                            <Link href="https://www.w3.org/html/logo/#downloads">
                                W3C HTML5 Logo
                            </Link>
                            {" / "}
                            <Link href="https://commons.wikimedia.org/wiki/File:CSS3_logo.svg">
                                CSS3 logo via Wikimedia Commons
                            </Link>
                            {" / "}
                            <Link href="https://github.com/voodootikigod/logo.js/">
                                JS Logo By The Community
                            </Link>
                            {" / "}
                            <Link href="https://www.typescriptlang.org/branding/">
                                TypeScript: Branding
                            </Link>
                            {" / "}
                            <Link href="https://www.python.org/community/logos/">
                                Python Software Foundation
                            </Link>
                            {/*ライブラリ・フレームワーク*/}
                            {" / "}
                            <Link href="https://github.com/facebook/react/blob/cae635054e17a6f107a39d328649137b83f25972/fixtures/dom/public/react-logo.svg">
                                React
                            </Link>
                            {" / "}
                            <Link href="https://vercel.com/geist/brands#next-js">
                                Vercel
                            </Link>
                            {" / "}
                            <Link href="https://tailwindcss.com/brand">
                                TailwindCSS
                            </Link>
                            {/*その他ツール等*/}
                            {" / "}
                            <Link href="https://code.visualstudio.com/brand">
                                Visual Studio Code
                            </Link>
                            {" / "}
                            <Link href="https://nodejs.org/ja/about/branding">
                                Node.js
                            </Link>
                            {" / "}
                            <Link href="https://github.com/logos">GitHub</Link>
                            {" / "}
                            <Link href="https://www.figma.com/ja-jp/using-the-figma-brand/#figma-trademark-guidelines">
                                Figma
                            </Link>
                            {" / "}
                            <Link href="https://icons8.jp/">ICON8</Link>
                        </p>
                    </div>
                </div>
                {/*スキル*/}
            </div>
        </main>
    );
}
