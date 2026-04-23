"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function CompetitiveEco() {
  const EDGE_ITEMS = [
    {
      icon: "trending_up",
      title: "Cut Your Carbon Footprint",
      body: "Pinpoint your highest-emission sources in seconds. Marine-ECO maps every gram of CO₂, NOₓ, and SOₓ across your fleet so you can act with surgical precision — not guesswork.",
      metric: "-32%",
      metricLabel: "avg. CO₂ reduction",
    },
    {
      icon: "payments",
      title: "Reduce Operational Costs",
      body: "Fuel is your biggest variable cost. Our real-time optimization engine continuously identifies voyage inefficiencies, delivering an average 15–25% reduction in fuel spend within the first quarter.",
      metric: "-22%",
      metricLabel: "fuel spend saved",
    },
    {
      icon: "verified_user",
      title: "Stay Ahead of Regulations",
      body: "MARPOL, IMO 2030, CII, EEXI — compliance deadlines don't wait. Marine-ECO automates documentation and sends proactive alerts before any certification or threshold is breached.",
      metric: "100%",
      metricLabel: "audit-ready",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120, easing: "ease-out-cubic" });
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />

      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
  
        <div className="w-[90%] max-w-4xl mx-auto relative z-10">
          {/* En-tête centré */}
          <div className="text-center mb-16">
          
            <h2 className="text-5xl font-bold tracking-tighter text-white" data-aos="fade-up" data-aos-delay="100">
              Your Competitive Edge
            </h2>
            <div
              className="w-16 h-0.75 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 rounded-full mx-auto mt-6"
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <p className="max-w-2xl mx-auto mt-8 text-zinc-400" data-aos="fade-up" data-aos-delay="300">
              Tools that move the needle for modern maritime operators — from emission reduction to full carbon neutrality.
            </p>
          </div>

          {/* Structure horizontale / liste fluide (pas de blocs) */}
          <div className="space-y-12">
            {EDGE_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10 border-b border-white/10 pb-10 last:border-0"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                {/* Indicateur visuel à gauche (type timeline) */}
                <div className="hidden md:flex flex-col items-center w-20 shrink-0">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                    <span className="material-symbols-outlined text-emerald-400 text-2xl">{item.icon}</span>
                  </div>
                  {idx < EDGE_ITEMS.length - 1 && (
                    <div className="w-px h-16 bg-gradient-to-b from-emerald-500/40 to-transparent mt-3" />
                  )}
                </div>

                {/* Contenu principal */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <div className="flex items-baseline gap-1 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      <span className="text-emerald-400 font-black text-xl">{item.metric}</span>
                      <span className="text-emerald-300/70 text-xs uppercase tracking-wide">{item.metricLabel}</span>
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">{item.body}</p>
                </div>

                {/* Version mobile : icône à droite */}
                <div className="md:hidden absolute right-0 top-0 w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                  <span className="material-symbols-outlined text-emerald-400 text-xl">{item.icon}</span>
                </div>
              </div>
            ))}
          </div>

       
        </div>
      </section>
    </>
  );
}