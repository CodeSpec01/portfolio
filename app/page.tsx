import HeroSpotlight from "@/components/HeroSpotlight";
import { homeMetadata } from "@/constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = homeMetadata;

export default function Home() {

  return (
    <main className="h-screen overflow-hidden relative">
      <HeroSpotlight />

    </main>
  );
}
