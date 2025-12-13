'use client';

import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Icons ---
import {
  FiDatabase, FiServer, FiTerminal, FiGlobe, FiCode, FiCpu
} from 'react-icons/fi';
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript,
  SiPostgresql, SiMongodb, SiDocker, SiKubernetes,
  SiGit, SiFigma, SiPython, SiRust, SiGo, SiGraphql
} from 'react-icons/si';
import { BsAlphabetUppercase, BsAmazon } from 'react-icons/bs';
import { AuroraText } from './AuroraText';
import { BACKENDSKILLS, DATABASES, FRONTENDSKILLS, LANGUAGES, OTHERSKILLS, resumeLink, SERVICES } from '@/constants/constants';
import { HiServer } from 'react-icons/hi';
import { FaDatabase, FaLaptopCode } from 'react-icons/fa';
import { FaGears } from 'react-icons/fa6';
import { IoIosCloudDone } from 'react-icons/io';

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data: Your Skill Arsenal ---
const TECH_STACK = [
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-300' },
  { name: 'Node.js', icon: SiJavascript, color: 'text-green-400' },
  { name: 'Postgres', icon: SiPostgresql, color: 'text-blue-300' },
  { name: 'AWS', icon: BsAmazon, color: 'text-orange-400' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
];

const SKILL_MARQUEE = [
  { name: 'Python', icon: SiPython },
  { name: 'Rust', icon: SiRust },
  { name: 'Go', icon: SiGo },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'Figma', icon: SiFigma },
  { name: 'Git', icon: SiGit },
  { name: 'Mongo', icon: SiMongodb },
  { name: 'K8s', icon: SiKubernetes },
];

// --- Components ---

const CardSpotlight = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group/spotlight relative border border-white/10 bg-neutral-900/50 overflow-hidden rounded-3xl backdrop-blur-md",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(120, 50, 255, 0.10),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full z-20">{children}</div>
    </div>
  );
};

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (window.innerWidth < 768) return;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseXFromCenter = e.clientX - rect.left - rect.width / 2;
    const mouseYFromCenter = e.clientY - rect.top - rect.height / 2;
    x.set(mouseXFromCenter / 20);
    y.set(mouseYFromCenter / 20);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{
        rotateY: mouseX,
        rotateX: useMotionTemplate`calc(${mouseY} * -1deg)`,
        transformStyle: "preserve-3d",
      }}
      className={cn("relative h-full w-full rounded-3xl transition-all duration-200 ease-out will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
};


const SkillBadge = ({ label, Icon }: { label: string; Icon: any }) => (
  <div className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/2 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
    <Icon className={"h-8 w-8 transition-all duration-300 group-hover:scale-110"} />
    <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider group-hover:text-white transition-colors">{label}</span>
  </div>
);

// --- MAIN LAYOUT ---

export default function MagicBento() {
  return (
    <div className="w-full p-4 md:p-8 text-white selection:bg-indigo-500/30 overflow-x-hidden font-sans">

      {/* Global CSS for Animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .mask-gradient-x {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>

      <div className="relative z-10 mx-auto w-full grid grid-cols-1 lg:grid-cols-4 gap-4 auto-rows-auto">

        {/* 1. Frontend (3x2) */}
        <div className="col-span-1 md:row-span-2 row-span-1">
          <CardSpotlight className="h-full flex flex-col p-6 bg-neutral-900/50">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <FaLaptopCode className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">Frontend Technologies</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 flex-1">
              {FRONTENDSKILLS.map((tech) => (
                <SkillBadge key={tech.label} {...tech} />
              ))}
            </div>
          </CardSpotlight>
        </div>

        {/* 2. Backend (1x2) */}
        {/* Spans 2 columns to show a grid of icons */}
        <div className="col-span-1 md:col-span-2 row-span-1">
          <CardSpotlight className="h-full flex flex-col p-6 bg-transparent">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <HiServer className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">Backend Technologies</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
              {BACKENDSKILLS.map((tech) => (
                <SkillBadge key={tech.label} {...tech} />
              ))}
            </div>
          </CardSpotlight>
        </div>

        {/* 3. databases */}
        <div className='col-span-1 row-span-1'>
          <CardSpotlight className="h-full flex flex-col p-6 bg-neutral-900/50">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <FaDatabase className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">Databases</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 flex-1">
              {DATABASES.map((tech) => (
                <SkillBadge key={tech.label} {...tech} />
              ))}
            </div>
          </CardSpotlight>
        </div>

        {/* 4. HERO CARD (2x2) */}
        <div className="col-span-1 row-span-1">
          <TiltCard>
            <CardSpotlight className="h-full flex flex-col justify-between p-8 bg-linear-to-br from-indigo-950/50 to-purple-950/20 border-indigo-500/20">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
              <div className="relative z-20">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Ready to deploy
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Full Stack<br />
                  <AuroraText>Arsenal</AuroraText>
                </h2>
                <p className="mt-4 text-neutral-400 max-w-md text-sm md:text-base leading-relaxed">
                  I don't just write code; I architect solutions. Below is the specialized weaponry I use to build the future.
                </p>
              </div>
              <div className="relative z-20 flex gap-4 mt-8">
                <a href={resumeLink} download={"resume"} className="cursor-target group relative overflow-hidden rounded-full bg-white px-6 py-2 text-sm font-semibold text-black transition-transform active:scale-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  <span className="relative z-10">Download CV</span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-indigo-300 to-purple-300 transition-transform duration-300"></div>
                </a>
              </div>
            </CardSpotlight>
          </TiltCard>
        </div>


        {/* 5. Languages */}
        <div className='col-span-1 md:col-span-2 row-span-1 md:row-span-2'>
          <CardSpotlight className="h-full flex flex-col p-6 bg-neutral-900/50">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <BsAlphabetUppercase className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">Languages</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 flex-1">
              {LANGUAGES.map((tech) => (
                <SkillBadge key={tech.label} {...tech} />
              ))}
            </div>
          </CardSpotlight>
        </div>

        {/* 6. Services */}
        <div className="row-span-1 col-span-1 md:col-span-2 md:row-span-2">
          <CardSpotlight className="h-full flex flex-col p-6 bg-neutral-900/50">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <IoIosCloudDone className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">Services</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
              {SERVICES.map((tech) => (
                <SkillBadge key={tech.label} {...tech} />
              ))}
            </div>
          </CardSpotlight>
        </div>


        {/* 7. other skills */}
        <div className='col-span-1 md:col-span-2 row-span-1'><CardSpotlight className="h-full flex flex-col p-6 bg-neutral-900/50">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <FaGears className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Other Skills</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
            {OTHERSKILLS.map((tech) => (
              <SkillBadge key={tech.label} {...tech} />
            ))}
          </div>
        </CardSpotlight>

        </div>

      </div>

      {/* Footer */}
      <div className="max-w-7xl mt-8 flex justify-between items-center text-[10px] text-neutral-600 font-mono uppercase tracking-widest px-2">
        <span className="flex items-center gap-2 font-bold text-lg">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          All Systems Operational
        </span>
      </div>
    </div>
  );
}