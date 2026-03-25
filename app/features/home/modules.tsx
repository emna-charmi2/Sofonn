'use client';
import React, { useState, useRef, useCallback, useEffect } from 'react';

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
    href: '/blog',
    accent: '#e1294c',
  },
];

const CUBE_SIZE = 360;
const HALF = CUBE_SIZE / 2;

const getFaceTransform = (index: number) =>
  `rotateX(${index * 90}deg) translateZ(${HALF}px)`;

export default function Solutions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cubeRotX, setCubeRotX] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  const isTransitioningRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wheelTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const accumulatedDeltaRef = useRef(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  const navigateToModule = useCallback((index: number, isScrolling = false) => {
    if (isTransitioningRef.current || index === currentIndex) return;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    isTransitioningRef.current = true;
    setTextVisible(false);

    scrollTimeoutRef.current = setTimeout(() => {
      setCurrentIndex(index);
      setCubeRotX(index * 90);

      setTimeout(() => {
        setTextVisible(true);
        isTransitioningRef.current = false;
      }, 250);
    }, isScrolling ? 100 : 180);
  }, [currentIndex]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      const isInViewport =
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2;

      if (!isInViewport) return;

      const direction = e.deltaY > 0 ? 1 : -1;

      // 🔽 Autoriser le scroll de la page si on est à une extrémité et qu'on veut sortir
      if (
        (currentIndex === 0 && direction < 0) ||
        (currentIndex === MODULES.length - 1 && direction > 0)
      ) {
        return; // On laisse la page défiler normalement
      }

      e.preventDefault(); // Sinon, on bloque le scroll pour naviguer dans les modules

      accumulatedDeltaRef.current += e.deltaY;
      const threshold = 80;

      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }

      if (Math.abs(accumulatedDeltaRef.current) >= threshold) {
        const newIndex = Math.min(
          Math.max(currentIndex + direction, 0),
          MODULES.length - 1
        );

        if (newIndex !== currentIndex) {
          navigateToModule(newIndex, true);
          if (navigator.vibrate) navigator.vibrate(50);
        }

        accumulatedDeltaRef.current = 0;
      }

      wheelTimeoutRef.current = setTimeout(() => {
        accumulatedDeltaRef.current = 0;
      }, 150);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const rect = section.getBoundingClientRect();
      const isInViewport =
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2;

      if (!isInViewport) return;

      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        // Autoriser la navigation page si on est à une extrémité
        if (
          (e.key === 'ArrowUp' && currentIndex === 0) ||
          (e.key === 'ArrowDown' && currentIndex === MODULES.length - 1)
        ) {
          return;
        }

        e.preventDefault();

        const direction = e.key === 'ArrowDown' ? 1 : -1;
        const newIndex = Math.min(
          Math.max(currentIndex + direction, 0),
          MODULES.length - 1
        );

        if (newIndex !== currentIndex) {
          navigateToModule(newIndex, true);
          if (navigator.vibrate) navigator.vibrate(50);
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener('wheel', handleWheel, { passive: false });
            window.addEventListener('keydown', handleKeyDown);
          } else {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
    };
  }, [currentIndex, navigateToModule]);

  const mod = MODULES[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-8 bg-[#050c1a] relative overflow-hidden scroll-smooth"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(59,130,246,0.10) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'rgba(59,130,246,0.18)', filter: 'blur(120px)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(37,99,235,0.10)', filter: 'blur(140px)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight tracking-tight">
            What you can build with{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Sofonn Solutions
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            From streamlined logistics to efficient operations, we have everything
            you need to elevate your business on the high seas.
          </p>
          <div
            className="rounded-full mx-auto mt-6"
            style={{
              width: '4rem',
              height: '3px',
              background: 'linear-gradient(to right, #60a5fa, #3b82f6, #2563eb)',
            }}
          />
        </div>

        {/* Carte principale */}
        <div
          className="rounded-2xl border p-8 md:p-12 transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10"
          style={{
            background: 'rgba(255,255,255,0.03)',
            borderColor: 'rgba(255,255,255,0.07)',
          }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Texte */}
            <div
              className="flex-1 text-center lg:text-left order-2 lg:order-1 w-full"
              style={{
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
              }}
            >
              <span
                className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border mb-4 transition-all duration-300"
                style={{
                  backgroundColor: `${mod.accent}22`,
                  color: mod.accent,
                  borderColor: `${mod.accent}66`,
                  boxShadow: `0 0 20px ${mod.accent}33`,
                }}
              >
                {mod.label}
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {mod.fullName}
              </h3>
              <p className="text-base text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
                {mod.desc}
              </p>
              <a
                href={mod.href}
                className="group inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  color: mod.accent,
                  backgroundColor: `${mod.accent}11`,
                  border: `1px solid ${mod.accent}33`,
                }}
              >
                <span>Discover {mod.label}</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              {/* Dots */}
              <div className="flex gap-3 mt-10 justify-center lg:justify-start">
                {MODULES.map((m, idx) => (
                  <button
                    key={idx}
                    onClick={() => navigateToModule(idx)}
                    aria-label={`Go to ${m.fullName}`}
                    className="transition-all duration-500 hover:scale-110 cursor-pointer"
                    style={{
                      width: idx === currentIndex ? '32px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor:
                        idx === currentIndex ? mod.accent : 'rgba(255,255,255,0.25)',
                      boxShadow: idx === currentIndex ? `0 0 10px ${mod.accent}` : 'none',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Cube 3D */}
            <div className="order-1 lg:order-2 flex-shrink-0 flex justify-center">
              <div
                style={{
                  width: CUBE_SIZE,
                  height: CUBE_SIZE,
                  perspective: '900px',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    transform: `rotateX(${cubeRotX}deg)`,
                    transition: 'transform 0.55s cubic-bezier(0.32, 0.72, 0, 1)',
                  }}
                >
                  {MODULES.map((module, idx) => (
                    <div
                      key={idx}
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        transform: getFaceTransform(idx),
                        overflow: 'hidden',
                        borderRadius: '16px',
                        border: `2px solid ${
                          idx === currentIndex
                            ? module.accent
                            : 'rgba(255,255,255,0.15)'
                        }`,
                        transition: 'border-color 0.3s ease',
                        boxShadow:
                          idx === currentIndex
                            ? `0 0 30px ${module.accent}44`
                            : 'none',
                      }}
                    >
                      <img
                        src={module.src}
                        alt={module.fullName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}