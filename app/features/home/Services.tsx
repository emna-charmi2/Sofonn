'use client'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const MODULES = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIW_nasz1JDcjzdIblU-OV70nj3ZQiR4BcPVj1a5aR6Bsp9yrWxt-YAOpvYiO9IYjBtigIzZfxV4NYa5nOhOKgU4UGhCIYoMvdOqBHaYuBsLQgJltbBa9PzcBSanaXv9AiMnAOxWkh86jPjnlzQjP7ZNalKfjyPK19me4tMeogMH8gNzRUzgGLfcN2-MR11oy9TTLFpndOTeZR-3AdRUQj3QnaD3JpeKZEaod0r1k-Txth_8FGvBaeyaR0Lo1aZqVuhVV5QhFlUZQ',
    label: 'IQ',  fullName: 'Marine IQ',  alt: 'IQ Module',
    desc: 'Advanced intelligence insights for better decision-making and prediction analytics.',
    accent: '#00b0ff',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVrnFfPb9OLEeEkuoIaY6RWDgVE3fxEerEEjWvF-WOSnxdISkZZhXIRKGazhgIy7sBVIGuZEb96l5LX7rVd6qd_SLr348TivSJnYsAQhEegFHeMY1xgtZ8OhDGaxEWYcFziy7R15EgZl5LzuIlAX-qLC_XYradP1r2K0bzlRPiJ7vRJ8UYiQ2p39w9DsfUDcVPXSjWUoEQCFtwC-ueJUupsN6JAHEA0ssdreKYENoTRa6t_GTC_LJ_O--gkth1pC3demQ4HYdkOPM',
    label: 'LOG', fullName: 'Marine LOG', alt: 'Logistics',
    desc: 'Track, monitor, and audit all actions within the platform with detailed logs.',
    accent: '#FFC700',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQa6w7LBG_sNqTpkFmtzwx0zAAQPXyMokt_GuDXezwp8ngO_QgOGOD9DZ5jjBfT9tEAVA14GZnPo_AhqTIcQJzo8whGA2ymM451nLM17dhD-7hWK0eaKWj_kbjYwC0vvN_WK81bo-x4M7Cllvhh6IiQyr9wGJQQ3nNClYWwj0SVXTlP6Biwv3cKbz1KyBJfHR2LHFgmFRg2S-YenMxMsh1ns1iB7iTE6X-XS-lI5Pmv3uc7kwyAZxctdpRjOqyd55gnYuPHK6OdRQ',
    label: 'ECO', fullName: 'Marine ECO', alt: 'Ecology',
    desc: 'Environment-friendly insights, recommendations, and tracking of sustainability efforts.',
    accent: '#45a894',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcYepEQnJ-zQiCK4xnyqT_mltojZWGOx03_rjbEkhSYpOMZWTpIqKCd2uaGtdcn9QHpB3Wtmns5vDGehxizjrLLxZfZiCZtoEeHdGi3VYaxjktPKCIbUEZDzJk6-pvbQhGVo1OxQCc2SzaiII9eky5WSTbpLe3l8SXAfYrPEeD6Fu1uqn4P4rUbqhovmuNKEws7tqyMwipcGXfEOSQcsShqEAUJuSG0eDqTCjF9n4hpBVJE7OWi8ls0j1JQE5dZOoOGrhZVDP4jI0',
    label: 'AI',  fullName: 'Marine AI',  alt: 'Artificial Intelligence',
    desc: 'Leverage artificial intelligence for data analysis, automation, and decision optimization.',
    accent: '#e1294c',
  },
]

export default function Services() {
  useEffect(() => {
  AOS.init({
    once: false,   // ← rejoue l'animation à chaque passage
    mirror: true,  // ← rejoue aussi en scrollant vers le haut
    easing: 'ease-out-cubic',
    offset: 100,   // ← déclenche quand la carte est à 100px du bas du viewport
  })
}, [])

  return (
    <section className="section-s1 relative py-20 overflow-hidden">
      <div className="glow-tl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <p
            className="eyebrow mb-3"
            data-aos="fade-up"
            data-aos-duration="400"
          >
            Stay Organized &amp; Connected
          </p>
          <h2
            className="text-2xl lg:text-3xl font-bold"
            style={{ color: 'var(--text-primary)' }}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="80"
          >
            Our Core Modules
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODULES.map((m, i) => (
            <div
              key={m.label}
              className="card p-0 group cursor-pointer overflow-hidden flex flex-col"
              data-aos="fade-out"
              data-aos-duration="600"
              data-aos-delay={i * 120}   // ← 0 / 120 / 240 / 360 ms
            >
              {/* Thumbnail */}
              <div className="aspect-square relative overflow-hidden"
                   style={{ background: 'rgba(255,255,255,0.04)' }}>
                <img
                  src={m.src}
                  alt={m.alt}
                  className="w-full h-full object-cover opacity-55 grayscale
                             group-hover:opacity-90 group-hover:grayscale-0
                             group-hover:scale-[1.04]
                             transition-all duration-500"
                />
                {/* Label fantôme centré */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span
                    className="text-5xl font-bold opacity-20 group-hover:opacity-50
                               transition-opacity duration-300"
                    style={{ color: 'var(--text-primary)', fontFamily: 'Syne, sans-serif' }}
                  >
                    {m.label}
                  </span>
                </div>
              </div>

              {/* Corps */}
              <div className="p-5 flex flex-col gap-1.5 flex-1">
                <h3 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                  {m.fullName}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {m.desc}
                </p>

                {/* Ligne d'accent coulissante au hover */}
                <div
                  className="mt-2 h-2 w-0 group-hover:w-full rounded-full
                             transition-all duration-300 ease-out"
                  style={{ background: m.accent }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}