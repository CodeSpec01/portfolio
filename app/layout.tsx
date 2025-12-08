import TargetCursor from "@/components/TargetCursor";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from 'next/font/local'
import { navbarItems } from "@/constants/constants";

const customFont = localFont({
  src: './custom-font.ttf',
})

export default function RootLayout({  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={customFont.className}>
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
