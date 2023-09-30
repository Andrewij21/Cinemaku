import { AiOutlineUser } from "react-icons/ai";
const NavBar = () => {
  return (
    <header className="mb-6">
      <nav className=" py-4 flex justify-between w-full shadow-xl container items-center ">
        <h1 className="text-5xl uppercase tracking-wide text-rose-600 font-bold">
          Cinemaku
        </h1>
        <ul className="flex justify-center items-center gap-12 text-slate-200">
          <li className="hover:text-rose-600 text-lg">
            <a href="#">Home</a>
          </li>
          <li className="">
            <input
              type="text"
              className="py-2 px-4 rounded-md outline-none text-black cursor-pointer hover:ring hover:ring-rose-600 
               focus:ring focus:ring-rose-600 "
              placeholder="Search film..."
            />
          </li>
          <li className="text-xl cursor-pointer hover:text-rose-600">
            <AiOutlineUser />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
