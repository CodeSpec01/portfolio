import TargetCursor from "@/components/TargetCursor";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { navbarItems } from "@/constants/constants";
import { Emblema_One, Nova_Round } from "next/font/google";

export const emblemaOne = Emblema_One({
  // subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export const novaRound = Nova_Round({
  // subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export default function RootLayout({  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor={true}
          parallaxOn={true}
        />
        <Navbar
          items={navbarItems}
          baseColor="rgba(132,0,255,0.1)"
          menuColor="#fff"
          buttonBgColor="rgba(132,0,255,0.4)"
          // buttonTextColor="#fff"
          ease="circ.out"
          className="backdrop-blur-md"
        />
        {children}
      </body>
    </html>
  );
}
