"use client";

import dynamic from "next/dynamic";

// Simple loading component to prevent layout shift
const LoadingSkeleton = () => (
  <div className="fixed inset-0 h-full w-full bg-[#03000a] -z-50" />
);

const HeroImageText = dynamic(() => import("@/components/HeroImageText"), {
  loading: () => <LoadingSkeleton />,
  ssr: false, // This is allowed in a Client Component
});

const HeroSpotlight = dynamic(() => import("@/components/HeroSpotlight"), {
  loading: () => <LoadingSkeleton />,
  ssr: false, // This is allowed in a Client Component
});

export default function HomeClient() {
  return (
    <>
      <HeroImageText />
      <HeroSpotlight />
    </>
  );
}
