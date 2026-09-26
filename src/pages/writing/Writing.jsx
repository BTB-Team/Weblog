import { useEffect, useMemo, useState } from "react";
import {
    Search,
    X,
    ArrowLeft,
    ArrowRight,
} from "lucide-react";

import { useLangStore } from "../../store/useLangStore.js";
import PostCard from "../../components/PostCard.jsx";
import db from "../../../db.json";

const Posts = () => {
    const lang = useLangStore((state) => state.lang);
    const t = useLangStore((state) => state.t);

    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

    // Selected writing for modal
    const [selectedPost, setSelectedPost] =
        useState(null);

    const isRTL = lang === "dr";

    const writings = db?.writings ?? [];

    /*
     * ==========================================
     * CATEGORIES
     * ==========================================
     */

    const categories = useMemo(() => {
        const types = writings
            .map(
                (post) =>
                    post.type?.[lang] || post.type?.en
            )
            .filter(Boolean);

        const uniqueTypes = [...new Set(types)];

        return [
            {
                key: "all",
                label: t.writing.all,
            },
            ...uniqueTypes.map((type) => ({
                key: type,
                label: type,
            })),
        ];
    }, [writings, lang, t]);

    /*
     * ==========================================
     * FILTERING
     * ==========================================
     */

    const filteredPosts = useMemo(() => {
        const query = search.trim().toLowerCase();

        return writings.filter((post) => {
            const title = post.title?.[lang] || post.title?.en || "";
            const content = post.content?.[lang] || post.content?.en || "";
            const type = post.type?.[lang] || post.type?.en || "";

            const matchesSearch =
                !query ||
                title.toLowerCase().includes(query) ||
                content.toLowerCase().includes(query);

            const matchesCategory =
                activeCategory === "all" || type === activeCategory;

            return matchesSearch && matchesCategory;
        });
    }, [writings, search, activeCategory, lang]);

    /*
     * ==========================================
     * CLEAR FILTERS
     * ==========================================
     */

    const clearFilters = () => {
        setSearch("");
        setActiveCategory("all");
    };

    /*
     * ==========================================
     * CLOSE MODAL WITH ESC
     * ==========================================
     */

            <section className="relative overflow-hidden bg-[#F3EEE7]">
                {/* Decorative circles */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        -left-32
                        -top-32
                        h-80
                        w-80
                        rounded-full
                        bg-[#C5A88C]/10
                        blur-3xl
                    "
                />

        document.addEventListener(
            "keydown",
            handleKeyDown
        );

        // Prevent background scrolling
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown
            );

            document.body.style.overflow = "";
        };
    }, [selectedPost]);

    /*
     * ==========================================
     * MODAL DATA
     * ==========================================
     */

    const modalTitle =
        selectedPost?.title?.[lang] ||
        selectedPost?.title?.en ||
        "";

    const modalContent =
        selectedPost?.content?.[lang] ||
        selectedPost?.content?.en ||
        "";

    const modalType =
        selectedPost?.type?.[lang] ||
        selectedPost?.type?.en ||
        "";

    return (
        <>
            <main
                dir={isRTL ? "rtl" : "ltr"}
                className="
                    min-h-screen
                    bg-[#FAF8F5]
                "
            >
                {/* ==================================================
                    HERO
                ================================================== */}

                <section
                    className="
                        relative
                        overflow-hidden
                        bg-[#F3EEE7]
                    "
                >
                    {/* Decorative circles */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -left-32
                            -top-32
                            h-80
                            w-80
                            rounded-full
                            bg-[#C5A88C]/10
                            blur-3xl
                        "
                    >
                        {t.writing.writtenworks}
                    </span>

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -bottom-40
                            -right-20
                            h-96
                            w-96
                            rounded-full
                            bg-[#9B7354]/10
                            blur-3xl
                        "
                    />

                    <div
                        className="
                            relative
                            mx-auto
                            max-w-5xl
                            px-5
                            py-20
                            text-center
                            sm:px-6
                            sm:py-28
                            lg:px-8
                        "
                    >
                        {t.writing.mywrittenworks}
                    </h1>
                        {/* Eyebrow */}

                        <span
                            className="
                                mb-4
                                inline-block
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-[#9B7354]
                            "
                        >
                            {
                                t.writing
                                    .writtenworks
                            }
                        </span>

                        {/* Heading */}

                        <h1
                            className="
                                mx-auto
                                max-w-3xl
                                text-4xl
                                font-bold
                                leading-tight
                                text-stone-800
                                sm:text-5xl
                                lg:text-6xl
                            "
                        >
                            {
                                t.writing
                                    .mywrittenworks
                            }
                        </h1>

                        {/* Description */}

                        <p
                            className="
                                mx-auto
                                mt-6
                                max-w-2xl
                                text-sm
                                leading-7
                                text-stone-500
                                sm:text-base
                                sm:leading-8
                            "
                        >
                            {
                                t.writing
                                    .acollectionofstorieswritings
                            }
                        </p>

                        {/* Search */}

                        <div
                            className="
                                mx-auto
                                mt-10
                                flex
                                h-14
                                max-w-2xl
                                items-center
                                rounded-2xl
                                border
                                border-stone-200
                                bg-white
                                px-4
                                shadow-sm
                                transition
                                focus-within:border-[#9B7354]
                                focus-within:ring-4
                                focus-within:ring-[#9B7354]/10
                            "
                        >
                            <Search
                                size={20}
                                strokeWidth={2}
                                aria-hidden="true"
                                className="
                                    shrink-0
                                    text-stone-400
                                "
                            />

                            <input
                                type="search"
                                value={search}
                                onChange={(e) =>
                                    setSearch(
                                        e.target.value
                                    )
                                }
                                placeholder={
                                    t.writing
                                        .searchwrittenworks
                                }
                                className="
                                    h-full
                                    min-w-0
                                    flex-1
                                    border-0
                                    bg-transparent
                                    px-3
                                    text-sm
                                    text-stone-800
                                    outline-none
                                    placeholder:text-stone-400
                                "
                            />

                            {search && (
                                <button
                                    type="button"
                                    onClick={() =>
                                        setSearch("")
                                    }
                                    aria-label={
                                        t.writing
                                            .clearsearch
                                    }
                                    className="
                                        flex
                                        h-7
                                        w-7
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-stone-100
                                        text-stone-500
                                        transition
                                        hover:bg-stone-200
                                        hover:text-stone-700
                                    "
                                >
                                    <X
                                        size={15}
                                        strokeWidth={2.25}
                                        aria-hidden="true"
                                    />
                                </button>
                            )}
                        </div>
                    </div>
                </section>

                {/* ==================================================
                    CATEGORY TABS
                ================================================== */}

                <section
                    className="
                        border-b
                        border-stone-200
                        bg-white
                    "
                >
                    <div
                        className="
                            mx-auto
                            max-w-7xl
                            overflow-x-auto
                            px-5
                            py-5
                            sm:px-6
                            lg:px-8
                        "
                    >
                        {t.writing.acollectionofstorieswritings}
                    </p>
                        <div
                            className="
                                flex
                                min-w-max
                                justify-center
                                gap-2
                            "
                        >
                            {categories.map(
                                (category) => {
                                    const active =
                                        activeCategory ===
                                        category.key;

                                    return (
                                        <button
                                            key={
                                                category.key
                                            }
                                            type="button"
                                            onClick={() =>
                                                setActiveCategory(
                                                    category.key
                                                )
                                            }
                                            className={`
                                                rounded-full
                                                px-5
                                                py-2.5
                                                text-sm
                                                font-medium
                                                transition-all
                                                duration-200
                                                ${
                                                    active
                                                        ? "bg-[#9B7354] text-white shadow-sm"
                                                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                                                }
                                            `}
                                        >
                                            {
                                                category.label
                                            }
                                        </button>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </section>

                {/* ==================================================
                    CONTENT
                ================================================== */}

                <section
                    className="
                        mx-auto
                        max-w-7xl
                        px-5
                        py-12
                        sm:px-6
                        sm:py-16
                        lg:px-8
                        lg:py-20
                    "
                >
                    {/* Results header */}

                    <div
                        className="
                            mb-8
                            flex
                            flex-wrap
                            items-center
                            justify-between
                            gap-4
                        "
                    >
                        <Search
                            size={20}
                            strokeWidth={2}
                            aria-hidden="true"
                            className="shrink-0 text-stone-400"
                        />

                        <input
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder={t.writing.searchwrittenworks}
                            className="
                                text-sm
                                font-bold
                                text-stone-500
                            "
                        >
                            {filteredPosts.length}{" "}
                            {t.writing.story}
                        </p>

                        {(search ||
                            activeCategory !==
                                "all") && (
                            <button
                                type="button"
                                onClick={() => setSearch("")}
                                aria-label={t.writing.clearsearch}
                                className="
                                    mb-5
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-stone-100
                                    text-stone-400
                                "
                            >
                                <Search
                                    size={28}
                                    strokeWidth={1.75}
                                    aria-hidden="true"
                                />
                            </div>

                            <h2
                                className="
                                    text-xl
                                    font-semibold
                                    text-stone-800
                                "
                            >
                                {
                                    t.writing
                                        .nowrittenworksfound
                                }
                            </h2>

            <section className="border-b border-stone-200 bg-white">
                <div
                    className="
                        mx-auto
                        max-w-7xl
                        overflow-x-auto
                        px-5
                        py-5
                        sm:px-6
                        lg:px-8
                    "
                >
                    <div className="flex min-w-max justify-center gap-2">
                        {categories.map((category) => {
                            const active = activeCategory === category.key;

                            return (
                                <button
                                    key={category.key}
                                    type="button"
                                    onClick={() =>
                                        setActiveCategory(category.key)
                                    }
                                    className={`
                                        rounded-full
                                        px-5
                                        py-2.5
                                        text-sm
                                        font-medium
                                        transition-all
                                        duration-200
                                        ${
                                            active
                                                ? "bg-[#9B7354] text-white shadow-sm"
                                                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                                        }
                                    `}
                                >
                                    {category.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

                            <button
                                type="button"
                                onClick={
                                    clearFilters
                                }
                                className="
                                    mt-6
                                    rounded-xl
                                    bg-[#9B7354]
                                    px-5
                                    py-2.5
                                    text-sm
                                    font-medium
                                    text-white
                                    transition
                                    hover:bg-[#805B42]
                                "
                            >
                                {
                                    t.writing
                                        .showallworks
                                }
                            </button>
                        </div>
                    )}
                </section>
            </main>

            {/* ======================================================
                WRITING MODAL
            ====================================================== */}

            {selectedPost && (
                <div
                    dir={isRTL ? "rtl" : "ltr"}
                    className="
                        fixed
                        inset-0
                        z-[100]
                        flex
                        items-center
                        justify-center
                        bg-black/60
                        p-4
                        backdrop-blur-sm
                        sm:p-6
                    "
                    onClick={() =>
                        setSelectedPost(null)
                    }
                >
                    <p className="text-sm font-bold text-stone-500">
                        {filteredPosts.length} {t.writing.story}
                    </p>

                    {(search || activeCategory !== "all") && (
                        <button
                            type="button"
                            onClick={clearFilters}
                            className="
                                text-sm
                                font-medium
                                text-[#9B7354]
                                transition
                                hover:text-[#76533B]
                            "
                        >
                            {t.writing.clearfilters}
                        </button>
                    )}
                </div>
                    {/* Modal */}

                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-6
                            md:grid-cols-2
                            lg:grid-cols-3
                        "
                    >
                        {filteredPosts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    /* Empty state */
                    <div
                        className="
                            flex
                            min-h-[350px]
                            flex-col
                            items-center
                            justify-center
                            rounded-3xl
                            bg-[#FAF8F5]
                            shadow-2xl
                        "
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >
                        {/* Close button */}

                        <button
                            type="button"
                            onClick={() =>
                                setSelectedPost(null)
                            }
                            aria-label="Close"
                            className={`
                                absolute
                                top-4
                                z-20
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-full
                                bg-white/90
                                text-stone-700
                                shadow-lg
                                backdrop-blur
                                transition
                                hover:bg-white
                                hover:text-stone-900
                                ${
                                    isRTL
                                        ? "left-4"
                                        : "right-4"
                                }
                            `}
                        >
                            <X size={22} />
                        </button>

                        <h2
                            className="
                                text-xl
                                font-semibold
                                text-stone-800
                            "
                        >
                            {t.writing.nowrittenworksfound}
                        </h2>

                        <p
                            className="
                                mt-2
                                max-w-md
                                text-sm
                                leading-6
                                text-stone-500
                            "
                        >
                            {t.writing.tryanothersearchtermorcategory}
                        </p>
                        {/* Image */}

                        {selectedPost.image && (
                            <div
                                className="
                                    overflow-hidden
                                    rounded-t-3xl
                                    bg-stone-100
                                "
                            >
                                <img
                                    src={
                                        selectedPost.image
                                    }
                                    alt={modalTitle}
                                    className="
                                        max-h-[500px]
                                        w-full
                                        object-cover
                                    "
                                />
                            </div>
                        )}

                        {/* Article */}

                        <article
                            className="
                                px-6
                                py-8
                                sm:px-10
                                sm:py-10
                                lg:px-14
                                lg:py-12
                            "
                        >
                            {t.writing.showallworks}
                        </button>
                            {/* Category */}

                            {modalType && (
                                <span
                                    className="
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.2em]
                                        text-[#9B7354]
                                    "
                                >
                                    {modalType}
                                </span>
                            )}

                            {/* Title */}

                            <h1
                                className="
                                    mt-4
                                    text-3xl
                                    font-bold
                                    leading-tight
                                    text-stone-800
                                    sm:text-4xl
                                    lg:text-5xl
                                "
                            >
                                {modalTitle}
                            </h1>

                            {/* Content */}

                            <div
                                className="
                                    mt-8
                                    whitespace-pre-line
                                    text-base
                                    leading-8
                                    text-stone-700
                                    sm:text-lg
                                    sm:leading-9
                                "
                            >
                                {modalContent}
                            </div>
                        </article>
                    </div>
                </div>
            )}
        </>
    );
};

export default Posts;
