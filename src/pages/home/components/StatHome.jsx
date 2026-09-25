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
    <div className="bg-header m-auto max-w-7xl grid grid-cols-2 md:grid-cols-4  rounded-xl gap-5 mx-4  my-4 py-5 ">
      {dataStats.map((stat, index) => (
        <Stat
          key={index}
          icon={stat.icon}
          number={stat.number}
          title={stat.title}
        />
      ))}
    </div>
  );
};

export default StatHome;
