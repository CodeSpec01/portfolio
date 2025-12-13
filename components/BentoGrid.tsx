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
import { BsAmazon } from 'react-icons/bs';

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

const InfiniteScroll = ({ items }: { items: typeof SKILL_MARQUEE }) => {
  return (
    <div className="relative flex overflow-x-hidden mask-gradient-x py-2">
      <div className="animate-marquee whitespace-nowrap flex gap-4">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-2 text-sm text-neutral-400 backdrop-blur-sm">
            <item.icon className="h-4 w-4" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      {/* CSS for Marquee is added at bottom of component */}
    </div>
  );
};

const SkillBadge = ({ name, icon: Icon, color }: { name: string; icon: any; color: string }) => (
  <div className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.05] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
    <Icon className={cn("h-8 w-8 transition-all duration-300 group-hover:scale-110", color)} />
    <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider group-hover:text-white transition-colors">{name}</span>
  </div>
);

// --- MAIN LAYOUT ---

export default function MagicBento() {
  return (
    <div className="min-h-screen w-full bg-[#030014] p-4 md:p-8 text-white selection:bg-indigo-500/30 overflow-x-hidden font-sans">
      
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

      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[180px]">

        {/* 1. HERO CARD (Spans 2x2) */}
        <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 h-[400px] md:h-auto">
          <TiltCard>
            <CardSpotlight className="h-full flex flex-col justify-between p-8 bg-gradient-to-br from-indigo-950/50 to-purple-950/20 border-indigo-500/20">
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">Arsenal</span>
                </h2>
                <p className="mt-4 text-neutral-400 max-w-md text-sm md:text-base leading-relaxed">
                  I don't just write code; I architect solutions. Below is the specialized weaponry I use to build the future.
                </p>
              </div>
              <div className="relative z-20 flex gap-4 mt-8">
                 <button className="group relative overflow-hidden rounded-full bg-white px-6 py-2 text-sm font-semibold text-black transition-transform active:scale-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    <span className="relative z-10">Download CV</span>
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-indigo-300 to-purple-300 transition-transform duration-300"></div>
                 </button>
              </div>
            </CardSpotlight>
          </TiltCard>
        </div>

        {/* 2. THE HOLOGRAPHIC CORE STACK (Replaces old Services) */}
        {/* Spans 2 columns to show a grid of icons */}
        <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 h-auto">
          <CardSpotlight className="h-full flex flex-col p-6 bg-neutral-900/50">
            <div className="flex items-center justify-between mb-6">
               <div className="flex items-center gap-3">
                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <FiCpu className="h-5 w-5" />
                 </div>
                 <h3 className="text-lg font-semibold text-white">Core Technologies</h3>
               </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
              {TECH_STACK.map((tech) => (
                <SkillBadge key={tech.name} {...tech} />
              ))}
            </div>
          </CardSpotlight>
        </div>

        {/* 3. INFINITE SKILL STREAM (Wide) */}
        <div className="col-span-1 md:col-span-2 row-span-1 h-[140px] md:h-auto">
          <CardSpotlight className="h-full p-6 flex flex-col justify-center bg-neutral-900/30 group">
             <div className="flex items-center gap-2 mb-3 text-neutral-400 text-xs font-mono uppercase tracking-widest">
                <FiCode className="text-pink-500" />
                <span>Extended Toolkit</span>
             </div>
             {/* The Marquee Component */}
             <InfiniteScroll items={SKILL_MARQUEE} />
          </CardSpotlight>
        </div>

        {/* 4. DATABASE STATS (Small) */}
        <CardSpotlight className="col-span-1 row-span-1 p-6 flex flex-col justify-center gap-4 bg-black/40 h-[180px]">
           <div className="flex items-center justify-between">
              <div className="p-2 bg-pink-500/10 rounded-lg border border-pink-500/20">
                <FiDatabase className="h-5 w-5 text-pink-500" />
              </div>
              <span className="text-[10px] font-mono text-neutral-500 border border-white/5 px-1 rounded">Postgres</span>
           </div>
           <div>
              <div className="text-2xl font-bold text-white tracking-tight">100k+</div>
              <div className="text-xs text-neutral-400 font-medium">Records Handled</div>
           </div>
           <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-pulse"></div>
           </div>
        </CardSpotlight>

        {/* 5. DEVOPS MONITOR (Small) */}
        <CardSpotlight className="col-span-1 row-span-1 p-6 bg-gradient-to-b from-neutral-900 to-black h-[180px]">
           <div className="absolute top-4 right-4 opacity-50">
              <FiServer className="h-10 w-10 text-neutral-800" />
           </div>
           <div className="relative z-10 h-full flex flex-col justify-end">
              <h4 className="text-xl font-bold text-white">Infrastructure</h4>
              <p className="text-xs text-neutral-400 mt-1">Docker • K8s • AWS</p>
              
              <div className="flex gap-1 mt-3 h-8 items-end">
                 {[1,2,3,4,5].map(i => (
                    <div key={i} className="flex-1 bg-neutral-800/50 rounded-sm overflow-hidden h-full flex items-end">
                       <motion.div 
                          className="w-full bg-cyan-500"
                          initial={{ height: "20%" }}
                          animate={{ height: ["20%", "60%", "40%", "80%", "30%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.15 }}
                       />
                    </div>
                 ))}
              </div>
           </div>
        </CardSpotlight>

      </div>
      
      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-8 flex justify-between items-center text-[10px] text-neutral-600 font-mono uppercase tracking-widest px-2">
         <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            All Systems Operational
         </span>
         <div className="flex gap-4">
            <span>Built with React</span>
            <span>2024</span>
         </div>
      </div>
    </div>
  );
}