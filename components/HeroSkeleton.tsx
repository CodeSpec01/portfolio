"use client";

import React from "react";
import { emblemaOne } from "@/app/layout";

// ============================================================================
// HeroSkeleton Component
// ============================================================================

/**
 * HeroSkeleton Component
 * 
 * Loading skeleton for the hero section that matches the layout
 * of HeroImageText component. Features animated placeholders for
 * text, images, and UI elements.
 */
const HeroSkeleton: React.FC = () => {
  return (
    <div className="fixed w-full h-dvh overflow-hidden flex flex-col items-center justify-end bg-[#03000a]">
      {/* Background gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-screen z-0 bg-linear-to-b from-transparent to-[#004D98]/10 opacity-20"></div>

      {/* Skeleton Icons - Floating around */}
      <div className="absolute top-[15%] left-[8%] w-12 h-12 bg-white/5 rounded-lg animate-pulse float-animation-delay-1 hidden md:block"></div>
      <div className="absolute top-[30%] left-[12%] w-10 h-10 bg-white/5 rounded-lg animate-pulse float-animation-delay-2 hidden md:block"></div>
      <div className="absolute top-[18%] right-[8%] w-12 h-12 bg-white/5 rounded-lg animate-pulse float-animation-delay-3 hidden md:block"></div>
      <div className="absolute top-[33%] right-[12%] w-10 h-10 bg-white/5 rounded-lg animate-pulse float-animation-delay-4 hidden md:block"></div>

      {/* Top Text Area Skeleton */}
      <div className="absolute top-[12%] md:top-[10%] w-full flex flex-col items-center justify-center z-0">
        {/* Subtitle skeleton */}
        <div className="w-[90%] md:w-[80%] flex justify-between items-end border-b border-white/10 pb-2 md:pb-4 mb-2 md:mb-4">
          <div className="h-3 w-32 bg-white/10 rounded animate-pulse"></div>
          <div className="h-3 w-32 bg-white/10 rounded animate-pulse"></div>
        </div>
        
        {/* Title skeleton */}
        <div className={`${emblemaOne.className} text-center`}>
          <div className="h-[19vw] md:h-[18vw] w-[60vw] bg-linear-to-b from-white/10 to-white/5 rounded-lg mx-auto mb-2 animate-pulse"></div>
          <div className="h-[19vw] md:h-[18vw] w-[50vw] bg-linear-to-b from-white/10 to-white/5 rounded-lg mx-auto animate-pulse"></div>
        </div>
      </div>

      {/* Main Image Skeleton */}
      <div className="relative z-10 h-[80vh] overflow-x-hidden md:h-[85vh] w-[150vw] flex items-end justify-center">
        <div className="h-[70vh] w-[40vw] md:w-[35vw] bg-linear-to-b from-white/10 via-white/5 to-transparent rounded-2xl animate-pulse"></div>
        {/* Gradient overlay skeleton */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[50%] bg-linear-to-t from-[#050505] via-[#050505]/80 to-transparent z-20" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] md:h-[400px] bg-linear-to-t from-[#004D98]/10 to-transparent blur-sm md:blur-md z-10 opacity-40" />
      </div>

      {/* Bottom UI Skeleton */}
      <div className="absolute bottom-6 md:bottom-12 z-50 flex flex-col items-center gap-4 md:gap-5 w-full">
        {/* Status pill skeleton */}
        <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-white/10 bg-black/60">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/20 animate-pulse"></div>
          <div className="h-4 w-32 md:w-40 bg-white/10 rounded animate-pulse"></div>
        </div>
        
        {/* Button skeleton */}
        <div className="h-12 w-48 md:w-56 bg-linear-to-r from-[#004D98]/20 to-[#A50044]/20 rounded-full animate-pulse"></div>
        
        {/* Divider */}
        <div className="absolute bottom-[-50px] w-screen h-px bg-linear-to-r from-transparent via-white/10 to-transparent opacity-50" />
      </div>

      {/* Shimmer effect overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>
    </div>
  );
}

