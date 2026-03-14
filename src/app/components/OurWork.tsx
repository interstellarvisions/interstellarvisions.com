import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
import ProjectModal from "./ProjectModal";

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
`;

const projects = [
  {
    id: 1,
    title: "AURORA",
    client: "Aurora Skincare",
    techniques: "AI Image Generation, Video Synthesis, Voice Cloning",
    description: "A full campaign for Aurora Skincare featuring AI-generated visuals and synthetic video content.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "/images/work/Aurora/1.webp", "/images/work/Aurora/2.webp", "/images/work/Aurora/3.webp",
      "/images/work/Aurora/4.webp", "/images/work/Aurora/5.webp", "/images/work/Aurora/6.webp",
      "/images/work/Aurora/7.webp", "/images/work/Aurora/8.webp",
    ],
  },
  {
    id: 2,
    title: "AMBER",
    client: "Amber Jewellery",
    techniques: "AI Image Generation, 3D Visualization, Product Photography",
    description: "Luxury jewellery campaign with AI-generated product visuals and lifestyle imagery.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "/images/work/Amber/1.webp", "/images/work/Amber/2.webp", "/images/work/Amber/3.webp",
      "/images/work/Amber/4.webp", "/images/work/Amber/5.webp", "/images/work/Amber/6.webp",
      "/images/work/Amber/7.webp", "/images/work/Amber/8.webp", "/images/work/Amber/9.webp",
    ],
  },
];

const comingSoonCards = [
  { id: 3, title: "COMING SOON", image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80" },
  { id: 4, title: "COMING SOON", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80" },
];

function ProjectCard({ project, index, onClick }: { project: typeof projects[0]; index: number; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className="relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3]"
      style={{ border: `1px solid ${hovered ? "rgba(6,182,212,0.6)" : "rgba(6,182,212,0.3)"}`, transition: "border-color 0.3s ease" }}
    >
      <img src={project.images[0]} alt={project.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 ease-out" style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }} />
      <div className="absolute inset-0 transition-all duration-500" style={{ background: hovered ? "linear-gradient(to top, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.3) 100%)" : "linear-gradient(to top, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.2) 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-bold tracking-wider transition-colors duration-300" style={{ color: hovered ? "#67e8f9" : "#ffffff" }}>{project.title}</h3>
        <p className="text-cyan-400 text-sm mt-1">{project.client}</p>
        <div className="mt-3 h-[1px] bg-gradient-to-r from-cyan-500/0 via-cyan-400 to-cyan-500/0 transition-all duration-500" style={{ opacity: hovered ? 1 : 0, transform: hovered ? "scaleX(1)" : "scaleX(0)" }} />
      </div>
      <motion.div
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
        animate={{ scale: hovered ? [1, 1.15, 1] : 1, opacity: hovered ? 1 : 0.7 }}
        transition={{ duration: 0.6, repeat: hovered ? Infinity : 0 }}
      >
        <Play size={16} className="text-white ml-0.5" />
      </motion.div>
    </motion.div>
  );
}

function ComingSoonCard({ card, index }: { card: typeof comingSoonCards[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}>
      <div className="relative rounded-xl overflow-hidden aspect-[4/3]" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
        <img src={card.image} alt="Coming Soon" loading="lazy" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="text-center">
            <p className="text-white/30 text-xs tracking-[0.4em] mb-2">NEXT PROJECT</p>
            <h3 className="text-2xl font-bold tracking-wider text-white/40">{card.title}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function OurWork() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });

  return (
    <section id="our-work" className="py-24 md:py-32 px-8 md:px-16 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      <style>{shimmerStyle}</style>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "rgba(6,182,212,0.03)", filter: "blur(60px)" }} />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: "rgba(37,99,235,0.03)", filter: "blur(60px)" }} />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 ref={titleRef} initial={{ opacity: 0, y: 30 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: "easeOut" }} className="text-5xl md:text-7xl font-bold tracking-wider mb-4 shimmer-work">
            OUR WORK
          </motion.h2>
          <p className="text-gray-500 text-sm tracking-[0.2em] uppercase">Campaigns · Content · Results</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onClick={() => setSelectedProject(project)} />
          ))}
          {comingSoonCards.map((card, index) => (
            <ComingSoonCard key={card.id} card={card} index={index + projects.length} />
          ))}
        </div>
      </div>

      {selectedProject && <ProjectModal item={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}