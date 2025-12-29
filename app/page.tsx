import dynamic from "next/dynamic";
import { homeMetadata } from "@/constants/constants";
import { Metadata } from "next";

// Dynamically import heavy components for code splitting and better initial load
const HeroImageText = dynamic(() => import("@/components/HeroImageText"), {
  ssr: true,
  loading: () => (
    <div className="h-screen overflow-hidden relative flex justify-center items-center">
      <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
  ),
});

const HeroSpotlight = dynamic(() => import("@/components/HeroSpotlight"), {
  ssr: true,
});

export const metadata: Metadata = homeMetadata;

export default function Home() {
  return (
    <main className="h-screen overflow-hidden relative flex justify-center">
      <HeroImageText />
      <HeroSpotlight />
    </main>
  );
}
