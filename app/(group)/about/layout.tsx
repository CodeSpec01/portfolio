import { aboutMetadata } from "@/constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = aboutMetadata;

export default function CLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
