import { Chapter } from "./types";
import { chapters1to6 } from "./chapters1-6";
import { chapters7to12 } from "./chapters7-12";
import { chapters13to18 } from "./chapters13-18";

export type { Chapter, Sloka } from "./types";

export const allChapters: Chapter[] = [
  ...chapters1to6,
  ...chapters7to12,
  ...chapters13to18,
];

export function getChapter(number: number): Chapter | undefined {
  return allChapters.find((c) => c.number === number);
}

export function getTotalSlokas(): number {
  return allChapters.reduce((sum, c) => sum + c.slokas.length, 0);
}
