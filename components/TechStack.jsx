import Card from "./Card";

export default function TechStack() {
  const techs = ["Laravel", "React", "Next.js", "Tailwind CSS", "MySQL", "API Integration"];
  return (
    <Card title="Tech Stack">
      <div className="flex flex-wrap gap-3 mt-3">
        {techs.map((t) => (
          <span key={t} className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
            {t}
          </span>
        ))}
      </div>
    </Card>
  );
}
