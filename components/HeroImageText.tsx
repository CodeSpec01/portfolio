"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import RotatingText from "./Rotatingtext";
import ContactUsButton from "./ContactUsButton";
import { Tooltip } from "./TooltipCard";
import { heroImageTooltipContent } from "@/constants/constants";

const HeroImageText = () => {
  const textWhiteRef = useRef<HTMLDivElement>(null);
  const rotatingTextRef = useRef<HTMLDivElement>(null);
  const outlineTextsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      imageRef.current,
      { y: 1000 },
      { y: 0, duration: 1.2, ease: "power2.out" },
      0
    );

    tl.fromTo(
      textWhiteRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
      0
    );


    const outlineElements = outlineTextsRef.current?.querySelectorAll("p");
    if (outlineElements) {
      tl.fromTo(
        outlineElements,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.15 },
        0.5
      );
      tl.fromTo(
        rotatingTextRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        1
      );
    }
  }, []);
  return (
    <div className="relative w-full h-full flex justify-center pointer-events-none">
      <div className="absolute pointer-events-none w-full h-full text-[14vw] leading-[90%] flex flex-col justify-center items-center font-bold">
        <div className="relative w-full flex flex-col items-center justify-center top-[10vh]">
          <div ref={textWhiteRef} className="">
            <p
              style={{
                textShadow: "0 0 5px #fed333, 0 0 10px #fed333, 0 0 20px #fff",
              }}
            >
              AVIRAL GAUR
            </p>
          </div>
          <div ref={outlineTextsRef} className="text-transparent">
            <p
              className="opacity-50"
              style={{ WebkitTextStroke: "3px rgba(132,0,255, 0.5)" }}
            >
              AVIRAL GAUR
            </p>
            <p
              className="opacity-30"
              style={{ WebkitTextStroke: "3px rgba(132,0,255, 0.3)" }}
            >
              AVIRAL GAUR
            </p>
          </div>
          <div ref={rotatingTextRef} className="text-[4vw] flex w-[80%] justify-between items-center relative -top-[10%]">
            <ContactUsButton className="relative pointer-events-auto z-50 cursor-pointer cursor-target" />
            <RotatingText
              texts={["Web Developer", "UI/UX Designer", "Tech Enthusiast", "cool"]}
              mainClassName="text-[3vw]  mr-2 mb-4 text-white/90 font-bold"
              staggerFrom={"last"}
              initial={{ y: "-20%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden text-[#ffe380] pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>
      </div>
      <Tooltip content={heroImageTooltipContent}>

        <img
          ref={imageRef}
          src="/home/aviral.png"
          alt="Aviral"
          className="relative top-[20%] pointer-events-auto h-[80%] mx-auto z-0"
        />
      </Tooltip>
    </div>
  );
};

export default HeroImageText;
