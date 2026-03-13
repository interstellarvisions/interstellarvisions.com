import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useSafari } from "../hooks/useSafari";

const shimmerStyle = `
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  .shimmer-title {
    background: linear-gradient(90deg, #ffffff 0%, #ffffff 35%, #67e8f9 50%, #ffffff 65%, #ffffff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s linear infinite;
  }
`;

const staticTitleStyle = {
  background: "linear-gradient(to bottom, #ffffff 0%, #a5f3fc 60%, #67e8f9 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const services = [
  {
    title: "AI VIDEO ADS",
    description: "High-converting video advertisements powered by AI technology",
    image: "/images/WhatWeCreate/1.jpeg",
    tag: "VIDEO",
    number: "01",
  },
  {
    title: "PRODUCT VISUALS",
    description: "Stunning AI-generated product imagery and 3D visualizations",
    image: "/images/WhatWeCreate/2.jpeg",
    tag: "VISUAL",
    number: "02",
  },
  {
    title: "SHORT FORM SOCIAL CONTENT",
    description: "Engaging vertical video content optimized for TikTok, Reels, and Shorts",
    image: "/images/WhatWeCreate/3.jpeg",
    tag: "SOCIAL",
    number: "03",
  },
  {
    title: "AI INFLUENCER CONTENT",
    description: "Content featuring our proprietary AI influencers and digital creators",
    image: "/images/WhatWeCreate/4.jpeg",
    tag: "AI",
    number: "04",
  },
];

// Lazy image component using Intersection Observer
function LazyImage({
  src,
  alt,
  className,
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "50px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23222' width='400' height='300'/%3E%3C/svg%3E"}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
    />
  );
}

function SafariCard({ service }: { service: (typeof services)[0] }) {
  return (
    <div
      className="relative rounded-xl aspect-[4/3]"
      style={{
        padding: "1px",
        background: "linear-gradient(135deg, rgba(6,182,212,0.6), rgba(37,99,235,0.4), rgba(6,182,212,0.6))",
      }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        <LazyImage
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.55) 100%)" }}
        />
        <div className="absolute top-5 left-6 z-10">
          <span className="text-5xl font-bold leading-none" style={{ color: "rgba(255,255,255,0.08)" }}>
            {service.number}
          </span>
        </div>
        <div className="absolute top-5 right-5 z-10">
          <span
            className="text-[10px] font-bold tracking-[0.2em] px-3 py-1 rounded-full border"
            style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.4)" }}
          >
            {service.tag}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 p-7">
          <h3 className="text-xl font-bold mb-2 tracking-wide text-white">{service.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
        </div>
      </div>
    </div>
  );
}

function ChromeCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-xl aspect-[4/3]"
      style={{
        padding: "1px",
        background: hovered
          ? "linear-gradient(135deg, #06b6d4, #2563eb, #06b6d4)"
          : "linear-gradient(135deg, rgba(6,182,212,0.6), rgba(37,99,235,0.4), rgba(6,182,212,0.6))",
        transition: "background 0.5s ease",
      }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        <LazyImage
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
        />
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            background: hovered
              ? "linear-gradient(to top, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.2) 100%)"
              : "linear-gradient(to top, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none"
          initial={{ top: "100%", opacity: 0 }}
          animate={hovered ? { top: "0%", opacity: [0, 1, 0] } : { top: "100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className="absolute top-5 left-6 z-10">
          <span
            className="text-5xl font-bold leading-none"
            style={{
              color: hovered ? "rgba(6,182,212,0.5)" : "rgba(255,255,255,0.08)",
              transition: "color 0.4s ease",
            }}
          >
            {service.number}
          </span>
        </div>
        <div className="absolute top-5 right-5 z-10">
          <span
            className="text-[10px] font-bold tracking-[0.2em] px-3 py-1 rounded-full border"
            style={{
              borderColor: hovered ? "rgba(6,182,212,0.7)" : "rgba(255,255,255,0.15)",
              color: hovered ? "#67e8f9" : "rgba(255,255,255,0.4)",
              background: hovered ? "rgba(6,182,212,0.1)" : "transparent",
              transition: "all 0.4s ease",
            }}
          >
            {service.tag}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 p-7">
          <motion.div
            animate={hovered ? { y: 0, opacity: 1 } : { y: 6, opacity: 0.85 }}
            transition={{ duration: 0.3 }}
          >
            <h3
              className="text-xl font-bold mb-2 tracking-wide transition-all duration-300"
              style={{ color: hovered ? "#67e8f9" : "#ffffff" }}
            >
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
          </motion.div>
          <div
            className="mt-4 h-[1px] bg-gradient-to-r from-cyan-500/0 via-cyan-400 to-cyan-500/0 transition-all duration-500"
            style={{ opacity: hovered ? 1 : 0, transform: hovered ? "scaleX(1)" : "scaleX(0)" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function WhatWeCreate() {
  const isSafari = useSafari();

  return (
    <section
      id="what-we-create"
      className="py-24 md:py-32 px-8 md:px-16 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden"
    >
      {!isSafari && <style>{shimmerStyle}</style>}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-600/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2
            className={`text-5xl md:text-7xl font-bold tracking-wider mb-4 ${!isSafari ? "shimmer-title" : ""}`}
            style={isSafari ? staticTitleStyle : undefined}
          >
            WHAT WE CREATE
          </h2>
          <p className="text-gray-500 text-sm tracking-[0.2em] uppercase">
            Powered by AI · Built for Impact
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {services.map((service, index) =>
            isSafari ? (
              <SafariCard key={service.title} service={service} />
            ) : (
              <ChromeCard key={service.title} service={service} index={index} />
            )
          )}
        </div>
      </div>
    </section>
  );
}