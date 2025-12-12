import { aboutMetadata } from "@/constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = aboutMetadata;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
