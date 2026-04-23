'use client'
import { useEffect } from 'react'
import AOS from 'aos'

const MODULES = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIW_nasz1JDcjzdIblU-OV70nj3ZQiR4BcPVj1a5aR6Bsp9yrWxt-YAOpvYiO9IYjBtigIzZfxV4NYa5nOhOKgU4UGhCIYoMvdOqBHaYuBsLQgJltbBa9PzcBSanaXv9AiMnAOxWkh86jPjnlzQjP7ZNalKfjyPK19me4tMeogMH8gNzRUzgGLfcN2-MR11oy9TTLFpndOTeZR-3AdRUQj3QnaD3JpeKZEaod0r1k-Txth_8FGvBaeyaR0Lo1aZqVuhVV5QhFlUZQ',
    label: 'IQ',
    fullName: 'Marine IQ',
    alt: 'IQ Module',
    desc: 'Advanced intelligence insights for better decision-making and prediction analytics.',
    accent: '#00b0ff',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVrnFfPb9OLEeEkuoIaY6RWDgVE3fxEerEEjWvF-WOSnxdISkZZhXIRKGazhgIy7sBVIGuZEb96l5LX7rVd6qd_SLr348TivSJnYsAQhEegFHeMY1xgtZ8OhDGaxEWYcFziy7R15EgZl5LzuIlAX-qLC_XYradP1r2K0bzlRPiJ7vRJ8UYiQ2p39w9DsfUDcVPXSjWUoEQCFtwC-ueJUupsN6JAHEA0ssdreKYENoTRa6t_GTC_LJ_O--gkth1pC3demQ4HYdkOPM',
    label: 'LOG',
    fullName: 'Marine LOG',
    alt: 'Logistics',
    desc: 'Track, monitor, and audit all actions within the platform with detailed logs.',
    accent: '#FFC700',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQa6w7LBG_sNqTpkFmtzwx0zAAQPXyMokt_GuDXezwp8ngO_QgOGOD9DZ5jjBfT9tEAVA14GZnPo_AhqTIcQJzo8whGA2ymM451nLM17dhD-7hWK0eaKWj_kbjYwC0vvN_WK81bo-x4M7Cllvhh6IiQyr9wGJQQ3nNClYWwj0SVXTlP6Biwv3cKbz1KyBJfHR2LHFgmFRg2S-YenMxMsh1ns1iB7iTE6X-XS-lI5Pmv3uc7kwyAZxctdpRjOqyd55gnYuPHK6OdRQ',
    label: 'ECO',
    fullName: 'Marine ECO',
    alt: 'Ecology',
    desc: 'Environment-friendly insights, recommendations, and tracking of sustainability efforts.',
    accent: '#45a894',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcYepEQnJ-zQiCK4xnyqT_mltojZWGOx03_rjbEkhSYpOMZWTpIqKCd2uaGtdcn9QHpB3Wtmns5vDGehxizjrLLxZfZiCZtoEeHdGi3VYaxjktPKCIbUEZDzJk6-pvbQhGVo1OxQCc2SzaiII9eky5WSTbpLe3l8SXAfYrPEeD6Fu1uqn4P4rUbqhovmuNKEws7tqyMwipcGXfEOSQcsShqEAUJuSG0eDqTCjF9n4hpBVJE7OWi8ls0j1JQE5dZOoOGrhZVDP4jI0',
    label: 'AI',
    fullName: 'Marine AI',
    alt: 'Artificial Intelligence',
    desc: 'Leverage artificial intelligence for data analysis, automation, and decision optimization.',
    accent: '#e1294c',
  },
]

export default function Services() {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      easing: 'ease-out-cubic',
      offset: 100,
    })
  }, [])

  return (
    <section className="section-s1 relative py-20 overflow-hidden">
      <div className="glow-tl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Petit titre introductif (optionnel) */}
        <div className="text-center mb-16">
          <p
            className="eyebrow mb-3"
            data-aos="fade-up"
            data-aos-duration="400"
          >
            Nos solutions modulaires
          </p>
          <div className="" data-aos="fade-up" data-aos-duration="500" data-aos-delay="80">
            <h2>Une plateforme, quatre piliers</h2>
          </div>
        </div>

        {/* Modules en pleine page */}
        <div className="space-y-24 lg:space-y-32">
          {MODULES.map((module, index) => {
            // Alternance : pair -> image à droite, impair -> image à gauche
            const isImageRight = index % 2 === 0

            return (
              <div
                key={module.label}
                className="relative group"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 100}
              >
                <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  isImageRight ? '' : 'lg:flex-row-reverse'
                }`}>
                  {/* Colonne texte */}
                  <div className="flex-1 space-y-6 text-center lg:text-left">
                    <div>
                      <span
                        className="inline-block tracking-wider uppercase px-3 py-1 rounded-full mb-4"
                        style={{
                          backgroundColor: `${module.accent}20`,
                          color: module.accent,
                          border: `1px solid ${module.accent}40`,
                        }}
                      >
                        {module.label}
                      </span>
                      <div>
                        <h4 >{module.fullName}</h4>
                      </div>
                      <div className="max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                        <p>{module.desc}</p>
                      </div>
                    </div>

                    {/* Lien / bouton */}
                    <div className="pt-4">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2  transition-all duration-300 hover:gap-3"
                        style={{ color: module.accent }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.textShadow = `0 0 8px ${module.accent}80`)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.textShadow = 'none')
                        }
                      >
                        Découvrir {module.label}
                        <svg
                          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>

                    {/* Ligne d'accent décorative */}
                    <div
                      className="w-20 h-1 rounded-full transition-all duration-500 group-hover:w-32"
                      style={{ backgroundColor: module.accent }}
                    />
                  </div>

                  {/* Colonne image */}
                  <div className="flex-1 w-full">
                    <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={module.src}
                        alt={module.alt}
                        className="w-full h-full object-cover transition-all duration-700 ease-out
                                 group-hover:scale-105 group-hover:rotate-1"
                      />
                      {/* Overlay subtil au hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                        style={{ background: `linear-gradient(135deg, ${module.accent}40, transparent)` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}