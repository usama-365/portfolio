"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const PROFESSION_START_DATE = "2020-06-01";

const NAME = "Usama" as const;
const PROFESSION = "full-stack developer" as const;
const EXPERIENCE_IN_YEARS = calculateYearsOfExperience(PROFESSION_START_DATE);
const ENJOY_BUILDING = "sites & apps" as const;
const FOCUS = "React (Next.js)" as const;

export default function IntroDescription() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
    >
      <Bold>Hello, I'm {NAME}.</Bold>
      <span> I'm a </span>
      <Bold>{PROFESSION}</Bold>
      <span> with </span>
      <Bold>{EXPERIENCE_IN_YEARS}+ years</Bold>
      <span> of experience. I enjoy building </span>
      <span className="italic">{ENJOY_BUILDING}</span>
      <span>. My focus is </span>
      <span className="underline">{FOCUS}</span>
      <span>.</span>
    </motion.p>
  );
}

function Bold({ children }: { children: ReactNode }) {
  return <span className={"font-bold"}>{children}</span>;
}

function calculateYearsOfExperience(from: string) {
  return (
    Math.round(
      (Date.now() - Date.parse(from)) / (1000 * 60 * 60 * 24 * 365.25),
    ) || 0
  );
}
