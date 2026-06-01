import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
        "text-foreground transition-all duration-300",
        "hover:-translate-y-0.5 hover:bg-foreground/10 active:translate-y-0",
        "focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/60",
        className
      )}
    >
      <span className="relative block h-6 w-6">
        <Sun
          className={cn(
            "absolute inset-0 h-6 w-6 text-yellow-300 transition-all duration-300",
            isDarkMode
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-50 opacity-0"
          )}
        />
        <Moon
          className={cn(
            "absolute inset-0 h-6 w-6 text-blue-900 transition-all duration-300 dark:text-blue-200",
            isDarkMode
              ? "rotate-90 scale-50 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          )}
        />
      </span>
    </button>
  );
};
