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
        href: "/otherprojects",
        ariaLabel: "Other Projects",
      },
      {
        label: "Journey to the Website",
        href: "/journey",
        ariaLabel: "Journey to the Website",
      },
    ],
  },
  {
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
  },
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
  "OPEN TO WORK · OPEN TO WORK · OPEN TO WORK · OPEN TO WORK · OPEN TO WORK · OPEN TO WORK ·";
export const radius = "175px";

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