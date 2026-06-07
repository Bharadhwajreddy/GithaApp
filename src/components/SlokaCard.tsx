"use client";

import { useState } from "react";
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

  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    sloka.youtube_search_query
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="bg-card-bg border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-5 py-4 flex items-start justify-between text-left"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-saffron bg-saffron/10 px-2.5 py-0.5 rounded-full">
              Verse {sloka.sloka}
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
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="ml-3 mt-1 text-warm-gray"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
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
            <div className="px-5 pb-5 space-y-4">
              {/* Pronunciation Section */}
              <div className="bg-cream rounded-xl p-4">
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

              {/* English Translation */}
              <div className="bg-cream rounded-xl p-4">
                <h4 className="text-xs font-semibold text-saffron-dark uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <Globe className="w-3.5 h-3.5" />
                  English Translation
                </h4>
                <p className="text-sm text-foreground leading-relaxed">
                  {sloka.english_simplified}
                </p>
              </div>

              {/* Telugu Explanation */}
              <div className="bg-cream rounded-xl p-4">
                <h4 className="text-xs font-semibold text-saffron-dark uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <MessageCircle className="w-3.5 h-3.5" />
                  Telugu Explanation
                </h4>
                <p className="text-sm text-foreground leading-relaxed">
                  {sloka.telugu_conversational}
                </p>
              </div>

              {/* YouTube Section */}
              <div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
