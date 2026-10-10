
import React from "react";
import {
    Globe2,
    BookOpen,
    Users,
    Sparkles,
} from "lucide-react";

export default function Memberships({ about, direction }) {
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
        <section className="overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div
                    dir="ltr"
                    className="mb-8 text-left sm:mb-10 md:mb-12"
                >
                    <p className="mb-2 text-xs font-medium leading-6 text-[#A36F6F] sm:mb-3 sm:text-sm">
                        {about?.memberships?.eyebrow}
                    </p>

                    <h2 className="break-words text-2xl font-bold leading-[1.5] text-[#A36F6F] sm:text-3xl lg:text-4xl">
                        {about?.memberships?.title}
                    </h2>
                </div>

                {/* Memberships */}
                <div
                    dir="ltr"
                    className="grid grid-cols-2 items-start gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-10 md:grid-cols-4 md:gap-6 lg:gap-10"
                >
                    {memberships.slice(0, 4).map(
                        (membership, index) => {
                            const Icon = membershipIcons[index];

                            if (!Icon) return null;

                            return (
                                <div
                                    key={`${membership?.name}-${index}`}
                                    className="flex min-w-0 flex-col items-center text-center"
                                >
                                    {/* Icon */}
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F7E9E2] text-[#A36F6F] transition-transform duration-300 hover:scale-105 sm:h-16 sm:w-16">
                                        <Icon
                                            size={26}
                                            strokeWidth={1.6}
                                            className="sm:hidden"
                                        />

                                        <Icon
                                            size={29}
                                            strokeWidth={1.6}
                                            className="hidden sm:block"
                                        />
                                    </div>

                                    {/* Membership name */}
                                    <p
                                        dir={direction}
                                        className="mt-3 w-full break-words text-xs font-semibold leading-6 text-[#4A3B32] sm:mt-4 sm:text-sm sm:leading-7"
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