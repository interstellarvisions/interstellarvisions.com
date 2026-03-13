import { Instagram, Linkedin, Youtube } from "lucide-react";
import { useSafari } from "../hooks/useSafari";

const shimmerStyle = `
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  .shimmer-text {
    background: linear-gradient(90deg, #06b6d4 0%, #06b6d4 40%, #ffffff 50%, #06b6d4 60%, #06b6d4 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s linear infinite;
  }
`;

const socialLinks = [
  {
    href: "https://www.instagram.com/interstellar_visions/",
    label: "Instagram",
    icon: <Instagram size={18} />,
  },
  {
    href: "https://www.facebook.com/people/Interstellar-Visions/61588131030281/",
    label: "Facebook",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@interstellar_visions",
    label: "TikTok",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@interstellar_visions",
    label: "YouTube",
    icon: <Youtube size={18} />,
  },
  {
    href: "https://www.linkedin.com/company/interstellarvisions",
    label: "LinkedIn",
    icon: <Linkedin size={18} />,
  },
  {
    href: "https://www.reddit.com/user/interstellar_visions",
    label: "Reddit",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    ),
  },
];

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About Us", id: "about" },
  { label: "Our Work", id: "our-work" },
  { label: "AI Talent", id: "digital-creators" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  const isSafari = useSafari();
  const currentYear = new Date().getFullYear();

  const scrollToHero = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  const headingClass = isSafari ? "" : "shimmer-text";
  const headingStyle = isSafari ? { color: "#06b6d4" } : undefined;

  return (
    <footer className="bg-gradient-to-b from-black to-slate-950 border-t border-white/10">
      {!isSafari && <style>{shimmerStyle}</style>}

      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

          {/* Column 1 - Branding */}
          <div className="lg:col-span-1">
            <button onClick={scrollToHero} className="mb-4 cursor-pointer">
              <img src="/images/logo_footer.png" alt="Logo" loading="lazy" draggable={false} onContextMenu={(e) => e.preventDefault()} className="h-12 w-auto" />
            </button>
            <p className="text-gray-400 text-sm mb-4">AI-Powered Creative Content That Converts</p>
            <p className="text-gray-500 text-xs">© {currentYear} Interstellar Visions</p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className={`text-sm font-bold mb-4 tracking-wider ${headingClass}`} style={headingStyle}>
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className={`text-sm font-bold mb-4 tracking-wider ${headingClass}`} style={headingStyle}>
              SERVICES
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">AI Video Ads</li>
              <li className="text-gray-400 text-sm">Product Visuals</li>
              <li className="text-gray-400 text-sm">Short-form Social</li>
              <li className="text-gray-400 text-sm">AI Influencer Content</li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h4 className={`text-sm font-bold mb-4 tracking-wider ${headingClass}`} style={headingStyle}>
              LEGAL
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-conditions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 - Social */}
          <div>
            <h4 className={`text-sm font-bold mb-4 tracking-wider ${headingClass}`} style={headingStyle}>
              CONNECT
            </h4>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${
                    isSafari
                      ? "text-white"
                      : "hover:bg-cyan-500/20 hover:border-cyan-500 hover:text-cyan-400 hover:shadow-md hover:shadow-cyan-500/20 hover:scale-110"
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="text-center">
            <p className="text-xs text-gray-600">
              All AI-generated content is created ethically and in compliance with applicable laws and platform policies. We maintain the highest standards of transparency and authenticity in all our work.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}