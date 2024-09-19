"use client"

import { createContext, useContext, useRef, useEffect, useState, FC, PropsWithChildren } from "react";

type defaultValuesType = {
  isScrollingDown: Boolean;
  isTop: Boolean;
}

const defaultValues: defaultValuesType = {
  isScrollingDown: false,
  isTop: true,
}

const ScrollContext = createContext(defaultValues);

export const ScrollContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const lastScrollPos = useRef(0);

  useEffect(() => {
    const handleScrollingDown = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > lastScrollPos.current) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      lastScrollPos.current = currentScrollPos;
    };
    window.addEventListener("scroll", handleScrollingDown);
    return () => {
      window.removeEventListener("scroll", handleScrollingDown);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ isScrollingDown, isTop }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
