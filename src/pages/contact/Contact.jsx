import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLangStore } from "../../store/useLangStore";

import image1 from "../../assets/images/1.png";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.png";
import image4 from "../../assets/images/4.jpg";
import image5 from "../../assets/images/5.jpg";
import image6 from "../../assets/images/6.png";
import image7 from "../../assets/images/7.jpg";

const IMAGES = {
  // Decorative petals
  petal1: "../../assets/images/petals/petal-1.png",
  petal2: "../../assets/images/petals/petal-2.png",
  petal3: "../../assets/images/petals/petal-3.png",
  petal4: "../../assets/images/petals/petal-4.png",
  petal5: "../../assets/images/petals/petal-5.png",
  petal6: "../../assets/images/petals/petal-6.png",
};

const EMAIL = "mariam2023amiri@gmail.com";

const SOCIALS = [
  {
    key: "email",
    type: "mail",
    href: "mailto:mariam2023amiri@gmail.com",
  },
  {
    key: "outlook",
    type: "mail",
    href: "mailto:mariamamiri26@outlook.com",
  },
  {
    key: "linktree",
    type: "linktree",
    href: "https://linktr.ee/MariamAmiri",
  },
  {
    key: "bluesky",
    type: "bluesky",
    href: "https://bsky.app/profile/mariam26amiri.bsky.social",
  },
  {
    key: "telegram",
    type: "telegram",
    href: "https://t.me/mariamamiri",
  },
  {
    key: "substack",
    type: "substack",
    href: "https://substack.com/@mariamamiri?utm_source=share&utm_medium=android&r=6ghp4h",
  },
  {
    key: "threads",
    type: "threads",
    href: "https://www.threads.com/@mariam2023amiri",
  },
  {
    key: "tiktok",
    type: "tiktok",
    href: "https://www.tiktok.com/@mariam.amiri96?_r=1&_t=ZS-96W8stdDYer",
  },
  {
    key: "x",
    type: "twitter",
    href: "https://x.com/AmiriMariam",
  },
  {
    key: "instagram",
    type: "instagram",
    href: "https://www.instagram.com/mariam2023amiri?igsh=MWYxOG82dmpqOG43",
  },
  {
    key: "facebook",
    type: "facebook",
    href: "https://www.facebook.com/share/1BVPrzYCHQ/",
  },
  {
    key: "linkedin",
    type: "linkedin",
    href: "https://linkedin.com/in/mariam-amiri",
  },
];

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

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.1a4.7 4.7 0 0 1 8.8 2.6Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function SocialIcon({ type }) {
  if (type === "castbox") {
    return (
      <span className="font-bold text-[13px] leading-none">
        C
      </span>
    );
  }

  if (type === "telegram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="m21 3-6.7 18-3.7-7.1L3 10.2 21 3Z" />
        <path d="m10.6 13.9 4.2-4.2" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.4"
          cy="6.6"
          r="0.7"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M6 9v11" />
        <path d="M6 5.5v.1" />
        <path d="M10 20V9" />
        <path d="M10 13.5a4.5 4.5 0 0 1 9 0V20" />
        <path d="M14 20v-5.5" />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <rect x="3" y="6" width="18" height="12" rx="3" />
        <path d="m10 9 5 3-5 3V9Z" />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
        <path d="M8.5 9.2c.3 2 1.8 3.5 3.8 4" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <span className="font-serif text-lg font-bold leading-none">
        f
      </span>
    );
  }

  if (type === "x") {
    return (
      <span className="text-[15px] font-medium leading-none">
        𝕏
      </span>
    );
  }

  if (type === "tiktok") {
    return (
      <span className="text-[15px] font-bold leading-none">
        ♪
      </span>
    );
  }

  if (type === "aparat") {
    return (
      <span className="text-[11px] font-bold leading-none">
        A
      </span>
    );
  }

  if (type === "pinterest") {
    return (
      <span className="font-serif text-lg font-bold leading-none">
        P
      </span>
    );
  }

  if (type === "goodreads") {
    return (
      <span className="font-serif text-[12px] font-bold leading-none">
        G
      </span>
    );
  }

  if (type === "mail") {
    return <MailIcon />;
  }

  if (type === "linktree") {
    return (
      <span className="text-[10px] font-bold leading-none">
        LT
      </span>
    );
  }

  if (type === "bluesky") {
    return (
      <span className="text-[10px] font-bold leading-none">
        BS
      </span>
    );
  }

  if (type === "substack") {
    return (
      <span className="font-serif text-[13px] font-bold leading-none">
        S
      </span>
    );
  }

  if (type === "threads") {
    return (
      <span className="text-[15px] font-medium leading-none">
        @
      </span>
    );
  }

  if (type === "twitter") {
    return (
      <span className="text-[15px] font-medium leading-none">
        𝕏
      </span>
    );
  }

  return null;
}

export default function Contact() {
  const lang = useLangStore((state) => state.lang);
  const t = useLangStore((state) => state.t);

  const isEnglish = lang === "en";
  const direction = isEnglish ? "ltr" : "rtl";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setIsSuccess(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSending(true);
    setIsSuccess(false);

    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1200);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <main
      dir={direction}
      lang={isEnglish ? "en" : "fa"}
      className="relative min-h-screen overflow-hidden bg-[#FDFBF7] text-[#4A3B32]"
    >
      <Petal
        src={IMAGES.petal1}
        className="start-[2%] top-[130px] h-28 w-28 rotate-[-20deg] md:h-36 md:w-36"
        opacity="opacity-45"
      />

      <Petal
        src={IMAGES.petal2}
        className="end-[4%] top-[90px] h-20 w-20 rotate-[25deg] md:h-28 md:w-28"
        opacity="opacity-35"
      />

      <Petal
        src={IMAGES.petal3}
        className="start-[5%] top-[600px] hidden h-24 w-24 rotate-[18deg] md:block"
        opacity="opacity-40"
      />

      <Petal
        src={IMAGES.petal4}
        className="end-[4%] top-[650px] hidden h-28 w-28 rotate-[-18deg] md:block"
        opacity="opacity-35"
      />

      <section className="relative mx-auto max-w-6xl px-5 pb-8 pt-7 sm:px-8 md:pb-12 md:pt-9">
        <div
          className={`absolute top-0 z-20 hidden h-[430px] w-[330px] overflow-hidden rounded-[4px] lg:block ${isEnglish ? "left-0" : "right-0"
            }`}
        >
          <img
            src={image1}
            alt={t.contact.heroImageAlt}
            className="h-full w-full object-cover shadow-sm"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#FDFBF7]/15" />
        </div>

        {/* Breadcrumb */}
        <div
          className={`relative mb-12 flex w-full ${isEnglish ? "justify-end" : "justify-start"
            }`}
          dir="ltr"
        >
          <nav
            aria-label={t.contact?.breadcrumb?.label}
            dir="ltr"
            className={`flex items-center gap-3 text-[11px] text-[#9A877A] ${isEnglish ? "flex-row-reverse" : "flex-row"
              }`}
          >
            <Link
              to="/"
              className="flex items-center gap-1.5 transition-colors hover:text-[#A36F6F]"
            >
              <HomeIcon />
              <span>{t.contact?.breadcrumb?.home}</span>
            </Link>

            <span className="text-[#D6C5B9]">/</span>

            <span className="text-[#7A685D]">
              {t.contact?.breadcrumb?.current}
            </span>
          </nav>
        </div>

        <div
          className="grid items-center gap-8 lg:grid-cols-[1fr_1fr_1fr] lg:gap-7"
          dir="ltr"
        >
          <div
            className={`relative flex h-[330px] items-center ${isEnglish
              ? "order-3 justify-end lg:order-3"
              : "order-1 justify-start lg:order-1"
              }`}
          >
            <img
              src={image2}
              alt=""
              className="h-64 w-64 object-contain sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            />
          </div>

          <div
            dir={direction}
            className="relative order-2 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-9 bg-[#EAD5C3]" />

              <span className="whitespace-nowrap text-[11px] text-[#A36F6F]">
                {t.contact.heroLabel}
              </span>

              <span className="h-px w-9 bg-[#EAD5C3]" />
            </div>

            <h1 className="whitespace-nowrap font-serif text-3xl font-bold leading-[1.5] text-[#4A3B32] sm:text-4xl md:text-5xl">
              {t.contact.heroTitle}
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-[#7A685D] md:text-[15px]">
              {t.contact.heroDescription}
            </p>

            <div className="mt-7 flex items-center justify-center gap-4">
              <span className="h-px w-14 bg-[#EAD5C3]" />

              <Petal
                src={IMAGES.petal5}
                className="!relative h-8 w-8 rotate-[25deg]"
                opacity="opacity-70"
              />

              <span className="h-px w-14 bg-[#EAD5C3]" />
            </div>
          </div>

          <div
            className={`relative h-[330px] ${isEnglish
              ? "order-1 lg:order-1"
              : "order-3 lg:order-3"
              }`}
          >
            <Petal
              src={IMAGES.petal6}
              className={`absolute bottom-2 h-20 w-20 rotate-[-20deg] ${isEnglish ? "right-2" : "left-2"
                }`}
              opacity="opacity-60"
            />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 py-5 sm:px-8 md:py-8">
        <div
          dir="ltr"
          className="grid gap-4 md:grid-cols-3"
        >
          <button
            type="button"
            onClick={handleCopyEmail}
            dir={direction}
            className="group relative order-3 min-h-[125px] rounded-[6px] border border-[#EAD5C3]/60 bg-white/70 p-6 text-end shadow-[0_5px_25px_rgba(74,59,50,0.025)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_35px_rgba(74,59,50,0.07)] md:order-1"
          >
            <Petal
              src={IMAGES.petal2}
              className="bottom-0 start-1 h-16 w-16 rotate-[-20deg]"
              opacity="opacity-20"
            />

            <div className="relative z-10 flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7E9E2] text-[#A36F6F]">
                <MailIcon />
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-[#4A3B32]">
                  {t.contact.info.emailTitle}
                </h3>

                <p
                  dir="ltr"
                  className="mt-2 truncate text-xs text-[#7A685D]"
                >
                  {EMAIL}
                </p>

                <p className="mt-3 text-[10px] text-[#9A877A]">
                  {t.contact.info.emailDescription}
                </p>
              </div>
            </div>

            <div className="absolute bottom-4 start-5 flex items-center gap-1.5 text-[10px] text-[#A36F6F] opacity-0 transition-opacity group-hover:opacity-100">
              <CopyIcon />
              {t.contact.info.copy}
            </div>
          </button>

          <div
            dir={direction}
            className="relative order-2 min-h-[125px] rounded-[6px] border border-[#EAD5C3]/60 bg-white/70 p-6 text-end shadow-[0_5px_25px_rgba(74,59,50,0.025)]"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7E9E2] text-[#A36F6F]">
                <LocationIcon />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#4A3B32]">
                  {t.contact.info.locationTitle}
                </h3>

                <p className="mt-2 text-xs text-[#7A685D]">
                  {t.contact.info.location}
                </p>

                <p className="mt-3 text-[10px] leading-5 text-[#9A877A]">
                  {t.contact.info.locationDescription}
                </p>
              </div>
            </div>
          </div>

          <div
            dir={direction}
            className="relative order-1 min-h-[125px] rounded-[6px] border border-[#EAD5C3]/60 bg-white/70 p-6 text-end shadow-[0_5px_25px_rgba(74,59,50,0.025)] md:order-3"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7E9E2] text-[#A36F6F]">
                <ClockIcon />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#4A3B32]">
                  {t.contact.info.responseTitle}
                </h3>

                <p className="mt-2 text-xs text-[#7A685D]">
                  {t.contact.info.responseTime}
                </p>

                <p className="mt-3 text-[10px] leading-5 text-[#9A877A]">
                  {t.contact.info.responseDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {copied && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-full border border-[#EAD5C3] bg-[#F7E9E2] px-5 py-3 text-xs text-[#7A685D] shadow-[0_10px_35px_rgba(74,59,50,0.10)]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#A36F6F] text-white">
              <CheckIcon />
            </span>

            <span>{t.contact.copyToast}</span>
          </div>
        </div>
      )}

      {/* 3. SOCIAL MEDIA */}

      <section
        dir={direction}
        className="relative mx-auto max-w-6xl px-5 py-14 text-center sm:px-8 md:py-16"
      >
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-[#EAD5C3]" />

          <h2 className="font-serif text-xl font-bold text-[#4A3B32] sm:text-2xl">
            {t.contact.social.title}
          </h2>

          <span className="h-px w-10 bg-[#EAD5C3]" />
        </div>

        <p className="mt-3 text-xs text-[#8D786B]">
          {t.contact.social.description}
        </p>

        <div
          className="relative mx-auto mt-8 grid max-w-4xl grid-cols-3 gap-x-5 gap-y-8 sm:grid-cols-4 md:grid-cols-6"
          dir="ltr"
        >
          {SOCIALS.map((social) => (
            <a
              key={social.key}
              href={social.href}
              aria-label={t.contact.social.items[social.key]}
              className="group flex flex-col items-center gap-3"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DCC9BC] text-[#7A685D] transition-all duration-300 group-hover:border-[#A36F6F] group-hover:bg-[#A36F6F] group-hover:text-white group-hover:shadow-[0_7px_20px_rgba(163,111,111,0.18)]">
                <SocialIcon type={social.type} />
              </span>

              <span className="text-[11px] text-[#7A685D] transition-colors group-hover:text-[#A36F6F]">
                {t.contact.social.items[social.key]}
              </span>
            </a>
          ))}

          <Petal
            src={IMAGES.petal1}
            className="start-[-20px] top-1/2 h-20 w-20 -translate-y-1/2 rotate-[-15deg]"
            opacity="opacity-35"
          />

          <Petal
            src={IMAGES.petal3}
            className="end-[-20px] top-1/2 h-20 w-20 -translate-y-1/2 rotate-[20deg]"
            opacity="opacity-35"
          />
        </div>
      </section>

      {/* 4. CONTACT FORM */}

      <section className="relative mx-auto max-w-6xl px-5 pb-14 sm:px-8 md:pb-20">
        <div className="relative overflow-hidden rounded-[8px] border border-[#EAD5C3]/60 bg-white shadow-[0_10px_45px_rgba(74,59,50,0.045)]">
          <div
            dir={direction}
            className="grid lg:grid-cols-[1.28fr_0.72fr]"
          >
            <div className="relative order-1 px-6 py-9 sm:px-9 sm:py-11 md:px-12 lg:order-1">
              <Petal
                src={IMAGES.petal2}
                className="end-2 top-2 h-16 w-16 rotate-[20deg]"
                opacity="opacity-25"
              />

              <div className="relative z-10">
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
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
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
                        className="w-full rounded-[4px] border border-[#EAD5C3] bg-[#FDFBF7] px-4 py-3 text-xs text-[#4A3B32] outline-none transition focus:border-[#A36F6F]/60 focus:bg-white focus:ring-2 focus:ring-[#A36F6F]/5"
                      />
                    </div>

                    <div>
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
                        className="w-full rounded-[4px] border border-[#EAD5C3] bg-[#FDFBF7] px-4 py-3 text-xs text-[#4A3B32] outline-none transition focus:border-[#A36F6F]/60 focus:bg-white focus:ring-2 focus:ring-[#A36F6F]/5"
                      />
                    </div>
                  </div>

                  <div>
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
                      className="w-full appearance-none rounded-[4px] border border-[#EAD5C3] bg-[#FDFBF7] px-4 py-3 text-xs text-[#7A685D] outline-none transition focus:border-[#A36F6F]/60 focus:bg-white focus:ring-2 focus:ring-[#A36F6F]/5"
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

                  <div>
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
                      className="w-full resize-none rounded-[4px] border border-[#EAD5C3] bg-[#FDFBF7] px-4 py-3 text-xs leading-7 text-[#4A3B32] outline-none transition focus:border-[#A36F6F]/60 focus:bg-white focus:ring-2 focus:ring-[#A36F6F]/5"
                    />

                    <div className="mt-1 text-end text-[9px] text-[#B3A196]">
                      {formData.message.length}/500
                    </div>
                  </div>

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

            <div className="relative order-2 min-h-[590px] overflow-hidden lg:order-2">
              <img
                src={image3}
                alt={t.contact.formImageAlt}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#4A3B32]/35 via-transparent to-transparent" />

              <Petal
                src={IMAGES.petal4}
                className="bottom-8 start-4 h-24 w-24 rotate-[-15deg]"
                opacity="opacity-70"
              />
            </div>
          </div>
        </div>
      </section>

      {isSuccess && (
        <div className="mx-auto max-w-6xl px-5 pb-6 sm:px-8">
          <div
            dir="ltr"
            className="flex items-center justify-center gap-4"
          >
            <img
              src={image4}
              alt=""
              className="hidden h-20 w-20 rounded-[5px] object-cover sm:block"
            />

            <div className="rounded-[5px] border border-[#E7C8C2] bg-[#F8E9E6] px-6 py-3">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#A36F6F] text-white">
                  <CheckIcon />
                </span>

                <p
                  dir={direction}
                  className="text-xs font-medium text-[#7A685D]"
                >
                  {t.contact.success}
                </p>
              </div>
            </div>

            <img
              src={image5}
              alt=""
              className="hidden h-20 w-20 rounded-[5px] object-cover sm:block"
            />
          </div>
        </div>
      )}

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
              <h2 className="font-serif text-xl font-bold text-[#4A3B32] sm:text-2xl">
                {t.contact.donate.title}
              </h2>

              <p className="mx-auto mt-2 max-w-xl text-xs leading-6 text-[#8D786B]">
                {t.contact.donate.description}
              </p>
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
                  to="/donate"
                  className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-medium"
                >
                  <span>
                    {t.contact.donate.support}
                  </span>

                  <HeartIcon />
                </Link>

                <Link
                  to="/"
                  className="btn-outline inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs"
                >
                  <span>
                    {t.contact.donate.backHome}
                  </span>

                  <ArrowLeftIcon />
                </Link>
              </div>

              <img
                src={image7}
                alt=""
                className="h-20 w-20 shrink-0 rounded-[5px] object-cover sm:h-24 sm:w-24"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}