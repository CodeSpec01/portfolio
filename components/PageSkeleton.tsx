"use client";

import React from "react";

// ============================================================================
// Types
// ============================================================================

interface PageSkeletonProps {
  variant?: "default" | "minimal" | "full";
}

// ============================================================================
// PageSkeleton Component
// ============================================================================

/**
 * PageSkeleton Component
 * 
 * Generic loading skeleton for pages with multiple variants:
 * - default: Full page skeleton with header, cards, and content
 * - minimal: Simple centered spinner with text
 * 
 * Features shimmer effects and gradient backgrounds matching page designs.
 */
const PageSkeleton: React.FC<PageSkeletonProps> = ({
  variant = "default",
}) => {
  if (variant === "minimal") {
    return (
      <div className="min-h-screen w-full bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
          <div className="h-4 w-32 bg-white/10 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      {/* Background gradient - matches page backgrounds */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#004D98]/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#A50044]/10 rounded-full blur-[80px]"></div>
      </div>

      {/* Noise texture */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url(/globals/noise.svg)]"></div>

      {/* Content skeleton */}
      <div className="relative z-10 w-full px-6 md:px-12 pt-24 pb-12">
        {/* Header skeleton */}
        <div className="mb-20 pl-4 md:pl-10 border-l-2 border-white/10">
          <div className="h-4 w-32 bg-white/10 rounded mb-4 animate-pulse"></div>
          <div className="h-20 md:h-24 w-3/4 bg-white/10 rounded mb-4 animate-pulse"></div>
          <div className="h-6 w-1/2 bg-white/10 rounded animate-pulse"></div>
        </div>

        {/* Cards/Content skeleton - responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-64 bg-white/5 rounded-2xl border border-white/10 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>

        {/* Additional content skeleton */}
        <div className="space-y-6">
          <div className="h-8 w-2/3 bg-white/10 rounded animate-pulse"></div>
          <div className="h-4 w-full bg-white/5 rounded animate-pulse"></div>
          <div className="h-4 w-5/6 bg-white/5 rounded animate-pulse"></div>
          <div className="h-4 w-4/6 bg-white/5 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>
    </div>
  );
};

export default PageSkeleton;

