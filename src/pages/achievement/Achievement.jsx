import AchievementList from "./components/AchievementList";
import StatAchievement from "./components/StatAchievement";
import CTA from "../../components/common/CTA";
import BooksPublish from "./components/BooksPublish";

const Achievement = () => {
  return (
    <section className="m-auto max-w-7xl">
      <StatAchievement />
      <AchievementList />
      <BooksPublish />
      <CTA />
    </section>
  );
};

export default Achievement;
