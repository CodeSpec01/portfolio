"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import RotatingText from "./Rotatingtext";
import { emblemaOne } from "@/app/layout";
import { Modal, ModalBody, ModalTrigger } from "./AnimatedModal";
import ContactModal from "./ContactModal";
import { rotatingTexts, SORTING_SCENARIOS, THEMES, HouseTheme, ARTIFACTS_DATA } from "@/constants/constants";

import { FaHatWizard } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

// --- HELPERS ---
const ArtifactPopover = ({ children, text, className }: { children: React.ReactNode, text: string, className?: string }) => {
  return (
    <div className={`group relative flex justify-center ${className}`}>
      {children}
      <div className="absolute bottom-full mb-3 md:hidden md:group-hover:block whitespace-nowrap z-50 pointer-events-none">
        <div className="bg-black/80 text-white text-xs font-mono py-1.5 px-3 rounded-md backdrop-blur-md border border-white/10 shadow-sm">
          {text}
        </div>
      </div>
    </div>
  );
};

const MagicWandSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M4.5 19.5L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-90" />
    <path d="M3 21L6 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-100" />
    <path d="M19 2L20 4L22 5L20 6L19 8L18 6L16 5L18 4L19 2Z" fill="currentColor" className="animate-pulse" />
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
        { scale: 1, rotation: 0, opacity: 1, duration: 0.8, ease: "back.out(1.5)", force3D: true }
      );

      scenario.lines.forEach((line, index) => {
        tl.call(() => setCurrentText(line));
        tl.fromTo(textRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, force3D: true });
        tl.to(hatRef.current, { rotation: index % 2 === 0 ? 5 : -5, duration: 0.2, yoyo: true, repeat: 3, ease: "sine.inOut" }, "<");
        tl.to({}, { duration: 1.2 });
        tl.to(textRef.current, { opacity: 0, y: -10, duration: 0.3, force3D: true });
      });

      tl.call(() => setCurrentText(scenario.resultText));
      tl.to(hatRef.current, { scale: 1.2, rotation: 0, duration: 0.4, ease: "back.out(2)", force3D: true });
      tl.fromTo(textRef.current,
        { opacity: 0, scale: 0.8, color: "#fff" },
        { opacity: 1, scale: 1.1, color: "#e8b522", duration: 0.6, ease: "power2.out", force3D: true }
      );
      tl.to({}, { duration: 1.5 });

      tl.call(() => onClose(scenario.houseKey));
    });

    return () => ctx.revert();
  }, [onClose, scenario]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#0a0502]/95 backdrop-blur-xl px-4"
    >
      <div ref={hatRef} className="text-[#8B4513] drop-shadow-2xl filter brightness-110 mb-8 will-change-transform">
        <FaHatWizard className="text-[120px] md:text-[220px]" />
      </div>
      <h2 ref={textRef} className="text-xl md:text-4xl font-serif text-[#f0e6d2] text-center max-w-2xl leading-relaxed min-h-[4em] flex items-center justify-center will-change-transform">
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
  const artifactRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Intro Animations - Added force3D for smoother rendering
      tl.fromTo(textTitleRef.current,
        { y: 150, opacity: 0, skewY: 5 },
        { y: 0, opacity: 1, skewY: 0, duration: 1.2, ease: "power4.out", force3D: true }
      );

      tl.fromTo(textSubtitleRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out", force3D: true },
        "-=0.8"
      );

      // Image Entry
      tl.fromTo(imageRef.current,
        { y: 80, opacity: 0, scale: 1.05, filter: "brightness(0)" },
        { y: 0, opacity: 1, scale: 1, filter: "brightness(1)", duration: 1.5, ease: "power2.out", force3D: true },
        "-=1"
      );

      tl.fromTo(circleRef.current,
        { rotate: -90, opacity: 0, scale: 0.5 },
        { rotate: 0, opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.7)", force3D: true },
        "-=1"
      );

      tl.fromTo(uiRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, force3D: true },
        "-=0.5"
      );

      // Artifacts Idle
      artifactRefs.current.forEach((el, i) => {
        if (el) {
          gsap.fromTo(el, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, delay: 0.5 + (i * 0.1), ease: "back.out" });
          gsap.to(el, {
            y: -15,
            rotation: i % 2 === 0 ? 5 : -5,
            duration: 2.5 + i * 0.2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            force3D: true
          });
        }
      });

      if (wandRef.current) {
        gsap.to(wandRef.current, { y: -10, rotation: 10, duration: 3, yoyo: true, repeat: -1, ease: "sine.inOut", force3D: true });
      }

    });

    return () => ctx.revert();
  }, []);

  const handleSortingComplete = (houseKey: string) => {
    setIsSorting(false);
    if (THEMES[houseKey]) {
      setCurrentTheme(THEMES[houseKey]);
      gsap.to(containerRef.current, {
        backgroundColor: THEMES[houseKey].hex + "10",
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
        className="fixed w-full h-dvh overflow-hidden flex flex-col items-center justify-end perspective-1000 transition-colors duration-1000"
      >

        {/* Magic Wand Trigger */}
        <div ref={wandRef} className="w-fit absolute top-1/3 left-12 md:top-[12%] md:left-[30%] z-30 cursor-pointer will-change-transform" onClick={() => setIsSorting(true)}>
          <ArtifactPopover text="CLICK FOR MAGIC">
            <MagicWandSVG className="w-8 md:scale-75 h-8 md:w-20 md:h-20 text-white/80 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:text-amber-200 transition-colors duration-300" />
          </ArtifactPopover>
        </div>

        {/* Artifacts */}
        {ARTIFACTS_DATA.map((item, index) => {
          const IconComponent = item.Icon;
          return (
            <div
              key={item.id}
              ref={el => { if (el) artifactRefs.current[index] = el }}
              className="absolute hidden md:block z-20 pointer-events-auto will-change-transform"
              style={item.style}
            >
              <ArtifactPopover text={item.text}>
                <IconComponent
                  className={`${item.color} drop-shadow-md opacity-80 md:opacity-60 hover:opacity-100 transition-opacity duration-300 text-[35px] md:text-[50px]`}
                />
              </ArtifactPopover>
            </div>
          );
        })}

        {/* Main Text Area - Replaced drop-shadow with text-shadow for performance */}
        <div className="absolute top-[12%] md:top-[10%] w-full flex flex-col items-center justify-center z-0 pointer-events-none select-none">
          <div ref={textSubtitleRef} className={`w-[90%] md:w-[80%] flex justify-between items-end border-b border-white/10 pb-2 md:pb-4 mb-2 md:mb-4 transition-colors duration-1000 ${currentTheme.secondary.split(" ")[1]}`}>
            <span className="text-white/50 font-mono text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em]">PORTFOLIO 2025</span>
            <span className="text-white/50 font-mono text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-right">DEV // IOT // DESIGN</span>
          </div>
          <div ref={textTitleRef} className={`${emblemaOne.className} text-center leading-[0.9] md:leading-[0.85] will-change-transform`}>
            {/* Using text-shadow instead of filter drop-shadow is much cheaper for the browser */}
            <h1 className={`text-[19vw] md:text-[18vw] text-transparent bg-clip-text bg-linear-to-b ${currentTheme.primary} transition-all duration-1000`}
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.05)" }}>
              AVIRAL
            </h1>
            <h1 className="text-[19vw] md:text-[18vw] text-transparent transition-all duration-1000" style={{ WebkitTextStroke: `1px ${currentTheme.stroke}` }}>
              GAUR
            </h1>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative z-10 h-[80vh] overflow-x-hidden md:h-[85vh] w-[150vw] flex items-end justify-center pointer-events-none">
          {/* Replaced webkit-box-reflect with CSS gradient for performance if reflect causes lag, otherwise kept reflect but ensured it's on a static layer */}
          <img
            ref={imageRef}
            src="/home/aviral.png"
            alt="Aviral Gaur"
            loading="eager"
            className="h-full -inset-x-[10vw] md:inset-0 w-[150vw] object-contain z-10 relative drop-shadow-2xl will-change-transform"
            style={{
              WebkitBoxReflect: "below 2px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.15))"
            }}
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[50%] bg-linear-to-t from-[#050505] via-[#050505]/80 to-transparent z-20" />
          <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] md:h-[400px] bg-linear-to-t ${currentTheme.bgGradient} blur-[60px] md:blur-[100px] z-10 transition-all duration-1000 opacity-60`} />
        </div>

        {/* Bottom UI / Contact */}
        <div ref={uiRef} className="absolute bottom-6 md:bottom-12 z-50 flex flex-col items-center gap-4 md:gap-5 w-full pointer-events-auto">
          <div className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-white/10 backdrop-blur-xl shadow-lg transition-all duration-1000 ${currentTheme.secondary}`}>
            <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse shadow-[0_0_10px_currentColor] bg-current`} />
            <div className="h-[18px] md:h-5 overflow-hidden relative w-40 md:w-[200px] text-center">
              <RotatingText texts={rotatingTexts} mainClassName="text-white/90 text-xs md:text-sm font-bold font-mono tracking-wider uppercase whitespace-nowrap" staggerFrom={"last"} initial={{ y: "150%" }} animate={{ y: 0 }} exit={{ y: "-150%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} splitBy="characters" rotationInterval={3500} />
            </div>
          </div>
          <ModalTrigger className="cursor-target group relative cursor-pointer scale-100 hover:scale-105 transition-all group flex items-center justify-center gap-3 px-8 py-4 bg-[#FACC15] hover:bg-[#EAB308] 
                            rounded-full ease-out shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] duration-300"
            style={{ color: currentTheme.hex }}>

            <MdConnectWithoutContact size={22} className="opacity-80 group-hover:opacity-100 transition-opacity " color="black" />
            <span className="font-sans font-semibold text-sm tracking-widest uppercase text-black">
              Connect with me
            </span>
            <BsArrowRight size={18} className="w-0 overflow-hidden group-hover:w-5 transition-all duration-300 ease-out" color="black" />
          </ModalTrigger>
          <div className="absolute bottom-[-50px] w-screen h-px bg-linear-to-r from-transparent via-white/10 to-transparent opacity-50" />
        </div>

        <ModalBody><ContactModal /></ModalBody>
      </div>
    </Modal>
  );
};

export default HeroImageText;