"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CoreIntelligence() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120 });
  }, []);

  const features = [
    {
      icon: "trending_up",
      title: "Predictive Analysis",
      desc: "Using historical data and Machine Learning algorithms, the bot predicts vessel performance, weather patterns, potential hazards, and optimal routes.",
    },
    {
      icon: "warning",
      title: "Risk Management",
      desc: "Identifies potential risks by analyzing historical incidents and near-miss data, then offers mitigation strategies to prevent accidents.",
    },
    {
      icon: "build",
      title: "Predictive Maintenance",
      desc: "Assesses vessel performance and maintenance logs to predict equipment failures and recommend proactive maintenance schedules.",
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />

      <section className="py-28 px-4 sm:px-8 relative overflow-hidden ">
   

        <div className="w-[80%] max-w-7xl mx-auto relative z-10">
          {/* En-tête */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white" data-aos="fade-up">
              Real-Time Data Analysis
            </h2>
            <div
              className="w-16 h-0.75 bg-[#e1294c] rounded-full mx-auto mt-6"
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <p
              className="max-w-2xl mx-auto mt-6 text-slate-300 text-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              The Maritime Bot continuously monitors and analyzes real-time data from multiple sources,
              including AIS, weather reports, marine charts, and historical vessel performance data.
              It delivers accurate and up-to-date situational awareness.
            </p>
          </div>

          {/* Deux colonnes : liste à gauche, image à droite */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Colonne gauche : liste des fonctionnalités */}
            <div data-aos="fade-right">
              {features.map(({ icon, title, desc }, index) => (
                <div
                  key={title}
                  className="flex gap-4 mb-8 last:mb-0"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e1294c]/15 border border-[#e1294c]/30 flex items-center justify-center text-[#e1294c] shrink-0">
                    <span className="material-symbols-outlined" style={{ fontSize: "1.2rem" }}>
                      {icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">{title}</h4>
                    <span className="text-zinc-500 leading-relaxed">{desc}</span>

                  </div>
                </div>
              ))}
            </div>

            {/* Colonne droite : image */}
            <div
              className="flex justify-center items-center"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80"
                alt="Real-time maritime data analytics dashboard"
                className="w-full max-w-md lg:max-w-full h-auto object-contain rounded-2xl border border-white/10 bg-white/5 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}