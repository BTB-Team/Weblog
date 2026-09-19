// src/pages/home/components/FeaturedAchievements.jsx
// SECTION 7 — Featured Achievements
import db from "../../../../db.json";
import SectionHeader from "../../../components/common/SectionHeader";
import { useLangStore } from "../../../store/useLangStore";
import { Trophy, Medal, Award, Star } from "lucide-react";

const icons = [Trophy, Medal, Award, Star];

const FeaturedAchievements = () => {
  const t = useLangStore((state) => state.t);
  const lang = useLangStore((state) => state.lang);

  const achievements = db.achievements.slice(0, 3);

  if (!achievements.length) return null;

  return (
    <section className="m-auto max-w-7xl px-5 py-10">
      <SectionHeader
        title={t.home.featuredAchievements}
        to="/achievements"
        linkLabel={t.home.viewAll}
      />

      <div className="grid gap-6 md:grid-cols-3">
        {achievements.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <article
              key={item.id}
              className="flex flex-col items-center gap-3 rounded-2xl border border-header
                         bg-card p-6 text-center shadow-sm transition-all duration-300
                         hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-header text-accent">
                <Icon size={26} />
              </span>

              <h3 className="text-base font-bold leading-snug">
                {item.title[lang]}
              </h3>

              <p className="line-clamp-2 text-sm text-muted">
                {item.description[lang]}
              </p>

              <span className="mt-auto rounded-full bg-header/60 px-3 py-1 text-xs font-semibold text-muted">
                {item.date}
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedAchievements;
