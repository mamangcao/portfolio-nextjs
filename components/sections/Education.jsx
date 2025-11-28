import Card from "./Card"

export default function Education() {
  return (
    <Card title="Education">
      <ul className="space-y-1">
        <li className="font-semibold text-sm">BS in Information Technology</li>
        <li className="text-xs text-gray-700 dark:text-gray-100">Mindanao State University - Iligan Institute of Technology ·
          <span className="font-mono"> 2014 - 2018</span>
        </li>
      </ul>
    </Card>
  );
}
