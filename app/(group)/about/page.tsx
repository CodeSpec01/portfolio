import AboutEnd from "@/components/AboutEnd";
import Aboutstart from "@/components/Aboutstart";
import MagicBento from "@/components/BentoGrid";
import { Timeline } from "@/components/Timeline";
import { aboutMetadata } from "@/constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = aboutMetadata;

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <img
        src="/About/bg.jpg"
        className="fixed object-cover -z-50 w-full h-screen"
        alt="Backgorund"
        />
      <Aboutstart />
      <div className="w-full flex flex-col gap-5 items-center justify-center">
        <h1 className={`text-4xl font-bold`}>SKILLS</h1>
        <div>
          <MagicBento
            glowColor="132, 0, 255"
          />
        </div>
      </div>
      <div>
        <Timeline />
      </div>
      <AboutEnd/>
    </div>
  );
};

export default page;
