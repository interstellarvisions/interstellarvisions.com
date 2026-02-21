import { motion } from "framer-motion";
import { Zap, TrendingUp, DollarSign, Target, Rocket, Award } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Faster Turnaround",
    description:
      "AI-powered workflows deliver content in days, not weeks. Get your campaigns live faster than ever before.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Content Creation",
    description:
      "Create unlimited variations and iterations without additional production costs or time delays.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Production",
    description:
      "Save up to 70% on traditional production costs while maintaining premium quality standards.",
  },
  {
    icon: Target,
    title: "Data-Driven Results",
    description:
      "Every piece of content is optimized using AI insights and performance data for maximum impact.",
  },
  {
    icon: Rocket,
    title: "Cutting-Edge Technology",
    description:
      "Access to the latest AI tools and techniques that keep you ahead of the competition.",
  },
  {
    icon: Award,
    title: "Guaranteed Creative Performance",
    description:
      "We don't just deliver content — we deliver results. Every asset we produce is crafted to drive high views, engagement, and conversions, backed by our commitment to creative excellence.",
  },
];

const steps = [
  {
    number: "01",
    title: "Consultation & Brief",
    description:
      "We start with understanding your goals, target audience, and brand vision through detailed consultation.",
  },
  {
    number: "02",
    title: "AI Content Creation",
    description:
      "Our AI systems generate multiple variations of your content, ensuring perfect alignment with your brand.",
  },
  {
    number: "03",
    title: "Review & Revisions",
    description:
      "Collaborate with our team to refine and perfect every detail, ensuring flawless execution until it exceeds expectations.",
  },
  {
    number: "04",
    title: "Final Delivery",
    description:
      "Receive production-ready assets optimized for your chosen platforms and ready to convert.",
  },
];

function BenefitCard({
  benefit,
  index,
}: {
  benefit: typeof benefits[0];
  index: number;
}) {
  const Icon = benefit.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
      style={{ transform: "translateZ(0)", willChange: "opacity, transform" }}
      className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-500/30 transition-colors duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
        <Icon className="text-cyan-400" size={24} />
      </div>
      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {benefit.description}
      </p>
    </motion.div>
  );
}

function ProcessStep({
  step,
  index,
  isLast,
}: {
  step: typeof steps[0];
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
      style={{ transform: "translateZ(0)", willChange: "opacity, transform" }}
      className="flex gap-6"
    >
      <div className="flex flex-col items-center">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-xl">
          {step.number}
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-cyan-500/50 to-transparent" />
        )}
      </div>

      <div className="flex-1 pt-2 pb-12">
        <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-cyan-200">
          {step.title}
        </h3>
        <p className="text-gray-400 leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-slate-900 to-black"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-center mb-12 md:mb-16 tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-white via-cyan-100 to-cyan-400"
        >
          ABOUT US
        </motion.h2>

        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="max-w-8xl mx-auto text-center mb-20"
        >
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
            We are a cutting-edge AI creative studio transforming how brands create content. By merging artificial intelligence with elite creative direction, we craft stunning visuals and high-performing narratives that captivate audiences and deliver measurable results.
          </p>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Our mission is to make premium content creation accessible, scalable, and affordable for businesses of all sizes.
          </p>
        </motion.div>

        {/* Why Work With Us */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold text-center mb-12 tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-white via-cyan-100 to-cyan-400"
          >
            WHY WORK WITH US?
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={benefit.title} benefit={benefit} index={index} />
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-white via-cyan-100 to-cyan-400"
          >
            HOW IT WORKS
          </motion.h3>
          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={index}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
