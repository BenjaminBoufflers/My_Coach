"use client";

import React, { FC } from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import Image from "next/image";

type MenuType = {route: string, title: string}[];

const menu: MenuType = [
  { route: "/", title: "Accueil" },
  { route: "/generator", title: "Générateur de programme" },
  { route: "/blog", title: "Blog" },
  { route: "/contact", title: "Contact" },
];

const Nav: FC = () => {
  return (
    <nav className="text-primary flex items-center h-16" role="navigation">
        <Image src="/assets/images/logo.png" width={48} height={48} alt="Logo my_coach" />
        <ul className="flex space-x-10" role="list">
          {menu.map((item, index) => (
            <Link key={item?.title + index} href={item?.route}>
              {item?.title}
            </Link>
          ))}
        </ul>
        <ModeToggle />
    </nav>
  );
};

export default Nav;
