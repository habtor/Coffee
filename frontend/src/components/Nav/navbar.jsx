import { useState, useEffect } from "react";
import { GoPerson } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import useCartStore from "../zustandStore/cartStore";
import logo from "../../assets/logo.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [scrolled, setScrolled] = useState(false);

  const cart = useCartStore((state) => state.cart);

  const handleMenu = () => {
    if (!isMobile && !showMenu) return;
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setShowMenu(false);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex flex-col m-auto items-center justify-between font-bold text-sm bg-main sticky top-0 p-3 z-20 w-[306px] sm:w-full transition-colors duration-300 ${
        scrolled ? "bg-navColor text-white" : "bg-black"
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-[1200px]">
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
          {!isMobile && (
            <Link to={"profile"}>
              {" "}
              <GoPerson className="text-black text-lg" />
            </Link>
          )}
        </div>

        <Link className=" hidden sm:block" to="/">
          <li className=" hidden sm:block">Home</li>
        </Link>
        <Link className=" hidden sm:block" to="/shop">
          <li className=" hidden sm:block">Products</li>
        </Link>
        <Link to="/">
          <img src={logo} alt="" className="h-20 rounded-full" />
        </Link>
        <Link className=" hidden sm:block" to="/addItem">
          <li className=" hidden sm:block">About us</li>
        </Link>
        <li className=" hidden sm:block">Contact us</li>
        <Link to="/cart">
          <div className="bg-btnColor h-8 w-8 flex items-center justify-center rounded-lg relative">
            <HiOutlineShoppingCart className=" text-black text-lg" />
            <div
              className={`${
                !cart.length ? "hidden" : ""
              } absolute left-[-5px] bottom-[-5px] h-4 w-4 bg-coffeeColor text-center rounded-full text-white`}
            >
              {cart.length}
            </div>
          </div>
        </Link>
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
