import React from "react";

import { useLangStore } from "../../store/useLangStore";

import dr from "../../locales/dr.json";
import en from "../../locales/en.json";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { lang } = useLangStore();

  const isEnglish = lang === "en";
  const t = isEnglish ? en : dr;
  const direction = isEnglish ? "ltr" : "rtl";

  return (
    <section className="mx-auto max-w-6xl px-5 pb-7 pt-8 sm:px-8">

      <div
        dir="ltr"
        className="relative flex items-center justify-between gap-5 border-t border-[#EAD5C3]/50 pt-6 text-[10px] text-[#9A877A]"
      >

        <div
          dir={direction}
          className="flex shrink-0 items-center justify-start gap-2 text-left"
        >
          <span>
            {t.contact.footer.author}
          </span>

          <span className="text-[#A36F6F]">
            ♡
          </span>
        </div>

        <nav
          dir={direction}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="/"
            className="transition-colors hover:text-[#A36F6F]"
          >
            {t.contact.footer.home}
          </a>

          <span>/</span>

          <a
            href="/about"
            className="transition-colors hover:text-[#A36F6F]"
          >
            {t.contact.footer.about}
          </a>

          <span>/</span>

          <NavLink
            to="/writings"
            className="transition-colors hover:text-[#A36F6F]"
          >
            {t.contact.footer.writings}
          </NavLink>
          <span>/</span>

          <NavLink
            to="/podcast"
            className="transition-colors hover:text-[#A36F6F]"
          >
            {t.contact.footer.podcasts}
          </NavLink>

          <span>/</span>

          <a
            href="/contact"
            className="text-[#A36F6F]"
          >
            {t.contact.footer.contact}
          </a>

          <span>/</span>

          <a
            href="/donate"
            className="transition-colors hover:text-[#A36F6F]"
          >
            {t.contact.footer.donate}
          </a>
        </nav>

        <div
          dir={direction}
          className="flex shrink-0 items-center justify-end gap-2 text-right"
        >
          <span>
            {t.contact.footer.quote}
          </span>

          <span className="text-[#A36F6F]">
            ♡
          </span>
        </div>

      </div>

    </section>
  );
};

export default Footer;