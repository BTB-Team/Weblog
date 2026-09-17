import BranchDecoration from "./BranchDecoration";
import image_01 from "../../../assets/images/book.webp";
import { Link } from "react-router-dom";
import { useLangStore } from "../../../store/useLangStore";

const HeroSection = () => {
  const t = useLangStore((state) => state.t);
  return (
    <section className="mx-8 my-8 m-auto max-w-7xl text-text flex flex-col items-center justify-center md:flex-row md:gap-5">
      <img
        className="md:order-2  w-[250px] h-[250px] md:w-[200px] md:h-[200px] rounded-full border-10"
        src={image_01}
        alt="Mariam Amiri"
      />
      <div className="md:order-1  py-5 text-center md:text-start">
        <h1 className="text-4xl font-bold ">{t.hero.name}</h1>
        <p className="py-5 px-4 sm:text-xl  md:px-0">{t.hero.description}</p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link to="/writings" className=" btn-primary ">
            {t.hero.buttons.writings}
          </Link>

          <Link to="/about" className="btn-secondary">
            {t.hero.buttons.about}
          </Link>
        </div>
      </div>

      <div className="hidden lg:block w-5xl "></div>

      {/* <img
        className="hidden absolute -z-8 start-0 top-3  lg:block  w-1/3 h-1/2 "
        src={image_01}
        alt="Mariam Amiri"
      /> */}
      <img
        src={image_01}
        alt="Mariam Amiri"
        className="
    hidden
    lg:block
    absolute
    start-0
    -top-1
    -z-8
    h-1/2
    w-[650px]
    object-cover
    opacity-80

    ltr:[mask-image:linear-gradient(to_left,transparent_0%,transparent_18%,black_58%,black_100%)]
    ltr:[-webkit-mask-image:linear-gradient(to_left,transparent_0%,transparent_18%,black_58%,black_100%)]

    rtl:[mask-image:linear-gradient(to_right,transparent_0%,transparent_18%,black_58%,black_100%)]
    rtl:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,transparent_18%,black_58%,black_100%)]
  "
      />
    </section>
  );
};

export default HeroSection;
