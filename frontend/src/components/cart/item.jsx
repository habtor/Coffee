import { useState } from "react";
import { FiMinusCircle } from "react-icons/fi";
import useCartStore from "../zustandStore/cartStore";

function Item({ id, name, price, image }) {
  const [quantity, setQuantity] = useState(1);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleRemoveToCart = () => {
    removeFromCart(id);
  };
  const increaseCount = () => {
    setQuantity(quantity + 1);
  };
  const decreaseCount = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="flex items-center justify-between py-2 w-full">
      <div className="flex items-center">
        <img
          src={image}
          alt=""
          className="rounded-lg h-28 w-20 border border-black"
        />
        <div className="hidden sm:block ml-2">
          <p>{name}</p>
          <p>${price}</p>
        </div>
      </div>
      <div className="sm:flex items-center">
        <div className="sm:hidden">
          <p className=" font-semibold">Vanilla Late</p>
          <p className="text-gray-700">${price}</p>
        </div>
        <div className="bg-btnColor h-5 w-16 flex items-center justify-center rounded-lg">
          <div className="flex justify-between w-full font-bold text-xs p-1 pt-2">
            <button onClick={increaseCount}>+</button>
            <p>{quantity}</p>
            <button onClick={decreaseCount}>-</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        {/* This is a hack to maintain the layout */}
        <p className=" opacity-0 sm:hidden">a</p>{" "}
        {/* This is a hack to maintain the layout */}
        <p className="font-bold w-10">${(quantity * price).toFixed(2)}</p>
        <div
          onClick={handleRemoveToCart}
          className="bg-btnColor h-6 w-6 flex items-center justify-center rounded-lg cursor-pointer hover:bg-opacity-70"
        >
          <FiMinusCircle className="text-black text-lg" />
        </div>
      </div>
    </div>
  );
}

export default Item;
