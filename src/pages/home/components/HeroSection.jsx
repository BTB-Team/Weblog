import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLangStore } from "../../../store/useLangStore";
import profileImage from "../../../assets/images/Lastline.webp";
import heroFa from "../../../assets/images/hero-bg-fa.png";
import heroEn from "../../../assets/images/hero-bg-en.png";
import leaf from "../../../assets/images/leaf-branch.svg";

const HeroSection = () => {
  const t = useLangStore((state) => state.t);
  // NOTE: change "lang" if your store uses another name (e.g. "language")
  const lang = useLangStore((state) => state.lang ?? state.language);
  const heroBg = lang === "en" ? heroEn : heroFa;

  return (
    <section className="relative w-full overflow-hidden rounded-b-3xl">
      {/* Background photo: Persian or English version */}
      <div
        className="pointer-events-none absolute inset-y-0 start-0 h-full w-full opacity-30 lg:aspect-[2/3] lg:w-auto lg:opacity-100 rtl:[mask-image:linear-gradient(to_left,black_85%,transparent)] ltr:[mask-image:linear-gradient(to_right,black_85%,transparent)]"
        aria-hidden="true"
      >
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover lg:object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-12 sm:px-6 lg:min-h-[520px] lg:flex-row lg:justify-between lg:gap-10 lg:px-8 lg:py-14">
        {/* Spacer keeps the text off the photo on desktop */}
        <div className="hidden lg:block lg:w-1/4" />

        {/* Content */}
        <div className="order-2 flex w-full max-w-2xl flex-1 flex-col items-center text-center lg:order-none lg:items-start lg:text-start">
          <span className="mb-1 text-sm font-medium text-muted sm:text-base">
            {t.hero.hello}
          </span>

          <h1 className="text-3xl font-bold leading-tight text-accent sm:text-4xl md:text-5xl">
            {t.hero.name}
          </h1>

          <h2 className="mt-3 text-lg font-semibold text-text sm:text-xl md:text-2xl">
            {t.hero.tagline}
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
            {t.hero.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link
              to="/writings"
              className="btn-primary inline-flex items-center gap-2"
            >
              {t.hero.buttons.writings}
              <ArrowRight size={16} className="rtl:rotate-180" />
            </Link>

            <Link to="/about" className="btn-secondary">
              {t.hero.buttons.about}
            </Link>
          </div>
        </div>

        {/* Circular profile image with leaf branch */}
        <div className="order-1 flex items-center justify-center lg:order-none lg:w-1/4">
          <div className="relative h-[190px] w-[190px] sm:h-[220px] sm:w-[220px] lg:h-[240px] lg:w-[240px]">
            <img
              src={leaf}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 h-auto w-36 max-w-none -translate-y-1/2 rtl:-left-4 ltr:-right-4 ltr:-scale-x-100"
            />
            <div className="absolute inset-3 rounded-full bg-accent/10 blur-2xl" />
            <img
              src={profileImage}
              alt={t.hero.name}
              className="relative z-10 h-full w-full rounded-full border-4 border-white object-cover object-[60%_center] shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
