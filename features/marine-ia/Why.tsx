"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function WhyChooseMarineIA() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120 });
  }, []);

  const features = [
    {
      icon: "security",
      title: "Improved Safety",
      desc: "Real-time data and predictive analysis help mitigate risks and enhance safety during voyages and maritime operations.",
    },
    {
      icon: "speed",
      title: "Enhanced Efficiency",
      desc: "Optimal route planning, proactive maintenance, and timely insights enable more efficient operations and reduced costs.",
    },
    {
      icon: "psychology",
      title: "Informed Decision Making",
      desc: "Data-driven insights empower captains and fleet managers to make faster and better decisions.",
    },
    {
      icon: "timer",
      title: "Time & Resource Savings",
      desc: "Automation of data analysis and decision processes frees up teams to focus on critical tasks.",
    },
  ];

  // Organisation en 2 lignes de 2 colonnes
  const rows = [features.slice(0, 2), features.slice(2, 4)];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />

      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
    
 <div className="w-[90%] max-w-480 mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mt-3" data-aos="fade-up" data-aos-delay="100">
              Why Choose Marine IA
            </h2>
            <div
              className="w-12 h-[3px] bg-[#e1294c] rounded-full mx-auto mt-6"
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <p
              className="max-w-3xl mx-auto text-lg text-slate-300 mt-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Marine-AI is a game-changer for the maritime industry, revolutionizing the way vessel operators and maritime companies manage their fleets, navigate the seas, and ensure safety and efficiency.
            </p>
          </div>

      
          

          {/* Features – structure glassmorphism 2×2 */}
          <div className="flex flex-col gap-5">
            {rows.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 sm:grid-cols-2 gap-5 ${
                  row.length === 2
                    ? "lg:grid-cols-2 lg:w-2/3 lg:mx-auto"
                    : "lg:grid-cols-3"
                }`}
              >
                {row.map(({ icon, title, desc }, index) => (
                  <div
                    key={title}
                    className="
                      flex gap-5 items-start p-7 rounded-2xl
                      backdrop-blur-md
                      bg-[#e1294c]/5
                      border border-[#e1294c]/20
                      transition-all duration-200
                      hover:border-[#e1294c]/40
                      hover:bg-[#e1294c]/10
                      hover:shadow-xl hover:shadow-[#e1294c]/10
                    "
                    data-aos="fade-up"
                    data-aos-delay={(idx * 100) + (index * 50)}
                  >
                    {/* Icône glassmorphique */}
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-[#e1294c]/15 border border-[#e1294c]/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#e1294c] text-[2rem] leading-none">
                        {icon}
                      </span>
                    </div>

                    {/* Texte */}
                    <div>
                      <h4 className="font-bold text-lg mb-1 pt-4 text-white">
                        {title}
                      </h4>
                      <span className="text-zinc-500  leading-relaxed">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Citation finale */}
          <div
            className="mt-20 text-center max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            
          </div>
        </div>
      </section>
    </>
  );
}