import { create } from "zustand";
import drTranslations from "../locales/dr.json";
import enTranslations from "../locales/en.json";

export const useLangStore = create((set) => ({
  lang: "dr",
  t: drTranslations,

  setLang: (newLang) => {
    set({
      lang: newLang,
      t: newLang === "dr" ? drTranslations : enTranslations,
    });

    const htmlElement = document.documentElement;

    if (newLang === "dr") {
      htmlElement.setAttribute("dir", "rtl");
      htmlElement.setAttribute("lang", "fa");
    } else {
      htmlElement.setAttribute("dir", "ltr");
      htmlElement.setAttribute("lang", "en");
    }
  },
}));

// Default language: Dari/Persian → RTL
document.documentElement.setAttribute("dir", "rtl");
document.documentElement.setAttribute("lang", "fa");