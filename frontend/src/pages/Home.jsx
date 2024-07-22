import HeroSection from "../components/heroSection";
import PopularDrinksSection from "../components/drinks/popularDrinksSection";
import PopularCoffeBeans from "../components/beans/popularCoffeBeansSection";
import ReviewsSection from "../components/reviews/reviewSection";
import ContactUs from "../components/contacts/contactUsSection";

function Home() {
  return (
    <>
      <div className="relative sm:w-full w-[306px] m-auto  ">
        <HeroSection />
        <PopularDrinksSection />
        <PopularCoffeBeans />
        <ReviewsSection />
        <ContactUs />
      </div>
    </>
  );
}

export default Home;
