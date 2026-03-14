import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp, DollarSign, Target, Rocket, Award } from "lucide-react";

const shimmerStyle = `
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  .shimmer-about {
    background: linear-gradient(90deg, #ffffff 0%, #ffffff 35%, #67e8f9 50%, #ffffff 65%, #ffffff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s linear infinite;
  }
  .shimmer-sub {
    background: linear-gradient(90deg, #ffffff 0%, #ffffff 35%, #67e8f9 50%, #ffffff 65%, #ffffff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 5s linear infinite;
  }
`;

const benefits = [
  { icon: Zap, title: "Faster Turnaround", description: "AI-powered workflows deliver content in days, not weeks. Get your campaigns live faster than ever before." },
  { icon: TrendingUp, title: "Scalable Content Creation", description: "Create unlimited variations and iterations without additional production costs or time delays." },
  { icon: DollarSign, title: "Cost-Effective Production", description: "Save up to 70% on traditional production costs while maintaining premium quality standards." },
  { icon: Target, title: "Data-Driven Results", description: "Every piece of content is optimized using AI insights and performance data for maximum impact." },
  { icon: Rocket, title: "Cutting-Edge Technology", description: "Access to the latest AI tools and techniques that keep you ahead of the competition." },
  { icon: Award, title: "Guaranteed Creative Performance", description: "We don't just deliver content — we deliver results. Every asset we produce is crafted to drive high views, engagement, and conversions, backed by our commitment to creative excellence." },
];

const steps = [
  { number: "01", title: "Consultation & Brief", description: "We start with understanding your goals, target audience, and brand vision through detailed consultation." },
  { number: "02", title: "AI Content Creation", description: "Our AI systems generate multiple variations of your content, ensuring perfect alignment with your brand." },
  { number: "03", title: "Review & Revisions", description: "Collaborate with our team to refine and perfect every detail, ensuring flawless execution until it exceeds expectations." },
  { number: "04", title: "Final Delivery", description: "Receive production-ready assets optimized for your chosen platforms and ready to convert." },
];

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  const Icon = benefit.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-xl"
      style={{
        padding: "1px",
        background: hovered
          ? "linear-gradient(135deg, #06b6d4, #2563eb, #06b6d4)"
          : "linear-gradient(135deg, rgba(6,182,212,0.6), rgba(37,99,235,0.4), rgba(6,182,212,0.6))",
        transition: "background 0.4s ease",
      }}
    >
      <div className="bg-gradient-to-br from-slate-900/95 to-black/95 rounded-[11px] p-6 h-full transition-all duration-300">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
          style={{
            background: hovered ? "rgba(6,182,212,0.2)" : "rgba(6,182,212,0.08)",
            boxShadow: hovered ? "0 0 16px rgba(6,182,212,0.3)" : "none",
          }}
        >
          <Icon size={22} style={{ color: hovered ? "#67e8f9" : "#06b6d4", transition: "color 0.3s" }} />
        </div>
        <h3 className="text-lg font-bold mb-2 tracking-wide transition-colors duration-300" style={{ color: hovered ? "#67e8f9" : "#ffffff" }}>
          {benefit.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
        <div
          className="mt-4 h-[1px] bg-gradient-to-r from-cyan-500/0 via-cyan-400 to-cyan-500/0 transition-all duration-500"
          style={{ opacity: hovered ? 1 : 0, transform: hovered ? "scaleX(1)" : "scaleX(0)" }}
        />
      </div>
    </motion.div>
  );
}

function ProcessStep({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
      className="flex gap-6"
    >
      <div className="flex flex-col items-center">
        <div
          className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg relative"
          style={{ background: "linear-gradient(135deg, #06b6d4, #2563eb)", boxShadow: "0 0 16px rgba(6,182,212,0.4), 0 0 32px rgba(6,182,212,0.15)" }}
        >
          {step.number}
          <div className="absolute inset-0 rounded-full" style={{ border: "1px solid rgba(6,182,212,0.3)", transform: "scale(1.3)" }} />
        </div>
        {!isLast && <div className="w-[1px] flex-1 mt-3 bg-gradient-to-b from-cyan-500/50 to-transparent" />}
      </div>
      <div className="flex-1 pt-1 pb-12">
        <h3 className="text-xl font-bold mb-2 tracking-wide shimmer-sub">{step.title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function AboutUs() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      <style>{shimmerStyle}</style>

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "rgba(6,182,212,0.04)", filter: "blur(60px)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "rgba(37,99,235,0.04)", filter: "blur(60px)" }} />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-12 md:mb-16 tracking-wider shimmer-about">ABOUT US</h2>

        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            We are a cutting-edge AI creative studio transforming how brands create content. By merging artificial intelligence with elite creative direction, we craft stunning visuals and high-performing narratives that captivate audiences and deliver measurable results.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Our mission is to make premium content creation accessible, scalable, and affordable for businesses of all sizes.
          </p>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-8" />
        </div>

        <div className="mb-28">
          <h3 className="text-3xl md:text-5xl font-bold text-center mb-4 tracking-wide shimmer-about">WHY WORK WITH US?</h3>
          <p className="text-center text-gray-500 text-sm tracking-[0.2em] uppercase mb-12">Built for results · Powered by AI</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, index) => <BenefitCard key={benefit.title} benefit={benefit} index={index} />)}
          </div>
        </div>

        <div>
          <h3 className="text-3xl md:text-5xl font-bold text-center mb-4 tracking-wide shimmer-about">HOW IT WORKS</h3>
          <p className="text-center text-gray-500 text-sm tracking-[0.2em] uppercase mb-16">Simple · Fast · Effective</p>
          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => <ProcessStep key={step.number} step={step} index={index} isLast={index === steps.length - 1} />)}
          </div>
        </div>
      </div>
    </section>
  );
}