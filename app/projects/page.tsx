"use client";

import { projects } from "@/lib/data/projects";
import Link from "next/link";
import { ArrowUpRight, MoveLeft } from "lucide-react";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import StackIcon from "tech-stack-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/global-tooltip";

const techIconMap: Record<string, string> = {
  laravel: "laravel",
  nodejs: "nodejs",
  php: "php",
  typescript: "typescript",
  javascript: "js",
  react: "react",
  nextjs: "nextjs2",
  vitejs: "vitejs",
  tailwindcss: "tailwindcss",
  shadcnui: "shadcnui",
  headlessui: "headlessui",
  materialui: "materialui",
  bootstrap: "bootstrap5",
  motiondev: "motiondev",
  mysql: "mysql",
  postgresql: "postgresql",
  wordpress: "wordpress",
  vscode: "vscode",
  sublime: "sublime",
  vercel: "vercel",
};

export default function ProjectsPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  const currentTheme = mounted ? theme : "light";

  const renderTechIcons = (builtWith: string | undefined) => {
    if (!builtWith) return null;
    const techs = builtWith.split(",").map((tech) => tech.trim().toLowerCase());

    return (
      <div className="flex flex-wrap gap-2">
        {techs.map((tech, index) => {
          const iconName = techIconMap[tech];
          if (!iconName) return null;

          return (
            <Tooltip key={index} sideOffset={12}>
              <TooltipTrigger>
                <div className="flex items-center justify-center min-w-[20px] min-h-[20px] w-4 h-4 lg:w-7 lg:h-7 transition-transform duration-200 hover:scale-110">
                  {tech === "nextjs" ? (
                    <Image
                      src={
                        currentTheme === "dark"
                          ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                          : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                      }
                      alt="Next.js"
                      width={24}
                      height={24}
                      className={currentTheme === "dark" ? "invert" : ""}
                    />
                  ) : tech === "vitejs" ? (
                    <Image
                      src="https://vitejs.dev/logo.svg"
                      alt="Vite"
                      width={28}
                      height={28}
                    />
                  ) : tech === "gemini" ? (
                    <Image
                      src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
                      alt="Gemini"
                      width={36}
                      height={36}
                    />
                  ) : tech === "headlessui" ? (
                    <Image
                      src="https://headlessui.com/apple-touch-icon.png"
                      alt="Headless UI"
                      width={24}
                      height={24}
                    />
                  ) : tech === "motiondev" ? (
                    <Image
                      src={
                        currentTheme === "dark"
                          ? "https://cdn.brandfetch.io/idDJv1mfrb/theme/light/logo.svg"
                          : "https://cdn.brandfetch.io/idDJv1mfrb/theme/dark/logo.svg"
                      }
                      alt="Motion.dev"
                      width={28}
                      height={28}
                    />
                  ) : (
                    <StackIcon
                      name={iconName}
                      variant={currentTheme === "dark" ? "dark" : "light"}
                      className={
                        currentTheme === "dark" ? "brightness-125" : ""
                      }
                    />
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>{tech}</TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    );
  };

  return (
    <main className="min-h-screen dark:bg-midnight-50 fade-in-up">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-36 pt-16 sm:pt-24 pb-12">
        <div className="mb-8 sm:mb-12">
          <Link
            href="/"
            className="flex mb-2 items-center gap-2 group hover:text-midnight-100 transition-colors group"
          >
            <MoveLeft className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-purple-500 dark:group-hover:text-yellow-200 group-hover:-translate-x-2 transition-transform" />
            <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-purple-700 dark:group-hover:text-yellow-200">
              Abdul Haleem Mamangcao
            </span>
          </Link>
          <h1 className="text-4xl text-midnight-100 dark:text-white font-bold mb-8">
            All Projects
          </h1>
        </div>
        <TooltipProvider>
          <div className="mt-6 sm:mt-8 flow-root">
            <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="hidden min-w-full divide-y divide-gray-300 dark:divide-zinc-800 md:table">
                  <thead className="bg-white dark:bg-midnight-50 sticky top-0 z-10">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        Year
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-900 dark:text-white sm:pl-0"
                      >
                        Project
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        Made at
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        Built with
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-zinc-800">
                    {projects.map((project) => (
                      <tr key={project.title}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-200">
                          {project.year}
                        </td>
                        <td className="whitespace-normal py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 dark:text-white sm:pl-0">
                          {project.href ? (
                            <a
                              href={project.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-1.5 hover:text-purple-600 dark:hover:text-yellow-200 transition-colors"
                            >
                              <span>{project.title}</span>
                              <ArrowUpRight className="size-4 text-gray-400 transition-transform group-hover:text-purple-600 dark:group-hover:text-yellow-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </a>
                          ) : (
                            <span>{project.title}</span>
                          )}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-200">
                          {project.made || "—"}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-200">
                          {renderTechIcons(project.built)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="md:hidden">
                  <div className="sticky top-0 z-10 bg-white dark:bg-midnight-50 border-b border-gray-300 dark:border-zinc-800 px-4 py-3 mb-2">
                    <div className="flex items-center gap-x-3 text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                      <span className="w-12">Year</span>
                      <span className="flex-auto">Project Details</span>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200 dark:divide-zinc-800 rounded-lg overflow-hidden shadow-sm">
                    {projects.map((project) => (
                      <div key={project.title} className="py-4 px-4">
                        <div className="flex items-start gap-x-3">
                          <p className="text-sm text-gray-500 dark:text-gray-200 w-12 flex-shrink-0 pt-0.5">
                            {project.year}
                          </p>
                          <div className="flex-auto">
                            {project.href ? (
                              <a
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-start gap-1.5 font-semibold text-sm text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-yellow-200 transition-colors"
                              >
                                <span>{project.title}</span>
                                <ArrowUpRight className="size-4 text-gray-400 dark:text-gray-200 flex-shrink-0 mt-0.5 transition-transform group-hover:text-purple-600 dark:group-hover:text-yellow-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
                              </a>
                            ) : (
                              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                {project.title}
                              </p>
                            )}
                            <div className="mt-2">
                              {renderTechIcons(project.built)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TooltipProvider>
      </section>
      <Footer />
    </main>
  );
}