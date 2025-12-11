import { AuroraText } from "@/components/AuroraText";
import ProjectScroll from "@/components/ProjectScroll";
import { projectsMetadata } from "@/constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = projectsMetadata;

const page = () => {
  return (
    <div className="">
      <img
        src="/Projects/bg.png"
        className="fixed object-cover -z-50 w-full h-screen"
        alt="bg"
      />
      <div className=" w-full px-[2vw] py-[5vw]">
        <h1 className="text-[5vw] font-bold ml-10">
          Curated <span className="text-amber-300"><AuroraText colors = {["#581c87", "#7c3aed", "#a855f7", "#e9d5ff"]}> Work </AuroraText></span>{" "}
        </h1>
        <h2 className="text-[3vw] ml-16 font-bold font-serif">Projects</h2>
        <ProjectScroll />
      </div>
    </div>
  );
};

export default page;
