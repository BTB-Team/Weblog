import { useLangStore } from "../../../store/useLangStore";
import AchievementCard from "./AchievementCard";
import { useState } from "react";
import db from "../../../../db.json";
import bookImage from "../../../assets/images/book.webp";

const AchievementList = () => {
  // const [achievements, setAchievements] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLocked, setIsLocked] = useState(false);

  const t = useLangStore((state) => state.t);

  const achievements = db.achievements;

  const showMore = () => {
    if (isLocked) return;

    if (visibleCount < achievements.length) {
      const nextCount = Math.min(visibleCount + 5, achievements.length);

      setVisibleCount(nextCount);

      if (nextCount >= achievements.length) {
        setIsLocked(true);

        setTimeout(() => {
          setIsLocked(false);
        }, 1000);
      }
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
      <div className="px-4 border-b-1 m-auto max-w-6xl">
        <h1 className="text-2xl md:text-3xl font-bold py-4">
          {t.achievements.achievementsTitle}
        </h1>

        <p className="text-xs md:text-base text-muted">
          {t.achievements.achievementsSubtitle}
        </p>
      </div>
      <div>
        <div className="m-auto max-w-7xl flex flex-col lg:flex-row lg:items-start">
          <div className="lg:order-2 py-10 basis-[50%] px-5 self-center lg:self-start">
            <img
              className="w-xl rounded-3xl md:w-2xl"
              src={bookImage}
              alt="bookImage"
            />
          </div>

          <div>
            {visibleAchievements.map((achievement, index) => {
              const iconIndex = index % 6;

              return (
                <AchievementCard
                  key={achievement.id}
                  data={achievement}
                  icon={iconIndex}
                />
              );
            })}

            {achievements.length > 5 && (
              <div className="flex justify-center my-8">
                {isShowingAll ? (
                  <button
                    type="button"
                    onClick={showLess}
                    disabled={isLocked}
                    className="btn-outline"
                  >
                    {t.achievements.showLess}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={showMore}
                    disabled={isLocked}
                    className="btn-outline"
                  >
                    {t.achievements.showMore}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementList;
