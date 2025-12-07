'use client';

import React, { useRef, useState, useEffect } from 'react';

interface SpotlightRevealProps {
  children: React.ReactNode;
  /**
   * The intensity of the darkness covering the content.
   * 0.95 = almost pitch black, 0.0 = transparent.
   */
  overlayOpacity?: number;
  /**
   * The size of the revealed area in pixels.
   */
  spotlightSize?: number;
  className?: string;
}

export const SpotlightReveal: React.FC<SpotlightRevealProps> = ({
  children,
  overlayOpacity = 0.92,
  spotlightSize = 350,
  className = "",
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    // Calculate x/y relative to the component
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full overflow-hidden bg-black ${className}`}
    >
      {/* The Content Layer
        We render the children normally here.
      */}
      <div className="relative z-0 h-full w-full">
        {children}
      </div>

      {/* The "Curtain" / Overlay Layer 
        This sits on top (z-10) and blocks the view.
        We use a radial gradient to create the "hole" where the mouse is.
      */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-colors duration-300"
        style={{
          background: isHovered
            ? `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, transparent 1%, rgba(0,0,0,${overlayOpacity}))`
            : `rgba(0,0,0,${overlayOpacity})`, 
        }}
      />
    </div>
  );
};