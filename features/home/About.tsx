"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SofonnSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120, easing: "ease-out-cubic" });
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />

      <section className="py-28 px-4 sm:px-8 relative section-s3 overflow-hidden">
        

        <div className="w-[90%] sm:w-[85%] lg:w-[80%] max-w-480 mx-auto relative z-10">
          {/* Conteneur principal grid (2 colonnes) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Partie gauche : contenu texte */}
            <div data-aos="fade-right">
              
              <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white">
                Meet <span className="text-blue-400">Sofonn</span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-300 max-w-md mt-6">
                The maritime intelligence platform that transforms complex
                operations into streamlined success. Reduce errors, save time, and
                gain complete visibility — from bridge to back office.
              </p>
            </div>

            {/* Partie droite : cartes statistiques */}
            <div>
              {/* Carte featured (100%) */}
              <div
                className="group bg-white/[0.03] border  rounded-xl p-6 md:p-10 transition-all duration-200 border-blue-500/40 hover:bg-blue-500/10 relative overflow-hidden mb-6"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div className="absolute w-10 h-10 bg-blue-500/10 rounded-full blur-[20px] -top-1 -left-1" />
                <div className="relative z-10">
                 <div
                  className="w-18 h-18 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: "rgba(59,130,246,0.15)",
                    border: "1px solid rgba(59,130,246,0.20)",
                  }}
                >
                    <span className="material-symbols-outlined" style={{ fontSize: "2.5rem", color: "#60a5fa" }}
>
                      radar
                    </span>
                  </div>
                  <div className="text-6xl md:text-7xl font-bold text-blue-400 leading-none">
                    100%
                  </div>
                  <p>
                    real-time visibility across deck operations
                  </p>
                </div>
              </div>

              {/* Deux petites cartes côte à côte */}
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Carte 85% */}
                <div
                  className="flex-1 group bg-white/[0.03] border rounded-xl p-6 md:p-10 transition-all duration-200  border-blue-500/40 hover:bg-blue-500/10 relative overflow-hidden"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <div className="absolute w-10 h-10 bg-blue-500/10 rounded-full blur-[20px] -top-1 -left-1" />
                  <div className="relative z-10">
 <div
                  className="w-18 h-18 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: "rgba(59,130,246,0.15)",
                    border: "1px solid rgba(59,130,246,0.20)",
                  }}
                >                    <span className="material-symbols-outlined"     style={{ fontSize: "2.5rem", color: "#60a5fa" }}
>
                                              trending_down

                    </span>
                  </div>
                   
                    <div className="text-4xl md:text-5xl font-bold text-blue-400 leading-none">
                      85%
                    </div>
                    <p>
                      reduction in manual reporting errors
                    </p>
                  </div>
                </div>

                {/* Carte 80% */}
                <div
                  className="flex-1 group bg-white/[0.03] border rounded-xl p-6 md:p-10 transition-all duration-200 border-blue-500/40 hover:bg-blue-500/10 relative overflow-hidden"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <div className="absolute w-10 h-10 bg-blue-500/10 rounded-full blur-[20px] -top-1 -left-1" />
                  <div className="relative z-10">
 <div
                  className="w-18 h-18 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: "rgba(59,130,246,0.15)",
                    border: "1px solid rgba(59,130,246,0.20)",
                  }}
                >                    <span className="material-symbols-outlined" style={{ fontSize: "2.5rem", color: "#60a5fa" }}
>
                      schedule
                    </span>
                  </div>
                    
                    <div className="text-4xl md:text-5xl font-bold text-blue-400 leading-none">
                      80%
                    </div>
                    <p>
                      less time spent on manual logs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}