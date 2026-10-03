import React, { useState } from "react";
import { useLangStore } from "../../store/useLangStore";

import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";
import SocialLinks from "./components/SocialLinks";
import ContactForm from "./components/ContactForm";
import DonateCTA from "./components/DonateCTA";

import image3Dr from "../../assets/images/3-dr.webp";
import image3En from "../../assets/images/3-en.webp";

import image2Dr from "../../assets/images/2-dr.svg";
import image2En from "../../assets/images/2-en.svg";

import image6 from "../../assets/images/6.webp";
import image7 from "../../assets/images/7.svg";

const IMAGES = {
  petal1: "../../assets/images/petals/petal-1.webp",
  petal3: "../../assets/images/petals/petal-3.webp",
  petal4: "../../assets/images/petals/petal-4.webp",
  petal5: "../../assets/images/petals/petal-5.webp",
  petal6: "../../assets/images/petals/petal-6.webp",
};

const EMAIL = "mariam2023amiri@gmail.com";

function Petal({ src, className = "", opacity = "opacity-60" }) {
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

export default function Contact() {
  const lang = useLangStore((state) => state.lang);
  const t = useLangStore((state) => state.t);

  const isEnglish = lang === "en";
  const direction = isEnglish ? "ltr" : "rtl";

  const image2 = isEnglish ? image2En : image2Dr;
  const image3 = isEnglish ? image3En : image3Dr;

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

      setTimeout(() => {
        setIsSuccess(false);
      }, 2500);
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
        src={IMAGES.petal3}
        className="start-[5%] top-[600px] hidden h-24 w-24 rotate-[18deg] md:block"
        opacity="opacity-40"
      />

      <Petal
        src={IMAGES.petal4}
        className="end-[4%] top-[650px] hidden h-28 w-28 rotate-[-18deg] md:block"
        opacity="opacity-35"
      />

      {/* Success Popup */}
      {isSuccess && (
        <div className="fixed inset-x-0 top-6 z-[100] flex justify-center px-5">
          <div
            dir={direction}
            className="flex items-center gap-3 rounded-full border border-[#E7C8C2] bg-[#F8E9E6] px-6 py-3 text-xs font-medium text-[#7A685D] shadow-[0_10px_35px_rgba(74,59,50,0.12)]"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#A36F6F] text-white">
              <CheckIcon />
            </span>

            <span>{t.contact.success}</span>
          </div>
        </div>
      )}

      <ContactHero image2={image2} />


      <ContactInfo
        direction={direction}
        t={t}
        petal2={IMAGES.petal2}
        handleCopyEmail={handleCopyEmail}
      />

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

      <SocialLinks
        direction={direction}
        t={t}
        petal1={IMAGES.petal1}
        petal3={IMAGES.petal3}
      />

      <ContactForm
        direction={direction}
        t={t}
        formData={formData}
        isSending={isSending}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        image3={image3}
        petal2={IMAGES.petal2}
        petal4={IMAGES.petal4}
      />

      <DonateCTA
        direction={direction}
        t={t}
        image6={image6}
        image7={image7}
        petal1={IMAGES.petal1}
        petal5={IMAGES.petal5}
      />
    </main>
  );
}