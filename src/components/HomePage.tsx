"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Chapter } from "@/data/types";
import Navigation from "./Navigation";
import SlokaCard from "./SlokaCard";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, BookOpen, Sparkles, Globe, Heart } from "lucide-react";

interface HomePageProps {
  chapters: Chapter[];
}

/* Animated counter hook */
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let frame: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, start]);
  return count;
}

/* Featured verses - curated inspiring slokas */
const FEATURED_VERSES = [
  { chapter: 2, sloka: 47, key: "karmanyeva" },
  { chapter: 2, sloka: 14, key: "contact" },
  { chapter: 4, sloka: 7, key: "dharma" },
  { chapter: 2, sloka: 20, key: "eternal" },
  { chapter: 9, sloka: 22, key: "yoga" },
  { chapter: 6, sloka: 5, key: "self" },
];

export default function HomePage({ chapters }: HomePageProps) {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const currentChapter = selectedChapter
    ? chapters.find((c) => c.number === selectedChapter)
    : null;

  /* Pick a random featured verse */
  const featuredVerse = useMemo(() => {
    const pick = FEATURED_VERSES[Math.floor(Math.random() * FEATURED_VERSES.length)];
    const ch = chapters.find((c) => c.number === pick.chapter);
    return ch?.slokas.find((s) => s.sloka === pick.sloka) ?? null;
  }, [chapters]);

  /* Animated counters */
  const chaptersCount = useCounter(18, 1800, countersVisible);
  const versesCount = useCounter(700, 2200, countersVisible);
  const languagesCount = useCounter(3, 1200, countersVisible);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      /* Reading progress */
      if (selectedChapter) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedChapter]);

  /* Intersection observer for stats counter animation */
  useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCountersVisible(true); },
      { threshold: 0.3 }
    );
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, [selectedChapter]);

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
      {/* Reading progress bar */}
      {selectedChapter && (
        <div
          className="reading-progress"
          style={{ width: `${scrollProgress}%` }}
        />
      )}

      <Navigation
        chapters={chapters}
        selectedChapter={selectedChapter}
        onSelectChapter={setSelectedChapter}
        onSelectSloka={handleSelectSloka}
      />

      <main className="flex-1 lg:ml-0 relative z-10">
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
          <AnimatePresence mode="wait">
            {!selectedChapter ? (
              /* Landing / Chapter Grid */
              <motion.div
                key="landing"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                {/* Hero Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-16 relative"
                >
                  {/* Gradient background glow */}
                  <div className="absolute inset-0 -top-20 flex items-center justify-center pointer-events-none">
                    <div className="w-96 h-96 rounded-full bg-gradient-to-br from-saffron/10 via-gold/5 to-transparent blur-3xl" />
                  </div>

                  {/* Om Symbol */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="relative inline-block mb-6"
                  >
                    <span className="text-7xl block animate-float" style={{ lineHeight: 1.2 }}>
                      ॐ
                    </span>
                    {/* Lotus decorations */}
                    <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-2xl opacity-30">✿</span>
                    <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-2xl opacity-30">✿</span>
                  </motion.div>

                  <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-3 relative">
                    Bhagavad Gita
                  </h1>
                  <p className="font-serif text-xl lg:text-2xl text-saffron italic mb-2">
                    श्रीमद्भगवद्गीता
                  </p>
                  <p className="text-warm-gray max-w-xl mx-auto leading-relaxed">
                    The Song of God — timeless wisdom spoken by Lord Krishna to
                    Arjuna on the battlefield of Kurukshetra
                  </p>

                  {/* Decorative divider */}
                  <div className="flex items-center justify-center gap-3 mt-6 mb-2">
                    <span className="block w-12 h-px bg-gradient-to-r from-transparent to-saffron/50" />
                    <span className="text-saffron text-xs">❈</span>
                    <span className="block w-12 h-px bg-gradient-to-l from-transparent to-saffron/50" />
                  </div>

                  {/* Animated Statistics */}
                  <div
                    ref={statsRef}
                    className="flex items-center justify-center gap-8 lg:gap-12 mt-8"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-center"
                    >
                      <span className="block text-3xl lg:text-4xl font-serif font-bold text-saffron">
                        {chaptersCount}
                      </span>
                      <span className="text-xs text-warm-gray flex items-center gap-1 mt-1">
                        <BookOpen className="w-3 h-3" /> Chapters
                      </span>
                    </motion.div>
                    <div className="w-px h-10 bg-border" />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-center"
                    >
                      <span className="block text-3xl lg:text-4xl font-serif font-bold text-gold-dark">
                        {versesCount}
                      </span>
                      <span className="text-xs text-warm-gray flex items-center gap-1 mt-1">
                        <Sparkles className="w-3 h-3" /> Verses
                      </span>
                    </motion.div>
                    <div className="w-px h-10 bg-border" />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-center"
                    >
                      <span className="block text-3xl lg:text-4xl font-serif font-bold text-saffron-dark">
                        {languagesCount}
                      </span>
                      <span className="text-xs text-warm-gray flex items-center gap-1 mt-1">
                        <Globe className="w-3 h-3" /> Languages
                      </span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Featured Verse */}
                {featuredVerse && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="max-w-2xl mx-auto mb-16"
                  >
                    <div className="text-center mb-4">
                      <span className="text-xs font-semibold text-saffron uppercase tracking-widest">
                        Featured Verse
                      </span>
                    </div>
                    <div className="relative bg-gradient-to-br from-card-bg to-cream border border-saffron/20 rounded-2xl p-6 lg:p-8 text-center card-glow">
                      {/* Corner ornaments */}
                      <span className="absolute top-3 left-4 text-saffron/20 text-lg">❊</span>
                      <span className="absolute top-3 right-4 text-saffron/20 text-lg">❊</span>
                      <span className="absolute bottom-3 left-4 text-saffron/20 text-lg">❊</span>
                      <span className="absolute bottom-3 right-4 text-saffron/20 text-lg">❊</span>

                      <p className="font-devanagari text-lg lg:text-xl text-foreground leading-relaxed mb-4">
                        {featuredVerse.sanskrit_devanagari}
                      </p>
                      <p className="text-sm text-warm-gray italic leading-relaxed mb-3">
                        {featuredVerse.english_simplified}
                      </p>
                      <button
                        onClick={() => handleSelectSloka(featuredVerse.chapter, featuredVerse.sloka)}
                        className="text-xs text-saffron hover:text-saffron-dark transition-colors font-medium"
                      >
                        — Chapter {featuredVerse.chapter}, Verse {featuredVerse.sloka} →
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Chapter heading */}
                <div className="text-center mb-8">
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    Explore the Chapters
                  </h2>
                  <p className="text-sm text-warm-gray mt-1">
                    Select a chapter to begin your journey
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-6xl mx-auto">
                  {chapters.map((chapter, i) => (
                    <motion.button
                      key={chapter.number}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      whileHover={{ y: -4 }}
                      onClick={() => setSelectedChapter(chapter.number)}
                      className="bg-card-bg border border-border rounded-2xl p-5 text-left hover:border-saffron/50 transition-all group card-glow gradient-border relative overflow-hidden"
                    >
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-saffron/0 via-transparent to-gold/0 group-hover:from-saffron/3 group-hover:to-gold/3 transition-all duration-500 rounded-2xl pointer-events-none" />

                      <div className="flex items-start justify-between mb-3 relative">
                        {/* Decorative chapter number with circle background */}
                        <div className="relative">
                          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-saffron/15 to-gold/10 flex items-center justify-center group-hover:from-saffron/25 group-hover:to-gold/20 transition-all duration-300">
                            <span className="text-xl font-serif font-bold text-saffron">
                              {chapter.number}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs text-warm-gray bg-cream px-2 py-1 rounded-full">
                          {chapter.total_slokas} verses
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-saffron transition-colors relative">
                        {chapter.name_english}
                      </h3>
                      <p className="text-sm text-saffron-dark mt-1 italic relative">
                        {chapter.name_sanskrit}
                      </p>
                      <p className="text-xs text-warm-gray mt-1 relative">
                        {chapter.name_telugu}
                      </p>
                      <p className="text-sm text-warm-gray mt-3 line-clamp-2 relative">
                        {chapter.description}
                      </p>
                    </motion.button>
                  ))}
                </div>

                {/* Footer */}
                <footer className="mt-20 mb-8 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="block w-16 h-px bg-gradient-to-r from-transparent to-border" />
                    <span className="text-saffron/40">✿</span>
                    <span className="text-gold/40">ॐ</span>
                    <span className="text-saffron/40">✿</span>
                    <span className="block w-16 h-px bg-gradient-to-l from-transparent to-border" />
                  </div>
                  <div className="text-center text-xs text-warm-gray space-y-1.5">
                    <p>
                      Translations simplified from traditional commentaries by Swami
                      Sivananda, Swami Mukundananda, and Gita Press Gorakhpur.
                    </p>
                    <p>
                      Telugu explanations are conversational simplifications for easy
                      understanding.
                    </p>
                    <p className="flex items-center justify-center gap-1 mt-3 text-warm-gray/60">
                      Built with <Heart className="w-3 h-3 text-deep-red" /> for seekers of truth
                    </p>
                  </div>
                </footer>
              </motion.div>
            ) : (
              /* Chapter View */
              <motion.div
                key={`chapter-${selectedChapter}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-8"
                >
                  <button
                    onClick={() => {
                      setSelectedChapter(null);
                      setScrollProgress(0);
                    }}
                    className="text-sm text-saffron hover:text-saffron-dark transition-colors mb-4 inline-flex items-center gap-1"
                  >
                    ← All Chapters
                  </button>
                  {currentChapter && (
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron/20 to-gold/10 flex items-center justify-center">
                          <span className="text-2xl font-serif font-bold text-saffron">
                            {currentChapter.number}
                          </span>
                        </div>
                        <span className="text-sm text-warm-gray">
                          Chapter {currentChapter.number} of 18
                        </span>
                      </div>
                      <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mt-3">
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
                        onClick={() => {
                          setSelectedChapter(currentChapter.number - 1);
                          scrollToTop();
                        }}
                        className="px-4 py-2 bg-card-bg border border-border rounded-xl hover:border-saffron text-sm text-foreground transition-colors"
                      >
                        ← Chapter {currentChapter.number - 1}
                      </button>
                    ) : (
                      <div />
                    )}
                    {currentChapter.number < 18 && (
                      <button
                        onClick={() => {
                          setSelectedChapter(currentChapter.number + 1);
                          scrollToTop();
                        }}
                        className="px-4 py-2 bg-saffron text-white rounded-xl hover:bg-saffron-dark text-sm transition-colors"
                      >
                        Chapter {currentChapter.number + 1} →
                      </button>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-saffron text-white rounded-full shadow-lg hover:bg-saffron-dark transition-colors z-40"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
