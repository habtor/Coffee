import Item from "./item";
import Total from "./total";
import useCartStore from "../stores/cartStore";

function CartItems() {
  const cart = useCartStore((state) => state.cart);
  console.log(cart);
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className=" w-[50px] h-[2px] bg-gray-600 rounded-full"></div>
          <div className=" w-[60px] h-[2px] bg-gray-600 my-[1px] rounded-full"></div>
        </div>
        <h1 className="text-center text-xl m-10 font-bold">Cart</h1>
        <div className="flex flex-col items-center">
          <div className=" w-[50px] h-[2px] bg-gray-600 rounded-full"></div>
          <div className=" w-[60px] h-[2px] bg-gray-600 my-[1px] rounded-full"></div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute h-full bg-sectionColor w-full top-[60px]  rounded-xl"></div>
        <div className="flex flex-col max-w-[1200px] m-auto">
          <div className="bg-cardColor p-4 rounded-lg w-64 m-auto mb-5 border-black relative">
            {cart.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                quantity={item.quantity}
              />
            ))}
            <Item />
            <Item />
          </div>
        </div>
        <div>
          <Total />
        </div>
      </div>
    </div>
  );
}

export default CartItems;
