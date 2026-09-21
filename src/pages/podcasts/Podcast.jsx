import { useEffect, useMemo, useState } from "react";
import PodcastCard from "./PodcastCard";
import { useAudioStore } from "../../store/useAudioStore";
import { useLangStore } from "../../store/useLangStore";

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4 4" />
  </svg>
);

const getLocalizedValue = (value, lang) => {
  if (!value) return "";

  if (typeof value === "string") {
    return value;
  }

  return value[lang] || value.en || value.dr || "";
};

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [pageData, setPageData] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const lang = useLangStore((state) => state.lang);
  const t = useLangStore((state) => state.t);

  const currentPodcast = useAudioStore((state) => state.currentPodcast);
  const isPlaying = useAudioStore((state) => state.isPlaying);
  const isLoading = useAudioStore((state) => state.isLoading);

  const setCurrentPodcast = useAudioStore((state) => state.setCurrentPodcast);
  const setIsPlaying = useAudioStore((state) => state.setIsPlaying);
  const setIsLoading = useAudioStore((state) => state.setIsLoading);
  const setErrorAudio = useAudioStore((state) => state.setError);

  useEffect(() => {
    const loadData = async () => {
      try {
        setError("");

        const [
          podcastsResponse,
          categoriesResponse,
          platformsResponse,
          pageResponse,
        ] = await Promise.all([
          fetch("http://localhost:5000/podcasts"),
          fetch("http://localhost:5000/podcastCategories"),
          fetch("http://localhost:5000/podcastPlatforms"),
          fetch("http://localhost:5000/podcastPage"),
        ]);

        if (
          !podcastsResponse.ok ||
          !categoriesResponse.ok ||
          !platformsResponse.ok ||
          !pageResponse.ok
        ) {
          throw new Error("Failed to load podcast data");
        }

        const [podcastsData, categoriesData, platformsData, pageDataResult] =
          await Promise.all([
            podcastsResponse.json(),
            categoriesResponse.json(),
            platformsResponse.json(),
            pageResponse.json(),
          ]);

        setPodcasts(podcastsData);
        setCategories(categoriesData);
        setPlatforms(platformsData);
        setPageData(pageDataResult);
      } catch {
        setError(t.podcast.loadError);
      }
    };

    loadData();
  }, [t.podcast.loadError]);

  const handlePlay = (podcast) => {
    if (!podcast.audioUrl) {
      setCurrentPodcast(podcast);
      setIsPlaying(false);
      setIsLoading(false);
      setErrorAudio(t.podcast.audioComingSoon);
      return;
    }

    if (currentPodcast?.id === podcast.id) {
      setIsPlaying(!isPlaying);
      setErrorAudio("");
      return;
    }

    setCurrentPodcast(podcast);
    setIsLoading(true);
    setIsPlaying(true);
    setErrorAudio("");
  };

  const filteredPodcasts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return podcasts.filter((podcast) => {
      const title = getLocalizedValue(podcast.title, lang).toLowerCase();

      const guest = getLocalizedValue(podcast.guest, lang).toLowerCase();

      const description = getLocalizedValue(
        podcast.description,
        lang,
      ).toLowerCase();

      const matchesSearch =
        !query ||
        title.includes(query) ||
        guest.includes(query) ||
        description.includes(query);

      const matchesCategory =
        selectedCategory === "all" || podcast.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [podcasts, search, selectedCategory, lang]);

  const heroPodcast = podcasts.find(
    (podcast) => podcast.id === pageData?.featuredPodcastId,
  );

  const heroImage = pageData?.heroImage || heroPodcast?.cover;

  return (
    <main className="min-h-screen w-full bg-[#fbf8f3] pb-32">
      {/* Breadcrumb */}
      <section className="px-4 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex items-center gap-2 text-xs text-[#9b8179]">
            <span aria-hidden="true">⌂</span>
            <span>/</span>
            <span className="text-[#704447]">{t.navbar.podcasts}</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="px-4 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid overflow-hidden rounded-[28px] bg-[#f5eee7] lg:grid-cols-2">
            <div className="relative flex min-h-[330px] items-center overflow-hidden px-7 py-10 sm:px-10 lg:min-h-[390px] lg:px-14">
              <div
                className="pointer-events-none absolute inset-x-10 top-12 flex h-16 items-center justify-center gap-[3px] opacity-20"
                aria-hidden="true"
              >
                {Array.from({ length: 70 }).map((_, index) => (
                  <span
                    key={index}
                    className="w-[2px] rounded-full bg-[#ad7775]"
                    style={{
                      height: `${7 + ((index * 17) % 38)}px`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <p className="mb-3 text-sm font-medium text-[#a26364]">
                  {t.podcast.title}
                </p>

                <h1 className="max-w-xl text-3xl font-bold leading-[1.3] text-[#633e40] sm:text-4xl lg:text-5xl">
                  {t.podcast.heroTitle}
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[#78645e] sm:text-base">
                  {t.podcast.heroDescription}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span className="h-px w-12 bg-[#c9a098]" />
                  <span className="h-2 w-2 rounded-full bg-[#a96868]" />
                  <span className="h-px w-12 bg-[#c9a098]" />
                </div>
              </div>
            </div>

            <div className="relative min-h-[280px] overflow-hidden lg:min-h-[390px]">
              {heroImage ? (
                <img
                  src={heroImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[#dfc9ba] text-7xl text-[#795052]">
                  ♫
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Search + Categories */}
      <section className="px-4 pt-9 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#643f42] sm:text-3xl">
                  {t.podcast.latest}
                </h2>

                <p className="mt-2 text-sm text-[#9a857e]">
                  {filteredPodcasts.length} {t.podcast.episodes}
                </p>
              </div>

              <div className="relative w-full md:max-w-sm">
                <div className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-[#a38d85]">
                  <SearchIcon />
                </div>

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder={t.podcast.searchPlaceholder}
                  className="h-12 w-full rounded-full border border-[#e8ddd6] bg-white ps-12 pe-5 text-sm text-[#5d4643] outline-none placeholder:text-[#b2a29b] focus:border-[#bd8983] focus:ring-2 focus:ring-[#bd8983]/10"
                />
              </div>
            </div>

            {categories.length > 0 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => {
                  const label = getLocalizedValue(category.label, lang);

                  const active = selectedCategory === category.id;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setSelectedCategory(category.id)}
                      className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition ${
                        active
                          ? "bg-[#a96868] text-white shadow-sm"
                          : "border border-[#eaded7] bg-white text-[#806b65] hover:bg-[#f7eee9]"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Error */}
      {error && (
        <section className="px-4 pt-5 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl rounded-2xl border border-red-100 bg-red-50 px-5 py-4 text-sm text-red-700">
            {error}
          </div>
        </section>
      )}

      {/* Podcast Cards */}
      <section className="px-4 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          {filteredPodcasts.length > 0 ? (
            <div className="grid gap-5 lg:grid-cols-2">
              {filteredPodcasts.map((podcast) => (
                <PodcastCard
                  key={podcast.id}
                  podcast={podcast}
                  onPlay={handlePlay}
                  isCurrent={currentPodcast?.id === podcast.id}
                  isPlaying={isPlaying}
                  isLoading={isLoading}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-[24px] bg-white px-6 py-16 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f2e4dc] text-2xl text-[#8c5b5b]">
                ♫
              </div>

              <p className="font-medium text-[#704447]">
                {t.podcast.noPodcasts}
              </p>
            </div>
          )}
        </div>
      </section>
      {/* CTA */}
    </main>
  );
};

export default Podcasts;
