import Banner from "../components/Banner";
import FeaturedProperties from "../components/FeaturedProperties";
import HeroSection from "../components/HeroSection";
import PrimeNestMarquee from "../components/PrimeNestMarquee";
import PropertySearchFilter from "../components/PropertySearchFilter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PrimeNestMarquee />
      <Banner />
      <FeaturedProperties />
      <PropertySearchFilter />
    </>
  );
};

export default Home;