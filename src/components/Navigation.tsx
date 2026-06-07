"use client";

import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Chapter } from "@/data/types";
import ChapterList from "./ChapterList";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";

interface NavigationProps {
  chapters: Chapter[];
  selectedChapter: number | null;
  onSelectChapter: (chapter: number) => void;
  onSelectSloka: (chapter: number, sloka: number) => void;
}

export default function Navigation({
  chapters,
  selectedChapter,
  onSelectChapter,
  onSelectSloka,
}: NavigationProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 bg-sidebar-bg border-r border-border h-screen sticky top-0 overflow-hidden">
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🙏</span>
            <div>
              <h1 className="font-serif text-lg font-bold text-foreground">
                Bhagavad Gita
              </h1>
              <p className="text-xs text-warm-gray">
                700 Verses of Divine Wisdom
              </p>
            </div>
          </div>
        </div>
        <ChapterList
          chapters={chapters}
          selectedChapter={selectedChapter}
          onSelectChapter={onSelectChapter}
        />
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-card-bg/95 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setIsMobileOpen(true)}
            className="p-2 -ml-2 text-foreground"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xl">🙏</span>
            <h1 className="font-serif text-base font-bold text-foreground">
              Bhagavad Gita
            </h1>
          </div>
          <ThemeToggle />
        </div>
        <div className="px-4 pb-3">
          <SearchBar chapters={chapters} onSelectSloka={onSelectSloka} />
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="lg:hidden fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-sidebar-bg z-50 shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-saffron" />
                  <span className="font-serif font-semibold">Chapters</span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ChapterList
                chapters={chapters}
                selectedChapter={selectedChapter}
                onSelectChapter={onSelectChapter}
                isMobile
                onClose={() => setIsMobileOpen(false)}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
