"use client";

import React, { useRef, memo } from "react";

// ============================================================================
// HeroSpotlight Component
// ============================================================================

/**
 * HeroSpotlight Component
 * 
 * Background layer for the hero section featuring:
 * - Ambient gradient lights (Barcelona colors)
 * - Mountain silhouette SVGs
 * - Cyber grid overlay
 * 
 * Optimized for performance with reduced blur and disabled animations.
 */
const HeroSpotlight: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 h-full w-full bg-[#03000a] -z-50 overflow-hidden"
      style={{ contain: "layout style paint", transform: "translateZ(0)" }}
    >
      {/* Ambient Gradient Lights - Barcelona Colors */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#004D98]/25 rounded-full blur-[20px]"
        style={{ transform: "translateZ(0)" }}
      />
      <div
        className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#A50044]/20 rounded-full blur-[20px]"
        style={{ transform: "translateZ(0)" }}
      />

      {/* Mountain Silhouettes - Layered SVG */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none opacity-40">
        {/* Back Layer - Lighter/Further */}
        <svg
          className="absolute bottom-0 w-full h-[25vh] md:h-[40vh] text-[#004D98]/15 fill-current"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 113.71-52.75 77.42-23.63 120.22-38.64V0z"
            opacity=".5"
          />
        </svg>

        {/* Front Layer - Darker/Closer */}
        <svg
          className="absolute bottom-0 w-full h-[15vh] md:h-[25vh] text-[#0a0514] fill-current"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] z-10" />
    </div>
  );
};

export default memo(HeroSpotlight);