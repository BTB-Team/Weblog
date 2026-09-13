import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Donate from "../pages/donate/Donate";

import Achievement from "../pages/achievement/Achievement";
import Media from "../pages//media/Media";
import Newsletter from "../pages/newsletter/Newsletter";
import Podcast from "../pages/podcasts/Podcast";
import Writing from "../pages/writing/Writing";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />

        <Route path="/writings" element={<Writing />} />
        <Route path="/media" element={<Media />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/achievements" element={<Achievement />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
