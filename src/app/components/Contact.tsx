import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useSafari } from "../hooks/useSafari";

const shimmerStyle = `
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  .shimmer-contact {
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

const socials = [
  { href: "https://www.instagram.com/interstellar_visions/", icon: <Instagram size={20} /> },
  {
    href: "https://www.facebook.com/people/Interstellar-Visions/61588131030281/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@interstellar_visions",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
      </svg>
    ),
  },
  { href: "https://www.youtube.com/@interstellar_visions", icon: <Youtube size={20} /> },
  { href: "https://www.linkedin.com/company/interstellarvisions", icon: <Linkedin size={20} /> },
  {
    href: "https://www.reddit.com/user/interstellar_visions",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const isSafari = useSafari();
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    setSent(false);
    try {
      await emailjs.send(
        "service_fcvtrff",
        "template_1c1c9uk",
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
        },
        "S8e75bNWP5q6wcJP_"
      );
      setSent(true);
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:bg-black/60 transition-all duration-300";

  const formContent = (
    <div
      className="rounded-xl p-[1px]"
      style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.3), rgba(37,99,235,0.1), rgba(255,255,255,0.05))" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-slate-900/90 to-black/90 rounded-xl p-8 space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-xs font-semibold mb-2 text-cyan-400/80 tracking-widest uppercase">Name *</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold mb-2 text-cyan-400/80 tracking-widest uppercase">Email *</label>
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-semibold mb-2 text-cyan-400/80 tracking-widest uppercase">Company/Organization</label>
          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="message" className="block text-xs font-semibold mb-2 text-cyan-400/80 tracking-widest uppercase">Message *</label>
          <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} />
        </div>
        {sent && <p className="text-cyan-400 text-sm text-center font-medium tracking-wide">✓ Message sent! We'll be in touch soon.</p>}
        {error && <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>}
        <button
          type="submit"
          disabled={sending}
          className="w-full py-4 rounded-lg font-bold tracking-widest text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          style={{ background: sending ? "rgba(6,182,212,0.2)" : "linear-gradient(135deg, #06b6d4, #2563eb)" }}
        >
          {sending ? "SENDING..." : "LET'S CREATE"}
        </button>
      </form>
    </div>
  );

  const infoContent = (
    <div className="space-y-6">
      <div className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.3), rgba(37,99,235,0.1), rgba(255,255,255,0.05))" }}>
        <div className="bg-gradient-to-br from-slate-900/90 to-black/90 rounded-xl p-8">
          <h3 className="text-sm font-bold mb-6 tracking-widest text-cyan-400">GET IN TOUCH</h3>
          <div className="space-y-5">
            <div>
              <p className="text-xs text-gray-500 mb-1 tracking-widest uppercase">Email</p>
              <a href="mailto:interstellarvisions.com@gmail.com" className="text-white hover:text-cyan-400 transition-colors duration-300 text-sm">
                interstellarvisions.com@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1 tracking-widest uppercase">WhatsApp</p>
              <p className="text-white text-sm cursor-pointer">+1 (508) 360-2090</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.3), rgba(37,99,235,0.1), rgba(255,255,255,0.05))" }}>
        <div className="bg-gradient-to-br from-slate-900/90 to-black/90 rounded-xl p-8">
          <h3 className="text-sm font-bold mb-6 tracking-widest text-cyan-400">FOLLOW US</h3>
          <div className="flex gap-4 flex-wrap">
            {socials.map((social, i) =>
              isSafari ? (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
                >
                  {social.icon}
                </a>
              ) : (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 hover:text-cyan-400 hover:shadow-md hover:shadow-cyan-500/20 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden"
    >
      {!isSafari && <style>{shimmerStyle}</style>}

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Ambient orbs — reduced blur for performance */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "rgba(6,182,212,0.05)", filter: "blur(40px)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "rgba(37,99,235,0.05)", filter: "blur(40px)" }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">

        {isSafari ? (
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider" style={staticTitleStyle}>
              CONTACT
            </h2>
            <p className="text-gray-500 text-sm tracking-[0.2em] uppercase">
              Let's Create Something Extraordinary
            </p>
          </div>
        ) : (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider shimmer-contact">
              CONTACT
            </h2>
            <p className="text-gray-500 text-sm tracking-[0.2em] uppercase">
              Let's Create Something Extraordinary
            </p>
          </motion.div>
        )}

        {isSafari ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {formContent}
            {infoContent}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {formContent}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {infoContent}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}