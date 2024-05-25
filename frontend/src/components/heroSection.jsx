import beans from "../assets/beans2.png";

function HeroSection() {
  return (
    <div className="reative h-[500px] sm:h-[800px] lg:sm:h-[1000px] ">
      <h1 className="text-4xl text-center mt-24 sm:text-7xl">
        The Best <br /> Yemeni Coffee in Town
      </h1>

      <img
        src={beans}
        alt="Coffee beans"
        className="absolute top-69 left-1/2 transform -translate-x-1/2 w-[1200px] min-w-[500px]"
      />
    </div>
  );
}

export default HeroSection;
