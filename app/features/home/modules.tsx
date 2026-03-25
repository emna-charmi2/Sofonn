'use client';
import React, { useState, useCallback, useEffect } from 'react';

const MODULES = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIW_nasz1JDcjzdIblU-OV70nj3ZQiR4BcPVj1a5aR6Bsp9yrWxt-YAOpvYiO9IYjBtigIzZfxV4NYa5nOhOKgU4UGhCIYoMvdOqBHaYuBsLQgJltbBa9PzcBSanaXv9AiMnAOxWkh86jPjnlzQjP7ZNalKfjyPK19me4tMeogMH8gNzRUzgGLfcN2-MR11oy9TTLFpndOTeZR-3AdRUQj3QnaD3JpeKZEaod0r1k-Txth_8FGvBaeyaR0Lo1aZqVuhVV5QhFlUZQ',
    label: 'IQ',
    fullName: 'Marine IQ',
    desc: 'Advanced intelligence insights for better decision-making and prediction analytics.',
    href: '/marine-iq',
    accent: '#00b0ff',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVrnFfPb9OLEeEkuoIaY6RWDgVE3fxEerEEjWvF-WOSnxdISkZZhXIRKGazhgIy7sBVIGuZEb96l5LX7rVd6qd_SLr348TivSJnYsAQhEegFHeMY1xgtZ8OhDGaxEWYcFziy7R15EgZl5LzuIlAX-qLC_XYradP1r2K0bzlRPiJ7vRJ8UYiQ2p39w9DsfUDcVPXSjWUoEQCFtwC-ueJUupsN6JAHEA0ssdreKYENoTRa6t_GTC_LJ_O--gkth1pC3demQ4HYdkOPM',
    label: 'LOG',
    fullName: 'Marine LOG',
    desc: 'Track, monitor, and audit all actions within the platform with detailed logs.',
    href: '/marine-log',
    accent: '#FFC700',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQa6w7LBG_sNqTpkFmtzwx0zAAQPXyMokt_GuDXezwp8ngO_QgOGOD9DZ5jjBfT9tEAVA14GZnPo_AhqTIcQJzo8whGA2ymM451nLM17dhD-7hWK0eaKWj_kbjYwC0vvN_WK81bo-x4M7Cllvhh6IiQyr9wGJQQ3nNClYWwj0SVXTlP6Biwv3cKbz1KyBJfHR2LHFgmFRg2S-YenMxMsh1ns1iB7iTE6X-XS-lI5Pmv3uc7kwyAZxctdpRjOqyd55gnYuPHK6OdRQ',
    label: 'ECO',
    fullName: 'Marine ECO',
    desc: 'Environment-friendly insights, recommendations, and tracking of sustainability efforts.',
    href: '/marine-eco',
    accent: '#45a894',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcYepEQnJ-zQiCK4xnyqT_mltojZWGOx03_rjbEkhSYpOMZWTpIqKCd2uaGtdcn9QHpB3Wtmns5vDGehxizjrLLxZfZiCZtoEeHdGi3VYaxjktPKCIbUEZDzJk6-pvbQhGVo1OxQCc2SzaiII9eky5WSTbpLe3l8SXAfYrPEeD6Fu1uqn4P4rUbqhovmuNKEws7tqyMwipcGXfEOSQcsShqEAUJuSG0eDqTCjF9n4hpBVJE7OWi8ls0j1JQE5dZOoOGrhZVDP4jI0',
    label: 'AI',
    fullName: 'Marine AI',
    desc: 'Leverage artificial intelligence for data analysis, automation, and decision optimization.',
    href: '/marine-ai',
    accent: '#e1294c',
  },
];

// Taille responsive du cube
const getCubeSize = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 480) return 240;
    if (window.innerWidth < 640) return 280;
    if (window.innerWidth < 768) return 320;
    if (window.innerWidth < 1024) return 380;
    if (window.innerWidth < 1280) return 440;
  }
  return 500;
};

export default function MarineCube() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cubeRotX, setCubeRotX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cubeSize, setCubeSize] = useState(500);

  useEffect(() => {
    const updateSize = () => {
      setCubeSize(getCubeSize());
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const HALF = cubeSize / 2;

  const getFaceTransform = useCallback((index: number): string => {
    const angle = index * 90;
    return `rotateX(${angle}deg) translateZ(${HALF}px)`;
  }, [HALF]);

  const navigate = useCallback(
    (dir: 'next' | 'prev') => {
      if (isAnimating) return;
      setIsAnimating(true);

      setCurrentIndex((prev) =>
        dir === 'next'
          ? (prev + 1) % MODULES.length
          : (prev - 1 + MODULES.length) % MODULES.length
      );

      setCubeRotX((prev) => (dir === 'next' ? prev + 90 : prev - 90));

      setTimeout(() => setIsAnimating(false), 650);
    },
    [isAnimating]
  );

  const mod = MODULES[currentIndex];

  return (
    <section className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-[#050c1a] relative overflow-hidden flex items-center">
      {/* Background glows - responsive */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px] h-[300px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-blue-500/20 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[250px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-blue-600/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Titre + Description centrés - responsive */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight px-2 sm:px-4">
            What you can build with
            <span className="block sm:inline-block mt-1 sm:mt-2 md:mt-3 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Sofonn Solutions
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-3 sm:px-4">
            From streamlined logistics to efficient operations, we have everything you need to elevate your business on the high seas.
          </p>
        </div>

        {/* Contenu principal - responsive */}
        <div 
          className="flex flex-col lg:flex-row items-center justify-center 
                     gap-6 sm:gap-8 md:gap-12 lg:gap-16"
        >
          
          {/* Colonne gauche - Texte responsive */}
          <div className="w-full lg:flex-1 lg:flex-[2.15] text-center lg:text-left px-3 sm:px-4 md:px-6 lg:px-0">
            {/* Label en haut */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              <span
                className="text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] uppercase px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-1.5 rounded-full border"
                style={{
                  backgroundColor: `${mod.accent}22`,
                  color: mod.accent,
                  borderColor: `${mod.accent}44`,
                }}
              >
                {mod.label}
              </span>
            </div>

            {/* FullName - responsive */}
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
              {mod.fullName}
            </h3>

            {/* Container flex pour centrer le desc */}
            <div className="flex flex-col justify-between" style={{ minHeight: '100px', marginBottom: '1rem' }}>
              <div className="flex-1"></div>
              
              {/* Desc centré - responsive */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0 px-2 sm:px-0">
                {mod.desc}
              </p>
              
              <div className="flex-1"></div>
            </div>

            {/* Lien "Découvrir" en bas - responsive */}
            <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-8">
              <a
                href={mod.href}
                className="group inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium"
                style={{ color: mod.accent }}
              >
                Découvrir {mod.label}
                <svg
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Colonne droite - Cube + contrôles responsive */}
          <div className="w-full lg:flex-1 lg:flex-[1.05] flex flex-col items-center">
            
            {/* Cube Container avec espace suffisant pour les flèches */}
            <div className="relative flex items-center justify-center px-2 sm:px-4" 
                 style={{ margin: '20px 0' }}>
              <div
                style={{
                  width: cubeSize,
                  height: cubeSize,
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${cubeRotX}deg)`,
                  transition: `transform 650ms cubic-bezier(0.32, 0.72, 0, 1)`,
                }}
              >
                {MODULES.map((module, idx) => (
                  <div
                    key={module.label}
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      transform: getFaceTransform(idx),
                      backfaceVisibility: 'visible',
                      borderRadius: '12px sm:16px md:20px lg:24px',
                      overflow: 'hidden',
                      boxShadow: '0 20px 35px -10px rgba(0,0,0,0.3)',
                    }}
                  >
                    <img
                      src={module.src}
                      alt={module.fullName}
                      className="w-full h-full object-cover"
                      style={{ borderRadius: '12px' }}
                    />
                  </div>
                ))}
              </div>

              {/* Flèche Haut (Previous) - responsive avec meilleur positionnement */}
              <button
                onClick={() => navigate('prev')}
                disabled={isAnimating}
                className="absolute -top-10 sm:-top-12 md:-top-16 lg:-top-20 left-1/2 -translate-x-1/2 z-20 
                           bg-white/10 hover:bg-white/25 text-white p-2 sm:p-3 md:p-4 lg:p-5 rounded-full 
                           transition-all disabled:opacity-40 shadow-xl backdrop-blur-sm
                           active:scale-95 transform transition-transform"
                aria-label="Previous"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
                </svg>
              </button>

              {/* Flèche Bas (Next) - responsive avec meilleur positionnement */}
              <button
                onClick={() => navigate('next')}
                disabled={isAnimating}
                className="absolute -bottom-10 sm:-bottom-12 md:-bottom-16 lg:-bottom-20 left-1/2 -translate-x-1/2 z-20 
                           bg-white/10 hover:bg-white/25 text-white p-2 sm:p-3 md:p-4 lg:p-5 rounded-full 
                           transition-all disabled:opacity-40 shadow-xl backdrop-blur-sm
                           active:scale-95 transform transition-transform"
                aria-label="Next"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {/* Indicateur de navigation pour petits écrans */}
            <div className="flex gap-2 mt-6 sm:mt-8 lg:hidden">
              {MODULES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (!isAnimating && idx !== currentIndex) {
                      const diff = idx - currentIndex;
                      const direction = diff > 0 ? 'next' : 'prev';
                      navigate(direction);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex 
                      ? 'w-6 bg-white' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  disabled={isAnimating}
                  aria-label={`Go to module ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}