"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RolesAndModulesAlt() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120, easing: "ease-out-cubic" });
  }, []);

  const rolesData = [
    {
      title: "Vessel Operators",
      description: "Real‑time decision support to navigate safely, reduce fuel consumption, and avoid hazards.",
      image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&h=600&fit=crop&q=80",
      features: [
        { icon: "route", title: "Real‑time route optimization", desc: "Dynamic routing based on weather, traffic, and fuel efficiency." },
        { icon: "cloud", title: "Predictive weather alerts", desc: "Early warnings for storms, ice, or heavy swells along your path." },
      ],
      reverse: false,
    },
    {
      title: "Fleet Managers",
      description: "Centralized oversight of entire fleets with powerful analytics and benchmarking tools.",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop&q=80",
      features: [
        { icon: "dashboard", title: "Fleet performance dashboard", desc: "Live KPIs, vessel rankings, and anomaly detection." },
        { icon: "local_gas_station", title: "Fuel consumption analytics", desc: "Track bunker usage and identify savings opportunities." },
      ],
      reverse: true,
    },
    {
      title: "Crew Members",
      description: "Empowering crew members with digital tools for career growth and seamless communication.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop&q=80",
      features: [
        { icon: "record_voice_over", title: "Voice‑assisted procedures", desc: "Hands‑free access to safety protocols and checklists." },
        { icon: "assignment", title: "Digital logbooks & tasks", desc: "Simplify daily reporting and task management." },
      ],
      reverse: false,
    },
    {
      title: "Compliance Teams",
      description: "Automate regulatory adherence and produce audit‑ready reports with full traceability.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&q=80",
      features: [
        { icon: "checklist", title: "Automated regulatory checks", desc: "Continuous monitoring of IMO, MARPOL, and flag state rules." },
        { icon: "description", title: "Audit‑ready reporting", desc: "One‑click generation of compliant documentation." },
      ],
      reverse: true,
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />

      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#e1294c]/10 rounded-full blur-[120px]" />
        </div>

        <div className="w-[90%] sm:w-[95%] lg:w-[85%] max-w-7xl mx-auto relative z-10">
          {/* En-tête */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white" data-aos="fade-up">
              Roles & Modules
            </h2>
            <div className="w-16 h-0.75 bg-[#e1294c] rounded-full mx-auto mt-6" data-aos="fade-up" data-aos-delay="100" />
            <p className="max-w-2xl mx-auto mt-8 text-slate-300" data-aos="fade-up" data-aos-delay="200">
              Tailored AI modules for every stakeholder in your maritime operations
            </p>
          </div>

          {/* Blocs alternés avec flex robuste */}
          {rolesData.map((role, idx) => (
            <div
              key={role.title}
              className={`
                flex flex-col md:flex-row items-stretch gap-8 md:gap-12 mb-20 last:mb-0
                ${role.reverse ? "md:flex-row-reverse" : "md:flex-row"}
              `}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Colonne image : occupe exactement la moitié sur desktop, hauteur automatique avec ratio 4/3 */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl h-full min-h-[280px] md:min-h-[320px]">
                  <img
                    src={role.image}
                    alt={role.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Colonne texte : moitié restante, contenu flexible */}
              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-white">{role.title}</h3>
                <p className="text-slate-300 text-base leading-relaxed">{role.description}</p>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {role.features.map((feat, fIdx) => (
                    <div
                      key={feat.title}
                      className="flex gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#e1294c]/30 transition-all"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-[#e1294c]/15 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#e1294c] text-xl">{feat.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{feat.title}</h4>
                        <span className="text-zinc-500 leading-relaxed">{feat.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}