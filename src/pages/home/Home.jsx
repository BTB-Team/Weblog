import HeroSection from "./components/HeroSection";
import StatHome from "./components/StatHome";
import AboutHome from "./components/AboutHome";
const home = () => {
  return (
    <main className="m-auto max-w-7xl">
      <HeroSection />
      <StatHome />
      <AboutHome />
    </main>
  );
};

export default home;
