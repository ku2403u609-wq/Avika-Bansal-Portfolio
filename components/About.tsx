import React from "react";
import avikaAboutImg from "../assets/avika2.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          
          {/* Left column: Label + Image */}
          <div className="md:col-span-4 space-y-10">
            <h2 className="text-xs uppercase tracking-[0.4em] font-medium opacity-50 border-t border-current pt-4">
              About
            </h2>

            <div className="w-full overflow-hidden">
              <img
                src={avikaAboutImg}
                alt="Avika Bansal portrait"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right column: Text */}
          <div className="md:col-span-8 space-y-10">

            {/* Lead paragraph */}
            <p className="text-xl md:text-2xl font-serif leading-relaxed max-w-2xl">
              I am a Communication Design student with a strong interest in typography,
              visual identity, and branding. My work focuses on clarity, structure,
              and visual storytelling.
            </p>

            {/* Body copy */}
            <div className="space-y-6 text-base md:text-lg opacity-80 font-light leading-relaxed max-w-2xl">
              <p>
                I enjoy experimenting with type, form, and composition to create
                meaningful design experiences that communicate effectively.
              </p>
              <p>
                Beyond academics, I am deeply inspired by photography, travel, and
                everyday visual culture. I believe design is not just about aesthetics,
                but about perspective and intention. I also run a small Instagram
                business where I create handmade crochet and pipe-cleaner products.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;