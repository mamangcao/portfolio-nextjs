"use client";
import Card from "./Card";
import StackIcon from "tech-stack-icons";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function TechStack() {
  const { theme } = useTheme();
  const stacks = {
    Backend: [
      { name: "Laravel", icon: "laravel" },
      { name: "Node.js", icon: "nodejs" },
      { name: "PHP", icon: "php" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
    Frontend: [
      { name: "Javascipt", icon: "js" },
      { name: "Typescript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs2" },
      { name: "Vue.js", icon: "vuejs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Vite", icon: "vitejs" },
      { name: "HTML", icon: "html5"},
      { name: "CSS", icon: "css3"},
      { name: "Bootstrap", icon: "bootstrap5"},
      { name: "Material UI", icon: "materialui"},
      { name: "Webpack", icon: "webpack" },
      { name: "ESLint", icon: "eslint"},
      { name: "Prettier", icon: "prettier"},
    ],
    'CMS & No Code': [
      { name: "WordPress", icon: "wordpress" },
    ],
    'Developer Tools': [
      { name: "git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
    ],
  };

  return (
    <Card title="Tech Stack">
      <div className="space-y-5.5">
        {Object.entries(stacks).map(([category, techs]) => (
          <div key={category}>
            <h3 className="text-sm font-semibold mb-2">
              {category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {techs.map((t) => (
                <div
                  key={t.name}
                  className="relative group flex items-center justify-center w-7 h-7 lg:w-9 lg:h-9"
                >
                  {t.icon === "vitejs" ? (
                    <Image
                      src="https://vitejs.dev/logo.svg"
                      alt="Vite"
                      width={36}
                      height={36}
                      className="transition-transform duration-200 group-hover:scale-110"
                    />
                  ) : (
                    <StackIcon
                      name={t.icon}
                      variant={theme === "dark" ? "dark" : "light"}
                      className={`transition-transform duration-200 group-hover:scale-110 ${
                        theme === "dark" ? "brightness-125" : ""
                      }`}
                    />
                  )}

                  <span className="absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white dark:bg-white dark:text-black px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
