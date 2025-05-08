//初回表示時のウェルカムアニメーション
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRef } from "react";

export default function WelcomeScreen() {
    const time = 3;
    const [show, setShow] = useState(false);

    //アニメーションの最中にページを覆うレイヤーを除去する
    const divRef = useRef<HTMLDivElement>(null);
    const hideDiv = () => {
        if (divRef.current) {
            divRef.current.classList.add("hidden");
        }
    };

    useEffect(() => {
        //初めてサイトを訪れた時にshowフラグをtrueにする
        if (!sessionStorage.getItem("hasVisited")) {
            setShow(true);
            sessionStorage.setItem("hasVisited", "true");
        }

        async function animation() {
            await setTimeout(() => {
                setShow(false);
            }, time * 1000); // 2秒表示

            await setTimeout(
                () => {
                    hideDiv();
                },
                (time - 0.8) * 1000
            );
        }

        animation();
    }, []);

    return (
        <div>
            <AnimatePresence>
                {show && (
                    <div>
                        <motion.div
                            className="fixed inset-0 w-[150vw] flex items-center justify-center z-900
            bg-[#ceebff] dark:bg-[var(--color-home-dark-secondary)] ease-in-out"
                            animate={{ x: [2000, 0, 0, -3000] }}
                            transition={{
                                duration: time,
                                times: [0, 0.1, 0.8, 0.95],
                            }}
                        ></motion.div>
                        <motion.div
                            className="fixed inset-0 w-[150vw] flex items-center justify-center z-901
            bg-[#d4ceff] dark:bg-[var(--color-home-dark-secondary)] ease-in-out"
                            animate={{ x: [2000, 0, 0, -3000] }}
                            transition={{
                                duration: time,
                                times: [0.2, 0.25, 0.8, 0.95],
                            }}
                        ></motion.div>
                        <motion.div
                            className="fixed inset-0 w-[150vw] flex items-center justify-center z-902
            bg-[#ceffe3] dark:bg-[var(--color-home-dark-secondary)] ease-in-out"
                            animate={{ x: [2000, 0, 0, -3000] }}
                            transition={{
                                duration: time,
                                times: [0.25, 0.3, 0.8, 0.95],
                            }}
                        ></motion.div>
                        <motion.div
                            className="fixed inset-0 w-[150vw] flex items-center justify-center z-903
            bg-[#ffd6f3] dark:bg-[var(--color-home-dark-secondary)] ease-in-out"
                            animate={{ x: [2000, 0, 0, -3000] }}
                            transition={{
                                duration: time,
                                times: [0.3, 0.45, 0.8, 0.95],
                            }}
                        ></motion.div>
                        <motion.div
                            className="fixed inset-0 w-[150vw] flex items-center justify-center z-903
            bg-[var(--color-home-secondary)] dark:bg-[var(--color-home-dark-secondary)] ease-in-out"
                            animate={{ x: [2000, 0, 0, -3000] }}
                            transition={{
                                duration: time,
                                times: [0.47, 0.55, 0.8, 0.95],
                            }}
                        ></motion.div>
                    </div>
                )}
            </AnimatePresence>
            <div ref={divRef}>
                <div
                    className={`fixed inset-0 w-[100vw] h-[100vh]  z-799
            bg-[var(--color-home-secondary)] dark:bg-[var(--color-home-dark-secondary)`}
                ></div>
            </div>
        </div>
    );
}
