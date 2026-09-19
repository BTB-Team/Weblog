// src/pages/home/components/LatestPosts.jsx
// SECTION 4 — Latest Posts (integrates the existing PostCard)
import db from "../../../../db.json";
import PostCard from "../../../components/PostCard";
import SectionHeader from "../../../components/common/SectionHeader";
import { useLangStore } from "../../../store/useLangStore";

const LatestPosts = () => {
  const t = useLangStore((state) => state.t);

  // newest 3 writings (db has no date field, so we take the last ids)
  const posts = [...db.writings].sort((a, b) => b.id - a.id).slice(0, 3);

  if (!posts.length) return null;

  return (
    <section className="m-auto max-w-7xl px-5 py-10">
      <SectionHeader
        title={t.home.latestPosts}
        to="/writings"
        linkLabel={t.home.viewAll}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
