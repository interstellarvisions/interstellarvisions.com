import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Creator {
  id: number;
  name: string;
  image: string;
  fullBodyImage: string;
  bio: string;
  personality: string[];
  useCases: string[];
  specialties: string[];
  gallery: string[];
}

interface CreatorProfileModalProps {
  creator: Creator;
  onClose: () => void;
}

export default function CreatorProfileModal({
  creator,
  onClose,
}: CreatorProfileModalProps) {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(0);

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
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Panel - Images */}
                <div className="lg:w-1/3">
                  {/* Full Body Image */}
                  <div className="mb-6 border border-white/10 rounded-lg overflow-hidden">
                    <img
                      src={creator.gallery[selectedGalleryImage]}
                      alt={`${creator.name} - Full body`}
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </div>

                  {/* Gallery Selection */}
                  <div>
                    <p className="text-xs text-cyan-400 tracking-wider mb-3">
                      SELECTION OF 6 PHOTOS
                    </p>
                    <div className="grid grid-cols-6 gap-2">
                      {creator.gallery.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedGalleryImage(index)}
                          className={`aspect-square rounded-full overflow-hidden border-2 transition-all ${
                            selectedGalleryImage === index
                              ? "border-cyan-500 scale-110"
                              : "border-white/20 hover:border-cyan-400/50"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${creator.name} - Gallery ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Panel - Video & Info */}
                <div className="lg:w-2/3 space-y-6">
                  {/* Video Player */}
                  <div className="bg-black rounded-lg overflow-hidden border border-white/10">
                    <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-white/50"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                        <p className="text-white/70 text-sm font-medium">
                          HORIZONTAL VIDEO
                        </p>
                        <p className="text-white/40 text-xs mt-1">
                          TALKING HEADSHOT OF INFLUENCER
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* About Section */}
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 tracking-wider">
                      ABOUT {creator.name}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {creator.bio}
                    </p>

                    {/* Personality Traits */}
                    <div className="mb-6">
                      <h4 className="text-sm text-cyan-400 tracking-wider mb-3">
                        PERSONALITY TRAITS
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {creator.personality.map((trait, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-white/5 border border-cyan-500/30 rounded-full text-sm"
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-6">
                      <h4 className="text-sm text-cyan-400 tracking-wider mb-3">
                        USE CASES
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {creator.useCases.map((useCase, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-sm text-gray-300"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Content Specialties */}
                    <div>
                      <h4 className="text-sm text-cyan-400 tracking-wider mb-3">
                        CONTENT SPECIALTIES
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {creator.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-sm text-cyan-300"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
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
