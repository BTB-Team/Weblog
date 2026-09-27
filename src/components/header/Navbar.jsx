import TopNavbar from "./component/TopNavbar";
import BottomNavbar from "./component/BottomNavbar";
import { useNavbar } from "./useNavbar";

const Navbar = () => {
  const { isVisible } = useNavbar();

  return (
    <header
      className={`sticky top-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <TopNavbar />
      <BottomNavbar />
    </header>
  );
};

export default Navbar;
