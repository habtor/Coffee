import beans from "../assets/cofff2.png";
import useSelectedCoffee from "./zustandStore/selectedCoffee";
import useGetOneCoffee from "../hooks/getOneCoffee";

function Item() {
  const { selectedCoffee } = useSelectedCoffee();
  if (!selectedCoffee) {
    return <div>no no</div>;
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
        <div className="max-w-[1200px] m-auto flex flex-col sm:flex-row justify-center items-center">
          <div className="min-h-48 p-4 rounded-lg w-full sm:w-[100%] m-auto sm:m-0 mb-5 border-black relative">
            <img className="w-full" src={beans} alt="" />
          </div>
          <div className=" relative p-5 ">
            <h1 className=" xl:text-[2vw] md:text-2xl text-xl font-bold">
              Coffee
            </h1>
            <h1 className="mt-[1vw] xl:text-[1.5vw] text-coffeeColor text-xl font-bold">
              {data.name}
            </h1>
            <p className="text-coffeeColor text-lg mt-2  sm:mt-[1vw]">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
