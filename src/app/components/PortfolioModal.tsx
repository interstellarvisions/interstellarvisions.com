import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PortfolioItem {
  id: number;
  title: string;
  client: string;
  techniques: string;
  description: string;
  videoUrl: string;
  images: string[];
}

interface PortfolioModalProps {
  item: PortfolioItem;
  onClose: () => void;
}

export default function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  const [activeTab, setActiveTab] = useState<"video" | string>("video");
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <div className="relative min-h-screen flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-7xl bg-gradient-to-br from-slate-900 to-black border border-white/10 rounded-lg overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-6 md:p-8">
              {/* Title */}
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-wider">
                {item.title}
              </h2>

              {/* Main Content Layout */}
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Side - Media Viewer */}
                <div className="lg:w-2/3">
                  {/* Tab Navigation */}
                  <div className="flex gap-2 mb-4 overflow-x-auto">
                    <button
                      onClick={() => setActiveTab("video")}
                      className={`px-6 py-3 rounded-lg text-sm font-medium tracking-wide transition-all whitespace-nowrap ${
                        activeTab === "video"
                          ? "bg-cyan-500/20 border-2 border-cyan-500 text-cyan-400"
                          : "bg-white/5 border border-white/10 hover:bg-white/10"
                      }`}
                    >
                      VIDEO
                    </button>
                    {item.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveTab(`image${index}`);
                          setSelectedImage(index);
                        }}
                        className={`px-6 py-3 rounded-lg text-sm font-medium tracking-wide transition-all whitespace-nowrap ${
                          activeTab === `image${index}`
                            ? "bg-cyan-500/20 border-2 border-cyan-500 text-cyan-400"
                            : "bg-white/5 border border-white/10 hover:bg-white/10"
                        }`}
                      >
                        Image{index + 1}
                      </button>
                    ))}
                  </div>

                  {/* Media Display Area */}
                  <div className="bg-black rounded-lg overflow-hidden border border-white/10">
                    {activeTab === "video" ? (
                      <div className="aspect-video">
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
                            <p className="text-white/70 text-sm">YOUTUBE VIDEO PLAYER</p>
                            <p className="text-white/40 text-xs mt-2">
                              Embedded video placeholder
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-video">
                        <img
                          src={item.images[selectedImage]}
                          alt={`${item.title} - Image ${selectedImage + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Side - Project Details (Sticky) */}
                <div className="lg:w-1/3">
                  <div className="lg:sticky lg:top-8 space-y-6">
                    {/* Client Info */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                      <h3 className="text-sm text-cyan-400 mb-2 tracking-wider">
                        CLIENT
                      </h3>
                      <p className="text-lg font-medium">{item.client}</p>
                    </div>

                    {/* Techniques */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                      <h3 className="text-sm text-cyan-400 mb-2 tracking-wider">
                        TECHNIQUES
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-300">
                        {item.techniques}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                      <h3 className="text-sm text-cyan-400 mb-2 tracking-wider">
                        DESCRIPTION
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
