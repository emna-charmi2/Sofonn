"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyIQ() {
  const features = [
    {
      icon: "settings_suggest",
      title: "Tailored to Your Needs",
      desc: "Customizable dashboards and reporting modules to fit your specific fleet size and vessel types.",
    },
    {
      icon: "gavel",
      title: "Streamlined Compliance",
      desc: "Stay ahead of evolving environmental and safety regulations with automated documentation.",
    },
    {
      icon: "hub",
      title: "Real-time Collaboration",
      desc: "Bridge the gap between ship and shore with instant data synchronization and secure messaging.",
    },
    {
      icon: "report_problem",
      title: "Proactive Deficiency Management",
      desc: "Identify and resolve potential risks before they lead to costly detentions or accidents.",
    },
    {
      icon: "trending_up",
      title: "Scalable for Growth",
      desc: "Whether managing 5 or 500 vessels, our infrastructure scales with your business expansion.",
    },
    {
      icon: "eco",
      title: "Optimize Fuel & Emissions",
      desc: "Powerful analytics to reduce fuel consumption and meet decarbonization targets (CII/EEXI).",
    },
  ];

  // Split into two rows of three cards each
  const rows = [features.slice(0, 3), features.slice(3, 6)];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
      easing: "ease-out-cubic",
    });
  }, []);

  // Helper to compute global index for card delays
  let globalIndex = 0;

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />

      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        {/* Background glows (blue) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-[80%] max-w-480 mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 data-aos="fade-up">Why Choose Marine IQ?</h2>
            <p
              className="max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Marine IQ is more than just a software solution. It's a strategic partner dedicated to your maritime success.
              Here's why leading ship owners, shipping companies, and charterers choose Marine IQ.
            </p>
            <div
              className="w-16 h-0.75 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full mx-auto mt-6"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>

          {/* Cards – two rows, three columns each */}
          <div className="flex flex-col gap-5">
            {rows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {row.map(({ icon, title, desc }, colIdx) => {
                  const cardDelay = globalIndex * 100;
                  globalIndex++;
                  return (
                    <div
                      key={colIdx}
                      className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 transition-all duration-200 hover:border-blue-500/40 hover:bg-blue-500/10 relative overflow-hidden"
                      data-aos="fade-up"
                      data-aos-delay={cardDelay}
                      data-aos-duration="600"
                    >
                      {/* Blur effect for icon */}
                      <div className="absolute w-12 h-12 bg-blue-500/10 rounded-full blur-[20px] -top-2 -left-2" />
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0">
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: "1.5rem" }}
                          >
                            {icon}
                          </span>
                        </div>
                        <div className="pt-4">
                          <h4>{title}</h4>
                        </div>
                        <p>{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}