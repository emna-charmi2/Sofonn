"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import AOS from "aos";
import Button from "@/components/ui/Button";

export default function EcoHero() {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToNextSection = () => {
    if (sectionRef.current) {
      const next = sectionRef.current.nextElementSibling;
      if (next) {
        next.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
       
        <div className="w-[85%] max-w-7xl mx-auto relative z-10">
          {/* Two‑column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-28">
            {/* Colonne gauche – texte */}
            <div
              className="text-center lg:text-left space-y-7"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1]">
                Environmental<br />
                Intelligence for a<br />
                <span className="text-emerald-400">Sustainable</span> Fleet
              </h1>

              <p className="text-zinc-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Empowering maritime operations with real-time eco-efficiency tracking, emissions compliance monitoring,
                and AI-optimized fuel consumption all in one platform.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                     <Button 
          text="Learn More" 
              onClick={scrollToNextSection}
              backgroundColor="#45a894"
              target="_self"
          showArrow={true}
        />
              
              </div>
            </div>

            {/* Colonne droite – image avec fond sombre + overlay pour éliminer le blanc */}
            <div
              className="relative flex justify-center items-center"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Cercle décoratif optionnel (déjà commenté) */}

                {/* Conteneur avec fond sombre et bordure */}
                <div className="relative rounded-2xl overflow-hidden bg-emerald-950/40 border border-emerald-500/20 shadow-xl">
                  <img
                    src="/icons/eco/dashboard_eco.png"
                    alt="Marine Log dashboard preview"
                    className="w-full h-auto object-contain relative z-0"
                  />
                  {/* Overlay dégradé sombre pour fondre les parties blanches */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-emerald-950/20 mix-blend-multiply pointer-events-none z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
