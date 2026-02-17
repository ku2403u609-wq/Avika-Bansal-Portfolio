
import React from 'react';
import { Mail, Linkedin, Globe, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-24 px-8 border-t border-current border-opacity-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter mb-8 italic">Let's connect</h2>
            <a 
              href="mailto:avikabansal0201@gmail.com" 
              className="text-xl md:text-2xl font-light hover:opacity-60 transition-opacity border-b border-current pb-2"
            >
              avikabansal0201@gmail.com
            </a>
          </div>
          <div className="flex flex-col md:items-end space-y-4">
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/avika-bansal-913147378" target="_blank" rel="noopener" className="hover:opacity-60 transition-opacity">
                <Linkedin size={24} strokeWidth={1.5} />
              </a>
              <a href="https://www.behance.net/avikabku2403u" target="_blank" rel="noopener" className="hover:opacity-60 transition-opacity">
                <Globe size={24} strokeWidth={1.5} />
              </a>
            </div>
            <p className="text-xs uppercase tracking-widest opacity-40">Based in India</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-current border-opacity-5 pt-8 gap-8">
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-30">
            © {new Date().getFullYear()} Avika Bansal — Portfolio V1
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] group hover:opacity-100 opacity-50 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
