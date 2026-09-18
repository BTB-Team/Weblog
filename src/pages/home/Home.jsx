import HeroSection from "./components/HeroSection";
import StatHome from "./components/StatHome";
import AboutHome from "./components/AboutHome";
import CTA from "../../components/common/CTA";
// import BookCard from "../../components/common/BookCard";

const home = () => {
  return (
    <main className="m-auto max-w-7xl">
      <HeroSection />
      <StatHome />
      <AboutHome />
      {/*  */}
      <CTA />
      {/* <BookCard  /> */}
    </main>
  );
};

export default home;
