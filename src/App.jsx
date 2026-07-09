import React from 'react'
import NavbarMobile from './components/NavbarMobile';
import Navbar from './components/ui/Navbar';
import "./index.css";
import HeroSection from './components/HeroSection';
import PropertySearchFilter from './components/PropertySearchFilter';


function App() {
  return (
    <>
      {/* <NavbarMobile /> */}
      <Navbar />
      <HeroSection />
      <PropertySearchFilter />
    </>
  )
}

export default App; 
