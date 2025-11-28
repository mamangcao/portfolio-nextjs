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

interface TechItem {
  name: string;
  icon: string;
}

interface StacksData {
  [category: string]: TechItem[];
}

export default function TechStack() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  const currentTheme = mounted ? theme : "light";

  const stacks: StacksData = {
    Backend: [
      { name: "Laravel", icon: "laravel" },
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
      { name: "Motion.dev", icon: "motiondev" },
      { name: "Vite", icon: "vitejs" },
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css3" },
      { name: "Bootstrap", icon: "bootstrap5" },
      { name: "Material UI", icon: "materialui" },
    ],
    "CMS & No Code": [{ name: "WordPress", icon: "wordpress" }],
    "AI / LLMs": [{ name: "Gemini", icon: "gemini" }],
    "Developer Tools": [
      { name: "git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "npm", icon: "npm2" },
      { name: "vercel", icon: "vercel" },
      { name: "Google Analytics", icon: "analytics" },
      { name: "ESLint", icon: "eslint" },
      { name: "Prettier", icon: "prettier" },
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
                  <Tooltip key={t.name} sideOffset={12}>
                    <TooltipTrigger>
                      <div className="flex items-center justify-center w-6 h-6 lg:w-9 lg:h-9 transition-transform duration-200 hover:scale-110">
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
                        ) : t.icon === "motiondev" ? (
                          <Image
                            src={
                              currentTheme === "dark"
                                ? "https://cdn.brandfetch.io/idDJv1mfrb/theme/light/logo.svg"
                                : "https://cdn.brandfetch.io/idDJv1mfrb/theme/dark/logo.svg"
                            }
                            alt="Motion.dev"
                            width={36}
                            height={36}
                          />
                        ) : t.icon === "gemini" ? (
                          <Image
                            src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
                            alt="Gemini"
                            width={36}
                            height={36}
                          />
                        ) : (
                          <StackIcon
                            name={t.icon}
                            variant={currentTheme === "dark" ? "dark" : "light"}
                            className={
                              currentTheme === "dark" ? "brightness-125" : ""
                            }
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