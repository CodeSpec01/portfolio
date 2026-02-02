"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectData } from "@/constants/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const contentData = projectData || [];

const ProjectScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".content-card");
      
      sections.forEach((section: any, index) => {
        // 1. Existing Logic: Updates the Sticky Image Index
        ScrollTrigger.create({
          trigger: section,
          start: "top center+=100",
          end: "bottom center+=100",
          onEnter: () => setActiveCard(index),
          onEnterBack: () => setActiveCard(index),
        });

        // 2. NEW Logic: Text Reveal Animation
        // Select all elements with the 'reveal-text' class inside the CURRENT section
        const textElements = section.querySelectorAll(".reveal-text");
        
        gsap.fromTo(
          textElements,
          { 
            y: 50,      // Start 50px lower
            opacity: 0, // Start invisible
            filter: "blur(10px)" // Optional: adds a nice blur effect 
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.1, // Delay between each item (title -> desc -> list -> tags)
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%", // Start animation when top of card hits 85% of viewport
              toggleActions: "play none none reverse", // Reverses animation when scrolling back up
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="relative w-full" ref={containerRef}>
      <div className="flex justify-center relative mx-auto gap-10 px-2">
        
        {/* LEFT COLUMN: Sticky Images */}
        <div className="hidden lg:flex w-1/2 sticky top-0 h-screen items-start justify-center">
          <div className="relative w-full h-[500px] flex items-center justify-center">
            {contentData.map((item, index) => (
              <div
                key={item.title + index}
                className={`absolute mt-[12vh] inset-0 w-full h-full flex flex-col justify-center items-center py-6 transition-all duration-700 ease-in-out`}
                style={{
                  opacity: activeCard === index ? 1 : 0,
                  transform: `translateY(${activeCard === index ? "0%" : "20px"}) scale(${activeCard === index ? 1 : 0.95})`,
                  zIndex: activeCard === index ? 10 : 0,
                  pointerEvents: activeCard === index ? "auto" : "none",
                }}
              >
                {/* Gradient Border Wrapper */}
                <div className="p-px rounded-2xl bg-gradient-to-br from-orange-400 via-rose-400 to-amber-200 shadow-2xl w-full mx-auto">
                  <div className="rounded-2xl bg-[#0a0f18] border border-white/5 overflow-hidden relative group">
                    <div className="relative w-full aspect-video overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover object-top transform transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-transparent to-transparent opacity-60" />
                    </div>

                    <div className="px-6 py-3 flex gap-4 justify-center">
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noreferrer"
                        className="relative overflow-hidden px-5 py-2 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:border-orange-400/50 transition-colors group/btn"
                      >
                        <span className="relative z-10">Live Demo</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                      </a>

                      <a
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                        className="relative overflow-hidden px-5 py-2 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:border-blue-400/50 transition-colors group/btn"
                      >
                        <span className="relative z-10">GitHub</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Scrollable Text */}
        <div className="w-full lg:w-1/2 pt-24">
          {contentData.map((item, index) => (
            <div
              key={item.title + index}
              className="content-card min-h-[80vh] flex flex-col justify-start py-10"
            >
              {/* Added 'reveal-text' class here */}
              <div className="lg:hidden mb-6 rounded-xl overflow-hidden border border-white/10 reveal-text">
                 <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
              </div>

              {/* Added 'reveal-text' class here */}
              <h2 className="reveal-text text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
                {item.title}
              </h2>

              {/* Added 'reveal-text' class here */}
              <p className="reveal-text text-lg text-slate-300 leading-relaxed mb-6 ">
                {item.description}
              </p>

              {/* DYNAMIC FEATURE LIST */}
              {item.features && (
                // Added 'reveal-text' class here
                <ul className="reveal-text space-y-3 mb-6 max-w-lg">
                  {item.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg 
                        className="w-4 h-4 mt-1 flex-shrink-0" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ fill: item.highlightColor || '#ff3ca6' }}
                      >
                        <path d="M12 2l2.5 6 6.5.5-5 4 1.7 6.3L12 16.8 6.3 19.3 8 13 3 9l6.5-.5L12 2z" />
                      </svg>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech badges */}
              {/* Added 'reveal-text' class here */}
              <div className="reveal-text flex flex-wrap gap-3">
                {item.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-3 px-3 py-2 bg-[#06111a] border border-white/6 rounded-full shadow-sm">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br from-[#0ea5a9] to-[#2563eb] text-xs font-semibold text-white">
                      {tag.slice(0,2).toUpperCase()}
                    </span>
                    <span className="text-sm text-slate-300">{tag}</span>
                  </div>
                ))}
              </div>
              
              {/* Added 'reveal-text' class here */}
              <div className="reveal-text flex gap-4 mt-6 lg:hidden">
                 <a href={item.website} className="text-sm border-b border-orange-400 text-orange-400">View Site</a>
                 <a href={item.github} className="text-sm border-b border-slate-400 text-slate-400">GitHub</a>
              </div>
            </div>
          ))}
          <div className="h-[20vh]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectScroll;