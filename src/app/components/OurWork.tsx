import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { useSafari } from "../hooks/useSafari";

// ─── Asset imports ───
import aurora1 from "../../assets/work/Aurora/1.webp";
import aurora2 from "../../assets/work/Aurora/2.webp";
import aurora3 from "../../assets/work/Aurora/3.webp";
import aurora4 from "../../assets/work/Aurora/4.webp";
import aurora5 from "../../assets/work/Aurora/5.webp";
import aurora6 from "../../assets/work/Aurora/6.webp";
import aurora7 from "../../assets/work/Aurora/7.webp";
import aurora8 from "../../assets/work/Aurora/8.webp";

import amber1 from "../../assets/work/Amber/1.webp";
import amber2 from "../../assets/work/Amber/2.webp";
import amber3 from "../../assets/work/Amber/3.webp";
import amber4 from "../../assets/work/Amber/4.webp";
import amber5 from "../../assets/work/Amber/5.webp";
import amber6 from "../../assets/work/Amber/6.webp";
import amber7 from "../../assets/work/Amber/7.webp";
import amber8 from "../../assets/work/Amber/8.webp";
import amber9 from "../../assets/work/Amber/9.webp";

const shimmerStyle = `
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  .shimmer-work {
    background: linear-gradient(90deg, #ffffff 0%, #ffffff 35%, #67e8f9 50%, #ffffff 65%, #ffffff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s linear infinite;
  }
  .shimmer-sub {
    background: linear-gradient(90deg, #67e8f9 0%, #ffffff 40%, #67e8f9 60%, #ffffff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 6s linear infinite;
  }
  @keyframes pulse-play {
    0%, 100% { opacity: 0.7; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.08); }
  }
  .pulse-play {
    animation: pulse-play 2.5s ease-in-out infinite;
  }
`;

const staticTitleStyle = {
  background: "linear-gradient(to bottom, #ffffff 0%, #a5f3fc 60%, #67e8f9 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const staticSubStyle = {
  background: "linear-gradient(to right, #67e8f9 0%, #ffffff 50%, #67e8f9 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const portfolioItems = [
  {
    id: 1,
    comingSoon: false,
    title: "AURORA",
    shortDescription: "AI-generated luxury fashion editorial campaign",
    coverImage: aurora1,
    client: "Aurora",
    techniques: "AI Image Generation, AI Video Generation, Editorial Direction, Color Grading",
    description: "A fully AI-generated luxury fashion campaign produced for Aurora. Cold light. Platinum hair. The kind of silence that only exists in high-end editorials. Every frame was built from scratch using AI — no studio rental, no photographer, no production schedule. Just a brand identity distilled into visuals that feel like they belong in the pages of Vogue. This is what modern fashion content looks like when creativity is the only budget that matters.",
    videoUrl: "https://www.youtube.com/embed/Bd0_AV60lOc",
    images: [aurora1, aurora2, aurora3, aurora4, aurora5, aurora6, aurora7, aurora8],
  },
  {
    id: 2,
    comingSoon: false,
    title: "THE AMBER CASK",
    shortDescription: "Cinematic AI-generated fine dining commercial",
    coverImage: amber1,
    client: "The Amber Cask",
    techniques: "AI Video Generation, Cinematic Food Direction, Sound Design, Color Grading",
    description: "A fully AI-generated cinematic commercial produced for The Amber Cask, a premium fine dining establishment. The brief was simple: make people feel hunger before they understand why. Every shot was crafted to trigger a visceral response — raw Wagyu meeting cast iron, fire catching fat, the slow exhale of steam dissolving into darkness. No crew. No kitchen. No camera. Just AI and a creative vision sharp enough to make it real.",
    videoUrl: "https://www.youtube.com/embed/yR4vKe2DYWs",
    images: [amber1, amber2, amber3, amber4, amber5, amber6, amber7, amber8, amber9],
  },
  {
    id: 3,
    comingSoon: true,
    title: "PRODUCT VISUALS",
    shortDescription: "Stunning AI-generated product photography",
    coverImage: "https://images.unsplash.com/photo-1719176010035-17729577d496?w=800&h=500&fit=crop",
    client: "Luxury Goods Co.",
    techniques: "AI Image Generation, Color Grading, Compositing",
    description: "",
    videoUrl: "",
    images: [],
  },
  {
    id: 4,
    comingSoon: true,
    title: "SOCIAL CONTENT 01",
    shortDescription: "Viral-optimized short-form video content",
    coverImage: "https://images.unsplash.com/photo-1696695368125-fc0d809b4ab5?w=800&h=500&fit=crop",
    client: "",
    techniques: "",
    description: "",
    videoUrl: "",
    images: [],
  },
  {
    id: 5,
    comingSoon: true,
    title: "COMING SOON",
    shortDescription: "New project dropping soon",
    coverImage: "https://images.unsplash.com/photo-1658806283210-6d7330062704?w=800&h=500&fit=crop",
    client: "",
    techniques: "",
    description: "",
    videoUrl: "",
    images: [],
  },
  {
    id: 6,
    comingSoon: true,
    title: "COMING SOON",
    shortDescription: "New project dropping soon",
    coverImage: "https://images.unsplash.com/photo-1612000656409-16fcf948b2d9?w=800&h=500&fit=crop",
    client: "",
    techniques: "",
    description: "",
    videoUrl: "",
    images: [],
  },
];

function SafariCard({
  item,
  index,
  onClick,
}: {
  item: (typeof portfolioItems)[0];
  index: number;
  onClick: () => void;
}) {
  const number = String(index + 1).padStart(2, "0");
  const disabled = item.comingSoon;

  return (
    <div
      onClick={disabled ? undefined : onClick}
      className="relative rounded-xl aspect-video overflow-hidden"
      style={{
        cursor: disabled ? "default" : "pointer",
        border: disabled ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(6,182,212,0.5)",
      }}
    >
      <div className="relative w-full h-full bg-black">
        <img
          src={item.coverImage}
          alt={item.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: disabled ? "grayscale(1) brightness(0.25)" : "none" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: disabled
              ? "rgba(0,0,0,0.6)"
              : "linear-gradient(to top, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.45) 100%)",
          }}
        />
        <div className="absolute top-4 left-5 z-10">
          <span className="text-4xl font-bold leading-none" style={{ color: "rgba(255,255,255,0.06)" }}>
            {number}
          </span>
        </div>
        {disabled ? (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <span
              className="text-xs font-bold tracking-[0.25em] px-4 py-2 rounded-full"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.35)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              COMING SOON
            </span>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10">
              <Play className="ml-1 text-white" size={22} />
            </div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
          <h3
            className="text-base font-bold mb-1 tracking-wide"
            style={{ color: disabled ? "rgba(255,255,255,0.2)" : "#ffffff" }}
          >
            {item.title}
          </h3>
          <p
            className="text-xs leading-relaxed"
            style={{ color: disabled ? "rgba(255,255,255,0.12)" : "rgba(156,163,175,1)" }}
          >
            {item.shortDescription}
          </p>
        </div>
      </div>
    </div>
  );
}

function ChromeCard({
  item,
  index,
  onClick,
}: {
  item: (typeof portfolioItems)[0];
  index: number;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const number = String(index + 1).padStart(2, "0");
  const disabled = item.comingSoon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={disabled ? undefined : onClick}
      className="group relative rounded-xl aspect-video overflow-hidden"
      style={{
        cursor: disabled ? "default" : "pointer",
        border: disabled
          ? "1px solid rgba(255,255,255,0.08)"
          : hovered
          ? "1px solid rgba(6,182,212,0.9)"
          : "1px solid rgba(6,182,212,0.5)",
        transition: "border 0.4s ease",
      }}
    >
      <div className="relative w-full h-full bg-black">
        <img
          src={item.coverImage}
          alt={item.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{
            transform: hovered ? "scale(1.08)" : "scale(1)",
            filter: disabled ? "grayscale(1) brightness(0.25)" : "none",
          }}
        />
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            background: disabled
              ? "rgba(0,0,0,0.6)"
              : hovered
              ? "linear-gradient(to top, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.3) 100%)"
              : "linear-gradient(to top, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.45) 100%)",
          }}
        />

        {/* Scan line effect on hover */}
        {!disabled && (
          <motion.div
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none"
            initial={{ top: "100%", opacity: 0 }}
            animate={hovered ? { top: "0%", opacity: [0, 1, 0] } : { top: "100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}

        <div className="absolute top-4 left-5 z-10">
          <span
            className="text-4xl font-bold leading-none"
            style={{
              color: disabled
                ? "rgba(255,255,255,0.04)"
                : hovered
                ? "rgba(6,182,212,0.6)"
                : "rgba(255,255,255,0.08)",
              transition: "color 0.4s ease",
            }}
          >
            {number}
          </span>
        </div>

        {disabled ? (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <span
              className="text-xs font-bold tracking-[0.25em] px-4 py-2 rounded-full"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.35)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              COMING SOON
            </span>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            {/* pulse-play now uses transform+opacity only, no box-shadow */}
            <div
              className={`pulse-play w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                hovered ? "bg-cyan-500/40 scale-110" : "bg-white/10"
              }`}
            >
              <Play
                className="ml-1 transition-colors duration-300"
                style={{ color: hovered ? "#67e8f9" : "#ffffff" }}
                size={22}
              />
            </div>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
          <motion.div
            animate={hovered && !disabled ? { y: 0, opacity: 1 } : { y: 4, opacity: 0.85 }}
            transition={{ duration: 0.3 }}
          >
            <h3
              className="text-base font-bold mb-1 tracking-wide transition-colors duration-300"
              style={{
                color: disabled ? "rgba(255,255,255,0.2)" : hovered ? "#67e8f9" : "#ffffff",
              }}
            >
              {item.title}
            </h3>
            <p
              className="text-xs leading-relaxed"
              style={{ color: disabled ? "rgba(255,255,255,0.12)" : "rgba(156,163,175,1)" }}
            >
              {item.shortDescription}
            </p>
          </motion.div>
          {!disabled && (
            <div
              className="mt-3 h-[1px] bg-gradient-to-r from-cyan-500/0 via-cyan-400 to-cyan-500/0 transition-all duration-500"
              style={{ opacity: hovered ? 1 : 0, transform: hovered ? "scaleX(1)" : "scaleX(0)" }}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function OurWork() {
  const isSafari = useSafari();
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(null);

  return (
    <section
      id="our-work"
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden"
    >
      {!isSafari && <style>{shimmerStyle}</style>}

      {/* Ambient orbs — reduced blur for performance */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "rgba(6,182,212,0.04)", filter: "blur(60px)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "rgba(37,99,235,0.04)", filter: "blur(60px)" }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2
            className={`text-5xl md:text-7xl font-bold mb-4 tracking-wider ${!isSafari ? "shimmer-work" : ""}`}
            style={isSafari ? staticTitleStyle : undefined}
          >
            OUR WORK
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${!isSafari ? "shimmer-sub" : ""}`}
            style={isSafari ? staticSubStyle : undefined}
          >
            Explore our latest AI-powered creative projects and see what's possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) =>
            isSafari ? (
              <SafariCard key={item.id} item={item} index={index} onClick={() => setSelectedItem(item)} />
            ) : (
              <ChromeCard key={item.id} item={item} index={index} onClick={() => setSelectedItem(item)} />
            )
          )}
        </div>
      </div>

      {selectedItem && (
        <ProjectModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
}