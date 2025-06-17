"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Globe,
    Github,
    Code,
    Frame,
    Palette,
    SquareArrowOutUpRight,
} from "lucide-react";

//modalの型指定
export type ModalType = {
    open: "modal01" | "modal02" | "modal03" | "close";
    onCancel: () => void;
};

//↓モーダル内テキストはここに記入==========================================================================================
const modalData = {
    //クローズ時-----------------------------------------------------------------------------------
    close: {
        siteTitle: <></>,
        siteUrl: "",
        gitHubUrl: "",
        imgSrc: "",
        imgAlt: "",
        tags: (
            <h5 className="mt-3 text-sm text-[var(--color-works-primary)]"></h5>
        ),
        header: <></>,
        text: <></>,
        languages: <></>,
        frameworks: <></>,
        designs: <></>,
    },

    //モーダル01 ポートフォリオサイト----------------------------------------------------------------
    modal01: {
        siteTitle: <>K-WATANABE</>,
        siteUrl: "https://k-watanabe.com",
        gitHubUrl: "https://github.com/wwknt0782/portfolio-v1",
        imgSrc: "/img_portfolio.jpg",
        imgAlt: "portfolio site",
        tags: (
            <h5 className="mt-3 text-sm text-[var(--color-works-primary)]">
                #Webサイト
            </h5>
        ),
        header: (
            <>
                ポートフォリオサイト
                <br className="md:hidden" />
                (本サイト)
            </>
        ),
        text: (
            <>
                ページごとのテーマカラーで色どりを与えつつ，アニメーションで気持ちのよい操作感を目指しました。ボタン等のUIはコンポーネント化して各ページで流用し，異なるテーマ色を使いながらもページ全体に統一感が出るようにしました。ページには適度な余白を持たせて見やすさを確保しています。各画面幅ごとにブレイクポイントを設定し，PC
                ，タブレット，スマートフォンいずれのデバイスで表示しても見やすさが確保されるようにしています。お問い合わせフォームではフォーム管理全般にReact-hook-form，データの保存にzustand，バリデーションにzod，メール送信に外部サービスのResendを使用しています。
                `
            </>
        ),
        languages: <>TypeScript</>,
        frameworks: (
            <>
                Next.js/React/
                <br className="md:hidden" />
                TailwindCSS
            </>
        ),
        designs: <>Figma</>,
    },

    //モーダル02 サンプルサイト----------------------------------------------------------------------
    modal02: {
        siteTitle: <>WCB-Cafe</>,
        siteUrl: "https://wwknt0782.github.io/sample-wcb-cafe/",
        gitHubUrl: "https://github.com/wwknt0782/sample-wcb-cafe",
        imgSrc: "/img_wcb.jpg",
        imgAlt: "sample site",
        tags: (
            <h5 className="mt-3 text-sm text-[var(--color-works-primary)]">
                #Webサイト
            </h5>
        ),
        header: <>サンプルサイト</>,
        text: (
            <>
                教本をもとにHTML5+CSS3で作成したサンプルサイトです。
                架空の喫茶店の店舗サイトで，index, news, menu,
                contactページから構成されています。
                PC用のレイアウトを基本とし，スマホ用にレスポンシブ対応しています。
            </>
        ),
        languages: <>HTML5/CSS3</>,
        frameworks: <>なし</>,
        designs: <>なし</>,
    },

    //モーダル02 サンプルサイト----------------------------------------------------------------------
    modal03: {
        siteTitle: <>To-Do-List</>,
        siteUrl: "https://to-do-list-pi-sepia-37.vercel.app/",
        gitHubUrl: "https://github.com/wwknt0782/to-do-list",
        imgSrc: "/img_todolist.jpg",
        imgAlt: "To Do List Application",
        tags: (
            <h5 className="mt-3 text-sm text-[var(--color-contact-primary)]">
                #Webアプリ
            </h5>
        ),
        header: <>タスク管理アプリ</>,
        text: (
            <>
                シンプルなタスク管理アプリです。
                タスクの追加，編集，完了チェック，削除が可能です。
                各タスクには期限と優先度を設定することができます。
                ページをリロードしても情報が保存されます。
            </>
        ),
        languages: <>TypeScript</>,
        frameworks: (
            <>
                Next.js/React/
                <br className="md:hidden" />
                TailwindCSS
            </>
        ),
        designs: <>Figma</>,
    },
};
//↑モーダル内テキストはここに記入==========================================================================================

//モーダルウィンドウ====================================================================================================
export const WorksModal = (props: ModalType) => {
    const data = modalData[props.open as keyof typeof modalData];

    //モーダル表示中のスクロール禁止------------------------
    useEffect(() => {
        if (props.open != "close") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [props.open]);
    //---------------------------------------------------

    return (
        <AnimatePresence mode="wait">
            {props.open != "close" && (
                <motion.div
                    className="z-60 fixed inset-0 m-auto flex flex-col items-center max-w-[90vw] max-h-[80vh] overflow-y-auto
            bg-[var(--color-secondary)] shadow-md rounded-md"
                    key="WorksModal01"
                    initial={{ x: -80, opacity: 0 }} //オープン,クローズ時のアニメーション
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 80, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {/*閉じるボタン--------------------------------------------------------------------------------------*/}
                    <div className="w-full pt-3 pr-4">
                        <div className=" flex flex-row justify-end">
                            <button
                                type="button"
                                onClick={props.onCancel}
                                className="cursor-pointer p-2 border-2 rounded-full"
                            >
                                <svg
                                    className="size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <title> </title>
                                    <line
                                        x1="1"
                                        y1="1"
                                        x2="23"
                                        y2="23"
                                        className="origin-center"
                                    />
                                    <line
                                        x1="23"
                                        y1="1"
                                        x2="1"
                                        y2="23"
                                        className="origin-center"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="px-5 md:px-15">
                        {/*モーダル上部のリンク--------------------------------------------------------------------------------------*/}
                        <div className="flex flex-col justify-start w-full pb-4">
                            {/*サイトのリンク---------------------------------------*/}
                            <p className="pb-1">
                                <Globe className="size-4 inline-block mr-1" />:
                                <Link
                                    href={data.siteUrl}
                                    target="_blank"
                                    className="ml-2 border-b-1 text-[var(--color-home-primary)]"
                                >
                                    {data.siteTitle}
                                    <SquareArrowOutUpRight className="size-3 inline-block ml-1 mb-0.5" />
                                </Link>
                            </p>

                            {/*GitHubのリンク---------------------------------------*/}
                            <p>
                                <Github className="size-4 inline-block mr-1" />:
                                <Link
                                    href={data.gitHubUrl}
                                    target="_blank"
                                    className="ml-2 border-b-1 text-[var(--color-home-primary)]"
                                >
                                    GitHub
                                    <SquareArrowOutUpRight className="size-3 inline-block ml-1 mb-0.5" />
                                </Link>
                            </p>
                        </div>

                        {/*メイン画像--------------------------------------------------------------------------------------*/}
                        <div className="border-1 mx-auto">
                            <Image
                                className="w-full aspect-18/9 object-cover rounded-md"
                                src={data.imgSrc}
                                alt={data.imgAlt}
                                width="1600"
                                height="900"
                                priority={true}
                            />
                        </div>

                        {/*サイト説明--------------------------------------------------------------------------------------*/}
                        <div>{data.tags}</div>

                        <div className="mt-4">
                            <h3 className="text-xl font-bold">{data.header}</h3>
                            <p className="mt-5">{data.text}</p>
                        </div>

                        {/*使用ツール等--------------------------------------------------------------------------------------*/}
                        <div className="py-8">
                            <table className="text-left mt-5">
                                <tbody>
                                    <tr>
                                        <th className="pr-2 pb-1">
                                            <Code className="size-4 inline-block mx-1 text-[var(--color-primary)]" />
                                            言語
                                        </th>
                                        <td className="pl-5">
                                            {data.languages}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="pr-2 pb-1">
                                            <Frame className="size-4 inline-block mx-1 text-[var(--color-primary)]" />
                                            フレームワーク
                                        </th>
                                        <td className="pl-5">
                                            {data.frameworks}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="pr-2 pb-1">
                                            <Palette className="size-4 inline-block mx-1 text-[var(--color-primary)]" />
                                            デザイン
                                        </th>
                                        <td className="pl-5">{data.designs}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>
            )}
            {props.open != "close" && ( //グレー背景
                <motion.div
                    className="fixed inset-0 z-50 w-screen h-screen bg-gray-400/50"
                    onClick={props.onCancel}
                    initial={{ x: 0, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 0, opacity: 0 }}
                    transition={{ duration: 0 }}
                ></motion.div>
            )}
        </AnimatePresence>
    );
};
