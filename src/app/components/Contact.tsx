import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Instagram, Linkedin, Twitter, Youtube, Music } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll be in touch soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider">
            CONTACT
          </h2>
          <p className="text-2xl text-gray-400">
            Let's Create Something Extraordinary
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm"
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-gray-300"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-gray-300"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2 text-gray-300"
                  >
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-gray-300"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  LET'S CREATE
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 tracking-wide">
                GET IN TOUCH
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a
                    href="mailto:hello@aistudio.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    hello@aistudio.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <a
                    href="tel:+10001234567"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    +1 (000) 123-4567
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Address</p>
                  <p className="text-gray-300">
                    123 Innovation Street
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Book a Call</p>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Schedule a consultation
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 tracking-wide">
                FOLLOW US
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 border border-white/20 transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 border border-white/20 transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 border border-white/20 transition-all"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 border border-white/20 transition-all"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 border border-white/20 transition-all"
                >
                  <Music size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}