"use client";
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'; // Added useEffect
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';
import { Modal, ModalBody, ModalTrigger } from './AnimatedModal'; 
import { MdKeyboardCommandKey } from 'react-icons/md';
import SearchModal from './SearchModal';

// --- Types ---
type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor?: string; 
  textColor?: string; 
  links: CardNavLink[];
};

export interface CardNavProps {
  items: CardNavItem[];
  className?: string;
}

const Navbar: React.FC<CardNavProps> = ({
  items,
  className = '',
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Ref for the Search Button to trigger it programmatically
  const searchButtonRef = useRef<HTMLButtonElement>(null); 
  
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // --- CMD+K Logic ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for CMD+K (Mac) or CTRL+K (Windows)
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault(); // Prevent browser address bar focus
        searchButtonRef.current?.click(); // Simulates a click on the modal trigger
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // --- Dynamic Height Calculation ---
  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 300; 
    
    if (window.matchMedia('(max-width: 768px)').matches) {
       return (items.length * 140) + 80; 
    }
    
    return 280;
  };

  // --- Animation Timeline ---
  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(cardsRef.current, { y: 20, opacity: 0, scale: 0.95 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight(),
      width: window.innerWidth < 768 ? '95vw' : '600px',
      duration: 0.8,
      ease: "elastic.out(1, 0.75)",
    });

    tl.to(cardsRef.current, { 
      y: 0, 
      opacity: 1, 
      scale: 1, 
      duration: 0.5, 
      ease: "power2.out", 
      stagger: 0.1 
    }, "-=0.6");

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;
    return () => { tl?.kill(); };
  }, [items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (isExpanded && tlRef.current) {
         gsap.to(navRef.current, {
            width: window.innerWidth < 768 ? '95vw' : '600px',
            height: calculateHeight()
         });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play();
    } else {
      setIsHamburgerOpen(false);
      tl.reverse().then(() => setIsExpanded(false));
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div className='fixed top-4 right-4 z-50 md:top-6 md:right-8'>
      <Modal>
        <div className={`relative flex flex-col items-end ${className}`}>
          
          <nav
            ref={navRef}
            className={`
              relative overflow-hidden
              bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10
              shadow-[0_8px_32px_rgba(0,0,0,0.24)] 
              rounded-[24px] 
              transition-colors duration-300
              w-[220px] h-[64px]
            `}
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="relative z-20 flex items-center justify-between h-[64px] px-2 pl-3 w-full">
              
              {/* --- Modal Trigger with Ref --- */}
              {/* We pass a specific button here if ModalTrigger doesn't accept refs, 
                  but usually attaching it to the wrapper works if the click bubbles up. 
                  Ideally, ModalTrigger should be a <button> or forwardRef. */}
              <div ref={searchButtonRef as any}> 
                <ModalTrigger 
                  className='
                    group flex items-center gap-2 px-3 py-2 rounded-xl
                    bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20
                    transition-all duration-200 cursor-pointer
                  '
                  ariaLabel='Search'
                >
                  <div className="p-1 rounded-md bg-black/40 text-gray-400">
                      <MdKeyboardCommandKey size={14} />
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Search</span>
                </ModalTrigger>
              </div>

              <button 
                onClick={toggleMenu} 
                className="relative w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
                aria-label={isExpanded ? 'Close menu' : 'Open menu'}
              >
                <div className="flex flex-col gap-[5px] items-end w-5">
                   <span className={`h-[2px] bg-white rounded-full transition-all duration-300 ${isHamburgerOpen ? 'w-5 rotate-45 translate-y-[7px]' : 'w-5'}`} />
                   <span className={`h-[2px] bg-white rounded-full transition-all duration-300 ${isHamburgerOpen ? 'opacity-0' : 'w-3'}`} />
                   <span className={`h-[2px] bg-white rounded-full transition-all duration-300 ${isHamburgerOpen ? 'w-5 -rotate-45 -translate-y-[7px]' : 'w-5'}`} />
                </div>
              </button>
            </div>

            <div 
              className={`
                absolute inset-0 top-[70px] px-3 pb-3
                flex flex-col md:flex-row gap-3
                ${isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}
              `}
            >
              {(items || []).slice(0, 3).map((item, idx) => (
                <div
                  key={`${item.label}-${idx}`}
                  ref={setCardRef(idx)}
                  className="
                    relative flex-1 flex flex-col justify-between
                    p-5 rounded-2xl
                    bg-gradient-to-b from-white/[0.08] to-transparent
                    border border-white/5
                    hover:border-white/10 hover:bg-white/[0.12]
                    transition-all duration-300 group
                    min-h-[160px]
                  "
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                    <div>
                      <h3 className="text-xl font-medium text-white tracking-tight mb-4">
                        {item.label}
                      </h3>
                      <div className="flex flex-col gap-2">
                        {item.links?.map((lnk, i) => (
                          <a
                            key={`${lnk.label}-${i}`}
                            href={lnk.href}
                            className="
                              flex items-center gap-2 text-sm text-gray-400 
                              hover:text-white hover:translate-x-1 
                              transition-all duration-200
                            "
                          >
                             <span className="w-1 h-1 rounded-full bg-indigo-500/50" />
                             {lnk.label}
                             <GoArrowUpRight className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-xs" />
                          </a>
                        ))}
                      </div>
                    </div>
                </div>
              ))}
            </div>
          </nav>
        </div>

        <ModalBody>
            <SearchModal />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Navbar;