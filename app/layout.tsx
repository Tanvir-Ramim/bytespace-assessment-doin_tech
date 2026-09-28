import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "../shared/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../shared/fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../shared/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Website",
  description: "My website description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${satoshi.variable} ${poppins.variable}`}>
      <body className="font-satoshi antialiased">{children}</body>
    </html>
  );
}