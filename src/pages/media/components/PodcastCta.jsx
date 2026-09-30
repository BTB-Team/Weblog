// src/pages/media/components/PodcastCta.jsx
import { Link } from "react-router-dom";
import { Play, Send } from "lucide-react";
import { useLangStore } from "../../../store/useLangStore";
import headphones from "../assets/podcast-headphones.png";

const PodcastCta = () => {
  const t = useLangStore((state) => state.t);
  const lang = useLangStore((state) => state.lang);
  const isRtl = lang === "dr";

  return (
    <section className="mt-14 overflow-hidden rounded-3xl border border-header bg-card">
      <div className="flex flex-col items-center gap-6 px-6 py-8 text-center md:flex-row md:justify-between md:px-10 md:text-start">
        {/* Illustration + text */}
        <div className="flex flex-col items-center gap-5 md:flex-row">
          <img
            src={headphones}
            alt=""
            aria-hidden="true"
            className="h-20 w-auto shrink-0 mix-blend-multiply"
          />

          <div>
            <h2 className="text-xl font-bold md:text-2xl">
              {t.media.listenTitle}
            </h2>
            <p className="mt-2 max-w-md text-sm leading-7 text-muted">
              {t.media.listenText}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex w-full flex-col gap-3 md:w-64">
          <Link
            to="/podcasts"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            <Play size={15} fill="currentColor" />
            {t.media.listenButton}
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-header bg-white/60 px-6 py-3 text-sm font-semibold text-muted transition-colors hover:bg-header/40"
          >
            <Send size={15} className={isRtl ? "-scale-x-100" : ""} />
            {t.media.contactButton}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PodcastCta;
