import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

function HomeIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5 shrink-0"
        >
            <path d="m3 10 9-7 9 7" />
            <path d="M5 9v11h14V9" />
            <path d="M9 20v-6h6v6" />
        </svg>
    );
}

export default function DonateHero({ donate, isEnglish }) {
    return (
        <section className="mx-auto max-w-6xl px-5 pb-14 pt-7 sm:px-8 md:pb-20 md:pt-9">
            <div className="mx-auto max-w-3xl">
                <div
                    className={`relative mb-12 flex w-full ${isEnglish ? "justify-end" : "justify-start"
                        }`}
                    dir="ltr"
                >
                    <nav
                        aria-label={donate?.breadcrumb?.label}
                        dir="ltr"
                        className={`flex items-center gap-3 text-[11px] text-[#9A877A] ${isEnglish ? "flex-row-reverse" : "flex-row"
                            }`}
                    >
                        <Link
                            to="/"
                            className="flex items-center gap-1.5 transition-colors hover:text-[#A36F6F]"
                        >
                            <HomeIcon />
                            <span>{donate?.breadcrumb?.home}</span>
                        </Link>

                        <span className="text-[#D6C5B9]">/</span>

                        <span className="text-[#7A685D]">
                            {donate?.breadcrumb?.current}
                        </span>
                    </nav>
                </div>

                <div className="text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#EAD5C3] bg-white text-[#A36F6F] shadow-[0_8px_25px_rgba(74,59,50,0.06)]">
                        <Heart size={27} strokeWidth={1.6} />
                    </div>

                    <p className="mb-3 text-sm font-medium text-[#A36F6F]">
                        {donate?.hero?.eyebrow}
                    </p>

                    <h1 className="text-3xl font-bold leading-[1.5] text-[#4A3B32] sm:text-4xl md:text-5xl">
                        {donate?.hero?.title}
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#7A685D] sm:text-[15px] sm:leading-8">
                        {donate?.hero?.description}
                    </p>
                </div>
            </div>
        </section>
    );
}