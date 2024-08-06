import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import useSelectedCoffee from "../zustandStore/selectedCoffee";
import useGetCoffee from "../../hooks/getAllCoffee";
import { useState } from "react";

function Item() {
  const [count, setCount] = useState(0);

  const handleLeft = () => {
    setCount((prevCount) =>
      prevCount === 0 ? data.length - 1 : prevCount - 1
    );
  };

  const handleRight = () => {
    setCount((prevCount) =>
      prevCount === data.length - 1 ? 0 : prevCount + 1
    );
  };

  const getIndex = (index) => (index + data.length) % data.length;
  const { selectedCoffee } = useSelectedCoffee();
  if (!selectedCoffee) {
    return <div>no details</div>;
  }

  const { loading, data, error } = useGetCoffee();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mt-16 ">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className=" w-[50px] h-[2px] bg-gray-600 rounded-full"></div>
          <div className=" w-[60px] h-[2px] bg-gray-600 my-[1px] rounded-full"></div>
        </div>
        <h1 className="text-center text-xl m-10 font-bold">Product Details</h1>
        <div className="flex flex-col items-center">
          <div className=" w-[50px] h-[2px] bg-gray-600 rounded-full"></div>
          <div className=" w-[60px] h-[2px] bg-gray-600 my-[1px] rounded-full"></div>
        </div>
      </div>

      <div className="bg-sectionColor h-full w-full rounded-xl">
        <div className="max-w-[1200px] m-auto flex flex-col sm:flex-row justify-center items-start sm:items-center">
          <div className=" relative p-5 w-full">
            <h1 className=" text-2xl font-bold">Coffee</h1>
            <h1 className="mt-[1vw]  text-coffeeColor text-4xl font-bold">
              {data[getIndex(count + 1)].name}
            </h1>
            <p className="text-coffeeColor text-lg mt-2  ">
              {data[getIndex(count + 1)].description}
            </p>
          </div>
          <div className="min-h-48 p-4 rounded-lg w-full sm:w-[100%] m-auto sm:m-0 mb-5 relative ">
            <img
              className="max-w-[350px] w-full"
              src={data[getIndex(count + 1)].image}
              alt=""
            />
            <div className="flex items-end sm:ml-10">
              <div className="flex items-end">
                <div className="flex items-center">
                  <button
                    onClick={handleLeft}
                    className="bg-btnColor h-7 w-7 rounded-full text-center cursor-pointer flex items-center justify-center"
                  >
                    <FaArrowLeft className="text-xs" />
                  </button>
                  <div className="m-2 h-20 w-14 border-[1px] border-black rounded-lg">
                    <img
                      className="p-1"
                      src={data[getIndex(count)].image}
                      alt=""
                    />
                  </div>
                </div>
                <div className="m-2 h-24 w-16 border-[1px] border-black rounded-lg">
                  <img src={data[getIndex(count + 1)].image} alt="" />
                </div>
                <div className="flex items-center">
                  <div className="m-2 h-20 w-14 border-[1px] border-black rounded-lg">
                    <img
                      className="p-1"
                      src={data[getIndex(count + 2)].image}
                      alt=""
                    />
                  </div>
                  <button
                    onClick={handleRight}
                    className="bg-btnColor h-7 w-7 rounded-full text-center cursor-pointer flex items-center justify-center"
                  >
                    <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
