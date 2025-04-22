import { AnimatePresence, motion } from "framer-motion";

export default function PageTransition() {
    return (
        <div>
            <AnimatePresence>
                <motion.div
                    className="bg-[var(--color-home-secondary)] dark:bg-[var(--color-home-dark-secondary)]"
                    initial={{ x: 1000, opacity: 1 }} //右からスライドイン・スライドアウト
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -1000, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/*スライドイン・スライドアウト*/}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
