"use client";

import { useState, useCallback } from "react";
import { Sloka } from "@/data/types";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Volume2,
  VolumeX,
  Type,
  Play,
  Globe,
  MessageCircle,
  Copy,
  Check,
  Bookmark,
} from "lucide-react";
import { speakSanskrit, stopSpeaking, isTTSSupported } from "@/lib/pronunciation";

interface SlokaCardProps {
  sloka: Sloka;
  index: number;
}

export default function SlokaCard({ sloka, index }: SlokaCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showPhonetic, setShowPhonetic] = useState(false);
  const [showYouTube, setShowYouTube] = useState(false);
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleSpeak = () => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      speakSanskrit(sloka.sanskrit_iast);
      setIsSpeaking(true);
      setTimeout(() => setIsSpeaking(false), 10000);
    }
  };

  const handleCopy = useCallback(async () => {
    const text = `${sloka.sanskrit_devanagari}\n\n${sloka.english_simplified}\n\n— Bhagavad Gita, Chapter ${sloka.chapter}, Verse ${sloka.sloka}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  }, [sloka]);

  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    sloka.youtube_search_query
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="bg-card-bg border border-border rounded-2xl overflow-hidden shadow-sm card-glow gradient-border"
    >
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-5 py-4 flex items-start justify-between text-left"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            {/* Verse number badge */}
            <span className="inline-flex items-center gap-1 text-xs font-bold text-saffron bg-gradient-to-r from-saffron/15 to-gold/10 px-3 py-1 rounded-full border border-saffron/20">
              <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
              {sloka.chapter}.{sloka.sloka}
            </span>
          </div>
          <p className="font-devanagari text-lg leading-relaxed text-foreground">
            {sloka.sanskrit_devanagari}
          </p>
          {!isExpanded && (
            <p className="text-sm text-warm-gray mt-2 line-clamp-2">
              {sloka.english_simplified}
            </p>
          )}
        </div>
        <div className="flex items-center gap-1 ml-3 mt-1">
          {/* Bookmark icon */}
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              setBookmarked(!bookmarked);
            }}
            whileTap={{ scale: 0.85 }}
            className="p-1.5 rounded-lg hover:bg-saffron/10 transition-colors"
            title={bookmarked ? "Remove bookmark" : "Bookmark verse"}
          >
            <Bookmark
              className={`w-4 h-4 transition-colors ${
                bookmarked ? "text-saffron fill-saffron" : "text-warm-gray/40"
              }`}
            />
          </motion.button>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="text-warm-gray"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">
              {/* Copy button */}
              <div className="flex justify-end mb-3">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-cream hover:bg-saffron/10 text-warm-gray hover:text-saffron transition-colors border border-border"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-green-600" />
                      <span className="text-green-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      Copy verse
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-4">
                {/* Pronunciation Section */}
                <div className="bg-gradient-to-br from-cream to-cream/60 rounded-xl p-4 border border-saffron/10">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-semibold text-saffron-dark uppercase tracking-wider flex items-center gap-1.5">
                      <Type className="w-3.5 h-3.5" />
                      Pronunciation
                    </h4>
                    <div className="flex gap-2">
                      {isTTSSupported() && (
                        <button
                          onClick={handleSpeak}
                          className="p-1.5 rounded-lg bg-saffron/10 hover:bg-saffron/20 transition-colors"
                          title={isSpeaking ? "Stop" : "Listen"}
                        >
                          {isSpeaking ? (
                            <VolumeX className="w-4 h-4 text-deep-red" />
                          ) : (
                            <Volume2 className="w-4 h-4 text-saffron" />
                          )}
                        </button>
                      )}
                      <button
                        onClick={() => setShowPhonetic(!showPhonetic)}
                        className="text-xs px-2 py-1 rounded-lg bg-saffron/10 hover:bg-saffron/20 text-saffron transition-colors"
                      >
                        {showPhonetic ? "IAST" : "Phonetic"}
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-foreground italic leading-relaxed">
                    {sloka.sanskrit_iast}
                  </p>
                </div>

                {/* Section divider */}
                <div className="flex items-center gap-3 px-2">
                  <span className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  <span className="text-saffron/30 text-xs">●</span>
                  <span className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>

                {/* English Translation */}
                <div className="bg-gradient-to-br from-cream to-cream/60 rounded-xl p-4 border border-saffron/10">
                  <h4 className="text-xs font-semibold text-saffron-dark uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <Globe className="w-3.5 h-3.5" />
                    English Translation
                  </h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    {sloka.english_simplified}
                  </p>
                </div>

                {/* Section divider */}
                <div className="flex items-center gap-3 px-2">
                  <span className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  <span className="text-saffron/30 text-xs">●</span>
                  <span className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>

                {/* Telugu Explanation */}
                <div className="bg-gradient-to-br from-cream to-cream/60 rounded-xl p-4 border border-saffron/10">
                  <h4 className="text-xs font-semibold text-saffron-dark uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <MessageCircle className="w-3.5 h-3.5" />
                    Telugu Explanation
                  </h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    {sloka.telugu_conversational}
                  </p>
                </div>

                {/* YouTube Section */}
                <div className="pt-1">
                  <button
                    onClick={() => setShowYouTube(!showYouTube)}
                    className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    {showYouTube ? "Hide Video Search" : "Watch Explanation on YouTube"}
                  </button>
                  <AnimatePresence>
                    {showYouTube && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-3 overflow-hidden"
                      >
                        <a
                          href={youtubeSearchUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors text-sm font-medium"
                        >
                          <Play className="w-4 h-4" />
                          Search on YouTube
                        </a>
                        <p className="text-xs text-warm-gray mt-2">
                          Search: &quot;{sloka.youtube_search_query}&quot;
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
