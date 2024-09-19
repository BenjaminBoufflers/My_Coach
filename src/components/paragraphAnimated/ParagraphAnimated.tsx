import React, { FC } from "react";
import { motion } from "framer-motion";
import { appearAnimation } from "./paragraphAnimations";
import { paragraphAnimatedPropsType } from "@/types/paragraphAnimatedTypes";

const ParagraphAnimated: FC<paragraphAnimatedPropsType> = ({ text }) => {
  return <motion.p className="" variants={appearAnimation}>{text}</motion.p>;
};

export default ParagraphAnimated;
