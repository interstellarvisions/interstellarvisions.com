import { useEffect, useState, useMemo } from "react";

export default function CosmicBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Generate stars once with useMemo so they don't re-randomize on re-render
  const largeStars = useMemo(() => Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    width: Math.random() * 3 + 1,
    top: Math.random() * 300,
    left: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.3,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  })), []);

  const mediumStars = useMemo(() => Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    width: Math.random() * 2 + 0.5,
    top: Math.random() * 300,
    left: Math.random() * 100,
    opacity: Math.random() * 0.6 + 0.2,
  })), []);

  const smallStars = useMemo(() => Array.from({ length: 200 }).map((_, i) => ({
    id: i,
    top: Math.random() * 300,
    left: Math.random() * 100,
    opacity: Math.random() * 0.4 + 0.1,
  })), []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#050510] to-black" />

      {/* Parallax star layers */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.6}px)`,
          transition: "transform 0.1s linear",
          height: "300vh",
        }}
      >
        {largeStars.map((star) => (
          <div
            key={`star-large-${star.id}`}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: star.width + "px",
              height: star.width + "px",
              top: star.top + "vh",
              left: star.left + "%",
              opacity: star.opacity,
              animationDuration: star.duration + "s",
              animationDelay: star.delay + "s",
            }}
          />
        ))}

        {mediumStars.map((star) => (
          <div
            key={`star-medium-${star.id}`}
            className="absolute rounded-full bg-cyan-300/60"
            style={{
              width: star.width + "px",
              height: star.width + "px",
              top: star.top + "vh",
              left: star.left + "%",
              opacity: star.opacity,
              boxShadow: "0 0 3px rgba(103, 232, 249, 0.5)",
            }}
          />
        ))}

        {smallStars.map((star) => (
          <div
            key={`star-small-${star.id}`}
            className="absolute rounded-full bg-white/40"
            style={{
              width: "1px",
              height: "1px",
              top: star.top + "vh",
              left: star.left + "%",
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Nebula effects */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: "transform 0.1s linear",
          height: "300vh",
        }}
      >
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, rgba(103, 232, 249, 0.3) 0%, transparent 70%)", top: "10vh", left: "10%", filter: "blur(80px)" }} />
        <div className="absolute w-[800px] h-[800px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)", top: "60vh", right: "10%", filter: "blur(100px)" }} />
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)", top: "120vh", left: "30%", filter: "blur(90px)" }} />
        <div className="absolute w-[700px] h-[700px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, rgba(103, 232, 249, 0.3) 0%, transparent 70%)", top: "180vh", right: "20%", filter: "blur(90px)" }} />
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)", top: "240vh", left: "15%", filter: "blur(85px)" }} />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50" />
    </div>
  );
}