import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://psdigitalsolutions.com"),
  title: "Arohaa Digital Solutions | Premium Digital Agency",
  description:
    "Arohaa Digital Solutions builds premium websites, digital content, and strategic online presence for modern businesses.",
  keywords: [
    "digital agency",
    "premium website development",
    "social media management",
    "video editing",
    "business digital presence"
  ],
  openGraph: {
    title: "Arohaa Digital Solutions | Premium Digital Agency",
    description:
      "Building powerful digital presence for modern businesses through premium web and content execution.",
    url: "https://psdigitalsolutions.com",
    siteName: "Arohaa Digital Solutions",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Arohaa Digital Solutions | Premium Digital Agency",
    description:
      "Luxury digital solutions for businesses ready to scale trust, visibility, and growth."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${space.variable} font-sans`}>{children}</body>
    </html>
  );
}
