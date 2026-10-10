import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLangStore } from "../../../store/useLangStore";
import { useNavbar } from "../useNavbar";

const BottomNavbar = () => {
  // Navbar behavior
  const { isOpen, toggleMenu, closeMenu } = useNavbar();

  // Language
  const t = useLangStore((state) => state.t);

  // Shared navigation link styles
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "border-b-2 border-accent transition-colors duration-200"
      : "border-b-2 border-transparent transition-colors duration-200 hover:border-muted";

  return (
    <header className="m-auto  bg-navbar">
      <nav className="flex items-center gap-5  px-3 lg:px-10 py-2 text-sm font-semibold">
        {/* Logo / Name */}

        <div className="shrink-0 ">
          <div>
            <NavLink to="/" className="text-base font-bold">
              {t.navbar.name}
            </NavLink>

            <p className=" text-[12px] text-muted">{t.navbar.tagline}</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center   md:flex md:flex-1 md:justify-between md:max-w-xl md:ms-auto">
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
        </div>

        {/* Right Side */}
        <div className="flex shrink-0 gap-2 md:hidden ms-auto">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="absolute left-0 right-0 px-10 p z-10 border-t border-accent/20 bg-navbar/30
        backdrop-blur-sm px-4 pb-5 md:hidden"
        >
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
          </div>
        </div>
      )}
    </header>
  );
};

export default BottomNavbar;
