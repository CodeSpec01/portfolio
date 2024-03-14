import TransitionElement from "@/src/components/TransitionElement";
import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio website for Aviral",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TransitionElement>{children}</TransitionElement>
      </body>
    </html>
  );
}
