//初回表示時のウェルカムアニメーション
"use client";

import { ibmPlexMono } from "@/fonts/Fonts";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WelcomeScreen() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        //初めてサイトを訪れた時にshowフラグをtrueにする
        if (!sessionStorage.getItem("hasVisited")) {
            setShow(true);
            sessionStorage.setItem("hasVisited", "true");
        }

        setTimeout(() => {
            setShow(false);
        }, 1000); // 1秒表示
    }, []);

    return (
        <AnimatePresence>
            {show && ( //showがtrueのとき=初めて訪れた時実行する
                <motion.div
                    className="fixed inset-0 flex items-center justify-center z-50
            bg-[var(--color-home-secondary)] dark:bg-[var(--color-home-dark-secondary)]"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1
                        className={`text-8xl font-bold ${ibmPlexMono.className}
                        text-[var(--color-home-primary)] dark:text-[var(--color-home-dark-text)]`}
                        initial={{ x: 0, opacity: 0 }} //徐々に現れて1秒後左へフェードアウト
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Welcome
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
