import { useState } from "react";
import {
    Heart,
    MessageCircle,
    Share2,
    Check,
    Send,
} from "lucide-react";

import { useLangStore } from "../store/useLangStore.js";

const PostCard = ({ post, onOpen }) => {
    const { lang, t } = useLangStore();

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(post.likes || 0);

    const [showComments, setShowComments] = useState(false);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState(post.comments || []);

    const [showToast, setShowToast] = useState(false);

    const isRTL = lang === "dr";

    const title =
        post.title?.[lang] ||
        post.title?.en ||
        "";

    const content =
        post.content?.[lang] ||
        post.content?.en ||
        "";

    const type =
        post.type?.[lang] ||
        post.type?.en ||
        "";

    // --------------------------------
    // Open writing modal
    // --------------------------------
    const handleOpen = () => {
        if (onOpen) {
            onOpen(post);
        }
    };

    // --------------------------------
    // Like
    // --------------------------------
    const handleLike = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (liked) {
            setLikes((prev) => Math.max(0, prev - 1));
        } else {
            setLikes((prev) => prev + 1);
        }

        setLiked((prev) => !prev);
    };

    // --------------------------------
    // Comment
    // --------------------------------
    const handleComment = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setShowComments((prev) => !prev);
    };

    // --------------------------------
    // Submit comment
    // --------------------------------
    const handleSubmitComment = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!comment.trim()) return;

        setComments((prev) => [
            ...prev,
            {
                id: Date.now(),
                text: comment.trim(),
            },
        ]);

        setComment("");
    };

    // --------------------------------
    // Share
    // --------------------------------
    const handleShare = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const url = `${window.location.origin}/writings/${post.id}`;

        try {
            await navigator.clipboard.writeText(url);

            setShowToast(true);

            setTimeout(() => {
                setShowToast(false);
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
                overflow-visible
                rounded-2xl
                border
                border-stone-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
            "
        >
            {/* ==========================================
                CLICKABLE POST CONTENT
            ========================================== */}

            <button
                type="button"
                onClick={handleOpen}
                className="
                    block
                    w-full
                    cursor-pointer
                    text-start
                "
            >
                {/* Image */}
                {post.image && (
                    <div
                        className="
                            relative
                            h-56
                            w-full
                            overflow-hidden
                            rounded-t-2xl
                        "
                    >
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

                        {/* Type */}
                        {type && (
                            <div
                                className={`
                                    absolute
                                    top-4
                                    rounded-full
                                    bg-white/90
                                    px-3
                                    py-1
                                    text-xs
                                    font-semibold
                                    text-stone-700
                                    shadow-sm
                                    backdrop-blur
                                    ${
                                        isRTL
                                            ? "right-4"
                                            : "left-4"
                                    }
                                `}
                            >
                                {type}
                            </div>
                        )}
                    </div>
                )}

                {/* Content */}
                <div className="p-5">
                    {/* Type if no image */}
                    {!post.image && type && (
                        <div
                            className="
                                mb-3
                                inline-block
                                rounded-full
                                bg-stone-100
                                px-3
                                py-1
                                text-xs
                                font-semibold
                                text-stone-600
                            "
                        >
                            {type}
                        </div>
                    )}

                    {/* Title */}
                    <h2
                        className="
                            mb-3
                            text-xl
                            font-bold
                            text-stone-900
                            transition-colors
                            group-hover:text-stone-600
                        "
                    >
                        {title}
                    </h2>

                    {/* Content preview */}
                    <p
                        className="
                            line-clamp-3
                            whitespace-pre-line
                            text-sm
                            leading-7
                            text-stone-600
                        "
                    >
                        {content}
                    </p>

                    {/* Read more */}
                    <div className="mt-4">
                        <span
                            className="
                                text-sm
                                font-semibold
                                text-stone-900
                            "
                        >
                            {t.writing.showallworks}
                        </span>
                    </div>
                </div>
            </button>

            {/* ==========================================
                ACTIONS
            ========================================== */}

           {/* ==========================================
    ACTIONS
========================================== */}

<div
    className="
        border-t
        border-stone-100
        px-5
        py-4
    "
>
    <div
        className="
            flex
            items-center
            justify-between
            gap-4
        "
    >
        {/* Like */}
        <button
            type="button"
            onClick={handleLike}
            className={`
                flex
                items-center
                gap-2
                text-sm
                transition-colors
                ${
                    liked
                        ? "text-red-500"
                        : "text-stone-500 hover:text-stone-900"
                }
            `}
        >
            <Heart
                size={18}
                fill={
                    liked
                        ? "currentColor"
                        : "none"
                }
            />

            <span>
                {likes}
            </span>

            <span>
                {t.writing.like}
            </span>
        </button>

        {/* Comment */}
        <button
            type="button"
            onClick={handleComment}
            className="
                flex
                items-center
                gap-2
                text-sm
                text-stone-500
                transition-colors
                hover:text-stone-900
            "
        >
            <MessageCircle size={18} />

            <span>
                {comments.length}
            </span>

            <span>
                {t.writing.Comments}
            </span>
        </button>

        {/* Share */}
        <div className="relative">
            <button
                type="button"
                onClick={handleShare}
                className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-stone-500
                    transition-colors
                    hover:text-stone-900
                "
            >
                <Share2 size={18} />

                <span>
                    {t.writing.share}
                </span>
            </button>

            {/* Copy Toast */}
            {showToast && (
                <div
                    className={`
                        absolute
                        top-full
                        z-50
                        mt-3
                        whitespace-nowrap
                        rounded-lg
                        bg-stone-900
                        px-3
                        py-2
                        text-xs
                        font-medium
                        text-white
                        shadow-xl
                        ${
                            isRTL
                                ? "right-0"
                                : "left-0"
                        }
                    `}
                >
                    <div className="flex items-center gap-2">
                        <Check
                            size={14}
                            className="text-green-400"
                        />

                        <span>
                            {
                                t.writing
                                    .Linkcopiedtoclipboard
                            }
                        </span>
                    </div>
                </div>
            )}
        </div>
    </div>

    {/* Comments */}
    {showComments && (
        <div
            className="
                mt-4
                border-t
                border-stone-100
                pt-4
            "
        >
            {comments.length > 0 && (
                <div className="mb-4 space-y-2">
                    {comments.map((item) => (
                        <div
                            key={item.id}
                            className="
                                rounded-lg
                                bg-stone-50
                                px-3
                                py-2
                                text-sm
                                text-stone-700
                            "
                        >
                            {item.text}
                        </div>
                    ))}
                </div>
            )}

            <form
                onSubmit={handleSubmitComment}
                className="
                    flex
                    items-center
                    gap-2
                "
            >
                <input
                    type="text"
                    value={comment}
                    onChange={(e) =>
                        setComment(e.target.value)
                    }
                    onClick={(e) =>
                        e.stopPropagation()
                    }
                    placeholder={
                        t.writing.Comments
                    }
                    className="
                        min-w-0
                        flex-1
                        rounded-lg
                        border
                        border-stone-200
                        bg-stone-50
                        px-3
                        py-2
                        text-sm
                        outline-none
                        transition
                        focus:border-stone-400
                        focus:bg-white
                    "
                />

                <button
                    type="submit"
                    className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-stone-900
                        text-white
                        transition
                        hover:bg-stone-700
                    "
                >
                    <Send size={16} />
                </button>
            </form>
        </div>
    )}
</div>
        </article>
    );
};

export default PostCard;
