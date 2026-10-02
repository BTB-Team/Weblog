import deskImage from "../../../assets/images/desk.webp";
import { useLangStore } from "../../../store/useLangStore";
import { Link } from "react-router-dom";

const AboutHome = () => {
  const t = useLangStore((state) => state.t);
  return (
    <div
      className="m-auto max-w-7xl   flex flex-col justify-between lg:flex-row 

    gap-10 px-6 pb-9 "
    >
      {/* text div */}
      <div className=" flex-1 lg:ps-15">
        <h2 className="relative text-3xl font-bold lg:before:content[''] lg:before:w-15 lg:before:h-1 lg:before:bg-header lg:before:absolute lg:before:bottom-3 lg:before:-start-16 lg:before:rounded-lg">
          {t.home.homeAbout.aboutMe}
        </h2>

        <p className="leading-[1.75] text-justify text-xl py-3 ">
          {t.home.homeAbout.description}
        </p>
        <Link to="/about" className="btn-secondary">
          {t.hero.buttons.about}
        </Link>
      </div>
      {/* image div */}
      <div className="flex-1 flex justify-end">
        <img
          className="rounded-xl mx-auto w-3xl h-[300px] lg:w-full"
          src={deskImage}
          alt="Reading Pictures"
        />
      </div>
    </div>
  );
};

export default AboutHome;
