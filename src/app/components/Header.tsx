import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSafari } from "../hooks/useSafari";

interface HeaderProps {
  scrolled: boolean;
}

const navSections = [
  { label: "HOME", id: "hero" },
  { label: "ABOUT", id: "about" },
  { label: "FAQ", id: "faq" },
  { label: "CONTACT", id: "contact" },
];

const aiMediaItems = [
  { label: "OUR WORK", id: "our-work" },
  { label: "DIGITAL CREATORS", id: "digital-creators" },
];

export default function Header({ scrolled }: HeaderProps) {
  const isSafari = useSafari();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aiMediaOpen, setAiMediaOpen] = useState(false);
  const [mobileAiMediaOpen, setMobileAiMediaOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sectionIds = ["hero", "our-work", "digital-creators", "about", "faq", "contact"];
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); }); },
      { threshold: 0.3 }
    );
    sectionIds.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setAiMediaOpen(false);
    setMobileAiMediaOpen(false);
    setTimeout(() => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }, 350);
  };

  const isAiMediaActive = activeSection === "our-work" || activeSection === "digital-creators";

  const NavButton = ({ label, id }: { label: string; id: string }) => {
    const isActive = activeSection === id;
    return (
      <button onClick={() => scrollToSection(id)} className={`relative text-sm tracking-wider transition-colors duration-300 ${isActive ? "text-cyan-400" : "hover:text-cyan-400"}`}>
        {label}
        {isActive && (
          isSafari
            ? <div className="absolute -bottom-1 left-0 right-0 h-[1px] bg-cyan-400" />
            : <motion.div layoutId="activeIndicator" className="absolute -bottom-1 left-0 right-0 h-[1px] bg-cyan-400" />
        )}
      </button>
    );
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/90 border-b border-cyan-500/10 shadow-lg shadow-black/20" : "bg-transparent"}`}>
      <div className="max-w-[1400px] mx-auto px-6 py-2 flex items-center justify-between">

        <button onClick={() => scrollToSection("hero")} className="flex items-center -my-2 cursor-pointer group">
          <img src="/images/logo.webp" alt="Logo" loading="lazy" draggable={false} onContextMenu={(e) => e.preventDefault()} className="h-20 w-auto scale-120 origin-left transition-opacity duration-300 group-hover:opacity-80" />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <NavButton label="HOME" id="hero" />
          <div className="relative" onMouseEnter={() => setAiMediaOpen(true)} onMouseLeave={() => setAiMediaOpen(false)}>
            <button className={`flex items-center gap-1 text-sm tracking-wider transition-colors duration-300 relative ${isAiMediaActive ? "text-cyan-400" : "hover:text-cyan-400"}`}>
              AI MEDIA
              <ChevronDown size={14} className={`transition-transform duration-300 ${aiMediaOpen ? "rotate-180" : ""}`} />
              {isAiMediaActive && (
                isSafari
                  ? <div className="absolute -bottom-1 left-0 right-0 h-[1px] bg-cyan-400" />
                  : <motion.div layoutId="activeIndicator" className="absolute -bottom-1 left-0 right-0 h-[1px] bg-cyan-400" />
              )}
            </button>
            {isSafari ? (
              aiMediaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-52 pt-3">
                  <div className="rounded-xl overflow-hidden shadow-xl shadow-black/40" style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(0,0,0,0.95))", border: "1px solid rgba(6,182,212,0.25)" }}>
                    {aiMediaItems.map((item, i) => (
                      <button key={item.id} onClick={() => scrollToSection(item.id)} className={`w-full text-left px-5 py-3 text-sm tracking-wider transition-all duration-200 flex items-center gap-2 group ${activeSection === item.id ? "text-cyan-400 bg-cyan-500/10" : "hover:text-cyan-400 hover:bg-white/5"} ${i < aiMediaItems.length - 1 ? "border-b border-white/5" : ""}`}>
                        <span className={`w-[2px] h-3 rounded-full ${activeSection === item.id ? "bg-cyan-400" : "bg-transparent"}`} />
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )
            ) : (
              <AnimatePresence>
                {aiMediaOpen && (
                  <motion.div initial={{ opacity: 0, y: -8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.97 }} transition={{ duration: 0.2, ease: "easeOut" }} className="absolute top-full left-1/2 -translate-x-1/2 w-52 pt-3">
                    <div className="rounded-xl overflow-hidden shadow-xl shadow-black/40" style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(0,0,0,0.95))", border: "1px solid rgba(6,182,212,0.25)" }}>
                      {aiMediaItems.map((item, i) => (
                        <button key={item.id} onClick={() => scrollToSection(item.id)} className={`w-full text-left px-5 py-3 text-sm tracking-wider transition-all duration-200 flex items-center gap-2 group ${activeSection === item.id ? "text-cyan-400 bg-cyan-500/10" : "hover:text-cyan-400 hover:bg-white/5"} ${i < aiMediaItems.length - 1 ? "border-b border-white/5" : ""}`}>
                          <span className={`w-[2px] h-3 rounded-full transition-all duration-200 ${activeSection === item.id ? "bg-cyan-400" : "bg-transparent group-hover:bg-cyan-400/50"}`} />
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
          <NavButton label="ABOUT" id="about" />
          <NavButton label="FAQ" id="faq" />
          <NavButton label="CONTACT" id="contact" />
        </nav>

        <button className="md:hidden w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {isSafari ? (
            mobileMenuOpen ? <X size={20} /> : <Menu size={20} />
          ) : (
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={20} /></motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={20} /></motion.div>
              )}
            </AnimatePresence>
          )}
        </button>
      </div>

      {isSafari ? (
        mobileMenuOpen && (
          <nav className="md:hidden" style={{ background: "rgba(0,0,0,0.95)", borderTop: "1px solid rgba(6,182,212,0.15)" }}>
            <div className="flex flex-col p-6 gap-1">
              <button onClick={() => scrollToSection("hero")} className={`text-left text-sm tracking-wider py-3 px-3 rounded-lg transition-all duration-200 ${activeSection === "hero" ? "text-cyan-400 bg-cyan-500/10" : "hover:text-cyan-400 hover:bg-white/5"}`}>HOME</button>
              <div>
                <button onClick={() => setMobileAiMediaOpen(!mobileAiMediaOpen)} className={`flex items-center gap-2 text-left text-sm tracking-wider py-3 px-3 rounded-lg w-full transition-all duration-200 ${isAiMediaActive ? "text-cyan-400 bg-cyan-500/10" : "hover:text-cyan-400 hover:bg-white/5"}`}>
                  AI MEDIA <ChevronDown size={14} className={`transition-transform duration-300 ${mobileAiMediaOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileAiMediaOpen && (
                  <div className="ml-4">
                    {aiMediaItems.map((item) => (
                      <button key={item.id} onClick={() => scrollToSection(item.id)} className={`flex items-center gap-2 text-left text-sm tracking-wider py-3 px-3 rounded-lg w-full transition-all duration-200 ${activeSection === item.id ? "text-cyan-400" : "text-gray-400 hover:text-cyan-400 hover:bg-white/5"}`}>
                        <span className={`w-[2px] h-3 rounded-full ${activeSection === item.id ? "bg-cyan-400" : "bg-white/20"}`} />{item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {navSections.slice(1).map((item) => (
                <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-left text-sm tracking-wider py-3 px-3 rounded-lg transition-all duration-200 ${activeSection === item.id ? "text-cyan-400 bg-cyan-500/10" : "hover:text-cyan-400 hover:bg-white/5"}`}>{item.label}</button>
              ))}
            </div>
          </nav>
        )
      ) : (
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="md:hidden overflow-hidden" style={{ background: "rgba(0,0,0,0.95)", borderTop: "1px solid rgba(6,182,212,0.15)" }}>
              <div className="flex flex-col p-6 gap-1">
                <button onClick={() => scrollToSection("hero")} className={`text-left text-sm tracking-wider py-3 px-3 rounded-lg transition-all duration-200 ${activeSection === "hero" ? "text-cyan-400 bg-cyan-500/10" : "hover:text-cyan-400 hover:bg-white/5"}`}>HOME</button>
                <div>
                  <button onClick={() => setMobileAiMediaOpen(!mobileAiMediaOpen)} className={`flex items-center gap-2 text-left text-sm tracking-wider py-3 px-3 rounded-lg w-full transition-all duration-200 ${isAiMediaActive ? "text-cyan-400 bg-cyan-500/10" : "hover:text-cyan-400 hover:bg-white/5"}`}>
                    AI MEDIA <ChevronDown size={14} className={`transition-transform duration-300 ${mobileAiMediaOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileAiMediaOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden ml-4">
                        {aiMediaItems.map((item) => (
                          <button key={item.id} onClick={() => scrollToSection(item.id)} className={`flex items-center gap-2 text-left text-sm tracking-wider py-3 px-3 rounded-lg w-full transition-all duration-200 ${activeSection === item.id ? "text-cyan-400" : "text-gray-400 hover:text-cyan-400 hover:bg-white/5"}`}>
                            <span className={`w-[2px] h-3 rounded-full ${activeSection === item.id ? "bg-cyan-400" : "bg-white/20"}`} />{item.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {navSections.slice(1).map((item) => (
                  <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-left text-sm tracking-wider py-3 px-3 rounded-lg transition-all duration-200 ${activeSection === item.id ? "text-cyan-400 bg-cyan-500/10" : "hover:text-cyan-400 hover:bg-white/5"}`}>{item.label}</button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      )}
    </header>
  );
}