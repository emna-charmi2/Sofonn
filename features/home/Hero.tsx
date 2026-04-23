'use client';

import { Suspense, useRef } from 'react';
import Link from 'next/link';
import TypingText from '@/components/TypingText';
import VideoHome from '@/components/ui/video-home';
import Button from '@/components/ui/Button';

export default function HomeHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    // On récupère la section actuelle via la ref
    if (heroRef.current) {
      // On cherche l'élément frère suivant (la section juste après le Hero)
      const nextSection = heroRef.current.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section 
      id="home-hero"
      ref={heroRef}
      className="relative h-screen w-full flex items-center overflow-hidden bg-[#06081a]"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="absolute inset-0 bg-[#06081a]" />}>
          <VideoHome />
        </Suspense>
      </div>

      {/* Dark Overlay - Dégradé vers la droite */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(90deg, rgba(6,8,26,0.95) 0%, rgba(6,8,26,0.7) 50%, rgba(6,8,26,0.3) 100%)',
        }}
      />

      <div className="relative z-20 w-full px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="w-full lg:w-9/12 xl:w-8/12 text-white">
            
           
            <h1
              className="font-mulish font-extrabold leading-[1.1] tracking-tight mb-6 text-white"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              Enhance your fleet&apos;s standards with <br />
              <span>Sofonn Solutions</span>
            </h1>

            <div 
              className="font-mulish font-bold mb-8 flex items-center gap-3 text-white"
               style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              Marine <TypingText />
            </div>

            <p
              className="font-mulish text-slate-300 mb-12 max-w-2xl leading-relaxed"
              style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)' }}
            >
              Our innovative, user-friendly technological solution designed 
              specifically for the modern maritime sector.
            </p>

            <div className="flex flex-wrap items-center gap-10">
              <Link href="/request-demo">
                <Button
                  text="Request Demo" 
                  showArrow={true}
                  className="py-5 px-10 text-xl font-bold rounded-full shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
                />
              </Link>

              {/* Bouton Discover More - Scroll vers le bas */}
              <button
                onClick={scrollToNextSection}
                className="group flex items-center gap-4 text-white font-semibold transition-all hover:text-blue-400"
                style={{ fontSize: '1.2rem' }}
              >
                <span className="relative">
                  Discover more
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                </span>
                
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-400/10 transition-all duration-300">
                   <svg
                    className="w-6 h-6 transition-transform duration-300 group-hover:translate-y-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur visuel de scroll (Ligne verticale en bas) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-blue-500 to-blue-500 animate-scroll-line"></div>
      </div>

      <style jsx>{`
        @keyframes scroll-line {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        .animate-scroll-line {
          animation: scroll-line 2.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>
    </section>
  );
}