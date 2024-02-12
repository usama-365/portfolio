import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";
import Header from "@/sections/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Usama | Personal Portfolio",
  description:
    "Usama, an introverted Full Stack Developer & Cyber Security expert. Dive into secure and innovative web solutions. Connect for a tech journey together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative bg-gray-50 pt-28 text-gray-950 sm:pt-36`}
      >
        {/* Stylish dots */}
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem]" />
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />

        {/* Header */}
        <Header />

        {/* Actual content */}
        {children}
      </body>
    </html>
  );
}
