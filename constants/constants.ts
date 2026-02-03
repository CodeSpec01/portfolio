import { AiOutlineApi } from "react-icons/ai";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BsGithub, BsUiRadiosGrid } from "react-icons/bs";
import { CgFramer } from "react-icons/cg";
import { FaCameraRetro, FaCloudflare, FaCode, FaDocker, FaFigma, FaGitAlt, FaGithub, FaMarkdown, FaMicrochip, FaNodeJs, FaPython, FaReact, FaUserCheck } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { GiCheckeredFlag, GiCrown, GiCube, GiKatana, GiSnitchQuidditchBall, GiSoccerBall, GiSteeringWheel, GiThorHammer } from "react-icons/gi";
import { GrMysql } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io5";
import { PiLetterCircleVFill } from "react-icons/pi";
import { RiFirebaseFill, RiNextjsFill } from "react-icons/ri";
import { SiAdobephotoshop, SiAmazondynamodb, SiArduino, SiCanva, SiCsswizardry, SiEspressif, SiExpress, SiFirebase, SiGmail, SiJavascript, SiJsonwebtokens, SiLeetcode, SiLtspice, SiMongodb, SiNetlify, SiNextui, SiPostman, SiShadcnui, SiThreedotjs, SiTypescript, SiVercel, SiVite } from "react-icons/si";
import { TbBrandCpp, TbCircleLetterMFilled } from "react-icons/tb";

// Search Items List is in SearchModal.tsx and cannot be exported from here due to React component issues.
export const LeetCodeLink = "https://leetcode.com/codespec";
export const GithubLink = "https://github.com/codespec01";
export const LinkedInLink = "https://www.linkedin.com/in/aviral-gaur-423b9b1b7/";
export const GmailLink = "mailto:online.codespec@gmail.com";
export const GithubPortfolioLink = "https://github.com/codespec01/portfolio"


// Metadata for dynamic titles and descriptions
export const homeMetadata = {
  title: "Aviral Gaur | Developer, Freelancer & Engineer",
  description:
    "Aviral Gaur's portfolio showcasing web development projects, freelance work, and engineering expertise. Explore my skills, experience, and services.",
};

export const aboutMetadata = {
  title: "About | Aviral Gaur",
  description:
    "Learn more about Aviral Gaur, his background, skills, and journey as a developer, freelancer, and engineer.",
};

export const othersMetadata = {
  title: "Others | Aviral Gaur",
  description:
    "Discover additional projects, interests, and miscellaneous work by Aviral Gaur.",
};

export const journeyMetadata = {
  title: "Journey to this Website | Aviral Gaur",
  description:
    "Discover additional projects, interests, and miscellaneous work by Aviral Gaur.",
};

export const projectsMetadata = {
  title: "Projects | Aviral Gaur",
  description:
    "Explore a collection of web development projects, freelance work, and engineering solutions by Aviral Gaur.",
};

export const notFoundMetadata = {
  title: "Not Found | Aviral Gaur",
  description:
    "The page you are looking for does not exist. Explore other sections of portfolio.",
};

export const FooterSocials = [
  {
    label: "Email",
    href: GmailLink,
    Icon: SiGmail,
  },
  {
    label: "Github",
    href: GithubLink,
    Icon: BsGithub,
  },
  {
    label: "Leetcode",
    href: LeetCodeLink,
    Icon: SiLeetcode,
  },
  {
    label: "LinkedIn",
    href: LinkedInLink,
    Icon: IoLogoLinkedin,
  },
]

export const navbarItems = [
  {
    label: "About",
    bgColor: "hsl(271,100%,20%)",
    textColor: "#FFE380",
    links: [
      { label: "Home", href: "/", ariaLabel: "Home" },
      { label: "About Me", href: "/about", ariaLabel: "About Me" },
      { label: "My Projects", href: "/projects", ariaLabel: "My Projects" },
    ],
  },
  {
    label: "Others",
    bgColor: "hsl(271,100%,30%)",
    textColor: "#FFE380",
    links: [
      {
        label: "Journey to the Website",
        href: "/journey",
        ariaLabel: "Journey to the Website",
      },
      {
        label: "More ",
        href: "/others",
        ariaLabel: "Other Projects",
      },

    ],
  }, {
    label: "Socials",
    bgColor: "hsl(271,100%,35%)",
    textColor: "#FFE380",
    links: [
      {
        label: "Email",
        href: "mailto:online.codespec@gmail.com",
        ariaLabel: "Email us",
      },
      {
        label: "Github",
        href: "https://github.com/codespec01",
        ariaLabel: "Github",
      },
      {
        label: "Leetcode",
        href: "https://leetcode.com/codespec",
        ariaLabel: "LeetCode",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aviral-gaur-423b9b1b7/",
        ariaLabel: "LinkedIn",
      },
    ],
  }
];

export const heroImageTooltipContent =
  "I am a Web Developer and problem solver";

export const rotatingTexts = [
  "Web Developer",
  "UI/UX Designer",
  "Tech Enthusiast",
  "Freelancer",
  "Problem Solver",
  "Engineering Mindset",
];

// sun at corner in hero page
export const circularTexts =
  "OPEN TO WORK · OPEN TO WORK · OPEN TO WORK · OPEN TO WORK · OPEN TO WORK ·";
export const bentoElement = [
  {
    color: "#060010",
    title: "Analytics",
    description: "Track user behavior",
    label: "Insights",
  },
  {
    color: "#060010",
    title: "Dashboard",
    description: "Centralized data view",
    label: "Overview",
  },
  {
    color: "#060010",
    title: "Collaboration",
    description: "Work together seamlessly",
    label: "Teamwork",
  },
  {
    color: "#060010",
    title: "Automation",
    description: "Streamline workflows",
    label: "Efficiency",
  },
  {
    color: "#060010",
    title: "Integration",
    description: "Connect favorite tools",
    label: "Connectivity",
  },
  {
    color: "#060010",
    title: "Security",
    description: "Enterprise-grade protection",
    label: "Protection",
  },
];

export const projectData = [
  {
    title: "SpaceCon'25",
    description:
      "Developed and deployed the official SpaceCon website, serving as the central hub for event showcases, registrations, schedules, and contact information. This real-world product handles live traffic, ensuring smooth user experience, reliability, and accessibility. Key focus areas included performance optimization, traffic management, custom animations, and seamless UI/UX.",
    tags: ["ReactJs", "React Router DOM", "TypeScript", "MagicUI", "Framer Motion", "TailwindCSS"],
    imageUrl: "/projects/spacecon.png",
    color: "bg-indigo-900",
    website: "https://spacecon.tech/",
    github: "https://github.com/CodeSpec01/space-con/",
    // NEW FIELDS
    highlightColor: "#818cf8", // Indigo-400
    features: [
      "Clean, modern and minimal User Interface and User Experience",
      "Engineered the digital hub for the entire event, integrating event showcases into a unified interface.",
      "Implemented aggressive performance optimizations and traffic management."
    ],
  },
  {
    title: "Culinary Corner",
    description:
      "Culinary Corner is a full-stack web platform designed for effortless dining experiences. It features a custom authentication system, Cloudinary-based profile uploads, online table reservations, and a food ordering system. Security is enhanced with two-factor authentication, JWT, and bcrypt. Built with TypeScript and MongoDB, it ensures a smooth user experience with ShadCN-powered light/dark themes. This project strengthened my skills in advanced concepts like MongoDB aggregation pipelines and full-stack development.",
    tags: ["NextJs", "TypeScript", "MongoDB", "Cloudinary", "JWT", "Bcrypt", "ShadCN"],
    imageUrl: "/projects/culinary-corner.png",
    color: "bg-red-900",
    website: "https://culinarycorner.vercel.app/",
    github: "https://github.com/CodeSpec01/culinarycorner/",
    // NEW FIELDS
    highlightColor: "#f87171", // Red-400
    features: [
      "Engineered a comprehensive full-stack platform that seamlessly integrates online table reservations and food ordering workflows into a single cohesive system.",
      "Built a robust custom authentication layer featuring Two-Factor Authentication (2FA), JWT session management, and bcrypt hashing to ensure data integrity and user protection.",
      "Leveraged advanced MongoDB aggregation pipelines to handle intricate data queries, optimizing the performance of the ordering and reservation subsystems."
    ],
  },
  {
    title: "Streak Flow",
    description:
      "A daily habit tracking and visualization platform built with Next.js. While automated tools provided the initial scaffolding, the project's core value came from the rigorous engineering required to stabilize it. I took a generated prototype and refactored the entire data layer to fix critical inefficiencies—proving that while tools can build code, only a human architect can build a system that scales.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Nodemailer", "JWT", "Bcrypt", "TailwindCSS"],
    imageUrl: "/projects/streak-flow.png",
    color: "bg-green-900",
    website: "https://streakflow-beta.vercel.app/",
    github: "https://github.com/CodeSpec01/streakflow/",
    // NEW FIELDS
    highlightColor: "#4ade80", // Green-400
    features: [
      "Leveraged accelerated development tools to generate an initial full-stack prototype, significantly reducing the boilerplate phase to focus on core logic implementation.",
      "Identified and resolved fundamental scalability flaws in the initial generated codebase, transforming a fragile \"house of cards\" data structure into a robust, normalized schema.",
      "Conducted deep-dive debugging sessions to eliminate inefficient data handling patterns, optimizing database queries to ensure the system serves the heatmap visualization without latency."
    ],
  },
  {
    title: "Portfolio",
    description:
      "The second iteration of my digital home, re-engineered from the ground up to reflect the 'codespec' identity. Moving beyond a static résumé, v2.0 introduces a dual-timeline architecture that separates professional rigor from the personal builder's journey, serving as a live demonstration of my full-stack frontend capabilities.",
    tags: ["Next.js", "TypeScript", "GSAP", "Framer Motion", "Nodemailer", "JWT", "TailwindCSS"],
    imageUrl: "/projects/portfolio.png",
    color: "bg-yellow-900",
    website: "https://aviralgaur.vercel.app/",
    github: "https://github.com/CodeSpec01/portfolio/",
    // NEW FIELDS
    highlightColor: "#facc15", // Yellow-400
    features: [
      "Engineered a bespoke content strategy featuring parallel data streams—\"The Build Log\" for professional credibility and \"Behind the Code\" for personal storytelling—to cater to distinct audience segments (recruiters vs. developers).",
      "Rebuilt the frontend using a modular Next.js architecture, prioritizing reusable components and type safety to ensure the site scales as new projects and timeline events are added.",
      "Optimized the user experience for speed and accessibility, serving as a live production environment that demonstrates proficiency in modern React patterns and responsive design principles."
    ],
  },
];

export const leetcodeUsername = "CodeSpec"

export const SORTING_SCENARIOS = [
  {
    lines: ["Quick mind, steady hands.", "You learn fast and think deeper than most.", "Questions matter more to you than applause."],
    resultText: "Best place to grow? Ravenclaw.",
    houseKey: "RAVENCLAW"
  },
  {
    lines: ["Ambition burns, but it’s controlled.", "You plan before you strike.", "Greatness calls — if you stay sharp."],
    resultText: "Hmm… Slytherin.",
    houseKey: "SLYTHERIN"
  },
  {
    lines: ["Brave heart, even when unsure.", "You step forward when others hesitate.", "Fear doesn’t stop you — it follows you."],
    resultText: "Gryffindor!",
    houseKey: "GRYFFINDOR"
  },
  {
    lines: ["Loyal to your people.", "You endure without complaint.", "Quiet strength, steady soul."],
    resultText: "Hufflepuff!",
    houseKey: "HUFFLEPUFF"
  },
  {
    lines: ["Mind full of patterns and logic.", "You crave understanding, not shortcuts.", "Knowledge excites you more than victory."],
    resultText: "Ravenclaw!",
    houseKey: "RAVENCLAW"
  },
  {
    lines: ["Sharp instincts, sharper intent.", "You know what you want.", "You’d rather rule than follow."],
    resultText: "Careful now… Slytherin.",
    houseKey: "SLYTHERIN"
  },
  {
    lines: ["Bold choices, loud courage.", "You leap before the doubt settles.", "Risk doesn’t scare you — boredom does."],
    resultText: "Gryffindor!",
    houseKey: "GRYFFINDOR"
  },
  {
    lines: ["Kind heart, patient mind.", "You build people, not trophies.", "Trust comes easily to you."],
    resultText: "Hufflepuff!",
    houseKey: "HUFFLEPUFF"
  },
  {
    lines: ["You think while others rush.", "Ideas stack neatly in your head.", "Wisdom before words — always."],
    resultText: "Ravenclaw!",
    houseKey: "RAVENCLAW"
  },
  {
    lines: ["Fire in your chest.", "Refusal to back down.", "You’d fight for what’s right — alone if needed."],
    resultText: "Gryffindor!",
    houseKey: "GRYFFINDOR"
  }
];

export type HouseTheme = {
  name: string;
  hex: string;
  primary: string;
  secondary: string;
  particleColor: string;
  bgGradient: string;
  stroke: string;
};

export const THEMES: Record<string, HouseTheme> = {
  DEFAULT: {
    name: "DEFAULT",
    hex: "#ffffff",
    primary: "from-white/90 to-white/10",
    secondary: "text-[#EAB308] border-white/10 bg-white/5",
    particleColor: "255, 255, 255",
    bgGradient: "from-purple-900/20 to-transparent",
    stroke: "rgba(255, 255, 255, 0.15)",
  },
  GRYFFINDOR: {
    name: "GRYFFINDOR",
    hex: "#eeba30",
    primary: "from-[#740001] via-[#d3a625] to-[#eeba30]",
    secondary: "text-[#eeba30] border-[#eeba30]/40 bg-[#740001]/40",
    particleColor: "116, 0, 1",
    bgGradient: "from-[#740001]/50 via-[#380b10]/30 to-transparent",
    stroke: "rgba(238, 186, 48, 0.9)",
  },
  SLYTHERIN: {
    name: "SLYTHERIN",
    hex: "#2a6636",
    primary: "from-[#1A472A] via-[#2a6636] to-[#aaaaaa]",
    secondary: "text-[#aaaaaa] border-[#aaaaaa]/40 bg-[#1A472A]/40",
    particleColor: "26, 71, 42",
    bgGradient: "from-[#1A472A]/50 via-[#041f0b]/30 to-transparent",
    stroke: "rgba(170, 170, 170, 0.9)",
  },
  RAVENCLAW: {
    name: "RAVENCLAW",
    hex: "#4fa3d1",
    primary: "from-[#0E1A40] via-[#222f5b] to-[#946b2d]",
    secondary: "text-[#946b2d] border-[#946b2d]/40 bg-[#0E1A40]/40",
    particleColor: "14, 26, 64",
    bgGradient: "from-[#0E1A40]/50 via-[#070f2e]/30 to-transparent",
    stroke: "rgba(148, 107, 45, 0.9)",
  },
  HUFFLEPUFF: {
    name: "HUFFLEPUFF",
    hex: "#ecb939",
    primary: "from-[#ecb939] via-[#f0c75e] to-[#372e29]",
    secondary: "text-[#372e29] border-[#372e29]/30 bg-[#ecb939]/40",
    particleColor: "236, 185, 57",
    bgGradient: "from-[#ecb939]/40 via-[#b38b27]/20 to-transparent",
    stroke: "rgba(55, 46, 41, 0.9)",
  },
};

export const ARTIFACTS_DATA = [
  // --- LEFT SIDE ---
  {
    id: "coding",
    Icon: FaCode,
    text: "<HELLO WORLD />",
    style: { top: '15%', left: '8%' },
    color: "text-cyan-400"
  },
  {
    id: "football",
    Icon: GiSoccerBall,
    text: "VISCA EL BARÇA",
    style: { top: '30%', left: '12%' },
    color: "text-blue-500"
  },
  {
    id: "cars",
    Icon: GiSteeringWheel,
    text: "PURE SPEED",
    style: { top: '45%', left: '6%' },
    color: "text-red-500"
  },
  {
    id: "cube",
    Icon: GiThorHammer,
    text: "STILL WORTHY",
    style: { top: '60%', left: '10%' },
    color: "text-gray-300"
  },
  {
    id: "crown",
    Icon: GiCrown,
    text: "TECHNOBLADE NEVER DIES",
    style: { top: '75%', left: '7%' },
    color: "text-yellow-400"
  },

  // --- RIGHT SIDE ---
  {
    id: "photo",
    Icon: FaCameraRetro,
    text: "CAPTURE MOMENTS",
    style: { top: '18%', right: '8%' },
    color: "text-pink-400"
  },
  {
    id: "hp",
    Icon: GiSnitchQuidditchBall,
    text: "I OPEN AT THE CLOSE",
    style: { top: '33%', right: '12%' },
    color: "text-amber-300"
  },
  {
    id: "gadgets",
    Icon: FaMicrochip,
    text: "NEXT GEN TECH",
    style: { top: '48%', right: '6%' },
    color: "text-teal-400"
  },
  {
    id: "katana",
    Icon: GiKatana,
    text: "HESITATION IS DEFEAT",
    style: { top: '63%', right: '10%' },
    color: "text-red-600"
  },
  {
    id: "flag",
    Icon: GiCheckeredFlag,
    text: "BOX BOX BOX",
    style: { top: '78%', right: '8%' },
    color: "text-purple-400"
  },
];

export const resumeLink = "/about/resume.pdf"

export const BACKENDSKILLS = [
  {
    Icon: FaNodeJs,
    label: "NodeJs",
  },
  {
    Icon: SiExpress,
    label: "ExpressJs",
  },
  {
    Icon: SiJsonwebtokens,
    label: "JWT",
  },
  {
    Icon: FaUserCheck,
    label: "Authentication",
  },
  {
    Icon: SiGmail,
    label: "Nodemailer",
  },
  {
    Icon: AiOutlineApi,
    label: "REST APIs",
  },
  {
    Icon: SiPostman,
    label: "Postman",
  },
  {
    Icon: FaGitAlt,
    label: "Git",
  },
]

export const FRONTENDSKILLS = [
  {
    Icon: RiNextjsFill,
    label: "NextJs",
  },
  {
    Icon: FaReact,
    label: "ReactJs",
  },
  {
    Icon: SiVite,
    label: "Vite",
  },
  {
    Icon: BiLogoTailwindCss,
    label: "TailwindCSS",
  },
  {
    Icon: BsUiRadiosGrid,
    label: "GSAP",
  },
  {
    Icon: CgFramer,
    label: "Framer Motion",
  },
  {
    Icon: SiThreedotjs,
    label: "ThreeJs",
  },
  {
    Icon: SiCsswizardry,
    label: "CSS",
  },
  {
    Icon: SiNextui,
    label: "NextUI",
  },
  {
    Icon: SiShadcnui,
    label: "ShadCN UI",
  },
]

export const OTHERSKILLS = [
  {
    Icon: SiAdobephotoshop,
    label: "PhotoShop",
  },
  {
    Icon: FaFigma,
    label: "Figma",
  },
  {
    Icon: SiCanva,
    label: "Canva",
  },
  {
    Icon: SiArduino,
    label: "Arduino",
  },
  {
    Icon: SiEspressif,
    label: "ESP",
  },
  {
    Icon: SiLtspice,
    label: "LTSpice",
  },
]

export const DATABASES = [
  {
    Icon: SiMongodb,
    label: "MongoDB",
  },
  {
    Icon: SiAmazondynamodb,
    label: "DynamoDB",
  },
  {
    Icon: RiFirebaseFill,
    label: "FireStore",
  },
  {
    Icon: GrMysql,
    label: "SQL",
  },
]

export const LANGUAGES = [
  {
    Icon: SiTypescript,
    label: "Typescript",
  },
  {
    Icon: SiJavascript,
    label: "Javascript",
  },
  {
    Icon: TbBrandCpp,
    label: "C++",
  },
  {
    Icon: FaPython,
    label: "Python",
  },
  {
    Icon: FaGolang,
    label: "Go",
  },
  {
    Icon: FaMarkdown,
    label: "Markdown",
  },
  {
    Icon: PiLetterCircleVFill,
    label: "Verilog",
  },
  {
    Icon: TbCircleLetterMFilled,
    label: "Matlab",
  },
]

export const SERVICES = [
  {
    Icon: SiTypescript,
    label: "AWS",
  },
  {
    Icon: SiFirebase,
    label: "Firebase",
  },
  {
    Icon: FaCloudflare,
    label: "Cloudflare",
  },
  {
    Icon: SiVercel,
    label: "Vercel",
  },
  {
    Icon: FaGithub,
    label: "Github",
  },
  {
    Icon: FaDocker,
    label: "Docker",
  },
  {
    Icon: SiNetlify,
    label: "Netlify",
  },
]

export const OtherProjectData = [
  {
    title: "Verilog Implementation of FIR Filter",
    description: "An end-to-end signal processing demo. Python handles the math (signal generation, quantization, analysis), while Verilog handles the heavy lifting (16-tap FIR filtering).",
    imageUrl: "/others/fir.png",
    tags: ["Verilog", "Python", "Signal Processing", "Digital Filters"],
    features: ["16-bit signed fixed-point coefficients (1 sign + 15 fractional bits)", "Inputs normalized to (-1,1) and stored similarly", "Final output as a 36-bit signed number (1 sign, 5 integer, 30 fractional bits)"],
    github: "https://github.com/CodeSpec01/fir-filter-verilog"
  },
  {
    title: "Texas Instruments BYTE Mentee",
    description: "The BYTE program at Texas Instruments offers a structured 6-week workshop focusing on Linear Networks, including hands-on projects and engaging sessions with technical leaders.",
    imageUrl: "/others/byte.png",
    tags: ["Texas Instruments", "Analog Electronics", "Simulation", "Linear Networks"],
    features: ["Developed a deep, intuitive understanding of analog system dynamics, moving beyond rote formulas to visualize how poles, zeros, and buffers dictate real-world circuit behavior.", "Utilized the QUCS simulator to model and analyze complex circuits, observing real-time responses to gain a practical grasp of transient and frequency domain characteristics.", "Mastered foundational concepts ranging from R-C networks and Fourier transforms to Diodes and Op-Amps, bridging the gap between mathematical theory and physical implementation."],
  },
  {
    title: "Info Matrix",
    description: "InfoMatrix is a Wi-Fi-enabled LED matrix display built using the ESP8266. It allows you to display custom messages, colors, and temperatures through a web interface hosted directly on the microcontroller.",
    imageUrl: "/others/infomatrix.png",
    tags: ["ESP8266", "Arduino", "IoT", "Embedded Systems", "Microcontroller"],
    features: ["Control text, scroll speed, color, and modes (scroll, static, loop) from a neat web interface", "Fetch and show the current temperature on demand from OpenWeatherMap", "Save your API key and city using SPIFFS, so you don’t need to re-enter every time", "Connect effortlessly with WiFiManager and access via infomatrix.local thanks to mDNS"],
    github: "https://github.com/CodeSpec01/infomatrix"
  }
];

export const OtherGallery = [
  "/others/gallery-1.png",
  "/others/gallery-2.png",
  "/others/gallery-3.png",
  "/others/gallery-4.png",
  "/others/gallery-5.png",
];

export const GamesData = [{
  id: "spiderman",
  title: "SPIDERMAN : REMASTERED",
  image: "/games/spiderman.png",
},
{
  id: "got",
  title: "GHOST OF TSUSHIMA",
  image: "/games/got.png",
},
{
  id: "sekiro",
  title: " SEKIRO: SHADOWS DIE Twice",
  image: "/games/sekiro.png",
},
{
  id: "rdr2",
  title: "RED DEAD REDEMPTION 2",
  image: "/games/rdr.png",
},
{
  id: "hogwarts",
  title: "HOGWARTS LEGACY",
  image: "/games/hogwartslegacy.png",
},


];