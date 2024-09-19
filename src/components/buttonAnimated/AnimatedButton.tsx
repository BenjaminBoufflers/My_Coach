"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { shadowAnimation, fillAnimation } from "./buttonAnimation";
import { cn } from "@/lib/utils";

type AnimatedButtonProps = {
  text: string;
  type: "fill" | "shadow";
  onClick: () => void;
  href?: string;
  className?: string;
};

const AnimatedButton: FC<AnimatedButtonProps> = ({
  text,
  type,
  onClick,
  href,
  className,
}) => {
  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      variants={
        type === "shadow"
          ? shadowAnimation
          : type === "fill"
          ? fillAnimation
          : undefined
      }
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      className={cn(
        "border border-primary w-full rounded-lg p-2 cursor-pointer font-semibold",
        className
      )}
      onClick={onClick}
      href={href}
      {...(href && { target: "_blank" })}
    >
      {text}
    </MotionComponent>
  );
};

export default AnimatedButton;
