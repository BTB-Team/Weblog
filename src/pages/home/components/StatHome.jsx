import Stat from "../../../components/common/Stat";
import { Trophy, FileText, BookOpen, Activity } from "lucide-react";
import { useLangStore } from "../../../store/useLangStore";

const StatHome = () => {
  const t = useLangStore((st) => st.t);

  const dataStats = [
    {
      icon: <Trophy size={24} />,
      number: t.achievements.numberTen,
      title: t.achievements.stats.awards,
    },
    {
      icon: <BookOpen size={24} />,
      number: t.achievements.numberOne,
      title: t.achievements.stats.publishedWorks,
    },
    {
      icon: <FileText size={24} />,
      number: t.achievements.numberFourHundred,
      title: t.achievements.stats.publishedWritings,
    },
    {
      icon: <Activity size={24} />,
      number: t.achievements.numberThree,
      title: t.achievements.stats.yearsActive,
    },
  ];

  return (
    <div className="bg-header mx-4  my-15 grid max-w-7xl grid-cols-2 gap-y-6 rounded-3xl py-6 shadow-sm md:grid-cols-4 xl:mx-auto">
      {dataStats.map((stat, index) => (
        <div
          key={index}
          className="md:border-e md:border-accent/15 md:last:border-e-0"
        >
          <Stat icon={stat.icon} number={stat.number} title={stat.title} />
        </div>
      ))}
    </div>
  );
};

export default StatHome;
