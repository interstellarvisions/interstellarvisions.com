import { useState, useRef } from "react";
import { motion, useInView, Transition } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const cosmicTransition: Transition = {
  duration: 0.8,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

const faqs = [
  {
    question: "What types of content do you create?",
    answer:
      "We specialize in AI-powered video ads, short-form social content for TikTok and Instagram Reels, AI influencer content, product visuals, and full creative campaigns. Whether you need a single video or an entire content strategy, we deliver high-quality creative assets tailored to your brand.",
  },
  {
    question: "Is AI content allowed on social platforms?",
    answer:
      "Yes! AI-generated content is allowed on all major social media platforms including Instagram, TikTok, YouTube, and Facebook. We ensure all our content complies with platform guidelines and best practices. Our AI influencers and content are clearly labeled where required by platform policies, maintaining full transparency with your audience.",
  },
  {
    question: "Does it look realistic?",
    answer:
      "Absolutely. Our AI technology creates photorealistic content that's virtually indistinguishable from traditional production. We use cutting-edge AI models trained on millions of high-quality images and videos to ensure exceptional realism. From facial expressions to lighting and textures, every detail is meticulously crafted to meet premium quality standards.",
  },
  {
    question: "Can I request a specific look or style for my AI influencer?",
    answer:
      "Yes — completely. We build custom AI influencers from scratch based on your brand identity, target audience, and campaign goals. You choose everything from facial features and personality to content style and tone of voice. Your influencer is 100% unique to your brand and fully owned by you.",
  },
  {
    question: "Who owns the content?",
    answer:
      "You do. Upon project completion and final payment, you receive full commercial rights to use, modify, and distribute all content as you see fit. We provide a comprehensive license agreement with each project, ensuring complete clarity on ownership and usage rights.",
  },
  {
    question: "What do I need to provide to get started?",
    answer:
      "To kick things off we typically need your brand guidelines, visual references or inspiration, a brief describing your target audience and campaign goals, and any existing assets you'd like us to work with. The more context you give us, the better the output. Our team will guide you through the entire onboarding process.",
  },
  {
    question: "How many revisions do I get?",
    answer:
      "Every project includes a set number of revision rounds depending on the package. We work closely with you throughout the creative process to make sure the final result exceeds your expectations. Additional revision rounds can be added if needed — we're committed to getting it right.",
  },
  {
    question: "What's the typical turnaround time?",
    answer:
      "Timelines vary based on the type and complexity of the project. Individual content pieces are typically delivered within 3-5 business days, while full ad campaigns take 2-3 weeks. For ongoing contracts — whether 3, 6, or 12 months — we establish a consistent weekly delivery schedule tailored to your needs, such as 2-3 videos per week, ensuring a steady stream of high-quality content. We also offer a priority queue option for urgent deliverables, available at an additional fee, guaranteeing faster turnaround without compromising quality.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ ...cosmicTransition, delay: index * 0.1 }}
      className="border-b border-cyan-400/20"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex justify-between items-center text-left hover:text-cyan-300 transition-colors duration-500"
      >
        <span className="text-lg md:text-xl font-semibold pr-8">
          {faq.question}
        </span>
        <div className="flex-shrink-0">
          {isOpen ? (
            <Minus size={24} className="text-cyan-400" />
          ) : (
            <Plus size={24} className="text-cyan-400" />
          )}
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-cyan-100/60 leading-relaxed">{faq.answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={cosmicTransition}
          className="text-5xl md:text-7xl font-bold text-center mb-16 md:mb-24 tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-white via-cyan-100 to-cyan-400"
        >
          FAQ
        </motion.h2>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
