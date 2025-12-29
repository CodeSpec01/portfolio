import "./globals.css";
import Navbar from "@/components/Navbar";
import { navbarItems } from "@/constants/constants";
import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Providers>
          <Navbar
            items={navbarItems}
            className="backdrop-blur-md"
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}
