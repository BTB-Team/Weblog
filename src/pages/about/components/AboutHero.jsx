import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function HomeIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5"
        >
            <path d="m3 10 9-7 9 7" />
            <path d="M5 9v11h14V9" />
            <path d="M9 20v-6h6v6" />
        </svg>
    );
}

export default function AboutHero({
    direction,
    isEnglish,
    about,
}) {
    const Arrow = isEnglish ? ArrowRight : ArrowLeft;

    return (
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-7 sm:px-8 md:pb-28 md:pt-9">
            <div className="mx-auto max-w-4xl">

                {/* Breadcrumb */}
                <div
                    className={`relative mb-12 flex w-full ${isEnglish
                        ? "justify-end"
                        : "justify-start"
                        }`}
                    dir="ltr"
                >
                    <nav
                        aria-label={about?.breadcrumb?.label}
                        dir="ltr"
                        className={`flex items-center gap-3 text-[11px] text-[#9A877A] ${isEnglish
                            ? "flex-row-reverse"
                            : "flex-row"
                            }`}
                    >
                        <Link
                            to="/"
                            className="flex items-center gap-1.5 transition-colors hover:text-[#A36F6F]"
                        >
                            <HomeIcon />

                            <span>
                                {about?.breadcrumb?.home}
                            </span>
                        </Link>

                        <span className="text-[#D6C5B9]">
                            /
                        </span>

                        <span className="text-[#7A685D]">
                            {about?.breadcrumb?.current}
                        </span>
                    </nav>
                </div>

                {/* Hero Content */}
                <div
                    dir={direction}
                    className="text-center"
                >
                    <div className="mb-5 flex items-center justify-center gap-3 text-sm font-medium text-[#A36F6F]">
                        <span className="h-px w-10 bg-[#EAD5C3]" />

                        <span>
                            {about?.hero?.eyebrow}
                        </span>

                        <span className="h-px w-10 bg-[#EAD5C3]" />
                    </div>

                    <h1 className=" text-3xl font-bold leading-[1.5] text-[#4A3B32] sm:text-4xl md:text-5xl">
                        {about?.hero?.title}
                    </h1>

                    <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#7A685D] sm:text-[15px] sm:leading-8">
                        {about?.hero?.description}
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <button
                            type="button"
                            onClick={() => {
                                document
                                    .getElementById("biography")
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                            }}
                            className="btn-primary inline-flex items-center justify-center gap-2"
                        >
                            <span>
                                {about?.hero?.storyButton}
                            </span>

                            <Arrow
                                size={16}
                                strokeWidth={1.8}
                            />
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                document
                                    .getElementById("timeline")
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                            }}
                            className="btn-outline inline-flex items-center justify-center gap-2"
                        >
                            <span>
                                {about?.hero?.experienceButton}
                            </span>

                            <Arrow
                                size={16}
                                strokeWidth={1.8}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}