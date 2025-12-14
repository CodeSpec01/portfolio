"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const NotFoundPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".not-found-content > *", {
      y: 40,
      opacity: 0,
      filter: "blur(10px)",
      duration: 1,
      stagger: 0.1,
    });
    
    // Optional: Add a subtle float to the main container
    gsap.to(".not-found-container", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    })

  }, { scope: containerRef });

  return (
    <main 
      ref={containerRef} 
      className="not-found-container relative h-screen w-full bg-[#050505] overflow-hidden flex flex-col items-center justify-center text-center px-6 z-50"
    >
      {/* Background Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      {/* Subtle Gradient Orb behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="not-found-content relative z-10 flex flex-col items-center">
        {/* Glitch 404 Title */}
        {/* Note: data-text attribute is required for the CSS glitch effect */}
        <h1 
          className="glitch-text text-[25vw] md:text-[15rem] font-black leading-none tracking-tighter text-white select-none" 
          data-text="404"
        >
          404
        </h1>

        <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-200 mt-8 mb-4">
          System Failure.
        </h2>
        
        <p className="text-slate-400 text-sm md:text-base max-w-md mb-12 leading-relaxed font-mono">
          // The sector you are trying to reach has been corrupted or does not exist in this timeline.
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-sm justify-center">
          <button 
            onClick={() => router.back()}
            className="px-8 py-3 rounded-full border border-white/10 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/5 transition-colors w-full md:w-auto"
          >
            Go Back
          </button>
          
          <Link href="/" className="w-full md:w-auto">
            <button className="w-full px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-black font-bold font-mono text-xs uppercase tracking-wider transition-colors">
               Return to Base
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-12 text-[10px] font-mono text-slate-600 uppercase tracking-[0.2em]">
        Error Code: E_HYPERSPACE_LOST
      </div>
    </main>
  );
};

export default NotFoundPage;