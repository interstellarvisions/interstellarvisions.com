import { useEffect, useRef, useState } from "react";
import { motion, Transition } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useSafari } from "../hooks/useSafari";
import { useParticles } from "../hooks/useParticles";

const cosmicTransition: Transition = {
  duration: 0.8,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

const gridStyle = {
  backgroundImage: `linear-gradient(rgba(167,139,250,0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(167,139,250,0.08) 1px, transparent 1px)`,
  backgroundSize: "60px 60px",
};

const PHRASES = [
  "AI-Powered Creative Content That Converts",
  "Where Creativity Meets Intelligence",
  "AI Creativity. Real Results.",
  "Creative Agency Powered By The Future",
];

function useCyclingTypewriter(phrases: string[], typeSpeed = 38, deleteSpeed = 22, pauseMs = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typeSpeed);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), deleteSpeed);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex, phrases, typeSpeed, deleteSpeed, pauseMs]);

  return displayed;
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticles(canvasRef, { count: 160, speed: 0.18, opacity: 0.55 });
  return <canvas ref={canvasRef} className="particle-canvas" />;
}

function ConsultationButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="border-pulse-btn group relative px-10 py-4 rounded-full text-white font-semibold tracking-widest overflow-hidden">
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(ellipse at center, rgba(124,58,237,0.12) 0%, transparent 70%)" }} />
      <span className="relative z-10 flex items-center gap-2">
        BOOK A FREE CONSULTATION
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
      </span>
    </button>
  );
}

const Background = () => (
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0d0818, #080510, #050310)" }} />
    <div className="absolute inset-0 opacity-100" style={gridStyle} />
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(124,58,237,0.08) 0%, transparent 65%)" }} />
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#080510]" />
  </div>
);

const ScrollIndicator = ({ animated }: { animated: boolean }) => (
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1" style={{ zIndex: 10 }}>
    <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(103,232,249,0.4)" }}>Scroll</span>
    {animated ? (
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
        <ChevronDown size={28} style={{ color: "rgba(103,232,249,0.4)" }} />
      </motion.div>
    ) : (
      <ChevronDown size={28} style={{ color: "rgba(103,232,249,0.4)" }} />
    )}
  </div>
);

export default function HeroSection() {
  const isSafari = useSafari();
  const displayed = useCyclingTypewriter(PHRASES);
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  const subtitle = (
    <p className="text-xl md:text-2xl mb-10" style={{ color: "rgba(196,181,253,0.6)", minHeight: "2rem" }}>
      {displayed}<span className="cursor-blink" />
    </p>
  );

  if (isSafari) {
    return (
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <Background />
        <ParticleField />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6 gradient-text-static">
            VISION BEYOND<br />THE STARS
          </h1>
          {subtitle}
          <ConsultationButton onClick={scrollToContact} />
        </div>
        <ScrollIndicator animated={false} />
      </section>
    );
  }

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <Background />
      <ParticleField />
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...cosmicTransition, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6 shimmer-text"
        >
          VISION BEYOND<br />THE STARS
        </motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.8 }}>
          {subtitle}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ ...cosmicTransition, delay: 0.7 }}>
          <ConsultationButton onClick={scrollToContact} />
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}>
        <ScrollIndicator animated={true} />
      </motion.div>
    </section>
  );
}
