"use client";
import PageTitle from "@/components/PageTitle";
import { WorksCard01, WorksCard02, WorksCard03 } from "./WorksCards";
import { useState } from "react";
import { ModalType, WorksModal } from "./WorksModals";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function WorksMain() {
    const [isOpen, setIsOpen] = useState("close" as ModalType["open"]);

    //homeから遷移した場合は自動でモーダルを開く---------------------
    const params = useSearchParams();
    useEffect(() => {
        const from = params.get("from");
        const to = params.get("to");

        if (from === "home" && to === "modal01") {
            setTimeout(() => {
                setIsOpen("modal01");
            }, 100);
        } else if (from === "home" && to === "modal02") {
            setTimeout(() => {
                setIsOpen("modal02");
            }, 100);
        } else {
            return;
        }
    }, [params]);
    //-----------------------------------------------------------

    return (
        <main className="grow mt-16 overflow-auto">
            {/*モーダルの開閉管理*/}
            <WorksModal open={isOpen} onCancel={() => setIsOpen("close")} />

            <div className="mx-4 md:px-10 lg:px-20">
                {/*ページタイトル===========================================================================================*/}
                <div
                    className="h-[250px] 
                    flex flex-col justify-center
                    text-left whitespace-nowrap"
                >
                    <PageTitle title="works" />
                    <p className="mt-8 ml-2">
                        これまでに制作したコンテンツを
                        <br className="md:hidden" />
                        掲載しています。
                    </p>
                </div>

                {/*サムネイル----------------------------------------*/}
                <div className="max-w-[75rem] px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <WorksCard01 onClick={() => setIsOpen("modal01")} />

                        <WorksCard02 onClick={() => setIsOpen("modal02")} />

                        <WorksCard03 />
                    </div>
                </div>
            </div>
        </main>
    );
}
