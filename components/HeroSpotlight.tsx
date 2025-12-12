'use client';
import React, { useRef, useEffect } from 'react';

const HeroSpotlight = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const x = clientX - containerRef.current.offsetLeft;
      const y = clientY - containerRef.current.offsetTop;
      
      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Simple F1 Car Animation Loop
    if (carRef.current) {
        const car = carRef.current;
        let pos = -300;
        const animateCar = () => {
            pos += 4; // Increased speed slightly
            if (pos > window.innerWidth + 300) {
                pos = -300;
            }
            car.style.transform = `translateX(${pos}px)`;
            requestAnimationFrame(animateCar);
        };
        animateCar();
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 h-full w-full bg-[#03000a] -z-50 overflow-hidden">
      
      {/* 1. Ambient Lights */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}} />

      {/* 2. SUPERCAR REFERENCE: Giant Rotating Wheel Background */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none animate-[spin_60s_linear_infinite]">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[80vw] h-[80vw] text-white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
            <path opacity=".3" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/>
        </svg>
      </div> */}


      {/* 3. CYBER GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* 4. F1 CAR BACKGROUND ELEMENT */}
      {/* <div ref={carRef} className="absolute bottom-[18%] left-0 opacity-30 z-0 pointer-events-none will-change-transform text-purple-500/50 mix-blend-screen">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-64 h-auto fill-current">
            <path d="M501.6 295.7c-8.1-23.3-30.9-39.4-55.8-39.4h-28.1l-27.9-83.7c-6-17.9-22.8-29.8-41.7-29.8h-89c-14.9 0-28.3 7.8-36 20.4L193.4 209H136c-24.9 0-47.7 16.1-55.8 39.4l-25.6 73.1H32c-17.7 0-32 14.3-32 32v80c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-80c0-17.7-14.3-32-32-32h-22.6l-25.6-73.1zM128 352c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm320 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm-54.9-92.3 21.2 60.6H97.7l21.2-60.6c2.7-7.8 10.3-13.1 18.6-13.1h236.8c8.3 0 15.9 5.3 18.6 13.1z"/>
        </svg>
      </div> */}

      {/* 5. The Spotlight Beam */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(120, 50, 255, 0.08), transparent 45%)`,
        }}
      />
      
      {/* 6. Global Noise Texture */}
      <div className="bg-noise" />
    </div>
  );
};

export default HeroSpotlight;