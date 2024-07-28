import Bean from "./oneBean";
import { beansArray } from "./beansAry";

function BeansStore() {
  return (
    <div className="mt-16">
      

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
