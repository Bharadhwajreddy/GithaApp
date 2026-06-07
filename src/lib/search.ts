import { Chapter, Sloka } from "@/data/types";

export interface SearchResult {
  sloka: Sloka;
  chapterName: string;
  matchField: string;
}

export function searchSlokas(
  chapters: Chapter[],
  query: string
): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  for (const chapter of chapters) {
    for (const sloka of chapter.slokas) {
      let matchField = "";
      if (sloka.english_simplified.toLowerCase().includes(q)) {
        matchField = "English Translation";
      } else if (sloka.telugu_conversational.toLowerCase().includes(q)) {
        matchField = "Telugu Explanation";
      } else if (sloka.sanskrit_iast.toLowerCase().includes(q)) {
        matchField = "Sanskrit (IAST)";
      } else if (sloka.sanskrit_devanagari.includes(q)) {
        matchField = "Sanskrit (Devanagari)";
      }

      if (matchField) {
        results.push({
          sloka,
          chapterName: chapter.name_english,
          matchField,
        });
      }
    }
  }

  return results.slice(0, 50);
}
