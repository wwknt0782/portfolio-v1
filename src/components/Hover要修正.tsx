import clsx from "clsx";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface SmartHoverButtonProps {
    buttonName: string;
    link: string;
}

const SmartHoverButton: React.FC<SmartHoverButtonProps> = ({
    buttonName,
    link,
}) => {
    const ref = useRef<HTMLAnchorElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const isPointerOver =
                    entry.boundingClientRect.top <= 0 &&
                    entry.boundingClientRect.bottom >= 0;
                if (entry.isIntersecting && isPointerOver) {
                    setIsHovered(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <Link href={link} passHref legacyBehavior>
            <a
                ref={ref}
                className={clsx(
                    "relative inline-block px-6 py-2 border-2 font-semibold overflow-hidden rounded-lg transition-all duration-300 group text-blue-500 border-blue-500",
                    isHovered && "bg-white text-blue-500"
                )}
            >
                {buttonName}
            </a>
        </Link>
    );
};

export default SmartHoverButton;
