export interface Sloka {
  chapter: number;
  sloka: number;
  sanskrit_devanagari: string;
  sanskrit_iast: string;
  english_simplified: string;
  telugu_conversational: string;
  youtube_search_query: string;
}

export interface Chapter {
  number: number;
  name_sanskrit: string;
  name_english: string;
  name_telugu: string;
  description: string;
  total_slokas: number;
  slokas: Sloka[];
}
