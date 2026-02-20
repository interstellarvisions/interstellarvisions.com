import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 md:p-8">
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.2 }}
          className="relative w-full sm:max-w-7xl bg-gradient-to-br from-slate-900 to-black border border-white/10 sm:rounded-lg overflow-hidden flex flex-col lg:flex-row"
          style={{ maxHeight: "95vh", height: "95vh" }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-50 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X size={18} />
          </button>

          {/* Mobile: stacked layout / Desktop: side by side */}
          <div className="flex flex-col lg:flex-row w-full h-full overflow-hidden">

            {/* Main Display */}
            <div className="lg:w-[70%] flex flex-col overflow-y-auto">
              <div className="p-4 md:p-8">
                {/* Main Media Display */}
                <div className="bg-black rounded-lg overflow-hidden border border-white/10 mb-4">
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
                          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white/50" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                          <p className="text-white/70 text-sm font-medium">YOUTUBE VIDEO PLAYER</p>
                          <p className="text-white/40 text-xs mt-1">Embedded video placeholder</p>
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
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-4xl font-bold tracking-wide">
                    {item.title}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-cyan-400 text-sm md:text-base">
                      <span className="font-semibold">Client:</span> {item.client}
                    </p>
                    <p className="text-cyan-400 text-sm md:text-base">
                      <span className="font-semibold">Techniques:</span> {item.techniques}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400 mb-1">Description:</p>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Selector — horizontal scroll on mobile, vertical on desktop */}
            <div className="lg:w-[30%] bg-black/50 border-t lg:border-t-0 lg:border-l border-white/10">
              {/* Mobile: horizontal scroll */}
              <div className="flex lg:hidden overflow-x-auto gap-3 p-3" style={{ scrollbarWidth: 'none' }}>
                {/* Video thumb */}
                <button
                  onClick={() => setActiveMedia("video")}
                  className={`flex-shrink-0 w-32 aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeMedia === "video"
                      ? "border-cyan-500 shadow-lg shadow-cyan-500/50"
                      : "border-white/20"
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-6 h-6 mx-auto text-white/50 mb-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                      <p className="text-white text-xs font-semibold">VIDEO</p>
                    </div>
                  </div>
                </button>
                {/* Image thumbs */}
                {item.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveMedia(index)}
                    className={`flex-shrink-0 w-32 aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      activeMedia === index
                        ? "border-cyan-500 shadow-lg shadow-cyan-500/50"
                        : "border-white/20"
                    }`}
                  >
                    <div className="relative w-full h-full">
                      <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <p className="text-white text-xs font-semibold">Image{String(index + 1).padStart(2, "0")}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Desktop: vertical scroll */}
              <div className="hidden lg:block overflow-y-auto h-full p-4 space-y-3" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(6,182,212,0.3) transparent' }}>
                <button
                  onClick={() => setActiveMedia("video")}
                  className={`w-full aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeMedia === "video"
                      ? "border-cyan-500 shadow-lg shadow-cyan-500/50"
                      : "border-white/20 hover:border-cyan-400/50"
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-12 h-12 mx-auto text-white/50 mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                      <p className="text-white text-sm font-semibold">VIDEO</p>
                    </div>
                  </div>
                </button>
                {item.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveMedia(index)}
                    className={`w-full aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      activeMedia === index
                        ? "border-cyan-500 shadow-lg shadow-cyan-500/50"
                        : "border-white/20 hover:border-cyan-400/50"
                    }`}
                  >
                    <div className="relative w-full h-full">
                      <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <p className="text-white text-sm font-semibold">Image{String(index + 1).padStart(2, "0")}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
