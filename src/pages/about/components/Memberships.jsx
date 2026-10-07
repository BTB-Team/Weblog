import React from "react";
import {
    Globe2,
    BookOpen,
    Users,
    Sparkles,
} from "lucide-react";

export default function Memberships({
    about,
    direction,
}) {
    const memberships = Array.isArray(
        about?.memberships?.items
    )
        ? about.memberships.items
        : [];

    const membershipIcons = [
        Globe2,
        BookOpen,
        Users,
        Sparkles,
    ];

    return (
        <section className="bg-white py-20 md:py-24">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">

                {/* Header */}
                <div
                    dir="ltr"
                    className="mb-10 text-left"
                >
                    <p className="mb-3 text-sm font-medium text-[#A36F6F]">
                        {about?.memberships?.eyebrow}
                    </p>

                    <h2 className="font-serif text-2xl font-bold leading-[1.5] text-[#A36F6F] sm:text-3xl">
                        {about?.memberships?.title}
                    </h2>
                </div>

                {/* Membership Icons */}
                <div
                    dir="ltr"
                    className="flex flex-wrap items-start justify-center gap-10 sm:justify-between"
                >
                    {memberships.slice(0, 4).map(
                        (membership, index) => {
                            const Icon =
                                membershipIcons[index];

                            return (
                                <div
                                    key={index}
                                    className="flex min-w-[130px] flex-1 flex-col items-center text-center"
                                >
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F7E9E2] text-[#A36F6F]">
                                        <Icon
                                            size={29}
                                            strokeWidth={1.6}
                                        />
                                    </div>

                                    <p
                                        dir={direction}
                                        className="mt-3 text-sm font-semibold text-[#4A3B32]"
                                    >
                                        {membership?.name}
                                    </p>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </section>
    );
}