import { LiaExclamationCircleSolid } from "react-icons/lia";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";

function PopularDrinks() {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className=" w-[50px] h-[2px] bg-gray-600 rounded-full"></div>
          <div className=" w-[60px] h-[2px] bg-gray-600 my-[1px] rounded-full"></div>
        </div>
        <h1 className="text-center text-xl m-10 font-bold">Popular drinks</h1>
        <div className="flex flex-col items-center">
          <div className=" w-[50px] h-[2px] bg-gray-600 rounded-full"></div>
          <div className=" w-[60px] h-[2px] bg-gray-600 my-[1px] rounded-full"></div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute h-full bg-sectionColor w-full top-[60px]  rounded-xl"></div>
        <div className="flex flex-col sm:flex-row">
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
        </div>
      </div>
    </div>
  );
}

export default PopularDrinks;
