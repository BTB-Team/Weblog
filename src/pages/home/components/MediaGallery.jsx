import db from "../../../../db.json";
import SectionHeader from "../../../components/common/SectionHeader";
import { useLangStore } from "../../../store/useLangStore";

const MediaGallery = () => {
  const t = useLangStore((state) => state.t);
  const lang = useLangStore((state) => state.lang);

  // Get photos from db.json
  const photos = (db.mediaPhoto || []).map((item) => ({
    ...item,
    key: `photo-${item.id}`,
  }));

  if (!photos.length) return null;

  // Three copies create a seamless infinite loop
  const track = [...photos, ...photos, ...photos];

  return (
    <section className="m-auto max-w-7xl py-10">
      {/* Section Header */}
      <div className="px-5">
        <SectionHeader
          title={t.home.gallery}
          to="/media"
          linkLabel={t.home.viewAll}
        />
      </div>

      {/* Gallery Container — forced LTR so the marquee always sweeps
          one direction, regardless of page RTL layout */}
      <div className="relative overflow-hidden" dir="ltr">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />

        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

        {/* Infinite Sliding Track */}
        <div className="marquee-track flex gap-4" dir="ltr">
          {track.map((item, index) => (
            <figure
              key={`${item.key}-${index}`}
              className="relative h-40 w-40 shrink-0 overflow-hidden rounded-xl border border-header bg-header/40 md:h-48 md:w-48"
            >
              {item.image ? (
                <img
                  src={`${import.meta.env.BASE_URL}images/${item.image}`}
                  alt={item.title?.[lang] || ""}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              ) : (
                <div className="h-full w-full bg-header/60" />
              )}
            </figure>
          ))}
        </div>
      </div>

      {/* Marquee animation styles */}
      <style>{`
        .marquee-track {
          width: max-content;
          animation: marquee-scroll 30s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.3333%);
          }
        }
      `}</style>
    </section>
  );
};

export default MediaGallery;