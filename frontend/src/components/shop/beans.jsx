import Bean from "./oneBean";
import { beansArray } from "./beansAry";

function BeansStore() {
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

      {/* ================================ */}
      {/* ================================ */}
      {/* ================================ */}

      <div className="relative">
        <div className="absolute h-full bg-sectionColor w-full top-[60px]  rounded-xl"></div>
        <div className="flex flex-wrap max-w-[1200px] m-auto">
          {beansArray.map((bean) => (
            <div className="w-full sm:w-1/2 md:w-1/3 p-2" key={bean.id}>
              <Bean
                id={bean.id}
                price={bean.price}
                name={bean.name}
                stars={bean.stars}
                image={bean.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BeansStore;
