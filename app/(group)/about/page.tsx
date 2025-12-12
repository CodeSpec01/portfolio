"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutEnd from "@/components/AboutEnd";
import Aboutstart from "@/components/Aboutstart";
import MagicBento from "@/components/BentoGrid";
import { TimelineAbout } from "@/components/TimelineAbout";

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

import { Timeline } from "@/components/Timeline";
import { aboutMetadata } from "@/constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = aboutMetadata;

const page = () => {
  return (
    <main
      ref={mainRef}
      className="relative min-h-screen w-full overflow-x-hidden bg-[#030014] text-slate-200 selection:bg-yellow-400 selection:text-purple-900"
    >
      {/* --- BACKGROUND LAYERS --- */}
      {/* 1. Grainy Texture for "Film/Retro" feel */}
      <div className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
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
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white via-slate-200 to-slate-600 bg-clip-text text-transparent">
              Skills & Stack
            </h1>
            
            {/* Glow behind the title */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/30 blur-[60px] -z-10"></div>
          </div>

          <div className="w-full max-w-7xl mx-auto relative group">
            {/* Glow behind the Bento Grid */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-[#0a0a0a]/50 backdrop-blur-sm rounded-xl p-4 md:p-8 border border-white/5">
              <MagicBento glowColor="132, 0, 255" />
            </div>
          </div>
        </section>

        {/* 3. Timeline Section */}
        <section className="reveal-section relative">
           {/* Divider Line */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
           <div className="pt-24">
              <TimelineAbout />
           </div>
        </section>

        {/* 4. Footer/End Section */}
        <section className="reveal-section">
          <AboutEnd />
        </section>

      </div>
    </main>
  );
};

export default AboutPage;