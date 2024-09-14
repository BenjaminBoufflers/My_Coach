"use client";

import React, { FC } from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import Image from "next/image";
import { UserIcon } from "lucide-react";
import Icon from "../icon/Icon";

type MenuType = { route: string; title: string; icon: string }[];

const menu: MenuType = [
  { route: "/", title: "Accueil" },
  { route: "/generator", title: "Plan d'entraînement" },
];

const Nav: FC = () => {
  return (
    <nav className="text-primary flex items-center h-16 px-6" role="navigation">
      <Image
        src="/assets/images/logo.png"
        width={48}
        height={48}
        alt="Logo my_coach"
      />
      <ul
        className="flex bg-stone-200 dark:bg-white/15 rounded-full mx-auto"
        role="list"
      >
        {menu.map((item, index) => (
          <Link
            key={item?.title + index}
            href={item?.route}
            className="font-semibold py-2 px-4 rounded-full flex">
            <Icon name="fitness" />
            {item?.title}
          </Link>
        ))}
      </ul>
      <ModeToggle />
    </nav>
  );
};

export default Nav;
