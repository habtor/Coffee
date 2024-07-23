import { useState } from "react";
import { FiMinusCircle } from "react-icons/fi";

function Item({ id, name, price, image }) {
  const [quantity, setQuantity] = useState(1);
  console.log(quantity);
  const increaseCount = () => {
    setQuantity(quantity + 1);
  };
  const decreaseCount = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="flex items-center justify-between py-2 w-full">
      <img
        src={image}
        alt=""
        className="rounded-lg h-28 w-20 border border-black"
      />
      <div>
        <p>Vanilla Late</p>
        <p>${price}</p>
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
        <p className=" opacity-0">a</p>{" "}
        {/* This is a hack to maintain the layout */}
        <p className="font-bold">{quantity * price}</p>
        <div className="bg-btnColor h-6 w-6 flex items-center justify-center rounded-lg">
          <FiMinusCircle className="text-black text-lg" />
        </div>
      </div>
    </div>
  );
}

export default Item;
