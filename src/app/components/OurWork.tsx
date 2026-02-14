import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Play, X } from "lucide-react";
import PortfolioModal from "./PortfolioModal";

const portfolioItems = [
  {
    id: 1,
    title: "VIDEO AD EXAMPLE 01",
    thumbnail:
      "https://images.unsplash.com/photo-1770220742903-f113513d0194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzEwODI0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    client: "Fashion Brand X",
    techniques: "AI Product Visualization, 3D Rendering, Dynamic Animation",
    description:
      "High-end product showcase featuring AI-generated visuals and cinematic storytelling.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "https://images.unsplash.com/photo-1719176010035-17729577d496?w=800",
      "https://images.unsplash.com/photo-1658806283210-6d7330062704?w=800",
      "https://images.unsplash.com/photo-1612000656409-16fcf948b2d9?w=800",
    ],
  },
  {
    id: 2,
    title: "AI INFLUENCER CONTENT",
    thumbnail:
      "https://images.unsplash.com/photo-1641312874336-6279a832a3dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGlnaXRhbCUyMGF2YXRhcnxlbnwxfHx8fDE3NzEwODI0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    client: "Tech Startup Y",
    techniques: "AI Character Generation, Motion Capture, Voice Synthesis",
    description:
      "Engaging social media content featuring our custom AI influencer with realistic movements and expressions.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "https://images.unsplash.com/photo-1641312874336-6279a832a3dc?w=800",
      "https://images.unsplash.com/photo-1770220742903-f113513d0194?w=800",
      "https://images.unsplash.com/photo-1696695368125-fc0d809b4ab5?w=800",
    ],
  },
  {
    id: 3,
    title: "PRODUCT VISUALS",
    thumbnail:
      "https://images.unsplash.com/photo-1719176010035-17729577d496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBsdXh1cnl8ZW58MXx8fHwxNzcxMDY5MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    client: "Luxury Goods Co.",
    techniques: "AI Image Generation, Color Grading, Compositing",
    description:
      "Stunning product photography created entirely through AI, showcasing luxury items in premium environments.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "https://images.unsplash.com/photo-1719176010035-17729577d496?w=800",
      "https://images.unsplash.com/photo-1612000656409-16fcf948b2d9?w=800",
      "https://images.unsplash.com/photo-1658806283210-6d7330062704?w=800",
    ],
  },
  {
    id: 4,
    title: "SOCIAL CONTENT 01",
    thumbnail:
      "https://images.unsplash.com/photo-1696695368125-fc0d809b4ab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzcxMDQ2MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    client: "E-commerce Platform",
    techniques: "Short-form Video Creation, Trend Analysis, AI Editing",
    description:
      "Viral-optimized short-form content designed for maximum engagement on TikTok and Instagram Reels.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "https://images.unsplash.com/photo-1696695368125-fc0d809b4ab5?w=800",
      "https://images.unsplash.com/photo-1641312874336-6279a832a3dc?w=800",
      "https://images.unsplash.com/photo-1770220742903-f113513d0194?w=800",
    ],
  },
  {
    id: 5,
    title: "EXAMPLE 5",
    thumbnail:
      "https://images.unsplash.com/photo-1658806283210-6d7330062704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBkaWdpdGFsfGVufDF8fHx8MTc3MTAwMDgzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    client: "Gaming Company",
    techniques: "Real-time Rendering, AI Animation, Dynamic Effects",
    description:
      "Interactive gaming content with AI-powered animations and photorealistic rendering.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "https://images.unsplash.com/photo-1658806283210-6d7330062704?w=800",
      "https://images.unsplash.com/photo-1719176010035-17729577d496?w=800",
      "https://images.unsplash.com/photo-1641312874336-6279a832a3dc?w=800",
    ],
  },
  {
    id: 6,
    title: "EXAMPLE 6",
    thumbnail:
      "https://images.unsplash.com/photo-1612000656409-16fcf948b2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBjaW5lbWF0aWN8ZW58MXx8fHwxNzcxMDgyNDAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    client: "Entertainment Studio",
    techniques: "Cinematic AI, Story Generation, Post-production AI",
    description:
      "Cinematic trailer production with AI-assisted storytelling and advanced post-production techniques.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "https://images.unsplash.com/photo-1612000656409-16fcf948b2d9?w=800",
      "https://images.unsplash.com/photo-1696695368125-fc0d809b4ab5?w=800",
      "https://images.unsplash.com/photo-1770220742903-f113513d0194?w=800",
    ],
  },
];

function PortfolioCard({
  item,
  index,
  onClick,
}: {
  item: typeof portfolioItems[0];
  index: number;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg border border-white/10 hover:border-cyan-500/80 transition-all duration-300 cursor-pointer aspect-video"
    >
      {/* Thumbnail */}
      <div className="absolute inset-0">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
      </div>

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-cyan-500/30 group-hover:scale-110 transition-all duration-300">
          <Play className="text-white ml-1" size={24} />
        </div>
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-lg font-bold tracking-wide">{item.title}</h3>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
      </div>
    </motion.div>
  );
}

export default function OurWork() {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="our-work"
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-slate-900 to-black"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider">
            OUR WORK
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our latest AI-powered creative projects and see what's possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>

      {/* Portfolio Modal */}
      {selectedItem && (
        <PortfolioModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
}
