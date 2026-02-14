import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Is AI content allowed on social platforms?",
    answer:
      "Yes! AI-generated content is allowed on all major social media platforms including Instagram, TikTok, YouTube, and Facebook. We ensure all our content complies with platform guidelines and best practices. Our AI influencers and content are clearly labeled where required by platform policies, maintaining transparency with your audience.",
  },
  {
    question: "Does it look realistic?",
    answer:
      "Absolutely. Our AI technology creates photorealistic content that's virtually indistinguishable from traditional production. We use cutting-edge AI models trained on millions of high-quality images and videos to ensure exceptional realism. From facial expressions to lighting and textures, every detail is meticulously crafted to meet premium quality standards.",
  },
  {
    question: "Who owns the content?",
    answer:
      "You own all the content we create for you. Upon project completion and final payment, you receive full commercial rights to use, modify, and distribute the content as you see fit. We provide a comprehensive license agreement with each project, ensuring complete clarity on ownership and usage rights.",
  },
  {
    question: "Do you manage ad campaigns too?",
    answer:
      "While our primary focus is content creation, we offer campaign consultation services and can connect you with trusted partners for media buying and campaign management. We'll ensure your AI-generated content is optimized for the platforms you're advertising on, and can provide guidance on targeting and strategy.",
  },
  {
    question: "What's the typical turnaround time?",
    answer:
      "Project timelines vary based on complexity and scope. Simple content pieces can be delivered within 3-5 business days, while comprehensive campaigns typically take 2-3 weeks. Our AI-powered workflow is significantly faster than traditional production, often delivering results 5-10x quicker without compromising quality.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with a diverse range of industries including fashion, beauty, technology, e-commerce, real estate, fitness, food & beverage, and professional services. Our AI influencers and content creation capabilities are versatile enough to adapt to virtually any industry or niche. We customize our approach to match your specific industry requirements and target audience.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="faq"
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-black to-slate-900"
    >
      <div className="max-w-[1000px] mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-center mb-16 md:mb-24 tracking-wider"
        >
          FAQ
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 border border-white/10 rounded-lg px-6 data-[state=open]:border-cyan-500/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-cyan-400 transition-colors py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
