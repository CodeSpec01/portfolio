"use client";

import React from "react";

/**
 * Loader Component
 * 
 * A lightning bolt animated loader with glow effect.
 * Used for loading states across the application.
 */
const Loader: React.FC = () => {
  return (
    <div className="w-12 mx-auto min-h-[20vh] flex items-center drop-shadow-[0_0_10px_rgba(255,227,128,1)]">
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 10V3L4 14h7v7l9-11h-7z"
          strokeDasharray="80"
          strokeDashoffset="80"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="80;0;-80"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

export default Loader;