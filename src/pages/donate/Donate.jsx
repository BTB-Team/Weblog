import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLangStore } from "../../store/useLangStore";

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

export default function Donate() {
  const lang = useLangStore((state) => state.lang);
  const t = useLangStore((state) => state.t);

  const isEnglish = lang === "en";
  const direction = isEnglish ? "ltr" : "rtl";
  const donate = t?.donate || {};

  const Arrow = isEnglish ? ArrowRight : ArrowLeft;

  return (
    <main
      dir={direction}
      lang={isEnglish ? "en" : "fa"}
      className="min-h-screen bg-[#FDFBF7] text-[#4A3B32]"
    >
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-7 sm:px-8 md:pb-20 md:pt-9">
        <div className="mx-auto max-w-3xl">
          {/* BREADCRUMB */}
          <div
            className={`relative mb-12 flex w-full ${isEnglish ? "justify-end" : "justify-start"
              }`}
            dir="ltr"
          >
            <nav
              aria-label={donate?.breadcrumb?.label}
              dir="ltr"
              className={`flex items-center gap-3 text-[11px] text-[#9A877A] ${isEnglish ? "flex-row-reverse" : "flex-row"
                }`}
            >
              <Link
                to="/"
                className="flex items-center gap-1.5 transition-colors hover:text-[#A36F6F]"
              >
                <HomeIcon />

                <span>{donate?.breadcrumb?.home}</span>
              </Link>

              <span className="text-[#D6C5B9]">/</span>

              <span className="text-[#7A685D]">
                {donate?.breadcrumb?.current}
              </span>
            </nav>
          </div>

          {/* HERO CONTENT */}
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#EAD5C3] bg-white text-[#A36F6F] shadow-[0_8px_25px_rgba(74,59,50,0.06)]">
              <Heart size={27} strokeWidth={1.6} />
            </div>

            <p className="mb-3 text-sm font-medium text-[#A36F6F]">
              {donate?.hero?.eyebrow}
            </p>

            <h1 className="text-3xl font-bold leading-[1.5] text-[#4A3B32] sm:text-4xl md:text-5xl">
              {donate?.hero?.title}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#7A685D] sm:text-[15px] sm:leading-8">
              {donate?.hero?.description}
            </p>
          </div>
        </div>
      </section>

      {/* DONATION CONTENT */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-stretch">
            {/* MESSAGE */}
            <div className="rounded-[1.7rem] border border-[#EAD5C3]/70 bg-[#FDFBF7] p-7 sm:p-9">
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

            {/* CONTACT DETAILS */}
            <div className="rounded-[1.7rem] border border-[#EAD5C3]/70 bg-[#FCF7F0] p-7 sm:p-9">
              <h2 className="text-xl font-bold text-[#4A3B32] sm:text-2xl">
                {donate?.contact?.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#7A685D]">
                {donate?.contact?.description}
              </p>

              <div className="mt-7 space-y-4">
                {/* PHONE */}
                <a
                  href="tel:+93728288062"
                  dir="ltr"
                  className="flex items-center gap-4 rounded-2xl border border-[#EAD5C3]/70 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(74,59,50,0.06)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7E9E2] text-[#A36F6F]">
                    <Phone size={19} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0">
                    <p
                      dir={direction}
                      className="text-xs text-[#7A685D]"
                    >
                      {donate?.contact?.phoneLabel}
                    </p>

                    <p
                      dir="ltr"
                      className="mt-1 text-sm font-semibold text-[#4A3B32]"
                    >
                      +93728288062
                    </p>
                  </div>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:mariam2023amiri@gmail.com"
                  className="flex items-center gap-4 rounded-2xl border border-[#EAD5C3]/70 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(74,59,50,0.06)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7E9E2] text-[#A36F6F]">
                    <Mail size={19} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-[#7A685D]">
                      {donate?.contact?.emailLabel}
                    </p>

                    <p
                      dir="ltr"
                      className="mt-1 break-all text-sm font-semibold text-[#4A3B32]"
                    >
                      mariam2023amiri@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[1.7rem] border border-[#EAD5C3]/70 bg-[#FCF7F0] px-6 py-9 text-center sm:px-10">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F7E9E2] text-[#A36F6F]">
              <Heart size={21} strokeWidth={1.7} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-[#4A3B32] sm:text-2xl">
              {donate?.cta?.title}
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#7A685D]">
              {donate?.cta?.description}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:mariam2023amiri@gmail.com"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <span>{donate?.cta?.emailButton}</span>

                <Mail size={16} strokeWidth={1.8} />
              </a>

              <Link
                to="/contact"
                className="btn-outline inline-flex items-center justify-center gap-2"
              >
                <span>{donate?.cta?.contactButton}</span>

                <Arrow size={16} strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}