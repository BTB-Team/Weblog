import React, { useState } from "react";
import { useLangStore } from "../../store/useLangStore";

import AboutHero from "./components/AboutHero";
import Biography from "./components/Biography";
import Timeline from "./components/Timeline";
import Memberships from "./components/Memberships";
import AboutCTA from "./components/AboutCTA";

import image1 from "../../assets/images/9.webp";
import image6 from "../../assets/images/6.webp";
import image7 from "../../assets/images/7.svg";

const IMAGES = {
  petal1: "../../assets/images/petals/petal-1.webp",
  petal5: "../../assets/images/petals/petal-5.webp",
};

export default function About() {
  const lang = useLangStore((state) => state.lang);
  const t = useLangStore((state) => state.t);

  const isEnglish = lang === "en";
  const direction = isEnglish ? "ltr" : "rtl";

  const about = t?.about || {};

  const [showStory, setShowStory] = useState(false);

  return (

    <main
      dir={direction}
      lang={isEnglish ? "en" : "fa"}
      className={`min-h-screen bg-[#FDFBF7] text-[#4A3B32] ${isEnglish ? "font-english" : "font-persian"
        }`}
    >

      <AboutHero
        direction={direction}
        isEnglish={isEnglish}
        about={about}
      />

      <Biography
        direction={direction}
        isEnglish={isEnglish}
        about={about}
        image1={image1}
        showStory={showStory}
        setShowStory={setShowStory}
      />

      <Timeline
        direction={direction}
        about={about}
      />

      <Memberships
        direction={direction}
        about={about}
      />

      <AboutCTA
        direction={direction}
        isEnglish={isEnglish}
        about={about}
        image6={image6}
        image7={image7}
        petal1={IMAGES.petal1}
        petal5={IMAGES.petal5}
      />
    </main >
  );
}