import React from "react";
import { Mail, Phone } from "lucide-react";

export default function DonationContact({
    donate,
    isEnglish,
    direction,
}) {
    const contact = donate?.contact || {};

    const contactRowDirection = isEnglish
        ? "flex-row"
        : "flex-row-reverse";

    const textAlignment = isEnglish
        ? "text-left"
        : "text-right";

    return (
        <div className="min-w-0 rounded-[1.7rem] border border-[#EAD5C3]/70 bg-[#FCF7F0] p-7 sm:p-9">
            <h2 className="text-xl font-bold text-[#4A3B32] sm:text-2xl">
                {contact.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#7A685D]">
                {contact.description}
            </p>

            <div className="mt-7 space-y-4">
                {/* PHONE */}
                <a
                    href="tel:+93728288062"
                    dir={direction}
                    className={`flex min-w-0 items-center gap-4 rounded-2xl border border-[#EAD5C3]/70 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(74,59,50,0.06)] ${contactRowDirection}`}
                >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7E9E2] text-[#A36F6F]">
                        <Phone size={19} strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0 flex-1">
                        <p
                            dir={direction}
                            className={`text-xs text-[#7A685D] ${textAlignment}`}
                        >
                            {contact.phoneLabel}
                        </p>

                        <p
                            dir="ltr"
                            className={`mt-1 text-sm font-semibold text-[#4A3B32] ${textAlignment}`}
                        >
                            +93728288062
                        </p>
                    </div>
                </a>

                {/* EMAIL */}
                <a
                    href="mailto:mariam2023amiri@gmail.com"
                    dir={direction}
                    className={`flex min-w-0 items-center gap-4 rounded-2xl border border-[#EAD5C3]/70 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(74,59,50,0.06)] ${contactRowDirection}`}
                >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7E9E2] text-[#A36F6F]">
                        <Mail size={19} strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0 flex-1">
                        <p
                            dir={direction}
                            className={`text-xs text-[#7A685D] ${textAlignment}`}
                        >
                            {contact.emailLabel}
                        </p>

                        <p
                            dir="ltr"
                            className={`mt-1 break-all text-sm font-semibold text-[#4A3B32] ${textAlignment}`}
                        >
                            mariam2023amiri@gmail.com
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
}
