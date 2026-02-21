import { motion } from "framer-motion";

const services = [
  {
    title: "AI VIDEO ADS",
    description: "High-converting video advertisements powered by AI technology",
    image: "https://images.unsplash.com/photo-1612000656409-16fcf948b2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBjaW5lbWF0aWN8ZW58MXx8fHwxNzcxMDgyNDAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "PRODUCT VISUALS",
    description: "Stunning AI-generated product imagery and 3D visualizations",
    image: "https://images.unsplash.com/photo-1719176010035-17729577d496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBsdXh1cnl8ZW58MXx8fHwxNzcxMDY5MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "SHORT FORM SOCIAL CONTENT",
    description: "Engaging vertical video content optimized for TikTok, Reels, and Shorts",
    image: "https://images.unsplash.com/photo-1696695368125-fc0d809b4ab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzcxMDQ2MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "AI INFLUENCER CONTENT",
    description: "Content featuring our proprietary AI influencers and digital creators",
    image: "https://images.unsplash.com/photo-1641312874336-6279a832a3dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGlnaXRhbCUyMGF2YXRhcnxlbnwxfHx8fDE3NzEwODI0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
      style={{ transform: "translateZ(0)", willChange: "opacity, transform" }}
      className="group relative overflow-hidden rounded-lg border border-white/10 hover:border-cyan-500/50 transition-colors duration-300 aspect-[4/3]"
    >
      {/* Image sits in its own stacking context, isolated from opacity animation */}
      <div
        className="absolute inset-0"
        style={{ transform: "translateZ(0)", isolation: "isolate" }}
      >
        <img
          src={service.image}
          alt={service.title}
          style={{ transform: "translateZ(0)", willChange: "transform" }}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300"></div>
      </div>

      <div className="relative z-10 p-8 h-full flex flex-col justify-end">
        <h3 className="text-2xl font-bold mb-3 tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-cyan-200">
          {service.title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
}

export default function WhatWeCreate() {
  return (
    <section
      id="what-we-create"
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-black to-slate-900"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-center mb-16 md:mb-24 tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-cyan-400"
        >
          WHAT WE CREATE
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
