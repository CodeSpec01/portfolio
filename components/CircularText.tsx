import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue, MotionValue, Transition } from 'motion/react';

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers';
  className?: string;
}

const getRotationTransition = (duration: number, from: number, loop: boolean = true) => ({
  from,
  to: from + 360,
  ease: 'linear' as const,
  duration,
  type: 'tween' as const,
  repeat: loop ? Infinity : 0
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: 'spring' as const,
    damping: 20,
    stiffness: 300
  }
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = '',
  className = ''
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation: MotionValue<number> = useMotionValue(0);
  const [currentRotation, setCurrentRotation] = useState(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  }, [spinDuration, text, onHover, controls]);

  const handleHoverStart = () => {
    const start = rotation.get();

    if (!onHover) return;

    let transitionConfig: ReturnType<typeof getTransition> | Transition;
    let scaleVal = 1;

    switch (onHover) {
      case 'slowDown':
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case 'speedUp':
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case 'pause':
        transitionConfig = {
          rotate: { type: 'spring', damping: 20, stiffness: 300 },
          scale: { type: 'spring', damping: 20, stiffness: 300 }
        };
        break;
      case 'goBonkers':
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  };

  return (
    <motion.div
      className={`h-[10vw] w-[10vw] absolute rounded-full font-black text-white text-center cursor-pointer flex items-center justify-center ${className}`}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onUpdate={(latest) => {
        if (typeof latest.rotate === 'number') {
           setCurrentRotation(latest.rotate)
           rotation.set(latest.rotate)
        }
      }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        
        const radius = 200; 

        const transform = `rotateZ(${-rotationDeg}deg) translate3d(0, ${radius}px, 0)`;

        return (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)] "
            style={{ 
                transform, 
                WebkitTransform: transform 
            }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;