'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GiLightBulb } from 'react-icons/gi';
import { MdQrCode2 } from 'react-icons/md';
import { BiRocket } from 'react-icons/bi';
import { CiMap } from 'react-icons/ci';

export default function JourneyCard() {
  return (
    <Link
      href={'/journey'}
      className="group relative block h-full w-[95%] mx-auto cursor-target"
    >
      {/* 1. Outer Glow/Border Effect */}
      <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500" />
      
      {/* 2. Main Container */}
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#050505] p-6 shadow-2xl">
        
        {/* Background Grid & Grain (Texture) */}
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-noise mix-blend-overlay"></div>

        {/* 3. The Journey Path Visualization */}
        <div className="absolute right-0 top-0 h-full w-full opacity-60 transition-opacity duration-500 group-hover:opacity-100">
          <svg className="h-full w-full" viewBox="0 0 400 400" fill="none">
            {/* The Path Line */}
            <motion.path
              d="M 50 50 C 150 50, 150 150, 250 150 C 350 150, 350 300, 300 350"
              stroke="url(#gradient-path)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            {/* The Glowing Pulse that travels on Hover */}
            <motion.path
              d="M 50 50 C 150 50, 150 150, 250 150 C 350 150, 350 300, 300 350"
              stroke="url(#gradient-pulse)"
              strokeWidth="6"
              strokeLinecap="round"
              className="opacity-0 group-hover:opacity-100"
              initial={{ pathLength: 0 }}
              whileHover={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            <defs>
              <linearGradient id="gradient-path" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <linearGradient id="gradient-pulse" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 4. Floating Milestones (Icons) */}
        {/* We absolutely position these near the curve points of the SVG above */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Start: Idea */}
          <motion.div 
            className="absolute top-[10%] left-[10%]"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 backdrop-blur-md border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
              <GiLightBulb size={18} />
            </div>
          </motion.div>

          {/* Middle: Code */}
          <motion.div 
            className="absolute top-[35%] left-[55%]"
            initial={{ y: 0 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 text-purple-400 backdrop-blur-md border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              <MdQrCode2 size={20} />
            </div>
          </motion.div>

          {/* End: Launch */}
          <motion.div 
            className="absolute bottom-[10%] right-[20%]"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
             <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pink-500/20 text-pink-400 backdrop-blur-md border border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.5)]">
              <BiRocket size={24} />
            </div>
          </motion.div>
        </div>

        {/* 5. Text Content */}
        <div className="relative z-20 flex h-full flex-col justify-end">
          <div className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-neutral-400 backdrop-blur-md">
            The Roadmap
          </div>
          
          <h2 className="mt-2 text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white via-neutral-200 to-neutral-500">
            How we got here
          </h2>
          
          <p className="mt-2 text-sm text-neutral-400 line-clamp-2 max-w-[85%]">
            Trace the steps from the first commit to the final deployment. A visual history of the build.
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors">
            <CiMap size={14} />
            <span>View Timeline</span>
          </div>
        </div>

      </div>
    </Link>
  );
}