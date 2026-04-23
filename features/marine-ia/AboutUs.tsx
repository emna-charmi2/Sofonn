"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image"; // À utiliser si vous êtes sous Next.js
// Si vous n'utilisez pas Next.js, remplacez par une balise <img> standard

export default function HeroSectionMarineIA() {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToNextSection = () => {
    if (sectionRef.current) {
      const nextSection = sectionRef.current.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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
        href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        className="relative overflow-hidden min-h-screen"
      >
        {/* Arrière-plans avec dégradés rouges/roses */}
        <div className="absolute inset-0" />
        <div className="absolute top-40 right-0 w-96 h-96 bg-[#e1294c]/10 rounded-full blur-3xl -z-5" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#e1294c]/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(225,41,76,0.06)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#e1294c]/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-600/[0.03] rounded-full blur-[140px] pointer-events-none" />

        <div className="w-[80%] max-w-480 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-28">
            {/* Colonne gauche : texte et boutons */}
            <div
              className="relative text-center lg:text-left"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              

              <h1>
                <span className="text-5xl md:text-7xl font-black tracking-tight mb-6 block">
                  Marine <span className="text-[#e1294c]">IA</span>
                </span>
                <span className="block text-3xl md:text-4xl font-bold text-slate-500 mt-2">
                  Stop guessing. Start predicting.
                </span>
              </h1>

              <p className="max-w-md mx-auto lg:mx-0 text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
                Real-time AI that turns vessel data, weather, and AIS into actionable foresight —
                reducing risks, cutting costs, and empowering confident decisions across your entire
                fleet.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button
                  onClick={scrollToNextSection}
                  className="group px-8 py-3.5 rounded-xl bg-[#e1294c] text-white font-bold shadow-lg shadow-[#e1294c]/30 hover:scale-105 transition flex items-center gap-2"
                >
                  Explore features
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition">
                    arrow_forward
                  </span>
                </button>
                <button className="px-8 py-3.5 rounded-xl border-2 border-[#e1294c] text-[#e1294c] font-bold hover:bg-[#e1294c]/5 transition">
                  Watch technical demo
                </button>
              </div>
            </div>

            {/* Colonne droite : IMAGE (remplace les icônes animées) */}
            <div
              className="relative flex justify-center items-center"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl shadow-[#e1294c]/20">
                <Image
                  src="/images/marine-ia-dashboard.jpg" // Remplacez par le chemin de votre image
                  alt="Marine IA - AI vessel management dashboard"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Optionnel : un petit badge flottant ou un effet de brillance */}
                <div className="absolute inset-0 border-2 border-[#e1294c]/20 rounded-2xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

     
      </section>
    </>
  );
}