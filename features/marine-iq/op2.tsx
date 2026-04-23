"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function Operations2() {
  const seafarerFeatures = [
    {
      icon: "badge",
      title: "Digital Professional Identity",
      desc: "Every crew member gets a personal account, showcasing their qualifications, certifications, and experience.",
    },
    {
      icon: "work_history",
      title: "Effortless Career Management",
      desc: "Seafarers can easily update their profiles, track training, and explore new opportunities.",
    },
    {
      icon: "forum",
      title: "Real-time Communication",
      desc: "Stay connected with shore-based teams and management through integrated communication channels.",
    },
    {
      icon: "task_alt",
      title: "Simplified Task Management",
      desc: "Receive, track, and update tasks assigned by ship management in real-time.",
    },
  ];

  const companyFeatures = [
    {
      icon: "verified",
      title: "Smart Certification Tracking",
      desc: "Never miss a renewal with automated alerts and real-time monitoring of vessel certifications.",
    },
    {
      icon: "policy",
      title: "Proactive Compliance",
      desc: "Manage findings and deficiencies efficiently with streamlined reporting and resolution workflows.",
    },
    {
      icon: "notifications",
      title: "Intelligent Alert System",
      desc: "Receive instant notifications about critical events and potential non-compliance issues.",
    },
    {
      icon: "speed",
      title: "Performance Optimization",
      desc: "Track fuel consumption, emissions, and other key metrics to identify areas for improvement.",
    },
    {
      icon: "hub",
      title: "Streamlined Management",
      desc: "Simplify operations, management tasks, and tailor templates for documents and checklists.",
    },
    {
      icon: "handshake",
      title: "Enhanced Collaboration",
      desc: "Facilitate communication and collaboration within divisions, fostering teamwork and knowledge sharing.",
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
            <h2 data-aos="fade-up">How Marine IQ Transforms Maritime Operations</h2>
            <div
              className="w-16 h-0.75 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full mx-auto mt-6"
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>

          {/* ── FOR SEAFARERS (image gauche fixe, liste verticale droite) ── */}
          <div className="flex items-center gap-4 mb-8" data-aos="fade-up">
            <h3>For Seafarers</h3>
            <div className="flex-1 h-px bg-white/[0.09]" />
          </div>

          <div
            className="mb-8 borderoverflow-hidden p-5 sm:p-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="text-center min-[1120px]:text-left mb-6">
              Empowering crew members with digital tools for career growth and seamless communication.
            </p>
            <div className="flex flex-col min-[1120px]:flex-row min-[1120px]:items-center gap-6">
              {/* Image gauche — dimensions fixes desktop, responsive mobile */}
              <div className="
                w-full aspect-[4/3] relative overflow-hidden rounded-lg mx-auto
                min-[1120px]:w-[500px] min-[1120px]:h-[500px] min-[1120px]:aspect-auto min-[1120px]:flex-shrink-0 min-[1120px]:mx-0
              ">
                <img
                  src={imageUrl}
                  alt="Seafarer"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                />
              </div>
              {/* Liste verticale des features */}
              <div className="flex-1 flex flex-col gap-3">
                {seafarerFeatures.map(({ icon, title, desc }, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 transition-all duration-200 hover:border-blue-500/40 hover:bg-blue-500/10 relative overflow-hidden"
                    data-aos="fade-left"
                    data-aos-delay={index * 80}
                    data-aos-duration="600"
                  >
                    <div className="absolute w-10 h-10 bg-blue-500/10 rounded-full blur-[20px] -top-1 -left-1" />
                    <div className="relative z-10 w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0">
                      <span className="material-symbols-outlined" style={{ fontSize: "1.25rem" }}>
                        {icon}
                      </span>
                    </div>
                    <div className="relative z-10">
                      <h4 className="mb-0.5 text-sm font-semibold">{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── FOR SHIPPING COMPANIES (image 1×3 en haut, grille 2×3 en bas) ── */}
          <div className="flex items-center gap-4 mb-8" data-aos="fade-up" data-aos-delay="200">
            <h3>For Shipping Companies & Vessels</h3>
            <div className="flex-1 h-px bg-white/[0.09]" />
          </div>

          <div
            className="overflow-hidden p-5 sm:p-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p className="mb-5">
              Streamline fleet management with intelligent tracking, compliance, and collaboration tools.
            </p>

            {/* Image pleine largeur — ratio 1:3 (hauteur = 1/3 de la largeur) */}
            <div
              className="w-full relative overflow-hidden rounded-lg mb-6"
              style={{ aspectRatio: "3 / 1" }}
            >
              <img
                src={imageUrl}
                alt="Shipping vessel"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            {/* Grille 2×3 des features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {companyFeatures.map(({ icon, title, desc }, index) => (
                <div
                  key={index}
                  className="group bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 transition-all duration-200 hover:border-blue-500/40 hover:bg-blue-500/10 relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 80 + 400}
                  data-aos-duration="600"
                >
                  <div className="absolute w-10 h-10 bg-blue-500/10 rounded-full blur-[20px] -top-1 -left-1" />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400 mb-3">
                      <span className="material-symbols-outlined" style={{ fontSize: "1.25rem" }}>
                        {icon}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold mb-1">{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}