import React from "react";
import { Sparkles } from "lucide-react";

export default function DonationMessage({ donate }) {
    return (
        <div className="min-w-0 rounded-[1.7rem] border border-[#EAD5C3]/70 bg-[#FDFBF7] p-7 sm:p-9">
            <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7E9E2] text-[#A36F6F]">
                    <Sparkles size={20} strokeWidth={1.7} />
                </div>

                <h2 className="text-xl font-bold text-[#4A3B32] sm:text-2xl">
                    {donate?.message?.title}
                </h2>
            </div>

            <p className="text-sm leading-8 text-[#7A685D] sm:text-[15px]">
                {donate?.message?.description}
            </p>

            <div className="mt-7 rounded-2xl border border-[#EAD5C3]/60 bg-white p-5">
                <p className="text-sm font-medium leading-7 text-[#4A3B32]">
                    {donate?.message?.thankYou}
                </p>

                <p className="mt-2 text-sm leading-7 text-[#7A685D]">
                    {donate?.message?.usage}
                </p>
            </div>
        </div>
    );
}