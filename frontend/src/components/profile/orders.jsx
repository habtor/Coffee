import { beansArray } from "../shop/beansAry";
import OneOrder from "./oneOrder";

function Orders() {
  return (
    <div className="mt-16">
      <div className="relative">
        <div className="absolute h-full bg-sectionColor w-full top-[60px]  rounded-xl"></div>
        <div className="relative w-[250px] sm:w-full max-w-[1100px] m-auto bg-cardColor rounded-lg">
          {beansArray.map((bean) => (
            <div className=" p-2 m-auto" key={bean.id}>
              <OneOrder
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

export default Orders;
