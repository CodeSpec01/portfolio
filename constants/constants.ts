import { AiOutlineApi } from "react-icons/ai";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BsGithub, BsUiRadiosGrid } from "react-icons/bs";
import { CgFramer } from "react-icons/cg";
import { FaCameraRetro, FaCloudflare, FaCode, FaDocker, FaFigma, FaGitAlt, FaGithub, FaMarkdown, FaMicrochip, FaNodeJs, FaPython, FaReact, FaUserCheck } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { GiCheckeredFlag, GiCrown, GiCube, GiKatana, GiSnitchQuidditchBall, GiSoccerBall, GiSteeringWheel } from "react-icons/gi";
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
        label: "Other Projects",
        href: "/other",
        ariaLabel: "Other Projects",
      },
      {
        label: "Journey to the Website",
        href: "/journey",
        ariaLabel: "Journey to the Website",
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
    title: "AWPS",
    description:
      "loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com",
    tags: ["next.js", "TypeScript", "MongoDB"],
    imageUrl: "/Projects/awps.png",
    color: "bg-indigo-900",
    website: "#",
    github: "#",
    // NEW FIELDS
    highlightColor: "#818cf8", // Indigo-400
    features: [
      "Real-time data synchronization with MongoDB.",
      "Secure user authentication and role-based access.",
      "Responsive dashboard design for mobile and desktop."
    ],
  },
  {
    title: "AWPS",
    description:
      "loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com",
    tags: ["next.js", "TypeScript", "MongoDB"],
    imageUrl: "/Projects/PioneersSheets.png",
    color: "bg-red-900",
    website: "#",
    github: "#",
    // NEW FIELDS
    highlightColor: "#f87171", // Red-400
    features: [
      "Automated spreadsheet parsing and data extraction.",
      "High-performance rendering for large datasets.",
      "Custom formula support with TypeScript logic."
    ],
  },
  {
    title: "AWPS",
    description:
      "loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com",
    tags: ["next.js", "TypeScript", "MongoDB"],
    imageUrl: "/Projects/spotify.png",
    color: "bg-green-900",
    website: "#",
    github: "#",
    // NEW FIELDS
    highlightColor: "#4ade80", // Green-400
    features: [
      "Seamless audio streaming integration.",
      "Smart playlist generation using algorithmic recommendations.",
      "Background playback support with persistent state."
    ],
  },
  {
    title: "AWPS",
    description:
      "loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com",
    tags: ["next.js", "TypeScript", "MongoDB"],
    imageUrl: "/Projects/spacecon.jpg",
    color: "bg-yellow-900",
    website: "#",
    github: "#",
    // NEW FIELDS
    highlightColor: "#facc15", // Yellow-400
    features: [
      "Immersive 3D space visualization using Three.js.",
      "Interactive timeline of space exploration history.",
      "Educational quizzes with instant feedback loops."
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
    Icon: GiCube,
    text: "CREATIVE MODE",
    style: { top: '60%', left: '10%' },
    color: "text-emerald-500"
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

export const resumeLink = "/home/aviral.png"

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