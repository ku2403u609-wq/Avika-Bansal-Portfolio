import React from "react";
import { Theme } from "../types";

interface SkillsProps {
  theme: Theme;
}

const Skills = ({ theme }: SkillsProps) => {
  return (
    <section className="py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">

          {/* Core Skills */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.4em] font-medium opacity-50 mb-12 border-b border-current pb-4 inline-block">
              Core Skills
            </h3>
            <ul className="space-y-6">
              {[
                "Typography",
                "Logo & Brand Identity Design",
                "Photo & Video Editing",
                "Layout & Poster Design",
              ].map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between group cursor-default"
                >
                  <span className="text-3xl font-serif group-hover:italic transition-all duration-300">
                    {skill}
                  </span>
                  <div className="h-[1px] flex-grow mx-8 bg-current opacity-10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  <span className="text-[10px] uppercase tracking-widest opacity-30">
                    Skill
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Software Expertise */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.4em] font-medium opacity-50 mb-12 border-b border-current pb-4 inline-block">
              Software Expertise
            </h3>
            <ul className="space-y-6">
              {[
                "Adobe Illustrator",
                "Adobe Photoshop",
                "Adobe InDesign",
                "DaVinci Resolve",
              ].map((tool, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between group cursor-default"
                >
                  <span className="text-3xl font-serif group-hover:italic transition-all duration-300">
                    {tool}
                  </span>
                  <div className="h-[1px] flex-grow mx-8 bg-current opacity-10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  <span className="text-[10px] uppercase tracking-widest opacity-30">
                    Expert
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;