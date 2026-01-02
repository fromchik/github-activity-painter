import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Cell } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function startOfYear(year: number) {
  return new Date(Date.UTC(year, 0, 1));
}

export function addDays(d: Date, days: number) {
  const x = new Date(d);
  x.setUTCDate(x.getUTCDate() + days);
  return x;
}

export function formatISO(d: Date) {
  return d.toISOString().slice(0, 10);
}


export function generateDatesForYear(year: number): string[] {
  const jan1 = startOfYear(year);
  const dayOfWeek = jan1.getUTCDay(); 
  const start = addDays(jan1, -dayOfWeek);
  const dates: string[] = [];
  for (let i = 0; i < 53 * 7; i++) {
    dates.push(formatISO(addDays(start, i)));
  }
  return dates;
}

export function isFutureDate(date: string) {
  const today = new Date();
  const d = new Date(date + "T00:00:00Z");
  return d > today;
}

export function initialCells(year: number): Cell[] {
  return generateDatesForYear(year).map((d) => ({ date: d, level: 0 }));
}