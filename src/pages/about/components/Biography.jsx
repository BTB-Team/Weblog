
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Biography({
    direction,
    isEnglish,
    about,
    image1,
    showStory,
    setShowStory,
}) {
    const Arrow = isEnglish ? ArrowRight : ArrowLeft;

    const storyParagraphs = Array.isArray(
        about?.story?.paragraphs
    )
        ? about.story.paragraphs
        : [];

    const previewParagraphs = storyParagraphs.slice(0, 2);
    const remainingParagraphs = storyParagraphs.slice(2);

    return (
        <section
            id="biography"
            className="scroll-mt-10 overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24"
        >
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8">
                <div
                    dir="ltr"
                    className={`grid grid-cols-1 items-center gap-8 sm:gap-10 md:gap-8 lg:gap-12 ${isEnglish
                            ? "md:grid-cols-[1.1fr_0.9fr]"
                            : "md:grid-cols-[0.9fr_1.1fr]"
                        }`}
                >
                    {/* Image */}
                    <div
                        dir={direction}
                        className={`flex min-w-0 justify-center ${isEnglish
                                ? "md:col-start-2 md:row-start-1 md:justify-end"
                                : "md:col-start-1 md:row-start-1 md:justify-start"
                            }`}
                    >
                        <div className="relative aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-[100px] border-2 border-amber-300 sm:max-w-[300px] sm:rounded-[120px] md:max-w-[320px] lg:max-w-[360px] lg:rounded-[150px] xl:max-w-[380px]">
                            <img
                                src={image1}
                                alt={about?.hero?.imageAlt}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Story */}
                    <div
                        dir={direction}
                        className={`w-full min-w-0 ${isEnglish
                                ? "md:col-start-1 md:row-start-1 md:justify-self-start"
                                : "md:col-start-2 md:row-start-1 md:justify-self-end"
                            }`}
                    >
                        {/* Titles */}
                        <div
                            dir={isEnglish ? "ltr" : "rtl"}
                            className={`w-full min-w-0 ${isEnglish ? "text-left" : "text-right"
                                }`}
                        >
                            <p className="mb-2 text-xs font-medium leading-6 text-[#A36F6F] sm:text-sm">
                                {about?.story?.eyebrow}
                            </p>

                            <h2 className="break-words text-2xl font-bold leading-[1.5] text-[#4A3B32] sm:text-3xl lg:text-4xl">
                                {about?.story?.title}
                            </h2>
                        </div>

                        {/* Story Text */}
                        <div
                            dir={direction}
                            className="mt-5 min-w-0 space-y-4 sm:mt-7 sm:space-y-5"
                        >
                            {previewParagraphs.map(
                                (paragraph, index) => (
                                    <p
                                        key={`preview-${index}`}
                                        className="break-words text-sm leading-7 text-[#7A685D] sm:text-[15px] sm:leading-8"
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}

                            {showStory &&
                                remainingParagraphs.length > 0 && (
                                    <div className="space-y-4 border-t border-[#EAD5C3]/60 pt-5 sm:space-y-5 sm:pt-7">
                                        {remainingParagraphs.map(
                                            (paragraph, index) => (
                                                <p
                                                    key={`remaining-${index}`}
                                                    className="break-words text-sm leading-7 text-[#7A685D] sm:text-[15px] sm:leading-8"
                                                >
                                                    {paragraph}
                                                </p>
                                            )
                                        )}
                                    </div>
                                )}
                        </div>

                        {/* Story Button */}
                        {remainingParagraphs.length > 0 && (
                            <div
                                dir={isEnglish ? "ltr" : "rtl"}
                                className={`mt-6 flex w-full sm:mt-7 ${isEnglish
                                        ? "justify-start"
                                        : "justify-end"
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowStory(
                                            (previous) => !previous
                                        )
                                    }
                                    aria-expanded={showStory}
                                    className="btn-primary max-w-full gap-2 whitespace-normal text-sm sm:text-base"
                                >
                                    <span>
                                        {showStory
                                            ? about?.story?.hideStoryButton
                                            : about?.hero?.storyButton}
                                    </span>

                                    <Arrow
                                        size={16}
                                        className="shrink-0"
                                        strokeWidth={1.8}
                                    />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
