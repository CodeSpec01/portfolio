'use client';

import React, { useRef } from 'react'

const HeroSpotlight = () => {
    
    const revealImgRef = useRef<HTMLImageElement>(null);
    return (
        <div
            className='h-screen'
            style={{
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#08000f'
            }}
            onMouseMove={(e) => {
                const x = e.clientX;
                const y = e.clientY;
                const el = revealImgRef.current;
                if (el) {
                    el.style.setProperty('--mx', `${x}px`);
                    el.style.setProperty('--my', `${y}px`);
                }
            }}
            onMouseLeave={() => {
                const el = revealImgRef.current;
                if (el) {
                    el.style.setProperty('--mx', '1000%');
                    el.style.setProperty('--my', '1000%');
                }
            }}
        >

            <img
                ref={revealImgRef}
                src="/home/main-bg.png"
                alt="Reveal effect"
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 5,
                    mixBlendMode: 'lighten',
                    opacity: 0.3,
                    pointerEvents: 'none',
                    // @ts-ignore
                    '--mx': '1000%',
                    '--my': '1000%',
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