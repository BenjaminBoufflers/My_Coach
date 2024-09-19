import React from "react";
import { motion } from "framer-motion";

const letterAnimation = {
  hidden: { y: -50, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  }),
};

const createAnimatedText = (text) => {
  return text.split("").map((letter, index) => (
    <motion.span
      key={index}
      variants={letterAnimation}
      style={{ display: "inline-block" }} // Assure que chaque lettre est sur la même ligne
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  ));
};

const TextTyping = ({ text }) => {
  return (
    <motion.div
      transition={{ staggerChildren: 0.05 }}
      initial="hidden"
      animate="visible"
    >
      {createAnimatedText(text)}
    </motion.div>
  );
};

export default TextTyping;
