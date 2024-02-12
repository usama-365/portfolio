import Link from "next/link";
import type { ReactNode } from "react";

import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

const LINKEDIN_URL = "https://www.linkedin.com/in/usama365" as const;
const GITHUB_URL = "https://www.github.com/usama-365" as const;

export default function IntroButtons() {
  return (
    <div className={"flex flex-wrap items-center justify-center gap-x-2"}>
      {/* Contact button */}
      <Link
        href="#contact"
        className="flex items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white"
      >
        <span>Contact me here</span>
        <BsArrowRight />
      </Link>

      {/* Download CV Button */}
      <a className="flex items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white">
        <span>Download CV </span>
        <HiDownload />
      </a>

      {/* LinkedIn Button */}
      <a
        className="flex items-center justify-center gap-2 rounded-full bg-gray-900 p-4 text-white"
        href={LINKEDIN_URL}
        target="_blank"
      >
        <BsLinkedin />
      </a>

      {/* Github Button */}
      <a
        className="flex items-center justify-center gap-2 rounded-full bg-gray-900 p-4 text-white"
        href={GITHUB_URL}
        target="_blank"
      >
        <BsGithub />
      </a>
    </div>
  );
}

function IntroButton({
  children,
  variant = "light",
  href,
}: {
  children: ReactNode;
  variant?: "light" | "dark";
  href: string;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center gap-2 rounded-full ${variant === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} px-7 py-3 `}
    >
      {children}
    </Link>
  );
}
