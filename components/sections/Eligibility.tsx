import Card from "./Card"

export default function Eligibility() {
  return (
    <Card title="Eligibility">
      <ul className="space-y-1">
        <li className="font-semibold text-sm">Career Service Professional</li>
        <li className="text-xs text-gray-700 dark:text-gray-100">
          Civil Service Commission · <span className="font-mono">2018</span>
        </li>
      </ul>
    </Card>
  );
}
