import { motion, Transition } from "framer-motion";
import { ChevronDown } from "lucide-react";

const cosmicTransition: Transition = {
  duration: 0.8,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cosmic overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a1a]/50 to-[#0a0a1a]"></div>
        {/* Animated cosmic grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(103, 232, 249, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(103, 232, 249, 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...cosmicTransition, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-cyan-200"
        >
          VISION BEYOND THE STARS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...cosmicTransition, delay: 0.4 }}
          className="text-xl md:text-2xl text-cyan-100/80 mb-8"
        >
          AI-Powered Creative Content That Converts
        </motion.p>

        {/* Book a Free Consultation Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...cosmicTransition, delay: 0.6 }}
          className="mb-12"
        >
<button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="group relative px-8 py-4 border-2 border-cyan-400/40 rounded-full text-white font-medium tracking-wide transition-all duration-700 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 overflow-hidden">            <span className="relative z-10">BOOK A FREE CONSULTATION →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...cosmicTransition, delay: 0.8 }}
          className="border border-cyan-400/20 rounded-lg p-12 bg-black/20 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent"></div>
          <p className="text-lg text-cyan-100/60 tracking-wide relative z-10">
            VIDEO SHOWCASE LOOPING HERE
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator - Floating animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} className="text-cyan-400/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}