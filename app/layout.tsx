import TargetCursor from "@/components/TargetCursor";
import "./globals.css";
import Navbar from "@/components/Navbar";

const logo = "/globals/linkedin.svg";

const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", href: "#about", ariaLabel: "About Company" },
        { label: "Careers", href: "#careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "#featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", href: "#case-studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:contact@example.com", ariaLabel: "Email us" },
        { label: "Twitter", href: "#twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", href: "#linkedin", ariaLabel: "LinkedIn" }
      ]
    }
  ];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor={true}
          parallaxOn={true}
        />
        <Navbar
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#1a1a1a"
      menuColor="#fff"
      buttonBgColor="#333"
      buttonTextColor="#fff"
      ease="circ.out"
    />
        {children}
      </body>
    </html>
  );
}
