import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CustomInfluencerModalProps {
  onClose: () => void;
}

export default function CustomInfluencerModal({
  onClose,
}: CustomInfluencerModalProps) {
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
            className="relative w-full max-w-2xl bg-gradient-to-br from-slate-900 to-black border border-cyan-500/30 rounded-lg overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-14">
              {/* Title */}
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-wider text-center">
                Custom AI Influencer
              </h2>

              {/* Body */}
              <div className="space-y-6 text-center mb-8">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Not seeing the perfect face for your brand?
                </p>

                <p className="text-gray-400 leading-relaxed">
                  We create fully custom AI influencers tailored to your brand
                  identity, audience, and campaign goals.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  From facial structure and personality to content style and
                  campaign positioning, we design your influencer from scratch
                  and integrate them directly into your advertising and social
                  media strategy.
                </p>

                <p className="text-xl font-semibold text-cyan-400 mt-8">
                  Your brand. Your face. Fully controlled. Fully scalable.
                </p>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button
                  onClick={() => {
                    onClose();
                    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300);
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg tracking-wide"
                >
                  REQUEST CUSTOM MODEL
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
