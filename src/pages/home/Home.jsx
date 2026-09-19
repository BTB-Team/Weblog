// src/pages/home/Home.jsx
import HeroSection from "./components/HeroSection";
import StatHome from "./components/StatHome";
import AboutHome from "./components/AboutHome";
import LatestPosts from "./components/LatestPosts";
import RecentActivities from "./components/RecentActivities";
import PublicationsHome from "./components/PublicationsHome";
import FeaturedAchievements from "./components/FeaturedAchievements";
import MediaGallery from "./components/MediaGallery";
import FinalCTA from "./components/FinalCTA";

const Home = () => {
  return (
    <main className="m-auto max-w-7xl">
      {/* 1 */} <HeroSection />
      {/* 2 */} <StatHome />
      {/* 3 */} <AboutHome />
      {/* 4 */} <LatestPosts />
      {/* 5 */} <RecentActivities />
      {/* 6 */} <PublicationsHome />
      {/* 7 */} <FeaturedAchievements />
      {/* 8 */} <MediaGallery />
      {/* 9 */} <FinalCTA />
    </main>
  );
};

export default Home;
