import { User, Mail, Info, Blocks, Briefcase, GraduationCap, Folder, FileBadge, Computer, ArrowUpRight, IdCard } from "lucide-react";

export default function Card({ title, children, viewAllLink }) {

  const icons = {
    "About Me": <User className="w-4 h-4 text-black dark:text-white" />,
    "Projects": <Folder className="w-4 h-4 text-black dark:text-white" />,
    "Experience": <Briefcase className="w-4 h-4 text-black dark:text-white" />,
    "Contact": <Mail className="w-4 h-4 text-black dark:text-white" />,
    "Education": <GraduationCap className="w-4.5 h-4.5 text-black dark:text-white" />,
    "Tech Stack": <Blocks className="w-4 h-4 text-black dark:text-white" />,
    "Certifications": <FileBadge className="w-4 h-4 text-black dark:text-white" />,
    "Eligibility": <IdCard className="w-4.5 h-4.5 text-black dark:text-white" />,
    "Hackathon Achievements": <Computer className="w-4 h-4 text-black dark:text-white" />,
  };

  const icon = icons[title] || <Info className="w-4 h-4 text-gray-400" />;

  return (
    <div className="border bg-white dark:bg-stone-950 border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white shadow-sm rounded-xl p-6 md:p-4 hover:shadow-lg hover:-translate-y-0.5 transition fade-in-up">
      {title && (
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm md:text-base font-bold flex items-center gap-2">
            {icon}
            {title}
          </h2>
          {viewAllLink && (
            <a
              href={viewAllLink}
              rel="noopener noreferrer"
              className="group flex items-center gap-1 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              View All
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          )}
        </div>
      )}
      <div className="text-xs md:text-sm">{children}</div>
    </div>
  );
}