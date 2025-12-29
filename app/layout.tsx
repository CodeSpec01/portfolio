import TargetCursor from "@/components/TargetCursor";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Emblema_One, Nova_Round } from "next/font/google";
import { navbarItems } from "@/constants/constants";

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
        />
        {children}
      </body>
    </html>
  );
}
