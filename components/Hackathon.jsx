import Card from "./Card";

export default function Hackathon() {
  return (
    <Card title="Hackathon Achievements">
      <a href="https://medium.com/@ideya.cit/ideyahack-launched-2nd-edition-focused-on-health-60ffa4823ad8">
        <ul className="group space-y-1">
          <li className="font-semibold text-sm">
            iDEYAHACK: Health Edition Finalist
          </li>
          <li className="text-xs text-gray-700 dark:text-gray-100">
            iDEYA: CIT @ MSU-IIT · <span className="font-mono">2017 · </span>{" "}
            <span className="text-xs font-mono text-gray-800 dark:text-white border border-gray-200 dark:border-gray-400 bg-white dark:bg-stone-950 px-2 py-1 rounded-full group-hover:border-black dark:group-hover:bg-white dark:group-hover:text-black">
              UpBank
            </span>
          </li>
        </ul>
      </a>
    </Card>
  );
}
