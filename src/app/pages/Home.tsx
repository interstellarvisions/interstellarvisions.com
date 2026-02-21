import { useState, useEffect } from "react";
import Header from "../components/Header";
import CosmicBackground from "../components/CosmicBackground";
import HeroSection from "../components/HeroSection";
import WhatWeCreate from "../components/WhatWeCreate";
import OurWork from "../components/OurWork";
import DigitalCreators from "../components/DigitalCreators";
import AboutUs from "../components/AboutUs";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
}, []);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div className="bg-[#0a0a1a] text-white min-h-screen relative">
      <CosmicBackground />
      <div className="relative z-10 bg-transparent">
        <Header scrolled={scrolled} />
        <HeroSection />
        <WhatWeCreate />
        <OurWork />
        <DigitalCreators />
        <AboutUs />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}