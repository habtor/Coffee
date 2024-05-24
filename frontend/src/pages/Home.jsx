import Navbar from "../components/navbar";
import beans from "../assets/beans2.png";

function Home() {
  return (
    <div className=" max-w-[1200px] m-auto h-[2000px] ">
      <Navbar />
      <h1 className="text-6xl text-center mt-24">
        Saleh’s Best <br /> Yemeni Coffee in Town
      </h1>

      <img src={beans} alt="Coffee beans" />
    </div>
  );
}

export default Home;
