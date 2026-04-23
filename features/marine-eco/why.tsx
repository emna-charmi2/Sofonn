"use client";

import { useEffect } from "react";
import AOS from "aos";

// Données pour la section "Why Choose Marine-ECO"
const WHY_CARDS = [
  {
    icon: "speed",
    title: "Operational Efficiency",
    desc: "Automate data collection and reporting, saving hundreds of hours annually.",
  },
  {
    icon: "payments",
    title: "Cost Reduction",
    desc: "Identify fuel waste and optimize routes to lower operational expenses.",
  },
  {
    icon: "verified_user",
    title: "Regulatory Compliance",
    desc: "Stay ahead of emissions regulations with automated, auditable reports.",
  },
  {
    icon: "insights",
    title: "Actionable Insights",
    desc: "Turn raw sensor data into clear recommendations for your fleet.",
  },
];

export default function WhyEco() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />

      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        <div className="w-[80%] max-w-6xl mx-auto relative z-10">
          {/* En-tête centré avec trait */}
          <div className="text-center">
            <h2 className="text-5xl font-bold tracking-tighter text-white mb-2">
              Why Choose Marine-ECO?
            </h2>
          </div>
          <div className="w-16 h-0.75 bg-emerald-400 rounded-full mx-auto mt-3 mb-14" />

          {/* Grille 2×2 : 1 colonne sur mobile, 2 colonnes sur tablette/desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_CARDS.map(({ icon, title, desc }, index) => (
              <div
                key={title}
                className="bg-emerald-500/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 transition-all duration-200 hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/10"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "1.2rem" }}
                  >
                    {icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1.5 pt-4">{title}</h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}