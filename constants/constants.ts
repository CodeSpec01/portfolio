// Metadata for dynamic titles and descriptions
export const homeMetadata = {
    title: "Aviral Gaur | Developer, Freelancer & Engineer",
    description: "Aviral Gaur's portfolio showcasing web development projects, freelance work, and engineering expertise. Explore my skills, experience, and services.",
}

export const aboutMetadata = {
    title: "About | Aviral Gaur",
    description: "Learn more about Aviral Gaur, his background, skills, and journey as a developer, freelancer, and engineer.",
}

export const othersMetadata = {
    title: "Others | Aviral Gaur",
    description: "Discover additional projects, interests, and miscellaneous work by Aviral Gaur.",
}

export const projectsMetadata = {
    title: "Projects | Aviral Gaur",
    description: "Explore a collection of web development projects, freelance work, and engineering solutions by Aviral Gaur.",
}

export const notFoundMetadata = {
    title: "Not Found | Aviral Gaur",
    description: "The page you are looking for does not exist. Explore other sections of portfolio.",
}


export const navbarItems = [
    {
        label: "About",
        bgColor: "hsl(271,100%,20%)",
        textColor: "#FFE380",
        links: [
            { label: "Home", href: "/", ariaLabel: "Home" },
            { label: "About Me", href: "/about", ariaLabel: "About Me" },
            { label: "My Projects", href: "/projects", ariaLabel: "My Projects" }
        ]
    },
    {
        label: "Others",
        bgColor: "hsl(271,100%,30%)",
        textColor: "#FFE380",
        links: [
            { label: "Other Projects", href: "/otherprojects", ariaLabel: "Other Projects" },
            { label: "Journey to the Website", href: "/journey", ariaLabel: "Journey to the Website" }
        ]
    },
    {
        label: "Socials",
        bgColor: "hsl(271,100%,35%)",
        textColor: "#FFE380",
        links: [
            { label: "Email", href: "mailto:online.codespec@gmail.com", ariaLabel: "Email us" },
            { label: "Github", href: "https://github.com/codespec01", ariaLabel: "Github" },
            { label: "Leetcode", href: "https://leetcode.com/codespec", ariaLabel: "LeetCode" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/aviral-gaur-423b9b1b7/", ariaLabel: "LinkedIn" }
        ]
    }
];

export const heroImageTooltipContent = "I am a Web Developer and problem solver";