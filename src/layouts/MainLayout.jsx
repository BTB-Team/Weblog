import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import { useLangStore } from "../store/useLangStore";
const MainLayout = () => {
  const lang = useLangStore((state) => state.lang);
  return (
    <div className={lang === "dr" ? "font-persian" : "font-english"}>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
