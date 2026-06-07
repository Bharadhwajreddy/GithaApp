"use client";

import { useState, useEffect, useRef } from "react";
import { Chapter } from "@/data/types";
import Navigation from "./Navigation";
import SlokaCard from "./SlokaCard";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { ArrowUp, BookOpen, Sparkles } from "lucide-react";

interface HomePageProps {
  chapters: Chapter[];
}

export default function HomePage({ chapters }: HomePageProps) {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const currentChapter = selectedChapter
    ? chapters.find((c) => c.number === selectedChapter)
    : null;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectSloka = (chapter: number, _sloka: number) => {
    setSelectedChapter(chapter);
    setTimeout(() => {
      const el = document.getElementById(`sloka-${chapter}-${_sloka}`);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  };

  return (
    <div className="flex min-h-screen">
      <Navigation
        chapters={chapters}
        selectedChapter={selectedChapter}
        onSelectChapter={setSelectedChapter}
        onSelectSloka={handleSelectSloka}
      />

      <main className="flex-1 lg:ml-0">
        {/* Desktop Top Bar */}
        <div className="hidden lg:flex items-center justify-between px-8 py-4 border-b border-border bg-card-bg/80 backdrop-blur-md sticky top-0 z-30">
          <SearchBar chapters={chapters} onSelectSloka={handleSelectSloka} />
          <div className="flex items-center gap-3">
            <span className="text-sm text-warm-gray">
              {chapters.reduce((sum, c) => sum + c.total_slokas, 0)} verses across{" "}
              {chapters.length} chapters
            </span>
            <ThemeToggle />
          </div>
        </div>

        <div
          ref={contentRef}
          className="px-4 lg:px-8 py-6 lg:py-8 pt-28 lg:pt-8"
        >
          {!selectedChapter ? (
            /* Landing / Chapter Grid */
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <div className="text-6xl mb-4">🙏</div>
                <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-3">
                  Bhagavad Gita
                </h1>
                <p className="font-serif text-xl text-saffron italic mb-2">
                  श्रीमद्भगवद्गीता
                </p>
                <p className="text-warm-gray max-w-xl mx-auto">
                  The Song of God — 700 verses of timeless wisdom spoken by Lord
                  Krishna to Arjuna on the battlefield of Kurukshetra
                </p>
                <div className="flex items-center justify-center gap-6 mt-6 text-sm text-warm-gray">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-saffron" /> 18 Chapters
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-gold" /> 700 Verses
                  </span>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {chapters.map((chapter, i) => (
                  <motion.button
                    key={chapter.number}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(255,153,51,0.15)" }}
                    onClick={() => setSelectedChapter(chapter.number)}
                    className="bg-card-bg border border-border rounded-2xl p-5 text-left hover:border-saffron/50 transition-all group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-2xl font-serif font-bold text-saffron">
                        {chapter.number}
                      </span>
                      <span className="text-xs text-warm-gray bg-cream px-2 py-1 rounded-full">
                        {chapter.total_slokas} verses
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-saffron transition-colors">
                      {chapter.name_english}
                    </h3>
                    <p className="text-sm text-saffron-dark mt-1 italic">
                      {chapter.name_sanskrit}
                    </p>
                    <p className="text-xs text-warm-gray mt-1">
                      {chapter.name_telugu}
                    </p>
                    <p className="text-sm text-warm-gray mt-3 line-clamp-2">
                      {chapter.description}
                    </p>
                  </motion.button>
                ))}
              </div>

              {/* Attribution */}
              <div className="text-center mt-16 mb-8 text-xs text-warm-gray">
                <p>
                  Translations simplified from traditional commentaries by Swami
                  Sivananda, Swami Mukundananda, and Gita Press Gorakhpur.
                </p>
                <p className="mt-1">
                  Telugu explanations are conversational simplifications for easy
                  understanding.
                </p>
              </div>
            </div>
          ) : (
            /* Chapter View */
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-8"
              >
                <button
                  onClick={() => setSelectedChapter(null)}
                  className="text-sm text-saffron hover:text-saffron-dark transition-colors mb-4 inline-flex items-center gap-1"
                >
                  ← All Chapters
                </button>
                {currentChapter && (
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-serif font-bold text-saffron">
                        Chapter {currentChapter.number}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground">
                      {currentChapter.name_english}
                    </h2>
                    <p className="font-serif text-lg text-saffron italic mt-1">
                      {currentChapter.name_sanskrit}
                    </p>
                    <p className="text-sm text-warm-gray mt-1">
                      {currentChapter.name_telugu}
                    </p>
                    <p className="text-warm-gray mt-3 max-w-2xl">
                      {currentChapter.description}
                    </p>
                    <p className="text-sm text-warm-gray mt-2">
                      {currentChapter.total_slokas} verses
                    </p>
                  </div>
                )}
              </motion.div>

              <div className="space-y-4 max-w-3xl">
                {currentChapter?.slokas.map((sloka, i) => (
                  <div
                    key={`${sloka.chapter}-${sloka.sloka}`}
                    id={`sloka-${sloka.chapter}-${sloka.sloka}`}
                  >
                    <SlokaCard sloka={sloka} index={i} />
                  </div>
                ))}
              </div>

              {/* Chapter Navigation */}
              {currentChapter && (
                <div className="flex justify-between items-center mt-12 mb-8 max-w-3xl">
                  {currentChapter.number > 1 ? (
                    <button
                      onClick={() =>
                        setSelectedChapter(currentChapter.number - 1)
                      }
                      className="px-4 py-2 bg-card-bg border border-border rounded-xl hover:border-saffron text-sm text-foreground transition-colors"
                    >
                      ← Chapter {currentChapter.number - 1}
                    </button>
                  ) : (
                    <div />
                  )}
                  {currentChapter.number < 18 && (
                    <button
                      onClick={() =>
                        setSelectedChapter(currentChapter.number + 1)
                      }
                      className="px-4 py-2 bg-saffron text-white rounded-xl hover:bg-saffron-dark text-sm transition-colors"
                    >
                      Chapter {currentChapter.number + 1} →
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Scroll to top */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-saffron text-white rounded-full shadow-lg hover:bg-saffron-dark transition-colors z-40"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
}
