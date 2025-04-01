"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  duration?: number;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.5,
}: FadeInProps) {
  const directionConfig = {
    up: { initial: { y: 40, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    down: { initial: { y: -40, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    left: { initial: { x: 40, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    right: { initial: { x: -40, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  };

  return (
    <motion.div
      initial={directionConfig[direction].initial}
      whileInView={directionConfig[direction].animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
