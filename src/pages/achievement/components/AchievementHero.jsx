import heroImage from "../../../assets/images/ctaImage.webp";
import { useLangStore } from "../../../store/useLangStore";

const AchievementHero = () => {
  const t = useLangStore((state) => state.t);
  const lang = useLangStore((state) => state.lang);

  const isRTL = lang === "dr";

  return (
    <section className="w-full bg-background ">
      <div
        className="
          mx-auto flex min-h-[420px] w-full max-w-[1440px] items-center  overflow-hidden
        "
      >
        {/* Image */}
        <div
          className={`
            h-[420px]  relative  hidden  w-1/2 shrink-0   lg:block
            ${isRTL ? "order-1" : "order-2"}
          `}
        >
          <img
            src={heroImage}
            alt="Image"
            className="
              absolute inset-0 h-full w-full object-cover "
          />

          {/* Soft fade / mask */}
          <div
            className="
              absolute  inset-0  pointer-events-none bg-gradient-to-l from-transparent via-transparent to-background
            "
          />

          {/* Bottom soft fade */}
          <div
            className="
              absolute  inset-x-0  bottom-0  h-24 bg-gradient-to-t  from-background to-transparent       
            "
          />
        </div>

        {/* Content */}
        <div
          className={`
            flex  min-w-0 flex-1  flex-col  items-center justify-center  px-6  py-16  text-center lg:px-10
            ${
              isRTL
                ? "order-2 lg:items-start lg:text-right"
                : "order-1 lg:items-end lg:text-left"
            }
          `}
        >
          {/* Small label */}
          <div className="mb-5 flex items-center gap-4 self-center">
            <span className="h-px w-10 bg-accent" />

            <span className="text-sm font-medium text-accent">
              {t.heroSectionAchievements.label}
            </span>

            <span className="h-px w-10 bg-accent" />
          </div>

          {/* Title */}
          <h1
            className="
              max-w-2xl text-3xl font-bold  leading-tight  text-text sm:text-4xl  lg:text-5xl
            "
          >
            {t.heroSectionAchievements.title}
          </h1>

          {/* Description */}
          <p
            className="
              mt-6  max-w-2xl text-base leading-8  text-muted sm:text-lg
            "
          >
            {t.heroSectionAchievements.description}
          </p>

          {/* Decorative element */}
          <div className="mt-8 flex items-center justify-center self-center gap-4">
            <span className="h-px w-14 bg-accent/40" />

            <span className="text-lg text-accent">✦</span>

            <span className="h-px w-14 bg-accent/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementHero;
