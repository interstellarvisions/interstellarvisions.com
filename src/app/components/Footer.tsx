import { Instagram, Linkedin, Twitter, Youtube, Music } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black to-slate-950 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Column 1 - Branding */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 tracking-wider">LOGO</h3>
            <p className="text-gray-400 text-sm mb-4">
              AI-Powered Creative Content That Converts
            </p>
            <p className="text-gray-500 text-xs">
              © {currentYear} AI Creative Studio
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 tracking-wider text-cyan-400">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById("our-work")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById("digital-creators")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  AI Talent
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-sm font-bold mb-4 tracking-wider text-cyan-400">
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
            <h4 className="text-sm font-bold mb-4 tracking-wider text-cyan-400">
              LEGAL
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="src/app/pages/PrivacyPolicy.tsx"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="src/app/pages/TermsConditions.tsx"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 - Social Media */}
          <div>
            <h4 className="text-sm font-bold mb-4 tracking-wider text-cyan-400">
              CONNECT
            </h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 transition-all"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 transition-all"
                aria-label="TikTok"
              >
                <Music size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2 tracking-wider">
              FOOTER (LEGAL & CREDIBILITY)
            </p>
            <p className="text-xs text-gray-600">
              All AI-generated content is created ethically and in compliance
              with applicable laws and platform policies. We maintain the
              highest standards of transparency and authenticity in all our
              work.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}