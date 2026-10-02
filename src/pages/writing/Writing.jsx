import { useEffect, useMemo, useState } from "react";

import {
    Search,
    X,
    Heart,
    MessageCircle,
    Share2,
    ArrowLeft,
    ArrowRight,
    Send,
    BookOpen,
    Check,
} from "lucide-react";

import { useLangStore } from "../../store/useLangStore.js";
import PostCard from "../../components/PostCard.jsx";
import db from "../../../db.json";

export default function Writing() {
  
    const lang = useLangStore(
        (state) => state.lang
    );

    const t = useLangStore(
        (state) => state.t
    );

    const isRTL = lang === "dr";

    /*
    |--------------------------------------------------------------------------
    | STATES
    |--------------------------------------------------------------------------
    */

    const [search, setSearch] = useState("");

    const [selectedCategory, setSelectedCategory] =
        useState("All");

    const [selectedPostType, setSelectedPostType] =
        useState("All");

    const [selectedPost, setSelectedPost] =
        useState(null);

    const [visibleCount, setVisibleCount] =
        useState(5);

    const [showAllPosts, setShowAllPosts] =
        useState(false);

    const [isModalOpen, setIsModalOpen] =
        useState(false);

    const [liked, setLiked] = useState(false);

    const [likes, setLikes] = useState(0);

    const [comments, setComments] = useState([]);

    const [commentText, setCommentText] =
        useState("");

    const [showCommentBox, setShowCommentBox] =
        useState(false);

    /*
    |--------------------------------------------------------------------------
    | WRITINGS
    |--------------------------------------------------------------------------
    */

    const writings = useMemo(() => {
        if (Array.isArray(db?.writings)) {
            return db.writings;
        }

        return [];
    }, []);

    /*
    |--------------------------------------------------------------------------
    | LOCALIZED VALUE
    |--------------------------------------------------------------------------
    */

    const getLocalizedValue = (value) => {
        if (!value) {
            return "";
        }

        if (typeof value === "string") {
            return value;
        }

        if (typeof value === "object") {
            return (
                value?.[lang] ||
                value?.en ||
                value?.dr ||
                ""
            );
        }

        return "";
    };

    /*
    |--------------------------------------------------------------------------
    | FIRST PARAGRAPH
    |--------------------------------------------------------------------------
    */

    const getFirstParagraph = (value) => {
        const text = getLocalizedValue(value);

        if (!text) {
            return "";
        }

        const paragraphs = text
            .split(/\n\s*\n/)
            .map((paragraph) => paragraph.trim())
            .filter(Boolean);

        return paragraphs[0] || text;
    };

    /*
    |--------------------------------------------------------------------------
    | CATEGORIES
    |--------------------------------------------------------------------------
    */

    const categories = useMemo(() => {
        const categoryValues = writings
            .map((post) =>
                getLocalizedValue(post.category)
            )
            .filter(Boolean);

        return [
            "All",
            ...Array.from(
                new Set(categoryValues)
            ),
        ];
    }, [writings, lang]);

    /*
    |--------------------------------------------------------------------------
    | POST TYPES
    |--------------------------------------------------------------------------
    */

    const postTypes = useMemo(() => {
        const typeValues = writings
            .map((post) =>
                getLocalizedValue(post.type)
            )
            .filter(Boolean);

        return [
            "All",
            ...Array.from(
                new Set(typeValues)
            ),
        ];
    }, [writings, lang]);

    /*
    |--------------------------------------------------------------------------
    | FILTER POSTS
    |--------------------------------------------------------------------------
    */

    const filteredPosts = useMemo(() => {
        const searchValue =
            search.trim().toLowerCase();

        return writings.filter((post) => {
            const title =
                getLocalizedValue(
                    post.title
                ).toLowerCase();

            const content =
                getLocalizedValue(
                    post.content
                ).toLowerCase();

            const category =
                getLocalizedValue(
                    post.category
                ).toLowerCase();

            const type =
                getLocalizedValue(
                    post.type
                ).toLowerCase();

            const matchesSearch =
                !searchValue ||
                title.includes(searchValue) ||
                content.includes(searchValue) ||
                category.includes(searchValue) ||
                type.includes(searchValue);

            const matchesCategory =
                selectedCategory === "All" ||
                category ===
                    selectedCategory.toLowerCase();

            const matchesType =
                selectedPostType === "All" ||
                type ===
                    selectedPostType.toLowerCase();

            return (
                matchesSearch &&
                matchesCategory &&
                matchesType
            );
        });
    }, [
        writings,
        search,
        selectedCategory,
        selectedPostType,
        lang,
    ]);

    /*
    |--------------------------------------------------------------------------
    | DEFAULT FIRST POST
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        if (
            !selectedPost &&
            filteredPosts.length > 0
        ) {
            setSelectedPost(
                filteredPosts[0]
            );

            setLikes(
                Number(
                    filteredPosts[0]?.likes || 0
                )
            );

            setComments(
                Array.isArray(
                    filteredPosts[0]?.comments
                )
                    ? filteredPosts[0].comments
                    : []
            );
        }
    }, [
        filteredPosts,
        selectedPost,
    ]);

    /*
    |--------------------------------------------------------------------------
    | CHANGE DEFAULT POST WHEN FILTER CHANGES
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        if (filteredPosts.length > 0) {
            const selectedStillExists =
                selectedPost &&
                filteredPosts.some(
                    (post) =>
                        (post.id ||
                            post._id) ===
                        (selectedPost.id ||
                            selectedPost._id)
                );

            if (!selectedStillExists) {
                setSelectedPost(
                    filteredPosts[0]
                );

                setLikes(
                    Number(
                        filteredPosts[0]?.likes ||
                            0
                    )
                );

                setComments(
                    Array.isArray(
                        filteredPosts[0]?.comments
                    )
                        ? filteredPosts[0].comments
                        : []
                );

                setLiked(false);

                setShowCommentBox(false);
            }
        } else {
            setSelectedPost(null);
        }
    }, [filteredPosts]);

    /*
    |--------------------------------------------------------------------------
    | VISIBLE POSTS
    |--------------------------------------------------------------------------
    */

    const visiblePosts = showAllPosts
        ? filteredPosts
        : filteredPosts.slice(
              0,
              visibleCount
          );

    /*
    |--------------------------------------------------------------------------
    | RESET COUNT
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        setVisibleCount(5);
    }, [
        search,
        selectedCategory,
        selectedPostType,
    ]);

    /*
    |--------------------------------------------------------------------------
    | SELECT POST
    |--------------------------------------------------------------------------
    */

    const handleSelectPost = (post) => {
        if (!post) {
            return;
        }

        setSelectedPost(post);

        setLiked(false);

        setLikes(
            Number(post?.likes || 0)
        );

        setComments(
            Array.isArray(post?.comments)
                ? post.comments
                : []
        );

        setCommentText("");

        setShowCommentBox(false);

        /*
         * In All Posts mode there is no right-side detail panel.
         * Open the existing post modal instead.
         */
        if (showAllPosts) {
            setIsModalOpen(true);
            return;
        }

        setTimeout(() => {
            const detailsElement =
                document.getElementById(
                    "selected-writing-detail"
                );

            if (detailsElement) {
                detailsElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 50);
    };

    /*
    |--------------------------------------------------------------------------
    | READ MORE
    |--------------------------------------------------------------------------
    */

    const handleReadMore = () => {
        if (!selectedPost) {
            return;
        }

        setIsModalOpen(true);

        setLiked(false);

        setLikes(
            Number(selectedPost?.likes || 0)
        );

        setComments(
            Array.isArray(
                selectedPost?.comments
            )
                ? selectedPost.comments
                : []
        );

        setCommentText("");

        setShowCommentBox(false);
    };

    /*
    |--------------------------------------------------------------------------
    | CLOSE MODAL
    |--------------------------------------------------------------------------
    */

    const handleCloseModal = () => {
        setIsModalOpen(false);

        setCommentText("");

        setShowCommentBox(false);
    };

    /*
    |--------------------------------------------------------------------------
    | LIKE
    |--------------------------------------------------------------------------
    */

    const handleLike = () => {
        if (liked) {
            setLikes((prev) =>
                Math.max(0, prev - 1)
            );
        } else {
            setLikes((prev) => prev + 1);
        }

        setLiked((prev) => !prev);
    };

    /*
    |--------------------------------------------------------------------------
    | SHARE / COPY LINK
    |--------------------------------------------------------------------------
    */

    const handleShare = async (
        post = selectedPost
    ) => {
        if (!post) {
            return;
        }

        try {
            const postId =
                post?.id ||
                post?._id ||
                "post";

            const postUrl =
                `${window.location.origin}` +
                `${window.location.pathname}` +
                `#writing-${postId}`;

           

            if (
                navigator.clipboard &&
                window.isSecureContext
            ) {
                await navigator.clipboard.writeText(
                    postUrl
                );
            } else {
                /*
                 * Fallback for HTTP/local environments.
                 */

                const textArea =
                    document.createElement(
                        "textarea"
                    );

                textArea.value = postUrl;

                textArea.setAttribute(
                    "readonly",
                    ""
                );

                textArea.style.position =
                    "fixed";

                textArea.style.top =
                    "0";

                textArea.style.left =
                    "-9999px";

                textArea.style.opacity =
                    "0";

                document.body.appendChild(
                    textArea
                );

                textArea.focus();

                textArea.select();

                textArea.setSelectionRange(
                    0,
                    textArea.value.length
                );

                document.execCommand(
                    "copy"
                );

                document.body.removeChild(
                    textArea
                );
            }

        } catch (error) {
            console.error(
                "Unable to copy link:",
                error
            );

            throw error;
        }
    };

    /*
    |--------------------------------------------------------------------------
    | COMMENT
    |--------------------------------------------------------------------------
    */

    const handleAddComment = () => {
        const text =
            commentText.trim();

        if (!text) {
            return;
        }

        setComments((prev) => [
            ...prev,
            {
                id: Date.now(),
                text,
            },
        ]);

        setCommentText("");
    };

    /*
    |--------------------------------------------------------------------------
    | SHOW ALL POSTS
    |--------------------------------------------------------------------------
    */

    const handleShowAllPosts = () => {
        setShowAllPosts(true);
    };

    /*
    |--------------------------------------------------------------------------
    | BACK
    |--------------------------------------------------------------------------
    */

    const handleBackToWriting = () => {
        setShowAllPosts(false);

        setVisibleCount(5);
    };

    /*
    |--------------------------------------------------------------------------
    | CATEGORY CHANGE
    |--------------------------------------------------------------------------
    */

    const handleCategoryChange = (
        category
    ) => {
        setSelectedCategory(category);

        setShowAllPosts(false);

        setVisibleCount(5);
    };

    /*
    |--------------------------------------------------------------------------
    | TYPE CHANGE
    |--------------------------------------------------------------------------
    */

    const handleTypeChange = (type) => {
        setSelectedPostType(type);

        setVisibleCount(5);
    };

    /*
    |--------------------------------------------------------------------------
    | HERO IMAGE
    |--------------------------------------------------------------------------
    */

    const heroImage =
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1800&q=80";

    return (
        <main
            dir={isRTL ? "rtl" : "ltr"}
            className="
                min-h-screen
                bg-[#FAF8F5]
                pb-12
            "
        >
            {/* ============================================================
                HERO
            ============================================================ */}

            <section
                className="
                    relative
                    overflow-hidden
                    pb-10
                "
            >
                <div
                    className="
                        pointer-events-none
                        absolute
                        -left-20
                        -top-20
                        h-72
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        top-10
                        h-72
                        w-72
                    "
                />

                <div className="relative">
                    <div
                        className="
                            relative
                            overflow-hidden
                            bg-white
                            shadow-sm
                        "
                    >
                        <img
                            src={heroImage}
                            alt="Writing"
                            className="
                                h-[280px]
                                w-full
                                object-cover
                                sm:h-[340px]
                                lg:h-[400px]
                            "
                        />

                        <div
                            className="
                                absolute
                                inset-0
                                bg-black/20
                            "
                        />

                        <div
                            className={`
                                absolute
                                inset-0
                                flex
                                flex-col
                                justify-center
                                px-6
                                sm:px-10
                                lg:px-16
                                ${
                                    isRTL
                                        ? "items-start text-right"
                                        : "items-start text-left"
                                }
                            `}
                        >
                            <span
                                className="
                                    mb-3
                                    rounded-full
                                    px-4
                                    py-2
                                    text-xs
                                    font-semibold
                                    text-white
                                    backdrop-blur-sm
                                "
                            >
                                {t.writing.story}
                            </span>

                            <h1
                                className="
                                    max-w-2xl
                                    text-3xl
                                    font-bold
                                    leading-tight
                                    text-white
                                    drop-shadow-md
                                    sm:text-4xl
                                    lg:text-5xl
                                "
                            >
                                {t.writing.ideasStorieswritings}
                            </h1>

                            <p
                                className="
                                    mt-4
                                    max-w-xl
                                    text-sm
                                    leading-7
                                    text-white/90
                                    sm:text-base
                                "
                            >
                                {t.writing.thoughts
                            }
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                TOP FILTER + SEARCH
            ============================================================ */}

            <section
                className="
                    px-5
                    sm:px-8
                    lg:px-12
                "
            >
                <div
                    className="
                        mx-auto
                        max-w-7xl
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            gap-3
                            lg:flex-row
                            lg:items-center
                        "
                    >
                        {/* FILTER BUTTONS */}

                        <div
                            className="
                                order-1
                                flex
                                items-center
                                gap-2
                                overflow-x-auto
                                pb-1
                                [scrollbar-width:none]
                                [&::-webkit-scrollbar]:hidden
                                lg:flex-1
                            "
                        >
                            {postTypes.map(
                                (type) => {
                                    const isActive =
                                        selectedPostType ===
                                        type;

                                    return (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() =>
                                                handleTypeChange(
                                                    type
                                                )
                                            }
                                            className={`
                                                shrink-0
                                                rounded-xl
                                                border
                                                px-4
                                                py-2.5
                                                text-sm
                                                font-medium
                                                transition
                                                ${
                                                    isActive
                                                        ? "border-[#9B7354] bg-[#9B7354] text-white"
                                                        : "border-[#DCCFC3] bg-white text-[#6E5A4A] hover:border-[#9B7354] hover:text-[#9B7354]"
                                                }
                                            `}
                                        >
                                            {type ===
                                            "All"
                                                ? 
                                                    t.writing.all
                                                : type}
                                        </button>
                                    );
                                }
                            )}
                        </div>

                        {/* SEARCH */}

                        <div
                            className="
                                order-2
                                relative
                                w-full
                                lg:w-80
                                lg:shrink-0
                            "
                        >
                            <Search
                                size={18}
                                className={`
                                    absolute
                                    top-1/2
                                    -translate-y-1/2
                                    text-[#9B7354]
                                    ${
                                        isRTL
                                            ? "right-4"
                                            : "left-4"
                                    }
                                `}
                            />

                            <input
                                type="text"
                                value={search}
                                onChange={(e) =>
                                    setSearch(
                                        e.target.value
                                    )
                                }
                                placeholder={
                                    t.writing.searchwritings
                                }
                                className={`
                                    w-full
                                    rounded-xl
                                    border
                                    border-[#DCCFC3]
                                    bg-white
                                    py-3
                                    text-sm
                                    outline-none
                                    transition
                                    focus:border-[#9B7354]
                                    ${
                                        isRTL
                                            ? "pr-11 pl-4"
                                            : "pl-11 pr-4"
                                    }
                                `}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                CONTENT
            ============================================================ */}

            <section
                className="
                    px-5
                    pt-6
                    sm:px-8
                    lg:px-12
                "
            >
                <div
                    className={`
                        mx-auto
                        max-w-7xl
                        ${
                            showAllPosts
                                ? "block"
                                : "grid grid-cols-1 gap-6 lg:h-[calc(100vh-120px)] lg:grid-cols-3"
                        }
                    `}
                >
                    {/* LEFT SIDE */}

                    {!showAllPosts && (
                        <div
                            className="
                                min-h-0
                                space-y-5
                                lg:h-full
                                lg:overflow-y-auto
                                lg:pr-1
                                [scrollbar-width:none]
                                [&::-webkit-scrollbar]:hidden
                               
                              
                            "
                        >
                            {/* SELECTED POST */}

                            {selectedPost && (
                                <div
                                    id="selected-writing-detail"
                                    className="
                                        overflow-hidden
                                        rounded-3xl
                                        border
                                        border-[#E4D9CF]
                                        bg-white
                                        shadow-sm
                                        scroll-mt-6
                                    "
                                >
                                    {selectedPost.image && (
                                        <img
                                            src={getLocalizedValue(
                                                selectedPost.image
                                            )}
                                            alt={getLocalizedValue(
                                                selectedPost.title
                                            )}
                                            className="
                                                h-56
                                                w-full
                                                object-cover
                                                sm:h-64
                                            "
                                        />
                                    )}

                                    <div className="p-6">
                                        <div
                                            className="
                                                flex
                                                flex-wrap
                                                gap-2
                                            "
                                        >
                                            {selectedPost.category && (
                                                <span
                                                    className="
                                                        rounded-full
                                                        bg-[#9B7354]/10
                                                        px-3
                                                        py-1
                                                        text-xs
                                                        font-semibold
                                                        text-[#9B7354]
                                                    "
                                                >
                                                    {getLocalizedValue(
                                                        selectedPost.category
                                                    )}
                                                </span>
                                            )}

                                            {selectedPost.type && (
                                                <span
                                                    className="
                                                        rounded-full
                                                        border
                                                        border-[#DCCFC3]
                                                        px-3
                                                        py-1
                                                        text-xs
                                                        text-[#6E5A4A]
                                                    "
                                                >
                                                    {getLocalizedValue(
                                                        selectedPost.type
                                                    )}
                                                </span>
                                            )}
                                        </div>

                                        <h2
                                            className="
                                                mt-4
                                                text-2xl
                                                font-bold
                                                leading-tight
                                                text-[#3F3025]
                                            "
                                        >
                                            {getLocalizedValue(
                                                selectedPost.title
                                            )}
                                        </h2>

                                        <p
                                            className="
                                                mt-4
                                                text-sm
                                                leading-7
                                                text-[#6E5A4A]
                                            "
                                        >
                                            {getFirstParagraph(
                                                selectedPost.content
                                            )}
                                        </p>

                                        <div
                                            className="
                                                mt-5
                                                flex
                                                flex-wrap
                                                items-center
                                                gap-2
                                                py-3
                                            "
                                        >
                                            <button
                                                type="button"
                                                onClick={
                                                    handleLike
                                                }
                                                className={`
                                                    flex
                                                    items-center
                                                    gap-1.5
                                                    rounded-xl
                                                    px-3
                                                    py-2
                                                    text-sm
                                                    transition
                                                    ${
                                                        liked
                                                            ? "bg-red-50 text-red-500"
                                                            : "bg-[#FAF8F5] text-[#6E5A4A] hover:bg-red-50 hover:text-red-500"
                                                    }
                                                `}
                                            >
                                                <Heart
                                                    size={17}
                                                    fill={
                                                        liked
                                                            ? "currentColor"
                                                            : "none"
                                                    }
                                                />

                                                <span>
                                                    {likes}
                                                </span>
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowCommentBox(
                                                        (prev) =>
                                                            !prev
                                                    )
                                                }
                                                className="
                                                    flex
                                                    items-center
                                                    gap-1.5
                                                    rounded-xl
                                                    bg-[#FAF8F5]
                                                    px-3
                                                    py-2
                                                    text-sm
                                                    text-[#6E5A4A]
                                                    transition
                                                    hover:bg-[#F5EFE9]
                                                    hover:text-[#9B7354]
                                                "
                                            >
                                                <MessageCircle
                                                    size={17}
                                                />

                                                <span>
                                                    {
                                                        comments.length
                                                    }
                                                </span>
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleShare(
                                                        selectedPost
                                                    )
                                                }
                                                className="
                                                    flex
                                                    items-center
                                                    gap-1.5
                                                    rounded-xl
                                                    bg-[#FAF8F5]
                                                    px-3
                                                    py-2
                                                    text-sm
                                                    text-[#6E5A4A]
                                                    transition
                                                    hover:bg-[#F5EFE9]
                                                    hover:text-[#9B7354]
                                                "
                                            >
                                                <Share2
                                                    size={17}
                                                />

                                                <span>
                                                    {t.writing.share}
                                                </span>
                                            </button>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={
                                                handleReadMore
                                            }
                                            className="
                                                mt-5
                                                flex
                                                items-center
                                                gap-2
                                                rounded-xl
                                                bg-[#9B7354]
                                                px-5
                                                py-3
                                                text-sm
                                                font-semibold
                                                text-white
                                                transition
                                                hover:bg-[#876247]
                                            "
                                        >
                                            <BookOpen
                                                size={17}
                                            />

                                            <span>
                                                {t.writing.readmore}
                                            </span>

                                            {isRTL ? (
                                                <ArrowLeft
                                                    size={17}
                                                />
                                            ) : (
                                                <ArrowRight
                                                    size={17}
                                                />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* CATEGORIES */}

                            <div
                                className="
                                    rounded-3xl
                                    border
                                    border-[#E4D9CF]
                                    bg-white
                                    p-5
                                    shadow-sm
                                "
                            >
                                <h3
                                    className="
                                        mb-4
                                        text-lg
                                        font-bold
                                        text-[#3F3025]
                                    "
                                >
                                    {t.writing.categories}
                                </h3>

                                <div
                                    className="
                                        flex
                                        flex-wrap
                                        gap-2
                                    "
                                >
                                    {postTypes.map(
                                        (type) => {
                                            const isActive =
                                                selectedPostType ===
                                                type;

                                            return (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() =>
                                                        handleTypeChange(
                                                            type
                                                        )
                                                    }
                                                    className={`
                                                        rounded-xl
                                                        border
                                                        px-3
                                                        py-2
                                                        text-xs
                                                        font-medium
                                                        transition
                                                        ${
                                                            isActive
                                                                ? "border-[#9B7354] bg-[#9B7354] text-white"
                                                                : "border-[#DCCFC3] bg-white text-[#6E5A4A] hover:border-[#9B7354] hover:text-[#9B7354]"
                                                        }
                                                    `}
                                                >
                                                    {type ===
                                                    "All"
                                                        ? t.writing.all
                                                        : type}
                                                </button>
                                            );
                                        }
                                    )}
                                </div>
                            </div>

                            {/* EXPLORE */}

                            <div
                                className="
                                    rounded-3xl
                                    bg-[#9B7354]
                                    p-6
                                    shadow-sm
                                "
                            >
                                <span
                                    className="
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wider
                                        text-white/70
                                    "
                                >
                                    {t.writing.exploremore}
                                </span>

                                <h3
                                    className="
                                        mt-2
                                        text-xl
                                        font-bold
                                        text-white
                                    "
                                >
                                    {t.writing.interestedinmore}
                                </h3>

                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        leading-7
                                        text-white/80
                                    "
                                >
                                    {t.writing.Ifyoureinterested}
                                </p>

                                <button
                                    type="button"
                                    onClick={
                                        handleShowAllPosts
                                    }
                                    className="
                                        mt-5
                                        flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        bg-white
                                        px-5
                                        py-3
                                        text-sm
                                        font-semibold
                                        text-[#9B7354]
                                        transition
                                        hover:bg-[#FAF8F5]
                                    "
                                >
                                    <span>
                                        {t.writing.viewallpost}
                                    </span>

                                    {isRTL ? (
                                        <ArrowLeft
                                            size={17}
                                        />
                                    ) : (
                                        <ArrowRight
                                            size={17}
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* RIGHT SIDE */}

                    <div
                        className={`
                        col-span-2
                            min-h-0
                            ${
                                showAllPosts
                                    ? "w-full"
                                    : "order-1 lg:order-2 lg:h-full"
                            }
                            ${
                                !showAllPosts
                                    ? "lg:overflow-y-auto lg:pl-1"
                                    : ""
                            }
                            [scrollbar-width:none]
                            [&::-webkit-scrollbar]:hidden
                        `}
                    >
                        {/* HEADER */}

                        <div
                            className="
                                mb-5
                                flex
                                items-center
                                justify-between
                                gap-4
                            "
                        >
                            <div>
                                <h2
                                    className="
                                        text-2xl
                                        font-bold
                                        text-[#3F3025]
                                    "
                                >
                                    {showAllPosts
                                        ? t.writing.allpost
                                        : 
                                    t.writing.story}
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-sm
                                        text-[#8B7A6A]
                                    "
                                >
                                    {
                                        filteredPosts.length
                                    }{" "}
                                    {t.writing.postavailiable}
                                </p>
                            </div>

                            {!showAllPosts ? (
                                <button
                                    type="button"
                                    onClick={
                                        handleShowAllPosts
                                    }
                                    className="
                                        flex
                                        shrink-0
                                        items-center
                                        gap-2
                                        rounded-xl
                                        border
                                        border-[#DCCFC3]
                                        bg-white
                                        px-4
                                        py-2.5
                                        text-sm
                                        font-semibold
                                        text-[#6E5A4A]
                                        transition
                                        hover:border-[#9B7354]
                                        hover:text-[#9B7354]
                                    "
                                >
                                    <span>
                                        {t.writing.allpost}
                                    </span>

                                    {isRTL ? (
                                        <ArrowLeft
                                            size={17}
                                        />
                                    ) : (
                                        <ArrowRight
                                            size={17}
                                        />
                                    )}
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={
                                        handleBackToWriting
                                    }
                                    className="
                                        flex
                                        shrink-0
                                        items-center
                                        gap-2
                                        rounded-xl
                                        border
                                        border-[#DCCFC3]
                                        bg-white
                                        px-4
                                        py-2.5
                                        text-sm
                                        font-semibold
                                        text-[#6E5A4A]
                                        transition
                                        hover:border-[#9B7354]
                                        hover:text-[#9B7354]
                                    "
                                >
                                    {isRTL ? (
                                        <ArrowRight
                                            size={17}
                                        />
                                    ) : (
                                        <ArrowLeft
                                            size={17}
                                        />
                                    )}

                                    <span>
                                        {t.writing.back}
                                    </span>
                                </button>
                            )}
                        </div>

                        {/* CARDS */}

                        {visiblePosts.length > 0 ? (
                            <div
                                className={`
                                    grid
                                    grid-cols-1
                                    gap-5
                                    ${
                                        showAllPosts
                                            ? "sm:grid-cols-2 lg:grid-cols-3"
                                            : "sm:grid-cols-2"
                                    }
                                `}
                            >
                                {visiblePosts.map(
                                    (
                                        post,
                                        index
                                    ) => {
                                        const postId =
                                            post?.id ||
                                            post?._id ||
                                            index;

                                        const isSelected =
                                            selectedPost &&
                                            (
                                                selectedPost?.id ||
                                                selectedPost?._id
                                            ) ===
                                                (
                                                    post?.id ||
                                                    post?._id
                                                );

                                        return (
                                            <div
                                                key={
                                                    postId
                                                }
                                                className="
                                                    overflow-visible
                                                    rounded-3xl
                                                "
                                            >
                                                <PostCard
                                                    post={
                                                        post
                                                    }
                                                    onSelect={
                                                        handleSelectPost
                                                    }
                                                    onShare={
                                                        handleShare
                                                    }
                                                    isSelected={
                                                        isSelected
                                                    }
                                                />
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        ) : (
                            <div
                                className="
                                    rounded-3xl
                                    border
                                    border-dashed
                                    border-[#DCCFC3]
                                    bg-white
                                    px-6
                                    py-14
                                    text-center
                                "
                            >
                                <Search
                                    size={32}
                                    className="
                                        mx-auto
                                        mb-4
                                        text-[#9B7354]
                                    "
                                />

                                <h3
                                    className="
                                        text-lg
                                        font-semibold
                                        text-[#3F3025]
                                    "
                                >
                                    {t.writing.nowriting}
                                </h3>
                            </div>
                        )}

                        {/* LOAD MORE */}

                        {!showAllPosts &&
                            visibleCount <
                                filteredPosts.length && (
                                <div
                                    className="
                                        mt-6
                                        flex
                                        justify-center
                                    "
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setVisibleCount(
                                                (prev) =>
                                                    prev +
                                                    5
                                            )
                                        }
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            rounded-xl
                                            border
                                            border-[#DCCFC3]
                                            bg-white
                                            px-5
                                            py-3
                                            text-sm
                                            font-semibold
                                            text-[#6E5A4A]
                                            transition
                                            hover:border-[#9B7354]
                                            hover:text-[#9B7354]
                                        "
                                    >
                                        <span>
                                            {t.writing.loadmore}
                                        </span>

                                        {isRTL ? (
                                            <ArrowLeft
                                                size={17}
                                            />
                                        ) : (
                                            <ArrowRight
                                                size={17}
                                            />
                                        )}
                                    </button>
                                </div>
                            )}
                    </div>
                </div>
            </section>

            {/* ============================================================
                READ MORE MODAL
            ============================================================ */}

            {isModalOpen &&
                selectedPost && (
                    <div
                        className="
                            fixed
                            inset-0
                            z-50
                            flex
                            items-center
                            justify-center
                            bg-black/50
                            p-4
                            backdrop-blur-sm
                        "
                        onClick={
                            handleCloseModal
                        }
                    >
                        <div
                            onClick={(e) =>
                                e.stopPropagation()
                            }
                            className="
                                relative
                                max-h-[90vh]
                                w-full
                                max-w-3xl
                                overflow-y-auto
                                rounded-[2rem]
                                bg-white
                                shadow-2xl
                                [scrollbar-width:none]
                                [&::-webkit-scrollbar]:hidden
                            "
                        >
                            {/* CLOSE */}

                            <button
                                type="button"
                                onClick={
                                    handleCloseModal
                                }
                                className="
                                    absolute
                                    right-5
                                    top-5
                                    z-20
                                    rounded-full
                                    bg-white/90
                                    p-2.5
                                    text-[#6E5A4A]
                                    shadow
                                    transition
                                    hover:bg-[#F5EFE9]
                                "
                            >
                                <X size={20} />
                            </button>

                            {/* IMAGE */}

                            {selectedPost.image && (
                                <img
                                    src={getLocalizedValue(
                                        selectedPost.image
                                    )}
                                    alt={getLocalizedValue(
                                        selectedPost.title
                                    )}
                                    className="
                                        h-64
                                        w-full
                                        object-cover
                                        sm:h-80
                                    "
                                />
                            )}

                            <div className="p-6 sm:p-8">
                                {/* CATEGORY */}

                                <div
                                    className="
                                        flex
                                        flex-wrap
                                        gap-2
                                    "
                                >
                                    {selectedPost.category && (
                                        <span
                                            className="
                                                rounded-full
                                                bg-[#9B7354]/10
                                                px-3
                                                py-1
                                                text-xs
                                                font-semibold
                                                text-[#9B7354]
                                            "
                                        >
                                            {getLocalizedValue(
                                                selectedPost.category
                                            )}
                                        </span>
                                    )}

                                    {selectedPost.type && (
                                        <span
                                            className="
                                                rounded-full
                                                border
                                                border-[#DCCFC3]
                                                px-3
                                                py-1
                                                text-xs
                                                text-[#6E5A4A]
                                            "
                                        >
                                            {getLocalizedValue(
                                                selectedPost.type
                                            )}
                                        </span>
                                    )}
                                </div>

                                {/* TITLE */}

                                <h2
                                    className="
                                        mt-4
                                        text-3xl
                                        font-bold
                                        leading-tight
                                        text-[#3F3025]
                                    "
                                >
                                    {getLocalizedValue(
                                        selectedPost.title
                                    )}
                                </h2>

                                {/* FULL CONTENT */}

                                <div
                                    className="
                                        mt-6
                                        whitespace-pre-line
                                        text-sm
                                        leading-8
                                        text-[#6E5A4A]
                                        sm:text-base
                                    "
                                >
                                    {getLocalizedValue(
                                        selectedPost.content
                                    )}
                                </div>

                                
                            </div>
                        </div>
                    </div>
                )}
        </main>
    );
}
