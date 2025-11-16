"use client";
import Card from "./Card";
import StackIcon from "tech-stack-icons";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/global-tooltip";

export default function TechStack() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  const currentTheme = mounted ? theme : "light";

  const stacks = {
    Backend: [
      { name: "Laravel", icon: "laravel" as const },
      { name: "Node.js", icon: "nodejs" },
      { name: "PHP", icon: "php" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
    Frontend: [
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs2" },
      { name: "Vue.js", icon: "vuejs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Shadcn UI", icon: "shadcnui" },
      { name: "Headless UI", icon: "headlessui" },
      { name: "Vite", icon: "vitejs" },
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css3" },
      { name: "Bootstrap", icon: "bootstrap5" },
      { name: "Material UI", icon: "materialui" },
      { name: "Webpack", icon: "webpack" },
      { name: "ESLint", icon: "eslint" },
      { name: "Prettier", icon: "prettier" },
    ],
    "CMS & No Code": [{ name: "WordPress", icon: "wordpress" }],
    "Developer Tools": [
      { name: "git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
    ],
  };

  return (
    <Card title="Tech Stack" viewAllLink="">
      <TooltipProvider>
        <div className="space-y-5.5">
          {Object.entries(stacks).map(([category, techs]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold mb-2">{category}</h3>
              <div className="flex flex-wrap gap-4">
                {techs.map((t) => (
                  <Tooltip key={t.name} sideOffset={8}>
                    <TooltipTrigger>
                      <div className="flex items-center justify-center w-7 h-7 lg:w-8 lg:h-8 transition-transform duration-200 hover:scale-110">
                        {t.icon === "vitejs" ? (
                          <Image
                            src="https://vitejs.dev/logo.svg"
                            alt="Vite"
                            width={36}
                            height={36}
                          />
                        ) : t.icon === "headlessui" ? (
                          <Image
                            src="https://headlessui.com/apple-touch-icon.png"
                            alt="Headless UI"
                            width={36}
                            height={36}
                          />
                        ) : t.icon === "shadcnui" ? (
                          <svg
                            role="img"
                            viewBox="0 0 256 256"
                            className="h-6 w-6"
                            fill="currentColor"
                          >
                            <path
                              d="M208.3 208.3a15.9 15.9 0 0 1-22.6 0l-72-72a15.9 15.9 0 0 1 0-22.6l72-72a15.9 15.9 0 0 1 22.6 22.6L147.3 128l61 61a15.9 15.9 0 0 1 0 22.6Z"
                            ></path>
                            <path
                              d="M113.4 47.7a15.9 15.9 0 0 0-22.6 0l-72 72a15.9 15.9 0 0 0 0 22.6l72 72a15.9 15.9 0 0 0 22.6-22.6L52.1 128l61.3-61.3a15.9 15.9 0 0 0 0-22.6Z"
                            ></path>
                          </svg>
                        ) : (
                          <StackIcon
                            name={t.icon}
                            variant={currentTheme === "dark" ? "dark" : "light"}
                            className={currentTheme === "dark" ? "brightness-125" : ""}
                          />
                        )}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>{t.name}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TooltipProvider>
    </Card>
  );
}
