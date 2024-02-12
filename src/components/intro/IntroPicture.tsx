"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import profileImg from "@/../public/profile.jpg";

const PROFILE_IMAGE_DIMENSIONS = 96;
const PROFILE_IMAGE_QUALITY = 95;
const PROFILE_IMAGE_ALT_TEXT = "Usama's Profile Picture";
const PROFILE_IMAGE_IS_PRIORITY = true;

export default function IntroPicture() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src={profileImg}
            width={PROFILE_IMAGE_DIMENSIONS}
            height={PROFILE_IMAGE_DIMENSIONS}
            quality={PROFILE_IMAGE_QUALITY}
            alt={PROFILE_IMAGE_ALT_TEXT}
            priority={PROFILE_IMAGE_IS_PRIORITY}
            className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
          />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
          className="absolute bottom-0 right-0 text-4xl"
        >
          👋
        </motion.span>
      </div>
    </div>
  );
}
