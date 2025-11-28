import Card from "./Card";
import { experiences } from "@/lib/data/experiences";

export default function Experience() {
  // Only get the first 10 recent experiences
  const recentExperiences = experiences.slice(0, 10);

  return (
    <Card title="Experience">
      <ul role="list" className="space-y-8">
        {recentExperiences.map((exp, idx) => (
          <li key={idx} className="group relative flex gap-x-4 cursor-default">
            <div
              className={`absolute left-0 top-1 flex w-6 justify-center ${
                idx === recentExperiences.length - 1 ? "h-4" : "-bottom-9"
              }`}
            >
              <div className="w-px bg-gray-300 dark:bg-zinc-700 transition-colors" />
            </div>

            <div className="relative flex h-6 w-6 flex-none items-center justify-center">
              <div
                className={`h-3 w-3 rounded-full ring-2 ring-gray-200 dark:ring-zinc-900 ${
                  idx === 0
                    ? "bg-black dark:bg-white group-hover:bg-black dark:group-hover:bg-white transition-colors"
                    : "bg-white dark:bg-zinc-700 group-hover:bg-black dark:group-hover:bg-white group-active:bg-black dark:group-active:bg-white transition-colors"
                }`}
              />
            </div>
            <div className="flex-auto transition-colors duration-200">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                    {exp.company}
                  </p>
                </div>
                <span className="text-[10px] lg:text-xs font-mono text-gray-800 dark:text-white border border-gray-200 bg-white dark:bg-midnight-100 px-2 py-0.5 rounded-full">
                  {exp.year}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}