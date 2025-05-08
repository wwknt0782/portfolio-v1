// 右矢印ボタン>> ヘッダー用
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatedLink } from "./PageTransition";

export default function HoverArrowButton(props: {
    buttonName: string;
    link: string;
}) {
    const isHere = usePathname().split("/").filter(Boolean); //今いるページの先頭のパスを取得(home or profile of works or contact)
    const color =
        props.link === `/${isHere[0] ?? ""}`
            ? "stroke-[var(--color-primary)] dark:stroke-[var(--color-dark-primary)]"
            : "stroke-[var(--color-text)] dark:stroke-[var(--color-dark-text)]"; //今いるページの縦線だけテーマカラーにする

    return (
        <AnimatedLink
            href={props.link}
            className="group flex flex-row pr-2 py-1 whitespace-nowrap"
        >
            {/*縦線|---------------------------------------------------*/}
            <svg
                className={`size-4 stroke-5 ${color} my-auto`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <title> </title>
                <line x1="10" y1="0" x2="10" y2="24" />
            </svg>

            {/*ボタンラベル-------------*/}
            {props.buttonName}

            {/*右矢印>>------------------------------------------------*/}
            <svg
                className="size-4 stroke-2 stroke-[var(--color-primary)] dark:stroke-[var(--color-dark-primary)] 
				my-auto opacity-0 group-hover:opacity-100 
				group-hover:translate-x-2 transition-all duration-300 ease-out"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <title> </title>
                <line x1="2" y1="4" x2="12" y2="12" />
                <line x1="12" y1="12" x2="2" y2="20" />
                <line x1="14" y1="4" x2="24" y2="12" />
                <line x1="24" y1="12" x2="14" y2="20" />
            </svg>
        </AnimatedLink>
    );
}
