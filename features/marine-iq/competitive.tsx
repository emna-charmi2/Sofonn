"use client";

import { useState, useEffect } from "react";

export default function CompetitiveEdge() {
  const items = [
    {
      id: "efficiency",
      icon: "trending_up",
      title: "Improve Efficiency",
      desc: "Streamline workflows with automated intelligence, reducing manual data entry and operational lag.",
    },
    {
      id: "profitability",
      icon: "payments",
      title: "Boost Profitability",
      desc: "Reduce overhead and optimize resource allocation through data-driven financial insights.",
    },
    {
      id: "standards",
      icon: "verified_user",
      title: "Enhance Standards",
      desc: "Maintain peak compliance and safety protocols with automated tracking and real-time audits.",
    },
  ];

  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  // Icônes alignées sur les rayons des cercles visibles (96px, 112px, 128px)
  // Angles espacés pour éviter les collisions
  const fixedIcons = [
    { icon: "anchor", radius: 128, angle: 45 },   // cercle extérieur
    { icon: "radar", radius: 112, angle: 135 },   // cercle moyen
    { icon: "waves", radius: 96, angle: 225 },    // cercle intérieur
    { icon: "map", radius: 112, angle: 315 },     // cercle moyen (deuxième icône)
  ];

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init({
        duration: 800,
        once: true,
        offset: 100,
      });
    });
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />
      <link
        href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        rel="stylesheet"
      />

      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-20 relative overflow-hidden min-h-screen grid place-items-center">
        {/* Background glows */}
      
        <div className="w-[90%] max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-lineart-to-r from-white to-blue-200 mb-4">
              Your Competitive Edge
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300">
              Tools that move the needle for modern maritime operators.
            </p>
            <div className="w-16 h-0.75 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full mx-auto mt-6" />
          </div>

          {/* Two‑column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column – accordion */}
            <div
              className="space-y-4"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-offset="50"
            >
              {items.map(({ id, icon, title, desc }) => (
                <div
                  key={id}
                  className={`group bg-white/[0.03] border rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer overflow-hidden ${
                    expanded === id
                      ? "border-blue-500/40 bg-blue-500/10"
                      : "border-white/[0.07] hover:border-blue-500/40 hover:bg-blue-500/10"
                  }`}
                  onClick={() => toggle(id)}
                >
                  <div className="flex gap-4 sm:gap-5 items-start">
                    <div className="relative shrink-0">
                      <div className="absolute w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/10 rounded-full blur-[20px] -top-2 -left-2" />
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400">
                        <span className="material-symbols-outlined text-xl sm:text-2xl">
                          {icon}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-semibold">{title}</h4>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expanded === id ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                    <div className="shrink-0 self-center">
                      <span
                        className={`material-symbols-outlined text-xl sm:text-2xl leading-none transition-transform duration-300 ${
                          expanded === id ? "rotate-180" : ""
                        }`}
                      >
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column – icônes alignées sur les cercles */}
            <div
              className="relative flex justify-center items-center"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-offset="50"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Central hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-500/20 border border-blue-500/40 shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl sm:text-3xl">hub</span>
                  </div>
                </div>

                {/* Icônes positionnées exactement sur les cercles visibles */}
                {fixedIcons.map(({ icon, radius, angle }) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = Math.cos(rad) * radius;
                  const y = Math.sin(rad) * radius;
                  return (
                    <div
                      key={icon}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center animate-float">
                        <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-blue-500/10 rounded-full blur-[12px] -top-1 -left-1" />
                        <span className="material-symbols-outlined text-blue-400 text-base sm:text-xl relative z-10">
                          {icon}
                        </span>
                      </div>
                    </div>
                  );
                })}

                {/* Radar sweep effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                  <div className="radar-sweep" />
                </div>

                {/* Outer rings – ces cercles sont maintenant alignés avec les icônes */}
                <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-pulse-slow pointer-events-none" />
                <div className="absolute inset-4 rounded-full border border-blue-500/10 animate-pulse-slow pointer-events-none" />
                <div className="absolute inset-8 rounded-full border border-blue-500/5 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Animation de flottement */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-6px) translateX(3px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        /* Radar sweep */
        .radar-sweep {
          position: absolute;
          inset: 0;
          background: conic-gradient(from 0deg, rgba(59,130,246,0) 0deg, rgba(59,130,246,0.25) 30deg, rgba(59,130,246,0) 70deg);
          animation: radar-spin 6s linear infinite;
          transform-origin: center;
          border-radius: 50%;
          pointer-events: none;
        }
        @keyframes radar-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Pulse pour les anneaux */
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.02);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}