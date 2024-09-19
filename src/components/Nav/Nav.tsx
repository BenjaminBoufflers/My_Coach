"use client";

import React, { FC, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScroll } from "@/contexts/ScrollContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Nav: FC = () => {
  const { isTop } = useScroll();

  return (
    <motion.nav
      className={cn(
        "text-primary flex items-center h-16 px-6 sticky top-0 z-50",
        { "backdrop-blur-md bg-white/10": !isTop } )}
      role="navigation"
      transition={{ duration: 0.5 }}
      animate={!isTop ? { backgroundColor: "rgba(255 255 255 / 0.1)", backdropFilter: "blur(5px)" } : {backgroundColor: "rgba(0 0 0 / 0)"}} >
      <div className="flex gap-2 items-center">
        <Image
          src="/assets/images/logo.png"
          width={48}
          height={48}
          alt="Logo du site My Coach"
        />
        <h1 className="font-semibold text-xl">My Coach</h1>
      </div>

      {/* <ul
        className="flex bg-white/15 rounded-full mx-auto"
        role="list"
      >
        {menu.map((item, index) => (
          <Link
            key={item?.title + index}
            href={item?.route}
            className="font-semibold py-2 px-4 rounded-full flex place-items-baseline"
          >
            <Icon name="fitness" />
            {item?.title}
          </Link>
        ))}
      </ul> */}
      <Link className="font-semibold ml-auto" href="">
        Connexion
      </Link>
    </motion.nav>
  );
};

export default Nav;
