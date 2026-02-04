"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleSetTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    if(!mounted) return null

    return (
        <button
          className="grid h-8 w-8 place-items-center rounded-full border border-black/10 bg-white/70 text-black transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-white/10 dark:bg-black/40 dark:text-white"
          onClick={handleSetTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <BsMoon className="size-4" />
          ) : (
            <BsSun className="size-4" />
          )}
        </button>
    );
};
