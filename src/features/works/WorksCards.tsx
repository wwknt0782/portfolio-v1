import ArrowRight from "@/components/ArrowRight";
import Image from "next/image";
//use Preline UI  "https://preline.co/docs/license.html"

type WorksCardsType = {
    onClick?: () => void;
};

//制作実績カード1　ポートフォリオ
export const WorksCard01 = (props: WorksCardsType) => {
    return (
        <button
            type="button"
            onClick={props.onClick}
            className="group relative flex flex-col h-full text-left border border-works-text/20 shadow-md 
						focus:outline-hidden focus:border-transparent focus:shadow-lg 
						transition-all duration-300 
						rounded-md p-5 cursor-pointer"
        >
            <div
                className="z-1 absolute flex justify-center items-center left-0 top-0 w-full h-full 
						group-hover:bg-[var(--color-works-primary)]/60 transition-all duration-600 ease-out
						rounded-md"
            >
                <ArrowRight
                    className="z-1 size-10 text-[var(--color-works-secondary)] 
							opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0
							transition-all duration-300 ease-out"
                />
            </div>
            <div className="">
                <Image
                    className="w-full aspect-16/9 object-cover rounded-md group-hover:scale-103 transition-all duration-300 ease-out"
                    src="/img_portfolio.jpg"
                    alt="portfolio site"
                    width="400"
                    height="225"
                    priority={true}
                />
            </div>

            <div>
                <h5 className="mt-3 text-sm text-[var(--color-works-primary)]">
                    #Webサイト
                </h5>
            </div>

            <div className="mt-4">
                <h3 className="text-xl font-bold">
                    ポートフォリオサイト
                    <br />
                    (本サイト)
                </h3>
                <p className="mt-5">
                    ページごとのテーマカラーで色どりを与えつつ，アニメーションで気持ちのよい操作感を目指しました。
                </p>
            </div>
        </button>
    );
};

//制作実績カード2　サンプルサイト
export const WorksCard02 = (props: WorksCardsType) => {
    return (
        <button
            type="button"
            onClick={props.onClick}
            className="group relative flex flex-col h-full text-left border border-works-text/20 shadow-md 
						focus:outline-hidden focus:border-transparent focus:shadow-lg 
						transition-all duration-300 
						rounded-md p-5 cursor-pointer"
        >
            <div
                className="z-1 absolute flex justify-center items-center left-0 top-0 w-full h-full 
						group-hover:bg-[var(--color-works-primary)]/60 transition-all duration-600 ease-out
						rounded-md"
            >
                <ArrowRight
                    className="z-1 size-10 text-[var(--color-works-secondary)] 
							opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0
							transition-all duration-300 ease-out"
                />
            </div>
            <div className="">
                <Image
                    className="w-full aspect-16/9 object-cover rounded-md group-hover:scale-103 transition-all duration-300 ease-out"
                    src="/img_wcb.jpg"
                    alt="sample site"
                    width="400"
                    height="225"
                    priority={true}
                />
            </div>

            <div>
                <h5 className="mt-3 text-sm text-[var(--color-works-primary)]">
                    #Webサイト
                </h5>
            </div>

            <div className="mt-4">
                <h3 className="text-xl font-bold">サンプルサイト</h3>
                <p className="mt-5">
                    教本を参考に制作したレスポンシブサイトです。
                </p>
            </div>
        </button>
    );
};

//制作実績カード3　タスク管理アプリ
export const WorksCard03 = (props: WorksCardsType) => {
    return (
        <button
            type="button"
            onClick={props.onClick}
            className="group relative flex flex-col h-full text-left border border-works-text/20 shadow-md 
						focus:outline-hidden focus:border-transparent focus:shadow-lg 
						transition-all duration-300 
						rounded-md p-5 cursor-pointer"
        >
            <div
                className="z-1 absolute flex justify-center items-center left-0 top-0 w-full h-full 
						group-hover:bg-[var(--color-works-primary)]/60 transition-all duration-600 ease-out
						rounded-md"
            >
                <ArrowRight
                    className="z-1 size-10 text-[var(--color-works-secondary)] 
							opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0
							transition-all duration-300 ease-out"
                />
            </div>
            <div className="">
                <Image
                    className="w-full aspect-16/9 object-cover rounded-md group-hover:scale-103 transition-all duration-300 ease-out"
                    src="/img_todolist.jpg"
                    alt="To Do Application"
                    width="400"
                    height="225"
                    priority={true}
                />
            </div>

            <div>
                <h5 className="mt-3 text-sm text-[var(--color-contact-primary)]">
                    #Webアプリ
                </h5>
            </div>

            <div className="mt-4">
                <h3 className="text-xl font-bold">タスク管理アプリ</h3>
                <p className="mt-5">
                    シンプルなタスク管理アプリです。タスクの追加，編集，完了チェック，削除が可能です。ページをリロードしても情報が保存されます。
                </p>
            </div>
        </button>
    );
};
