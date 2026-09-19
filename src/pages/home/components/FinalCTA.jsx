// src/pages/home/components/FinalCTA.jsx
// SECTION 9 — Final CTA
import { Link } from "react-router-dom";
import { Send, BookOpen, Heart } from "lucide-react";
import { useLangStore } from "../../../store/useLangStore";

const FinalCTA = () => {
  const t = useLangStore((state) => state.t);

  return (
    <section className="m-auto max-w-7xl px-5 py-10">
      <div className="rounded-2xl bg-header/70 px-6 py-10 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">{t.home.finalCta.title}</h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted md:text-base">
          {t.home.finalCta.description}
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/contact" className="btn-ghost gap-2">
            <Send size={18} />
            {t.home.finalCta.contact}
          </Link>

          <Link to="/writings" className="btn-primary gap-2">
            <BookOpen size={18} />
            {t.home.finalCta.writings}
          </Link>

          <Link to="/donate" className="btn-secondary gap-2">
            <Heart size={18} />
            {t.home.finalCta.donate}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
