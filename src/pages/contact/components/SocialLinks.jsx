import React from "react";
import SocialIcon from "../../../components/footer/components/SocialIcon";
import socialLinks from "../../../components/footer/FooterUrl";

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

const socialLabelKeys = [
    "facebook",
    "instagram",
    "x",
    "tiktok",
    "threads",
    "substack",
    "bluesky",
    "telegram",
    "email",
];

export default function SocialLinks({
    direction,
    t,
    petal1,
    petal3,
}) {
    return (
        <section
            dir={direction}
            className="relative mx-auto max-w-6xl px-5 py-14 text-center sm:px-8 md:py-16"
        >
            <div className="flex items-center justify-center gap-4">
                <span className="h-px w-10 bg-[#EAD5C3]" />

                <h2 className=" text-xl font-bold text-[#4A3B32] sm:text-2xl">
                    {t.contact.social.title}
                </h2>

                <span className="h-px w-10 bg-[#EAD5C3]" />
            </div>

            <p className="mt-3 text-xs text-[#8D786B]">
                {t.contact.social.description}
            </p>

            <div
                className="relative mx-auto mt-8 grid max-w-4xl grid-cols-3 gap-x-5 gap-y-8 sm:grid-cols-4 md:grid-cols-5"
                dir="ltr"
            >
                {socialLinks.map((social, index) => {
                    const labelKey = socialLabelKeys[index];

                    return (
                        <a
                            key={social.url}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t.contact.social.items[labelKey]}
                            className="group flex flex-col items-center gap-3"
                        >
                            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DCC9BC] text-[#7A685D] transition-all duration-300 group-hover:border-[#A36F6F] group-hover:bg-[#A36F6F] group-hover:text-white group-hover:shadow-[0_7px_20px_rgba(163,111,111,0.18)]">
                                <SocialIcon icon={social.icon} size={20} />
                            </span>

                            <span className="text-[11px] text-[#7A685D] transition-colors group-hover:text-[#A36F6F]">
                                {t.contact.social.items[labelKey]}
                            </span>
                        </a>
                    );
                })}

                <Petal
                    src={petal1}
                    className="start-[-20px] top-1/2 h-20 w-20 -translate-y-1/2 rotate-[-15deg]"
                    opacity="opacity-35"
                />

                <Petal
                    src={petal3}
                    className="end-[-20px] top-1/2 h-20 w-20 -translate-y-1/2 rotate-[20deg]"
                    opacity="opacity-35"
                />
            </div>
        </section>
    );
}