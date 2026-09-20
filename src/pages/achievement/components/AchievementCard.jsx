import { useLangStore } from "../../../store/useLangStore";
import {
  Trophy,
  Medal,
  Award,
  Crown,
  Target,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  CalendarDays,
  X,
} from "lucide-react";
import { useState } from "react";

const AchievementCard = ({ data, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const lang = useLangStore((state) => state.lang);
  const achievementIcons = [Trophy, Medal, Award, Crown, Target, Sparkles];

  const Icon = achievementIcons[icon];

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <article
        onClick={handleOpen}
        className="cursor-pointer px-8  m-auto  lg:max-w-xl flex gap-8 my-8 justify-center items-center hover:shadow-md hover:bg-white
         hover:-translate-y-1 transition-all duration-300 rounded-lg mx-2"
      >
        <div className=" hidden shrink-0 bg-header sm:flex items-center gap-4 px-3 py-2 rounded-lg ">
          <CalendarDays className="text-muted" size={18} />
          <span className="font-bold text-muted">{data.date}</span>
        </div>
        <div className="flex-1 flex items-center justify-between gap-6">
          <div>
            <h2 className="font-bold text-lg md:text-xl">{data.title[lang]}</h2>
            <p className="text-muted text-sm md:text-base">
              {data.description[lang]}
            </p>
          </div>
          <div className="flex">
            <Icon size={18} />

            {lang === "dr" ? (
              <ChevronLeft size={18} />
            ) : (
              <ChevronRight size={18} />
            )}
          </div>
        </div>

        {/* <p>{data.details[lang]}</p> */}
      </article>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
        >
          <article
            onClick={(e) => e.stopPropagation()}
            className="relative bg-background w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-xl p-6"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer absolute top-0 end-0 text-red-900"
            >
              <X size={26} />
            </button>

            <img
              src={data.image}
              alt={data.title[lang]}
              className="w-full max-h-80 object-cover rounded-lg"
            />

            <div className="mt-6">
              <h2 className="font-bold text-xl md:text-2xl">
                {data.title[lang]}
              </h2>

              <p className="text-muted mt-2">{data.description[lang]}</p>

              <p className="mt-6">{data.details[lang]}</p>
            </div>
          </article>
        </div>
      )}
    </section>
  );
};

export default AchievementCard;
