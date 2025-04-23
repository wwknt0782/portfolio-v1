import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import { WorksCard01, WorksCard02, WorksCard03 } from "./WorksCards";

export default function WorksMain() {
    return (
        <main className="grow mt-16 overflow-auto">
            <div className="mx-4 md:px-10 lg:px-20">
                {/*ページタイトル===========================================================================================*/}
                <div
                    className="h-[250px] 
                    flex flex-col justify-center
                    text-left whitespace-nowrap"
                >
                    <PageTitle title="works" />
                    <p className="mt-8 ml-2">
                        これまでに制作したコンテンツを掲載しています。
                    </p>
                </div>

                {/*サムネイル----------------------------------------*/}
                <div className="max-w-[75rem] px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link href="/works" className="flex flex-col grow">
                            <WorksCard01 />
                        </Link>
                        <Link href="/works" className="flex flex-col grow">
                            <WorksCard02 />
                        </Link>

                        <Link href="/works" className="flex flex-col grow">
                            <WorksCard03 />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
