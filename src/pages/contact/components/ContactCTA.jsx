import React from "react";
import { Link } from "react-router-dom";

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

function HeartIcon() {
    return (
        <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" />
        </svg>
    );
}

function ArrowLeftIcon() {
    return (
        <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </svg>
    );
}

export default function DonateCTA({
    direction,
    t,
    image6,
    image7,
    petal1,
    petal5,
}) {
    return (
        <section className="relative mx-auto max-w-6xl px-5 pb-8 sm:px-8">
            <div className="relative overflow-hidden rounded-[6px] border border-[#EAD5C3]/70 bg-[#FCF7F0] px-6 py-7 sm:px-10">
                <Petal
                    src={petal1}
                    className="start-[-30px] top-[-25px] h-24 w-24 rotate-[-15deg]"
                    opacity="opacity-30"
                />

                <Petal
                    src={petal5}
                    className="end-[-20px] bottom-[-25px] h-24 w-24 rotate-[20deg]"
                    opacity="opacity-30"
                />

                <div
                    dir="ltr"
                    className="relative z-10 grid items-center gap-7 md:grid-cols-[0.75fr_1.35fr_0.9fr]"
                >
                    <div className="flex h-24 items-center justify-start">
                        <img
                            src={image6}
                            alt=""
                            className="h-full w-auto object-contain"
                        />
                    </div>

                    <div dir={direction} className="text-center">
                        <h2 className=" text-xl font-bold text-[#4A3B32] sm:text-2xl">
                            {t.contact.donate.title}
                        </h2>

                        <p className="mx-auto mt-2 max-w-lg text-xs leading-6 text-[#8D786B]">
                            {t.contact.donate.description}
                        </p>
                    </div>

                    <div
                        dir="ltr"
                        className="flex w-full items-center justify-end gap-3"
                    >
                        <div dir={direction} className="flex flex-col gap-2">
                            <Link
                                to="/donate"
                                className="btn-primary inline-flex items-center justify-center gap-2"
                            >
                                <span>{t.contact.donate.support}</span>
                                <HeartIcon />
                            </Link>

                            <Link
                                to="/"
                                className="btn-outline inline-flex items-center justify-center gap-2"
                            >
                                <span>{t.contact.donate.backHome}</span>
                                <ArrowLeftIcon />
                            </Link>
                        </div>

                        <img
                            src={image7}
                            alt=""
                            className="h-24 w-20 object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}