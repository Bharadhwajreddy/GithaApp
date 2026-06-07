"use client";

import { useState, useCallback } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { searchSlokas, SearchResult } from "@/lib/search";
import { Chapter } from "@/data/types";

interface SearchBarProps {
  chapters: Chapter[];
  onSelectSloka: (chapter: number, sloka: number) => void;
}

export default function SearchBar({ chapters, onSelectSloka }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = useCallback(
    (value: string) => {
      setQuery(value);
      if (value.length >= 2) {
        const found = searchSlokas(chapters, value);
        setResults(found);
        setIsOpen(true);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    },
    [chapters]
  );

  const handleSelect = (r: SearchResult) => {
    onSelectSloka(r.sloka.chapter, r.sloka.sloka);
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-warm-gray" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search slokas..."
          className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-card-bg border border-border text-foreground placeholder-warm-gray focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron transition-all text-sm"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setResults([]);
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <X className="w-4 h-4 text-warm-gray" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-card-bg border border-border rounded-xl shadow-2xl max-h-80 overflow-y-auto z-50"
          >
            {results.map((r, i) => (
              <button
                key={`${r.sloka.chapter}-${r.sloka.sloka}-${i}`}
                onClick={() => handleSelect(r)}
                className="w-full px-4 py-3 text-left hover:bg-cream border-b border-border last:border-b-0 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm font-semibold text-saffron">
                      Chapter {r.sloka.chapter}, Verse {r.sloka.sloka}
                    </span>
                    <p className="text-xs text-warm-gray mt-0.5">
                      {r.chapterName}
                    </p>
                  </div>
                  <span className="text-xs text-warm-gray bg-cream px-2 py-0.5 rounded">
                    {r.matchField}
                  </span>
                </div>
                <p className="text-xs text-foreground mt-1 line-clamp-2">
                  {r.sloka.english_simplified}
                </p>
              </button>
            ))}
          </motion.div>
        )}
        {isOpen && query.length >= 2 && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-card-bg border border-border rounded-xl shadow-2xl p-4 z-50"
          >
            <p className="text-sm text-warm-gray text-center">
              No results found for &quot;{query}&quot;
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
