"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutEnd from "@/components/AboutEnd";
import Aboutstart from "@/components/Aboutstart";
import MagicBento from "@/components/BentoGrid";
import { TimelineAbout } from "@/components/TimelineAbout";
import { AuroraText } from "@/components/AuroraText";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate all sections with class 'reveal-section'
      const sections = gsap.utils.toArray(".reveal-section");

      sections.forEach((section: any) => {
        gsap.fromTo(
          section,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%", // Animation starts when top of section hits 80% of viewport
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={mainRef}
      className="relative min-h-screen w-full overflow-x-hidden bg-[#030014] text-slate-200 selection:bg-yellow-400 selection:text-purple-900"
    >
      {/* --- BACKGROUND LAYERS --- */}
      {/* 1. Grainy Texture for "Film/Retro" feel */}
      <div className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none bg-[url(/globals/noise.svg)]"></div>

      {/* 2. Deep Purple Gradient Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-800/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]" />
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 flex flex-col gap-24 pb-20">

        {/* 1. Hero Section */}
        <section className="reveal-section pt-10">
          <Aboutstart />
        </section>

        {/* 2. Skills Section */}
        <section className="reveal-section w-full flex flex-col items-center justify-center px-4">
          <div className="relative mb-12 text-center">
            {/* Decorative Label */}
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-widest text-yellow-400 uppercase border border-yellow-400/20 rounded-full bg-yellow-400/5">
              Arsenal
            </div>

            {/* Gradient Title */}
            <div className="flex text-5xl md:text-7xl font-bold tracking-tighter bg-linear-to-b from-white via-slate-200 to-slate-600 bg-clip-text text-transparent">
              <h1>
                Skills &
              </h1>
              <h1>
                <AuroraText colors={["#FFD700", "#A855F7", "#FBBF24"]}>
                  &nbsp;Stacks
                </AuroraText>
              </h1>
            </div>

            {/* Glow behind the title */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/30 blur-[60px] -z-10"></div>
          </div>

          <div className="w-full mx-auto relative group">
            <MagicBento />
          </div>
        </section>

        {/* 3. Timeline Section */}
        <section className="reveal-section relative">
          {/* Divider Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-b from-transparent via-purple-500/50 to-transparent"></div>
          <div className="pt-12">
            <TimelineAbout />
          </div>
        </section>

        {/* 4. Footer/End Section */}
        <section className="reveal-section relative">
          {/* Divider Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-b from-transparent via-purple-500/50 to-transparent"></div>
          <div className="pt-12">
            <AboutEnd />
          </div>
        </section>

      </div>
    </main>
  );
};

export default AboutPage;