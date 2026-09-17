import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { useLangStore } from "../../store/useLangStore";
import logoImage from "../../assets/images/littleBoy.webp";

import { useNavbar } from "./useNavbar";

const Navbar = () => {
  // Navbar behavior
  const { isOpen, isVisible, toggleMenu, closeMenu } = useNavbar();

  // Language
  const lang = useLangStore((state) => state.lang);
  const t = useLangStore((state) => state.t);
  const setLang = useLangStore((state) => state.setLang);

  // Shared navigation link styles
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "border-b-2 border-accent transition-colors duration-200"
      : "border-b-2 border-transparent transition-colors duration-200 hover:border-muted";

  return (
    <header
      className={`m-auto max-w-[1440px] sticky top-0 z-50 bg-navbar transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="m-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 text-sm font-semibold">
        {/* Logo / Name */}
        <div className="flex shrink-0 items-center gap-2 leading-[18px]">
          <img
            className="h-[50px] w-[50px] rounded-full border-2 border-accent-hover"
            src={logoImage}
            alt="logo image"
          />

          <div>
            <NavLink to="/" className=" text-base font-bold ">
              {t.navbar.name}
            </NavLink>

            <p className="hidden text-[12px] text-muted sm:block">
              {t.navbar.tagline}
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden max-w-2xl grow items-center justify-around gap-4 xl:flex">
          <NavLink to="/" className={navLinkClass}>
            {t.navbar.home}
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            {t.navbar.about}
          </NavLink>

          <NavLink to="/writings" className={navLinkClass}>
            {t.navbar.writings}
          </NavLink>

          <NavLink to="/media" className={navLinkClass}>
            {t.navbar.media}
          </NavLink>

          <NavLink to="/podcast" className={navLinkClass}>
            {t.navbar.podcasts}
          </NavLink>

          <NavLink to="/achievements" className={navLinkClass}>
            {t.navbar.achievements}
          </NavLink>

          <NavLink to="/newsletter" className={navLinkClass}>
            {t.navbar.newsletter}
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            {t.navbar.contact}
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="flex shrink-0 gap-5">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="btn-ghost xl:hidden"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Language */}
          <button
            type="button"
            className="btn-secondary"
            onClick={() => setLang(lang === "en" ? "dr" : "en")}
          >
            {lang === "en" ? "FA" : "EN"}
          </button>

          {/* Donate */}
          <NavLink to="/donate" className="hidden sm:block btn-primary">
            {t.navbar.donate}
          </NavLink>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute left-0 right-0 z-10 border-t border-accent/20 bg-navbar px-4 pb-5 xl:hidden">
          <div className="flex flex-col gap-2 pt-4">
            <NavLink to="/" onClick={closeMenu} className={navLinkClass}>
              {t.navbar.home}
            </NavLink>

            <NavLink to="/about" onClick={closeMenu} className={navLinkClass}>
              {t.navbar.about}
            </NavLink>

            <NavLink
              to="/writings"
              onClick={closeMenu}
              className={navLinkClass}
            >
              {t.navbar.writings}
            </NavLink>

            <NavLink to="/media" onClick={closeMenu} className={navLinkClass}>
              {t.navbar.media}
            </NavLink>

            <NavLink to="/podcast" onClick={closeMenu} className={navLinkClass}>
              {t.navbar.podcasts}
            </NavLink>

            <NavLink
              to="/achievements"
              onClick={closeMenu}
              className={navLinkClass}
            >
              {t.navbar.achievements}
            </NavLink>

            <NavLink
              to="/newsletter"
              onClick={closeMenu}
              className={navLinkClass}
            >
              {t.navbar.newsletter}
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu} className={navLinkClass}>
              {t.navbar.contact}
            </NavLink>

            {/* Donate on very small screens */}
            <NavLink
              to="/donate"
              onClick={closeMenu}
              className="btn-primary sm:hidden"
            >
              {t.navbar.donate}
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
