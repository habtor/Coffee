import { LiaExclamationCircleSolid } from "react-icons/lia";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";
import useCartStore from "../zustandStore/cartStore";
import { useState } from "react";
import { Link } from "react-router-dom";

function Bean({ id, name, price, stars, image }) {
  const [added, setAdded] = useState(false);

  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleAddToCart = () => {
    addToCart({ id, name, price, stars, image });
    setAdded(!added);
    if (added) {
      removeFromCart(id);
    }
  };
  return (
    <div className="bg-cardColor p-4 pb-2 rounded-lg w-56 m-auto mb-5 sm:mb-0 relative">
      <img src={image} alt="" className="rounded-lg h-48 m-auto" />
      <div className="mt-2">
        <div className="flex-col items-center justify-between my-1">
          <div className="font-bold flex flex-col justify-center items-center h-full">
            <h1>{name}</h1>
            <h1>${price}</h1>
            <div className="flex text-xl">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>

          <div className="flex items-cesnter justify-center mt-2">
            <Link to={`/item/`} className="text-xs text-gray-500">
              <div className="bg-btnColor h-8 w-8 flex items-center justify-center rounded-lg mb-1 mr-2">
                <LiaExclamationCircleSolid className="text-black text-lg" />
              </div>
            </Link>
            <div
              alt="add to cart"
              onClick={handleAddToCart}
              className={`cursor-pointer h-8 w-8 flex items-center justify-center rounded-lg ${
                added ? "bg-orange-900" : "bg-btnColor"
              }`}
            >
              <HiOutlineShoppingCart
                className={` text-lg ${added ? "text-gray-300" : "text-black"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bean;
