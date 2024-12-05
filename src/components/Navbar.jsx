import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header className="screen-max-width w-full py-5 sm:px-10 px-5 flex justify-center items-center">
      <nav className="flex w-full ">
        <img src={appleImg} alt="apple-logo" width={18} height={18} />
        <div className="flex flex-1 justify-center">
          {navLists.map((navItem) => (
            <div key={navItem} className="max-sm:hidden px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all">{navItem}</div>
          ))}
        </div>
        <div className="flex items-center  gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" className="cursor-pointer" width={18} height={18} />
          <img src={bagImg} alt="shopping-cart" className="cursor-pointer" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
