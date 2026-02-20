import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aiMediaOpen, setAiMediaOpen] = useState(false);
  const [mobileAiMediaOpen, setMobileAiMediaOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
      setAiMediaOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider">LOGO</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-sm tracking-wider hover:text-cyan-400 transition-colors"
          >
            HOME
          </button>

          {/* AI MEDIA Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAiMediaOpen(true)}
            onMouseLeave={() => setAiMediaOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm tracking-wider hover:text-cyan-400 transition-colors">
              AI MEDIA
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${aiMediaOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Invisible bridge + dropdown */}
            {aiMediaOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 pt-2">
                <div className="bg-black/95 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden shadow-xl">
                  <button
                    onClick={() => scrollToSection("our-work")}
                    className="w-full text-left px-4 py-3 text-sm tracking-wider hover:text-cyan-400 hover:bg-white/5 transition-all border-b border-white/10"
                  >
                    OUR WORK
                  </button>
                  <button
                    onClick={() => scrollToSection("digital-creators")}
                    className="w-full text-left px-4 py-3 text-sm tracking-wider hover:text-cyan-400 hover:bg-white/5 transition-all"
                  >
                    DIGITAL CREATORS
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="text-sm tracking-wider hover:text-cyan-400 transition-colors"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-sm tracking-wider hover:text-cyan-400 transition-colors"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm tracking-wider hover:text-cyan-400 transition-colors"
          >
            CONTACT
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col p-6 gap-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-left text-sm tracking-wider hover:text-cyan-400 transition-colors py-2"
            >
              HOME
            </button>

            {/* Mobile AI MEDIA Dropdown */}
            <div>
              <button
                onClick={() => setMobileAiMediaOpen(!mobileAiMediaOpen)}
                className="flex items-center gap-1 text-left text-sm tracking-wider hover:text-cyan-400 transition-colors py-2 w-full"
              >
                AI MEDIA
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileAiMediaOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileAiMediaOpen && (
                <div className="ml-4 flex flex-col gap-2 mt-1">
                  <button
                    onClick={() => scrollToSection("our-work")}
                    className="text-left text-sm tracking-wider text-gray-400 hover:text-cyan-400 transition-colors py-2"
                  >
                    OUR WORK
                  </button>
                  <button
                    onClick={() => scrollToSection("digital-creators")}
                    className="text-left text-sm tracking-wider text-gray-400 hover:text-cyan-400 transition-colors py-2"
                  >
                    DIGITAL CREATORS
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-sm tracking-wider hover:text-cyan-400 transition-colors py-2"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-left text-sm tracking-wider hover:text-cyan-400 transition-colors py-2"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-sm tracking-wider hover:text-cyan-400 transition-colors py-2"
            >
              CONTACT
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
