import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import Image from "next/image";

export default function ProfileMain() {
    //現在の年齢を取得する
    const getAge = () => {
        const today = new Date();
        const todayYear = today.getFullYear();
        if (today.getMonth() === 0 && today.getDate() < 22) {
            const age = todayYear - 1998 - 1;
            return age;
        } else {
            const age = todayYear - 1998;
            return age;
        }
    };

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
                    <p className="absolute left-28 top-[14.5px] text-sm whitespace-nowrap">
                        Basic infomation
                    </p>
                    {/*本文----------------------------------------------------------*/}
                    <div className="flex flex-col">
                        <div className="flex flex-col md:flex-row justify-center items-center">
                            <div className="w-30 h-40 mx-auto bg-gray-400 aspect-3/4">
                                {/*写真*/}
                            </div>
                            <div className=" md:ml-10">
                                {/*情報*/}
                                <div className="flex flex-row mt-3 relative">
                                    {/*縦線|*/}
                                    <svg
                                        className={`size-8 stroke-5 stroke-[var(--color-primary)] dark:stroke-[var(--color-dark-primary)] my-auto`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <title> </title>
                                        <line x1="3" y1="0" x2="3" y2="24" />
                                    </svg>
                                    <p className="w-43 text-4xl">渡邉 幹太</p>
                                    <p className="pt-4.5 text-bold whitespace-nowrap">
                                        WATANABE Kanta
                                    </p>
                                    <span className="absolute border-b-1 border-[var(--color-primary)]/50 top-14 w-full"></span>
                                </div>
                                <div className="flex flex-row items-center mt-8">
                                    <p className="w-30 text-xs text-center bg-[var(--color-primary)]/10">
                                        生年月日
                                    </p>
                                    <p className="text-sm ml-10">
                                        1998年1月22日({getAge()}歳)
                                    </p>
                                </div>
                                <div className="flex flex-row items-center mt-2">
                                    <p className="w-30 min-w-30 text-xs text-center bg-[var(--color-primary)]/10">
                                        メールアドレス
                                    </p>
                                    <p className="text-sm ml-10">
                                        wwknt0782@gmail.com
                                    </p>
                                </div>
                                <div className="flex flex-row items-center mt-2">
                                    <p className="w-30 min-w-30 text-xs text-center bg-[var(--color-primary)]/10">
                                        趣味・特技
                                    </p>
                                    <p className="text-sm ml-10">
                                        ドライブ/デザイン・イラスト制作/模型製作(ガンプラ)/ゲーム(おもにドラゴンクエスト)
                                    </p>
                                </div>
                                <div className="flex flex-row items-center mt-2">
                                    <p className="w-30 min-w-30 text-xs text-center bg-[var(--color-primary)]/10">
                                        資格等
                                    </p>
                                    <p className="text-sm ml-10">
                                        普通自動車運転免許(第一種)/ITパスポート/電気主任技術者(第三種)/特殊無線技士(陸上)一級
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="mt-6">
                                おもにWeb制作全般の勉強をしています。制作時には特にサイトの{" "}
                                <strong>見やすさ</strong>，
                                <strong>わかりやすさ</strong>，
                                <strong>操作の気持ちよさ</strong>
                                にこだわっています。また、学生時代から情報工学に関する学習も進めており、学部時代にはC言語，卒業研究ではPythonを用いたデータ処理をおこなっていました。卒業後も情報系の学習を進めており，ITパスポートの資格取得に加え，現在はHTML5、CSS3，JavaScriptの学習を進めています。本サイトはNext.js，TypeScriptを用いて制作しました。
                            </p>
                        </div>
                    </div>
                </div>

                {/*経歴===========================================================================================*/}
                <div className="mt-20 relative">
                    <h2 className=" text-2xl border-b-1 w-full text-left mb-5">
                        <span className=" text-3xl">経</span>歴
                    </h2>
                    <p className="absolute left-16 top-[14.5px] text-sm">
                        Career
                    </p>
                    {/*本文----------------------------------------------------------*/}
                    <div className="flex flex-col justify-center">
                        <p className="text-left">
                            これまでの経歴を時系列で表示しています。
                        </p>
                        <div className="flex flex-row justify-center pt-10">
                            <div className="">
                                {/*縦ライン*/}
                                <svg
                                    className={`h-200 w-20 stroke-4 stroke-[var(--color-text)] dark:stroke-[var(--color-dark-text)] px-0 pt-3`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="80"
                                    height="800"
                                    viewBox="0 0 80 800"
                                >
                                    <title> </title>
                                    <line x1="20" y1="3" x2="20" y2="800" />
                                    {/*縦軸*/}
                                    <line x1="0" y1="3" x2="200" y2="3" />
                                    {/*補助線*/}
                                    <line x1="0" y1="150" x2="200" y2="150" />
                                    {/*補助線*/}
                                    <line x1="0" y1="300" x2="200" y2="300" />
                                    {/*補助線*/}
                                    <line x1="0" y1="500" x2="200" y2="500" />
                                    {/*補助線*/}
                                    <line x1="0" y1="600" x2="200" y2="600" />
                                    {/*補助線*/}
                                    <line x1="0" y1="750" x2="200" y2="750" />
                                    {/*補助線*/}
                                    <line x1="20" y1="800" x2="30" y2="780" />
                                    {/*矢印*/}
                                    <line x1="20" y1="800" x2="10" y2="780" />
                                    {/*矢印*/}
                                </svg>
                            </div>

                            {/*テキスト*/}
                            <div className="relative flex flex-col pl-3 md:pl-10 w-100">
                                <div className="absolute top-0">
                                    <p className=" text-2xl text-[var(--color-primary)]">
                                        1998年
                                    </p>
                                    <div className="px-2 md:px-5 border-1 border-[var(--color-primary)]/30">
                                        <p className="text-sm md:text-lg pb-1">
                                            岐阜県に生まれる
                                        </p>
                                        <ul className="text-xs md:text-md list-disc pl-5">
                                            <li>
                                                小学校，中学校では野球部に所属する。
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="absolute top-36">
                                    <p className=" text-2xl text-[var(--color-primary)]">
                                        2013年
                                    </p>
                                    <div className="px-2 md:px-5 border-1 border-[var(--color-primary)]/30">
                                        <p className="text-sm md:text-lg pb-1">
                                            岐阜県立可児高等学校へ入学
                                        </p>
                                        <ul className="text-xs md:text-md list-disc pl-5">
                                            <li>
                                                家から少し離れた高校に入学したため，片道8kmを自転車で通うことになる。
                                            </li>
                                            <li>
                                                袴にあこがれて弓道部に入部する。
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="absolute top-73">
                                    <p className=" text-2xl text-[var(--color-primary)]">
                                        2016年
                                    </p>
                                    <div className="px-2 md:px-5 border-1 border-[var(--color-primary)]/30">
                                        <p className="text-sm md:text-lg">
                                            岐阜県立可児高等学校を卒業
                                        </p>
                                        <p className="text-sm md:text-lg pb-1">
                                            名古屋大学工学部へ入学
                                        </p>
                                        <ul className="text-xs md:text-md list-disc pl-5">
                                            <li>
                                                電気・情報系に興味を持ち，工学部に入学する。
                                            </li>
                                            <li>
                                                C言語の講義で初めてプログラミングに触れる。
                                            </li>
                                            <li>
                                                研究の一環でPythonを学び，データ処理に活用する。
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="absolute top-122">
                                    <p className=" text-2xl text-[var(--color-primary)]">
                                        2020年
                                    </p>
                                    <div className="px-2 md:px-5 border-1 border-[var(--color-primary)]/30">
                                        <p className="text-sm md:text-lg">
                                            大学を卒業
                                        </p>
                                        <p className="text-sm md:text-lg pb-1">
                                            名古屋大学大学院へ入学
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute top-146">
                                    <p className=" text-2xl text-[var(--color-primary)]">
                                        2022年
                                    </p>
                                    <div className="px-2 md:px-5 border-1 border-[var(--color-primary)]/30">
                                        <p className="text-sm md:text-lg">
                                            大学院を卒業
                                        </p>
                                        <p className="text-sm md:text-lg pb-1">
                                            電力会社へ就職
                                        </p>
                                        <ul className="text-xs md:text-md list-disc pl-5">
                                            <li>
                                                研究で学んだ知識を生かしたいと思い，電力会社に就職する。
                                            </li>
                                            <li>
                                                Web開発に興味を持ち，HTML/CSSを学びはじめる。
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="absolute top-183">
                                    <p className=" text-2xl text-[var(--color-primary)]">
                                        2025年
                                    </p>
                                    <div className="px-2 md:px-5 border-1 border-[var(--color-primary)]/30">
                                        <p className="text-sm md:text-lg pb-1">
                                            転職活動を開始
                                        </p>
                                        <ul className="text-xs md:text-md list-disc pl-5">
                                            <li>
                                                Web開発を仕事にしたいと思うようになり，転職活動を開始する。
                                            </li>
                                            <li>
                                                ポートフォリオサイトを制作する。
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
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
