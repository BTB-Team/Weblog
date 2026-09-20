
import db from "../../../../db.json";
import SectionHeader from "../../../components/common/SectionHeader";
import { useLangStore } from "../../../store/useLangStore";
import { Trophy, Medal, Award, Star } from "lucide-react";

const icons = [Trophy, Medal, Award, Star];

const FeaturedAchievements = () => {
  const t = useLangStore((state) => state.t);
  const lang = useLangStore((state) => state.lang);

  const achievements = db.achievements.slice(0, 4);

  if (!achievements.length) return null;

  return (
    <section className="m-auto max-w-7xl px-5 py-10">
      <SectionHeader
        title={t.home.featuredAchievements}
        to="/achievements"
        linkLabel={t.home.viewAll}
      />

      <ul className="mx-auto flex max-w-3xl flex-col divide-y divide-header">
        {achievements.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <li
              key={item.id}
              className="flex items-center gap-4 py-4 transition-colors hover:bg-header/30"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-header text-accent">
                <Icon size={18} />
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-bold md:text-base">
                  {item.title[lang]}
                </h3>
                <p className="truncate text-xs text-muted md:text-sm">
                  {item.description[lang]}
                </p>
              </div>

              <span className="shrink-0 text-xs font-semibold text-muted">
                {item.date}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FeaturedAchievements;
