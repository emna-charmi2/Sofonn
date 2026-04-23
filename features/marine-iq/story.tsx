"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function StorytellingSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
      {/* Glows d’ambiance bleus */}
  
      <div className="w-[90%] max-w-6xl mx-auto relative z-10">
        {/* En‑tête centré */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight"
            data-aos="fade-up"
          >
            From Data to{" "}
            <span
              className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
            >
              Actionable Intelligence
            </span>
          </h2>
          <div
            className="w-16 h-0.75 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <p
            className="max-w-2xl mx-auto mt-8 text-slate-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Sofonn transforms raw operational data into clear, decisive insights.
            No more guesswork — just real‑time visibility, automated compliance,
            and a single source of truth for your entire fleet.
          </p>
        </div>

        {/* Grille deux colonnes (texte + liste à gauche, image à droite) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche : texte et indicateurs clés */}
          <div
            className="flex flex-col justify-center space-y-6"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <ul className="list-none space-y-4">
              {[
                { text: "Reduce manual reporting errors by up to 85%", bold: "85%" },
                { text: "Cut time spent on logs by 80%", bold: "80%" },
                { text: "Gain 100% visibility across deck operations & monitored routes", bold: "100% visibility" },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-slate-300 text-base md:text-lg leading-relaxed"
                >
                  <span className="material-symbols-outlined text-blue-400 shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span className="text-zinc-500 leading-relaxed">
                    {item.text.replace(item.bold, "")}
                    <strong >{item.bold}</strong>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne droite : image (style cohérent avec GlobalSection) */}
          <div
            className="flex justify-center"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <div className="relative w-full max-w-md lg:max-w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://storage.googleapis.com/banani-generated-images/generated-images/827a9652-5ecd-457a-aa91-e868b3f1358d.jpg"
                alt="Maritime intelligence platform illustration"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Police d'icônes Material Symbols */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />
    </section>
  );
}