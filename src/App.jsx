import React from 'react'
import NavbarMobile from './components/NavbarMobile';
import Navbar from './components/ui/Navbar';
import "./index.css";
import HeroSection from './components/HeroSection';
import PropertySearchFilter from './components/PropertySearchFilter';
import FeaturedProperties from './components/FeaturedProperties';


function App() {
  return (
    <>
      {/* <NavbarMobile /> */}
      <Navbar />
      <HeroSection />
      <PropertySearchFilter />
      <FeaturedProperties />
    </>
  )
}

export default App; 
