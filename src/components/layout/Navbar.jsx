import { Link } from "react-router-dom";
import Search from "../ui/Search";
const NavBar = () => {
  return (
    <header>
      <nav className=" py-10 flex flex-col sm:flex-row justify-between w-full items-center gap-y-4">
        <h1 className="text-4xl uppercase tracking-wide text-rose-600 font-bold w-full">
          <Link to={"/"}>Cinemaku</Link>
        </h1>
        <Search />
      </nav>
    </header>
  );
};

export default NavBar;
