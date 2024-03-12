import "./globals.css";
import Navbar from "@/components/navbar";


export const metadata = {
  title: "Portfolio",
  description: "Portfolio website for Aviral",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="w-full h-screen bg-gradient-to-b from-blue-100 to-red-100">
          <div className="h-24">
            <Navbar />
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
