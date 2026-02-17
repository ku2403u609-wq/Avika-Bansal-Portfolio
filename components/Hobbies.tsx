import React from "react";
import { HOBBIES } from "../constants";
import { Theme } from "../types";

interface HobbiesProps {
  theme: Theme;
}

const Hobbies: React.FC<HobbiesProps> = ({ theme }) => {
  return (
    <section className="py-32 px-8 border-t border-current border-opacity-5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xs uppercase tracking-[0.4em] font-medium opacity-50 mb-16">
          Beyond Design
        </h2>

        <div className="flex flex-wrap justify-center gap-12 md:gap-20 mb-16">
          {HOBBIES.map((hobby, index) => {
            const Wrapper = hobby.link ? "a" : "div";

            return (
              <Wrapper
                key={index}
                {...(hobby.link && {
                  href: hobby.link,
                  target: "_blank",
                  rel: "noopener noreferrer"
                })}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="mb-4 opacity-40 group-hover:opacity-100 transition-opacity duration-300 scale-125">
                  {hobby.icon}
                </div>
                <span className="text-sm tracking-[0.2em] uppercase font-light opacity-60 group-hover:opacity-100 transition-opacity">
                  {hobby.name}
                </span>
              </Wrapper>
            );
          })}
        </div>

        <p className="text-xl md:text-2xl font-serif italic opacity-70">
          "My hobbies influence my visual thinking and creative process."
        </p>
      </div>
    </section>
  );
};

export default Hobbies;