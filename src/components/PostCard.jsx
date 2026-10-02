'use client';

import React, { useState } from 'react';

import {
    Heart,
    MessageCircle,
    Share2,
    Send,
} from 'lucide-react';

import { useLangStore } from '../store/useLangStore.js';

export default function PostCard({
    post,
    onSelect,
    onShare,
    isSelected = false,
}) {
    const { lang, t } = useLangStore();

    // --------------------------------------------------
    // LIKE STATE
    // --------------------------------------------------

    const [liked, setLiked] = useState(false);

    const [likes, setLikes] = useState(
        Number(post?.likes) || 0
    );

    // --------------------------------------------------
    // COMMENT STATE
    // --------------------------------------------------

    const [showComments, setShowComments] =
        useState(false);

    const [showCopiedToast, setShowCopiedToast] =
        useState(false);

    const [commentText, setCommentText] =
        useState('');

    const [comments, setComments] = useState(
        Array.isArray(post?.comments)
            ? post.comments
            : []
    );

    // --------------------------------------------------
    // LOCALIZED VALUE
    // --------------------------------------------------

    const getLocalizedValue = (value) => {
        if (!value) {
            return '';
        }

        if (typeof value === 'string') {
            return value;
        }

        return (
            value?.[lang] ||
            value?.en ||
            value?.dr ||
            value?.ps ||
            ''
        );
    };

    // --------------------------------------------------
    // POST DATA
    // --------------------------------------------------

    const title = getLocalizedValue(
        post?.title
    );

    const description =
        getLocalizedValue(
            post?.description
        ) ||
        getLocalizedValue(
            post?.content
        );

    const category = getLocalizedValue(
        post?.category
    );

    const image =
        post?.image ||
        post?.imageUrl ||
        post?.coverImage ||
        '/images/default-post.jpg';

    const postId = String(
        post?.id ??
        post?._id ??
        post?.title?.en ??
        post?.title?.dr ??
        post?.title?.ps ??
        'post'
    );

    // --------------------------------------------------
    // SELECT POST
    // --------------------------------------------------

    const handleSelect = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (onSelect) {
            onSelect(post);
        }
    };

    // --------------------------------------------------
    // LIKE
    // --------------------------------------------------

    const handleLike = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (liked) {
            // Unlike: decrease exactly 1
            setLiked(false);

            setLikes((currentLikes) =>
                Math.max(
                    0,
                    currentLikes - 1
                )
            );
        } else {
            // Like: increase exactly 1
            setLiked(true);

            setLikes((currentLikes) =>
                currentLikes + 1
            );
        }
    };

    // --------------------------------------------------
    // COMMENT BUTTON
    // --------------------------------------------------

    const handleComment = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setShowComments(
            (previous) => !previous
        );
    };

    // --------------------------------------------------
    // ADD COMMENT
    // --------------------------------------------------

    const handleAddComment = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const text = commentText.trim();

        if (!text) {
            return;
        }

        const newComment = {
            id: Date.now(),
            text,
            createdAt:
                new Date().toISOString(),
        };

        setComments((previous) => [
            ...previous,
            newComment,
        ]);

        setCommentText('');
    };

    // --------------------------------------------------
    // SHARE
    // --------------------------------------------------

    const handleShareClick = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            if (onShare) {
                await onShare(post);
            }

            setShowCopiedToast(true);

            setTimeout(() => {
                setShowCopiedToast(false);
            }, 2000);
        } catch (error) {
            console.error(
                "Unable to share post:",
                error
            );
        }
    };

    // --------------------------------------------------
    // RETURN
    // --------------------------------------------------

    return (
        <article
            onClick={handleSelect}
            className={`
            cursor-pointer
                group
                relative
                overflow-visible
                rounded-2xl
                border
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                dark:bg-neutral-900
                ${
                    isSelected
                        ? 'border-emerald-500'
                        : 'border-neutral-200 dark:border-neutral-800'
                }
            `}
        >
            {/* ---------------------------------------- */}
            {/* IMAGE */}
            {/* ---------------------------------------- */}

            <div
                className="
                    relative
                    h-56
                    w-full
                    overflow-hidden
                    bg-neutral-100
                    dark:bg-neutral-800
                "
            >
                <img
                    src={image}
                    alt={title}
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                    "
                    onError={(e) => {
                        e.currentTarget.src =
                            '/images/default-post.jpg';
                    }}
                />

                {/* Image Overlay */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/50
                        via-transparent
                        to-transparent
                        opacity-70
                    "
                />

                {/* Category */}

                {category && (
                    <div
                        className="
                            absolute
                            left-4
                            top-4
                            rounded-full
                            bg-emerald-500
                            px-3
                            py-1
                            text-xs
                            font-semibold
                            text-white
                            shadow-md
                        "
                    >
                        {category}
                    </div>
                )}
            </div>

            {/* ---------------------------------------- */}
            {/* CONTENT */}
            {/* ---------------------------------------- */}

            <div className="p-5">
                {/* Title */}

                <h3
                    className="
                        line-clamp-2
                        text-lg
                        font-bold
                        leading-7
                        text-neutral-900
                        transition-colors
                        group-hover:text-emerald-600
                        
                    "
                >
                    {title}
                </h3>

                {/* Description */}

                {description && (
                    <p
                        className="
                            mt-3
                            line-clamp-3
                            text-sm
                            leading-6
                            text-neutral-600
                            dark:text-neutral-400
                        "
                    >
                        {description}
                    </p>
                )}

                {/* ------------------------------------ */}
                {/* ACTIONS */}
                {/* ------------------------------------ */}

                <div
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                    className="
                        mt-5
                        flex
                        items-center
                        justify-between
                        border-t
                        border-neutral-100
                        pt-4
                        dark:border-neutral-800
                    "
                >
                    {/* LIKE */}

                    <button
                        type="button"
                        onClick={handleLike}
                        className={`
                            flex
                            items-center
                            gap-1.5
                            rounded-lg
                            px-2
                            py-1.5
                            text-sm
                            font-medium
                            transition-all
                            duration-200
                            ${
                                liked
                                    ? `
                                        bg-red-50
                                        text-red-500
                                        dark:bg-red-500/10
                                        dark:text-red-400
                                    `
                                    : `
                                        text-neutral-500
                                        hover:bg-red-50
                                        hover:text-red-500
                                        dark:text-neutral-400
                                        dark:hover:bg-red-500/10
                                        dark:hover:text-red-400
                                    `
                            }
                        `}
                        aria-label={
                            liked
                                ? 'Unlike'
                                : 'Like'
                        }
                    >
                        <Heart
                            size={18}
                            strokeWidth={2}
                            fill={
                                liked
                                    ? 'currentColor'
                                    : 'none'
                            }
                        />

                        <span>
                            {likes}
                        </span>
                    </button>

                    {/* COMMENT */}

                    <button
                        type="button"
                        onClick={handleComment}
                        className="
                            flex
                            items-center
                            gap-1.5
                            rounded-lg
                            px-2
                            py-1.5
                            text-sm
                            font-medium
                            text-neutral-500
                            transition-all
                            duration-200
                            hover:bg-emerald-50
                            hover:text-emerald-600
                            dark:text-neutral-400
                            dark:hover:bg-emerald-500/10
                            dark:hover:text-emerald-400
                        "
                    >
                        <MessageCircle
                            size={18}
                        />

                        <span>
                            {comments.length}
                        </span>
                    </button>

                    {/* SHARE */}

                    <div className="relative flex items-center">
                        {showCopiedToast && (
                            <div className="absolute bottom-full right-0 z-[100] mb-2 whitespace-nowrap">
                                <div className="flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white shadow-xl">
                                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20">
                                        <span className="text-[10px]">✓</span>
                                    </span>

                                    <span>
                                        {t?.writing?.linkcopied || "Link copied"}
                                    </span>
                                </div>

                                <div className="absolute -bottom-1 right-4 h-2 w-2 rotate-45 bg-emerald-600" />
                            </div>
                        )}

                        <button
                            type="button"
                            onClick={handleShareClick}
                            className="
                                flex
                                items-center
                                gap-1.5
                                rounded-lg
                                px-2
                                py-1.5
                                text-sm
                                font-medium
                                text-neutral-500
                                transition-all
                                duration-200
                                hover:bg-emerald-50
                                hover:text-emerald-600
                                dark:text-neutral-400
                                dark:hover:bg-emerald-500/10
                                dark:hover:text-emerald-400
                            "
                            aria-label="Copy post link"
                        >
                            <Share2
                                size={18}
                            />

                            <span>
                                {t.writing.share}
                            </span>
                        </button>
                    </div>
                </div>

                {/* ------------------------------------ */}
                {/* COMMENTS */}
                {/* ------------------------------------ */}

                {showComments && (
                    <div
                        className="
                            mt-4
                            border-t
                            border-neutral-100
                            pt-4
                            dark:border-neutral-800
                        "
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        {/* Existing comments */}

                        {comments.length > 0 && (
                            <div
                                className="
                                    mb-4
                                    max-h-40
                                    space-y-3
                                    overflow-y-auto
                                    pr-1
                                "
                            >
                                {comments.map(
                                    (
                                        comment,
                                        index
                                    ) => (
                                        <div
                                            key={
                                                comment?.id ||
                                                `${postId}-comment-${index}`
                                            }
                                            className="
                                                rounded-xl
                                                bg-neutral-50
                                                p-3
                                                dark:bg-neutral-800
                                            "
                                        >
                                            <p
                                                className="
                                                    text-sm
                                                    leading-6
                                                    text-neutral-700
                                                    dark:text-neutral-300
                                                "
                                            >
                                                {comment?.text ||
                                                    comment?.content ||
                                                    ''}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        )}

                        {/* Comment form */}

                        <form
                            onSubmit={
                                handleAddComment
                            }
                            className="
                                flex
                                items-center
                                gap-2
                            "
                        >
                            <input
                                type="text"
                                value={
                                    commentText
                                }
                                onChange={(e) =>
                                    setCommentText(
                                        e.target.value
                                    )
                                }
                                placeholder={
                                    
                                        t.writing.writeacomment
                                      
                                   
                                }
                                className="
                                    min-w-0
                                    flex-1
                                    rounded-xl
                                    border
                                    border-neutral-200
                                    bg-white
                                    px-3
                                    py-2.5
                                    text-sm
                                    outline-none
                                    transition
                                    focus:border-emerald-500
                                    focus:ring-2
                                    focus:ring-emerald-500/20
                                    dark:border-neutral-700
                                    dark:bg-neutral-800
                                    dark:text-white
                                    dark:placeholder:text-neutral-500
                                "
                            />

                            <button
                                type="submit"
                                disabled={
                                    !commentText.trim()
                                }
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-emerald-500
                                    text-white
                                    transition
                                    hover:bg-emerald-600
                                    disabled:cursor-not-allowed
                                    disabled:opacity-40
                                "
                                aria-label="{t.writing.sendcomment}"
                            >
                                <Send
                                    size={17}
                                />
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </article>
    );
}
