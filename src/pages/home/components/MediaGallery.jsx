// src/pages/home/components/MediaGallery.jsx
// SECTION 8 — Media Preview Gallery
// Task spec: "4-column square responsive grid"
import db from "../../../../db.json";
import SectionHeader from "../../../components/common/SectionHeader";
import { useLangStore } from "../../../store/useLangStore";
import { Play } from "lucide-react";

const MediaGallery = () => {
  const t = useLangStore((state) => state.t);
  const lang = useLangStore((state) => state.lang);

  const photos = (db.mediaPhoto || []).map((item) => ({
    ...item,
    kind: "photo",
    key: `photo-${item.id}`,
  }));

  const videos = (db.mediaVideo || []).map((item) => ({
    ...item,
    kind: "video",
    key: `video-${item.id}`,
  }));

  // photos first, then videos — max 4 previews to fill exactly one row of the grid
  const media = [...photos, ...videos].slice(0, 4);

  if (!media.length) return null;

  return (
    <section className="m-auto max-w-7xl px-5 py-10">
      <SectionHeader
        title={t.home.gallery}
        to="/media"
        linkLabel={t.home.viewAll}
      />

      {/* 4-column square responsive grid: 2 cols on mobile, 4 from md up */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {media.map((item) => (
          <figure
            key={item.key}
            className="relative aspect-square overflow-hidden rounded-xl border border-header bg-header/40"
          >
            {item.image ? (
              <img
                src={`${import.meta.env.BASE_URL}images/${item.image}`}
                alt={item.title[lang]}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-header/60" />
            )}

            {item.kind === "video" && (
              <span
                className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center
                           rounded-full bg-white/85 text-accent shadow-md"
              >
                <Play size={20} fill="currentColor" />
              </span>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
};

export default MediaGallery;
