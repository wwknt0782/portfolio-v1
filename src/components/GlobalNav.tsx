// use Preline UI  "https://preline.co/docs/license.html"
"use client";

import HoverArrowButton from "./HoverArrowButton";

export default function GlobalNav() {
    return (
        <div>
            <div className="hidden md:block">
                {/*PC版表示*/}
                <ul className="flex flex-row items-center space-x-2 my-1">
                    <li>
                        <HoverArrowButton buttonName="HOME" link="/" />
                    </li>
                    <li>
                        <HoverArrowButton
                            buttonName="プロフィール"
                            link="/profile"
                        />
                    </li>
                    <li>
                        <HoverArrowButton buttonName="制作実績" link="/works" />
                    </li>
                    <li>
                        <HoverArrowButton
                            buttonName="お問い合わせ"
                            link="/contact"
                        />
                    </li>
                </ul>
            </div>
            {/*スマホ版表示*/}
            <div className="md:hidden hs-dropdown [--strategy:absolute] [--flip:false] [--placement:bottom-right] hs-dropdown-example relative inline-flex">
                <button
                    id="hs-dropdown-example"
                    type="button"
                    className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-[var(--color-primary)] dark:text-[var(--color-dark-primary)] cursor-pointer"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                >
                    <svg
                        className="size-7"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <title> </title>
                        <line
                            x1="4"
                            y1="7"
                            x2="20"
                            y2="7"
                            className="hs-dropdown-open:rotate-45 transition-all duration-300 hs-dropdown-open:translate-y-[3.536px] hs-dropdown-open:-translate-x-[3.536px] ease-in-out origin-center"
                        />
                        <line
                            x1="4"
                            y1="17"
                            x2="20"
                            y2="17"
                            className="hs-dropdown-open:-rotate-45 transition-all duration-300 hs-dropdown-open:-translate-y-[3.536px] hs-dropdown-open:-translate-x-[3.536px] ease-in-out origin-center"
                        />
                    </svg>
                </button>

                <div
                    className="hs-dropdown-menu transition-[opacity,margin] duration-100 hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-60 bg-[var(--color-secondary)] dark:bg-[var(--color-dark-secondary)] shadow-md rounded-lg p-2 ease-out"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-dropdown-example"
                >
                    <ul>
                        <li>
                            <HoverArrowButton buttonName="HOME" link="/" />
                        </li>
                        <li>
                            <HoverArrowButton
                                buttonName="プロフィール"
                                link="/profile"
                            />
                        </li>
                        <li>
                            <HoverArrowButton
                                buttonName="制作実績"
                                link="/works"
                            />
                        </li>
                        <li>
                            <HoverArrowButton
                                buttonName="お問い合わせ"
                                link="/contact"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
