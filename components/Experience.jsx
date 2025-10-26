import Card from "./Card";

export default function Experience() {
  const experiences = [
    {
      title: "Full-stack Web Developer",
      company: "The Good Companion Academy · Contract",
      year: "2023",
    },
    {
      title: "Virtual Assistant",
      company: "Private Client (Confidential) · Freelance",
      year: "2022",
    },
    {
      title: "IT Support Specialist",
      company: "MILG - Lanao del Sur · Contract",
      year: "2021",
    },
    {
      title: "IT Support Specialist",
      company: "Al-Jalis As-Salih · Contract",
      year: "2020",
    },
    {
      title: "Full-stack Web Developer",
      company: "Al-Jalis As-Salih · Contract",
      year: "2019",
    },
    {
      title: "Junior Network Engineer",
      company: "MSU-IIT ICTC-CFSS · Internship",
      year: "2018",
    },
    {
      title: "Project Manager",
      company: "FabLab Mindanao · Internship",
      year: "2017",
    },
    {
      title: "Hello World! 👋🏻",
      company: "Wrote my first line of code",
      year: "2014",
    },
  ];

  return (
    <Card title="Experience">
      <ul role="list" className="space-y-8">
        {experiences.map((exp, idx) => (
          <li key={idx} className="group relative flex gap-x-4 cursor-default">
            <div
              className={`absolute left-0 top-0 flex w-6 justify-center ${
                idx === experiences.length - 1 ? "h-6" : "-bottom-8"
              }`}
            >
              <div className="w-px bg-gray-300 dark:bg-zinc-700 transition-colors" />
            </div>

            <div className="relative flex h-6 w-6 flex-none items-center justify-center">
              <div
                className={`h-3 w-3 rounded-full ring-2 ring-gray-200 dark:ring-zinc-900 ${
                  idx === 0
                    ? "bg-white dark:bg-stone-950 group-hover:bg-black dark:group-hover:bg-white transition-colors "
                    : "bg-white dark:bg-stone-950 group-hover:bg-black dark:group-hover:bg-white group-active:bg-black dark:group-active:bg-white  transition-colors"
                }`}
              />
            </div>

            <div className="flex-auto transition-colors duration-200">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs font-mono text-gray-800 dark:text-white border border-gray-200 bg-white dark:bg-stone-950 px-2 py-0.5 rounded-full group-hover:border-black dark:group-hover:border-white">
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
