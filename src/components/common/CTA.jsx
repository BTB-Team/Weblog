import image from "../../assets/images/ctaImage.webp";
import { useLangStore } from "../../store/useLangStore";
import { Link } from "react-router-dom";

const CTA = () => {
  const t = useLangStore((state) => state.t);
  return (
    <div
      className=" px-3
    bg-header/70 mx-auto max-w-7xl me-5 ms-5 py-3 flex flex-col lg:flex-row items-center gap-4 lg:justify-around rounded-lg
    "
    >
      <div className="order-2 lg:order-1 flex flex-col gap-3">
        <Link to="/writings" className="btn-primary">
          {t.cta.writingsButton}
        </Link>
        <Link to="/contact" className="btn-secondary">
          {t.cta.contactButton}
        </Link>
      </div>
      <div className="lg:order-2">
        <h2 className="text-3xl font-bold">{t.cta.title}</h2>
        <p className="text-muted">{t.cta.description}</p>
      </div>
      <div className="hidden lg:order-3 lg:block w-[80px] ">
        <img className="rounded-lg h-[95px]" src={image} alt="image" />
      </div>
    </div>
  );
};

export default CTA;
