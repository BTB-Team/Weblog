import { useLangStore } from "../../store/useLangStore";

const PlayIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M8 5.5v13l10-6.5-10-6.5Z" />
  </svg>
);

const PauseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="currentColor"
    aria-hidden="true"
  >
    <rect x="7" y="5" width="3.5" height="14" rx="1" />
    <rect x="13.5" y="5" width="3.5" height="14" rx="1" />
  </svg>
);

const getLocalizedValue = (value, lang) => {
  if (!value) return "";

  if (typeof value === "string") {
    return value;
  }

  return value[lang] || value.en || value.dr || "";
};

const PodcastCard = ({ podcast, onPlay, isCurrent, isPlaying, isLoading }) => {
  const lang = useLangStore((state) => state.lang);
  const t = useLangStore((state) => state.t);

  const title = getLocalizedValue(podcast.title, lang);
  const guest = getLocalizedValue(podcast.guest, lang);
  const description = getLocalizedValue(podcast.description, lang);

  return (
    <article className="group overflow-hidden rounded-[22px] border border-[#eee4dd] bg-white shadow-[0_3px_15px_rgba(76,48,44,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(76,48,44,0.09)]">
      <div className="grid min-h-[230px] sm:grid-cols-[190px_minmax(0,1fr)]">
        {/* Image */}
        <div className="relative min-h-[220px] overflow-hidden bg-[#ead8c5] sm:min-h-[230px]">
          {podcast.cover ? (
            <img
              src={podcast.cover}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-6xl text-[#805154]">♫</span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

          {/* Wave */}
          <div
            className="pointer-events-none absolute inset-x-4 bottom-5 flex h-8 items-center justify-center gap-[2px]"
            aria-hidden="true"
          >
            {Array.from({ length: 30 }).map((_, index) => (
              <span
                key={index}
                className="w-[2px] rounded-full bg-white/80"
                style={{
                  height: `${6 + ((index * 13) % 22)}px`,
                }}
              />
            ))}
          </div>

          {/* Play */}
          <button
            type="button"
            onClick={() => onPlay(podcast)}
            aria-label={
              isCurrent && isPlaying ? t.podcast.pause : t.podcast.play
            }
            className="absolute end-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#a96868] text-white shadow-lg transition hover:scale-105 hover:bg-[#92585c] focus:outline-none focus:ring-2 focus:ring-white"
          >
            {isLoading && isCurrent ? (
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : isCurrent && isPlaying ? (
              <PauseIcon />
            ) : (
              <PlayIcon />
            )}
          </button>
        </div>

        {/* Content */}
        <div className="flex min-w-0 flex-col justify-center p-5 sm:p-6">
          {/* Badge */}
          <div className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#f5e4dc] px-5 py-1 text-xs font-medium text-[#a36365]">
            <span>{podcast.badge}</span>
          </div>

          <h2 className="line-clamp-2 text-xl font-bold leading-7 text-[#643f42]">
            {title}
          </h2>

          {guest && (
            <p className="mt-2 text-sm text-[#8b716b]">
              {t.podcast.guest}:{" "}
              <span className="font-medium text-[#6c514d]">{guest}</span>
            </p>
          )}

          {description && (
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#97847d]">
              {description}
            </p>
          )}

          {/* Duration + Listen */}
          <div className="mt-5 flex items-center justify-between pt-4">
            <div className="flex items-center gap-2 text-xs text-[#917c75]">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v4l2.5 2" />
              </svg>

              <span>{podcast.duration}</span>
            </div>

            <button
              type="button"
              onClick={() => onPlay(podcast)}
              className="flex items-center gap-2 text-sm font-semibold text-[#a36365] transition hover:text-[#814d51]"
            >
              {isCurrent && isPlaying ? t.podcast.pause : t.podcast.listen}

              <span>{isCurrent && isPlaying ? "Ⅱ" : "▶"}</span>
            </button>
          </div>

          {!podcast.audioUrl && (
            <p className="mt-3 text-xs leading-5 text-[#a36365]">
              {t.podcast.audioComingSoon}
            </p>
          )}

          {/* 4 Options */}
          <div className="mt-4 flex items-center justify-between pt-3 text-xs text-[#917c75]">
            {/* Date + Views */}
            <div className="flex items-center gap-5">
              {/* Date */}
              <div className="flex items-center gap-1.5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <rect x="4" y="5" width="16" height="15" rx="2" />
                  <path d="M8 3v4M16 3v4M4 9h16" />
                </svg>

                <span>{podcast.date || "—"}</span>
              </div>

              {/* Views */}
              <div className="flex items-center gap-1.5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M3 12s3.5-5 9-5 9 5 9 5-3.5 5-9 5-9-5-9-5Z" />
                  <circle cx="12" cy="12" r="2.5" />
                </svg>

                <span>{podcast.views || "0"}</span>
              </div>
            </div>

            {/* Bookmark + More */}
            <div className="flex items-center gap-3">
              {/* Bookmark */}
              <button
                type="button"
                aria-label="Bookmark podcast"
                className="transition hover:text-[#a36365]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-3.5L6 21V4.5Z" />
                </svg>
              </button>

              {/* More */}
              <button
                type="button"
                aria-label="More options"
                className="transition hover:text-[#a36365]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <circle cx="5" cy="12" r="1.5" />
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="19" cy="12" r="1.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PodcastCard;
