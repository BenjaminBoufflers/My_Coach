"use client"

import React, { FC } from "react";
import { motion } from "framer-motion";
import { BigTitlePropsType } from "@/types/bigTitleTypes";

const bigTitleAnimation = {
  hidden: {
    scale: 0,
    rotateZ: -15,
    opacity: 0
  },
  visible: {
    scale: 1,
    rotateZ: 0,
    opacity: 1,
    transition: {
      stifness: 80,
      type: "spring"
    }
  },
}

const BigTitle: FC<BigTitlePropsType> = ({ title }) => {

  return (
    <motion.h2
      variants={bigTitleAnimation}
      className="font-semibold text-2xl md:text-3xl lg:text-4xl text-primary text-pretty mb-2"
    >
      {title}
    </motion.h2>
  );
};

export default BigTitle;