import { useState, useEffect, Suspense, lazy } from "react";
import Header from "../components/Header";
import CosmicBackground from "../components/CosmicBackground";
import HeroSection from "../components/HeroSection";

// Lazy load these components - they load only when scrolled into view
const WhatWeCreate = lazy(() => import("../components/WhatWeCreate"));
const OurWork = lazy(() => import("../components/OurWork"));
const DigitalCreators = lazy(() => import("../components/DigitalCreators"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const FAQ = lazy(() => import("../components/FAQ"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));

// Loading placeholder while component loads
function SectionLoader() {
  return <div className="min-h-screen" />;
}

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
        
        <Suspense fallback={<SectionLoader />}>
          <WhatWeCreate />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <OurWork />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <DigitalCreators />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <AboutUs />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}