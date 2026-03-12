import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import CreatorProfileModal from "./CreatorProfileModal";
import CustomInfluencerModal from "./CustomInfluencerModal";
import { useSafari } from "../hooks/useSafari";

const shimmerStyle = `
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  .shimmer-creators {
    background: linear-gradient(90deg, #ffffff 0%, #ffffff 35%, #67e8f9 50%, #ffffff 65%, #ffffff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s linear infinite;
  }
`;

const staticTitleStyle = {
  background: "linear-gradient(to bottom, #ffffff 0%, #a5f3fc 60%, #67e8f9 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const creators = [
  {
    id: 1,
    name: "SOFIA",
    image: "/images/Sofia/sofia_1.jpeg",
    fullBodyImage: "/images/Sofia/sofia_1.jpeg",
    bio: "Luxury Lifestyle AI Creator. Focused on high-end fashion, fine dining, and premium brand storytelling. A former fashion editor turned lifestyle entrepreneur, Sofia curates aspirational experiences with elegance and authority — optimized for high-conversion visual campaigns targeting discerning, affluent audiences.",
    personality: ["Sophisticated", "Elegant", "Graceful", "Confident"],
    useCases: ["Fashion campaigns", "Luxury brand partnerships", "Lifestyle content", "Travel & hospitality"],
    specialties: ["Fashion", "Lifestyle", "Beauty", "Travel"],
    gallery: [
      "/images/Sofia/sofia_1.jpeg",
      "/images/Sofia/sofia_2.jpeg",
      "/images/Sofia/sofia_3.jpeg",
      "/images/Sofia/sofia_4.jpeg",
      "/images/Sofia/sofia_5.jpeg",
      "/images/Sofia/sofia_6.jpeg",
    ],
  },
  {
    id: 2,
    name: "MAYA",
    image: "/images/Maya/maya_1.jpeg",
    fullBodyImage: "/images/Maya/maya_1.jpeg",
    bio: "Wellness & Fitness AI Creator. Focused on holistic health, athletic performance, and sustainable living. A former corporate professional turned wellness coach, Maya brings authentic energy and genuine expertise to fitness and nutrition content — optimized for community-driven campaigns that inspire real lifestyle change.",
    personality: ["Approachable", "Motivational", "Authentic", "High-Energy"],
    useCases: ["Fitness campaigns", "Supplement brands", "Wellness content", "Healthy food brands"],
    specialties: ["Fitness", "Wellness", "Nutrition", "Mindfulness"],
    gallery: [
      "/images/Maya/maya_1.jpeg",
      "/images/Maya/maya_2.jpeg",
      "/images/Maya/maya_3.jpeg",
      "/images/Maya/maya_4.jpeg",
      "/images/Maya/maya_5.jpeg",
      "/images/Maya/maya_6.jpeg",
    ],
  },
  {
    id: 3,
    name: "ISABELLA",
    image: "/images/Isabella/isabella_1.jpeg",
    fullBodyImage: "/images/Isabella/isabella_1.jpeg",
    bio: "Creative & Street Culture AI Creator. Focused on bold fashion, digital art, and urban lifestyle storytelling. A self-taught designer who built her audience through unfiltered artistic expression and fearless trend-setting, Bella brings magnetic energy to campaigns that demand authenticity and cultural edge.",
    personality: ["Bold", "Creative", "Unapologetic", "Trendsetter"],
    useCases: ["Streetwear campaigns", "Beauty brand launches", "Gen Z targeting", "Music & culture brands"],
    specialties: ["Fashion", "Beauty", "Street Art", "Music"],
    gallery: [
      "/images/Isabella/isabella_1.jpeg",
      "/images/Isabella/isabella_2.jpeg",
      "/images/Isabella/isabella_3.jpeg",
      "/images/Isabella/isabella_4.jpeg",
      "/images/Isabella/isabella_5.jpeg",
      "/images/Isabella/isabella_6.jpeg",
    ],
  },
  {
    id: 4,
    name: "ALEXANDER",
    image: "/images/Alex/alex_1.jpeg",
    fullBodyImage: "/images/Alex/alex_1.jpeg",
    bio: "Business & Tech AI Creator. Focused on entrepreneurship, innovation, and premium professional lifestyle. A former Fortune 500 executive turned tech founder, Alex commands authority and trust — optimized for thought leadership campaigns, premium product launches, and brands targeting ambitious, high-achieving professionals.",
    personality: ["Authoritative", "Driven", "Polished", "Trustworthy"],
    useCases: ["Tech product launches", "Luxury menswear", "Thought leadership", "Financial services"],
    specialties: ["Business", "Tech", "Productivity", "Leadership"],
    gallery: [
      "/images/Alex/alex_1.jpeg",
      "/images/Alex/alex_2.jpeg",
      "/images/Alex/alex_3.jpeg",
      "/images/Alex/alex_4.jpeg",
      "/images/Alex/alex_5.jpeg",
      "/images/Alex/alex_6.jpeg",
    ],
  },
  {
    id: 5,
    name: "MARCUS",
    image: "/images/Marcus/marcus_1.jpeg",
    fullBodyImage: "/images/Marcus/marcus_1.jpeg",
    bio: "Culture & Lifestyle AI Creator. Focused on food, urban culture, entertainment, and authentic community connection. A creative storyteller who built his platform on infectious personality and genuine representation, Marcus excels at campaigns that need broad demographic reach, cultural credibility, and magnetic on-screen energy.",
    personality: ["Charismatic", "Playful", "Relatable", "Entertaining"],
    useCases: ["Food & beverage brands", "Streetwear campaigns", "Tech & gadget reviews", "Grooming products"],
    specialties: ["Food Culture", "Lifestyle", "Fitness", "Entertainment"],
    gallery: [
      "/images/Marcus/marcus_1.jpeg",
      "/images/Marcus/marcus_2.jpeg",
      "/images/Marcus/marcus_3.jpeg",
      "/images/Marcus/marcus_4.jpeg",
      "/images/Marcus/marcus_5.jpeg",
      "/images/Marcus/marcus_6.jpeg",
    ],
  },
];

// ─── SAFARI creator card ───
function SafariCreatorCard({
  creator,
  onClick,
}: {
  creator: typeof creators[0];
  onClick: () => void;
}) {
  return (
    <div onClick={onClick} className="group cursor-pointer text-center">
      <div className="relative w-48 h-48 mx-auto mb-4">
        <div
          className="relative w-full h-full border-2 border-cyan-500/50"
          style={{ borderRadius: "50%", overflow: "hidden" }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${creator.gallery[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center 20%",
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(circle, transparent 40%, rgba(0,0,0,0.6) 100%)" }}
          />
        </div>
      </div>
      <h3 className="text-xl font-bold tracking-wider text-white">{creator.name}</h3>
    </div>
  );
}

// ─── SAFARI custom card ───
function SafariCustomCard({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="group cursor-pointer text-center">
      <div className="relative w-48 h-48 mx-auto mb-4">
        <div
          className="relative w-full h-full border-2 border-dashed border-cyan-500/50 bg-white/5 flex items-center justify-center"
          style={{ borderRadius: "50%" }}
        >
          <Plus size={64} className="text-cyan-400" />
        </div>
      </div>
      <h3 className="text-xl font-bold tracking-wider text-white">CUSTOM</h3>
    </div>
  );
}

// ─── Chrome creator card ───
function ChromeCreatorCard({
  creator,
  index,
  onClick,
}: {
  creator: typeof creators[0];
  index: number;
  onClick: () => void;
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % creator.gallery.length);
        setIsTransitioning(false);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, [creator.gallery.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer text-center"
    >
      <div className="relative w-48 h-48 mx-auto mb-4">
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 blur-xl"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
        <div
          className="relative w-full h-full border-2 border-cyan-500/50 group-hover:border-cyan-500 transition-all duration-300"
          style={{ borderRadius: "50%", overflow: "hidden" }}
        >
          <div
            className="w-full h-full group-hover:scale-110 transition-transform duration-500"
            style={{
              backgroundImage: `url(${creator.gallery[currentImage]})`,
              backgroundSize: "cover",
              backgroundPosition: "center 20%",
              opacity: isTransitioning ? 0 : 1,
              filter: isTransitioning ? "blur(6px)" : "blur(0px)",
              transition: "opacity 0.4s ease-in-out, filter 0.4s ease-in-out, transform 0.5s ease",
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(circle, transparent 40%, rgba(0,0,0,0.6) 100%)" }}
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-xs font-bold tracking-widest">VIEW</span>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold tracking-wider group-hover:text-cyan-400 transition-colors relative inline-block">
        {creator.name}
        <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-[1px] bg-cyan-400 transition-all duration-300" />
      </h3>
    </motion.div>
  );
}

// ─── Chrome custom card ───
function ChromeCustomCard({ index, onClick }: { index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer text-center"
    >
      <div className="relative w-48 h-48 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
        <div
          className="relative w-full h-full border-2 border-dashed border-cyan-500/50 group-hover:border-cyan-500 transition-all duration-300 bg-white/5 flex items-center justify-center"
          style={{ borderRadius: "50%", overflow: "hidden" }}
        >
          <Plus size={64} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      <h3 className="text-xl font-bold tracking-wider group-hover:text-cyan-400 transition-colors relative inline-block">
        CUSTOM
        <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-[1px] bg-cyan-400 transition-all duration-300" />
      </h3>
    </motion.div>
  );
}

export default function DigitalCreators() {
  const isSafari = useSafari();
  const [selectedCreator, setSelectedCreator] = useState<typeof creators[0] | null>(null);
  const [showCustomModal, setShowCustomModal] = useState(false);

  return (
    <section
      id="digital-creators"
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-black to-slate-900"
    >
      {!isSafari && <style>{shimmerStyle}</style>}

      <div className="max-w-[1400px] mx-auto">
        <h2
          className={`text-5xl md:text-7xl font-bold text-center mb-16 md:mb-24 tracking-wider ${!isSafari ? "shimmer-creators" : ""}`}
          style={isSafari ? staticTitleStyle : undefined}
        >
          OUR DIGITAL CREATORS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
          {creators.map((creator, index) =>
            isSafari ? (
              <SafariCreatorCard key={creator.id} creator={creator} onClick={() => setSelectedCreator(creator)} />
            ) : (
              <ChromeCreatorCard key={creator.id} creator={creator} index={index} onClick={() => setSelectedCreator(creator)} />
            )
          )}
          {isSafari ? (
            <SafariCustomCard onClick={() => setShowCustomModal(true)} />
          ) : (
            <ChromeCustomCard index={creators.length} onClick={() => setShowCustomModal(true)} />
          )}
        </div>
      </div>

      {selectedCreator && (
        <CreatorProfileModal creator={selectedCreator} onClose={() => setSelectedCreator(null)} />
      )}
      {showCustomModal && (
        <CustomInfluencerModal onClose={() => setShowCustomModal(false)} />
      )}
    </section>
  );
}