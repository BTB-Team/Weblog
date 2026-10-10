
import React from "react";
import {
    GraduationCap,
    Briefcase,
    Languages,
    BookOpen,
} from "lucide-react";

export default function Timeline({ direction, about }) {
    const isEnglish = direction === "ltr";

    const education = Array.isArray(about?.education)
        ? about.education
        : [];

    const experience = Array.isArray(about?.experience)
        ? about.experience
        : [];

    const languages = Array.isArray(about?.languages?.items)
        ? about.languages.items
        : [];

    const skills = Array.isArray(about?.skills?.items)
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
            className="scroll-mt-10 overflow-hidden bg-[#FDFBF7] py-12 sm:py-16 lg:py-20"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    dir="ltr"
                    className={`grid min-w-0 grid-cols-1 items-start gap-10 lg:gap-12 ${isEnglish
                            ? "lg:grid-cols-[minmax(260px,300px)_minmax(0,1fr)]"
                            : "lg:grid-cols-[minmax(0,1fr)_minmax(260px,300px)]"
                        }`}
                >
                    {/* Timeline */}
                    <div
                        dir={direction}
                        className={`relative min-w-0 lg:translate-x-4 ${isEnglish
                                ? "lg:col-start-2 lg:row-start-1"
                                : "lg:col-start-1 lg:row-start-1"
                            }`}
                    >
                        <div className="absolute start-1/2 top-3 bottom-3 hidden w-px -translate-x-1/2 bg-[#EAD5C3] md:block" />

                        <div className="space-y-8 sm:space-y-10">
                            {timelineItems.map((item, index) => {
                                const isLeft = index % 2 === 0;

                                return (
                                    <div
                                        key={`${item?.type}-${index}`}
                                        className="relative min-w-0 md:grid md:grid-cols-2 md:gap-4 lg:gap-5"
                                    >
                                        <div
                                            className={
                                                isLeft
                                                    ? "min-w-0 md:pe-4 md:text-end lg:pe-5"
                                                    : "min-w-0 md:col-start-2 md:ps-4 md:text-start lg:ps-5"
                                            }
                                        >
                                            <div
                                                className={`flex min-w-0 items-start gap-3 ${isLeft
                                                        ? "md:ms-auto md:flex-row-reverse"
                                                        : "md:me-auto md:flex-row"
                                                    }`}
                                            >
                                                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-4 border-[#FDFBF7] bg-[#A36F6F] text-white shadow-[0_3px_12px_rgba(163,111,111,0.16)] sm:h-10 sm:w-10">
                                                    {item?.type === "education" ? (
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
                                                    <div className="mb-1.5 break-words text-xs leading-5 text-[#7A685D] sm:text-sm">
                                                        {item?.date}
                                                    </div>

                                                    <h4 className="break-words text-sm font-bold leading-6 text-[#4A3B32] sm:text-base">
                                                        {item?.title}
                                                    </h4>

                                                    <p className="mt-1 break-words text-sm font-medium leading-6 text-[#A36F6F]">
                                                        {item?.organization}
                                                    </p>

                                                    {item?.description && (
                                                        <p className="mt-2 break-words text-sm leading-6 text-[#7A685D] sm:leading-7">
                                                            {item.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute start-1/2 top-1 hidden -translate-x-1/2 md:block">
                                            <div className="h-3 w-3 rounded-full border-2 border-[#FDFBF7] bg-[#A36F6F]" />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Background, Languages and Skills */}
                    <aside
                        dir={direction}
                        className={`min-w-0 lg:relative lg:left-4 ${isEnglish
                                ? "lg:col-start-1 lg:row-start-1"
                                : "lg:col-start-2 lg:row-start-1"
                            }`}
                    >
                        <div className="mb-10 sm:mb-12 lg:mb-14">
                            <p className="mb-2 text-sm font-medium leading-6 text-[#A36F6F]">
                                {about?.timeline?.eyebrow}
                            </p>

                            <h2 className="text-xl font-bold leading-[1.5] text-[#A36F6F] sm:text-2xl lg:whitespace-nowrap lg:text-[26px]">
                                {about?.timeline?.title}
                            </h2>

                            <p className="mt-3 break-words text-sm font-bold leading-7 text-[#7A685D] sm:text-base">
                                {about?.timeline?.description}
                            </p>
                        </div>

                        {/* Languages */}
                        <div className="min-w-0">
                            <div className="mb-5 flex min-w-0 items-center gap-2 border-b border-[#EAD5C3] pb-3">
                                <Languages
                                    size={19}
                                    strokeWidth={1.7}
                                    className="shrink-0 text-[#A36F6F]"
                                />

                                <h3 className="break-words text-base font-bold text-[#4A3B32] sm:text-lg">
                                    {about?.languages?.title}
                                </h3>
                            </div>

                            <div className="space-y-3">
                                {languages.map((item, index) => (
                                    <div
                                        key={`${item?.name}-${index}`}
                                        className="flex min-w-0 items-start justify-between gap-3"
                                    >
                                        <span className="min-w-0 break-words text-sm leading-6 text-[#4A3B32]">
                                            {item?.name}
                                        </span>

                                        <span className="shrink-0 break-words text-xs leading-6 text-[#7A685D]">
                                            {item?.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="mt-8 min-w-0 sm:mt-10">
                            <div className="mb-5 flex min-w-0 items-center gap-2 border-b border-[#EAD5C3] pb-3">
                                <BookOpen
                                    size={19}
                                    strokeWidth={1.7}
                                    className="shrink-0 text-[#A36F6F]"
                                />

                                <h3 className="break-words text-base font-bold text-[#4A3B32] sm:text-lg">
                                    {about?.skills?.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => {
                                    const skillName =
                                        typeof skill === "object"
                                            ? skill?.name
                                            : skill;

                                    return (
                                        <span
                                            key={`${skillName}-${index}`}
                                            className="max-w-full break-words rounded-full bg-[#F7E9E2] px-3 py-1.5 text-xs leading-5 text-[#7A685D]"
                                        >
                                            {skillName}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
