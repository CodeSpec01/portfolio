import Footer from "@/components/Footer";
import TargetCursor from "@/components/TargetCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <footer><Footer /></footer>
    </>
  );
}
