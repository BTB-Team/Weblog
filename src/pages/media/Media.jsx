// src/pages/media/Media.jsx
import { useEffect, useMemo, useState } from "react";
import { Play, X, ChevronLeft, ChevronRight, Download, Image as ImageIcon } from "lucide-react";
import mediaData from "./db-media-snippet.json";
import { useLangStore } from "../../store/useLangStore";
import PodcastCta from "./components/PodcastCta";
import heroCamera from "./assets/hero-camera.jpg";

/*
  Data comes from ./db-media-snippet.json (db.json is not used).
  Every file inside ./assets is picked up automatically: just write the
  file name, e.g. "image": "desk-laptop.jpg". Full http(s) URLs also work.
*/
const assetMap = Object.fromEntries(
  Object.entries(
    import.meta.glob("./assets/*.{jpg,jpeg,png,webp,avif}", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  ).map(([path, url]) => [path.split("/").pop(), url]),
);

const imgUrl = (file) => {
  if (!file) return "";
  if (/^https?:\/\//.test(file)) return file;
  return assetMap[file] || `${import.meta.env.BASE_URL}images/${file}`;
};

const loc = (value, lang) => {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[lang] || value.en || value.dr || "";
};

const Badge = ({ icon: Icon, children }) => (
  <span className="absolute bottom-2.5 start-2.5 inline-flex max-w-[calc(100%-1.25rem)] items-center gap-1.5 rounded-lg bg-white/90 px-2.5 py-1 text-[11px] font-medium text-foreground shadow-sm backdrop-blur">
    <Icon size={12} className="shrink-0 text-accent" />
    <span className="truncate">{children}</span>
  </span>
);

const Media = () => {
  const t = useLangStore((state) => state.t);
  const lang = useLangStore((state) => state.lang);
  const isRtl = lang === "dr";

  const [filter, setFilter] = useState("all"); // "all" | "photo" | "video"
  const [activeIndex, setActiveIndex] = useState(null);

  // One list: photos and videos alternate so videos are spread through the grid
  const allItems = useMemo(() => {
    const photos = (mediaData.mediaPhoto || []).map((p) => ({ ...p, type: "photo", cover: p.image }));
    const videos = (mediaData.mediaVideo || []).map((v) => ({
      ...v,
      type: "video",
      cover: v.thumbnail || v.image || null,
    }));

    const merged = [];
    const ratio = Math.max(1, Math.round(photos.length / Math.max(videos.length, 1)));
    let v = 0;
    photos.forEach((p, i) => {
      merged.push(p);
      if ((i + 1) % ratio === 0 && videos[v]) merged.push(videos[v++]);
    });
    while (v < videos.length) merged.push(videos[v++]);
    return merged;
  }, []);

  const items = useMemo(
    () => (filter === "all" ? allItems : allItems.filter((i) => i.type === filter)),
    [allItems, filter],
  );

  const filters = [
    { id: "all", label: t.media.allTab, icon: ImageIcon },
    { id: "photo", label: t.media.photosTab, icon: ImageIcon },
    { id: "video", label: t.media.videosTab, icon: Play },
  ];

  /* ---------- Lightbox ---------- */
  const open = activeIndex !== null;
  const current = open ? items[activeIndex] : null;

  const close = () => setActiveIndex(null);
  const go = (step) =>
    setActiveIndex((i) => (i === null ? i : (i + step + items.length) % items.length));

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(isRtl ? -1 : 1);
      if (e.key === "ArrowLeft") go(isRtl ? 1 : -1);
    };

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, items.length, isRtl]);

  useEffect(() => setActiveIndex(null), [filter]);

  const nf = new Intl.NumberFormat(isRtl ? "fa-AF" : "en");
  const PrevIcon = isRtl ? ChevronRight : ChevronLeft;
  const NextIcon = isRtl ? ChevronLeft : ChevronRight;

  // Hero photo sits on the start side and dissolves into the page background
  const heroMask = `radial-gradient(ellipse at ${isRtl ? "70%" : "30%"} 35%, #000 35%, transparent 75%)`;

  return (
    <main className="m-auto max-w-7xl px-4 pb-32 sm:px-6">
      {/* Hero */}
      <header className="relative isolate mb-10 flex min-h-[230px] flex-col items-center justify-center px-2 pb-6 pt-10 text-center">
        <img
          src={heroCamera}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -top-8 start-0 -z-10 h-[260px] w-auto max-w-none select-none opacity-40 sm:opacity-100 lg:h-[300px]"
          style={{ maskImage: heroMask, WebkitMaskImage: heroMask }}
        />

        <p className="mb-2 text-sm font-medium text-accent">{t.media.eyebrow}</p>
        <h1 className="text-3xl font-bold md:text-5xl">{t.media.title}</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted md:text-base">
          {t.media.subtitle}
        </p>
      </header>

      {/* Filters */}
      <div
        role="tablist"
        aria-label={t.media.title}
        className="mb-10 flex flex-wrap items-center justify-center gap-2"
      >
        {filters.map(({ id, label, icon: Icon }) => {
          const active = filter === id;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(id)}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "border-accent bg-accent text-white shadow-sm"
                  : "border-header bg-card text-muted hover:bg-header/40"
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          );
        })}
      </div>

      {/* Masonry grid */}
      {items.length === 0 ? (
        <p className="py-16 text-center text-muted">{t.media.empty}</p>
      ) : (
        <div className="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
          {items.map((item, index) => {
            const title = loc(item.title, lang);
            const badge = loc(item.category, lang) || loc(item.date, lang);
            const isVideo = item.type === "video";

            return (
              <button
                key={`${item.type}-${item.id}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={title}
                className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-header bg-header/40 text-start shadow-sm transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:mb-4"
              >
                {item.cover ? (
                  <img
                    src={imgUrl(item.cover)}
                    alt={title}
                    loading="lazy"
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="aspect-[3/4] w-full bg-gradient-to-br from-accent/20 to-header" />
                )}

                {isVideo && (
                  <>
                    <span className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/85 text-accent shadow-md transition-transform group-hover:scale-110">
                        <Play size={20} fill="currentColor" className="ms-0.5" />
                      </span>
                    </span>
                    {item.duration && (
                      <span className="absolute bottom-2.5 end-2.5 rounded-md bg-black/50 px-1.5 py-0.5 text-[11px] font-medium text-white">
                        {item.duration}
                      </span>
                    )}
                  </>
                )}

                {badge && <Badge icon={isVideo ? Play : ImageIcon}>{badge}</Badge>}
              </button>
            );
          })}
        </div>
      )}

      <PodcastCta />

      {/* Lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={loc(current.title, lang)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          onClick={close}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex max-h-[70vh] min-h-[240px] items-center justify-center bg-black">
              {current.type === "video" && current.url ? (
                <video
                  key={current.id}
                  src={current.url}
                  poster={current.cover ? imgUrl(current.cover) : undefined}
                  controls
                  autoPlay
                  className="max-h-[70vh] w-full"
                />
              ) : current.cover ? (
                <img
                  src={imgUrl(current.cover)}
                  alt={loc(current.title, lang)}
                  className="max-h-[70vh] w-full object-contain"
                />
              ) : (
                <p className="px-6 py-16 text-center text-sm text-white/70">
                  {t.media.videoSoon}
                </p>
              )}
            </div>

            {current.type === "video" && !current.url && current.cover && (
              <p className="bg-black/60 px-4 py-2 text-center text-xs text-white/80">
                {t.media.videoSoon}
              </p>
            )}

            <button
              type="button"
              onClick={close}
              aria-label={t.media.close}
              className="absolute end-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
            >
              <X size={18} />
            </button>

            {items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label={t.media.previous}
                  className="absolute start-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
                >
                  <PrevIcon size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label={t.media.next}
                  className="absolute end-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
                >
                  <NextIcon size={20} />
                </button>
              </>
            )}

            <div className="flex items-center justify-between gap-4 px-4 py-3 text-white">
              {current.type === "photo" ? (
                <a
                  href={imgUrl(current.cover)}
                  download
                  aria-label={t.media.download}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  <Download size={18} />
                </a>
              ) : (
                <span className="h-9 w-9 shrink-0" />
              )}

              <p className="min-w-0 flex-1 truncate text-center text-sm font-semibold">
                {loc(current.title, lang)}
              </p>

              <span className="shrink-0 text-xs text-white/70">
                {nf.format(activeIndex + 1)} / {nf.format(items.length)}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Media;
