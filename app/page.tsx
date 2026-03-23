'use client';
import '@/app/globals.css';
import Image from 'next/image';
import { Suspense } from 'react';

import Why from '@/app/features/home/why';

import Offers from './features/home/offer';
import AboutUs from './features/home/About';
import CallToAction from './features/home/CTA';

import { SOLUTION } from './constants/Solutions';
import TypingText from './components/TypingText';
import VideoHome from './components/ui/video-home';
import Services from '@/app/features/home/Services';
import FinancialFreedomHero from './components/finfree';
import VideoHomeLight  from './components/ui/video-home-light';





const BLOG_POSTS = [
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_aySjtrJebUzzQmlUO2cR03f97E9kz5E1jGSc_yg4orRg9nDOs8-KIltEoGCSkdAKib1j_OmLPMzeaIzJc0FV_1tnoBXph22ZuScHMXzt9C-bOOlW8ydrTupsCuRui_C59NjWtJd6pfgWO321yJivwQ3V0BGPIq7y7xymgxpkmme1wNtXgEgjsj8XujGyIF_64pZRKGGsY-Dzc2YdzCyTGUfegqGgMeUTRbsAbLlEzHlDDbNJywCkUnFBloYLYOMxFfL-KEq6Mc8', tag: 'Sustainability', title: 'How Maritime AI reduces Carbon Emissions', excerpt: 'Exploring the direct impact of intelligent routing on global shipping carbon footprints.' },
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl8xXVaUjSEysQDc4j2agu-HH2FJJo_pVTvLnlDgnbBgncKXTxAcMWzggxyaancF-n5FOrv4POkkCHWo1mLbGRsN4L7EQhr3BXDWaavdrsqGOmaL_zQu8lGcDkPn61ySVFY6WQRiW7I7Sx1XFTBsi8wMB-DERs0NFa1YBZToMejEUycLjetcMohfALh18NcZAhpc--n84rAOzJs1lurQT2ZHuPBmHVV9nFajESt4mKMww9GJWmG6GRgJbbhp3uDjyi8CNcjxE2pyI', tag: 'Technology',    title: 'The Future of Autonomous Navigation',    excerpt: 'A deep dive into the sensors and AI models powering the next generation of cargo vessels.' },
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJAG4isQ7Z4eFcrHctmvX7m1KzcCEyGt4JoIZPNcsHcfcQu7snQkl5grKkM4-oRNM1m0uvLzpEv70qn3am6XxA6qMGb481tLWM5hJJZsKqaX6wnBkHW8H4KF4J7Ak9PwNIil_FKWAcQJmtLnJJno7H8K3m6w4QyNVJDj3lhYQPkSGJQBeg1SdTc9ek8nyfVuUm5yfH6svOhRaarzPMOmxuu3axCO5ksZDBxHsUVaIv5hy1PSRK9PulZGM-6VcMdX-yGn7gJBjHZVo', tag: 'Compliance',    title: 'Meeting 2025 Environmental Standards',   excerpt: 'How to stay ahead of upcoming IMO regulations using automated tracking tools.' },
];



export default function Home() {

  return (
    <>
   {/* Hero Section – Maritime Intelligence Platform */}
     <section className="relative min-h-[90vh] md:min-h-screen flex font-lato-regular items-center overflow-hidden bg-black">
 
        {/* Vidéo de fond */}
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="absolute inset-0 bg-linear-to-br from-blue-950/80 to-black" />}>
            <VideoHome />
          </Suspense>
        </div>
 
        {/* Overlay gradient */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to right, rgba(6,8,26,0.88) 0%, rgba(10,13,46,0.75) 40%, rgba(6,8,26,0.55) 100%)',
          }}
        />
         <div className="relative z-20 w-full pt-2 pb-8 md:pb-12 lg:pb-16 xl:pb-20 px-6 md:pl-43.75 md:pr-12">
          <div className="mt-6 pt-3">
 
            <div className="w-full xl:w-7/12 md:w-7/12 text-center md:text-start mb-8 md:mb-0">
 
              <h1
                className="font-lato-regular text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-light text-white leading-tight pb-2 sm:pb-1"
                
              >
                Enhance your fleet's standards with
              </h1>
 
        
              <h1
                className="font-lato-regular text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-b leading-tight pb-1 sm:pb-2"
               
              >
                Sofonn Solutions :<br /> Marine <TypingText />
              </h1>
 
              <h3
                className="font-lato-regular text-lg font-light text-white mb-4 leading-relaxed"
              
              >
                Our innovative, user-friendly technological solution designed for the maritime sector.
              </h3>
 
              <div
                className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3"
              
              >
                <button className="btn-primary px-8 py-3 text-lg font-medium rounded-lg shadow-lg shadow-blue-900/30 hover:shadow-blue-700/40 transition-all duration-300 mb-3 sm:mb-0 sm:mr-3 xl:mr-4">
                  Request Demo
                </button>
 
                <a
                  href="#benefits"
                  className="group flex items-center gap-2 text-white text-base font-medium mt-0 sm:mt-2 transition-colors hover:text-cyan-400"
                >
                  <span className="ml-2">Discover more</span>
                  <svg
                    className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth={2} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M12 9l3 3-3 3" />
                  </svg>
                </a>
              </div>
 
            </div>
          </div>
        </div>
 
        {/* Fade bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 md:h-40 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, var(--bg-base) 80%)',
          }}
        />
      </section>

      <div className="section-divider" />
 <div data-aos="fade-up" data-aos-duration="1000">
        <AboutUs />
      </div>


    {/* Core Modules */}
    <div data-aos="fade-up" data-aos-duration="1000">
      <Services />
    </div>
*

    
    <div className="section-divider" />
 <div data-aos="fade-up" data-aos-duration="1000">
      <Offers />
    </div>
   
          

      <div className="section-divider" />
       {/* Why Choose us */}
     <div data-aos="fade-up" data-aos-duration="1000">
      <Why />
    </div>
          
    {/* Offers */}
    <div className="section-divider" />

   


      {/* S5 — About Sofonn */}

      <div className="section-divider" />

     


<div className="relative min-h-screen w-full overflow-hidden">
      {/* 1. Image de fond */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=1974&auto=format&fit=crop')`,
          // ou votre propre image :
          // backgroundImage: "url('/votre-image.jpg')",
        }}
      >
        {/* Optionnel : léger overlay pour assombrir / augmenter le contraste */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 2. Contenu principal + effet glass */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div 
          className={`
            backdrop-blur-xl bg-white/10 
            border border-white/20 
            rounded-2xl md:rounded-3xl 
            shadow-2xl shadow-black/30
            p-8 md:p-12 lg:p-16
            max-w-lg w-full
            text-center
            transition-all duration-500
            hover:scale-[1.02] hover:shadow-purple-500/20
          `}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Votre Titre Ici
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Un beau texte descriptif avec un effet glassmorphism moderne et fluide.
            Compatible mobile & desktop.
          </p>

          <button className="
            px-8 py-4 bg-white/20 backdrop-blur-sm 
            border border-white/30 rounded-xl 
            text-white font-medium text-lg
            hover:bg-white/30 transition-all duration-300
            active:scale-95
          ">
            Découvrir →
          </button>
        </div>
      </div>
    </div>
      <div className="section-divider" />
      <div className="section-divider" />
      <div className="section-divider" />


      <div className="section-divider" />

      {/* S6 — Blog */}
      <section className="section-s6 relative py-20 overflow-hidden">
        <div className="glow-br" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <p className="eyebrow mb-3">Knowledge Hub</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Latest From our Blog</h2>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Stay updated with the newest trends in maritime technology and sustainability.</p>
            </div>
            <a href="#" className="text-sm font-bold shrink-0" style={{ color: 'var(--accent)' }}>View All Posts →</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {BLOG_POSTS.map((post, i) => (
              <div key={i} className="blog-card group cursor-pointer">
                <div className="blog-img-wrap aspect-video mb-5">
                  <img src={post.src} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <span className="eyebrow" style={{ color: 'var(--accent)' }}>{post.tag}</span>
                <h3 className="text-m font-medium transition-colors " style={{ color: 'var(--text-primary)' }}>{post.title}</h3>
                <a href="#" className="text-m font-medium transition-colors " style={{ color: 'var(--text-primary)' }}>
                  Read More <Image src="/right-arrow.png" alt="arrow" width={16} height={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* S7 — Final CTA */}
      <div className="section-divider" />
    <FinancialFreedomHero/>
      <div className="section-divider" />
      <div data-aos="fade-up" data-aos-duration="1000">
        <CallToAction />
      </div>
    </>
  );
}