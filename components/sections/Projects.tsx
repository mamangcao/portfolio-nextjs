import { ArrowUpRight } from "lucide-react";
import Card from "./Card";
import { projects } from "@/lib/data/projects";

export default function Projects() {
  // Get the 3 recent projects
  const recentProjects = projects.slice(0, 3);

  return (
    <Card title="Recent Projects" viewAllLink="/projects">
      <div className="grid sm:grid-cols-3 gap-4">
        {recentProjects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block cursor-pointer bg-gray-50 dark:bg-midnight-100 rounded-xl border border-gray-200 dark:border-zinc-800 p-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white transition-colors">
                {p.title}
              </h3>
              <ArrowUpRight className="size-3 lg:size-4 text-gray-700 dark:text-gray-200 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all flex-shrink-0" />
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-200 mt-1 transition-colors">
              {p.desc}
            </p>
            {p.url && (
              <div className="mt-2">
                <span className="text-xs font-mono text-gray-800 dark:text-white border border-gray-300 dark:border-gray-400 bg-white dark:bg-midnight-100 px-2 py-1 rounded-full">
                  {p.url}
                </span>
              </div>
            )}
          </a>
        ))}
      </div>
    </Card>
  );
}