import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ananyakannan.dev"),
  title: "Ananya Kannan — Software & AI Engineer",
  description:
    "Portfolio of Ananya Kannan — Computer Science student building software, AI systems, and technical experiments. Specializing in Full-Stack Development and Machine Learning.",
  keywords: [
    "Ananya Kannan",
    "Software Engineer",
    "Machine Learning",
    "AI",
    "Full Stack",
    "Next.js",
    "Portfolio",
    "SVCE",
  ],
  authors: [{ name: "Ananya Kannan" }],
  creator: "Ananya Kannan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ananyakannan.dev",
    title: "Ananya Kannan — Software & AI Engineer",
    description:
      "Computer Science student building software, AI systems, and technical experiments. Specializing in Full-Stack Development and Machine Learning.",
    siteName: "Ananya Kannan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ananya Kannan — Software & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ananya Kannan — Software & AI Engineer",
    description:
      "Computer Science student building software, AI systems, and technical experiments.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Cursor from "@/components/Cursor";
import Navigation from "@/components/Navigation";
import PageLoader from "@/components/PageLoader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-black selection:text-white`}>
      <body className="relative bg-[var(--background)] text-[var(--foreground)] min-h-screen font-sans selection:bg-[var(--foreground)] selection:text-[var(--background)]">
        <PageLoader />
        <Cursor />
        <Navigation />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
