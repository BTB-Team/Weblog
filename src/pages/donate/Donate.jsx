
import React from "react";
import { useLangStore } from "../../store/useLangStore";

import DonateHero from "./components/DonateHero";
import DonationMessage from "./components/DonationMessage";
import DonationContact from "./components/DonationContact";
import DonationCTA from "./components/DonationCTA";
import image6 from "../../assets/images/6.webp";
import image7 from "../../assets/images/7.svg";


export default function Donate() {
  const lang = useLangStore((state) => state.lang);
  const t = useLangStore((state) => state.t);

  const isEnglish = lang === "en";
  const direction = isEnglish ? "ltr" : "rtl";
  const donate = t?.donate || {};

  return (
    <main
      dir={direction}
      lang={isEnglish ? "en" : "fa"}
      className="min-h-screen bg-[#FDFBF7] text-[#4A3B32]"
    >
      <DonateHero
        donate={donate}
        isEnglish={isEnglish}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div
            dir={direction}
            className={`grid gap-8 md:items-stretch ${isEnglish
              ? "md:grid-cols-[1.05fr_0.95fr]"
              : "md:grid-cols-[0.95fr_1.05fr]"
              }`}
          >
            <DonationMessage donate={donate} />

            <DonationContact
              donate={donate}
              isEnglish={isEnglish}
              direction={direction}
            />
          </div>

          <DonationCTA
            donate={donate}
            isEnglish={isEnglish}
            image6={image6}
            image7={image7}
          />
        </div>
      </section>
    </main>
  );
}
