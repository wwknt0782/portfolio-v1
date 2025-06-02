"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import Link from "next/link";
import { create } from "zustand";
import { AnimatePresence, motion } from "framer-motion";

//
//ページ遷移フラグ
type PageTransitionType = {
    isAnimating: boolean;
    startAnimation: () => void;
    endAnimation: () => void;
};

export const usePageTransition = create<PageTransitionType>((set) => ({
    isAnimating: false,
    startAnimation: () => set({ isAnimating: true }),
    endAnimation: () => set({ isAnimating: false }),
}));

//
//ページ遷移用Linkコンポーネント
type Props = {
    href: string;
    children: ReactNode;
    className?: string;
};

export const AnimatedLink = ({ href, children, className }: Props) => {
    const router = useRouter();
    const { isAnimating, startAnimation, endAnimation } = usePageTransition();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault(); // Linkのデフォルト遷移を止める

        if (isAnimating) return; // アニメーション中は無視

        async function animation() {
            // ここでアニメーション開始
            startAnimation();
            await setTimeout(() => {
                router.push(href); // ページ遷移
            }, 500); // 500ms後に遷移
            await setTimeout(() => {
                endAnimation(); // アニメーション終了
            }, 2000);
        }

        animation();
    };

    return (
        <Link href={href} onClick={handleClick} className={className}>
            {children}
        </Link>
    );
};

//
//ページ遷移アニメーション
export const PageTransitionAnimation = () => {
    const time = 1.2; //秒後にアニメーション終了
    const { isAnimating } = usePageTransition();

    return (
        <AnimatePresence>
            {isAnimating && (
                <div>
                    <motion.div
                        className="fixed inset-0 w-[150vw] flex items-center justify-center z-800
            bg-[#ceebff] dark:bg-[var(--color-home-dark-secondary)] ease-in-out"
                        animate={{ x: [3000, 0, 0, -3000] }}
                        transition={{
                            duration: time,
                            times: [0, 0.25, 0.75, 1],
                        }}
                    ></motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
