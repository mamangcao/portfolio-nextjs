import Card from "./Card";

export default function Projects() {
  const projects = [
    {
      title: "Al-Jalis As-Salih, Inc.",
      desc: "Empowering communities through authentic Islamic education.",
      url: "thegoodcompanion.net",
      href: "https://thegoodcompanion.net",
    },
    {
      title: "Portfolio / Creative Resume",
      desc: "Built with Next.js and Tailwind CSS for showcasing creative resume.",
      url: "GitHub Repository",
      href: "https://github.com/mamangcao/portfolio-nextjs",
    },
    {
      title: "The Good Companion Academy",
      desc: "A comprehensive academy providing transformative Islamic education.",
      url: "academy.thegoodcompanion.net",
      href: "https://academy.thegoodcompanion.net",
    },
  ];

  return (
    <Card title="Projects">
      <div className="grid sm:grid-cols-3 gap-4">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block cursor-pointer bg-gray-50 dark:bg-black rounded-lg border border-gray-200 dark:border-zinc-800 p-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 hover:bg-black dark:hover:bg-white"
          >
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors">
              {p.title}
            </h3>
            <p className="text-xs lg:text-xs text-gray-600 dark:text-gray-400 mt-1 group-hover:text-gray-200 dark:group-hover:text-gray-700 transition-colors">
              {p.desc}
            </p>
            <div className="mt-2">
              <span className="text-xs font-mono text-gray-800 dark:text-white border border-gray-200 dark:border-gray-400 bg-white dark:bg-stone-950 px-2 py-1 rounded-full group-hover:border-black dark:group-hover:bg-white dark:group-hover:text-black">
                {p.url}
              </span>
            </div>
          </a>
        ))}
      </div>
    </Card>
  );
}
