import { useEffect, useRef } from "react";

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollYRef = useRef(0);
  const starsRef = useRef<Array<{ x: number; y: number; size: number; opacity: number; pulseSpeed: number; pulseOffset: number }>>([]);
  const nebulasRef = useRef<Array<{ x: number; y: number; size: number; color: string; opacity: number }>>([]);
  const frameRef = useRef(0);

  // Initialize canvas and stars once
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Generate stars (reduced from 360 to 150)
    if (starsRef.current.length === 0) {
      const stars = [];
      for (let i = 0; i < 150; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 3, // Extended for parallax
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.6 + 0.2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
      starsRef.current = stars;
    }

    // Generate nebulas (reduced from 5 to 3)
    if (nebulasRef.current.length === 0) {
      nebulasRef.current = [
        { x: canvas.width * 0.2, y: canvas.height * 0.5, size: 300, color: "rgba(103, 232, 249, 0.15)", opacity: 0.1 },
        { x: canvas.width * 0.8, y: canvas.height * 1.5, size: 400, color: "rgba(147, 51, 234, 0.15)", opacity: 0.1 },
        { x: canvas.width * 0.4, y: canvas.height * 2.5, size: 350, color: "rgba(59, 130, 246, 0.15)", opacity: 0.1 },
      ];
    }

    // Scroll listener
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      // Clear canvas
      ctx.fillStyle = "rgba(10, 10, 26, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background (only once per frame, not on every star)
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#0a0a1a");
      gradient.addColorStop(0.5, "#050510");
      gradient.addColorStop(1, "#000000");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw nebulas
      nebulasRef.current.forEach((nebula) => {
        const parallaxY = (scrollYRef.current * 0.3) % (canvas.height * 3);
        const radialGradient = ctx.createRadialGradient(nebula.x, nebula.y - parallaxY, 0, nebula.x, nebula.y - parallaxY, nebula.size);
        radialGradient.addColorStop(0, nebula.color);
        radialGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = radialGradient;
        ctx.fillRect(nebula.x - nebula.size, nebula.y - parallaxY - nebula.size, nebula.size * 2, nebula.size * 2);
      });

      // Draw stars with pulsing effect
      const time = Date.now() * 0.001;
      starsRef.current.forEach((star) => {
        const parallaxY = (scrollYRef.current * 0.6) % (canvas.height * 3);
        const pulse = Math.sin(time * star.pulseSpeed + star.pulseOffset) * 0.3 + 0.7;
        const opacity = star.opacity * pulse;

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y - parallaxY, star.size / 2, 0, Math.PI * 2);
        ctx.fill();

        // Add glow for larger stars
        if (star.size > 1.5) {
          ctx.fillStyle = `rgba(103, 232, 249, ${opacity * 0.4})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y - parallaxY, star.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw vignette
      const vignette = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height));
      vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
      vignette.addColorStop(1, "rgba(0, 0, 0, 0.5)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ display: "block" }}
    />
  );
}