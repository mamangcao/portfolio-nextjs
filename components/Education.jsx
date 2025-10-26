import Card from "./Card";

export default function Education() {
  return (
    <Card title="Education">
      <ul className="space-y-2">
        <li className="font-semibold">Bachelor of Science in Information Technology</li>
        <li className="text-xs">Mindanao State University - Iligan Institute of Technology</li>
        <li className="text-xs">
            <span className="inline-flex items-center rounded-full border border-gray-300 bg-white px-1.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
        2014 - 2018
      </span>
        </li>
      </ul>
    </Card>
  );
}
