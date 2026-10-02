
import db from "../../../../db.json";
import ActivityCard from "./ActivityCard";
import SectionHeader from "../../../components/common/SectionHeader";
import { useLangStore } from "../../../store/useLangStore";

const RecentActivities = () => {
  const t = useLangStore((state) => state.t);

  const activities = [...db.activities].sort((a, b) => b.id - a.id).slice(0, 2);

  if (!activities.length) return null;

  return (
    <section className="m-auto max-w-7xl px-5 py-10">
      <SectionHeader
        title={t.home.recentActivities}
        to="/activity"
        linkLabel={t.home.viewAll}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </section>
  );
};

export default RecentActivities;
