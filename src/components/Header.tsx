import { ibmPlexMono } from "@/fonts/Fonts";
import GlobalNav from "@/components/GlobalNav";
import Link from "next/link";
import { AnimatedLink } from "./PageTransition";

export default function Header() {
    return (
        <header
            className="w-full h-16 pl-4 md:px-10 lg:px-20 fixed top-0 z-10
        bg-[var(--color-secondary)]/80 dark:bg-[var(--color-dark-primary)]/80
		backdrop-blur-lg"
        >
            <nav className="flex flex-row items-center justify-between">
                <div className="flex items-center h-16">
                    <AnimatedLink href={"/"}>
                        <h1
                            className={`${ibmPlexMono.className} 
                            text-3xl  mr-5
                            text-[var(--color-primary)] dark:text-[var(--color-dark-primary)]
                            whitespace-nowrap uppercase`}
                        >
                            {"<"}K-Watanabe{"/>"}
                        </h1>
                    </AnimatedLink>
                </div>
                <GlobalNav />
            </nav>
        </header>
    );
}
