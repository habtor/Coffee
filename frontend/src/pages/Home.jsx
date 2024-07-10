import HeroSection from "../components/heroSection";
import Navbar from "../components/navbar";
import PopularDrinksSection from "../components/drinks/popularDrinksSection";
import PopularCoffeBeans from "../components/beans/popularCoffeBeansSection";
import ReviewsSection from "../components/reviews/reviewSection";
import ContactUs from "../components/contacts/contactUsSection";
import Footer from "../components/footer/footer";

function Home() {
  return (
    <>
      <div className="relative sm:w-full max-w-[1200px] w-[306px] m-auto  ">
        <Navbar />
        <HeroSection />
        <PopularDrinksSection />
        <PopularCoffeBeans />
        <ReviewsSection />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

export default Home;
