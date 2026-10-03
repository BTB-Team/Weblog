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
            className="scroll-mt-10 bg-white py-20 md:py-24"
        >
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
                <div
                    dir="ltr"
                    className="grid items-center gap-8 md:grid-cols-[0.82fr_1.18fr] md:gap-10 lg:gap-12"
                >
                    {/* Image - Left */}
                    <div
                        dir={direction}
                        className="flex justify-center md:justify-start"
                    >
                        <div className="relative w-full max-w-[390px] overflow-hidden rounded-[1.7rem]">
                            <img
                                src={image1}
                                alt={about?.hero?.imageAlt}
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Story - Right */}
                    <div
                        dir={direction}
                        className="w-full max-w-[610px]"
                    >
                        {/* Titles - Left side of text column */}
                        <div
                            dir="ltr"
                            className="w-full text-left"
                        >
                            <p className="mb-2 text-sm font-medium text-[#A36F6F]">
                                {about?.story?.eyebrow}
                            </p>

                            <h2 className="font-serif text-2xl font-bold leading-[1.5] text-[#4A3B32] sm:text-3xl">
                                {about?.story?.title}
                            </h2>
                        </div>

                        {/* Story Text */}
                        <div
                            dir={direction}
                            className="mt-7 space-y-5"
                        >
                            {previewParagraphs.map(
                                (paragraph, index) => (
                                    <p
                                        key={`preview-${index}`}
                                        className="max-w-[590px] text-sm leading-7 text-[#7A685D] sm:text-[15px] sm:leading-8"
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}

                            {showStory &&
                                remainingParagraphs.length > 0 && (
                                    <div className="space-y-5 border-t border-[#EAD5C3]/60 pt-7">
                                        {remainingParagraphs.map(
                                            (paragraph, index) => (
                                                <p
                                                    key={`remaining-${index}`}
                                                    className="max-w-[590px] text-sm leading-7 text-[#7A685D] sm:text-[15px] sm:leading-8"
                                                >
                                                    {paragraph}
                                                </p>
                                            )
                                        )}
                                    </div>
                                )}
                        </div>

                        {/* Story Button - Left side of text column */}
                        {remainingParagraphs.length > 0 && (
                            <div
                                dir="ltr"
                                className="mt-7 flex w-full justify-start"
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowStory(
                                            (previous) => !previous
                                        )
                                    }
                                    aria-expanded={showStory}
                                    className="btn-primary inline-flex items-center justify-center gap-2"
                                >
                                    <span>
                                        {showStory
                                            ? about?.story?.hideStoryButton
                                            : about?.hero?.storyButton}
                                    </span>

                                    <Arrow
                                        size={16}
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