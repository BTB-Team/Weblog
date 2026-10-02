import { NavLink } from "react-router-dom";
import { useLangStore } from "../../../store/useLangStore";
import SocialIcon from "../../footer/components/SocialIcon";
import socialLinks from "../../footer/FooterUrl";

const TopNavbar = () => {
  const t = useLangStore((state) => state.t);
  const lang = useLangStore((state) => state.lang);
  const setLang = useLangStore((state) => state.setLang);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "border-b-2 border-accent transition-colors duration-200"
      : "border-b-2 border-transparent transition-colors duration-200 hover:border-muted";

  return (
    <nav className="backdrop-blur-md font-semibold max-w-[1440px] mx-auto grid w-full gap-2 bg-muted/70 px-3 py-1 md:flex md:items-center md:justify-between md:px-3 lg:px-10">
      {/* Social Links */}
      <div className="flex min-w-0 flex-wrap items-center justify-center gap-3 text-white sm:gap-5">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <SocialIcon
              icon={social.icon}
              size={18}
              style={"hover:text-accent"}
            />
          </a>
        ))}
      </div>

      {/* Top Nav Links */}
      <div className="flex items-center justify-center gap-5 text-sm text-white sm:gap-8">
        <NavLink to="/contact" className={navLinkClass}>
          {t.navbar.contact}
        </NavLink>

        <NavLink to="/donate" className={navLinkClass}>
          {t.navbar.donate}
        </NavLink>
        {/* Language */}
        <button
          type="button"
          className="cursor-pointer hover:text-accent duration-200"
          onClick={() => setLang(lang === "en" ? "dr" : "en")}
        >
          {lang === "en" ? "FA" : "EN"}
        </button>
      </div>
    </nav>
  );
};

export default TopNavbar;
