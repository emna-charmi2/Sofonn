"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function IntelligencePipeline() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120 });
  }, []);

  const steps = [
    { step: "01", title: "Ingest", desc: "Aggregates all sensordata.", icon: "cloud_upload", color: "#e1294c" },
    { step: "02", title: "Synthesize", desc: "Filter noise and identify patterns.", icon: "psychology", color: "#e1294c" },
    { step: "03", title: "Predict", desc: "Generates  alerts and optimized routes.", icon: "trending_up", color: "#e1294c" },
    { step: "04", title: "Act", desc: "Real-time execution via dashboard or voice.", icon: "play_circle", color: "#e1294c" },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />

      <section className="py-28 px-4 sm:px-8 relative overflow-hidden ">
  
        <div className="max-w-7xl mx-auto relative z-10">
          {/* En-tête */}
          <div className="text-center mb-20">
           
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4" data-aos="fade-up" data-aos-delay="100">
              The Intelligence Pipeline
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              From raw data to decisive action — our AI engine works in four seamless steps.
            </p>
          </div>

          {/* Pipeline créatif : disposition en "zigzag" avec courbes SVG */}
          <div className="relative">
            {/* Lignes de connexion animées (SVG) - visible sur desktop */}
            <svg className="absolute hidden lg:block top-1/2 left-0 w-full h-20 -translate-y-1/2 pointer-events-none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e1294c" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#e1294c" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#e1294c" stopOpacity="0.1" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M 5% 50% Q 15% 30%, 25% 50% T 45% 50% T 65% 50% T 85% 50% T 95% 50%"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="8 8"
                className="animate-dash"
              />
            </svg>

            {/* Grille des étapes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {steps.map((item, idx) => (
                <div
                  key={item.title}
                  className="relative group"
                  data-aos="fade-up"
                  data-aos-delay={250 + idx * 100}
                >
                  {/* Carte avec effet glassmorphisme + bordure lumineuse au survol */}
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:border-[#e1294c]/50 hover:shadow-2xl hover:shadow-[#e1294c]/20 overflow-hidden">
                    {/* Glow interne au survol */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#e1294c]/0 via-[#e1294c]/0 to-[#e1294c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icône en 3D flottante */}
                    <div className="relative mb-6 flex justify-center">
                      <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-[#e1294c]/20 to-[#e1294c]/5 border border-[#e1294c]/30 flex items-center justify-center group-hover:animate-float">
                        <span className="material-symbols-outlined text-5xl text-[#e1294c]">{item.icon}</span>
                        {/* Badge numéro en coin */}
                        <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#e1294c] text-white text-sm font-black flex items-center justify-center shadow-lg shadow-[#e1294c]/50">
                          {item.step}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white text-center mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-sm text-center leading-relaxed">{item.desc}</p>

                    {/* Petit indicateur de flux */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#e1294c]/40 rounded-full group-hover:w-12 transition-all duration-300" />
                  </div>

                  
                </div>
              ))}
            </div>
          </div>

        
        </div>
      </section>

 
    </>
  );
}