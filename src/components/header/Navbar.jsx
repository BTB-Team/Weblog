import { NavLink } from "react-router-dom";
import { useLangStore } from "../../store/useLangStore";

const Navbar = () => {
  const lang = useLangStore((state) => state.lang);
  const t = useLangStore((state) => state.t);
  const setLang = useLangStore((state) => state.setLang);

  return (
    <header className="flex gap-10 justify-center items-center py-5 bg-header font-[700]">
      <nav className="flex gap-10">
        <NavLink to="/">{t.navbar.name}</NavLink>

        <div className="flex gap-3">
          <NavLink to="/"> {t.navbar.home}</NavLink>
          <NavLink to="/about">{t.navbar.about}</NavLink>

          <NavLink to="/writings">{t.navbar.writings}</NavLink>
          <NavLink to="/media">{t.navbar.media}</NavLink>
          <NavLink to="/podcast">{t.navbar.podcasts}</NavLink>
          <NavLink to="/achievements">{t.navbar.achievements}</NavLink>
          <NavLink to="/newsletter">{t.navbar.newsletter}</NavLink>
          <NavLink to="/contact">{t.navbar.contact}</NavLink>
        </div>
      </nav>
      <button
        className="btn-secondary"
        onClick={() => setLang(lang === "en" ? "dr" : "en")}
      >
        {lang === "en" ? "FA" : "EN"}
      </button>

      <NavLink to="/donate" className="btn-primary ">
        {t.navbar.donate}
      </NavLink>
    </header>
  );
};

export default Navbar;
