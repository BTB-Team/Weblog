import { useState } from "react";
import {
    Heart,
    MessageCircle,
    Share2,
    Check,
} from "lucide-react";

import { useLangStore } from "../store/useLangStore.js";
import db from "../../db.json";

const PostCard = ({ post }) => {
    const { lang } = useLangStore();

    const [liked, setLiked] = useState(false);
    const [copied, setCopied] = useState(false);

    const isRTL = lang === "dr";

    const title =
        post.title?.[lang] ||
        post.title?.en ||
        "";

    const type =
        post.type?.[lang] ||
        post.type?.en ||
        "";

    const note =
        post.note?.[lang] ||
        post.note?.en ||
        "";

    const content =
        post.content?.[lang] ||
        post.content?.en ||
        "";

    const commentCount =
        db.comments?.filter(
            (comment) =>
                comment.postId === post.id &&
                comment.isApproved
        ).length || 0;

    // Short preview
    const excerpt = content
        .split("\n\n")
        .filter(Boolean)
        .slice(0, 2)
        .join("\n\n");

    const handleLike = () => {
        setLiked((prev) => !prev);
    };

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(
                window.location.href
            );

            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (error) {
            console.error(
                "Failed to copy link:",
                error
            );
        }
    };

    return (
        <article
            dir={isRTL ? "rtl" : "ltr"}
            className="
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-stone-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
            "
        >
            {/* =========================
                IMAGE
            ========================== */}

            <div className="relative h-64 overflow-hidden">
                <img
                    src={post.image}
                    alt={title}
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                    "
                />

                {/* Image overlay */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/40
                        via-transparent
                        to-transparent
                    "
                />

                {/* Category */}
                {type && (
                    <span
                        className="
                            absolute
                            left-5
                            top-5
                            rounded-full
                            bg-white/90
                            px-3
                            py-1.5
                            text-xs
                            font-semibold
                            text-[#8B654B]
                            shadow-sm
                            backdrop-blur-sm
                            rtl:left-auto
                            rtl:right-5
                        "
                    >
                        {type}
                    </span>
                )}
            </div>

            {/* =========================
                BODY
            ========================== */}

            <div className="flex flex-1 flex-col p-6">

                {/* Type */}
                <span className="mb-2 text-xs font-bold uppercase tracking-wider text-[#9B7354]">
                    {type}
                </span>

                {/* Title */}
                <h2
                    className="
                        mb-3
                        text-2xl
                        font-semibold
                        leading-snug
                        text-stone-800
                        transition-colors
                        group-hover:text-[#8B654B]
                    "
                >
                    {title}
                </h2>

                {/* Note */}
                {note && (
                    <p
                        className="
                            mb-3
                            text-xs
                            leading-6
                            text-[#9B7354]
                        "
                    >
                        {note}
                    </p>
                )}

                {/* Content */}
                <p
                    className="
                        line-clamp-4
                        text-sm
                        leading-7
                        text-stone-500
                    "
                >
                    {excerpt}
                </p>

                {/* =========================
                    ACTIONS
                ========================== */}

                <div
                    className="
                        mt-auto
                        flex
                        items-center
                        gap-5
                        border-t
                        border-stone-100
                        pt-5
                    "
                >
                    {/* Like */}
                    <button
                        type="button"
                        onClick={handleLike}
                        aria-label={
                            isRTL
                                ? "پسندیدن"
                                : "Like"
                        }
                        aria-pressed={liked}
                        className={`
                            group/like
                            inline-flex
                            items-center
                            gap-1.5
                            text-sm
                            transition-colors
                            ${
                            liked
                                ? "text-red-500"
                                : "text-stone-500 hover:text-red-500"
                        }
                        `}
                    >
                        <Heart
                            size={19}
                            strokeWidth={1.8}
                            fill={liked ? "currentColor" : "none"}
                            className={`
                                transition-transform
                                duration-200
                                ${
                                liked
                                    ? "animate-[heartPulse_0.4s_ease]"
                                    : "group-hover/like:scale-110"
                            }
                            `}
                        />

                        <span>
                            {liked ? 1 : 0}
                        </span>
                    </button>

                    {/* Comments */}
                    <button
                        type="button"
                        aria-label={
                            isRTL
                                ? "نظرات"
                                : "Comments"
                        }
                        className="
                            inline-flex
                            items-center
                            gap-1.5
                            text-sm
                            text-stone-500
                            transition-colors
                            hover:text-[#8B654B]
                        "
                    >
                        <MessageCircle
                            size={19}
                            strokeWidth={1.8}
                        />

                        <span>
                            {commentCount}
                        </span>
                    </button>

                    {/* Share */}
                    <button
                        type="button"
                        onClick={handleShare}
                        aria-label={
                            isRTL
                                ? "اشتراک‌گذاری"
                                : "Share"
                        }
                        className="
                            ms-auto
                            inline-flex
                            items-center
                            gap-1.5
                            text-sm
                            text-stone-500
                            transition-colors
                            hover:text-[#8B654B]
                        "
                    >
                        {copied ? (
                            <Check
                                size={18}
                                strokeWidth={2}
                                className="text-green-500"
                            />
                        ) : (
                            <Share2
                                size={18}
                                strokeWidth={1.8}
                            />
                        )}

                        <span>
                            {copied
                                ? isRTL
                                    ? "کپی شد!"
                                    : "Copied!"
                                : isRTL
                                    ? "اشتراک"
                                    : "Share"}
                        </span>
                    </button>
                </div>
            </div>

            {/* =========================
                TOAST
            ========================== */}

            {copied && (
                <div
                    role="status"
                    className="
                        absolute
                        bottom-5
                        left-1/2
                        z-10
                        flex
                        -translate-x-1/2
                        items-center
                        gap-2
                        whitespace-nowrap
                        rounded-xl
                        bg-stone-900
                        px-4
                        py-2.5
                        text-xs
                        font-medium
                        text-white
                        shadow-lg
                    "
                >
                    <Check
                        size={14}
                        strokeWidth={2}
                        className="text-green-400"
                    />

                    {isRTL
                        ? "لینک با موفقیت کپی شد"
                        : "Link copied to clipboard"}
                </div>
            )}
        </article>
    );
};

export default PostCard;
