import Bean from "./oneBean";
// import { beansArray } from "./beansAry";
import useGetCoffee from "../../hooks/getAllCoffee";
import useSelectedCoffee from "../zustandStore/selectedCoffee";

function BeansStore() {
  const { loading, data, error } = useGetCoffee();
  const { selectedCoffee, setSelectedCoffee } = useSelectedCoffee();

  console.log(selectedCoffee);

  const handleSelectCoffee = (coffee) => {
    setSelectedCoffee(coffee);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="mt-16">
      <div className="relative">
        <div className="absolute h-full bg-sectionColor w-full top-[60px]  rounded-xl"></div>
        <div className="flex flex-wrap max-w-[1200px] m-auto">
          {data.map((bean) => (
            <div
              onClick={() => handleSelectCoffee(bean._id)}
              className="w-full sm:w-1/2 md:w-1/3 p-2"
              key={bean._id}
            >
              <Bean
                price={bean.price}
                name={bean.name}
                rating={bean.stars}
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
