import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const reduceName = (title: string) => {
  const limit = 20;
  if (title.length > limit) return title.trim().slice(0, limit) + "...";
  return title;
};
