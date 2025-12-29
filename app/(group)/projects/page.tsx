"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { AuroraText } from "@/components/AuroraText";
import ProjectScroll from "@/components/ProjectScroll";

const ProjectsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal the Header Text
      gsap.from(".hero-text-reveal", {
        y: 100,
        opacity: 0,
        rotateX: -20, // subtle 3D tilt
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
      });

      // 2. Reveal the Project Scroll component
      gsap.from(".project-section", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full bg-black text-white selection:bg-[#004D98] selection:text-white"
    >
      {/* --- DYNAMIC BACKGROUND --- */}
      {/* 1. Noise Texture */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url(/globals/noise.svg)]"></div>

      {/* 2. Gradient Orbs (Replaces the static bg.png) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#004D98]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#A50044]/20 rounded-full blur-[100px]" />
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 w-full px-6 md:px-12 pt-24 pb-12">

        {/* Header Section */}
        <header className="mb-20 pl-4 md:pl-10 border-l-2 border-white/10">
          <div className="">
            <h2 className="hero-text-reveal text-sm md:text-base font-mono text-[#004D98] mb-2 tracking-widest uppercase">
              // Selected Archives
            </h2>
          </div>

          <div className="">
            <h1 className="hero-text-reveal text-6xl md:text-8xl lg:text-[7vw] font-bold leading-[0.9] tracking-tighter text-white">
              Curated <br className="md:hidden" />
              {/* Aurora Text Wrapper */}
              <span className="inline-block relative z-10">
                <AuroraText colors={["#004D98", "#A50044", "#ffffff"]}>
                  Work
                </AuroraText>
              </span>
            </h1>
          </div>

          <div className="mt-4">
            <p className="hero-text-reveal text-slate-500 max-w-xl text-lg md:text-xl leading-relaxed">
              A collection of technical experiments, full-stack applications, and design systems.
            </p>
          </div>
        </header>

        {/* Project Scroll Component */}
        <section className="project-section relative w-full">
          {/* Decorative Top Line */}
          <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-12"></div>

          <ProjectScroll />
        </section>
      </div>
    </main>
  );
};

export default ProjectsPage;