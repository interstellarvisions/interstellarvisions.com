import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useSafari } from "../hooks/useSafari";
import { useParticles } from "../hooks/useParticles";

const services = [
  {
    title: "AI VIDEO ADS",
    description: "High-converting video advertisements powered by AI technology",
    image: "/images/what-we-create/1.webp",
    tag: "VIDEO",
    number: "01",
  },
  {
    title: "PRODUCT VISUALS",
    description: "Stunning AI-generated product imagery and 3D visualizations",
    image: "/images/what-we-create/2.webp",
    tag: "VISUAL",
    number: "02",
  },
  {
    title: "SHORT FORM SOCIAL CONTENT",
    description: "Engaging vertical video content optimized for TikTok, Reels, and Shorts",
    image: "/images/what-we-create/3.webp",
    tag: "SOCIAL",
    number: "03",
  },
  {
    title: "AI INFLUENCER CONTENT",
    description: "Content featuring our proprietary AI influencers and digital creators",
    image: "/images/what-we-create/4.webp",
    tag: "AI",
    number: "04",
  },
];

const borderBase = "linear-gradient(135deg, rgba(124,58,237,0.6), rgba(37,99,235,0.4), rgba(124,58,237,0.6))";
const borderHover = "linear-gradient(135deg, #06b6d4, #2563eb, #06b6d4)";

function ServiceCard({ service, index, isSafari }: { service: typeof services[0]; index: number; isSafari: boolean }) {
  const [hovered, setHovered] = useState(false);

  const inner = (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
        style={{ transform: hovered && !isSafari ? "scale(1.08)" : "scale(1)" }}
      />
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: hovered && !isSafari
            ? "linear-gradient(to top, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.2) 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      {!isSafari && (
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-400 to-transparent pointer-events-none"
          initial={{ top: "100%", opacity: 0 }}
          animate={hovered ? { top: "0%", opacity: [0, 1, 0] } : { top: "100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
      <div className="absolute top-5 left-6 z-10">
        <span
          className="text-5xl font-bold leading-none transition-colors duration-400"
          style={{ color: hovered && !isSafari ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.08)" }}
        >
          {service.number}
        </span>
      </div>
      <div className="absolute top-5 right-5 z-10">
        <span
          className="text-[10px] font-bold tracking-[0.2em] px-3 py-1 rounded-full border transition-all duration-400"
          style={{
            borderColor: hovered && !isSafari ? "rgba(124,58,237,0.7)" : "rgba(255,255,255,0.15)",
            color: hovered && !isSafari ? "#67e8f9" : "rgba(255,255,255,0.4)",
            background: hovered && !isSafari ? "rgba(124,58,237,0.1)" : "transparent",
          }}
        >
          {service.tag}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 p-7">
        <h3
          className="text-xl font-bold mb-2 tracking-wide transition-colors duration-300"
          style={{ color: hovered && !isSafari ? "#67e8f9" : "#ffffff" }}
        >
          {service.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
        {!isSafari && (
          <div
            className="mt-4 h-[1px] bg-gradient-to-r from-violet-500/0 via-violet-400 to-violet-500/0 transition-all duration-500"
            style={{ opacity: hovered ? 1 : 0, transform: hovered ? "scaleX(1)" : "scaleX(0)" }}
          />
        )}
      </div>
    </div>
  );

  const wrapper = (
    <div
      className="relative rounded-xl aspect-[4/3]"
      style={{ padding: "1px", background: hovered && !isSafari ? borderHover : borderBase, transition: "background 0.5s ease" }}
    >
      {inner}
    </div>
  );

  if (isSafari) return wrapper;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {wrapper}
    </motion.div>
  );
}


function SectionParticles({ density = 80 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticles(canvasRef, { count: density, speed: 0.12, opacity: 0.35 });
  return <canvas ref={canvasRef} className="particle-canvas" />;
}

export default function WhatWeCreate() {
  const isSafari = useSafari();

  return (
    <section id="what-we-create" className="py-24 md:py-32 px-8 md:px-16 bg-gradient-to-b from-[#080510] to-[#0d0818] relative overflow-hidden">
      <SectionParticles />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "rgba(124,58,237,0.04)", filter: "blur(60px)" }} />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "rgba(37,99,235,0.04)", filter: "blur(60px)" }} />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className={`text-5xl md:text-7xl font-bold tracking-wider mb-4 ${isSafari ? "gradient-text-static" : "shimmer-text"}`}>
            WHAT WE CREATE
          </h2>
          <p className="text-gray-500 text-sm tracking-[0.2em] uppercase">Powered by AI · Built for Impact</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} isSafari={isSafari} />
          ))}
        </div>
      </div>
    </section>
  );
}
