import { Link } from "react-router-dom";
import { useLangStore } from "../../../store/useLangStore";
import mariamImage from "../../../assets/images/MariamAmiri.png";

const HeroSection = () => {
  const t = useLangStore((state) => state.t);

  return (
    <section className="w-full overflow-hidden">
      <div className="mx-auto flex min-h-[500px] max-w-7xl flex-col items-center justify-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[600px] lg:flex-row lg:gap-12 lg:px-8 lg:py-16">
        {/* Image */}
        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="relative h-[230px] w-[230px] sm:h-[290px] sm:w-[290px] md:h-[330px] md:w-[330px] lg:h-[400px] lg:w-[400px] xl:h-[440px] xl:w-[440px]">
            <div className="absolute inset-4 rounded-full bg-accent/10 blur-3xl" />

            <img
              src={mariamImage}
              alt={t.hero.name}
              className="relative z-10 h-full w-full rounded-2xl border-8 border-white object-cover shadow-xl"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex w-full max-w-2xl flex-col items-center justify-center text-center lg:w-1/2 lg:max-w-xl lg:items-start lg:text-start">
          <span className="mb-2 text-sm font-medium text-muted sm:text-base">
            {t.hero.hello}
          </span>

          <h1 className="text-3xl font-bold leading-tight text-text sm:text-4xl md:text-5xl xl:text-6xl">
            {t.hero.name}
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8 md:text-lg md:leading-9">
            {t.hero.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8 lg:justify-start">
            <Link to="/writings" className="btn-primary">
              {t.hero.buttons.writings}
            </Link>

            <Link to="/about" className="btn-secondary">
              {t.hero.buttons.about}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
