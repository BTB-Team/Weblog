// src/components/common/SectionHeader.jsx
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLangStore } from "../../store/useLangStore";

const SectionHeader = ({ title, to, linkLabel }) => {
  const lang = useLangStore((state) => state.lang);

  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <h2 className="relative text-2xl font-bold md:text-3xl">
        {title}
        <span className="absolute -bottom-2 start-0 h-1 w-12 rounded-full bg-accent/60" />
      </h2>

      {to && (
        <Link
          to={to}
          className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
        >
          {linkLabel}
          {lang === "dr" ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
