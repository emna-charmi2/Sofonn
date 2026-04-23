"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function Operations() {
  const crewFeatures = [
    {
      icon: "edit_note",
      title: "Simplified Reporting",
      desc: "Intuitive interfaces for fast entry.",
    },
    {
      icon: "memory",
      title: "Automated Data Capture",
      desc: "Sensor integration reduces manual work.",
    },
    {
      icon: "forum",
      title: "Real-time Communication",
      desc: "Instant updates between ship and shore.",
    },
    {
      icon: "rule",
      title: "Best Practice Guidance",
      desc: "Embedded compliance checklists.",
    },
    {
      icon: "cloud_off",
      title: "Offline Accessibility",
      desc: "Full functionality without internet.",
    },
  ];

  const companyFeatures = [
    {
      icon: "center_focus_strong",
      title: "Centralized Reporting",
      desc: "All fleet data in one place.",
    },
    {
      icon: "assignment_turned_in",
      title: "Automated Compliance",
      desc: "Instant regulatory alignment.",
    },
    {
      icon: "speed",
      title: "Performance Monitoring",
      desc: "Track efficiency and fuel usage.",
    },
    {
      icon: "analytics",
      title: "Data-Driven Insights",
      desc: "Advanced analytics for optimization.",
    },
    {
      icon: "notification_important",
      title: "Automated Alerts",
      desc: "Proactive notifications for anomalies.",
    },
    {
      icon: "encrypted",
      title: "Secure Data Storage",
      desc: "Encrypted cloud infrastructure.",
    },
    {
      icon: "history_edu",
      title: "Full Audit Trail",
      desc: "Detailed history of all changes across the entire fleet management lifecycle.",
    },
  ];

  const imageUrl =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCIW_nasz1JDcjzdIblU-OV70nj3ZQiR4BcPVj1a5aR6Bsp9yrWxt-YAOpvYiO9IYjBtigIzZfxV4NYa5nOhOKgU4UGhCIYoMvdOqBHaYuBsLQgJltbBa9PzcBSanaXv9AiMnAOxWkh86jPjnlzQjP7ZNalKfjyPK19me4tMeogMH8gNzRUzgGLfcN2-MR11oy9TTLFpndOTeZR-3AdRUQj3QnaD3JpeKZEaod0r1k-Txth_8FGvBaeyaR0Lo1aZqVuhVV5QhFlUZQ";

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120, easing: "ease-out-cubic" });
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />

      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        {/* Background glows */}
   
        <div className="w-[90%] sm:w-[85%] lg:w-[80%] max-w-480 mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 data-aos="fade-up">How Marine Log Transforms Maritime Operations</h2>
            <div
              className="w-16 h-0.75 bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full mx-auto mt-6"
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>

          {/* ── FOR CREW ── */}
          <div className="flex items-center gap-4 mb-8" data-aos="fade-up">
            <h3>For Crew</h3>
            <div className="flex-1 h-px bg-white/[0.09]" />
          </div>

          <div
            className="mb-12 overflow-hidden p-5 sm:p-8 rounded-3xl "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="text-center min-[1120px]:text-left mb-6">
              Empowering crew members with digital tools for career growth and seamless communication.
            </p>

            <div className="flex flex-col min-[1120px]:flex-row min-[1120px]:items-center gap-6">
              <div className="w-full aspect-[4/3] relative overflow-hidden rounded-2xl mx-auto min-[1120px]:w-[500px] min-[1120px]:h-[600px] min-[1120px]:aspect-auto min-[1120px]:flex-shrink-0 min-[1120px]:mx-0">
                <img
                  src={imageUrl}
                  alt="Crew member"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>

              <div className="flex-1 flex flex-col gap-3">
                {crewFeatures.map(({ icon, title, desc }, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4  bg-white/[0.03] border  rounded-xl p-4 
                      transition-all duration-200 border-[#FFC700]/40 hover:bg-[#FFC700]/10 
                      relative overflow-hidden"
                    data-aos="fade-left"
                    data-aos-delay={index * 80}
                    data-aos-duration="600"
                  >
                    <div className="absolute w-10 h-10 bg-[#FFC700]/10 rounded-full blur-[20px] -top-1 -left-1" />
                    <div className="relative z-10 w-10 h-10 rounded-xl bg-[#FFC700]/15 border border-[#FFC700]/25 flex items-center justify-center text-[#FFC700] shrink-0">
                      <span className="material-symbols-outlined" style={{ fontSize: "1.25rem" }}>
                        {icon}
                      </span>
                    </div>
                    <div className="relative z-10">
                      <h4 className="mb-0.5 text-sm font-semibold">{title}</h4>
                      <span className="text-zinc-500 leading-relaxed">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── FOR SHIPPING COMPANIES ── */}
          <div className="flex items-center gap-4 mb-8" data-aos="fade-up" data-aos-delay="200">
            <h3>For Shipping Companies</h3>
            <div className="flex-1 h-px bg-white/[0.09]" />
          </div>

          <div
            className="overflow-hidden p-5 sm:p-8 rounded-3xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p className="mb-6">
              Streamline fleet management with intelligent tracking, compliance, and collaboration tools.
            </p>

            {/* Image large */}
            <div
              className="w-full relative overflow-hidden rounded-2xl mb-8"
              style={{ aspectRatio: "3 / 1" }}
            >
              <img
                src={imageUrl}
                alt="Shipping vessel"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            {/* Grille avec dernière carte en full width */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {companyFeatures.map(({ icon, title, desc }, index) => {
                const isLast = index === companyFeatures.length - 1;
                return (
                  <div
                    key={index}
                    className={`
                      group bg-white/[0.03] border  rounded-xl p-4 
                      transition-all duration-200 border-[#FFC700]/40 hover:bg-[#FFC700]/10 
                      relative overflow-hidden
                      ${isLast ? "lg:col-span-3" : ""}
                    `}
                    data-aos="fade-up"
                    data-aos-delay={index * 80 + 300}
                    data-aos-duration="600"
                  >
                    <div className="absolute w-10 h-10 bg-[#FFC700]/10 rounded-full blur-[20px] -top-1 -left-1" />
                    <div className="relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-[#FFC700]/15 border border-[#FFC700]/25 flex items-center justify-center text-[#FFC700] mb-3">
                        <span className="material-symbols-outlined" style={{ fontSize: "1.25rem" }}>
                          {icon}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold mb-1">{title}</h4>
                      <span className="text-zinc-500 leading-relaxed">{desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}