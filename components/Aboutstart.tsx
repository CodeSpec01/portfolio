import { emblemaOne } from "@/app/layout";
import { TooltipAbout } from "./TooltipCardForAbout";
import CardSwap, { Card } from "./CardSwapper";
import { FooterSocials } from "@/constants/constants";
import { AuroraText } from "./AuroraText";

function Aboutstart() {
  return (
    <div className="w-screen flex p-[5%]">
      <div className="w-full lg:w-1/2 text-[2vw]">
        <h1 className="text-[3vw] md:text-[1vw] text-gray-400 font-bold mt-[10%] border-l-2 border-white/10 px-5">More About me</h1>
        <h1 className={`bg-linear-to-b from-white via-slate-200 to-slate-600 bg-clip-text text-transparent leading-10 text-[8vw] md:text-[3vw]  ${emblemaOne.className} border-l-2 border-white/10 px-5`}>
          I am Aviral
        </h1>
        <p className="leading-10 text-[4vw] md:text-[2vw] border-l-2 border-white/10 px-5">
          A creative{" "}
          <AuroraText colors={["#004D98", "#A50044", "#ffffff"]}>
            Engineer</AuroraText>
        </p>
        <div className="text-xl w-[95%] py-[5%]">
          Aviral Gaur is a driven ECE student passionate about {" "}
          <TooltipAbout content="Working with logic circuits, systems, and hardware design fundamentals.">
            <span className="text-amber-500 font-bold">
              {" "}
              Digital Electronics{" "}
            </span>
          </TooltipAbout>
          ,
          <TooltipAbout content="Building integrated hardware–software solutions using microcontrollers and real-time systems.">
            <span className="text-amber-500 font-bold"> Embedded Systems {" "}</span>
          </TooltipAbout>
          ,{" "}
          <TooltipAbout content="Using structured thinking to analyze problems and design efficient solutions.">
            <span className="text-amber-500 font-bold">{" "}Problem-Solving </span>
          </TooltipAbout>
          . Balancing { }
          <TooltipAbout content="Mastering core ECE concepts through advanced technical preparation for competitive exams.">
            <span className="text-amber-500 font-bold"> GATE Preparation </span>
          </TooltipAbout>
          , college, and fitness, he continuously builds strong technical skills
          through projects, coding, and disciplined learning. Focused,
          ambitious, and growth-oriented, he aims to excel in { }
          <TooltipAbout content="Applying engineering principles to develop reliable and efficient systems.">
            <span className="text-amber-500 font-bold"> Engineering </span>
          </TooltipAbout>
          { } and high-impact { }
          <TooltipAbout content="Roles focused on innovation, development, and solving real-world problems with technology.">
            <span className="text-amber-500 font-bold"> Technology Roles </span>
          </TooltipAbout>
          .
        </div>
        <div className="flex gap-4 ">
          {FooterSocials.map((social, i) => {
            const IconComponent = social.Icon;
            return (
              <a key={i} href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5 hover:bg-white hover:text-[#8400FF] hover:border-transparent transition-all duration-300">
                <IconComponent size={18} />
              </a>
            )
          })}

        </div>
      </div>
      <div className="w-1/2 overflow-y-hidden hidden lg:block ">
        <div style={{ height: "600px", position: "relative" }}>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <img src="/projects/spacecon.png" alt="" className="h-full w-full object-cover rounded-lg" />
            </Card>
            <Card>
              <img src="/projects/culinary-corner.png" alt="" className="h-full w-full object-cover rounded-lg" />
            </Card>
            <Card>
              <img src="/projects/streak-flow.png" alt="" className="h-full w-full object-cover rounded-lg" />
            </Card>
            <Card>
              <img src="/projects/portfolio.png" alt="" className="h-full w-full object-cover rounde rounded-lg" />
            </Card>

          </CardSwap>
        </div>
      </div>
    </div>
  );
}

export default Aboutstart;
