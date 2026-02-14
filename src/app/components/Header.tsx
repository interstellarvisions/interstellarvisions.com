import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
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
          <button
            onClick={() => scrollToSection("what-we-create")}
            className="text-sm tracking-wider hover:text-cyan-400 transition-colors"
          >
            AI MEDIA
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm tracking-wider hover:text-cyan-400 transition-colors"
          >
            CONTACT US
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm tracking-wider hover:text-cyan-400 transition-colors"
          >
            ABOUT US
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-sm tracking-wider hover:text-cyan-400 transition-colors"
          >
            FAQ
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
            <button
              onClick={() => scrollToSection("what-we-create")}
              className="text-left text-sm tracking-wider hover:text-cyan-400 transition-colors py-2"
            >
              AI MEDIA
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-sm tracking-wider hover:text-cyan-400 transition-colors py-2"
            >
              CONTACT US
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-sm tracking-wider hover:text-cyan-400 transition-colors py-2"
            >
              ABOUT US
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-left text-sm tracking-wider hover:text-cyan-400 transition-colors py-2"
            >
              FAQ
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
