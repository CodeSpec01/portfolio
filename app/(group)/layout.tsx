import Footer from "@/components/Footer";
import TargetCursor from "@/components/TargetCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      {children}
      <footer><Footer /></footer>
    </>
  );
}
