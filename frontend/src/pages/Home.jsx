import HeroSection from "../components/heroSection";
import Navbar from "../components/navbar";
import PopularDrinks from "../components/popularDrinks";

function Home() {
  return (
    <div className="relative sm:w-full max-w-[1200px] w-[306px] m-auto h-[8000px] ">
      <Navbar />
      <HeroSection />
      <PopularDrinks />
    </div>
  );
}

export default Home;
