import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import CreatorProfileModal from "./CreatorProfileModal";
import CustomInfluencerModal from "./CustomInfluencerModal";

const creators = [
  {
    id: 1,
    name: "SOFIA",
    image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=400&h=400&fit=crop",
    fullBodyImage: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=600&h=900&fit=crop",
    bio: "Luxury Lifestyle AI Creator. Focused on high-end fashion, fine dining, and premium brand storytelling. A former fashion editor turned lifestyle entrepreneur, Sofia curates aspirational experiences with elegance and authority — optimized for high-conversion visual campaigns targeting discerning, affluent audiences.",
    personality: ["Sophisticated", "Elegant", "Graceful", "Confident"],
    useCases: ["Fashion campaigns", "Luxury brand partnerships", "Lifestyle content", "Travel & hospitality"],
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
    name: "MAYA",
    image: "https://images.unsplash.com/photo-1595436222774-4b1cd819aada?w=400&h=400&fit=crop",
    fullBodyImage: "https://images.unsplash.com/photo-1595436222774-4b1cd819aada?w=600&h=900&fit=crop",
    bio: "Wellness & Fitness AI Creator. Focused on holistic health, athletic performance, and sustainable living. A former corporate professional turned wellness coach, Maya brings authentic energy and genuine expertise to fitness and nutrition content — optimized for community-driven campaigns that inspire real lifestyle change.",
    personality: ["Approachable", "Motivational", "Authentic", "High-Energy"],
    useCases: ["Fitness campaigns", "Supplement brands", "Wellness content", "Healthy food brands"],
    specialties: ["Fitness", "Wellness", "Nutrition", "Mindfulness"],
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
    id: 3,
    name: "ISABELLA",
    image: "https://images.unsplash.com/photo-1595436222774-4b1cd819aada?w=400&h=400&fit=crop&sat=-100",
    fullBodyImage: "https://images.unsplash.com/photo-1595436222774-4b1cd819aada?w=600&h=900&fit=crop&sat=-100",
    bio: "Creative & Street Culture AI Creator. Focused on bold fashion, digital art, and urban lifestyle storytelling. A self-taught designer who built her audience through unfiltered artistic expression and fearless trend-setting, Bella brings magnetic energy to campaigns that demand authenticity and cultural edge.",
    personality: ["Bold", "Creative", "Unapologetic", "Trendsetter"],
    useCases: ["Streetwear campaigns", "Beauty brand launches", "Gen Z targeting", "Music & culture brands"],
    specialties: ["Fashion", "Beauty", "Street Art", "Music"],
    gallery: [
      "https://images.unsplash.com/photo-1595436222774-4b1cd819aada?w=300&h=300&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1672685667592-0392f458f46f?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1658806283210-6d7330062704?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1719176010035-17729577d496?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1641312874336-6279a832a3dc?w=300&h=300&fit=crop",
    ],
  },
  {
    id: 4,
    name: "ALEXANDER",
    image: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?w=400&h=400&fit=crop",
    fullBodyImage: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?w=600&h=900&fit=crop",
    bio: "Business & Tech AI Creator. Focused on entrepreneurship, innovation, and premium professional lifestyle. A former Fortune 500 executive turned tech founder, Alex commands authority and trust — optimized for thought leadership campaigns, premium product launches, and brands targeting ambitious, high-achieving professionals.",
    personality: ["Authoritative", "Driven", "Polished", "Trustworthy"],
    useCases: ["Tech product launches", "Luxury menswear", "Thought leadership", "Financial services"],
    specialties: ["Business", "Tech", "Productivity", "Leadership"],
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
    id: 5,
    name: "MARCUS",
    image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=400&h=400&fit=crop&sat=-100",
    fullBodyImage: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=600&h=900&fit=crop&sat=-100",
    bio: "Culture & Lifestyle AI Creator. Focused on food, urban culture, entertainment, and authentic community connection. A creative storyteller who built his platform on infectious personality and genuine representation, Marcus excels at campaigns that need broad demographic reach, cultural credibility, and magnetic on-screen energy.",
    personality: ["Charismatic", "Playful", "Relatable", "Entertaining"],
    useCases: ["Food & beverage brands", "Streetwear campaigns", "Tech & gadget reviews", "Grooming products"],
    specialties: ["Food Culture", "Lifestyle", "Fitness", "Entertainment"],
    gallery: [
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=300&h=300&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1595436222774-4b1cd819aada?w=300&h=300&fit=crop",
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
      style={{ transform: "translateZ(0)", willChange: "opacity, transform" }}
      onClick={onClick}
      className="group cursor-pointer text-center"
    >
      {/* Circular Image */}
      <div className="relative w-48 h-48 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
        {/* Safari fix: inline borderRadius + overflow + translateZ */}
        <div
          className="relative w-full h-full border-2 border-cyan-500/30 group-hover:border-cyan-500 transition-all duration-300"
          style={{ borderRadius: "50%", overflow: "hidden", transform: "translateZ(0)" }}
        >
          <img
            src={creator.image}
            alt={creator.name}
            style={{ willChange: "transform", transform: "translateZ(0)" }}
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
      style={{ transform: "translateZ(0)", willChange: "opacity, transform" }}
      onClick={onClick}
      className="group cursor-pointer text-center"
    >
      {/* Circular Plus Icon */}
      <div className="relative w-48 h-48 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
        {/* Safari fix: inline borderRadius + overflow + translateZ */}
        <div
          className="relative w-full h-full border-2 border-dashed border-cyan-500/50 group-hover:border-cyan-500 transition-all duration-300 bg-white/5 flex items-center justify-center"
          style={{ borderRadius: "50%", overflow: "hidden", transform: "translateZ(0)" }}
        >
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

  return (
    <section
      id="digital-creators"
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-black to-slate-900"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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

      {selectedCreator && (
        <CreatorProfileModal
          creator={selectedCreator}
          onClose={() => setSelectedCreator(null)}
        />
      )}

      {showCustomModal && (
        <CustomInfluencerModal onClose={() => setShowCustomModal(false)} />
      )}
    </section>
  );
}
