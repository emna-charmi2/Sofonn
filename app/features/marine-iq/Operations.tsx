"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Operations() {
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
      desc: "Receive instant notifications about critical events and potential non-compliance issues. Performance Optimization: Track fuel consumption, emissions, and other key metrics to identify areas for improvement.",
      wide: true,
    },
    {
      icon: "hub",
      title: "Streamlined Management",
      desc: "Simplify operations, management tasks, and tailor templates for documents and checklists specific to each asset type.",
      wide: true,
    },
    {
      icon: "handshake",
      title: "Enhanced Collaboration",
      desc: "Facilitate communication and collaboration within divisions, fostering teamwork and knowledge sharing.",
      wide: true,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
      easing: "ease-out-cubic",
    });
  }, []);

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
            <h2 data-aos="fade-up">How Marine IQ Transforms Maritime Operations</h2>
            <div
              className="w-16 h-0.75 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full mx-auto mt-6"
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>

          {/* Section For Seafarers */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-8" data-aos="fade-up">
              <h3>For Seafarers</h3>
              <div className="flex-1 h-px bg-white/[0.09]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {seafarerFeatures.map(({ icon, title, desc }, index) => (
                <div
                  key={index}
                  className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 transition-all duration-200 hover:border-blue-500/40 hover:bg-blue-500/10 relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
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
                      <h4 className="mb-2">{title}</h4>
                    </div>
                    <div>
                      <p>{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section For Shipping Companies & Vessels */}
          <div>
            <div className="flex items-center gap-4 mb-8" data-aos="fade-up">
              <h3>For Shipping Companies & Vessels</h3>
                <div className="flex-1 h-px  bg-white/[0.09]" />

              <div className="flex-1" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {companyFeatures.map(({ icon, title, desc, wide }, index) => (
                <div
                  key={index}
                  className={`group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 transition-all duration-200 hover:border-blue-500/40 hover:bg-blue-500/10 relative overflow-hidden ${
                    wide ? "sm:col-span-2" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100 + 400} // start after seafarer cards
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
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}