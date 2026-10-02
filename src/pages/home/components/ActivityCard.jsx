// src/pages/home/components/ActivityCard.jsx
import { CalendarDays, MapPin } from "lucide-react";
import { useLangStore } from "../../../store/useLangStore";

const ActivityCard = ({ activity }) => {
  const lang = useLangStore((state) => state.lang);

  return (
    <article
      className="group flex flex-col overflow-hidden rounded-2xl border border-header bg-card
                 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md
                 sm:flex-row"
    >
      <div className="h-44 w-full shrink-0 overflow-hidden sm:h-auto sm:w-44">
        <img
          src={`${import.meta.env.BASE_URL}${activity.image}`}
          alt={activity.title[lang]}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-base font-bold leading-snug md:text-lg">
          {activity.title[lang]}
        </h3>

        <p className="line-clamp-3 text-sm leading-6 text-muted">
          {activity.description[lang]}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={15} />
            {activity.date[lang]}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <MapPin size={15} />
            {activity.location[lang]}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ActivityCard;
