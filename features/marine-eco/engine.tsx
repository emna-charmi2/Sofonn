"use client";

import { useEffect, useRef, useState } from "react";
import AOS from "aos";

// Données statistiques : valeurs numériques + unité
const STATS = [
  {value: 98.2, unit: "%",  label: "CO₂ Measurement Accuracy" },
  {value: 25,   unit: "%",  label: "Average Fuel Cost Reduction" },
  {value: 100,  unit: "%",  label: "Regulatory Coverage" },
  { value: 60,   unit: "Hz", label: "Sensor Polling Rate" },
];



// Hook de comptage animé
function useCountUp(target: number, duration = 1800, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(parseFloat((ease * target).toFixed(1)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [active, target, duration]);
  return val;
}

// Carte statistique avec effet glassmorphism (vert/émeraude)
function StatCard({ stat, active }: { stat: typeof STATS[0]; active: boolean }) {
  const animatedValue = useCountUp(stat.value, 1600, active);
  const displayValue = Math.round(animatedValue);
  return (
    <div
      className="
        text-center
        backdrop-blur-md
        bg-emerald-500/5
        border border-emerald-500/20
        rounded-3xl
        p-8
        transition-all
        duration-300
        hover:border-emerald-500/40
        hover:bg-emerald-500/10
        hover:shadow-lg
        hover:shadow-emerald-500/10
      "
    >
      <div className="text-5xl font-bold text-emerald-400 tabular-nums">
        {displayValue}
        <span className="text-2xl ml-1 font-normal">{stat.unit}</span>
      </div>
      <div className="text-xs mt-3 leading-snug max-w-[120px] mx-auto">
        {stat.label}
      </div>
    </div>
  );
}

export default function IntelligenceEngine() {
  const [statsOn, setStatsOn] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsOn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />

      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">

        <div className="w-[80%] max-w-6xl mx-auto relative z-10">
          {/* En-tête */}
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-bold tracking-tighter  mb-5"
              data-aos="fade-up"
            >
              From Raw Data to Actionable Intelligence
            </h2>
            <div
              className="w-16 h-0.75 bg-emerald-400 rounded-full mx-auto mt-6"
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <p
              className="max-w-2xl mx-auto mt-8 text-zinc-400"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Marine-ECO transforms multi-stream sensor readings into clear, decisive insights.
              No spreadsheets, no guesswork — just real-time visibility and a single source of truth
              for your entire fleet.
            </p>
          </div>

          {/* Grille 2 colonnes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Colonne gauche : liste d'avantages */}
            <div className="flex flex-col justify-center gap-4">
              <ul
                className="list-none space-y-4 mt-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {[
                  "Reduce CO₂ reporting errors",
                  "Cut manual log time",
                  "100% visibility",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-lg md:text-xl leading-relaxed font-semibold"
                  >
                    <span
                      className="material-symbols-outlined text-emerald-400"
                      style={{ fontSize: "1.2rem" }}
                    >
                      verified
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne droite : statistiques en verre (glass effect) */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {STATS.map((stat, idx) => (
                <StatCard key={idx} stat={stat} active={statsOn} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}