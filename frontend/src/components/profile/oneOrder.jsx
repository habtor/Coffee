import { AiFillStar } from "react-icons/ai";

function OneOrder({ id, name, price, stars, image }) {
  return (
    <>
      <div className=" p-4 pb-2 rounded-lg sm:w-full m-auto mb-5 sm:mb-0 sm:flex justify-around items-center text-center">
        <div>
          <img src={image} alt="" className="rounded-lg h-48 m-auto " />
        </div>
        <div className="mt-4 sm:mt-0">
          <p className="text-gray-400">Product</p>
          <p className="font-bold">{name}</p>
        </div>
        <div>
          <p className="text-gray-400">Price</p>
          <p className="font-bold">{price}</p>
        </div>
        <div>
          <p className="text-gray-400">Date of order</p>
          <p className="font-bold">{2002}</p>
        </div>
        <div>
          <p className="text-gray-400">My rating</p>
          <div className="flex text-xl justify-center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
      </div>
    </>
  );
}

export default OneOrder;
