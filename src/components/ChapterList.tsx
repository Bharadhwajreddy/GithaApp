"use client";

import { Chapter } from "@/data/types";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import clsx from "clsx";

interface ChapterListProps {
  chapters: Chapter[];
  selectedChapter: number | null;
  onSelectChapter: (chapter: number) => void;
  isMobile?: boolean;
  onClose?: () => void;
}

export default function ChapterList({
  chapters,
  selectedChapter,
  onSelectChapter,
  isMobile,
  onClose,
}: ChapterListProps) {
  return (
    <div className={clsx("h-full overflow-y-auto", isMobile ? "p-4" : "p-3")}>
      <div className="flex items-center gap-2 mb-4 px-2">
        <BookOpen className="w-5 h-5 text-saffron" />
        <h2 className="font-serif text-lg font-semibold text-foreground">
          Chapters
        </h2>
      </div>

      <div className="space-y-1">
        {chapters.map((chapter, i) => (
          <motion.button
            key={chapter.number}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.03 }}
            onClick={() => {
              onSelectChapter(chapter.number);
              onClose?.();
            }}
            className={clsx(
              "w-full text-left px-3 py-2.5 rounded-lg transition-all group",
              selectedChapter === chapter.number
                ? "bg-saffron text-white shadow-md"
                : "hover:bg-cream text-foreground"
            )}
          >
            <div className="flex items-start gap-2">
              <span
                className={clsx(
                  "text-xs font-bold mt-0.5 min-w-[24px]",
                  selectedChapter === chapter.number
                    ? "text-white/80"
                    : "text-saffron"
                )}
              >
                {chapter.number}.
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">
                  {chapter.name_english}
                </p>
                <p
                  className={clsx(
                    "text-xs truncate",
                    selectedChapter === chapter.number
                      ? "text-white/70"
                      : "text-warm-gray"
                  )}
                >
                  {chapter.name_sanskrit} &middot; {chapter.total_slokas} verses
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
