import ArrowLeft from "@/components/ArrowLeft";
import type { PageList } from "@/constants/PageList";
import clsx from "clsx";
import Link from "next/link";

export default function Button(props: {
	buttonName: string;
	theme: keyof typeof PageList | "gray";
}) {
	const buttonStyle = clsx(
		//ボタンの装飾
		"w-60 px-10 py-2 border-2 rounded-sm shadow-md flex flex-row items-center justify-center whitespace-nowrap hover:scale-95 transition-all duration-200",
		{
			"bg-[var(--color-home-primary)] dark:bg-[var(--color-home-dark-primary)] border-[var(--color-home-text)]/20 dark:border-[var(--color-home-dark-text)]/20 text-[var(--color-home-secondary)] dark:text-[var(--color-home-dark-text)]":
				props.theme === "home",
			"bg-[var(--color-profile-primary)] dark:bg-[var(--color-profile-dark-primary)] border-[var(--color-profile-text)]/20 dark:border-[var(--color-profile-dark-text)]/20 text-[var(--color-profile-secondary)] dark:text-[var(--color-profile-dark-text)]":
				props.theme === "profile",
			"bg-[var(--color-works-primary)] dark:bg-[var(--color-works-dark-primary)] border-[var(--color-works-text)]/20 dark:border-[var(--color-works-dark-text)]/20 text-[var(--color-works-secondary)] dark:text-[var(--color-works-dark-text)]":
				props.theme === "works",
			"bg-[var(--color-contact-primary)] dark:bg-[var(--color-contact-dark-primary)] border-[var(--color-contact-text)]/20 dark:border-[var(--color-contact-dark-text)]/20 text-[var(--color-contact-secondary)] dark:text-[var(--color-contact-dark-text)]":
				props.theme === "contact",
			"bg-gray-400 border-gray-500/60 text-[var(--color-home-secondary)]":
				props.theme === "gray",
		},
	);

	return (
		<button type="button" className="group inline-block mx-auto cursor-pointer">
			<div className={buttonStyle}>
				<ArrowLeft className="size-4 mr-2" />
				{props.buttonName}
			</div>
		</button>
	);
}
