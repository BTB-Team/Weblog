
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Heart, Mail } from "lucide-react";

export default function DonationCTA({
    donate,
    isEnglish,
    image6,
    image7,
}) {
    const Arrow = isEnglish ? ArrowRight : ArrowLeft;

    return (
        <div className="relative mt-10 overflow-hidden rounded-[1.7rem] border border-[#EAD5C3]/70 bg-[#FCF7F0] px-6 py-9 sm:px-10">

            <div
                dir="ltr"
                className="grid items-center gap-6 md:grid-cols-[0.75fr_1.5fr_0.75fr]"
            >
                {/* تصویر سمت چپ */}
                <div className="flex items-center justify-center">
                    <img
                        src={image6}
                        alt=""
                        aria-hidden="true"
                        className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                    />
                </div>

                {/* محتوای اصلی؛ بدون تغییر */}
                <div
                    dir={isEnglish ? "ltr" : "rtl"}
                    className="text-center"
                >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F7E9E2] text-[#A36F6F]">
                        <Heart size={21} strokeWidth={1.7} />
                    </div>

                    <h2 className="mt-5 text-xl font-bold text-[#4A3B32] sm:text-2xl">
                        {donate?.cta?.title}
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#7A685D]">
                        {donate?.cta?.description}
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        <a
                            href="mailto:mariam2023amiri@gmail.com"
                            className="btn-primary inline-flex items-center justify-center gap-2"
                        >
                            <span>{donate?.cta?.emailButton}</span>
                            <Mail size={16} strokeWidth={1.8} />
                        </a>

                        <Link
                            to="/contact"
                            className="btn-outline inline-flex items-center justify-center gap-2"
                        >
                            <span>{donate?.cta?.contactButton}</span>
                            <Arrow size={16} strokeWidth={1.8} />
                        </Link>
                    </div>
                </div>

                {/* تصویر سمت راست */}
                <div className="flex items-center justify-center">
                    <img
                        src={image7}
                        alt=""
                        aria-hidden="true"
                        className="h-20 w-20 shrink-0 object-contain sm:h-24 sm:w-24"
                    />
                </div>
            </div>
        </div>
    );
}
