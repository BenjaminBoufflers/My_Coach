"use client";

import { useEffect, useState} from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // This prevents any rendering until the client has mounted.
    // It helps avoid mismatches between the server and client.
    return <div className="invisible">{children}</div>;
  }
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
