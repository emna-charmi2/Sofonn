"use client"

import { useState, useEffect } from "react"
import { SOLUTION } from "../constants/Solutions"

type Phase = "typing" | "pause" | "erasing"

export default function TypingText() {
  const WORDS  = SOLUTION.name
  const COLORS = SOLUTION.colors

  const [wordIndex,  setWordIndex]  = useState(0)
  const [displayed,  setDisplayed]  = useState("")
  const [phase,      setPhase]      = useState<Phase>("typing")
  const [showCursor, setShowCursor] = useState(true)

  const currentWord  = WORDS[wordIndex]
  const currentColor = COLORS[wordIndex]

  // Clignotement curseur
  useEffect(() => {
    const blink = setInterval(() => setShowCursor(p => !p), 530)
    return () => clearInterval(blink)
  }, [])

  // Machine à états typing → pause → erasing → mot suivant
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if (phase === "typing") {
      if (displayed.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length + 1))
        }, 110)
      } else {
        timeout = setTimeout(() => setPhase("pause"), 1500)
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("erasing"), 300)
    } else if (phase === "erasing") {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 65)
      } else {
        setWordIndex(p => (p + 1) % WORDS.length)
        setPhase("typing")
      }
    }

    return () => clearTimeout(timeout)
  }, [phase, displayed, currentWord, WORDS.length])

  return (
    // Hérite du font + taille du parent (h1 avec font-lato-regular ... xl:text-6xl font-bold)
    <span className="inline-flex items-baseline">

      {/* Mot coloré — même classe que le h1 parent */}
      <span
        style={{ color: currentColor }}
        className="font-lato-regular text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight transition-colors duration-300"
      >
        {displayed}
      </span>

      {/* Curseur | blanc épais — style sofonn.com */}
      <span
        aria-hidden="true"
        className="inline-block font-lato-regular text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white ml-0.5 select-none"
        style={{ opacity: showCursor ? 1 : 0, transition: "opacity 0.1s" }}
      >
        |
      </span>

    </span>
  )
}