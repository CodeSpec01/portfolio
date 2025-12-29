'use client';
import React, { useRef, useEffect } from 'react';
import { useModal } from '@/contexts/ModalContext';

const HeroSpotlight = () => {
  const { isModalOpen } = useModal();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const light1Ref = useRef<HTMLDivElement>(null);
  const light2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // --- 1. MOUSE SPOTLIGHT LOGIC (Throttled with rAF) ---
    let mousePos = { x: 0, y: 0 };
    let isTicking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (isModalOpen) {
        // Instantly hide the spotlight when modal is open for better performance
        if (containerRef.current) {
            containerRef.current.style.setProperty('--mouse-x', '-9999px');
            containerRef.current.style.setProperty('--mouse-y', '-9999px');
        }
        return;
      }
      mousePos = { x: e.clientX, y: e.clientY };
      if (!isTicking) {
        requestAnimationFrame(() => {
          if (containerRef.current) {
            const x = mousePos.x - containerRef.current.offsetLeft;
            const y = mousePos.y - containerRef.current.offsetTop;
            containerRef.current.style.setProperty('--mouse-x', `${x}px`);
            containerRef.current.style.setProperty('--mouse-y', `${y}px`);
          }
          isTicking = false;
        });
        isTicking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // --- 2. SNOW ANIMATION LOGIC ---
    const canvas = canvasRef.current;
    let isTabActive = true;

    if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
            const snowflakes: { x: number; y: number; radius: number; speed: number; opacity: number }[] = [];
            
            const resizeCanvas = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            };
            
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);

            const createSnowflakes = () => {
                const count = window.innerWidth < 768 ? 40 : 80;
                for (let i = 0; i < count; i++) {
                    snowflakes.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        radius: Math.random() * 1.5 + 0.5,
                        speed: Math.random() * 0.8 + 0.2,
                        opacity: Math.random() * 0.5 + 0.2
                    });
                }
            };
            createSnowflakes();

            const drawSnow = () => {
                if (!isTabActive || isModalOpen) {
                  animationFrameId.current = requestAnimationFrame(drawSnow);
                  return;
                }
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                snowflakes.forEach((flake) => {
                    ctx.beginPath();
                    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
                    ctx.fill();
                    flake.y += flake.speed;
                    if (flake.y > canvas.height) {
                        flake.y = -5;
                        flake.x = Math.random() * canvas.width;
                    }
                });

                animationFrameId.current = requestAnimationFrame(drawSnow);
            };

            drawSnow();

            const handleVisibilityChange = () => {
              isTabActive = !document.hidden;
            };
            document.addEventListener("visibilitychange", handleVisibilityChange);
        }
    }
    
    // --- 3. PAUSE CSS ANIMATIONS ---
    if (light1Ref.current && light2Ref.current) {
        if (isModalOpen) {
            light1Ref.current.classList.add('paused');
            light2Ref.current.classList.add('paused');
        } else {
            light1Ref.current.classList.remove('paused');
            light2Ref.current.classList.remove('paused');
        }
    }


    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
        // It's better to define the handler outside to remove it correctly
        document.removeEventListener("visibilitychange", () => {});
        if (canvas) window.removeEventListener('resize', () => {});
    };
  }, [isModalOpen]); // Rerun effect when modal state changes

  return (
    <div ref={containerRef} className="fixed inset-0 h-full w-full bg-[#03000a] -z-50 overflow-hidden">
      
      {/* 1. Ambient Lights (Reduced Blur) */}
      <div ref={light1Ref} className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[90px] animate-pulse" />
      <div ref={light2Ref} className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[90px] animate-pulse" style={{animationDelay: '2s'}} />

      {/* 2. MOUNTAINS */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none opacity-40 mix-blend-screen">
         <svg className="absolute bottom-0 w-full h-[25vh] md:h-[40vh] text-purple-900/20 fill-current" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" opacity=".25" />
            <path d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 113.71-52.75 77.42-23.63 120.22-38.64V0z" opacity=".5" />
         </svg>
         
         <svg className="absolute bottom-0 w-full h-[15vh] md:h-[25vh] text-[#0a0514] fill-current" preserveAspectRatio="none" viewBox="0 0 1440 320">
             <path fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         </svg>
      </div>

      {/* 3. CYBER GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] z-10" />

      {/* 4. SNOW CANVAS */}
      <canvas ref={canvasRef} className="absolute inset-0 z-20 pointer-events-none" />

      {/* 5. The Spotlight Beam */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-30"
        style={{
          background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(120, 50, 255, 0.08), transparent 45%)`,
        }}
      />
      
      {/* 6. Global Noise Texture */}
      <div className="bg-noise opacity-30 z-40 pointer-events-none" />
    </div>
  );
};

export default HeroSpotlight;