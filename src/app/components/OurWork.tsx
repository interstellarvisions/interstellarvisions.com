import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import ProjectModal from "./ProjectModal";

const portfolioItems = [
  {
    id: 1,
    title: "VIDEO AD EXAMPLE 01",
    shortDescription: "High-converting AI-powered video advertisement",
    coverImage: "https://images.unsplash.com/photo-1770220742903-f113513d0194?w=800&h=500&fit=crop",
    client: "Fashion Brand X",
    techniques: "AI Product Visualization, 3D Rendering, Dynamic Animation",
    description: "High-end product showcase featuring AI-generated visuals and cinematic storytelling designed to elevate brand positioning and drive premium engagement.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "https://images.unsplash.com/photo-1719176010035-17729577d496?w=800",
      "https://images.unsplash.com/photo-1658806283210-6d7330062704?w=800",
      "https://images.unsplash.com/photo-1612000656409-16fcf948b2d9?w=800",
      "https://images.unsplash.com/photo-1641312874336-6279a832a3dc?w=800",
      "https://images.unsplash.com/photo-1770220742903-f113513d0194?w=800",
    ],
  },
  {
    id: 2,
    title: "AI INFLUENCER CONTENT",
    shortDescription: "Engaging AI influencer social media campaigns",
    coverImage: "https://images.unsplash.com/photo-1641312874336-6279a832a3dc?w=800&h=500&fit=crop",
    client: "Tech Startup Y",
    techniques: "AI Character Generation, Motion Capture, Voice Synthesis",
    description: "Engaging social media content featuring our custom AI influencer with realistic movements and expressions, optimized for viral engagement across platforms.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "https://images.unsplash.com/photo-1641312874336-6279a832a3dc?w=800",
      "https://images.unsplash.com/photo-1770220742903-f113513d0194?w=800",
      "https://images.unsplash.com/photo-1696695368125-fc0d809b4ab5?w=800",
      "https://images.unsplash.com/photo-1719176010035-17729577d496?w=800",
      "https://images.unsplash.com/photo-1612000656409-16fcf948b2d9?w=800",
    ],
  },
  {
    id: 3,
    title: "PRODUCT VISUALS",
    shortDescription: "Stunning AI-generated product photography",
    coverImage: "https://images.unsplash.com/photo-1719176010035-17729577d496?w=800&h=500&fit=crop",
    client: "Luxury Goods Co.",
    techniques: "AI Image Generation, Color Grading, Compositing",
    description: "Stunning product photography created entirely through AI, showcasing luxury items in premium environments with photorealistic lighting and textures.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "https://images.unsplash.com/photo-1719176010035-17729577d496?w=800",
      "https://images.unsplash.com/photo-1612000656409-16fcf948b2d9?w=800",
      "https://images.unsplash.com/photo-1658806283210-6d7330062704?w=800",
      "https://images.unsplash.com/photo-1641312874336-6279a832a3dc?w=800",
      "https://images.unsplash.com/photo-1696695368125-fc0d809b4ab5?w=800",
    ],
  },
  {
    id: 4,
    title: "SOCIAL CONTENT 01",
    shortDescription: "Viral-optimized short-form video content",
    coverImage: "https://images.unsplash.com/photo-1696695368125-fc0d809b4ab5?w=800&h=500&fit=crop",
    client: "E-commerce Platform",
    techniques: "Short-form Video Creation, Trend Analysis, AI Editing",
    description: "Viral-optimized short-form content designed for maximum engagement on TikTok and Instagram Reels, with data-driven creative decisions.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "https://images.unsplash.com/photo-1696695368125-fc0d809b4ab5?w=800",
      "https://images.unsplash.com/photo-1641312874336-6279a832a3dc?w=800",
      "https://images.unsplash.com/photo-1770220742903-f113513d0194?w=800",
      "https://images.unsplash.com/photo-1658806283210-6d7330062704?w=800",
      "https://images.unsplash.com/photo-1719176010035-17729577d496?w=800",
    ],
  },
  {
    id: 5,
    title: "EXAMPLE 5",
    shortDescription: "Interactive gaming content with AI animation",
    coverImage: "https://images.unsplash.com/photo-1658806283210-6d7330062704?w=800&h=500&fit=crop",
    client: "Gaming Company",
    techniques: "Real-time Rendering, AI Animation, Dynamic Effects",
    description: "Interactive gaming content with AI-powered animations and photorealistic rendering that pushes the boundaries of virtual production.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "https://images.unsplash.com/photo-1658806283210-6d7330062704?w=800",
      "https://images.unsplash.com/photo-1719176010035-17729577d496?w=800",
      "https://images.unsplash.com/photo-1641312874336-6279a832a3dc?w=800",
      "https://images.unsplash.com/photo-1612000656409-16fcf948b2d9?w=800",
      "https://images.unsplash.com/photo-1696695368125-fc0d809b4ab5?w=800",
    ],
  },
  {
    id: 6,
    title: "EXAMPLE 6",
    shortDescription: "Cinematic AI-assisted trailer production",
    coverImage: "https://images.unsplash.com/photo-1612000656409-16fcf948b2d9?w=800&h=500&fit=crop",
    client: "Entertainment Studio",
    techniques: "Cinematic AI, Story Generation, Post-production AI",
    description: "Cinematic trailer production with AI-assisted storytelling and advanced post-production techniques that rival traditional film studios.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "https://images.unsplash.com/photo-1612000656409-16fcf948b2d9?w=800",
      "https://images.unsplash.com/photo-1696695368125-fc0d809b4ab5?w=800",
      "https://images.unsplash.com/photo-1770220742903-f113513d0194?w=800",
      "https://images.unsplash.com/photo-1641312874336-6279a832a3dc?w=800",
      "https://images.unsplash.com/photo-1719176010035-17729577d496?w=800",
    ],
  },
];

function ProjectCard({
  item,
  index,
  onClick,
}: {
  item: typeof portfolioItems[0];
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
      style={{ transform: "translateZ(0)", willChange: "opacity, transform" }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg cursor-pointer aspect-video bg-black border border-white/10 hover:border-cyan-500/50 transition-colors duration-300"
    >
      {/* Image isolated in its own compositing layer */}
      <div
        className="absolute inset-0"
        style={{ transform: "translateZ(0)", isolation: "isolate" }}
      >
        <img
          src={item.coverImage}
          alt={item.title}
          style={{ transform: "translateZ(0)", willChange: "transform" }}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-cyan-500/30 group-hover:scale-110 transition-all duration-300">
          <Play className="text-white ml-1" size={24} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
        <h3 className="text-lg font-bold mb-2 tracking-wide">{item.title}</h3>
        <p className="text-sm text-gray-400">{item.shortDescription}</p>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
      </div>
    </motion.div>
  );
}

export default function OurWork() {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  return (
    <section
      id="our-work"
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-slate-900 to-black"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-white via-cyan-100 to-cyan-400">
            OUR WORK
          </h2>
          <p className="text-xl max-w-3xl mx-auto bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-cyan-300">
            Explore our latest AI-powered creative projects and see what's possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <ProjectCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>

      {selectedItem && (
        <ProjectModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
}
