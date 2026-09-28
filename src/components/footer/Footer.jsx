import { useLangStore } from "../../store/useLangStore";
import { Link } from "react-router-dom";
import SocialIcon from "./components/SocialIcon";
import socialLinks from "./FooterUrl";
import { useState } from "react";

const Footer = () => {
  const t = useLangStore((state) => state.t);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setMessage("error");
    } else {
      setMessage("success");
    }

    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  return (
    <footer className="mt-6 mx-auto max-w-[1440px] bg-accent text-card px-6 py-10 sm:px-8 lg:px-12">
      {/* Main Footer */}
      <div className="grid grid-cols-1 gap-10 text-center min-[865px]:grid-cols-3 min-[865px]:gap-12 min-[865px]:text-start">
        {/* Newsletter */}
        <div className="w-full max-w-md mx-auto min-[865px]:mx-0">
          <h2 className="mb-3 text-xl font-bold">
            {t.footer.withLoveForWords}
          </h2>

          <p className="mb-6 text-sm leading-7 opacity-90">
            {t.footer.description}
          </p>

          <p className="mb-2 text-sm font-medium">{t.footer.newsletter}</p>

          <div className="relative flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.footer.emailPlaceholder}
              className="w-full rounded-md border border-card bg-transparent px-4 py-3 text-card placeholder:text-card/70 outline-none focus:ring-1 focus:ring-card"
            />

            <button
              type="button"
              onClick={handleSubscribe}
              className="w-full rounded-md bg-card px-4 py-3 font-semibold text-accent transition-opacity hover:opacity-80  duration-200 cursor-pointer"
            >
              {t.footer.subscribe}
            </button>

            {message && (
              <p className="absolute top-28 mt-1 text-sm font-bold">
                {message === "success"
                  ? t.footer.joined
                  : t.footer.invalidEmail}
              </p>
            )}
          </div>
        </div>

        {/* Pages */}
        <div className="w-full max-w-md mx-auto min-[865px]:mx-auto">
          <h2 className="mb-4 text-xl font-bold">{t.footer.pages}</h2>

          <nav className="grid gap-3 text-sm">
            <Link to="/" className="transition-opacity hover:opacity-70">
              {t.navbar.home}
            </Link>

            <Link to="/about" className="transition-opacity hover:opacity-70">
              {t.navbar.about}
            </Link>

            <Link
              to="/writings"
              className="transition-opacity hover:opacity-70"
            >
              {t.navbar.writings}
            </Link>

            <Link to="/media" className="transition-opacity hover:opacity-70">
              {t.navbar.media}
            </Link>

            <Link to="/podcast" className="transition-opacity hover:opacity-70">
              {t.navbar.podcasts}
            </Link>

            <Link
              to="/achievements"
              className="transition-opacity hover:opacity-70"
            >
              {t.navbar.achievements}
            </Link>

            <Link
              to="/newsletter"
              className="transition-opacity hover:opacity-70"
            >
              {t.navbar.newsletter}
            </Link>

            <Link to="/contact" className="transition-opacity hover:opacity-70">
              {t.navbar.contact}
            </Link>
          </nav>
        </div>

        {/* Social / Connection */}
        <div className="w-full max-w-md mx-auto min-[865px]:mx-0">
          <h2 className="mb-4 text-xl font-bold">{t.footer.connect}</h2>

          <div className="grid max-w-xs grid-cols-4 gap-5 sm:grid-cols-5 min-[865px]:grid-cols-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex items-center justify-center transition-transform hover:scale-110"
              >
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-10 border-t border-card/50" />
    </footer>
  );
};

export default Footer;
