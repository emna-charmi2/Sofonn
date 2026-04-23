import React from 'react';

export default function GlobalSection() {
  return (
        <section className="py-28 px-4 sm:px-8 relative overflow-hidden">

        <div className="w-[80%] max-w-480 mx-auto relative z-10">
         <div className="text-center mb-8">
  <h2 className="mb-5" data-aos="fade-up">
    Smart Fleet Optimization Network
  </h2>
  <div
    className="w-16 h-0.75 bg-[#FFC700] rounded-full mx-auto mt-6"
    data-aos="fade-up"
    data-aos-delay="100"
  />
  <p
    className="max-w-2xl mx-auto mt-8"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    By combining advanced analytics, secure infrastructure, and deep
    maritime expertise, we transform operational data into actionable
    decisions that improve efficiency, compliance, and long-term
    resilience.
  </p>
</div>
        {/* Grille deux colonnes : sur mobile une seule colonne, sur lg deux colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche : texte et liste */}
          <div className="flex flex-col justify-center">
           

            {/* Liste avec icônes */}
            <ul className="list-none space-y-4 mt-8"
    data-aos="fade-up"
    data-aos-delay="200">
              {[
                'Strategic Fleet Optimization',
                'Future-Proof Compliance Framework',
                'Enterprise-Grade Security',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-lg md:text-xl leading-relaxed font-semibold"
                >
                  <span
                    className="material-symbols-outlined text-[#FFC700]"
                    style={{ fontSize: '1rem' }}
                  >
                    verified
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne droite : image aux dimensions fixes */}
          <div
            className="flex justify-center"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <div className="relative w-full max-w-md lg:max-w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img
                className="w-full h-full object-cover"
                alt="global maritime data network with digital fleet tracking and analytics overlay"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMTnrsew1bxf637Vbhk4m7k9lui5aMzpVIlu_UV67atWOcgq29vEVWW7PVISd2VAKZwEQ4wnVzNEnS-cdJ2eUpC5fdTON5mqqI2SuJZAzutt_1HcNQxXNaji2wtMbYCZC7QYckspmnwbkendEyZL_xEZWE2xcBjdGTZTtLI-sf79k16-liPyF6X8NJIbcTA3gcMo_I_LNLGIaglbtaSugJtUuBoj0WbEHb88YblMXVEntiL6i1yELy4W9TuZ7PI8d54g0yasxboNid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}