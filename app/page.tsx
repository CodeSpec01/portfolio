import { homeMetadata } from "@/constants/constants";
import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = homeMetadata;

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      {/* <img src="@/public/home/main-bg.png" alt="Background" /> */}
         <img src="/home/main-bg.png" alt="Background" className="w-full h-full object-cover "/>
    </main>
  );
}
