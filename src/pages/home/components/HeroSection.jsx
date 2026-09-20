import { useLangStore } from "../../../store/useLangStore";
import { Link } from "react-router-dom";
import mariamImage from "../../../assets/images/desk.webp";
import designImage from "../../../assets/images/ctaImage.webp";

const HeroSection = () => {
  const t = useLangStore((state) => state.t);
  const lang = useLangStore((state) => state.lang);

  const isRTL = lang === "dr";

  return (
    <section className="w-full overflow-hidden">
      <div
        className={`
          mx-auto
          flex
          min-h-[500px]
          max-w-7xl
          flex-col
          items-center
          lg:flex-row
          lg:items-stretch
          ${isRTL ? "lg:flex-row" : "lg:flex-row"}
        `}
      >
        {/* =========================================
            1. MARIAM IMAGE
        ========================================== */}
        <div
          className={`
            order-1
            flex
            w-full
            items-center
            justify-center
            py-10
            sm:py-12
            lg:w-[30%]
            lg:py-0
            ${isRTL ? "lg:order-1" : "lg:order-3"}
          `}
        >
          <div
            className="
              relative
              flex
              h-[240px]
              w-[240px]
              items-center
              justify-center
              sm:h-[280px]
              sm:w-[280px]
            "
          >
            {/* Background effect */}
            <div
              className="
                absolute
                inset-4
                rounded-full
                bg-accent/10
                blur-2xl
              "
            />

            {/* Mariam image */}
            <div
              className="
                relative
                z-10
                h-[220px]
                w-[220px]
                overflow-hidden
                rounded-full
                border-8
                border-white
                shadow-xl
                sm:h-[260px]
                sm:w-[260px]
              "
            >
              <img
                src={mariamImage}
                alt={t.hero.name}
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>
          </div>
        </div>

        {/* =========================================
            2. TEXT CONTENT
        ========================================== */}
        <div
          className={`
            order-2
            flex
            w-full
            flex-col
            items-center
            justify-center
            px-4
            py-8
            text-center
            sm:px-6
            lg:w-[40%]
            lg:px-8
            lg:py-0
            ${isRTL ? "lg:order-2" : "lg:order-2"}
          `}
        >
          <span
            className="
              mb-2
              text-sm
              font-medium
              text-muted
              sm:text-base
            "
          >
            {t.hero.hello}
          </span>

          <h1
            className="
              text-3xl
              font-bold
              leading-tight
              text-text
              sm:text-4xl
              lg:text-5xl
            "
          >
            {t.hero.name}
          </h1>

          <p
            className="
              mt-5
              max-w-lg
              text-sm
              leading-7
              text-muted
              sm:text-base
              sm:leading-8
            "
          >
            {t.hero.description}
          </p>

          <div
            className="
              mt-7
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
            "
          >
            <Link to="/writings" className="btn-primary">
              {t.hero.buttons.writings}
            </Link>

            <Link to="/about" className="btn-secondary">
              {t.hero.buttons.about}
            </Link>
          </div>
        </div>

        {/* =========================================
            3. DESIGN IMAGE
        ========================================== */}
        <div
          className={`
            relative
            order-3
            hidden
            min-h-[500px]
            w-full
            overflow-hidden
            lg:block
            lg:w-[30%]
            ${isRTL ? "lg:order-3" : "lg:order-1"}
          `}
        >
          {/* Main design image */}
          <img
            src={designImage}
            alt=""
            aria-hidden="true"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* Main soft overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-white/5
              via-transparent
              to-background/30
            "
          />

          {/* Side fade */}
          <div
            className={`
              absolute
              inset-y-0
              w-24
              from-background
              to-transparent
              ${isRTL ? "start-0 bg-gradient-to-r" : "end-0 bg-gradient-to-l"}
            `}
          />

          {/* Bottom fade */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-24
              bg-gradient-to-t
              from-background
              to-transparent
            "
          />

          {/* Soft glow */}
          <div
            className="
              absolute
              -end-10
              top-1/4
              h-40
              w-40
              rounded-full
              bg-accent/10
              blur-3xl
            "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
