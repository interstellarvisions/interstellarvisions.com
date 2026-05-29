import { useEffect, useRef } from "react";

interface ParticleOptions {
  count?: number;
  speed?: number;
  opacity?: number;
  color?: string;
}

export function useParticles(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  opts: ParticleOptions = {}
) {
  const {
    count = 120,
    speed = 0.18,
    opacity = 0.5,
    color = "167,139,250",
  } = opts;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let frame = 0;

    interface Particle {
      x: number; y: number; r: number;
      op: number; vx: number; vy: number;
      tw: number; to: number;
    }

    let pts: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const mkPt = (randY = false): Particle => ({
      x: Math.random() * canvas.width,
      y: randY ? Math.random() * canvas.height : canvas.height + 5,
      r: Math.random() * 1.2 + 0.3,
      op: Math.random() * opacity * 0.8 + opacity * 0.2,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -(Math.random() * speed + speed * 0.4),
      tw: Math.random() * 0.018 + 0.004,
      to: Math.random() * Math.PI * 2,
    });

    const init = () => {
      resize();
      pts = Array.from({ length: count }, () => mkPt(true));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      if (Math.random() < 0.15 && pts.length < count * 1.3) pts.push(mkPt(false));
      pts = pts.filter((p) => p.y > -10 && p.x > -10 && p.x < canvas.width + 10);

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        const tw = Math.sin(frame * p.tw + p.to);
        const a = p.op * (0.35 + 0.65 * ((tw + 1) / 2));

        if (p.r > 0.7) {
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
          g.addColorStop(0, `rgba(${color},${a * 0.45})`);
          g.addColorStop(1, `rgba(${color},0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${a})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);
}