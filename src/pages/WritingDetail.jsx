import { Link, useParams } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
} from "lucide-react";

import { useLangStore } from "../store/useLangStore.js";
import db from "../../db.json";

const WritingDetail = () => {
    const { id } = useParams();

    const lang = useLangStore(
        (state) => state.lang
    );

    const t = useLangStore(
        (state) => state.t
    );

    const isRTL = lang === "dr";

    const post = db?.writings?.find(
        (item) =>
            String(item.id) === String(id)
    );

    /*
     * ==========================================
     * POST NOT FOUND
     * ==========================================
     */

    if (!post) {
        return (
            <main
                dir={isRTL ? "rtl" : "ltr"}
                className="
                    flex
                    min-h-screen
                    items-center
                    justify-center
                    bg-[#FAF8F5]
                    px-5
                "
            >
                <div className="text-center">
                    <h1
                        className="
                            text-3xl
                            font-bold
                            text-stone-800
                        "
                    >
                        {
                            t.writing
                                .nowrittenworksfound
                        }
                    </h1>

                    <Link
                        to="/writings"
                        className="
                            mt-6
                            inline-block
                            rounded-xl
                            bg-[#9B7354]
                            px-5
                            py-3
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
                    </Link>
                </div>
            </main>
        );
    }

    /*
     * ==========================================
     * LANGUAGE CONTENT
     * ==========================================
     */

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

    return (
        <main
            dir={isRTL ? "rtl" : "ltr"}
            className="
                min-h-screen
                bg-[#FAF8F5]
            "
        >
            {/* Back */}

            <div
                className="
                    mx-auto
                    max-w-5xl
                    px-5
                    pt-8
                    sm:px-6
                    lg:px-8
                "
            >
                <Link
                    to="/writings"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                        text-stone-500
                        transition
                        hover:text-[#9B7354]
                    "
                >
                    {isRTL ? (
                        <ArrowRight size={18} />
                    ) : (
                        <ArrowLeft size={18} />
                    )}

                    {
                        t.writing
                            .showallworks
                    }
                </Link>
            </div>

            {/* Article */}

            <article
                className="
                    mx-auto
                    max-w-4xl
                    px-5
                    py-12
                    sm:px-6
                    sm:py-16
                "
            >
                {/* Category */}

                {type && (
                    <span
                        className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-[#9B7354]
                        "
                    >
                        {type}
                    </span>
                )}

                {/* Title */}

                <h1
                    className="
                        mt-4
                        text-4xl
                        font-bold
                        leading-tight
                        text-stone-800
                        sm:text-5xl
                        lg:text-6xl
                    "
                >
                    {title}
                </h1>

                {/* Image */}

                {post.image && (
                    <div
                        className="
                            mt-10
                            overflow-hidden
                            rounded-3xl
                            bg-stone-100
                        "
                    >
                        <img
                            src={post.image}
                            alt={title}
                            className="
                                max-h-[600px]
                                w-full
                                object-cover
                            "
                        />
                    </div>
                )}

                {/* Content */}

                <div
                    className="
                        mt-10
                        whitespace-pre-line
                        text-base
                        leading-8
                        text-stone-700
                        sm:text-lg
                        sm:leading-9
                    "
                >
                    {content}
                </div>
            </article>
        </main>
    );
};

export default WritingDetail;

