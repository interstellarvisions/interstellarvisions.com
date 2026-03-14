import { motion, Transition } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
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

const gridStyle = {
  backgroundImage: `linear-gradient(rgba(103,232,249,0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(103,232,249,0.15) 1px, transparent 1px)`,
  backgroundSize: "60px 60px",
};

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <style>{shimmerStyle}</style>

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0a0a1a, #050510, #000000)" }} />
        <div className="absolute inset-0 opacity-10" style={gridStyle} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a1a]" />
      </div>

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