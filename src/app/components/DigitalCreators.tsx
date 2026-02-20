import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Plus } from "lucide-react";
import CreatorProfileModal from "./CreatorProfileModal";
import CustomInfluencerModal from "./CustomInfluencerModal";

const creators = [
  {
    id: 1,
    name: "SOFIA",
    image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=400&h=400&fit=crop",
    fullBodyImage: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=600&h=900&fit=crop",
    bio: "Luxury Lifestyle AI Creator. Focused on fashion, beauty, and premium brand storytelling. Optimized for high-conversion visual campaigns.",
    personality: ["Sophisticated", "Elegant", "Approachable", "Trendsetter"],
    useCases: ["Fashion campaigns", "Luxury brand partnerships", "Lifestyle content", "Product launches"],
    specialties: ["Fashion", "Lifestyle", "Beauty", "Travel"],
    gallery: [
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1595436222774-4b1cd819aada?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1672685667592-0392f458f46f?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1641312874336-6279a832a3dc?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1719176010035-17729577d496?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1658806283210-6d7330062704?w=300&h=300&fit=crop",
    ],
  },
  {
    id: 2,
    name: "ALEXANDER",
    image: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?w=400&h=400&fit=crop",
    fullBodyImage: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?w=600&h=900&fit=crop",
    bio: "Tech-savvy AI creator focused on innovation, technology, and modern lifestyle. His dynamic presence makes him perfect for tech brands and startups.",
    personality: ["Innovative", "Tech-savvy", "Dynamic", "Forward-thinking"],
    useCases: ["Tech product launches", "Startup campaigns", "Innovation content", "Digital marketing"],
    specialties: ["Technology", "Innovation", "Business", "Lifestyle"],
    gallery: [
      "https://images.unsplash.com/photo-1672685667592-0392f458f46f?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1595436222774-4b1cd819aada?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1770220742903-f113513d0194?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1612000656409-16fcf948b2d9?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1696695368125-fc0d809b4ab5?w=300&h=300&fit=crop",
    ],
  },
  {
    id: 3,
    name: "ISABELLA",
    image: "https://images.unsplash.com/photo-1595436222774-4b1cd819aada?w=400&h=400&fit=crop",
    fullBodyImage: "https://images.unsplash.com/photo-1595436222774-4b1cd819aada?w=600&h=900&fit=crop",
    bio: "Bob brings energy and authenticity to every campaign. Perfect for fitness, wellness, and motivational content that inspires audiences to take action.",
    personality: ["Energetic", "Authentic", "Motivational", "Inspiring"],
    useCases: ["Fitness campaigns", "Wellness brands", "Sports content", "Motivational marketing"],
    specialties: ["Fitness", "Wellness", "Sports", "Motivation"],
    gallery: [
      "https://images.unsplash.com/photo-1595436222774-4b1cd819aada?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1672685667592-0392f458f46f?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1658806283210-6d7330062704?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1719176010035-17729577d496?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1641312874336-6279a832a3dc?w=300&h=300&fit=crop",
    ],
  },
  {
    id: 4,
    name: "MARCUS",
    image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=400&h=400&fit=crop&sat=-100",
    fullBodyImage: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=600&h=900&fit=crop&sat=-100",
    bio: "Ana is our versatile AI creator specializing in beauty, art, and creative content. Her artistic vision brings a unique perspective to every project.",
    personality: ["Creative", "Artistic", "Versatile", "Visionary"],
    useCases: ["Beauty campaigns", "Art direction", "Creative content", "Brand storytelling"],
    specialties: ["Beauty", "Art", "Design", "Creative Direction"],
    gallery: [
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=300&h=300&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1595436222774-4b1cd819aada?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1672685667592-0392f458f46f?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1719176010035-17729577d496?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1696695368125-fc0d809b4ab5?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1770220742903-f113513d0194?w=300&h=300&fit=crop",
    ],
  },
  {
    id: 5,
    name: "MAYA",
    image: "https://images.unsplash.com/photo-1595436222774-4b1cd819aada?w=400&h=400&fit=crop&sat=-100",
    fullBodyImage: "https://images.unsplash.com/photo-1595436222774-4b1cd819aada?w=600&h=900&fit=crop&sat=-100",
    bio: "Sarah is our professional AI influencer for corporate and business content. Her polished presence is perfect for B2B campaigns and professional services.",
    personality: ["Professional", "Polished", "Trustworthy", "Articulate"],
    useCases: ["B2B campaigns", "Corporate content", "Professional services", "Business communication"],
    specialties: ["Business", "Corporate", "Finance", "Professional Development"],
    gallery: [
      "https://images.unsplash.com/photo-1595436222774-4b1cd819aada?w=300&h=300&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1672685667592-0392f458f46f?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1658806283210-6d7330062704?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1612000656409-16fcf948b2d9?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1641312874336-6279a832a3dc?w=300&h=300&fit=crop",
    ],
  },
];

function CreatorCard({
  creator,
  index,
  onClick,
}: {
  creator: typeof creators[0];
  index: number;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer text-center"
    >
      {/* Circular Image */}
      <div className="relative w-48 h-48 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-500/30 group-hover:border-cyan-500 transition-all duration-300">
          <img
            src={creator.image}
            alt={creator.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold tracking-wider group-hover:text-cyan-400 transition-colors">
        {creator.name}
      </h3>
    </motion.div>
  );
}

function CustomCard({ index, onClick }: { index: number; onClick: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer text-center"
    >
      {/* Circular Plus Icon */}
      <div className="relative w-48 h-48 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-dashed border-cyan-500/50 group-hover:border-cyan-500 transition-all duration-300 bg-white/5 flex items-center justify-center">
          <Plus size={64} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold tracking-wider group-hover:text-cyan-400 transition-colors">
        CUSTOM
      </h3>
    </motion.div>
  );
}

export default function DigitalCreators() {
  const [selectedCreator, setSelectedCreator] = useState<typeof creators[0] | null>(null);
  const [showCustomModal, setShowCustomModal] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="digital-creators"
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-black to-slate-900"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-center mb-16 md:mb-24 tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-white via-cyan-100 to-cyan-400"
        >
          OUR DIGITAL CREATORS
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
          {creators.map((creator, index) => (
            <CreatorCard
              key={creator.id}
              creator={creator}
              index={index}
              onClick={() => setSelectedCreator(creator)}
            />
          ))}
          <CustomCard index={creators.length} onClick={() => setShowCustomModal(true)} />
        </div>
      </div>

      {/* Creator Profile Modal */}
      {selectedCreator && (
        <CreatorProfileModal
          creator={selectedCreator}
          onClose={() => setSelectedCreator(null)}
        />
      )}

      {/* Custom Influencer Modal */}
      {showCustomModal && (
        <CustomInfluencerModal onClose={() => setShowCustomModal(false)} />
      )}
    </section>
  );
}