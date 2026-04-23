"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function EcoInitiatives() {

  const INITIATIVES = [

  {
    icon: "co2",
    title: "Emissions Tracking",
    desc: "Automated CO₂ reduction reporting and proactive SECA zone compliance monitoring with geofenced alerts.",
  },

    {
      icon: "oil_barrel",
      title: "Fuel Optimization",
      desc: "Minimize drag and reduce fuel consumption with advanced hydrodynamic data modeling and real-time fouling analysis.",
    },
 
    {
      icon: "battery_charging_full",
      title: "Auxiliary Power Control",
      desc: "Smart management of on-board power systems and shore-side connectivity to lower harbor emissions to near-zero.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      {/* Material Symbols */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />

      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">

        <div className="w-[80%] max-w-480 mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
           
            <h2 className="text-5xl font-bold tracking-tighter" data-aos="fade-up" data-aos-delay="100">
Smart Green Fleet Solutions            </h2>
            <div
              className="w-16 h-0.75 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 rounded-full mx-auto mt-6"
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <p
              className="max-w-2xl mx-auto mt-8 text-zinc-400"
              data-aos="fade-up"
              data-aos-delay="300"
            >
Leveraging real-time analytics and AI-driven optimization to cut emissions, reduce fuel waste, and ensure compliance with global environmental standards            </p>
          </div>

          {/* Cartes glass – grille 3 colonnes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {INITIATIVES.map((item, i) => (
              <div
                key={i}
                className="group flex flex-col items-center p-8 rounded-2xl border transition-all duration-200 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 hover:bg-emerald-500/10"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                data-aos-duration="600"
              >
                {/* Icône plus grande – style glass */}
                <div
                  className="w-18 h-18 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: "rgba(16,185,129,0.15)",
                    border: "1px solid rgba(16,185,129,0.25)",
                  }}
                >
                  <span
                    className="material-symbols-outlined leading-none"
                    style={{ fontSize: "2.5rem", color: "#34d399" }}
                  >
                    {item.icon}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 text-center">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}