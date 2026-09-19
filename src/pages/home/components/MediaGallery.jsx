// src/pages/home/components/MediaGallery.jsx
// SECTION 8 — Media Preview Gallery (photos + videos)
import db from "../../../../db.json";
import SectionHeader from "../../../components/common/SectionHeader";
import { useLangStore } from "../../../store/useLangStore";
import { Play, ImageIcon } from "lucide-react";

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

  // photos first, then videos — max 6 previews
  const media = [...photos, ...videos].slice(0, 6);

  if (!media.length) return null;

  return (
    <section className="m-auto max-w-7xl px-5 py-10">
      <SectionHeader
        title={t.home.gallery}
        to="/media"
        linkLabel={t.home.viewAll}
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {media.map((item) => (
          <figure
            key={item.key}
            className="group relative aspect-square overflow-hidden rounded-xl border border-header bg-header/40"
          >
            {item.image ? (
              <img
                src={`${import.meta.env.BASE_URL}images/${item.image}`}
                alt={item.title[lang]}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-muted">
                <ImageIcon size={26} />
              </div>
            )}

            {/* dark overlay + caption */}
            <figcaption
              className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t
                         from-black/70 via-black/10 to-transparent p-2 text-[11px]
                         text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <span className="font-semibold leading-tight">
                {item.title[lang]}
              </span>
              <span className="opacity-80">{item.date[lang]}</span>
            </figcaption>

            {item.kind === "video" && (
              <span
                className="absolute inset-0 m-auto flex h-10 w-10 items-center justify-center
                           rounded-full bg-white/85 text-accent shadow-md"
              >
                <Play size={18} fill="currentColor" />
              </span>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
};

export default MediaGallery;
