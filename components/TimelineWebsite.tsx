import { TimelineUI } from "./TimelineUI";

export function TimelineWebsite() {
  const data = [
    {
      title: "Mar'24",
      content: (
        <div key={0}>
          <h2 className="text-neutral-800 text-3xl font-bold dark:text-neutral-200">
            Portfolio v1.0
          </h2>
          <h3 className="mb-4 text-neutral-800 text-lg dark:text-neutral-200">
            Deployed First Portfolio
          </h3>
          <div className="mb-8 text-md">
            <p>I started working on my first portfolio website. This project was a significant milestone, allowing me to apply my newly acquired skills in a practical setting and showcase my abilities in web development. I focused on creating a responsive and visually appealing interface, ensuring a seamless user experience across various devices. This project not only enhanced my technical skills but also taught me the importance of meticulous planning and iterative development as this was one of the first project I worked on. I tried to integrate several modern web development practices, such as component-based architecture and state management, to ensure the codebase was maintainable and scalable.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/journey/portfolio1/portfolio1-1.png"
              alt="Portfolio 1 Image 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover object-top shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
              />
            <img
              src="/journey/portfolio1/portfolio1-2.png"
              alt="Portfolio 1 Image 2"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover object-top shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
              />
            <img
              src="/journey/portfolio1/portfolio1-3.png"
              alt="Portfolio 1 Image 3"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
              />
            <img
              src="/journey/portfolio1/portfolio1-4.png"
              alt="Portfolio 1 Image 4"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Nov'25",
      content: (
        <div key={1}>
          <h2 className="text-neutral-800 text-3xl font-bold dark:text-neutral-200">
            Inspiration and Ideation Phase
          </h2>
          <h3 className="mb-4 text-neutral-800 text-lg dark:text-neutral-200">
            Searched the internet for sources of inspiration for the second adaptation of my portfolio.
          </h3>
          <div className="mb-8 text-md">
            <p>I spent countless hours exploring various design portfolios, Dribbble shots, and Behance projects. My goal was to gather a diverse range of aesthetics, interactive elements, and user experiences. I meticulously analyzed what made certain designs stand out, paying close attention to typography, color schemes, layout structures, and animation principles. This phase involved a lot of sketching, mood boarding, and conceptualizing how I could blend different inspirations into a cohesive and unique personal brand. I also looked into emerging web technologies and frameworks that could bring my vision to life, ensuring the new portfolio would not only look good but also be performant and maintainable.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/journey/ideation/ideation-1.png"
              alt="Portfolio 1 Image 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover object-top shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
              />
            <img
              src="/journey/ideation/ideation-2.png"
              alt="Portfolio 1 Image 2"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover object-top shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
              />
            <img
              src="/journey/ideation/ideation-3.png"
              alt="Portfolio 1 Image 3"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
              />
            <img
              src="/journey/ideation/ideation-4.png"
              alt="Portfolio 1 Image 4"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Dec'25",
      content: (
        <div key={2}>
          <h2 className="text-neutral-800 text-3xl font-bold dark:text-neutral-200">
            Build Phase
          </h2>
          <h3 className="mb-4 text-neutral-800 text-lg dark:text-neutral-200">
            Developed and Deployed Portfolio v2.0
          </h3>
          <div className="mb-8 text-md">
            <p>I embarked on the ambitious journey of developing and deploying Portfolio v2.0, a complete overhaul designed to push the boundaries of modern web development. This phase was characterized by intensive coding, meticulous debugging, and a relentless pursuit of performance optimization. I leveraged cutting-edge technologies like Next.js for server-side rendering, TypeScript for robust type safety, and Tailwind CSS for a utility-first styling approach, ensuring a highly scalable and maintainable codebase. The development process involved integrating complex animations with GSAP, crafting responsive layouts for a seamless multi-device experience, and implementing interactive components that elevate user engagement. Every line of code was written with a focus on creating a visually stunning and functionally superior portfolio that truly reflects my growth as a developer.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/journey/build/build-1.png"
              alt="Portfolio 1 Image 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover object-top shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
              />
            <img
              src="/journey/build/build-2.png"
              alt="Portfolio 1 Image 2"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover object-top shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
              />
            <img
              src="/journey/build/build-3.png"
              alt="Portfolio 1 Image 3"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
              />
            <img
              src="/journey/build/build-4.png"
              alt="Portfolio 1 Image 4"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <TimelineUI title="Behind the Code" description="Documenting the process. An inside look at the logic, the design choices, and the inevitable challenges encountered while architecting my own digital space." data={data} />
    </div>
  );
}
