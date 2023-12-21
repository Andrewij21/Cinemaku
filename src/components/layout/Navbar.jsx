import { Link } from "react-router-dom";

// import { FaMagnifyingGlass } from "react-icons/fa6";
const NavBar = () => {
  return (
    <header>
      <nav className=" py-10 flex flex-col sm:flex-row justify-between w-full items-center gap-y-4">
        <h1 className="text-4xl uppercase tracking-wide text-rose-600 font-bold w-full">
          <Link to={"/"}>Cinemaku</Link>
        </h1>

        <input
          type="text"
          className="py-2 px-4 w-full md:w-1/2 rounded-md outline-none text-black  hover:ring-2 hover:ring-rose-600 
               focus:ring focus:ring-rose-600 "
          placeholder="Search film..."
        />
      </nav>
    </header>
  );
};

export default NavBar;
