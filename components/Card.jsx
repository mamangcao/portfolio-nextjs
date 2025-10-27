import { User, Mail, Info, Blocks, BriefcaseBusiness, GraduationCap, FolderCode, IdCard, FileBadge } from "lucide-react";

export default function Card({ title, children }) {

  const icons = {
    "About Me": <User className="w-4 h-4 text-black dark:text-white" />,
    "Projects": <FolderCode className="w-4 h-4 text-black dark:text-white" />,
    "Experience": <BriefcaseBusiness className="w-4 h-4 text-black dark:text-white" />,
    "Contact": <Mail className="w-4 h-4 text-black dark:text-white" />,
    "Education": <GraduationCap className="w-4.5 h-4.5 text-black dark:text-white" />,
    "Tech Stack": <Blocks className="w-4 h-4 text-black dark:text-white" />,
    "Certifications": <FileBadge className="w-4 h-4 text-black dark:text-white" />,
    "Eligibility": <IdCard className="w-4.5 h-4.5 text-black dark:text-white" />,
  };

  const icon = icons[title] || <Info className="w-4 h-4 text-gray-400" />;

  return (
    <div className="border bg-white dark:bg-stone-950 border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white shadow-sm rounded-xl p-6 md:p-4 hover:shadow-lg hover:-translate-y-0.5 transition fade-in-up">
      {title && (
        <h2 className="text-sm md:text-base font-bold mb-3 flex items-center gap-2">
          {icon}
          {title}
        </h2>
      )}
      <div className="text-xs md:text-sm">{children}</div>
    </div>
  );
}
