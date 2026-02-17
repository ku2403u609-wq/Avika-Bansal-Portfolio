import React from "react";
import { ExternalLink } from "lucide-react";
import { Theme } from "../types";

// import project images directly
import typographyImg from "../assets/typography.jpg";
import illustrationImg from "../assets/illus.jpg";
import brandImg from "../assets/brand.jpg";
import mascotImg from "../assets/mascot.jpg";

interface ProjectsProps {
  theme: Theme;
}

const Projects = ({ theme }: ProjectsProps) => {
  return (
    <section
      id="work"
      className="py-32 px-8 bg-black/5 dark:bg-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-24">
          <h2 className="text-5xl md:text-7xl font-serif tracking-tight">
            Selected Work
          </h2>
          <span className="text-xs uppercase tracking-[0.4em] opacity-40 mb-2">
            2024 — 2026
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-24 md:gap-y-32">

          {/* Typography Project */}
          <a
            href="https://drive.google.com/file/d/14qMxCJhK5Qlx5OTVRp9B1k_FE6YT_wCZ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative overflow-hidden aspect-[4/3] mb-8">
              <img
                src={typographyImg}
                alt="Typography project"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="bg-white text-black p-4 rounded-full">
                  <ExternalLink size={24} />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-serif mb-2">
              Typography Project
            </h3>
            <p className="text-sm opacity-60 font-light leading-relaxed max-w-sm">
              A typeface inspired by the layered geometry of baby pine cones,
              translating natural rhythm into letterform structure.
            </p>
          </a>

          {/* Illustration Story Book */}
          <a
            href="https://drive.google.com/drive/folders/1Z1iX7uwLRiMGHpfMJDN_lzJQmchPYX-m?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative overflow-hidden aspect-[4/3] mb-8">
              <img
                src={illustrationImg}
                alt="Illustration story book"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="bg-white text-black p-4 rounded-full">
                  <ExternalLink size={24} />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-serif mb-2">
              Illustration Story Book
            </h3>
            <p className="text-sm opacity-60 font-light leading-relaxed max-w-sm">
              An illustration-driven story about rivalry, identity, and belonging.
            </p>
          </a>

          {/* Brand Identity */}
          <a
            href="https://drive.google.com/drive/folders/17f1mlyxZi8lJvTntGus5DrLaYjLBPkav?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative overflow-hidden aspect-[4/3] mb-8">
              <img
                src={brandImg}
                alt="Brand identity project"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="bg-white text-black p-4 rounded-full">
                  <ExternalLink size={24} />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-serif mb-2">
              Brand Identity Project
            </h3>
            <p className="text-sm opacity-60 font-light leading-relaxed max-w-sm">
              A brand identity centered on extending the life cycle of distressed denim.
            </p>
          </a>

          {/* Mascot Design */}
          <a
            href="https://drive.google.com/file/d/1h_xWE0IrNPOAjO20NyKCPznq5a04QeUg/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative overflow-hidden aspect-[4/3] mb-8">
              <img
                src={mascotImg}
                alt="Mascot design"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="bg-white text-black p-4 rounded-full">
                  <ExternalLink size={24} />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-serif mb-2">
              Mascot Design
            </h3>
            <p className="text-sm opacity-60 font-light leading-relaxed max-w-sm">
              A character-led extension of Paper Boat’s nostalgic universe,
              designed to embody curiosity and mischief.
            </p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Projects;