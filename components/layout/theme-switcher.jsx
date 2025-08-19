"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SunDimIcon as Sun, MoonStarsIcon as Moon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

import { ClientOnly } from "../shared/client-only";


const STORAGE_KEY = "theme";

const useSystemThemePreference = () => {
  const isClient = typeof window !== "undefined";

  const getSystemThemePreferences = () => {
    if (!isClient) return "light";

    const storedPreference = localStorage.getItem(STORAGE_KEY);
    if (storedPreference) {
      return storedPreference
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  };

  const setSystemThemePreference = (theme) => {
    if (isClient) {
      localStorage.setItem(STORAGE_KEY, theme);
    }
  };

  return { getSystemThemePreferences, setSystemThemePreference };
};

export function ThemeSwitcher() {
  const [showToolTip, setShowTooltip] = useState(false);
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef(null);

  const { getSystemThemePreferences, setSystemThemePreference } =
    useSystemThemePreference();

  const updateTheme = useCallback(
    (theme) => {
      setTheme(theme);
      setSystemThemePreference(theme);
    },
    [setTheme, setSystemThemePreference],
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    updateTheme(newTheme);
  };

  useEffect(() => {
    const button = buttonRef.current;
    updateTheme(getSystemThemePreferences());

    const handleKeyDown = (event) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      )
        return;

      if (event.key === "M" || event.key === "m") {
        event.preventDefault();
        const newTheme = document.documentElement.classList.contains("dark")
          ? "light"
          : "dark";
        updateTheme(newTheme);
      }
    };

    const handleSystemThemeChange = (event) => {
      const newTheme = event.matches ? "dark" : "light";
      updateTheme(newTheme);
    };

    const handleTooltip = () => setShowTooltip((prev) => !prev);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    document.addEventListener("keydown", handleKeyDown);
    if (button) {
      button.addEventListener("mouseover", handleTooltip);
      button.addEventListener("mouseout", handleTooltip);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
      document.removeEventListener("keydown", handleKeyDown);
      if (button) {
        button.removeEventListener("mouseout", handleTooltip);
        button.removeEventListener("mouseover", handleTooltip);
      }
    };
  }, [getSystemThemePreferences, updateTheme]);

  return (
    <ClientOnly fallback={<Skeleton />}>
      <button
        onClick={toggleTheme}
        className="relative flex items-center justify-center outline-none"
        ref={buttonRef}
      >
        <Sun
          className={cn(
            "size-5 transition-all duration-300 ease-in-out",
            theme === "light" ? "scale-100" : "scale-0",
          )}
        />
        <Moon
          className={cn(
            "absolute size-5 transition-all duration-300 ease-in-out",
            theme === "light" ? "scale-0" : "scale-100",
          )}
        />
        <span className="sr-only">Toggle Theme</span>
      </button>
    </ClientOnly>
  );
}

const Skeleton = () => {
  return <span className="size-5 rounded bg-neutral-400/20"></span>;
};
