"use client";
import React, { useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GamesData, OtherGallery, OtherProjectData } from "@/constants/constants";

// ---------------------------------------------------------
// 1. DATA CONFIGURATION
// ---------------------------------------------------------

const projectData = OtherProjectData;

const galleryImages = OtherGallery;

const gamesData = GamesData;

// ---------------------------------------------------------
// 2. MAIN PAGE COMPONENT
// ---------------------------------------------------------

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PortfolioPage = () => {
  return (
    <main className="bg-[#030004] min-h-screen text-slate-200 selection:bg-orange-500/30 font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/20 blur-[120px] rounded-full" />
      </div>

      {/* HEADER SECTION */}
      <section className="h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-8xl font-serif font-bold bg-linear-to-b from-white to-slate-600 bg-clip-text text-transparent mb-6">
          Selected Works
        </h1>
        <p className="max-w-xl text-slate-400 text-lg">
          A collection of digital experiences, mainstream projects, and personal explorations.
        </p>
        <div className="mt-12 animate-bounce">
          <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      {/* PROJECT SCROLL SECTION */}
      <ProjectSection />

      {/* HORIZONTAL GALLERY SECTION */}
      <GallerySection galleryImages={galleryImages} />

      {/* CINEMATIC GAMING SECTION */}
      <GamingSection />
    </main>
  );
};

export default PortfolioPage;

// ---------------------------------------------------------
// 3. SUB-COMPONENTS
// ---------------------------------------------------------

// --- A. PROJECT SCROLL (Sticky Image + Scroll Text) ---
const ProjectSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".content-card");
    sections.forEach((section: any, index) => {
      // 1. Sticky Image Trigger
      ScrollTrigger.create({
        trigger: section,
        start: "top center+=100",
        end: "bottom center+=100",
        onEnter: () => setActiveCard(index),
        onEnterBack: () => setActiveCard(index),
      });

      // 2. Text Reveal Animation
      const textElements = section.querySelectorAll(".reveal-text");
      gsap.fromTo(textElements,
        { y: 50, opacity: 0, filter: "blur(10px)" },
        {
          y: 0, opacity: 1, filter: "blur(0px)", duration: 1, stagger: 0.1, ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div className="relative w-full mb-24" ref={containerRef}>
      <div className="flex justify-center relative mx-auto gap-10 px-4 md:px-8 max-w-7xl">

        {/* LEFT COLUMN: Sticky Images */}
        <div className="hidden lg:flex w-1/2 sticky top-0 h-screen items-center justify-center">
          <div className="relative w-full h-[500px]">
            {projectData.map((item, index) => (
              <div key={item.title + index}
                className="absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center"
                style={{
                  opacity: activeCard === index ? 1 : 0,
                  transform: `scale(${activeCard === index ? 1 : 0.9}) translateY(${activeCard === index ? 0 : 40}px)`,
                  zIndex: activeCard === index ? 10 : 0,
                }}
              >
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0a0f18] group">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent opacity-80" />

                  {/* Floating Links */}
                  {item.github && <div className="absolute bottom-6 left-6 flex gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <a href={item.github} className="px-4 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-orange-300 transition-colors">Github</a>
                  </div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Scrollable Text */}
        <div className="w-full lg:w-1/2 pt-10 lg:pt-24">
          {projectData.map((item, index) => (
            <div key={item.title + index} className="content-card min-h-[85vh] flex flex-col justify-center py-10">

              {/* Mobile Image */}
              <div className="lg:hidden mb-8 rounded-xl overflow-hidden border border-white/10 reveal-text h-64 relative">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
              </div>

              <h2 className="reveal-text text-4xl md:text-6xl font-serif font-bold mb-6 text-white leading-tight">
                {item.title}
              </h2>
              <p className="reveal-text text-lg text-slate-400 leading-relaxed mb-8 border-l-2 border-orange-500/50 pl-6">
                {item.description}
              </p>

              {/* Features List */}
              <ul className="reveal-text space-y-3 mb-8">
                {item.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="reveal-text flex flex-wrap gap-3">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-slate-300 tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- B. HORIZONTAL GALLERY (Pinning Scroll) ---
// Ensure plugins are registered
interface GallerySectionProps {
  galleryImages: string[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ galleryImages }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    // We use a function to calculate width dynamically
    const getScrollAmount = () => {
      const totalWidth = container.scrollWidth;
      const viewportWidth = window.innerWidth;
      return totalWidth - viewportWidth;
    };

    // Only animate if content is wider than screen
    if (container.scrollWidth > window.innerWidth) {
      gsap.to(container, {
        x: () => -getScrollAmount(), // Functional value updates on resize
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          // The scroll length equals the excess width we need to traverse
          end: () => `+=${getScrollAmount()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true, // CRITICAL: Recalculates on window resize
          anticipatePin: 1,
        },
      });
    }
  }, {
    scope: triggerRef,
    dependencies: [galleryImages] // CRITICAL: Re-runs if image count changes
  });

  return (
    <section ref={triggerRef} className="h-screen overflow-hidden bg-[#0a0a0a] relative flex items-center border-t border-white/5">
      <div className="absolute top-12 left-12 z-10 pointer-events-none">
        <h3 className="text-xs font-mono text-orange-400 uppercase tracking-[0.3em]">Life Through a Lens</h3>
      </div>

      {/* The min-w-fit ensures the container shrinks/grows exactly to content size
         allowing scrollWidth to be accurate 
      */}
      <div ref={containerRef} className="flex gap-12 px-[10vw] items-center h-[70vh] min-w-max">
        {/* Intro Text Card */}
        <div className="shrink-0 w-[80vw] md:w-[25vw] mr-12">
          <h2 className="text-5xl md:text-7xl font-serif font-thin text-white leading-tight mb-6">
            Moments <br /> <span className="italic text-slate-500">& Memories</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Photography is my way of pausing time.
          </p>
        </div>

        {/* Images */}
        {galleryImages.map((src, i) => (
          <div key={i} className="shrink-0 w-[80vw] md:w-[40vw] h-full relative group overflow-hidden rounded-sm md:grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer">
            <img src={src} alt="Gallery" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              ISO 400 • f/2.8
            </div>
          </div>
        ))}

        {/* Outro */}
        <div className="shrink-0 w-[20vw] flex items-center justify-center text-slate-700">
          <span className="rotate-90 text-xs tracking-[0.5em] uppercase">End of Gallery</span>
        </div>
      </div>
    </section>
  );
};

// --- C. GAMING SECTION (Cinematic Hover Reveal) ---
const GamingSection = () => {
  const [activeGame, setActiveGame] = useState(0);

  return (
    <section className="relative w-full min-h-screen py-4 bg-black overflow-hidden flex items-center z-10 border-t border-white/5">

      {/* DYNAMIC BACKGROUND */}
      {gamesData.map((game, index) => (
        <div
          key={game.id}
          className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out"
          style={{ opacity: activeGame === index ? 0.5 : 0 }}
        >
          <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/90 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
        </div>
      ))}

      {/* CONTENT LAYER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT: TITLE LIST */}
        <div className="space-y-6">
          <h2 className="text-xs font-mono text-orange-500 mb-12 tracking-[0.3em] uppercase">
              // My Gaming Library
          </h2>

          <div className="flex flex-col items-start gap-4">
            {gamesData.map((game, index) => (
              <button
                key={game.id}
                onMouseEnter={() => setActiveGame(index)}
                className={`text-left text-4xl md:text-5xl font-bold uppercase transition-all duration-500 ease-out ${activeGame === index
                  ? "text-white translate-x-8"
                  : "text-transparent stroke-text hover:text-white/20"
                  }`}
                style={{
                  // Fallback for stroke text if not using standard tailwind plugin
                  WebkitTextStroke: activeGame === index ? "0px" : "1px #333",
                }}
              >
                {game.title}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: STATS CARD */}
        <div className="relative h-[300px] md:h-full flex items-center justify-center md:justify-start">
          {gamesData.map((game, index) => (
            <div
              key={game.id}
              className={`absolute md:inset-[10vh] w-full h-full border border-white/10 bg-black/40 backdrop-blur-sm rounded-xl flex flex-col justify-center transition-all duration-500 transform ${activeGame === index
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-12 blur-sm pointer-events-none"
                }`}
            >
              <img src={game.image} className="object-cover object-top h-full rounded-xl" alt="img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};