import React from "react";

function Petal({
    src,
    className = "",
    opacity = "opacity-60",
}) {
    return (
        <img
            src={src}
            alt=""
            aria-hidden="true"
            className={`pointer-events-none absolute select-none object-contain ${opacity} ${className}`}
            onError={(event) => {
                event.currentTarget.style.display = "none";
            }}
        />
    );
}

function ArrowLeftIcon() {
    return (
        <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </svg>
    );
}

export default function ContactForm({
    direction,
    t,
    formData,
    isSending,
    handleChange,
    handleSubmit,
    image3,
    petal2,
    petal4,
}) {
    return (
        <section className="relative mx-auto max-w-7xl min-w-0 px-5 pb-14 sm:px-8 md:pb-20">
            <div className="relative min-w-0 overflow-hidden rounded-[8px] border border-[#EAD5C3]/60 bg-white shadow-[0_10px_45px_rgba(74,59,50,0.045)]">
                <div
                    dir={direction}
                    className="grid min-w-0 lg:grid-cols-[1.28fr_0.72fr]"
                >
                    {/* Form */}
                    <div className="relative order-1 min-w-0 px-6 py-9 sm:px-9 sm:py-11 md:px-12 lg:order-1">
                        <Petal
                            src={petal2}
                            className="end-2 top-2 h-16 w-16 rotate-[20deg]"
                            opacity="opacity-25"
                        />

                        <div className="relative z-10 min-w-0">
                            <div className="mb-7">
                                <h2 className="font-serif text-2xl font-bold text-[#4A3B32] sm:text-3xl">
                                    {t.contact.form.title}
                                </h2>

                                <p className="mt-2 text-xs leading-6 text-[#8D786B]">
                                    {t.contact.form.description}
                                </p>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="min-w-0 space-y-5"
                            >
                                <div className="grid min-w-0 gap-5 sm:grid-cols-2">
                                    <div className="min-w-0">
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-xs font-medium text-[#4A3B32]"
                                        >
                                            {t.contact.form.name}

                                            <span className="ms-1 text-[#A36F6F]">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder={t.contact.form.namePlaceholder}
                                            className="w-full min-w-0 rounded-[4px] border border-[#EAD5C3] bg-[#FDFBF7] px-4 py-3 text-xs text-[#4A3B32] outline-none transition focus:border-[#A36F6F]/60 focus:bg-white focus:ring-2 focus:ring-[#A36F6F]/5"
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-xs font-medium text-[#4A3B32]"
                                        >
                                            {t.contact.form.email}

                                            <span className="ms-1 text-[#A36F6F]">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="example@domain.com"
                                            dir="ltr"
                                            className="w-full min-w-0 rounded-[4px] border border-[#EAD5C3] bg-[#FDFBF7] px-4 py-3 text-xs text-[#4A3B32] outline-none transition focus:border-[#A36F6F]/60 focus:bg-white focus:ring-2 focus:ring-[#A36F6F]/5"
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="min-w-0">
                                    <label
                                        htmlFor="subject"
                                        className="mb-2 block text-xs font-medium text-[#4A3B32]"
                                    >
                                        {t.contact.form.subject}
                                    </label>

                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        dir={direction}
                                        className="block w-full min-w-0 max-w-full appearance-none rounded-[4px] border border-[#EAD5C3] bg-[#FDFBF7] px-4 py-3 text-xs text-[#7A685D] outline-none transition focus:border-[#A36F6F]/60 focus:bg-white focus:ring-2 focus:ring-[#A36F6F]/5"
                                    >
                                        <option value="">
                                            {t.contact.form.subjectPlaceholder}
                                        </option>

                                        <option value="cooperation">
                                            {t.contact.form.cooperation}
                                        </option>

                                        <option value="writingOpinion">
                                            {t.contact.form.writingOpinion}
                                        </option>

                                        <option value="generalMessage">
                                            {t.contact.form.generalMessage}
                                        </option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div className="min-w-0">
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-xs font-medium text-[#4A3B32]"
                                    >
                                        {t.contact.form.message}

                                        <span className="ms-1 text-[#A36F6F]">
                                            *
                                        </span>
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="7"
                                        maxLength="500"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder={t.contact.form.messagePlaceholder}
                                        className="block w-full min-w-0 max-w-full resize-none rounded-[4px] border border-[#EAD5C3] bg-[#FDFBF7] px-4 py-3 text-xs leading-7 text-[#4A3B32] outline-none transition focus:border-[#A36F6F]/60 focus:bg-white focus:ring-2 focus:ring-[#A36F6F]/5"
                                    />

                                    <div className="mt-1 text-end text-[9px] text-[#B3A196]">
                                        {formData.message.length}/500
                                    </div>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className="btn-primary group flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-xs font-medium disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {isSending ? (
                                        <>
                                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                            {t.contact.form.sending}
                                        </>
                                    ) : (
                                        <>
                                            {t.contact.form.send}
                                            <ArrowLeftIcon />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative order-2 min-h-[590px] overflow-hidden lg:order-2">
                        <img
                            src={image3}
                            alt={t.contact.formImageAlt}
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#4A3B32]/35 via-transparent to-transparent" />

                        <Petal
                            src={petal4}
                            className="bottom-8 start-4 h-24 w-24 rotate-[-15deg]"
                            opacity="opacity-70"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}