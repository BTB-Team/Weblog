import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Award,
  Users,
  PenLine,
  Languages,
  Globe2,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useLangStore } from "../../store/useLangStore";

import image1 from "../../assets/images/1.png";
import image6 from "../../assets/images/6.png";
import image7 from "../../assets/images/7.jpg";

const IMAGES = {
  petal1: "../../assets/images/petals/petal-1.png",
  petal5: "../../assets/images/petals/petal-5.png",
};

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
    >
      <path d="m3 10 9-7 9 7" />
      <path d="M5 9v11h14V9" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}

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

export default function About() {
  /* =========================================================
     LANGUAGE
  ========================================================= */

  const lang = useLangStore((state) => state.lang);
  const t = useLangStore((state) => state.t);

  const isEnglish = lang === "en";
  const direction = isEnglish ? "ltr" : "rtl";

  const about = t?.about || {};

  const [showStory, setShowStory] = useState(false);

  const Arrow = isEnglish ? ArrowRight : ArrowLeft;

  /* =========================================================
     SAFE DATA
  ========================================================= */

  const education = Array.isArray(about?.education)
    ? about.education
    : [];

  const experience = Array.isArray(about?.experience)
    ? about.experience
    : [];

  const storyParagraphs = Array.isArray(
    about?.story?.paragraphs
  )
    ? about.story.paragraphs
    : [];

  const languages = Array.isArray(
    about?.languages?.items
  )
    ? about.languages.items
    : [];

  const skills = Array.isArray(
    about?.skills?.items
  )
    ? about.skills.items
    : [];

  const memberships = Array.isArray(
    about?.memberships?.items
  )
    ? about.memberships.items
    : [];

  /* =========================================================
     MEMBERSHIP ICONS
  ========================================================= */

  const membershipIcons = [
    Globe2,
    BookOpen,
    Users,
    Award,
  ];

  /* =========================================================
     STORY PREVIEW
  ========================================================= */

  const previewParagraphs = storyParagraphs.slice(0, 2);
  const remainingParagraphs = storyParagraphs.slice(2);

  return (
    <div
      dir={direction}
      className="min-h-screen bg-[#FDFBF7] text-[#4A3B32]"
    >
      <main>

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="mx-auto max-w-6xl px-5 pb-20 pt-7 sm:px-8 md:pb-28 md:pt-9">

          <div className="mx-auto max-w-4xl">

            {/* =================================================
                BREADCRUMB
            ================================================== */}

            <div
              className={`relative mb-12 flex w-full ${isEnglish
                ? "justify-end"
                : "justify-start"
                }`}
              dir="ltr"
            >
              <nav
                aria-label={about?.breadcrumb?.label}
                dir="ltr"
                className={`flex items-center gap-3 text-[11px] text-[#9A877A] ${isEnglish
                  ? "flex-row-reverse"
                  : "flex-row"
                  }`}
              >
                <Link
                  to="/"
                  className="flex items-center gap-1.5 transition-colors hover:text-[#A36F6F]"
                >
                  <HomeIcon />

                  <span>
                    {about?.breadcrumb?.home}
                  </span>
                </Link>

                <span className="text-[#D6C5B9]">
                  /
                </span>

                <span className="text-[#7A685D]">
                  {about?.breadcrumb?.current}
                </span>
              </nav>
            </div>

            {/* =================================================
                HERO CONTENT
            ================================================== */}

            <div className="text-center">

              <div className="mb-5 flex items-center justify-center gap-3 text-sm font-medium text-[#A36F6F]">

                <span className="h-px w-10 bg-[#EAD5C3]" />

                <span>
                  {about?.hero?.eyebrow}
                </span>

                <span className="h-px w-10 bg-[#EAD5C3]" />

              </div>

              <h1 className="font-serif text-3xl font-bold leading-[1.5] text-[#4A3B32] sm:text-4xl md:text-5xl">
                {about?.hero?.title}
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#7A685D] sm:text-[15px] sm:leading-8">
                {about?.hero?.description}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">

                <button
                  type="button"
                  onClick={() => {
                    document
                      .getElementById("biography")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <span>
                    {about?.hero?.storyButton}
                  </span>

                  <Arrow
                    size={16}
                    strokeWidth={1.8}
                  />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    document
                      .getElementById("timeline")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                  className="btn-outline inline-flex items-center justify-center gap-2"
                >
                  <span>
                    {about?.hero?.experienceButton}
                  </span>

                  <Arrow
                    size={16}
                    strokeWidth={1.8}
                  />
                </button>

              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BIOGRAPHY
        ====================================================== */}

        <section
          id="biography"
          className="scroll-mt-10 bg-white py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">

            <div
              dir="ltr"
              className="grid items-center gap-8 md:grid-cols-[0.82fr_1.18fr] md:gap-10 lg:gap-12"
            >


              <div
                dir={direction}
                className="flex justify-center md:justify-start"
              >
                <div className="relative w-full max-w-[390px]">

                  <div className="absolute -inset-3 rounded-[2rem] border border-[#EAD5C3]/70" />

                  <div className="relative overflow-hidden rounded-[1.7rem] bg-[#EAD5C3]/30 shadow-[0_18px_45px_rgba(74,59,50,0.08)]">

                    <img
                      src={image1}
                      alt={about?.hero?.imageAlt}
                      className="h-auto w-full object-cover"
                    />

                  </div>
                </div>
              </div>

              <div
                dir={direction}
                className="w-full max-w-[610px]"
              >

                <p className="mb-3 text-sm font-medium text-[#A36F6F]">
                  {about?.story?.eyebrow}
                </p>

                <h2 className="font-serif text-2xl font-bold leading-[1.5] text-[#4A3B32] sm:text-3xl">
                  {about?.story?.title}
                </h2>

                <div className="mt-7 space-y-5">

                  {previewParagraphs.map(
                    (paragraph, index) => (
                      <p
                        key={`preview-${index}`}
                        className="max-w-[590px] text-sm leading-7 text-[#7A685D] sm:text-[15px] sm:leading-8"
                      >
                        {paragraph}
                      </p>
                    )
                  )}

                  {showStory &&
                    remainingParagraphs.length > 0 && (
                      <div className="space-y-5 border-t border-[#EAD5C3]/60 pt-7">

                        {remainingParagraphs.map(
                          (paragraph, index) => (
                            <p
                              key={`remaining-${index}`}
                              className="max-w-[590px] text-sm leading-7 text-[#7A685D] sm:text-[15px] sm:leading-8"
                            >
                              {paragraph}
                            </p>
                          )
                        )}

                      </div>
                    )}

                </div>

                {remainingParagraphs.length > 0 && (
                  <button
                    type="button"
                    onClick={() =>
                      setShowStory((prev) => !prev)
                    }
                    aria-expanded={showStory}
                    className="btn-primary mt-7 inline-flex items-center justify-center gap-2"
                  >
                    <span>
                      {showStory
                        ? about?.hero?.hideStoryButton
                        : about?.hero?.storyButton}
                    </span>

                    <Arrow
                      size={16}
                      strokeWidth={1.8}
                    />
                  </button>
                )}

              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            EDUCATION / EXPERIENCE / LANGUAGES / SKILLS
        ====================================================== */}

        <section
          id="timeline"
          className="scroll-mt-10 bg-[#FDFBF7] py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">

            <div className="mb-10">
              <div className="ms-auto max-w-xl text-end">

                <p className="mb-2 text-sm font-medium text-[#A36F6F]">
                  {about?.timeline?.eyebrow}
                </p>

                <h2 className="font-serif text-2xl font-bold leading-[1.5] text-[#4A3B32] sm:text-3xl">
                  {about?.timeline?.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#7A685D]">
                  {about?.timeline?.description}
                </p>

              </div>
            </div>

            <div
              dir="ltr"
              className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16"
            >

              <div
                dir={direction}
                className="relative"
              >

                <div className="absolute start-1/2 top-3 bottom-3 hidden w-px -translate-x-1/2 bg-[#EAD5C3] md:block" />

                <div className="space-y-6">

                  {[
                    ...education.map((item) => ({
                      ...item,
                      type: "education",
                    })),

                    ...experience.map((item) => ({
                      ...item,
                      type: "experience",
                    })),
                  ].map((item, index) => {

                    const isLeft = index % 2 === 0;

                    return (
                      <div
                        key={`${item?.type}-${index}`}
                        className="relative md:grid md:grid-cols-2 md:gap-10"
                      >

                        <div
                          className={
                            isLeft
                              ? "md:pe-10 md:text-end"
                              : "md:col-start-2 md:ps-10 md:text-start"
                          }
                        >

                          <div
                            className={`flex max-w-[360px] items-start gap-3 ${isLeft
                              ? "ms-auto flex-row-reverse md:justify-start"
                              : "me-auto flex-row md:justify-start"
                              }`}
                          >

                            {/* ICON */}

                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-[#FDFBF7] bg-[#A36F6F] text-white shadow-[0_3px_12px_rgba(163,111,111,0.16)]">

                              {item?.type ===
                                "education" ? (
                                <GraduationCap
                                  size={18}
                                  strokeWidth={1.8}
                                />
                              ) : (
                                <Briefcase
                                  size={18}
                                  strokeWidth={1.8}
                                />
                              )}

                            </div>

                            <div className="min-w-0 flex-1">

                              <div className="mb-1.5 text-xs text-[#7A685D]">
                                {item?.date}
                              </div>

                              <h4 className="text-[15px] font-bold leading-6 text-[#4A3B32] sm:text-base">
                                {item?.title}
                              </h4>

                              <p className="mt-0.5 text-sm font-medium text-[#A36F6F]">
                                {item?.organization}
                              </p>

                              {item?.description && (
                                <p className="mt-1 text-sm leading-6 text-[#7A685D]">
                                  {item?.description}
                                </p>
                              )}

                            </div>

                          </div>
                        </div>

                        <div className="absolute start-1/2 top-1 hidden -translate-x-1/2 md:block">

                          <div className="h-3 w-3 rounded-full border-2 border-[#FDFBF7] bg-[#A36F6F]" />

                        </div>

                      </div>
                    );
                  })}

                </div>
              </div>

              {/* LANGUAGES + SKILLS */}

              <aside
                dir={direction}
                className="pt-1"
              >

                {/* LANGUAGES */}

                <div>

                  <div className="mb-5 flex items-center gap-2 border-b border-[#EAD5C3] pb-3">

                    <Languages
                      size={19}
                      strokeWidth={1.7}
                      className="text-[#A36F6F]"
                    />

                    <h3 className="text-lg font-bold text-[#4A3B32]">
                      {about?.languages?.title}
                    </h3>

                  </div>

                  <div className="space-y-3">

                    {languages.map(
                      (item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between gap-4"
                        >

                          <span className="text-sm text-[#4A3B32]">
                            {item?.name}
                          </span>

                          <span className="text-xs text-[#7A685D]">
                            {item?.level}
                          </span>

                        </div>
                      )
                    )}

                  </div>
                </div>

                {/* SKILLS */}

                <div className="mt-9">

                  <div className="mb-5 flex items-center gap-2 border-b border-[#EAD5C3] pb-3">

                    <BookOpen
                      size={19}
                      strokeWidth={1.7}
                      className="text-[#A36F6F]"
                    />

                    <h3 className="text-lg font-bold text-[#4A3B32]">
                      {about?.skills?.title}
                    </h3>

                  </div>

                  <div className="flex flex-wrap gap-2">

                    {skills.map(
                      (skill, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-[#F7E9E2] px-3 py-1.5 text-xs text-[#7A685D]"
                        >
                          {typeof skill === "object"
                            ? skill?.name
                            : skill}
                        </span>
                      )
                    )}

                  </div>
                </div>

              </aside>
            </div>
          </div>
        </section>

        {/* =====================================================
            MEMBERSHIPS
        ====================================================== */}

        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">

            <div className="mb-10 max-w-2xl">

              <p className="mb-3 text-sm font-medium text-[#A36F6F]">
                {about?.memberships?.eyebrow}
              </p>

              <h2 className="font-serif text-2xl font-bold leading-[1.5] text-[#4A3B32] sm:text-3xl">
                {about?.memberships?.title}
              </h2>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {memberships.map(
                (membership, index) => {

                  const Icon =
                    membershipIcons[
                    index %
                    membershipIcons.length
                    ];

                  return (
                    <div
                      key={index}
                      className="flex gap-4 rounded-2xl border border-[#EAD5C3]/60 bg-[#FDFBF7] p-6"
                    >

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7E9E2] text-[#A36F6F]">

                        <Icon
                          size={21}
                          strokeWidth={1.7}
                        />

                      </div>

                      <p className="text-sm leading-7 text-[#7A685D]">
                        {typeof membership === "object"
                          ? membership?.name
                          : membership}
                      </p>

                    </div>
                  );
                }
              )}

            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-6xl px-5 pb-8 sm:px-8">

          <div className="relative overflow-hidden rounded-[6px] border border-[#EAD5C3]/70 bg-[#FCF7F0] px-6 py-7 sm:px-10">

            <Petal
              src={IMAGES.petal1}
              className="bottom-1 start-3 h-20 w-20 rotate-[-18deg]"
              opacity="opacity-45"
            />

            <Petal
              src={IMAGES.petal5}
              className="bottom-0 start-14 h-16 w-16 rotate-[10deg]"
              opacity="opacity-35"
            />

            <div
              dir="ltr"
              className="relative z-10 grid items-center gap-7 md:grid-cols-[0.75fr_1.35fr_0.9fr]"
            >


              <div className="flex h-24 items-center justify-start">

                <img
                  src={image6}
                  alt=""
                  className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                />

              </div>


              <div
                dir={direction}
                className="text-center"
              >

                <h2 className="font-serif text-xl font-bold leading-[1.5] text-[#4A3B32] sm:text-2xl">
                  {about?.cta?.title}
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-[#7A685D] sm:text-sm sm:leading-7">
                  {about?.cta?.description}
                </p>

                <Link
                  to="/contact"
                  className="btn-primary mt-4 inline-flex items-center justify-center gap-2"
                >
                  {about?.cta?.contactButton}

                  {isEnglish ? (
                    <ArrowRight size={15} />
                  ) : (
                    <ArrowLeft size={15} />
                  )}
                </Link>

              </div>


              <div
                dir="ltr"
                className="flex w-full items-center justify-end gap-3"
              >

                <div
                  dir={direction}
                  className="flex flex-col gap-2"
                >

                  <Link
                    to="/achievements"
                    className="btn-primary inline-flex items-center justify-center whitespace-nowrap"
                  >
                    {about?.cta?.achievementsButton}
                  </Link>

                  <Link
                    to="/media"
                    className="btn-outline inline-flex items-center justify-center whitespace-nowrap"
                  >
                    {about?.cta?.mediaButton}
                  </Link>

                </div>

                <img
                  src={image7}
                  alt=""
                  className="h-20 w-20 shrink-0 object-contain"
                />

              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}