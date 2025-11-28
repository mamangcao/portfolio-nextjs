"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import StackIcon from "tech-stack-icons";

export default function Footer() {
  const year = new Date().getFullYear();

  const { theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  const currentTheme = mounted ? theme : "light";

  return (
    <footer className="max-w-6xl mx-auto px-4 lg:px-36 text-black dark:text-white text-xs lg:text-sm py-8 text-center">
      <div className="text-xs mt-8 flex flex-col items-center gap-2">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="flex items-center gap-1">
            Built with
            <StackIcon
              name="nextjs"
              variant={currentTheme === "dark" ? "dark" : "light"}
              className="w-10 h-10"
            />
          </span>
          and
          <span className="flex items-center gap-1">
            <StackIcon name="tailwindcss" variant="dark" className="w-4 h-4" />
            Tailwind CSS.
          </span>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-4 mb-4"></div>
      <div className="mb-12">
        © {year} Abdul Haleem Mamangcao. All rights reserved.
      </div>
    </footer>
  );
}