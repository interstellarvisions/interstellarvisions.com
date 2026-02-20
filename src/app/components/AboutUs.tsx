import { useRef } from "react";
import { motion, useInView } from "motion/react";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = benefit.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-500/30 transition-all duration-300"
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex gap-6"
    >
      {/* Left column: circle + line */}
      <div className="flex flex-col items-center">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-xl">
          {step.number}
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-cyan-500/50 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pt-2 pb-12">
        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
        <p className="text-gray-400 leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function AboutUs() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-slate-900 to-black"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Title */}
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-center mb-12 md:mb-16 tracking-wider"
        >
          ABOUT US
        </motion.h2>

        {/* Main Statement */}
        <div className="max-w-8xl mx-auto text-center mb-20">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
            We are a cutting-edge AI creative studio transforming how brands create content. By merging artificial intelligence with elite creative direction, we craft stunning visuals and high-performing narratives that captivate audiences and deliver measurable results.
          </p>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Our mission is to make premium content creation accessible, scalable, and affordable for businesses of all sizes.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-24">
          <h3 className="text-3xl md:text-5xl font-bold text-center mb-12 tracking-wide">
            WHY WORK WITH US?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={benefit.title} benefit={benefit} index={index} />
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div>
          <h3 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-wide">
            HOW IT WORKS
          </h3>
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
