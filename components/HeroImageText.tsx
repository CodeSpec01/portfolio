"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import RotatingText from "./Rotatingtext"; 
import ContactUsButton from "./ContactUsButton"; 
import CircularText from "./CircularText";
import { emblemaOne } from "@/app/layout";
import { Modal, ModalBody, ModalTrigger } from "./AnimatedModal";
import ContactModal from "./ContactModal";
import { circularTexts, rotatingTexts } from "@/constants/constants";

// Importing the Artifact Icons, added Crown
import { GiCube, GiKatana, GiSoccerBall, GiCheckeredFlag, GiCrown } from "react-icons/gi";

// Simple Particle Component
const Particles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const particles: any[] = [];
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width, y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1, dx: (Math.random() - 0.5) * 0.5, dy: (Math.random() - 0.5) * 0.5,
                alpha: Math.random() * 0.5 + 0.1
            });
        }
        const animate = () => {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += p.dx; p.y += p.dy;
                if (p.x < 0 || p.x > canvas.width) p.dx = -p.dx;
                if (p.y < 0 || p.y > canvas.height) p.dy = -p.dy;
                ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`; ctx.fill();
            });
        };
        animate();
        const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); cancelAnimationFrame(animate as any); };
    }, []);
    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-30" />;
};

// Helper for Hover Popover
const ArtifactPopover = ({ children, text, className }: { children: React.ReactNode, text: string, className?: string }) => {
    return (
        <div className={`group relative flex justify-center ${className}`}>
            {children}
            <div className="absolute bottom-full mb-3 hidden group-hover:block whitespace-nowrap z-50">
                <div className="bg-black/80 text-white text-xs font-mono py-1.5 px-3 rounded-md backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.2)] glitch-text">
                    {text}
                </div>
                 <div className="w-2 h-2 bg-black/80 border-r border-b border-white/10 transform rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1"></div>
            </div>
        </div>
    );
};


const HeroImageText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textTitleRef = useRef<HTMLDivElement>(null);
  const textSubtitleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const uiRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  
  // Refs for Floating Artifacts
  const cubeRef = useRef<HTMLDivElement>(null);
  const katanaRef = useRef<HTMLDivElement>(null);
  const flagRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const crownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // --- 1. INTRO ANIMATION (Standard) ---
    tl.fromTo(textTitleRef.current,
      { y: 150, opacity: 0, skewY: 10 },
      { y: 0, opacity: 1, skewY: 0, duration: 1.2, ease: "power4.out" }
    );
    
    tl.fromTo(textSubtitleRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.8"
    );

    tl.fromTo(imageRef.current,
      { y: 100, opacity: 0, scale: 1.1, filter: "brightness(0)" },
      { y: 0, opacity: 1, scale: 1, filter: "brightness(1)", duration: 1.5, ease: "power2.out" },
      "-=1"
    );

    tl.fromTo(circleRef.current,
      { rotate: -90, opacity: 0 },
      { rotate: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" },
      "-=1"
    );

    tl.fromTo(uiRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1 }, 
      "-=0.5"
    );

    // --- 2. ARTIFACT FLOAT ANIMATIONS ---
    gsap.to(cubeRef.current, { y: -20, rotation: 10, duration: 3, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(katanaRef.current, { y: -15, rotation: -5, duration: 4, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 0.5 });
    gsap.to(flagRef.current, { y: -25, rotation: 5, duration: 2.5, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1 });
    gsap.to(ballRef.current, { y: -20, rotation: -10, duration: 3.5, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1.5 });
    gsap.to(crownRef.current, { y: -15, rotation: 8, duration: 3.2, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 0.8 });


    // --- 3. 3D TILT INTERACTION ---
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);

      // Parallax for Main Elements
      gsap.to(textTitleRef.current, { x: x * -40, y: y * -20, rotationY: x * 10, duration: 1.5, ease: "power2.out" });
      gsap.to(imageRef.current, { x: x * -10, y: y * -5, rotationY: x * 5, duration: 1.5, ease: "power2.out" });

      // Parallax for Artifacts (They move faster = closer depth)
      gsap.to([cubeRef.current, katanaRef.current, flagRef.current, ballRef.current, crownRef.current], { 
        x: x * -70, 
        y: y * -50, 
        duration: 1, 
        ease: "power2.out" 
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Modal>
      <div ref={containerRef} className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-end perspective-1000">
        
        {/* --- PARTICLE SYSTEM --- */}
        <Particles />

        {/* CORNER BADGE (Quarter Visible) */}
        <div ref={circleRef} className="absolute -top-[70px] -left-[70px] z-50 mix-blend-normal hover:scale-105 transition-transform cursor-pointer">
           <CircularText 
             text={circularTexts} 
             className="animate-spin-slow bg-[#EAB308] text-black font-bold shadow-[0_0_30px_rgba(234,179,8,0.4)]" 
           />
        </div>

        {/* --- FLOATING ARTIFACTS WITH DIALOGUES --- */}
        
        {/* 1. Minecraft Cube (Bottom Left) */}
        <div ref={cubeRef} className="absolute bottom-[20%] left-[10%] z-20">
            <ArtifactPopover text="CREATIVE MODE">
                <GiCube size={50} className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            </ArtifactPopover>
        </div>

        {/* 2. Sekiro Katana (Bottom Right) - WITH DIALOGUE */}
        <div ref={katanaRef} className="absolute bottom-[25%] right-[10%] z-20">
            <ArtifactPopover text="HESITATION IS DEFEAT">
                <GiKatana size={60} className="text-red-600 rotate-45 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            </ArtifactPopover>
        </div>

        {/* 3. F1 Flag (Top Right) */}
        <div ref={flagRef} className="absolute top-[20%] right-[15%] z-10">
             <ArtifactPopover text="DRS ENABLED">
                <GiCheckeredFlag size={55} className="text-purple-400 -rotate-12 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
            </ArtifactPopover>
        </div>

        {/* 4. Football (Top Left) */}
        <div ref={ballRef} className="absolute top-[25%] left-[15%] z-10">
            <ArtifactPopover text="VISCA EL BARÇA">
                <GiSoccerBall size={45} className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
            </ArtifactPopover>
        </div>

        {/* 5. TECHNOBLADE CROWN (Center-Right) - WITH DIALOGUE */}
        <div ref={crownRef} className="absolute top-[40%] right-[25%] z-20">
            <ArtifactPopover text="TECHNOBLADE NEVER DIES">
                <GiCrown size={55} className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            </ArtifactPopover>
        </div>


        {/* --- BACKGROUND LAYERS --- */}
        <div className="absolute top-[10%] w-full flex flex-col items-center justify-center z-0 pointer-events-none select-none mix-blend-color-dodge">
          <div ref={textSubtitleRef} className="w-[80%] flex justify-between items-end border-b border-white/10 pb-4 mb-4">
             <span className="text-white/40 font-mono text-sm tracking-[0.3em]">PORTFOLIO 2025</span>
             <span className="text-white/40 font-mono text-sm tracking-[0.3em] text-right">DEV // IOT // DESIGN</span>
          </div>

          <div ref={textTitleRef} className={`${emblemaOne.className} text-center leading-[0.85]`}>
            <h1 className="text-[18vw] text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/10 filter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              AVIRAL
            </h1>
            <h1 className="text-[18vw] text-transparent" style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.15)" }}>
              GAUR
            </h1>
          </div>
        </div>

        {/* --- HERO IMAGE LAYER --- */}
        <div className="relative z-10 h-[85vh] w-auto flex items-end justify-center pointer-events-none">
            <img
                ref={imageRef}
                src="/home/aviral.png"
                alt="Aviral Gaur"
                className="h-full w-auto object-contain z-10 relative drop-shadow-2xl"
                style={{ WebkitBoxReflect: "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.2))" }}
            />
            
            {/* Stage Light Gradient */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[40%] bg-gradient-to-t from-[#03000a] via-[#03000a]/90 to-transparent z-20" />
            
            {/* Bottom Fog */}
            <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-purple-900/20 to-transparent blur-3xl z-10" />
        </div>

        {/* --- CONTROL DOCK --- */}
        <div ref={uiRef} className="absolute bottom-10 z-50 flex flex-col items-center gap-4 w-full">
            
            {/* Rotating Text Pill (Minimalist White) */}
            <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <div className="w-1.5 h-1.5 bg-[#EAB308] rounded-full animate-pulse shadow-[0_0_10px_#EAB308]" />
                <div className="h-[20px] overflow-hidden">
                    <RotatingText
                        texts={rotatingTexts}
                        mainClassName="text-white/80 text-sm font-mono tracking-widest uppercase"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        rotationInterval={3000}
                    />
                </div>
            </div>

            {/* Main Action - Connect (Minimalist Yellow) */}
            <ModalTrigger>
                <div className="group relative cursor-pointer">
                    <ContactUsButton className="" />
                </div>
            </ModalTrigger>

            {/* Decorative Grid Lines */}
            <div className="absolute bottom-[-40px] w-[95%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        <ModalBody>
          <ContactModal />
        </ModalBody>
      </div>
    </Modal>
  );
};

export default HeroImageText;