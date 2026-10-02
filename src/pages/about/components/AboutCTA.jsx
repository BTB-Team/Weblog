import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

export default function AboutCTA({
    direction,
    isEnglish,
    about,
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
                    className="bottom-1 start-3 h-20 w-20 rotate-[-18deg]"
                    opacity="opacity-45"
                />

                <Petal
                    src={petal5}
                    className="bottom-0 start-14 h-16 w-16 rotate-[10deg]"
                    opacity="opacity-35"
                />

                <div
                    dir="ltr"
                    className="relative z-10 grid items-center gap-7 md:grid-cols-[0.75fr_1.35fr_0.9fr]"
                >

                    {/* Left Image */}
                    <div className="flex h-24 items-center justify-start">
                        <img
                            src={image6}
                            alt=""
                            className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                        />
                    </div>

                    {/* Center Content */}
                    <div
                        dir={direction}
                        className="text-center"
                    >
                        <h2 className="font-serif text-xl font-bold leading-[1.5] text-[#4A3B32] sm:text-2xl">
                            {about?.cta?.title}
                        </h2>

                        <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-[#7A685D] sm:text-sm sm:leading-7">
                            {about?.cta?.description}
                        </p>

                        <Link
                            to="/contact"
                            className="btn-primary mt-4 inline-flex items-center justify-center gap-2"
                        >
                            {about?.cta?.contactButton}

                            {isEnglish ? (
                                <ArrowRight size={15} />
                            ) : (
                                <ArrowLeft size={15} />
                            )}
                        </Link>
                    </div>

                    {/* Right Buttons + Image */}
                    <div
                        dir="ltr"
                        className="flex w-full items-center justify-end gap-3"
                    >
                        <div
                            dir={direction}
                            className="flex flex-col gap-2"
                        >
                            <Link
                                to="/achievements"
                                className="btn-primary inline-flex items-center justify-center whitespace-nowrap"
                            >
                                {about?.cta?.achievementsButton}
                            </Link>

                            <Link
                                to="/media"
                                className="btn-outline inline-flex items-center justify-center whitespace-nowrap"
                            >
                                {about?.cta?.mediaButton}
                            </Link>
                        </div>

                        <img
                            src={image7}
                            alt=""
                            className="h-20 w-20 shrink-0 object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}