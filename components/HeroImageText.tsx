"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import RotatingText from "./Rotatingtext";
import ContactUsButton from "./ContactUsButton";
import CircularText from "./CircularText";
import { emblemaOne } from "@/app/layout";
import { Modal, ModalBody, ModalTrigger } from "./AnimatedModal";
import ContactModal from "./ContactModal";
import { circularTexts, rotatingTexts } from "@/constants/constants";

// Importing Icons
import { 
  GiCube, GiKatana, GiSoccerBall, GiCheckeredFlag, GiCrown, 
  GiSteeringWheel, GiSnitchQuidditchBall 
} from "react-icons/gi";
import { 
  FaHatWizard, FaMicrochip, FaCameraRetro, FaCode 
} from "react-icons/fa";

// --- THEME CONFIGURATION ---
type HouseTheme = {
  name: string;
  hex: string;
  primary: string;
  secondary: string;
  particleColor: string;
  bgGradient: string;
  stroke: string;
};

const THEMES: Record<string, HouseTheme> = {
  DEFAULT: {
    name: "DEFAULT",
    hex: "#ffffff",
    primary: "from-white/90 to-white/10",
    secondary: "text-[#EAB308] border-white/10 bg-white/5",
    particleColor: "255, 255, 255",
    bgGradient: "from-purple-900/20 to-transparent",
    stroke: "rgba(255, 255, 255, 0.15)",
  },
  GRYFFINDOR: {
    name: "GRYFFINDOR",
    hex: "#eeba30",
    primary: "from-[#740001] via-[#d3a625] to-[#eeba30]",
    secondary: "text-[#eeba30] border-[#eeba30]/40 bg-[#740001]/40",
    particleColor: "116, 0, 1",
    bgGradient: "from-[#740001]/50 via-[#380b10]/30 to-transparent",
    stroke: "rgba(238, 186, 48, 0.9)",
  },
  SLYTHERIN: {
    name: "SLYTHERIN",
    hex: "#2a6636",
    primary: "from-[#1A472A] via-[#2a6636] to-[#aaaaaa]",
    secondary: "text-[#aaaaaa] border-[#aaaaaa]/40 bg-[#1A472A]/40",
    particleColor: "26, 71, 42",
    bgGradient: "from-[#1A472A]/50 via-[#041f0b]/30 to-transparent",
    stroke: "rgba(170, 170, 170, 0.9)",
  },
  RAVENCLAW: {
    name: "RAVENCLAW",
    hex: "#4fa3d1",
    primary: "from-[#0E1A40] via-[#222f5b] to-[#946b2d]",
    secondary: "text-[#946b2d] border-[#946b2d]/40 bg-[#0E1A40]/40",
    particleColor: "14, 26, 64",
    bgGradient: "from-[#0E1A40]/50 via-[#070f2e]/30 to-transparent",
    stroke: "rgba(148, 107, 45, 0.9)",
  },
  HUFFLEPUFF: {
    name: "HUFFLEPUFF",
    hex: "#ecb939",
    primary: "from-[#ecb939] via-[#f0c75e] to-[#372e29]",
    secondary: "text-[#372e29] border-[#372e29]/30 bg-[#ecb939]/40",
    particleColor: "236, 185, 57",
    bgGradient: "from-[#ecb939]/40 via-[#b38b27]/20 to-transparent",
    stroke: "rgba(55, 46, 41, 0.9)",
  },
};

// --- SORTING SCENARIOS ---
const SORTING_SCENARIOS = [
  {
    lines: ["Quick mind, steady hands.", "You learn fast and think deeper than most.", "Questions matter more to you than applause."],
    resultText: "Best place to grow? Ravenclaw.",
    houseKey: "RAVENCLAW"
  },
  {
    lines: ["Ambition burns, but it’s controlled.", "You plan before you strike.", "Greatness calls — if you stay sharp."],
    resultText: "Hmm… Slytherin.",
    houseKey: "SLYTHERIN"
  },
  {
    lines: ["Brave heart, even when unsure.", "You step forward when others hesitate.", "Fear doesn’t stop you — it follows you."],
    resultText: "Gryffindor!",
    houseKey: "GRYFFINDOR"
  },
  {
    lines: ["Loyal to your people.", "You endure without complaint.", "Quiet strength, steady soul."],
    resultText: "Hufflepuff!",
    houseKey: "HUFFLEPUFF"
  },
  {
    lines: ["Mind full of patterns and logic.", "You crave understanding, not shortcuts.", "Knowledge excites you more than victory."],
    resultText: "Ravenclaw!",
    houseKey: "RAVENCLAW"
  },
  {
    lines: ["Sharp instincts, sharper intent.", "You know what you want.", "You’d rather rule than follow."],
    resultText: "Careful now… Slytherin.",
    houseKey: "SLYTHERIN"
  },
  {
    lines: ["Bold choices, loud courage.", "You leap before the doubt settles.", "Risk doesn’t scare you — boredom does."],
    resultText: "Gryffindor!",
    houseKey: "GRYFFINDOR"
  },
  {
    lines: ["Kind heart, patient mind.", "You build people, not trophies.", "Trust comes easily to you."],
    resultText: "Hufflepuff!",
    houseKey: "HUFFLEPUFF"
  },
  {
    lines: ["You think while others rush.", "Ideas stack neatly in your head.", "Wisdom before words — always."],
    resultText: "Ravenclaw!",
    houseKey: "RAVENCLAW"
  },
  {
    lines: ["Fire in your chest.", "Refusal to back down.", "You’d fight for what’s right — alone if needed."],
    resultText: "Gryffindor!",
    houseKey: "GRYFFINDOR"
  }
];

// --- STATIC ARTIFACTS DATA ---
// Spreading icons evenly: Left side vs Right side
const ARTIFACTS_DATA = [
  // --- LEFT SIDE ---
  { 
    id: "coding", 
    Icon: FaCode, 
    text: "<HELLO WORLD />", 
    style: { top: '15%', left: '8%' }, 
    color: "text-cyan-400" 
  },
  { 
    id: "football", 
    Icon: GiSoccerBall, 
    text: "VISCA EL BARÇA", 
    style: { top: '30%', left: '12%' }, 
    color: "text-blue-500" 
  },
  { 
    id: "cars", 
    Icon: GiSteeringWheel, 
    text: "PURE SPEED", 
    style: { top: '45%', left: '6%' }, 
    color: "text-red-500" 
  },
  { 
    id: "cube", 
    Icon: GiCube, 
    text: "CREATIVE MODE", 
    style: { top: '60%', left: '10%' }, 
    color: "text-emerald-500" 
  },
  { 
    id: "crown", 
    Icon: GiCrown, 
    text: "TECHNOBLADE NEVER DIES", 
    style: { top: '75%', left: '7%' }, 
    color: "text-yellow-400" 
  },

  // --- RIGHT SIDE ---
  { 
    id: "photo", 
    Icon: FaCameraRetro, 
    text: "CAPTURE MOMENTS", 
    style: { top: '18%', right: '8%' }, 
    color: "text-pink-400" 
  },
  { 
    id: "hp", 
    Icon: GiSnitchQuidditchBall, 
    text: "I OPEN AT THE CLOSE", 
    style: { top: '33%', right: '12%' }, 
    color: "text-amber-300" 
  },
  { 
    id: "gadgets", 
    Icon: FaMicrochip, 
    text: "NEXT GEN TECH", 
    style: { top: '48%', right: '6%' }, 
    color: "text-teal-400" 
  },
  { 
    id: "katana", 
    Icon: GiKatana, 
    text: "HESITATION IS DEFEAT", 
    style: { top: '63%', right: '10%' }, 
    color: "text-red-600" 
  },
  { 
    id: "flag", 
    Icon: GiCheckeredFlag, 
    text: "BOX BOX BOX", 
    style: { top: '78%', right: '8%' }, 
    color: "text-purple-400" 
  },
];

// --- PARTICLES (Optimized) ---
const Particles = ({ colorRgb }: { colorRgb: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let animationFrameId: number;
        let particles: any[] = [];

        const setCanvasSize = () => {
             if(canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
             }
        };
        setCanvasSize();

        const particleCount = window.innerWidth < 768 ? 20 : 50;
        
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width, 
                y: Math.random() * canvas.height,
                radius: Math.random() * 2.0 + 0.5, 
                dx: (Math.random() - 0.5) * 0.2, 
                dy: (Math.random() - 0.5) * 0.2,
                alpha: Math.random() * 0.5 + 0.1
            });
        }

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.x += p.dx; 
                p.y += p.dy;
                if (p.x < 0 || p.x > canvas.width) p.dx = -p.dx;
                if (p.y < 0 || p.y > canvas.height) p.dy = -p.dy;
                ctx.beginPath(); 
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${colorRgb}, ${p.alpha})`; 
                ctx.fill();
            });
        };
        
        animate();
        window.addEventListener('resize', setCanvasSize);
        return () => { 
            window.removeEventListener('resize', setCanvasSize); 
            cancelAnimationFrame(animationFrameId); 
        };
    }, [colorRgb]);
    
    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-1000" />;
};

// Helper for Hover Popover
const ArtifactPopover = ({ children, text, className }: { children: React.ReactNode, text: string, className?: string }) => {
    return (
        <div className={`group relative flex justify-center ${className}`}>
            {children}
            <div className="absolute bottom-full mb-3 hidden md:group-hover:block whitespace-nowrap z-50 pointer-events-none">
                <div className="bg-black/80 text-white text-xs font-mono py-1.5 px-3 rounded-md backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.2)] glitch-text">
                    {text}
                </div>
                 <div className="w-2 h-2 bg-black/80 border-r border-b border-white/10 transform rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1"></div>
            </div>
        </div>
    );
};

const MagicWandSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M4.5 19.5L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-90"/>
    <path d="M3 21L6 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-100"/>
    <path d="M19 2L20 4L22 5L20 6L19 8L18 6L16 5L18 4L19 2Z" fill="currentColor" className="animate-pulse" />
    <path d="M14 2L14.5 3L15.5 3.5L14.5 4L14 5L13.5 4L12.5 3.5L13.5 3L14 2Z" fill="currentColor" className="animate-pulse delay-75" />
  </svg>
);

const SortingOverlay = ({ onClose }: { onClose: (house: string) => void }) => {
    const hatRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const [currentText, setCurrentText] = useState("");

    const scenario = useMemo(() => SORTING_SCENARIOS[Math.floor(Math.random() * SORTING_SCENARIOS.length)], []);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo(hatRef.current, 
                { scale: 0, rotation: -20, opacity: 0 }, 
                { scale: 1, rotation: 0, opacity: 1, duration: 0.8, ease: "back.out(1.5)" }
            );

            scenario.lines.forEach((line, index) => {
                tl.call(() => setCurrentText(line));
                tl.fromTo(textRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 });
                tl.to(hatRef.current, { rotation: index % 2 === 0 ? 5 : -5, duration: 0.2, yoyo: true, repeat: 3, ease: "sine.inOut" }, "<");
                tl.to({}, { duration: 1.2 }); 
                tl.to(textRef.current, { opacity: 0, y: -10, duration: 0.3 });
            });

            tl.call(() => setCurrentText(scenario.resultText));
            tl.to(hatRef.current, { scale: 1.2, rotation: 0, duration: 0.4, ease: "back.out(2)" });
            tl.fromTo(textRef.current, 
                { opacity: 0, scale: 0.8, color: "#fff" }, 
                { opacity: 1, scale: 1.1, color: "#e8b522", duration: 0.6, ease: "power2.out" }
            );
            tl.to({}, { duration: 1.5 });
            
            tl.call(() => onClose(scenario.houseKey));
        });

        return () => ctx.revert();
    }, [onClose, scenario]);

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0502]/95 backdrop-blur-xl px-4"
        >
            <div ref={hatRef} className="text-[#8B4513] drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] filter brightness-110 mb-8 will-change-transform">
                <FaHatWizard className="text-[120px] md:text-[220px]" />
            </div>
            <h2 ref={textRef} className="text-xl md:text-4xl font-serif text-[#f0e6d2] text-center max-w-2xl leading-relaxed drop-shadow-lg min-h-[4em] flex items-center justify-center will-change-transform">
                {currentText}
            </h2>
        </motion.div>
    );
};


const HeroImageText = () => {
  const [currentTheme, setCurrentTheme] = useState<HouseTheme>(THEMES.DEFAULT);
  const [isSorting, setIsSorting] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const textTitleRef = useRef<HTMLDivElement>(null);
  const textSubtitleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const uiRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const wandRef = useRef<HTMLDivElement>(null);
  
  // Array ref for multiple artifacts
  const artifactRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
        const tl = gsap.timeline();

        // Intro Animations
        tl.fromTo(textTitleRef.current, { y: 150, opacity: 0, skewY: 10 }, { y: 0, opacity: 1, skewY: 0, duration: 1.2, ease: "power4.out" });
        tl.fromTo(textSubtitleRef.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power2.out" }, "-=0.8");
        
        // Image Entry Animation (Only initial rise)
        tl.fromTo(imageRef.current, { y: 100, opacity: 0, scale: 1.1, filter: "brightness(0)" }, { y: 0, opacity: 1, scale: 1, filter: "brightness(1)", duration: 1.5, ease: "power2.out" }, "-=1");
        
        tl.fromTo(circleRef.current, { rotate: -90, opacity: 0, scale: 0.5 }, { rotate: 0, opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.7)" }, "-=1");
        tl.fromTo(uiRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5");

        // Floating Artifacts Idle Animation
        artifactRefs.current.forEach((el, i) => {
            if(el) {
                // Intro for artifacts
                gsap.fromTo(el, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, delay: 0.5 + (i * 0.1), ease: "back.out" });
                // Float animation
                gsap.to(el, { 
                    y: -15, 
                    rotation: i % 2 === 0 ? 5 : -5, 
                    duration: 2.5 + i * 0.2, 
                    yoyo: true, 
                    repeat: -1, 
                    ease: "sine.inOut"
                });
            }
        });

        // Wand Float
        if(wandRef.current) {
            gsap.to(wandRef.current, { y: -10, rotation: 10, duration: 3, yoyo: true, repeat: -1, ease: "sine.inOut" });
        }

        // Mouse Move Effect (Desktop Only) - REMOVED IMAGE MOVEMENT
        if (window.innerWidth >= 768) {
            const titleX = gsap.quickTo(textTitleRef.current, "x", {duration: 1.5, ease: "power2.out"});
            const titleY = gsap.quickTo(textTitleRef.current, "y", {duration: 1.5, ease: "power2.out"});
            const titleRot = gsap.quickTo(textTitleRef.current, "rotationY", {duration: 1.5, ease: "power2.out"});

            // Combined artifacts for mouse move
            const allArtifacts = [...artifactRefs.current, wandRef.current];
            const artX = gsap.quickTo(allArtifacts, "x", {duration: 1, ease: "power2.out"});
            const artY = gsap.quickTo(allArtifacts, "y", {duration: 1, ease: "power2.out"});

            const handleMouseMove = (e: MouseEvent) => {
                const x = (e.clientX / window.innerWidth - 0.5);
                const y = (e.clientY / window.innerHeight - 0.5);
                
                // Text moves
                titleX(x * -40); titleY(y * -20); titleRot(x * 10);
                
                // Artifacts move
                artX(x * -70); artY(y * -50);

                // NOTE: Image movement logic removed as requested
            };
            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }
    });

    return () => ctx.revert();
  }, []);

  const handleSortingComplete = (houseKey: string) => {
      setIsSorting(false);
      if(THEMES[houseKey]) {
          setCurrentTheme(THEMES[houseKey]);
          gsap.to(containerRef.current, { 
              backgroundColor: THEMES[houseKey].hex + "15", 
              duration: 1.5 
          });
      }
  };

  return (
    <Modal>
      <AnimatePresence>
        {isSorting && <SortingOverlay onClose={handleSortingComplete} />}
      </AnimatePresence>

      <div 
        ref={containerRef} 
        className="relative w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-end perspective-1000 transition-colors duration-1000 bg-black"
        style={{ 
            backgroundColor: currentTheme.name === "DEFAULT" ? "#000" : currentTheme.hex + "15" 
        }}
      >

        <Particles colorRgb={currentTheme.particleColor} />

        {/* Circular Text Badge */}
        <div
            ref={circleRef}
            className="absolute -top-6 -left-6 md:-top-[80px] md:-left-[80px] z-50 mix-blend-normal hover:scale-110 transition-all duration-500 cursor-pointer rounded-full shadow-2xl scale-[0.55] md:scale-100 origin-center will-change-transform"
            style={{ backgroundColor: currentTheme.name === "DEFAULT" ? "#000" : currentTheme.hex, boxShadow: `0 0 50px ${currentTheme.hex}60` }}
        >
           <CircularText text={circularTexts} className={`animate-spin-slow text-white font-bold tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`} />
        </div>
        
        {/* Magic Wand Trigger */}
        <div ref={wandRef} className="absolute top-4 right-4 md:top-[12%] md:right-[20%] z-30 cursor-pointer will-change-transform" onClick={() => setIsSorting(true)}>
            <ArtifactPopover text="CLICK FOR MAGIC">
                <MagicWandSVG className="w-8 scale-75 h-8 md:w-20 md:h-20 text-white/80 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:text-amber-200 transition-all duration-300" />
            </ArtifactPopover>
        </div>

        {/* Mapped Artifacts (Evenly Spread) */}
        {ARTIFACTS_DATA.map((item, index) => {
            const IconComponent = item.Icon;
            return (
                <div 
                    key={item.id}
                    ref={el => { if(el) artifactRefs.current[index] = el }}
                    className="absolute hidden md:block z-20 pointer-events-auto will-change-transform" 
                    style={item.style}
                >
                    <ArtifactPopover text={item.text}>
                        <IconComponent 
                            className={`${item.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] opacity-80 md:opacity-60 hover:opacity-100 transition-all duration-300 text-[35px] md:text-[50px]`} 
                        />
                    </ArtifactPopover>
                </div>
            );
        })}

        {/* Main Text Area */}
        <div className="absolute top-[12%] md:top-[10%] w-full flex flex-col items-center justify-center z-0 pointer-events-none select-none">
          <div ref={textSubtitleRef} className={`w-[90%] md:w-[80%] flex justify-between items-end border-b pb-2 md:pb-4 mb-2 md:mb-4 transition-colors duration-1000 ${currentTheme.secondary.split(" ")[1]}`}>
             <span className="text-white/50 font-mono text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em]">PORTFOLIO 2025</span>
             <span className="text-white/50 font-mono text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-right">DEV // IOT // DESIGN</span>
          </div>
          <div ref={textTitleRef} className={`${emblemaOne.className} text-center leading-[0.9] md:leading-[0.85] will-change-transform`}>
            <h1 className={`text-[19vw] md:text-[18vw] text-transparent bg-clip-text bg-gradient-to-b ${currentTheme.primary} filter drop-shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-1000`}>AVIRAL</h1>
            <h1 className="text-[19vw] md:text-[18vw] text-transparent transition-all duration-1000" style={{ WebkitTextStroke: `1px ${currentTheme.stroke}` }}>GAUR</h1>
          </div>
        </div>

        {/* Main Image - No Mouse Movement, Just Entry */}
        <div className="relative z-10 h-[80vh] overflow-x-hidden md:h-[85vh] w-[150vw] flex items-end justify-center pointer-events-none">
            <img 
                ref={imageRef} 
                src="/home/aviral.png" 
                alt="Aviral Gaur" 
                loading="eager" 
                className="h-full -inset-x-[10vw] md:inset-0 w-[150vw] object-contain z-10 relative drop-shadow-2xl will-change-transform" 
                style={{ WebkitBoxReflect: "below 2px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.15))" }} 
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[50%] bg-gradient-to-t from-black via-black/80 to-transparent z-20" />
            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] md:h-[400px] bg-gradient-to-t ${currentTheme.bgGradient} blur-[60px] md:blur-[100px] z-10 transition-all duration-1000 opacity-80`} />
        </div>

        {/* Bottom UI / Contact */}
        <div ref={uiRef} className="absolute bottom-6 md:bottom-12 z-50 flex flex-col items-center gap-4 md:gap-5 w-full pointer-events-auto">
            <div className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-1.5 md:py-2 rounded-full border backdrop-blur-xl shadow-[0_5px_20px_rgba(0,0,0,0.2)] transition-all duration-1000 ${currentTheme.secondary}`}>
                <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse shadow-[0_0_15px_currentColor] bg-current`} />
                <div className="h-[18px] md:h-[20px] overflow-hidden relative w-[160px] md:w-[200px] text-center">
                    <RotatingText texts={rotatingTexts} mainClassName="text-white/90 text-xs md:text-sm font-bold font-mono tracking-wider uppercase whitespace-nowrap" staggerFrom={"last"} initial={{ y: "150%" }} animate={{ y: 0 }} exit={{ y: "-150%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} rotationInterval={3500} />
                </div>
            </div>
            <ModalTrigger>
                <div className="group relative cursor-pointer scale-100 md:scale-110 hover:scale-110 md:hover:scale-125 transition-all duration-300" style={{ color: currentTheme.hex, filter: `drop-shadow(0 0 10px ${currentTheme.hex}40)` }}>
                    <ContactUsButton className="transition-colors duration-500" />
                </div>
            </ModalTrigger>
            <div className="absolute bottom-[-50px] w-screen h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
        </div>

        <ModalBody><ContactModal /></ModalBody>
      </div>
    </Modal>
  );
};

export default HeroImageText;