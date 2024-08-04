import beans from "../../assets/cofff2.png";
import useSelectedCoffee from "../zustandStore/selectedCoffee";
import useGetOneCoffee from "../../hooks/getOneCoffee";
import Sweeper from "./sweeper";

function Item() {
  const { selectedCoffee } = useSelectedCoffee();
  if (!selectedCoffee) {
    return <div>no details</div>;
  }
  // console.log(selectdCoffee);
  const { loading, data, error } = useGetOneCoffee();
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
        <div className="max-w-[1200px] m-auto flex flex-col sm:flex-row justify-center items-start sm:items-end">
          <div className="min-h-48 p-4 rounded-lg w-full sm:w-[100%] m-auto sm:m-0 mb-5 border-black relative">
            <img className="max-w-[350px] w-full" src={beans} alt="" />
          </div>
          <div className=" relative px-5 pb-5 w-full">
            <h1 className=" text-2xl font-bold">Coffee</h1>
            <h1 className="mt-[1vw]  text-coffeeColor text-4xl font-bold">
              {data.name}
            </h1>
            <p className="text-coffeeColor text-lg mt-2  ">
              {data.description}
            </p>
            <Sweeper />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
