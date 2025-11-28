"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) {
    return (
      <button
        className="w-12 h-7 flex items-center rounded-full cursor-pointer transition-colors duration-300 bg-gray-200"
        aria-label="Toggle theme"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`w-12 h-7 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${
        isDark ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-200 hover:bg-gray-300"
      }`}
      aria-label="Toggle theme"
    >
      <div
        className={`w-5 h-5 bg-white dark:text-black rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
          isDark ? "translate-x-6" : "translate-x-1"
        }`}
      >
        {isDark ? (
          <Moon size={14} className="text-black" />
        ) : (
          <Sun size={14} className="text-yellow-500" />
        )}
      </div>
    </button>
  );
}