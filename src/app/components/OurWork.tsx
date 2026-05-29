import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import { useSafari } from "../hooks/useSafari";
import { useParticles } from "../hooks/useParticles";
import ProjectModal from "./ProjectModal";
import AllWorkModal from "./AllWorkModal";

const projects = [
  {
    id: 1,
    title: "AURORA",
    client: "Aurora",
    techniques: "AI Image Generation, Video Synthesis, Voice Cloning",
    description: "AURORA — A fully AI-generated fashion campaign created by Interstellar Visions. Every frame was built entirely with artificial intelligence — no film crew, no production budget, no studio. Just a creative vision and the tools to bring it to life.",
    videoUrl: "https://www.youtube.com/embed/7Obn0jr_hjs",
    images: ["/images/work/Aurora/1.webp","/images/work/Aurora/2.webp","/images/work/Aurora/3.webp","/images/work/Aurora/4.webp","/images/work/Aurora/5.webp","/images/work/Aurora/6.webp","/images/work/Aurora/7.webp","/images/work/Aurora/8.webp"],
  },
  {
    id: 2,
    title: "AMBER",
    client: "The Amber Cask",
    techniques: "AI Image Generation, 3D Visualization, Product Photography",
    description: "A fully AI-generated cinematic food commercial created by Interstellar Visions for The Amber Cask. Every frame was generated using AI image and video technology — no film crew, no production budget, no studio. Just a creative vision and the tools to bring it to life.",
    videoUrl: "https://www.youtube.com/embed/yR4vKe2DYWs",
    images: ["/images/work/Amber/1.webp","/images/work/Amber/2.webp","/images/work/Amber/3.webp","/images/work/Amber/4.webp","/images/work/Amber/5.webp","/images/work/Amber/6.webp","/images/work/Amber/7.webp","/images/work/Amber/8.webp","/images/work/Amber/9.webp"],
  },
  {
    id: 3,
    title: "VOLT",
    client: "Volt Energy Drink",
    techniques: "AI Cinematic Video, AI Image Generation, Motion Graphics",
    description: "A fully AI-generated cinematic sports commercial for Volt Energy Drink. Every frame was generated using AI image and video technology — no film crew, no production budget, no studio. Just a creative vision and the tools to bring it to life.",
    videoUrl: "https://www.youtube.com/embed/Th7OGU1KZzc",
    images: ["/images/work/Volt/1.webp","/images/work/Volt/2.webp","/images/work/Volt/3.webp","/images/work/Volt/4.webp","/images/work/Volt/5.webp","/images/work/Volt/6.webp"],
  },
  {
    id: 4,
    title: "SOLUM",
    client: "Solum",
    techniques: "AI Image Generation, Visual Storytelling, Brand Identity",
    description: "A fully AI-generated cinematic fragrance commercial created by Interstellar Visions for SOLUM Parfume. Every frame was generated using AI image and video technology — no film crew, no production budget, no studio. Just a creative vision and the tools to bring it to life.",
    videoUrl: "https://www.youtube.com/embed/b6Wb9SVC6G8",
    images: ["/images/work/Solum/1.webp","/images/work/Solum/2.webp","/images/work/Solum/3.webp","/images/work/Solum/4.webp","/images/work/Solum/5.webp","/images/work/Solum/6.webp","/images/work/Solum/7.webp","/images/work/Solum/8.webp"],
  },
  {
    id: 5,
    title: "SOLE DROP",
    client: "Sole Drop",
    techniques: "AI Image Generation, Cinematic Composition, Atmosphere Design",
    description: "A fully AI-generated cinematic sneaker commercial created by Interstellar Visions for ShadowDrift Footwear. Every frame was generated using AI image and video technology — no film crew, no production budget, no studio. Just a creative vision and the tools to bring it to life.",
    videoUrl: "https://www.youtube.com/embed/eEIIEHiU_Vc",
    images: ["/images/work/ShadowDrift/1.webp","/images/work/ShadowDrift/2.webp","/images/work/ShadowDrift/3.webp","/images/work/ShadowDrift/4.webp"],
  },
  {
    id: 6,
    title: "NOXSOUND",
    client: "Noxsound",
    techniques: "AI Image Generation, Audio Branding, Motion Concepts",
    description: "A fully AI-generated cinematic fashion campaign created by Interstellar Visions for Noxsound. Every frame was generated using AI image and video technology — no film crew, no production budget, no studio. Just a creative vision and the tools to bring it to life.",
    videoUrl: "https://www.youtube.com/embed/nlzDPoSCVDk",
    images: ["/images/work/Noxsound/1.webp","/images/work/Noxsound/2.webp","/images/work/Noxsound/3.webp","/images/work/Noxsound/4.webp"],
  },
];

function SafariProjectCard({ project, onClick }: { project: typeof projects[0]; onClick: () => void }) {
  return (
    <div onClick={onClick} className="relative rounded-xl overflow-hidden cursor-pointer"
      style={{ border: "1px solid rgba(124,58,237,0.3)", aspectRatio: "16/9" }}>
      <img src={project.images[0]} alt={project.title} loading="lazy" className="w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.2) 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-bold tracking-wider text-white mb-1">{project.title}</h3>
        <p className="text-cyan-400 text-sm">{project.client}</p>
      </div>
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
        <Play size={16} className="text-white ml-0.5" />
      </div>
    </div>
  );
}

function ChromeProjectCard({ project, index, onClick }: { project: typeof projects[0]; index: number; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className="relative rounded-xl overflow-hidden cursor-pointer"
      style={{ border: `1px solid ${hovered ? "rgba(124,58,237,0.6)" : "rgba(124,58,237,0.3)"}`, transition: "border-color 0.3s ease", aspectRatio: "16/9" }}
    >
      <img src={project.images[0]} alt={project.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 ease-out"
        style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }} />
      <div className="absolute inset-0 transition-all duration-500"
        style={{ background: hovered ? "linear-gradient(to top, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.3) 100%)" : "linear-gradient(to top, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.2) 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-bold tracking-wider transition-colors duration-300" style={{ color: hovered ? "#c4b5fd" : "#ffffff" }}>
          {project.title}
        </h3>
        <p className="text-cyan-400 text-sm mt-1">{project.client}</p>
        <div className="mt-3 h-[1px] bg-gradient-to-r from-violet-500/0 via-violet-400 to-violet-500/0 transition-all duration-500"
          style={{ opacity: hovered ? 1 : 0, transform: hovered ? "scaleX(1)" : "scaleX(0)" }} />
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

function SectionParticles({ density = 80 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticles(canvasRef, { count: density, speed: 0.12, opacity: 0.35 });
  return <canvas ref={canvasRef} className="particle-canvas" />;
}

function ViewAllButton({ onClick, isSafari }: { onClick: () => void; isSafari: boolean }) {
  const [hovered, setHovered] = useState(false);

  const inner = (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center gap-2 px-10 py-4 rounded-full transition-all duration-300"
      style={{
        border: `1px solid ${hovered ? "rgba(103,232,249,0.8)" : "rgba(103,232,249,0.3)"}`,
        boxShadow: hovered ? "0 0 20px rgba(6,182,212,0.2), inset 0 0 12px rgba(6,182,212,0.05)" : "none",
        background: hovered ? "rgba(6,182,212,0.05)" : "transparent",
      }}
    >
      <span className="text-xs tracking-[0.25em] uppercase transition-colors duration-300"
        style={{ color: hovered ? "rgba(103,232,249,0.9)" : "rgba(103,232,249,0.55)" }}>
        View All Work
      </span>
      <motion.div
        animate={!isSafari ? { y: [0, 4, 0] } : {}}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="transition-colors duration-300"
        style={{ color: hovered ? "rgba(103,232,249,0.9)" : "rgba(103,232,249,0.55)" }}
      >
        <ChevronDown size={16} />
      </motion.div>
    </button>
  );

  if (isSafari) return <div className="flex justify-center mt-12">{inner}</div>;

  return (
    <motion.div
      className="flex justify-center mt-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {inner}
    </motion.div>
  );
}

export default function OurWork() {
  const isSafari = useSafari();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [allWorkOpen, setAllWorkOpen] = useState(false);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });

  return (
    <section id="our-work" className="py-24 md:py-32 px-4 md:px-8 bg-[#0d0818] relative overflow-hidden">
      <SectionParticles />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "rgba(124,58,237,0.03)", filter: "blur(60px)" }} />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: "rgba(37,99,235,0.03)", filter: "blur(60px)" }} />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          {isSafari ? (
            <h2 className="text-5xl md:text-7xl font-bold tracking-wider mb-4 gradient-text-static">OUR WORK</h2>
          ) : (
            <motion.h2
              ref={titleRef}
              initial={{ opacity: 0, y: 30 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold tracking-wider mb-4 shimmer-text"
            >
              OUR WORK
            </motion.h2>
          )}
          <p className="text-gray-500 text-sm tracking-[0.2em] uppercase">Campaigns · Content · Results</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {projects.map((project, index) =>
            isSafari ? (
              <SafariProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
            ) : (
              <ChromeProjectCard key={project.id} project={project} index={index} onClick={() => setSelectedProject(project)} />
            )
          )}
        </div>

        <ViewAllButton onClick={() => setAllWorkOpen(true)} isSafari={isSafari} />
      </div>

      {selectedProject && <ProjectModal item={selectedProject} onClose={() => setSelectedProject(null)} />}

      {isSafari ? (
        allWorkOpen && <AllWorkModal onClose={() => setAllWorkOpen(false)} />
      ) : (
        <AnimatePresence>
          {allWorkOpen && <AllWorkModal onClose={() => setAllWorkOpen(false)} />}
        </AnimatePresence>
      )}
    </section>
  );
}