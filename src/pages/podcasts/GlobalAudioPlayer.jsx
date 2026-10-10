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
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const [showStopMessage, setShowStopMessage] = useState(false);

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
  const guest = getLocalizedValue(currentPodcast?.guest);

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

  // Stop audio and completely hide the player
  const stopAudioAndHide = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    setCurrentTime(0);
    setIsPlaying(false);
    setShowStopMessage(false);
    setIsPlayerVisible(false);
  };

  // When a new podcast is selected
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !currentPodcast?.audioUrl) {
      return;
    }

    setIsPlayerVisible(true);
    setShowStopMessage(false);
    setCurrentTime(0);
    setDuration(0);
    setIsLoading(false);
    setError("");

    // Stop previous audio
    audio.pause();

    // Load new podcast
    audio.src = currentPodcast.audioUrl;
    audio.load();

    // Play new podcast if isPlaying is true
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

  // Play / pause audio
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !currentPodcast?.audioUrl) {
      return;
    }

    if (isPlaying) {
      setIsPlayerVisible(true);

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

  // Close button
  const handleClose = () => {
    stopAudioAndHide();
  };

  // Play / Pause button
  const togglePlay = (event) => {
    event.stopPropagation();

    if (!currentPodcast?.audioUrl) {
      return;
    }

    // If audio is currently playing,
    // show confirmation instead of stopping immediately
    if (isPlaying) {
      setShowStopMessage(true);
      return;
    }

    // If audio is not playing, play it
    setShowStopMessage(false);
    setIsPlayerVisible(true);
    setIsPlaying(true);
  };

  // Seek audio
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

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      {currentPodcast && isPlayerVisible && (
        <aside className="fixed bottom-0 left-1/2 z-50 w-full max-w-7xl -translate-x-1/2 overflow-visible rounded-t-2xl border border-[#c98d8d]/30 bg-[#b86f73] text-white shadow-[0_-5px_25px_rgba(76,48,44,0.15)]">
          {/* Close button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close player"
            className="absolute end-3 top-2 z-20 text-xl text-white/80 transition hover:text-white"
          >
            ×
          </button>

          <div className="relative flex min-h-[72px] w-full items-center justify-between gap-4 px-4 py-3 sm:px-6">
            {/* Podcast information - Right side */}
            <div className="absolute right-4 top-1/2 hidden w-[25%] -translate-y-1/2 items-center justify-end gap-3 md:flex">
              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-white/20">
                {currentPodcast.cover && (
                  <img
                    src={getImageUrl(currentPodcast.cover)}
                    alt={getLocalizedValue(currentPodcast.title)}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-bold">
                  {getLocalizedValue(currentPodcast.title)}
                </p>

                {guest && (
                  <p className="truncate text-xs text-white/70">{guest}</p>
                )}
              </div>
            </div>

            {/* Single player controls - Center */}

            {/* Play button and progress bar - Center */}

            {/* Center Play Button */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? t.podcast.pause : t.podcast.play}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#a96868] transition hover:scale-105"
              >
                {isLoading ? (
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#a96868] border-t-transparent" />
                ) : isPlaying ? (
                  <PauseIcon />
                ) : (
                  <PlayIcon />
                )}
              </button>
            </div>

            {/* Progress Bar - Left side of Play Button */}
            <div
              dir="ltr"
              className="absolute right-[calc(50%+34px)] top-1/2 flex w-[calc(50%-55px)] max-w-[550px] -translate-y-1/2 items-center gap-2"
            >
              <span className="whitespace-nowrap text-xs text-white/80">
                {formatTime(currentTime)}
              </span>

              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                aria-label={t.podcast.seek}
                className="h-1 min-w-0 flex-1 cursor-pointer accent-white"
              />

              <span className="whitespace-nowrap text-xs text-white/80">
                {formatTime(duration)}
              </span>
            </div>

            {/* Mobile podcast title */}
            <div className="max-w-[100px] min-w-0 md:hidden">
              <p className="truncate text-xs font-medium">
                {getLocalizedValue(currentPodcast.title)}
              </p>
            </div>

            {/* Stop confirmation */}

            {showStopMessage && (
              <div
                className="absolute bottom-full left-1/2 z-50 mb-3 -translate-x-1/2 rounded-xl bg-white px-4 py-3 text-center text-sm text-gray-800 shadow-xl"
                onClick={(event) => event.stopPropagation()}
                dir={lang === "en" ? "ltr" : "rtl"}
              >
                <p className="mb-2 whitespace-nowrap font-medium">
                  {lang === "en"
                    ? "Do you want to stop the audio?"
                    : "آیا می‌خواهید صدا قطع شود؟"}
                </p>

                <div className="flex justify-center gap-2">
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      stopAudioAndHide();
                    }}
                    className="rounded-lg bg-[#b86f73] px-3 py-1.5 text-xs font-medium text-white transition hover:bg-[#a55f63]"
                  >
                    {lang === "en" ? "Yes, stop" : "بله، قطع شود"}
                  </button>

                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setShowStopMessage(false);
                    }}
                    className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-200"
                  >
                    {lang === "en" ? "No" : "خیر"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </aside>
      )}
    </>
  );
};

export default GlobalAudioPlayer;
