import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
const NavBar = () => {
  return (
    <header className="mb-6">
      <nav className=" py-4 flex justify-between w-full shadow-xl container items-center ">
        <h1 className="text-5xl uppercase tracking-wide text-rose-600 font-bold">
          Cinemaku
        </h1>
        <button className="text-2xl text-white md:hidden block rounded  p-2 focus:outline-none group">
          <AiOutlineMenu className="hover:text-rose-600 " />

          <div className="absolute top-0 -right-full h-screen w-1/3  opacity-0 bg-slate-600  group-focus:right-1 group-focus:opacity-100 transition-all duration-300">
            <ul className="flex flex-col items-center w-full pt-10 text-base cursor-pointer">
              <li className="hover:bg-white hover:text-rose-600 py-4 px-6 w-full">
                Home
              </li>
              <li className="hover:bg-white hover:text-rose-600 py-4 px-6 w-full">
                About
              </li>
              <li className="hover:bg-white hover:text-rose-600 py-4 px-6 w-full">
                Page
              </li>
            </ul>
          </div>
        </button>

        <ul className="hidden md:flex justify-center items-center gap-12 text-slate-200 cursor-pointer font-semibold">
          <li className="hover:text-rose-600 text-lg">
            <a href="#">Home</a>
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
