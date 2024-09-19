import React, { FC, ReactNode } from "react";
import { CustomCardPropsType } from "@/types/customCardTypes";
import { motion } from "framer-motion";

const CustomCard: FC<CustomCardPropsType> = ({ children }) => {
  return (
    <motion.div 
    transition={{ staggerChildren: 0.1}} initial="hidden" animate="visible"
    className="flex flex-col h-full border-primary border-y flex-grow text-center p-4 lg:p-8 gap-2 text-pretty max-w-prose">
      {children}
    </motion.div>
  );
};

export default CustomCard;
