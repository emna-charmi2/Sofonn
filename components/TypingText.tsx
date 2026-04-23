"use client";

import { useState, useEffect } from "react";
import { SOLUTION } from "@/lib/constants/Solutions";

type Phase = "typing" | "pause" | "erasing";

export default function TypingText() {
  const WORDS = SOLUTION.name;
  const COLORS = SOLUTION.colors;

  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const [showCursor, setShowCursor] = useState(true);

  const currentWord = WORDS[wordIndex];
  const currentColor = COLORS[wordIndex];

  // Taille de police dynamique pour correspondre exactement au titre H1
  const dynamicFontSize = {
    fontSize: "clamp(1.8rem, 4vw, 3.5rem)", // Ajusté pour le sous-titre "Marine ..."
    lineHeight: "1.1",
  };

  // Clignotement curseur
  useEffect(() => {
    const blink = setInterval(() => setShowCursor((p) => !p), 530);
    return () => clearInterval(blink);
  }, []);

  // Machine à états
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length + 1));
        }, 110);
      } else {
        timeout = setTimeout(() => setPhase("pause"), 1500);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("erasing"), 300);
    } else if (phase === "erasing") {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 65);
      } else {
        setWordIndex((p) => (p + 1) % WORDS.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, displayed, currentWord, WORDS.length]);

  return (
    <span className="inline-flex items-center">
      {/* Mot coloré dynamique */}
      <span
        style={{ 
          color: currentColor, 
          ...dynamicFontSize 
        }}
        className="font-mulish font-bold transition-colors duration-500"
      >
        {displayed}
      </span>

      {/* Curseur vertical épais */}
      <span
        aria-hidden="true"
        style={{ 
          opacity: showCursor ? 1 : 0, 
          transition: "opacity 0.1s",
          ...dynamicFontSize 
        }}
        className="inline-block font-mulish font-bold text-white ml-1 select-none"
      >
        |
      </span>
    </span>
  );
}