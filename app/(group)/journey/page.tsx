import JourneyPage from "@/components/JourneyPage";
import { journeyMetadata } from "@/constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = journeyMetadata;

const page = () => {
  return (
    <div>
        <JourneyPage />
    </div>
  );
};

export default page;
