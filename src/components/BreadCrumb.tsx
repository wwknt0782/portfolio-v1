"use client";

import ArrowRight from "@/components/ArrowRight";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumb() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
        //HOMEページの処理
        return (
            <div
                className="w-full h-9 pl-4 py-1 text-xs 
            text-[var(--color-secondary)] dark:text-[var(--color-dark-secondary)] 
            bg-[var(--color-primary)] dark:bg-[var(--color-dark-primary)]"
            />
        );
    }

    return (
        //HOMEページ以外の処理
        <div
            className="w-full h-9 pl-4  py-1 text-xs 
        text-[var(--color-secondary)] dark:text-[var(--color-dark-secondary)] 
        bg-[var(--color-primary)] dark:bg-[var(--color-dark-primary)]"
        >
            <ol className="flex flex-row items-center italic ">
                {/*HOMEアイコンの表示==================================================================================*/}
                <li>
                    <Link href="/" className="flex flex-row items-center">
                        <Home className="w-4 mr-1 mb-1" />
                        <p className="inline-block">HOME</p>
                    </Link>
                </li>
                {/*↑HOME表示ここまで==========================================================================*/}

                {/*↓リストを動的に追加する==========================================================================*/}
                {segments.map((segment, index) => {
                    const label = segments[index] || segment; //pageNamesに存在するページなら日本語表示，それ以外はアドレス名のまま表示
                    const href = `/${segments.slice(0, index + 1)}`; //リンク用のアドレスを作成
                    const isLast = index === segments.length - 1; //最後のセグメントならtrue

                    return (
                        <li
                            key={href}
                            className="flex flex-row items-center h-6"
                        >
                            <span className="ml-2 inline-block"> </span>
                            <ArrowRight className="size-3" />
                            {isLast ? (
                                <span className="ml-2 border-b-1">{label}</span> //リストの最後の表示(リンク無し)
                            ) : (
                                <Link href={href} className="ml-2">
                                    {label}
                                </Link> //リストの途中の表示(リンクあり)
                            )}
                        </li>
                    );
                })}
                {/*↑リスト追加ここまで==========================================================================*/}
            </ol>
        </div>
    );
}
