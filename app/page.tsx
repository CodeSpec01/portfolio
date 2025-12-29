import dynamic from "next/dynamic";
import { homeMetadata } from "@/constants/constants";
import { Metadata } from "next";
import HeroSkeleton from "@/components/HeroSkeleton";

// Dynamically import heavy components for code splitting and better initial load
const HeroImageText = dynamic(() => import("@/components/HeroImageText"), {
  ssr: true,
  loading: () => <HeroSkeleton />,
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
