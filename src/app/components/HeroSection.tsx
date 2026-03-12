import { motion, Transition } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { useSafari } from "../hooks/useSafari";

const cosmicTransition: Transition = {
  duration: 0.8,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

const shimmerStyle = `
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 10px rgba(6,182,212,0.2), 0 0 20px rgba(6,182,212,0.1); }
    50% { box-shadow: 0 0 20px rgba(6,182,212,0.5), 0 0 40px rgba(6,182,212,0.3); }
  }
  .shimmer-hero {
    background: linear-gradient(90deg, #ffffff 0%, #ffffff 35%, #67e8f9 50%, #ffffff 65%, #ffffff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s linear infinite;
  }
  .pulse-button {
    animation: pulse-glow 2.5s ease-in-out infinite;
  }
`;

export default function HeroSection() {
  const isSafari = useSafari();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo(() => {
    if (isSafari) return [];
    return Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }, [isSafari]);

  // ─── SAFARI: fully static, no animations, no shimmer ───
  if (isSafari) {
    return (
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Static background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a1a]" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(103,232,249,0.15) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(103,232,249,0.15) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Static dim orbs */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500"
            style={{ opacity: 0.05, filter: "blur(80px)" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600"
            style={{ opacity: 0.04, filter: "blur(80px)" }}
          />
        </div>

        {/* Static content — title is a fixed cyan-to-white gradient, no animation */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6"
            style={{
              background: "linear-gradient(to bottom, #ffffff 0%, #a5f3fc 60%, #67e8f9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            VISION BEYOND<br />THE STARS
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100/70 mb-10">
            AI-Powered Creative Content That Converts
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-10 py-4 border-2 border-cyan-400/50 rounded-full text-white font-semibold tracking-widest hover:bg-cyan-400/15 hover:border-cyan-400 overflow-hidden"
          >
            <span className="relative z-10">BOOK A FREE CONSULTATION →</span>
          </button>
        </div>

        {/* Static scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <span className="text-xs text-cyan-400/40 tracking-widest uppercase">Scroll</span>
          <ChevronDown size={28} className="text-cyan-400/40" />
        </div>
      </section>
    );
  }

  // ─── CHROME: full experience ───
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <style>{shimmerStyle}</style>

      <div className="absolute inset-0 z-0">
        {/* <video autoPlay muted loop playsInline className="w-full h-full object-cover" src="/videos/hero.mp4" /> */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a1a]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(103,232,249,0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(103,232,249,0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating particles */}
      {mounted && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-cyan-300"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                opacity: p.opacity,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [p.opacity, p.opacity * 2, p.opacity],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Animated orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.09, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600 blur-[120px]"
        />
      </div>

      {/* Animated content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...cosmicTransition, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6 shimmer-hero"
        >
          VISION BEYOND<br />THE STARS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...cosmicTransition, delay: 0.5 }}
          className="text-xl md:text-2xl text-cyan-100/70 mb-10"
        >
          AI-Powered Creative Content That Converts
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...cosmicTransition, delay: 0.7 }}
        >
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="pulse-button group relative px-10 py-4 border-2 border-cyan-400/50 rounded-full text-white font-semibold tracking-widest transition-all duration-500 hover:bg-cyan-400/15 hover:border-cyan-400 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">BOOK A FREE CONSULTATION →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/15 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-cyan-400/40 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} className="text-cyan-400/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}