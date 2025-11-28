"use client";

import Card from "@/components/sections/Card";
import {
  SneakerMoveIcon,
  BarbellIcon,
  SneakerIcon,
  PulseIcon,
} from "@phosphor-icons/react";
import { FaStrava } from "react-icons/fa";
import Image from "next/image";

export default function StravaCard() {
  return (
    <Card title="Physical Activities">
      <div className="flex flex-col gap-2">
        <a
          href="https://strava.com/athletes/158923467"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full justify-center items-center gap-2 py-2.5 bg-orange-600 text-white text-xs font-bold font-sans rounded-md hover:bg-orange-700 hover:-translate-y-0.5 transition-colors shadow-sm"
        >
          <FaStrava className="w-6 h-6 lg:w-5 lg:h-5" />
          <span className="font-normal opacity-90">Follow me on</span>
          <Image
            src="https://badges.strava.com/logo-strava.png"
            alt="Strava"
            width={55}
            height={14}
          />
        </a>

        <div className="grid grid-cols-2 gap-2">
          <button className="group flex flex-col items-center justify-center gap-1 p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:scale-105 transition-colors text-zinc-600 dark:text-zinc-300">
            <SneakerMoveIcon size={24} weight="duotone" className="group-hover:animate-run-step" />
            <span className="text-xs font-medium">Run</span>
          </button>
          <button className="group flex flex-col items-center justify-center gap-1 p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:scale-105 transition-colors text-zinc-600 dark:text-zinc-300">
            <SneakerIcon size={24} weight="duotone" className="group-hover:animate-walk-step" />
            <span className="text-xs font-medium">
              Walk
            </span>
          </button>
          <button className="group flex flex-col items-center justify-center gap-1 p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:scale-105 transition-colors text-zinc-600 dark:text-zinc-300">
            <PulseIcon size={24} weight="duotone" className="group-hover:animate-workout-wiggle" />
            <span className="text-xs font-medium">
              Workout
            </span>
          </button>
          <button className="group flex flex-col items-center justify-center gap-1 p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-600 hover:scale-105 dark:text-zinc-300">
            <BarbellIcon
              size={24}
              weight="duotone"
              className="group-hover:animate-wiggle"
            />
            <span className="text-xs font-medium">Strength</span>
          </button>
        </div>
      </div>
    </Card>
  );
}
