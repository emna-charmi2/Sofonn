"use client";

import Image from "next/image";

/* ─── Bouton App Store ─── */

/* ─── Composant principal ─── */
export default function FinancialFreedomHero() {
  return (
    <section className="relative  flex items-center justify-center overflow-hidden bg-linear-to-br from-[#5a9cff] via-[#3d7ef5] to-[#2b5ce6]">
      {/* Glow subtil en haut */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-100 md:w-250 h-80 md:h-125 bg-white/10 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-24 flex flex-col items-center text-center">
        {/* Titre principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white mb-8 md:mb-12">
          Your First Step To
          <br className="hidden sm:block" />
          Financial Freedom
          <br className="hidden sm:block" />
          Begins Here
        </h1>

        {/* Sous-titre */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12 md:mb-16">
          Watch your money grow. Download the app now and start
          <br className="hidden sm:block" />
          taking control of your money today.
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8 mb-16 md:mb-20">
        
        </div>
          
      </div>
    </section>
  );
}