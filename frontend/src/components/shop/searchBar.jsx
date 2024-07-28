import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function SearchBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handelSortClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <div className="flex items-center p-2 pl-4 rounded-lg bg-sectionColor">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow outline-none bg-sectionColor text-yellow-800 "
        />
        <div className=" cursor-pointer ">
          <IoSearchOutline
            size={24}
            className="text-gray-500 hover:text-yellow-700"
          />
        </div>
      </div>
      {/* ================= */}
      {/* ========Buttons========= */}
      <div className="mt-4 ">
        <div className="flex justify-between">
          <div>
            <button className="bg-sectionColor rounded-md px-3 py-1 hover:text-yellow-700 ">
              Coffee
            </button>
            <button className="bg-sectionColor rounded-md px-3 py-1 hover:text-yellow-700  ml-2">
              Drinks
            </button>
          </div>
          <div
            className={`${
              showMenu ? "rounded-b-none" : ""
            } relative bg-sectionColor px-3 py-1  cursor-pointer w-20 rounded-md `}
          >
            <div
              onClick={handelSortClick}
              className="flex items-center justify-between hover:text-yellow-700"
            >
              Sort <MdOutlineKeyboardArrowDown />
            </div>
            <ul
              className={`${
                !showMenu ? "hidden" : "block"
              } absolute mt-1 bg-sectionColor w-20 left-0 text-center rounded-b-md`}
            >
              <li className="hover:text-yellow-700 hover:bg-btnColor">
                High price
              </li>
              <li className="hover:text-yellow-700 hover:bg-btnColor hover:rounded-b-md">
                Low price
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 text-center">15 Items</div>
      </div>
    </div>
  );
}

export default SearchBar;
