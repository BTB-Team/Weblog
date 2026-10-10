
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
            className="h-3.5 w-3.5 shrink-0"
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
        <section className="relative mx-auto w-full max-w-6xl px-4 pb-8 pt-5 sm:px-6 sm:pt-7 md:px-8 md:pb-12 md:pt-9">

            {/* تصویر گوشه بالایی */}
            <div
                className={`pointer-events-none absolute top-0 z-0 h-32 w-24 overflow-hidden sm:h-44 sm:w-32 md:h-60 md:w-44 lg:h-[430px] lg:w-[330px] ${isEnglish ? "left-0" : "right-0"
                    }`}
            >
                <img
                    src={image1}
                    alt={t.contact?.heroImageAlt || ""}
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(event) => {
                        event.currentTarget.style.display = "none";
                    }}
                />

                {/* محو شدن عکس به طرف داخل صفحه */}
                <div
                    className={`absolute inset-0 ${isEnglish
                        ? "bg-gradient-to-r from-transparent via-[#FDFBF7]/30 to-[#FDFBF7]/90"
                        : "bg-gradient-to-l from-transparent via-[#FDFBF7]/30 to-[#FDFBF7]/90"
                        }`}
                />

                {/* محو شدن از پایین */}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#FDFBF7]/80 to-transparent sm:h-16" />
            </div>

            {/* مسیر صفحه */}
            <div
                className={`relative z-10 mb-8 flex w-full sm:mb-10 md:mb-12 ${isEnglish ? "justify-end" : "justify-start"
                    }`}
                dir="ltr"
            >
                <nav
                    aria-label={t.contact?.breadcrumb?.label}
                    dir="ltr"
                    className={`flex min-w-0 items-center gap-2 text-[10px] text-[#9A877A] sm:gap-3 sm:text-[11px] ${isEnglish ? "flex-row-reverse" : "flex-row"
                        }`}
                >
                    <Link
                        to="/"
                        className="flex shrink-0 items-center gap-1.5 transition-colors hover:text-[#A36F6F]"
                    >
                        <HomeIcon />
                        <span>{t.contact?.breadcrumb?.home}</span>
                    </Link>

                    <span className="text-[#D6C5B9]">/</span>

                    <span className="min-w-0 break-words text-[#7A685D]">
                        {t.contact?.breadcrumb?.current}
                    </span>
                </nav>
            </div>

            {/* محتوای اصلی */}
            <div
                dir="ltr"
                className="relative z-10 grid min-w-0 grid-cols-1 items-center gap-5 sm:gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-7"
            >
                {/* تصویر تزئینی دوم */}
                <div
                    className={`relative order-3 flex min-w-0 items-center justify-center lg:justify-start ${isEnglish
                        ? "lg:order-3"
                        : "lg:order-1"
                        }`}
                >
                    {image2 && (
                        <img
                            src={image2}
                            alt=""
                            aria-hidden="true"
                            className="h-40 w-40 object-contain sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-72 lg:w-72 xl:h-80 xl:w-80"
                            onError={(event) => {
                                event.currentTarget.style.display = "none";
                            }}
                        />
                    )}
                </div>

                {/* عنوان و توضیحات */}
                <div
                    dir={direction}
                    className="relative z-10 order-1 min-w-0 px-1 pt-24 pb-5 text-center sm:pt-28 sm:pb-7 md:pt-32 lg:order-2 lg:px-0 lg:pt-5"
                >
                    <div className="mb-4 flex items-center justify-center gap-2 sm:gap-3">
                        <span className="h-px w-5 bg-[#EAD5C3] sm:w-9" />

                        <span className="text-[10px] leading-6 text-[#A36F6F] sm:text-[11px]">
                            {t.contact?.heroLabel}
                        </span>

                        <span className="h-px w-5 bg-[#EAD5C3] sm:w-9" />
                    </div>

                    <h1 className="text-2xl font-bold leading-[1.6] text-[#4A3B32] sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl whitespace-nowrap">
                        {t.contact?.heroTitle}
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl break-words text-xs leading-7 text-[#7A685D] sm:mt-5 sm:text-sm sm:leading-8 md:text-[15px]">
                        {t.contact?.heroDescription}
                    </p>

                    <div className="mt-5 flex items-center justify-center gap-3 sm:mt-7 sm:gap-4">
                        <span className="h-px w-8 bg-[#EAD5C3] sm:w-14" />

                        <Petal
                            src={petal5}
                            className="!relative h-7 w-7 rotate-[25deg] sm:h-8 sm:w-8"
                            opacity="opacity-70"
                        />

                        <span className="h-px w-8 bg-[#EAD5C3] sm:w-14" />
                    </div>
                </div>

                {/* فضای ستون سوم در دسکتاپ */}
                <div
                    className={`relative hidden min-w-0 lg:block lg:h-[330px] ${isEnglish
                        ? "lg:order-1"
                        : "lg:order-3"
                        }`}
                />
            </div>
        </section>
    );
}
