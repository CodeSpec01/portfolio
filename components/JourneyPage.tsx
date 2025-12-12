"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaBug } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { TimelineWebsite } from "./TimelineWebsite";
import { AuroraText } from "./AuroraText";

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

// --- Types ---
interface TechItem {
  name: string;
  icon: React.ReactNode;
  reason: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

// --- Data ---
const TECH_STACK: TechItem[] = [
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    reason: "Server-side rendering & SEO mastery.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    reason: "Zero runtime errors. 100% Type safety.",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    reason: "Utility-first architecture for speed.",
  },
  {
    name: "GSAP",
    icon: <FaBug />,
    reason: " Cinematic, timeline-based choreography.",
  },
];

const TEAM: TeamMember[] = [
  { name: "Alex Dev", role: "Full Stack Arch", image: "/home/aviral.png" },
  { name: "Sam Design", role: "UI/UX Lead", image: "/home/aviral.png" },
];

// --- Sub-Component: Spotlight Card (The "Cool" Hover Effect) ---
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative rounded-xl border border-white/10 bg-white/5 overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(250, 204, 21, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// --- Main Component ---

const JourneyPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Reveal
      gsap.from(".hero-element", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
      });

      // 2. Tech Stack Stagger
      gsap.from(".tech-card-wrapper", {
        scrollTrigger: {
          trigger: techRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#030014] text-slate-200 font-sans selection:bg-yellow-400 selection:text-purple-900 overflow-x-hidden">

      {/* --- BACKGROUND PATTERN --- */}
      {/* This creates the cool 'developer grid' look */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/20 blur-[120px] rounded-full" />
      </div>

      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-4">

        <div className="hero-element mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-yellow-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
          </span>
          v2.0 Portfolio Journey
        </div>

        <h1 className="hero-element text-5xl md:text-8xl font-extrabold tracking-tighter mb-6">
          <AuroraText colors={["#FFD700", "#A855F7", "#FBBF24"]}>
            The Architecture
          </AuroraText>
          <span className="block text-slate-500 text-3xl md:text-5xl mt-2 font-bold tracking-tight">
            Behind the Code
          </span>
        </h1>

        <p className="hero-element text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
          From a messy whiteboard sketch to a high-performance Next.js application.
          See how <span className="text-yellow-400 font-semibold">bugs became features</span>.
        </p>

        <div className="hero-element mt-12 animate-bounce text-slate-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      {/* --- TIMELINE SECTION --- */}
      {/* Wrapped in relative to stay above background */}
      <div className="relative z-10 bg-linear-to-b from-transparent to-bg-[#030014]/50 backdrop-blur-sm ">
        <TimelineWebsite />
      </div>

      {/* --- TECH STACK SECTION --- */}
      <section ref={techRef} className="relative z-10 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 md:flex justify-between items-end">
            <div>
              <h2 className="text-4xl md:text-7xl mx-auto font-bold text-white tracking-tight mb-4">
                The <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-yellow-400">Tech Stack</span>
              </h2>
              <p className="text-slate-400 max-w-md">
                Tools chosen not because they are trendy, but because they provide absolute control.
              </p>
            </div>
            <div className="hidden md:block h-px w-32 bg-linear-to-r from-transparent via-slate-700 to-transparent mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_STACK.map((tech) => (
              <div key={tech.name} className="tech-card-wrapper h-full">
                <SpotlightCard className="h-full p-8 group">
                  <div className="text-5xl text-slate-500 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300 mb-6">
                    {tech.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
                    {tech.reason}
                  </p>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="relative z-10 py-24 px-6 bg-linear-to-b from-transparent via-50% via-black/60 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-16 tracking-tight">Built By</h2>
          <div className="flex flex-wrap justify-center gap-16">
            {TEAM.map((member) => (
              <div key={member.name} className="group relative">
                {/* Glowing Orbit Ring */}
                <div className="absolute -inset-1 w-36 h-36 rounded-full bg-linear-to-r from-purple-600 to-yellow-400 opacity-20 group-hover:opacity-100 blur transition duration-500"></div>

                <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-slate-800 group-hover:border-transparent bg-black transition-all duration-300 mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-500 ease-out"
                  />
                </div>

                <div className="mt-6 space-y-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">{member.name}</h3>
                  <p className="text-purple-400 text-sm font-medium tracking-wide uppercase">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className="relative z-10 py-16 text-center overflow-hidden">
        {/* Footer Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-linear-to-b from-transparent to-bg-yellow-400/10 blur-[100px] rounded-full pointer-events-none" />

        <p className="text-slate-500 mb-8 font-mono text-sm relative z-20">Looking for the source?</p>

        <button className="group relative z-20 px-8 py-3 rounded-full bg-slate-900 border border-slate-800 text-white font-bold hover:border-yellow-400/50 transition-all overflow-hidden flex items-center gap-3 mx-auto">
          <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-yellow-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          <FaGithub className="text-xl" />
          <span className="group-hover:text-yellow-300 transition-colors">View Source on GitHub</span>
        </button>
      </footer>
    </div>
  );
};

export default JourneyPage;