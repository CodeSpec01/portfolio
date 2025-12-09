'use client';

import React, { useRef, useEffect } from 'react'

const HeroSpotlight = () => {
    
    const revealImgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;
            const el = revealImgRef.current;
            if (el) {
                el.style.setProperty('--mx', `${x}px`);
                el.style.setProperty('--my', `${y}px`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            className='h-screen w-full absolute top-0 left-0'
            style={{
                position: 'absolute',
                overflow: 'hidden',
                backgroundColor: '#08000f',
                zIndex: -50 // Ensures this stays behind your content
            }}
        >
            {/* LAYER 1: Ambient Background (Always visible, dim) */}
            <img
                src="/home/main-bg.png"
                alt="Background Ambient"
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    mixBlendMode: 'lighten',
                    opacity: 0.07, // <--- Adjust this value to make the idle background brighter/darker
                    pointerEvents: 'none',
                }}
            />

            {/* LAYER 2: The Spotlight (Only visible near cursor) */}
            <img
                ref={revealImgRef}
                src="/home/main-bg.png"
                alt="Reveal effect"
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    mixBlendMode: 'lighten',
                    opacity: 0.3, // <--- Spotlight area is fully bright
                    pointerEvents: 'none',
                    // @ts-ignore
                    '--mx': '50%',
                    '--my': '50%',
                    // We keep your mask exactly as is:
                    WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0%, rgba(255,255,255,1) 1%, rgba(255,255,255,1) 3%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 10%)',
                    maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 50%)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat'
                }}
            />
        </div>
    )
}

export default HeroSpotlight