"use client";

import { useEffect } from "react";
import AOS from "aos";
import { SpanStatus } from "next/dist/trace";

export default function MarineIAModules() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120 });
  }, []);

  const modules = [
    { icon: "radar", title: "Real-Time Analysis", desc: "Monitor vessel operations in real time through AI-driven insights powered by onboard sensors and navigation systems." },
    { icon: "psychology", title: "Predictive Logic", desc: "Anticipate issues before they happen with intelligent models that analyze historical and live data." },
    { icon: "notifications_active", title: "Smart Alerts", desc: "Receive instant alerts when risks are detected, enabling faster response and improved safety." },
    { icon: "handyman", title: "Proactive Maintenance", desc: "Predicts equipment failures from telemetry, recommending just-in-time maintenance to avoid downtime." },
    { icon: "gavel", title: "Regulatory Compliance", desc: "Monitors IMO and MARPOL rules, alerting operators to documentation and emission controls." },
    { icon: "record_voice_over", title: "Crew Assistant", desc: "Voice or text interface for instant access to safety procedures and emergency protocols." },
    { icon: "speed", title: "Performance Optimization", desc: "Improve efficiency and reduce operational costs across your entire fleet." },
    { icon: "verified", title: "Data Accuracy", desc: "Ensure reliable insights through automated validation and verification processes." },
  ];

  // Découpage identique à l'exemple : 3, 2, 3
  const rows = [
    modules.slice(0, 3),
    modules.slice(3, 5),
    modules.slice(5, 9),
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />

      <section className="py-28 px-4 sm:px-8 relative overflow-hidden ">

        <div className="w-[90%] max-w-7xl mx-auto relative z-10">
          {/* En-tête */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tighter text-white mb-5" data-aos="fade-up">
              Marine IA Modules
            </h2>
            <p className="max-w-2xl mx-auto text-zinc-400 text-sm leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              AI-powered modules that transform maritime operations
            </p>
            <div className="w-16 h-0.75 bg-gradient-to-r from-[#e1294c] via-[#e1294c] to-[#e1294c] rounded-full mx-auto mt-6" data-aos="fade-up" data-aos-delay="200" />
          </div>

          {/* Cartes organisées en lignes (3, 2, 3) */}
          <div className="flex flex-col gap-5">
            {rows.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 sm:grid-cols-2 gap-5 ${
                  row.length === 2
                    ? "lg:grid-cols-2 lg:w-2/3 lg:mx-auto"
                    : "lg:grid-cols-3"
                }`}
              >
                {row.map(({ icon, title, desc }, index) => (
                  <div
                    key={title}
                    className="
                      flex gap-5 items-start p-7 rounded-2xl
                      backdrop-blur-md
                      bg-[#e1294c]/5
                      border border-[#e1294c]/20
                      transition-all duration-200
                      hover:border-[#e1294c]/40
                      hover:bg-[#e1294c]/10
                      hover:shadow-xl hover:shadow-[#e1294c]/10
                    "
                    data-aos="fade-up"
                    data-aos-delay={(idx * 100) + (index * 50)}
                  >
                    {/* Icône avec effet glass */}
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-[#e1294c]/15 border border-[#e1294c]/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#e1294c] text-[2rem] leading-none">
                        {icon}
                      </span>
                    </div>

                    {/* Texte */}
                    <div>
                      <h4 className="font-bold text-lg mb-1 pt-4">
                        {title}
                      </h4>
                      <span className="text-zinc-500 leading-relaxed">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}