"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function StrategicBenefits() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120 });
  }, []);

  const benefits = [
    {
      title: "Optimized Routes",
      desc: "Dynamic route calculation based on real-time weather, port congestion, and fuel efficiency. Reduce transit time by up to 15%.",
    },
    {
      title: "Predictive Maintenance",
      desc: "Sensor-driven anomaly detection identifies equipment fatigue before failure. Transition from reactive to preventative maintenance.",
    },
    {
      title: "Risk Mitigation",
      desc: "AI-powered threat assessment for navigation and cybersecurity. Early warnings for hazardous weather and geopolitical disruptions.",
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />

      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        {/* Aucun glow ni fond coloré – style exact de GlobalSection */}
        <div className="w-[80%] max-w-480 mx-auto relative z-10">
          {/* En-tête */}
          <div className="text-center mb-8">
            <h2 className="mb-5 text-4xl md:text-5xl font-bold text-slate-900" data-aos="fade-up">
              Strategic Benefits
            </h2>
            <div
              className="w-16 h-0.75 bg-[#e1294c] rounded-full mx-auto mt-6"
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <p
              className="max-w-2xl mx-auto mt-8 text-slate-600"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Tangible operational advantages delivered through our integrated AI framework
            </p>
          </div>

          {/* Grille deux colonnes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Colonne gauche : liste des bénéfices */}
            <div className="flex flex-col justify-center">
              <ul className="list-none space-y-6 mt-8" data-aos="fade-up" data-aos-delay="200">
                {benefits.map((item) => (
                  <li key={item.title} className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-[#e1294c] text-xl mt-0.5">
                      verified
                    </span>
                    <div>
                      <h3 className="text-slate-900 font-bold text-xl mb-1">{item.title}</h3>
                      <span className="text-zinc-500 leading-relaxed">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne droite : image */}
            <div
              className="flex justify-center"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="relative w-full max-w-md lg:max-w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  className="w-full h-full object-cover"
                  alt="Strategic fleet management with AI analytics"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}