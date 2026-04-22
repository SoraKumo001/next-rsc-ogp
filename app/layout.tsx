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

import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Satoru Render Showcase",
  description: "High-fidelity dynamic OGP generation library.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
    >
      <body className="flex flex-col bg-background text-white selection:bg-white/10">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
