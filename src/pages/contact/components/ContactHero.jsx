import React from "react";
import { Link } from "react-router-dom";
import { useLangStore } from "../../../store/useLangStore";

import image1 from "../../../assets/images/1.webp";
import petal5 from "../../../assets/images/petals/petal-5.webp";

function Petal({
    src,
    className = "",
    opacity = "opacity-60",
}) {
    return (
        <img
            src={src}
            alt=""
            aria-hidden="true"
            className={`pointer-events-none absolute select-none object-contain ${opacity} ${className}`}
            onError={(event) => {
                event.currentTarget.style.display = "none";
            }}
        />
    );
}

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

export default function ContactHero({ image2 }) {
    const lang = useLangStore((state) => state.lang);
    const t = useLangStore((state) => state.t);

    const isEnglish = lang === "en";
    const direction = isEnglish ? "ltr" : "rtl";

    return (
        <section className="relative mx-auto max-w-6xl px-5 pb-8 pt-7 sm:px-8 md:pb-12 md:pt-9">
            <div
                className={`absolute top-0 z-20 hidden h-[430px] w-[330px] overflow-hidden lg:block ${isEnglish ? "left-0" : "right-0"
                    }`}
            >
                <img
                    src={image1}
                    alt={t.contact.heroImageAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* محو شدن به سمت داخل صفحه */}
                <div
                    className={`pointer-events-none absolute inset-0 ${isEnglish
                            ? "bg-gradient-to-r from-transparent via-[#FDFBF7]/10 to-[#FDFBF7]/50"
                            : "bg-gradient-to-l from-transparent via-[#FDFBF7]/10 to-[#FDFBF7]/50"
                        }`}
                />

                {/* محو شدن از پایین */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FDFBF7]/45 to-transparent" />
            </div>

            {/* Breadcrumb */}
            <div
                className={`relative mb-12 flex w-full ${isEnglish ? "justify-end" : "justify-start"
                    }`}
                dir="ltr"
            >
                <nav
                    aria-label={t.contact?.breadcrumb?.label}
                    dir="ltr"
                    className={`flex items-center gap-3 text-[11px] text-[#9A877A] ${isEnglish ? "flex-row-reverse" : "flex-row"
                        }`}
                >
                    <Link
                        to="/"
                        className="flex items-center gap-1.5 transition-colors hover:text-[#A36F6F]"
                    >
                        <HomeIcon />
                        <span>{t.contact?.breadcrumb?.home}</span>
                    </Link>

                    <span className="text-[#D6C5B9]">/</span>

                    <span className="text-[#7A685D]">
                        {t.contact?.breadcrumb?.current}
                    </span>
                </nav>
            </div>

            <div
                className="grid items-center gap-8 lg:grid-cols-[1fr_1fr_1fr] lg:gap-7"
                dir="ltr"
            >
                <div
                    className={`relative flex h-[330px] items-center ${isEnglish
                        ? "order-3 justify-end lg:order-3"
                        : "order-1 justify-start lg:order-1"
                        }`}
                >
                    <img
                        src={image2}
                        alt=""
                        className="h-64 w-64 object-contain sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                    />
                </div>

                <div
                    dir={direction}
                    className="relative order-2 min-w-0 text-center"
                >
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <span className="h-px w-9 bg-[#EAD5C3]" />

                        <span className="whitespace-nowrap text-[11px] text-[#A36F6F]">
                            {t.contact.heroLabel}
                        </span>

                        <span className="h-px w-9 bg-[#EAD5C3]" />
                    </div>

                    <h1 className="whitespace-nowrap font-serif text-3xl font-bold leading-[1.5] text-[#4A3B32] sm:text-4xl md:text-5xl">
                        {t.contact.heroTitle}
                    </h1>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-[#7A685D] md:text-[15px]">
                        {t.contact.heroDescription}
                    </p>

                    <div className="mt-7 flex items-center justify-center gap-4">
                        <span className="h-px w-14 bg-[#EAD5C3]" />

                        <Petal
                            src={petal5}
                            className="!relative h-8 w-8 rotate-[25deg]"
                            opacity="opacity-70"
                        />

                        <span className="h-px w-14 bg-[#EAD5C3]" />
                    </div>
                </div>

                <div
                    className={`relative h-[330px] ${isEnglish
                        ? "order-1 lg:order-1"
                        : "order-3 lg:order-3"
                        }`}
                ></div>
            </div>
        </section>
    );
}