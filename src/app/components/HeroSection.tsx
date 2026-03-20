import { useEffect, useRef, useState } from "react";
import { motion, Transition } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
  @keyframes border-pulse {
    0%, 100% {
      box-shadow:
        0 0 6px 1px rgba(6,182,212,0.2),
        0 0 0px 0px rgba(6,182,212,0),
        inset 0 0 6px rgba(6,182,212,0.05);
      border-color: rgba(6,182,212,0.3);
    }
    50% {
      box-shadow:
        0 0 16px 4px rgba(6,182,212,0.55),
        0 0 40px 6px rgba(6,182,212,0.15),
        inset 0 0 14px rgba(6,182,212,0.1);
      border-color: rgba(6,182,212,0.95);
    }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .shimmer-hero {
    background: linear-gradient(90deg, #ffffff 0%, #ffffff 35%, #67e8f9 50%, #ffffff 65%, #ffffff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s linear infinite;
  }
  .border-pulse-btn {
    border: 1.5px solid rgba(6,182,212,0.3);
    animation: border-pulse 3.5s ease-in-out infinite;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }
  .border-pulse-btn:hover {
    animation: none;
    border-color: rgba(6,182,212,1);
    box-shadow:
      0 0 20px 5px rgba(6,182,212,0.5),
      0 0 50px 10px rgba(6,182,212,0.15),
      inset 0 0 18px rgba(6,182,212,0.12);
    transform: scale(1.05);
  }
  .cursor-blink {
    display: inline-block;
    width: 2px;
    height: 1.1em;
    background: rgba(103,232,249,0.8);
    margin-left: 2px;
    vertical-align: middle;
    border-radius: 1px;
    animation: blink 0.9s ease-in-out infinite;
  }
`;

const staticTitleStyle = {
  background: "linear-gradient(to bottom, #ffffff 0%, #a5f3fc 60%, #67e8f9 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const gridStyle = {
  backgroundImage: `linear-gradient(rgba(103,232,249,0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(103,232,249,0.15) 1px, transparent 1px)`,
  backgroundSize: "60px 60px",
};

const PHRASES = [
  "AI-Powered Creative Content That Converts",
  "Where Creativity Meets Intelligence",
  "AI Creativity. Real Results.",
  "Creative Agency Powered By The Future",
];

// ─── Cycling Typewriter Hook ───
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

// ─── Star Field Canvas ───
function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    interface Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
      twinkleSpeed: number;
      twinkleOffset: number;
    }

    let stars: Star[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createStar = (randomY = false): Star => ({
      x: Math.random() * canvas.width,
      y: randomY ? Math.random() * canvas.height : -5,
      size: Math.random() * 1.4 + 0.2,
      opacity: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 0.35 + 0.08,
      twinkleSpeed: Math.random() * 0.018 + 0.004,
      twinkleOffset: Math.random() * Math.PI * 2,
    });

    const init = () => {
      resize();
      stars = Array.from({ length: 180 }, () => createStar(true));
    };

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      if (Math.random() < 0.25 && stars.length < 220) stars.push(createStar());
      stars = stars.filter((s) => s.y < canvas.height + 10);

      for (const star of stars) {
        star.y += star.speed;
        const twinkle = Math.sin(frame * star.twinkleSpeed + star.twinkleOffset);
        const alpha = star.opacity * (0.45 + 0.55 * ((twinkle + 1) / 2));

        const glow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 4);
        glow.addColorStop(0, `rgba(255,255,255,${alpha * 0.6})`);
        glow.addColorStop(1, `rgba(255,255,255,0)`);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

// ─── Premium Border Pulse Button ───
function ConsultationButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="border-pulse-btn group relative px-10 py-4 rounded-full text-white font-semibold tracking-widest overflow-hidden"
    >
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(ellipse at center, rgba(6,182,212,0.1) 0%, transparent 70%)",
        }}
      />
      <span className="relative z-10 flex items-center gap-2">
        BOOK A FREE CONSULTATION
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
      </span>
    </button>
  );
}

export default function HeroSection() {
  const isSafari = useSafari();
  const displayed = useCyclingTypewriter(PHRASES);

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  const subtitleContent = (
    <p className="text-xl md:text-2xl text-cyan-100/70 mb-10" style={{ minHeight: "2rem" }}>
      {displayed}
      <span className="cursor-blink" />
    </p>
  );

  // ─── SAFARI ───
  if (isSafari) {
    return (
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <style>{shimmerStyle}</style>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0a0a1a, #050510, #000000)" }} />
          <div className="absolute inset-0 opacity-10" style={gridStyle} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a1a]" />
        </div>
        <StarField />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6" style={staticTitleStyle}>
            VISION BEYOND<br />THE STARS
          </h1>
          {subtitleContent}
          <ConsultationButton onClick={scrollToContact} />
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1" style={{ zIndex: 10 }}>
          <span className="text-xs text-cyan-400/40 tracking-widest uppercase">Scroll</span>
          <ChevronDown size={28} className="text-cyan-400/40" />
        </div>
      </section>
    );
  }

  // ─── CHROME ───
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <style>{shimmerStyle}</style>

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0a0a1a, #050510, #000000)" }} />
        <div className="absolute inset-0 opacity-10" style={gridStyle} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a1a]" />
      </div>

      <StarField />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...cosmicTransition, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6 shimmer-hero"
        >
          VISION BEYOND<br />THE STARS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          {subtitleContent}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...cosmicTransition, delay: 0.7 }}
        >
          <ConsultationButton onClick={scrollToContact} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ zIndex: 10 }}
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