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
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.documentElement.classList.add("hide-scrollbar");
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.documentElement.classList.remove("hide-scrollbar");
      if (!document.querySelector("[data-allwork-modal]")) {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.documentElement.style.scrollBehavior = "auto";
        document.body.style.scrollBehavior = "auto";
        window.scrollTo({ top: scrollY, behavior: "instant" as ScrollBehavior });
        requestAnimationFrame(() => {
          document.documentElement.style.scrollBehavior = "";
          document.body.style.scrollBehavior = "";
        });
      }
    };
  }, []);

  const videoThumbSrc = `https://img.youtube.com/vi/${item.videoUrl.split("/embed/")[1]?.split("?")[0]}/maxresdefault.jpg`;

  const thumbClass = (active: boolean) =>
    `border-2 transition-all duration-300 ${
      active ? "border-violet-500" : "border-white/20 hover:border-violet-400/50"
    }`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">

        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
          style={{ background: "rgba(5,3,13,0.85)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
        />

        {/* X button — outside the card, top right of screen */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          onClick={onClose}
          className="fixed top-5 right-5 z-[101] w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: "rgba(124,58,237,0.15)",
            border: "1px solid rgba(124,58,237,0.4)",
            backdropFilter: "blur(8px)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(124,58,237,0.35)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(167,139,250,0.8)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(124,58,237,0.15)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(124,58,237,0.4)";
          }}
        >
          <X size={18} className="text-white" />
        </motion.button>

        {/* Card — frosted glass floating feel */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full sm:max-w-7xl sm:rounded-2xl overflow-hidden flex flex-col lg:flex-row"
          style={{
            maxHeight: "90vh",
            height: "90vh",
            background: "linear-gradient(135deg, rgba(20,12,40,0.98) 0%, rgba(8,5,16,0.99) 100%)",
            border: "1px solid rgba(124,58,237,0.2)",
            boxShadow: "0 0 60px rgba(124,58,237,0.15), 0 0 120px rgba(124,58,237,0.05), 0 40px 80px rgba(0,0,0,0.6)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col lg:flex-row w-full h-full overflow-hidden">

            {/* Left — main media + info */}
            <div className="lg:w-[70%] flex flex-col overflow-y-auto">
              <div className="p-4 md:p-8">
                <div className="rounded-xl overflow-hidden mb-4" style={{ border: "1px solid rgba(124,58,237,0.2)" }}>
                  <motion.div
                    key={String(activeMedia)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="aspect-video"
                  >
                    {activeMedia === "video" ? (
                      <iframe
                        src={`${item.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                        style={{ border: "none" }}
                      />
                    ) : (
                      <img
                        src={item.images[activeMedia as number]}
                        alt={`${item.title} - Image ${(activeMedia as number) + 1}`}
                        loading="lazy"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </motion.div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl md:text-4xl font-bold tracking-wide">{item.title}</h3>
                  <div className="space-y-1">
                    <p className="text-violet-400 text-sm md:text-base">
                      <span className="font-semibold">Client:</span> {item.client}
                    </p>
                    <p className="text-violet-400 text-sm md:text-base">
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

            {/* Right — thumbnail sidebar */}
            <div className="lg:w-[30%] border-t lg:border-t-0 lg:border-l" style={{ borderColor: "rgba(124,58,237,0.15)", background: "rgba(0,0,0,0.3)" }}>

              {/* Mobile: horizontal scroll */}
              <div className="flex lg:hidden overflow-x-auto gap-3 p-3" style={{ scrollbarWidth: "none" }}>
                <button
                  onClick={() => setActiveMedia("video")}
                  className={`flex-shrink-0 w-32 aspect-video rounded-lg overflow-hidden ${thumbClass(activeMedia === "video")}`}
                >
                  <div className="relative w-full h-full">
                    <img src={videoThumbSrc} alt="Video thumbnail" loading="lazy" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </button>
                {item.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveMedia(index)}
                    className={`flex-shrink-0 w-32 aspect-video rounded-lg overflow-hidden ${thumbClass(activeMedia === index)}`}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} loading="lazy" draggable={false} onContextMenu={(e) => e.preventDefault()} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Desktop: vertical scroll */}
              <div
                className="hidden lg:block overflow-y-auto h-full p-4 space-y-3"
                style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(124,58,237,0.3) transparent" }}
              >
                <button
                  onClick={() => setActiveMedia("video")}
                  className={`w-full aspect-video rounded-lg overflow-hidden ${thumbClass(activeMedia === "video")}`}
                >
                  <div className="relative w-full h-full">
                    <img src={videoThumbSrc} alt="Video thumbnail" loading="lazy" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </button>
                {item.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveMedia(index)}
                    className={`w-full aspect-video rounded-lg overflow-hidden ${thumbClass(activeMedia === index)}`}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} loading="lazy" draggable={false} onContextMenu={(e) => e.preventDefault()} className="w-full h-full object-cover" />
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