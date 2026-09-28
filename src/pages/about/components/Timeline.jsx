import React from "react";
import {
    GraduationCap,
    Briefcase,
    Languages,
    BookOpen,
} from "lucide-react";

export default function Timeline({
    direction,
    about,
}) {
    const education = Array.isArray(about?.education)
        ? about.education
        : [];

    const experience = Array.isArray(about?.experience)
        ? about.experience
        : [];

    const languages = Array.isArray(
        about?.languages?.items
    )
        ? about.languages.items
        : [];

    const skills = Array.isArray(
        about?.skills?.items
    )
        ? about.skills.items
        : [];

    const timelineItems = [
        ...education.map((item) => ({
            ...item,
            type: "education",
        })),
        ...experience.map((item) => ({
            ...item,
            type: "experience",
        })),
    ];

    return (
        <section
            id="timeline"
            className="scroll-mt-10 bg-[#FDFBF7] py-16 md:py-20"
        >
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
                <div
                    dir="ltr"
                    className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16"
                >
                    {/* Timeline - Left */}
                    <div
                        dir={direction}
                        className="relative"
                    >
                        <div className="absolute start-1/2 top-3 bottom-3 hidden w-px -translate-x-1/2 bg-[#EAD5C3] md:block" />

                        <div className="space-y-6">
                            {timelineItems.map(
                                (item, index) => {
                                    const isLeft =
                                        index % 2 === 0;

                                    return (
                                        <div
                                            key={`${item?.type}-${index}`}
                                            className="relative md:grid md:grid-cols-2 md:gap-10"
                                        >
                                            <div
                                                className={
                                                    isLeft
                                                        ? "md:pe-10 md:text-end"
                                                        : "md:col-start-2 md:ps-10 md:text-start"
                                                }
                                            >
                                                <div
                                                    className={`flex max-w-[360px] items-start gap-3 ${isLeft
                                                        ? "ms-auto flex-row-reverse md:justify-start"
                                                        : "me-auto flex-row md:justify-start"
                                                        }`}
                                                >
                                                    {/* Icon */}
                                                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-[#FDFBF7] bg-[#A36F6F] text-white shadow-[0_3px_12px_rgba(163,111,111,0.16)]">
                                                        {item?.type ===
                                                            "education" ? (
                                                            <GraduationCap
                                                                size={18}
                                                                strokeWidth={1.8}
                                                            />
                                                        ) : (
                                                            <Briefcase
                                                                size={18}
                                                                strokeWidth={1.8}
                                                            />
                                                        )}
                                                    </div>

                                                    <div className="min-w-0 flex-1">
                                                        <div className="mb-1.5 text-xs text-[#7A685D]">
                                                            {item?.date}
                                                        </div>

                                                        <h4 className="text-[15px] font-bold leading-6 text-[#4A3B32] sm:text-base">
                                                            {item?.title}
                                                        </h4>

                                                        <p className="mt-0.5 text-sm font-medium text-[#A36F6F]">
                                                            {item?.organization}
                                                        </p>

                                                        {item?.description && (
                                                            <p className="mt-1 text-sm leading-6 text-[#7A685D]">
                                                                {item?.description}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Center Dot */}
                                            <div className="absolute start-1/2 top-1 hidden -translate-x-1/2 md:block">
                                                <div className="h-3 w-3 rounded-full border-2 border-[#FDFBF7] bg-[#A36F6F]" />
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>

                    {/* Right Column */}
                    <aside
                        dir={direction}
                        className="lg:translate-x-20 lg:translate-y-8"
                    >
                        {/* Header above Languages & Skills */}
                        <div className="mb-27 text-right">
                            <p className="mb-2 text-sm font-medium text-[#A36F6F]">
                                {about?.timeline?.eyebrow}
                            </p>

                            <h2 className="whitespace-nowrap font-serif text-2xl font-bold leading-[1.5] text-[#A36F6F] sm:text-4xl">
                                {about?.timeline?.title}
                            </h2>

                            <p className="mt-3 text-sm font-bold leading-7 text-[#7A685D]">
                                {about?.timeline?.description}
                            </p>
                        </div>

                        {/* Languages */}
                        <div>
                            <div className="mb-5 flex items-center gap-2 border-b border-[#EAD5C3] pb-3">
                                <Languages
                                    size={19}
                                    strokeWidth={1.7}
                                    className="text-[#A36F6F]"
                                />

                                <h3 className="text-lg font-bold text-[#4A3B32]">
                                    {about?.languages?.title}
                                </h3>
                            </div>

                            <div className="space-y-3">
                                {languages.map(
                                    (item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between gap-4"
                                        >
                                            <span className="text-sm text-[#4A3B32]">
                                                {item?.name}
                                            </span>

                                            <span className="text-xs text-[#7A685D]">
                                                {item?.level}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="mt-9">
                            <div className="mb-5 flex items-center gap-2 border-b border-[#EAD5C3] pb-3">
                                <BookOpen
                                    size={19}
                                    strokeWidth={1.7}
                                    className="text-[#A36F6F]"
                                />

                                <h3 className="text-lg font-bold text-[#4A3B32]">
                                    {about?.skills?.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skills.map(
                                    (skill, index) => (
                                        <span
                                            key={index}
                                            className="rounded-full bg-[#F7E9E2] px-3 py-1.5 text-xs text-[#7A685D]"
                                        >
                                            {typeof skill ===
                                                "object"
                                                ? skill?.name
                                                : skill}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}