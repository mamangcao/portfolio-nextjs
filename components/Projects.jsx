import Card from "./Card";

export default function Projects() {
  const projects = [
    { title: "TGC Web App", desc: "A full-stack Laravel + React project for tournament management." },
    { title: "Portfolio Site", desc: "Built with Next.js and Tailwind CSS for showcasing skills." },
  ];

  return (
    <Card title="Recent Projects">
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p.title} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{p.desc}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
