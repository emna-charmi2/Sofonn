// components/GlobalSection.tsx
import React from 'react';

export default function GlobalSection() {
  return (
    <section className="py-32 w-[95%] mx-auto min-h-[80vh] flex items-center">
      <div className="w-full max-w-[95%] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* === Contenu texte à gauche === */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-between py-6 lg:py-0">
            <div className="flex items-center h-full">
              <div className="w-full">
                
             

                {/* Titre */}
                <h2 
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                  className="font-headline text-4xl md:text-5xl font-bold text-on-background mb-6 leading-tight text-left"
                >
                  Smart Fleet<br />Optimization Network
                </h2>

                {/* Paragraphe */}
                <p 
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                  className="text-[#FFF9C4] text-lg md:text-xl mb-8 leading-relaxed text-left"
                >
                  Marine Log empowers maritime leaders with a global intelligence network designed to optimize fleet performance in real time. By combining advanced analytics, secure infrastructure, and deep maritime expertise, we transform operational data into actionable decisions that improve efficiency, compliance, and long-term resilience.
                </p>

                {/* Liste */}
                <ul className="list-none mb-8 space-y-4">
                  {[
                    'Strategic Fleet Optimization',
                    'Future-Proof Compliance Framework',
                    'Enterprise-Grade Security'
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-lg md:text-xl leading-relaxed font-semibold text-[0.95rem]">
                      <span className="material-symbols-outlined text-[#FFC700]" style={{ fontSize: '1rem' }}>
                        verified
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>

          {/* === Carte / visuel === */}
          <div 
            className="col-span-1 lg:col-span-7 bg-surface-container-low rounded-3xl p-2 relative min-h-[600px] group overflow-hidden"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            {/* Image cohérente avec data + flotte + global */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden transition-transform duration-700 group-hover:scale-105">
              <img
                className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-700"
                alt="global maritime data network with digital fleet tracking and analytics overlay"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMTnrsew1bxf637Vbhk4m7k9lui5aMzpVIlu_UV67atWOcgq29vEVWW7PVISd2VAKZwEQ4wnVzNEnS-cdJ2eUpC5fdTON5mqqI2SuJZAzutt_1HcNQxXNaji2wtMbYCZC7QYckspmnwbkendEyZL_xEZWE2xcBjdGTZTtLI-sf79k16-liPyF6X8NJIbcTA3gcMo_I_LNLGIaglbtaSugJtUuBoj0WbEHb88YblMXVEntiL6i1yELy4W9TuZ7PI8d54g0yasxboNid"
              />
            </div>

            {/* Overlay */}
            <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-between">
              <div className="hidden lg:block" />

              {/* Stats */}
              <div 
                className="flex flex-wrap gap-12 mt-auto"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="600"
              >
                <div>
                  <div className="text-5xl md:text-6xl font-black leading-none tracking-tight text-white">
                    450+
                  </div>
                  <div className="text-sm md:text-base uppercase tracking-widest text-[#f4e55e] mt-4">
                    ACTIVE PORTS
                  </div>
                </div>

                <div>
                  <div className="text-5xl md:text-6xl font-black leading-none tracking-tight text-white">
                    12ms
                  </div>
                  <p className="text-sm md:text-base uppercase text-[#f4e55e] tracking-widest mt-4">
                    DATA SYNC SPEED
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}