import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import { useSafari } from "../hooks/useSafari";
import ProjectModal from "./ProjectModal";

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

type Project = typeof projects[0];

function WorkCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-xl overflow-hidden cursor-pointer"
      style={{
        aspectRatio: "16/9",
        border: `1px solid ${hovered ? "rgba(124,58,237,0.7)" : "rgba(124,58,237,0.25)"}`,
        transition: "border-color 0.3s ease",
      }}
    >
      <img
        src={project.images[0]}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700"
        style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
      />
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{ background: hovered ? "linear-gradient(to top, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.3) 100%)" : "linear-gradient(to top, rgba(0,0,0,0.82) 35%, rgba(0,0,0,0.2) 100%)" }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-xl font-bold tracking-wider transition-colors duration-300" style={{ color: hovered ? "#c4b5fd" : "#ffffff" }}>
          {project.title}
        </h3>
        <p className="text-cyan-400 text-sm mt-1">{project.client}</p>
        <div className="mt-2 h-[1px] bg-gradient-to-r from-violet-500/0 via-violet-400 to-violet-500/0 transition-all duration-500"
          style={{ opacity: hovered ? 1 : 0, transform: hovered ? "scaleX(1)" : "scaleX(0)" }} />
      </div>
      <div
        className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
        style={{ background: hovered ? "rgba(124,58,237,0.4)" : "rgba(255,255,255,0.1)" }}
      >
        <Play size={14} className="text-white ml-0.5" />
      </div>
    </div>
  );
}

interface AllWorkModalProps {
  onClose: () => void;
}

export default function AllWorkModal({ onClose }: AllWorkModalProps) {
  const isSafari = useSafari();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "0px";
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const modal = (
    <div className="fixed inset-0 z-[90] flex flex-col" style={{ background: "rgba(5,3,13,0.97)" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-5 flex-shrink-0 cursor-pointer" style={{ borderBottom: "1px solid rgba(124,58,237,0.15)" }} onClick={onClose}>
        <div onClick={(e) => e.stopPropagation()}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider shimmer-text">ALL OUR WORK</h2>
          <p className="text-gray-500 text-xs tracking-[0.2em] uppercase mt-1">{projects.length} Projects · Campaigns · Content · Results</p>
        </div>
        <button
          onClick={onClose}
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
          style={{ border: "1px solid rgba(124,58,237,0.3)", background: "rgba(124,58,237,0.05)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(167,139,250,0.7)"; (e.currentTarget as HTMLButtonElement).style.background = "rgba(124,58,237,0.15)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(124,58,237,0.3)"; (e.currentTarget as HTMLButtonElement).style.background = "rgba(124,58,237,0.05)"; }}
        >
          <X size={20} className="text-white" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-8 py-8" onClick={onClose}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1600px] mx-auto" onClick={(e) => e.stopPropagation()}>
          {projects.map((project) => (
            <WorkCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isSafari ? modal : (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-0 z-[90] flex flex-col"
          style={{ background: "rgba(5,3,13,0.97)" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-5 flex-shrink-0 cursor-pointer" style={{ borderBottom: "1px solid rgba(124,58,237,0.15)" }} onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-wider shimmer-text">ALL OUR WORK</h2>
              <p className="text-gray-500 text-xs tracking-[0.2em] uppercase mt-1">{projects.length} Projects · Campaigns · Content · Results</p>
            </div>
            <button
              onClick={onClose}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
              style={{ border: "1px solid rgba(124,58,237,0.3)", background: "rgba(124,58,237,0.05)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(167,139,250,0.7)"; (e.currentTarget as HTMLButtonElement).style.background = "rgba(124,58,237,0.15)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(124,58,237,0.3)"; (e.currentTarget as HTMLButtonElement).style.background = "rgba(124,58,237,0.05)"; }}
            >
              <X size={20} className="text-white" />
            </button>
          </div>
          {/* Scrollable grid - clicks on empty space below cards also close */}
          <div className="flex-1 overflow-y-auto px-8 py-8" onClick={onClose}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1600px] mx-auto" onClick={(e) => e.stopPropagation()}>
              {projects.map((project) => (
                <WorkCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {selectedProject && (
        <ProjectModal item={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}