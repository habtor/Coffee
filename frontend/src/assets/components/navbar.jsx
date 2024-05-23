import { useState, useEffect } from "react";
import { GoPerson } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi2";

function Navbar() {
  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    });
  }, []);

  return (
    <nav
      className={`flex m-auto items-center justify-between px-12 font-bold text-sm ${
        navScroll ? "bg-navColor text-white " : ""
      } sticky top-0 lg:px-[300px] py-3`}
    >
      <div className="bg-btnColor h-8 w-8 flex items-center justify-center rounded-lg">
        <GoPerson className="text-black text-lg" />
      </div>

      <p>Home</p>
      <p>Products</p>

      <img
        src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUrOuxTLlno4UizjDyq8IhFZTT0tE-PVcOT24RNjJ2A5IbRwJOvUEMT7SHY4BZYcikYG5ytDPCV2Vj749-R9nYxV-Lu2KDwFljVigT2KpZfPVo3E9H9rf1TA"
        alt=""
        className="h-16 rounded-full"
      />

      <p>About</p>
      <p>Contact</p>

      <div className="bg-btnColor h-8 w-8 flex items-center justify-center rounded-lg">
        <HiOutlineShoppingCart className=" text-black text-lg" />
      </div>
    </nav>
  );
}

export default Navbar;
