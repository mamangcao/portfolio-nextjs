import Card from "./Card"
import { ArrowUpRight } from "lucide-react";

export default function Hackathon() {
  return (
    <Card title="Hackathon Achievements">
      <a href="https://medium.com/@ideya.cit/ideyahack-launched-2nd-edition-focused-on-health-60ffa4823ad8">
        <ul className="group space-y-1">
          <li className="font-semibold text-sm flex items-start justify-between">
            iDEYAHACK: Health Edition Finalist
            <ArrowUpRight className="size-4 text-gray-700 dark:text-gray-200 dark:group-hover:text-white group-hover:-translate-y-2 group-hover:translate-x-2 transition-all flex-shrink-0" />
          </li>
          <li className="text-xs text-gray-700 dark:text-gray-100">
            iDEYA: CIT @ MSU-IIT · <span className="font-mono">2017 · </span>{" "}
            <span className="text-xs font-mono text-gray-800 dark:text-white border border-gray-300 dark:border-gray-400 bg-white dark:bg-midnight-100 px-2 py-1 rounded-full">
              UpBank
            </span>
          </li>
        </ul>
      </a>
    </Card>
  );
}
