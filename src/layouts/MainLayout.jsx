import GlobalAudioPlayer from "../pages/podcasts/GlobalAudioPlayer";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { useLangStore } from "../store/useLangStore";

function Layout() {
  const lang = useLangStore((state) => state.lang);

  return (
    <div
      dir={lang === "dr" ? "rtl" : "ltr"}
      className={`min-h-screen w-full ${
        lang === "dr" ? "font-persian" : "font-english"
      }`}
    >
      <Navbar />

      <main className="w-full">
        <Outlet />
      </main>

      <Footer />

      <div className="fixed bottom-0 inset-x-0 z-50">
        <div className="mx-auto w-full max-w-7xl">
          <GlobalAudioPlayer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
