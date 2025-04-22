import ArrowRight from "@/components/ArrowRight";
import Image from "next/image";
//use Preline UI  "https://preline.co/docs/license.html"

//制作実績カード1　ポートフォリオ
export const WorksCard01 = () => {
    return (
        <button
            type="button"
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
            <div className="aspect-w-16 aspect-h-11">
                <Image
                    className="w-full object-cover rounded-xl group-hover:scale-103 transition-all duration-300 ease-out"
                    src="/sample.jpg"
                    alt="Sample Image"
                    width="100"
                    height="100"
                    priority={true}
                />
            </div>

            <div>
                <h5 className="mt-3 text-sm text-gray-800">#Webサイト</h5>
            </div>

            <div className="mt-4">
                <h3 className="text-xl font-bold">
                    ポートフォリオサイト
                    <br />
                    (本サイト)
                </h3>
                <p className="mt-5 text-gray-600">
                    ページごとのテーマカラーで色どりを与えつつ，アニメーションで気持ちのよい操作感を目指しました。
                </p>
            </div>
        </button>
    );
};

//制作実績カード2　サンプルサイト
export const WorksCard02 = () => {
    return (
        <button
            type="button"
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
            <div className="aspect-w-16 aspect-h-11">
                <Image
                    className="w-full object-cover rounded-xl group-hover:scale-103 transition-all duration-300 ease-out"
                    src="/sample.jpg"
                    alt="Sample Image"
                    width="100"
                    height="100"
                    priority={true}
                />
            </div>

            <div>
                <h5 className="mt-3 text-sm text-gray-800">#Webサイト</h5>
            </div>

            <div className="mt-4">
                <h3 className="text-xl font-bold">サンプルサイト</h3>
                <p className="mt-5 text-gray-600">
                    教本を参考に制作したレスポンシブサイトです。
                </p>
            </div>
        </button>
    );
};

//制作実績カード3　データなし
export const WorksCard03 = () => {
    return (
        <button
            type="button"
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
            <div className="aspect-w-16 aspect-h-11">
                <Image
                    className="w-full object-cover rounded-xl group-hover:scale-103 transition-all duration-300 ease-out"
                    src="/sample.jpg"
                    alt="Sample Image"
                    width="100"
                    height="100"
                    priority={true}
                />
            </div>

            <div>
                <h5 className="mt-4 text-sm text-gray-800">#Webサイト</h5>
            </div>

            <div className="mt-6">
                <h3 className="text-xl font-bold">データがありません</h3>
                <p className="mt-5 text-gray-600">データがありません</p>
            </div>
        </button>
    );
};
