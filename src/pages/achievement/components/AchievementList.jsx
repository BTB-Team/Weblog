import { useState } from "react";
import { useLangStore } from "../../../store/useLangStore";
import AchievementCard from "./AchievementCard";
import db from "../../../../db.json";
import bookImage from "../../../assets/images/book.webp";

const AchievementList = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLocked, setIsLocked] = useState(false);

  const t = useLangStore((state) => state.t);
  const achievements = db.achievements;

  const showMore = () => {
    if (isLocked) return;

    const nextCount = Math.min(visibleCount + 5, achievements.length);

    setVisibleCount(nextCount);

    if (nextCount >= achievements.length) {
      setIsLocked(true);

      setTimeout(() => {
        setIsLocked(false);
      }, 1000);
    }
  };

  const showLess = () => {
    if (isLocked) return;

    setVisibleCount(5);
  };

  const visibleAchievements = achievements.slice(0, visibleCount);
  const isShowingAll = visibleCount >= achievements.length;

  return (
    <div>
      <div className="m-auto max-w-6xl border-b px-4">
        <h1 className="py-4 text-2xl font-bold md:text-3xl">
          {t.achievements.achievementsTitle}
        </h1>

        <p className="text-xs text-muted md:text-base">
          {t.achievements.achievementsSubtitle}
        </p>
      </div>

      <div className="m-auto flex max-w-7xl flex-col lg:flex-row lg:items-start">
        <div className="self-center px-5 py-10 basis-[50%] lg:order-2 lg:self-start">
          <img
            className="w-xl rounded-3xl md:w-2xl"
            src={bookImage}
            alt="Book"
          />
        </div>

        <div>
          {visibleAchievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              data={achievement}
              icon={index % 6}
            />
          ))}

          {achievements.length > 5 && (
            <div className="my-8 flex justify-center">
              <button
                type="button"
                onClick={isShowingAll ? showLess : showMore}
                disabled={isLocked}
                className="btn-outline"
              >
                {isShowingAll
                  ? t.achievements.showLess
                  : t.achievements.showMore}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementList;
