import React, { FC } from "react";
import IconFitness from "./icons/IconFitness";
import { IconNameType, IconProps, IconWithNameProps } from "@/types/iconTypes";

const IconComponents: Record<IconNameType, FC<IconProps>> = {
  fitness: IconFitness,
  home: IconFitness
};

const Icon: FC<IconWithNameProps> = ({ name, size, color}) => {
  const IconComponent = IconComponents[name];

  if(!IconComponent) {
    console.warn(`Icon ${name} not found`);
    return null;
  }

  return <IconComponent size={size} color={color} />;
};

export default Icon;
