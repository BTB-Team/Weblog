import { useEffect, useRef, useState } from "react";
import { useAudioStore } from "../../store/useAudioStore";
import { useLangStore } from "../../store/useLangStore";

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M8 5.5v13l10-6.5-10-6.5Z" />
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <rect x="7" y="5" width="3.5" height="14" rx="1" />
    <rect x="13.5" y="5" width="3.5" height="14" rx="1" />
  </svg>
);

const GlobalAudioPlayer = () => {
  const audioRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const lang = useLangStore((state) => state.lang);
  const t = useLangStore((state) => state.t);

  const currentPodcast = useAudioStore((state) => state.currentPodcast);

  const isPlaying = useAudioStore((state) => state.isPlaying);

  const isLoading = useAudioStore((state) => state.isLoading);

  const setIsPlaying = useAudioStore((state) => state.setIsPlaying);

  const setIsLoading = useAudioStore((state) => state.setIsLoading);

  const setError = useAudioStore((state) => state.setError);

  const getLocalizedValue = (value) => {
    if (!value) return "";

    if (typeof value === "string") {
      return value;
    }

    return value[lang] || value.en || value.dr || "";
  };

  // Convert public asset paths to Vite browser paths
  const getImageUrl = (path) => {
    if (!path) return "";

    if (path.startsWith("/public/")) {
      return path.replace("/public", "");
    }

    if (path.startsWith("public/")) {
      return `/${path.replace("public/", "")}`;
    }

    if (!path.startsWith("/")) {
      return `/${path}`;
    }

    return path;
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !currentPodcast?.audioUrl) {
      return;
    }

    audio.src = currentPodcast.audioUrl;
    audio.load();

    if (isPlaying) {
      setIsLoading(true);

      audio
        .play()
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          setIsPlaying(false);
          setError(t.podcast.playbackError);
        });
    }
  }, [currentPodcast]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !currentPodcast?.audioUrl) {
      return;
    }

    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;

    if (!audio) return;

    setCurrentTime(audio.currentTime);
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;

    if (!audio) return;

    setDuration(audio.duration || 0);
    setIsLoading(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const togglePlay = () => {
    if (!currentPodcast?.audioUrl) {
      return;
    }

    setIsPlaying(!isPlaying);
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;

    if (!audio) return;

    const value = Number(event.target.value);

    audio.currentTime = value;
    setCurrentTime(value);
  };

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds)) {
      return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds,
    ).padStart(2, "0")}`;
  };

  if (!currentPodcast) {
    return null;
  }

  const title = getLocalizedValue(currentPodcast.title);
  const guest = getLocalizedValue(currentPodcast.guest);

  return (
    <aside className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 overflow-hidden rounded-2xl border border-[#c98d8d]/30 bg-[#b86f73] text-white shadow-[0_-5px_25px_rgba(76,48,44,0.15)]">
      <audio
        ref={audioRef}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      <div className="flex w-full items-center gap-4 px-4 py-3 sm:px-6">
        {/* Podcast info */}
        <div className="hidden min-w-0 items-center gap-3 md:flex md:w-[25%]">
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-white/20">
            {currentPodcast.cover && (
              <img
                src={getImageUrl(currentPodcast.cover)}
                alt={title}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            )}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-bold">{title}</p>

            {guest && <p className="truncate text-xs text-white/70">{guest}</p>}
          </div>
        </div>

        {/* Player */}
        <div className="flex flex-1 items-center justify-center gap-3">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? t.podcast.pause : t.podcast.play}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#a96868] transition hover:scale-105"
          >
            {isLoading ? (
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#a96868] border-t-transparent" />
            ) : isPlaying ? (
              <PauseIcon />
            ) : (
              <PlayIcon />
            )}
          </button>

          <span className="hidden text-xs text-white/80 sm:block">
            {formatTime(currentTime)}
          </span>

          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            aria-label={t.podcast.seek}
            className="h-1 w-full max-w-md cursor-pointer accent-white"
          />

          <span className="hidden text-xs text-white/80 sm:block">
            {formatTime(duration)}
          </span>
        </div>

        {/* Mobile title */}
        <div className="max-w-[120px] min-w-0 md:hidden">
          <p className="truncate text-xs font-medium">{title}</p>
        </div>
      </div>
    </aside>
  );
};

export default GlobalAudioPlayer;
