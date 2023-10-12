import { useState } from "react";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

// import { FaMagnifyingGlass } from "react-icons/fa6";
const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <header className="mb-6">
      <nav className=" py-4 flex justify-between w-full items-center">
        <div className="flex-1">
          <div className="flex justify-between ">
            <h1 className="text-4xl uppercase tracking-wide text-rose-600 font-bold ">
              <Link to={"/"}>Cinemaku</Link>
            </h1>
            <button
              className="text-white md:hidden group"
              onClick={() => setMenuVisible(!menuVisible)}
            >
              <AiOutlineMenu className="hover:text-rose-600 text-2xl" />

              <div
                className="absolute top-0 right-0 h-screen w-1/3  opacity-0 bg-slate-700  group-focus:right-1 group-focus:opacity-100 transition-all duration-300 pointer-events-none"
                // className={`${
                //   menuVisible
                //     ? "opacity-100 right-1 top-0"
                //     : "opacity-0 right-0"
                // } absolute h-screen w-1/3 bg-slate-700  transition-all duration-300  pointer-events-none`}
              >
                <ul
                  className={`flex flex-col items-center w-full pt-10 text-base cursor-pointer ${
                    menuVisible ? "pointer-events-auto" : "pointer-events-none"
                  }`}
                >
                  <li className="hover:bg-white hover:text-rose-600 py-4 px-6 w-full">
                    <a href="/">Home</a>
                  </li>
                  <li className="hover:bg-white hover:text-rose-600 py-4 px-6 w-full">
                    <a href="#popular">Popular</a>
                  </li>
                  <li className="hover:bg-white hover:text-rose-600 py-4 px-6 w-full">
                    <a href="#Series">series</a>
                  </li>
                </ul>
              </div>
            </button>
          </div>
          <div className=" cursor-pointer  md:hidden  py-4">
            {/* <FaMagnifyingGlass /> */}
            <input
              type="text"
              className="py-2 px-4 rounded-md outline-none text-black   
               focus:ring focus:ring-rose-600 w-full"
              placeholder="Search film..."
            />
          </div>
        </div>

        <ul className="hidden md:flex justify-center items-center gap-12 text-slate-200 cursor-pointer font-semibold">
          <li className="hover:text-rose-600 text-lg">
            <Link
              to={"/"}
              // state={{ title }}
            >
              Home
            </Link>
          </li>
          <li className="">
            <input
              type="text"
              className="py-2 px-4 rounded-md outline-none text-black  hover:ring hover:ring-rose-600 
               focus:ring focus:ring-rose-600 "
              placeholder="Search film..."
            />
          </li>
          <li className="text-xl hover:text-rose-600">
            <AiOutlineUser />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
