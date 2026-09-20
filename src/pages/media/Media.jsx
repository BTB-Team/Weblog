// src/pages/media/Media.jsx
import { useState } from "react";
import { Search, Play } from "lucide-react";
import db from "../../../db.json";
import { useLangStore } from "../../store/useLangStore";

const Media = () => {
  const t = useLangStore((state) => state.t);
  const lang = useLangStore((state) => state.lang);

  const [tab, setTab] = useState("photo"); // "photo" | "video"
  const [query, setQuery] = useState("");

  const photos = db.mediaPhoto || [];
  const videos = db.mediaVideo || [];

  const q = query.trim();
  const filteredPhotos = photos.filter((p) => p.title[lang].includes(q));
  const filteredVideos = videos.filter((v) => v.title[lang].includes(q));

  const items = tab === "photo" ? filteredPhotos : filteredVideos;

  return (
    <main className="m-auto max-w-7xl px-5 py-10">
      {/* Hero */}
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold text-accent">
          {t.media.breadcrumb}
        </p>
        <h1 className="text-3xl font-bold md:text-4xl">{t.media.title}</h1>
        <p className="mt-3 text-muted">{t.media.subtitle}</p>
      </div>

      {/* Search */}
      <div className="relative mx-auto mb-8 max-w-xl">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder={t.media.searchPlaceholder}
          className="w-full rounded-full border border-header bg-card px-5 py-3 pe-12
                     outline-none transition-shadow focus:ring-2 focus:ring-accent/40"
        />
        <Search
          size={18}
          className="absolute end-4 top-1/2 -translate-y-1/2 text-muted"
        />
      </div>

      {/* Tabs */}
      <div className="mx-auto mb-10 flex max-w-md rounded-full border border-header p-1">
        <button
          type="button"
          onClick={() => setTab("video")}
          className={`flex-1 rounded-full py-2 text-sm font-semibold transition-colors ${
            tab === "video" ? "bg-accent text-white" : "text-muted"
          }`}
        >
          {t.media.videosTab}
        </button>

        <button
          type="button"
          onClick={() => setTab("photo")}
          className={`flex-1 rounded-full py-2 text-sm font-semibold transition-colors ${
            tab === "photo" ? "bg-accent text-white" : "text-muted"
          }`}
        >
          {t.media.photosTab}
        </button>
      </div>

      {/* Section heading */}
      <h2 className="mb-1 text-xl font-bold md:text-2xl">
        {tab === "photo" ? t.media.photosHeading : t.media.videosHeading}
      </h2>
      <p className="mb-6 text-sm text-muted">{t.media.gridSubtitle}</p>

      {/* Grid — 4-column square, responsive */}
      {items.length === 0 ? (
        <p className="py-10 text-center text-muted">{t.media.empty}</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {tab === "photo"
            ? filteredPhotos.map((photo) => (
                <figure
                  key={photo.id}
                  className="overflow-hidden rounded-xl border border-header"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/${photo.image}`}
                    alt={photo.title[lang]}
                    className="aspect-square w-full object-cover"
                  />
                </figure>
              ))
            : filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="relative flex aspect-square items-center justify-center
                             overflow-hidden rounded-xl border border-header bg-header/40"
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full
                               bg-white/85 text-accent shadow-md"
                  >
                    <Play size={20} fill="currentColor" />
                  </span>
                </div>
              ))}
        </div>
      )}
    </main>
  );
};

export default Media;
