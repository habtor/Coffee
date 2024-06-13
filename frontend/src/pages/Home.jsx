import HeroSection from "../components/heroSection";
import Navbar from "../components/navbar";
import PopularDrinksSection from "../components/drinks/popularDrinksSection";
import PopularCoffeBeans from "../components/beans/popularCoffeBeansSection";

function Home() {
  return (
    <div className="relative sm:w-full max-w-[1200px] w-[306px] m-auto h-[8000px] ">
      <Navbar />
      <HeroSection />
      <PopularDrinksSection />
      <PopularCoffeBeans />
    </div>
  );
}

export default Home;
