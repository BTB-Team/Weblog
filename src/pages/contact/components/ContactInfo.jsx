import React from "react";

const EMAIL = "mariam2023amiri@gmail.com";

function MailIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
        >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
        </svg>
    );
}

function LocationIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
        >
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
        >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
        </svg>
    );
}

function CopyIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
        >
            <rect x="8" y="8" width="12" height="12" rx="2" />
            <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
        </svg>
    );
}

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

export default function ContactInfo({
    direction,
    t,
    petal2,
    handleCopyEmail,
}) {
    return (
        <section className="relative mx-auto max-w-6xl px-5 py-5 sm:px-8 md:py-8">
            <div
                dir="ltr"
                className="grid gap-4 md:grid-cols-3"
            >
                <button
                    type="button"
                    onClick={handleCopyEmail}
                    dir={direction}
                    className="group relative order-3 min-h-[125px] rounded-[6px] border border-[#EAD5C3]/60 bg-white/70 p-6 text-end shadow-[0_5px_25px_rgba(74,59,50,0.025)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_35px_rgba(74,59,50,0.07)] md:order-1"
                >
                    <Petal
                        src={petal2}
                        className="bottom-0 start-1 h-16 w-16 rotate-[-20deg]"
                        opacity="opacity-20"
                    />

                    <div className="relative z-10 flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7E9E2] text-[#A36F6F]">
                            <MailIcon />
                        </div>

                        <div className="min-w-0">
                            <h3 className="text-sm font-semibold text-[#4A3B32]">
                                {t.contact.info.emailTitle}
                            </h3>

                            <p
                                dir="ltr"
                                className="mt-2 truncate text-xs text-[#7A685D]"
                            >
                                {EMAIL}
                            </p>

                            <p className="mt-3 text-[10px] text-[#9A877A]">
                                {t.contact.info.emailDescription}
                            </p>
                        </div>
                    </div>

                    <div className="absolute bottom-4 start-5 flex items-center gap-1.5 text-[10px] text-[#A36F6F] opacity-0 transition-opacity group-hover:opacity-100">
                        <CopyIcon />
                        {t.contact.info.copy}
                    </div>
                </button>

                <div
                    dir={direction}
                    className="relative order-2 min-h-[125px] rounded-[6px] border border-[#EAD5C3]/60 bg-white/70 p-6 text-end shadow-[0_5px_25px_rgba(74,59,50,0.025)]"
                >
                    <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7E9E2] text-[#A36F6F]">
                            <LocationIcon />
                        </div>

                        <div className="min-w-0">
                            <h3 className="text-sm font-semibold text-[#4A3B32]">
                                {t.contact.info.locationTitle}
                            </h3>

                            <p className="mt-2 text-xs text-[#7A685D]">
                                {t.contact.info.location}
                            </p>

                            <p className="mt-3 text-[10px] leading-5 text-[#9A877A]">
                                {t.contact.info.locationDescription}
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    dir={direction}
                    className="relative order-1 min-h-[125px] rounded-[6px] border border-[#EAD5C3]/60 bg-white/70 p-6 text-end shadow-[0_5px_25px_rgba(74,59,50,0.025)] md:order-3"
                >
                    <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7E9E2] text-[#A36F6F]">
                            <ClockIcon />
                        </div>

                        <div className="min-w-0">
                            <h3 className="text-sm font-semibold text-[#4A3B32]">
                                {t.contact.info.responseTitle}
                            </h3>

                            <p className="mt-2 text-xs text-[#7A685D]">
                                {t.contact.info.responseTime}
                            </p>

                            <p className="mt-3 text-[10px] leading-5 text-[#9A877A]">
                                {t.contact.info.responseDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}