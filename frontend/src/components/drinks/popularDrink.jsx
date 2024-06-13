import { LiaExclamationCircleSolid } from "react-icons/lia";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";

function PopularDrink() {
  return (
    <div className="bg-cardColor p-4 pb-2 rounded-lg w-56 m-auto mb-5 sm:mb-0 border-[1px] border-black relative">
      <img
        src="https://www.amorecoffee.co.uk/wp-content/uploads/2019/01/Enjoy.jpg"
        alt=""
        className="rounded-lg h-48 w-48 m-auto"
      />
      <div className="mt-2">
        <div className="flex items-center justify-between my-1">
          <div className="font-bold flex flex-col item bg-resd-300 h-full">
            <h1>Vanilla Latte</h1>
            <h1>$12.5</h1>
            <div className="flex text-xl">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>

          <div>
            <div className="bg-btnColor h-8 w-8 flex items-center justify-center rounded-lg mb-1">
              <LiaExclamationCircleSolid className="text-black text-lg" />
            </div>
            <div className="bg-btnColor h-8 w-8 flex items-center justify-center rounded-lg">
              <HiOutlineShoppingCart className="text-black text-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularDrink;
