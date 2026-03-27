'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

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
]

const CUBE_SIZE = 400
const HALF = CUBE_SIZE / 2
const getFaceTransform = (index: number) =>
  `rotateX(${index * 90}deg) translateZ(${HALF}px)`

export default function HomeCube() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [textVisible, setTextVisible] = useState(true)
  const [cubeSize, setCubeSize] = useState(CUBE_SIZE)

  const sectionRef = useRef<HTMLDivElement>(null)

  // Taille du cube responsive
  useEffect(() => {
    const updateSize = () => {
      setCubeSize(window.innerWidth < 768 ? CUBE_SIZE : CUBE_SIZE)
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const half = cubeSize / 2

  // Scroll-based 3D rotation (inchangé)
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight
      const viewportHeight = window.innerHeight

      const start = window.scrollY + rect.top
      const relativeScroll = window.scrollY - start
      const maxScroll = sectionHeight - viewportHeight

      if (relativeScroll >= 0 && relativeScroll <= maxScroll) {
        const progress = relativeScroll / maxScroll
        setScrollProgress(progress)

        const numModules = MODULES.length
        const newIndex = Math.min(
          Math.floor(progress * numModules),
          numModules - 1
        )
        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex)
          setTextVisible(false)
          setTimeout(() => setTextVisible(true), 250)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentIndex])

  const cubeRotX = -scrollProgress * (MODULES.length - 1) * 90

  const navigateToModule = useCallback(
    (index: number) => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const sectionTop = window.scrollY + rect.top
      const sectionHeight = section.offsetHeight
      const viewportHeight = window.innerHeight
      const maxScroll = sectionHeight - viewportHeight
      const targetProgress = index / (MODULES.length - 1)
      const targetScroll = sectionTop + targetProgress * maxScroll
      window.scrollTo({ top: targetScroll, behavior: 'smooth' })
    },
    []
  )

  const mod = MODULES[currentIndex]

  useEffect(() => {
    MODULES.forEach((module) => {
      const img = new Image()
      img.src = module.src
    })
  }, [])


 return (
    <div className="relative">
      <div className="h-[80vh] flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 px-2">
          What you can build with Sofonn Solutions
        </h1>
        <p className="max-w-xl text-base sm:text-lg leading-relaxed px-4 text-slate-400">
          From streamlined logistics to efficient operations, we have everything
          you need to elevate your business on the high seas.
        </p>
      </div>

      <div
        ref={sectionRef}
        className="relative"
        style={{ height: `${MODULES.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Background glows (inchangés) */}
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

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
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
                    className="inline-block tracking-widest uppercase px-4 py-1.5 rounded-full border mb-4 transition-all duration-300"
                    style={{
                      backgroundColor: `${mod.accent}22`,
                      color: mod.accent,
                      borderColor: `${mod.accent}66`,
                      boxShadow: `0 0 20px ${mod.accent}33`,
                    }}
                  >
                    {mod.label}
                  </span>
                  <div>
                    <h3 className="mb-4">{mod.fullName}</h3>
                  </div>
                  <p className="max-w-md mx-auto lg:mx-0 mb-8">{mod.desc}</p>
                  <a
                    href={mod.href}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
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

                {/* Cube 3D avec améliorations */}
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
                        transition: 'transform 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)', 
                        willChange: 'transform', 
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
                            backfaceVisibility: 'hidden', // 🙈 cache les faces arrière
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
        </div>
      </div>
    </div>
  )
}