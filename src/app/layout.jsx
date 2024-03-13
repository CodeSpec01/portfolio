import "./globals.css";
import Navbar from "@/src/components/Navbar";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio website for Aviral",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="w-full h-full bg-gradient-to-b from-blue-200 to-red-50">
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
