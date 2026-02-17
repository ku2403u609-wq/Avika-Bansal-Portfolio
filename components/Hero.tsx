import React from "react";
import avikaImage1 from "../assets/avika1.jpg";
import avikaImage2 from "../assets/avika4.jpg";
import avikaImage3 from "../assets/avika3.jpg";
import { Theme } from "../types";

interface HeroProps {
  theme: Theme;
}

const Hero = ({ theme }: HeroProps) => {
  const accentColor =
    theme === Theme.LIGHT ? "bg-[#D6C7B7]" : "bg-[#4A3728]";

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-8 pt-20">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">

        {/* Horizontal Editorial Layout with 3 Circular Frames */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">

          {/* Image 1 */}
          <div className="flex justify-center">
            <div
              className={`w-full max-w-[300px] circular-frame overflow-hidden hover:scale-105 transition-transform duration-700 cursor-pointer ${accentColor}`}
            >
              <img
                src={avikaImage1}
                alt="Avika Bansal portrait 1"
                className="w-full h-full object-cover dark:brightness-105"
              />
            </div>
          </div>

          {/* Image 2 */}
          <div className="flex justify-center mt-0 md:mt-12">
            <div
              className={`w-full max-w-[300px] circular-frame overflow-hidden hover:scale-105 transition-transform duration-700 cursor-pointer ${accentColor}`}
            >
              <img
                src={avikaImage2}
                alt="Avika Bansal portrait 2"
                className="w-full h-full object-cover dark:brightness-105"
              />
            </div>
          </div>

          {/* Image 3 */}
          <div className="flex justify-center">
            <div
              className={`w-full max-w-[300px] circular-frame overflow-hidden hover:scale-105 transition-transform duration-700 cursor-pointer ${accentColor}`}
            >
              <img
                src={avikaImage3}
                alt="Avika Bansal portrait 3"
                className="w-full h-full object-cover dark:brightness-105"
              />
            </div>
          </div>

        </div>

        {/* Hero Text */}
        <div className="text-center space-y-4 animate-in fade-in duration-1000 delay-500">
          <h1 className="text-6xl md:text-8xl font-serif tracking-tight">
            Avika Bansal
          </h1>
          <p className="text-lg md:text-xl font-light tracking-[0.3em] uppercase opacity-70">
            Communication Design Student
          </p>
          <div className="pt-8">
            <span className="text-xl md:text-2xl font-serif italic opacity-75">
              Designing in layers
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;