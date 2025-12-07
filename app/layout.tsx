import TargetCursor from "@/components/TargetCursor";
import "./globals.css";
import localFont from 'next/font/local'
 
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
        {children}
      </body>
    </html>
  );
}
