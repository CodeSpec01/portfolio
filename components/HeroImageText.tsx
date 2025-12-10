"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import RotatingText from "./Rotatingtext";
import ContactUsButton from "./ContactUsButton";
import { Tooltip } from "./TooltipCard";
import { circularTexts, heroImageTooltipContent, rotatingTexts } from "@/constants/constants";
import { emblemaOne } from "@/app/layout";
import CircularText from "./CircularText";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "./AnimatedModal";
import ContactModal from "./ContactModal";

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
    <Modal>
      <div className="relative w-full h-full flex justify-center pointer-events-none">
        <CircularText text={circularTexts} className="-top-[100px] -left-[100px] z-50 bg-yellow-300" />
        <div className="absolute pointer-events-none w-full h-full text-[12vw] tracking-[0.5vw] leading-[105%] flex flex-col justify-center items-center font-bold">
          <div className={"relative w-full flex flex-col items-center justify-center top-[10vh] "}>
            <div ref={textWhiteRef} className={emblemaOne.className}>
              <p
              >
                AVIRAL GAUR
              </p>
            </div>
            <div ref={outlineTextsRef} className={emblemaOne.className}>
              <p
                className="opacity-50 text-[#28004d]"
              >
                AVIRAL GAUR
              </p>
              <p
                className="opacity-30 text-[#1a0033]"
              >
                AVIRAL GAUR
              </p>
            </div>
            <div ref={rotatingTextRef} className={"text-[4vw] flex w-[90%] justify-between items-center relative -top-[10%] tracking-tight"}>
              <ModalTrigger>
                <ContactUsButton className="relative pointer-events-auto cursor-pointer cursor-target scale-75" />
              </ModalTrigger>
              <RotatingText
                texts={rotatingTexts}
                mainClassName="text-[2vw] mb-4 text-white/90 font-bold"
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
      <ModalBody>
        <ContactModal></ContactModal>
        {/* <ModalContent >
          Hello
        </ModalContent>
        <ModalFooter className="gap-4">
          <button className="cursor-target px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
            Cancel
          </button>
          <button className="cursor-target bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
            Book Now
          </button>
        </ModalFooter> */}
      </ModalBody>
    </Modal>
  );
};

export default HeroImageText;
