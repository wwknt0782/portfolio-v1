//1. ページのパスを取得してbodyタグにpege属性として追加する
//2. globals.cssに記載のページごとのカラーテーマが適用される
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SetPageAttribute() {
    const pathname = usePathname().split("/").filter(Boolean);
    const page = `${pathname[0] ?? ""}` || "home"; //パスが/ならhomeに置換

    useEffect(() => {
        document.body.setAttribute("page", page); //page属性をbodyタグに追加
    }, [page]);
}
