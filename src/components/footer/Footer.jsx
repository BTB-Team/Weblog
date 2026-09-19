import { useLangStore } from "../../store/useLangStore";
import { Link } from "react-router-dom";
import SocialIcon from "./components/SocialIcon";
import socialLinks from "./FooterUrl";

const Footer = () => {
  const t = useLangStore((state) => state.t);

  return (
    <footer className="mt-6 m-auto max-w-[1440px] bg-accent text-card grid grid-cols-1 min-[865px]:grid-cols-2 gap-8 px-6 py-8 sm:px-8 justify-items-center">
      {/* Mariam Amiri name */}
      <div className="w-full max-w-sm text-center">
        <h2 className="text-card text-xl font-bold">{t.navbar.name}</h2>

        <p className="hidden sm:block text-card/70 text-[12px]">
          {t.navbar.tagline}
        </p>
      </div>

      {/* Newsletter Subscribe */}
      <div className="w-full max-w-sm">
        <p className="mb-2">{t.footer.newsletter}</p>

        <div className="relative w-full">
          <input
            className="w-full rounded-full border border-card py-3 ps-4 pe-28 outline-none"
            type="text"
            placeholder={t.footer.emailPlaceholder}
          />

          <button className="absolute top-1/2 end-1 -translate-y-1/2 btn-outline rounded-full border border-card px-4">
            {t.footer.subscribe}
          </button>
        </div>
      </div>

      {/* Pages Section */}
      <div className="w-full max-w-sm text-center">
        <h2 className="text-card text-xl font-bold mb-3">
          {t.footer.pages}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <Link to="/">{t.navbar.home}</Link>
          <Link to="/about">{t.navbar.about}</Link>
          <Link to="/writings">{t.navbar.writings}</Link>
          <Link to="/media">{t.navbar.media}</Link>
          <Link to="/podcast">{t.navbar.podcasts}</Link>
          <Link to="/achievements">{t.navbar.achievements}</Link>
          <Link to="/newsletter">{t.navbar.newsletter}</Link>
          <Link to="/contact">{t.navbar.contact}</Link>
        </div>
      </div>

      {/* Connection */}
      <div className="w-full max-w-sm text-center">
        <h2 className="text-card text-xl font-bold mb-3">
          {t.footer.connect}
        </h2>

        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 max-w-xs mx-auto justify-items-center">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>

      {/* With Love For Words */}
      <div className="w-full max-w-2xl min-[865px]:col-span-2 text-center">
        <h2 className="text-card text-xl font-bold mb-2">
          {t.footer.withLoveForWords}
        </h2>

        <p>{t.footer.description}</p>
      </div>
    </footer>
  );
};

export default Footer;