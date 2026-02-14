"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "cursor-pointer",
        "relative inline-flex h-10 w-20 items-center rounded-full transition-colors duration-300 focus:outline-none shadow-inner",
        theme === "dark" ? "bg-zinc-800" : "bg-zinc-200",
      )}
      aria-label="Toggle dark mode"
    >
      <span
        className={cn(
          "inline-flex size-8 transform rounded-full bg-background shadow-lg transition-transform duration-300 ease-in-out items-center justify-center",

          theme === "dark" ? "translate-x-11" : "translate-x-1",
        )}
      >
        {theme === "dark" ? (
          <Moon className="size-5 text-primary " />
        ) : (
          <Sun className="size-5 text-yellow-500" />
        )}
      </span>
    </button>
  );
}
