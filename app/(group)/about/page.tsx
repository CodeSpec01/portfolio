import Aboutstart from "@/components/Aboutstart";
import { aboutMetadata } from "@/constants/constants";
import { Metadata } from "next";

export const metadata : Metadata = aboutMetadata;

const page = () => {

  return (
    <div >
      <img src="/About/bg.jpg" className="fixed object-cover -z-50 w-full h-screen" alt="Backgorund" />
      <Aboutstart/>
    </div>
  );
}

export default page