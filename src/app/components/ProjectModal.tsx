import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProjectItem {
  id: number;
  title: string;
  client: string;
  techniques: string;
  description: string;
  videoUrl: string;
  images: string[];
}

interface ProjectModalProps {
  item: ProjectItem;
  onClose: () => void;
}

export default function ProjectModal({ item, onClose }: ProjectModalProps) {
  const [activeMedia, setActiveMedia] = useState<"video" | number>("video");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleMediaChange = (type: "video" | number) => {
    setActiveMedia(type);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-7xl bg-gradient-to-br from-slate-900 to-black border border-white/10 rounded-lg overflow-hidden flex flex-col lg:flex-row"
          style={{ maxHeight: "90vh" }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Left Side - Main Display (70%) — scrollable on mobile, fixed on desktop */}
          <div className="lg:w-[70%] p-6 md:p-8 overflow-y-auto">
            {/* Main Media Display */}
            <div className="bg-black rounded-lg overflow-hidden border border-white/10 mb-6">
              <motion.div
                key={String(activeMedia)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="aspect-video"
              >
                {activeMedia === "video" ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-white/50"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                      <p className="text-white/70 text-sm font-medium">
                        YOUTUBE VIDEO PLAYER
                      </p>
                      <p className="text-white/40 text-xs mt-2">
                        Embedded video placeholder
                      </p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.images[activeMedia as number]}
                    alt={`${item.title} - Image ${(activeMedia as number) + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
            </div>

            {/* Project Details */}
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold tracking-wide">
                {item.title}
              </h3>

              <div className="space-y-2">
                <p className="text-cyan-400">
                  <span className="font-semibold">Client:</span>{" "}
                  {item.client}
                </p>
                <p className="text-cyan-400">
                  <span className="font-semibold">Techniques:</span>{" "}
                  {item.techniques}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-400 mb-2">
                  Description:
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Vertical Media Selector (30%) — independently scrollable */}
          <div className="lg:w-[30%] bg-black/50 border-t lg:border-t-0 lg:border-l border-white/10 overflow-y-auto scroll-smooth" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(6,182,212,0.3) transparent' }}>
            <div className="p-4 space-y-3">
              {/* Video Thumbnail */}
              <button
                onClick={() => handleMediaChange("video")}
                className={`w-full aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  activeMedia === "video"
                    ? "border-cyan-500 shadow-lg shadow-cyan-500/50"
                    : "border-white/20 hover:border-cyan-400/50"
                }`}
              >
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 mx-auto text-white/50 mb-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                    <p className="text-white text-sm font-semibold">VIDEO</p>
                  </div>
                </div>
              </button>

              {/* Image Thumbnails */}
              {item.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleMediaChange(index)}
                  className={`w-full aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeMedia === index
                      ? "border-cyan-500 shadow-lg shadow-cyan-500/50"
                      : "border-white/20 hover:border-cyan-400/50"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <p className="text-white text-sm font-semibold">
                        Image{String(index + 1).padStart(2, "0")}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
