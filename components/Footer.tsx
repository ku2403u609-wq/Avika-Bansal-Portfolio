import React, { useState } from "react";
import { Mail, Linkedin, Globe, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const [sent, setSent] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // frontend-only "send"
    setSent(true);
    e.currentTarget.reset();

    // hide confirmation after 3 seconds
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <footer
      id="contact"
      className="py-32 px-8 border-t border-current border-opacity-10"
    >
      <div className="max-w-6xl mx-auto">

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-24">

          {/* LEFT: Contact Information */}
          <div className="space-y-12">
            <h2 className="text-xs uppercase tracking-[0.4em] opacity-50 border-t border-current pt-4 inline-block">
              Contact Information
            </h2>

            <div className="space-y-8 text-lg font-light">

              <div className="flex items-start space-x-4">
                <Mail size={20} strokeWidth={1.5} />
                <a
                  href="mailto:avikabansal0201@gmail.com"
                  className="hover:opacity-60 transition-opacity"
                >
                  avikabansal0201@gmail.com
                </a>
              </div>

              <div className="flex items-start space-x-4">
                <Linkedin size={20} strokeWidth={1.5} />
                <a
                  href="https://www.linkedin.com/in/avika-bansal-913147378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
                  linkedin.com/in/avika-bansal
                </a>
              </div>

              <div className="flex items-start space-x-4">
                <Globe size={20} strokeWidth={1.5} />
                <a
                  href="https://www.behance.net/avikabku2403u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
                  behance.net/avikabku2403u
                </a>
              </div>

              <p className="text-xs uppercase tracking-widest opacity-40 pt-6">
                Based in India
              </p>

            </div>
          </div>

          {/* RIGHT: Send a Message */}
          <div className="space-y-12">
            <h2 className="text-xs uppercase tracking-[0.4em] opacity-50 border-t border-current pt-4 inline-block">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">

              <div>
                <label className="block text-sm mb-2 opacity-60">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-current border-opacity-20 py-3 focus:outline-none focus:border-opacity-60 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 opacity-60">Email</label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full bg-transparent border-b border-current border-opacity-20 py-3 focus:outline-none focus:border-opacity-60 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 opacity-60">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-current border-opacity-20 py-3 focus:outline-none focus:border-opacity-60 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-block text-sm uppercase tracking-widest opacity-70 hover:opacity-100 transition"
              >
                Send Message →
              </button>

              {sent && (
                <p className="text-xs opacity-60 pt-2">
                  Message sent successfully.
                </p>
              )}

            </form>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-current border-opacity-5 pt-8 gap-8">
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-30">
            © {new Date().getFullYear()} Avika Bansal — Portfolio
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] group hover:opacity-100 opacity-50 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp
              size={14}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;