import PopularCoffeeBeans from "./popularCoffeeBean";
import { beansArray } from "./beans";
import useGetCoffee from "../../hooks/getAllCoffee";

function PopularCoffeBeans() {
  const { loading, data, error } = useGetCoffee();
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="mt-16">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className=" w-[50px] h-[2px] bg-gray-600 rounded-full"></div>
          <div className=" w-[60px] h-[2px] bg-gray-600 my-[1px] rounded-full"></div>
        </div>
        <h1 className="text-center text-xl m-10 font-bold">Coffee Beans</h1>
        <div className="flex flex-col items-center">
          <div className=" w-[50px] h-[2px] bg-gray-600 rounded-full"></div>
          <div className=" w-[60px] h-[2px] bg-gray-600 my-[1px] rounded-full"></div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute h-full bg-sectionColor w-full top-[60px]  rounded-xl"></div>
        <div className="flex flex-col sm:flex-row max-w-[1200px] m-auto">
          {data.map(
            (bean) =>
              bean.rating > 12 && (
                <PopularCoffeeBeans
                  key={bean._id}
                  id={bean._id}
                  price={bean.price}
                  name={bean.name}
                  stars={bean.stars}
                  image={bean.image}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default PopularCoffeBeans;
