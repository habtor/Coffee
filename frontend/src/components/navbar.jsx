import { useState, useEffect } from "react";
import { GoPerson } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const handleMenu = () => {
    if (!isMobile && !showMenu) return;
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setShowMenu(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`flex flex-col m-auto items-center justify-between font-bold text-sm bg-main sticky top-0 py-3 z-10`}
    >
      <div className="flex items-center justify-between w-full">
        <div
          className="bg-btnColor h-8 w-8 flex items-center justify-center rounded-lg"
          onClick={handleMenu}
        >
          {isMobile &&
            (showMenu ? (
              <AiOutlineClose className="text-black text-lg" />
            ) : (
              <AiOutlineMenu className="text-black text-lg" />
            ))}
          {!isMobile && <GoPerson className="text-black text-lg" />}
        </div>
        <li className=" hidden sm:block">Home</li>
        <li className=" hidden sm:block">Products</li>

        <img
          src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUrOuxTLlno4UizjDyq8IhFZTT0tE-PVcOT24RNjJ2A5IbRwJOvUEMT7SHY4BZYcikYG5ytDPCV2Vj749-R9nYxV-Lu2KDwFljVigT2KpZfPVo3E9H9rf1TA"
          alt=""
          className="h-16 rounded-full"
        />
        <li className=" hidden sm:block">About us</li>
        <li className=" hidden sm:block">Contact us</li>
        <div className="bg-btnColor h-8 w-8 flex items-center justify-center rounded-lg">
          <HiOutlineShoppingCart className=" text-black text-lg" />
        </div>
      </div>
      <div
        className={`${
          showMenu ? "absolute top-20 text-center bg-main w-full" : "hidden"
        }`}
      >
        <ul className=" cursor-pointer">
          <li>Home</li>
          <li>Products</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
