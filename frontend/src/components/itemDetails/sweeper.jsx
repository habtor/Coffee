import { useState } from "react";
import useGetCoffee from "../../hooks/getAllCoffee";

function Sweeper() {
  const [count, setCount] = useState(0);

  const { data } = useGetCoffee();
  console.log(data);
  if (!data) {
    return <div>Loading...</div>;
  }
 

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

  return (
    <div className="flex items-end sm:ml-10">
      <div className="flex items-end">
        <div className="flex items-center">
          <button
            onClick={handleLeft}
            className="bg-btnColor h-7 w-7 rounded-full text-center cursor-pointer"
          >
            {"<"}
          </button>
          <div className="m-2 h-20 w-14 border-[1px] border-black rounded-lg">
            <img className="p-1" src={data[getIndex(count)].image} alt="" />
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
            className="bg-btnColor h-7 w-7 rounded-full text-center cursor-pointer"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sweeper;
