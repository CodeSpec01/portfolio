import { emblemaOne } from "@/app/layout";
import { TooltipAbout } from "./TooltipCardForAbout";
import CardSwap, { Card } from "./CardSwapper";

function Aboutstart() {
  return (
    <div className="w-screen flex  p-[5%]">
      <div className="w-1/2 text-[2vw]">
        <h1 className="text-[1vw] text-gray-400 font-bold pt-[10%]">More About me</h1>
        <p className={`leading-10 text-[3vw]  ${emblemaOne.className}`}>
          I am Aviral
        </p>
        <p className="leading-10 text-[2vw]">
          A creative{" "}
          <span className="text-[#8400FF] font-extrabold">Engineer</span>
        </p>
        <p className="text-xl w-[95%] py-[5%]">
          Manav Jaiswal is a driven ECE student passionate about
          <TooltipAbout content="Working with logic circuits, systems, and hardware design fundamentals.">
            <span className="text-amber-500 font-bold">
              {" "}
              Digital Electronics{" "}
            </span>
          </TooltipAbout>
          ,
          <TooltipAbout content="Building integrated hardware–software solutions using microcontrollers and real-time systems.">
            <span className="text-amber-500 font-bold"> Embedded Systems </span>
          </TooltipAbout>
          ,
          <TooltipAbout content="Using structured thinking to analyze problems and design efficient solutions.">
            <span className="text-amber-500 font-bold"> Problem-Solving </span>
          </TooltipAbout>
          . Balancing {}
          <TooltipAbout content="Mastering core ECE concepts through advanced technical preparation for competitive exams.">
            <span className="text-amber-500 font-bold"> GATE Preparation </span>
          </TooltipAbout>
          , college, and fitness, he continuously builds strong technical skills
          through projects, coding, and disciplined learning. Focused,
          ambitious, and growth-oriented, he aims to excel in {}
          <TooltipAbout content="Applying engineering principles to develop reliable and efficient systems.">
            <span className="text-amber-500 font-bold"> Engineering </span>
          </TooltipAbout>
          {} and high-impact {}
          <TooltipAbout content="Roles focused on innovation, development, and solving real-world problems with technology.">
            <span className="text-amber-500 font-bold"> Technology Roles </span>
          </TooltipAbout>
          .
        </p>
      </div>
      <div className="w-1/2 overflow-y-hidden  ">
        <div style={{ height: "600px", position: "relative" }}>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000} 
            pauseOnHover={false}
          >
            <Card>
              <img src="/about/awps.png" alt="" className="h-full w-full object-cover rounded-lg" />
            </Card>
            <Card>
              <img src="/about/PioneersSheets.png" alt="" className="h-full w-full object-cover rounded-lg" />
            </Card>
            <Card>
              <img src="/about/spacecon.jpg" alt="" className="h-full w-full object-cover rounded-lg" />
            </Card>
            <Card>
              <img src="/about/spotify.png" alt="" className="h-full w-full object-cover rounde rounded-lg" />
            </Card>
            
          </CardSwap>
        </div>
      </div>
    </div>
  );
}

export default Aboutstart;
