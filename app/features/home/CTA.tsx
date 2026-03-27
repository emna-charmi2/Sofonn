"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CallToAction() {
  const WHY_ITEMS = [
    {
      icon: "verified_user",
      title: "Ensure Regulatory Compliance",
      desc: "Stay ahead of maritime regulations with automated tracking and proactive compliance tools.",
    },
    {
      icon: "travel_explore",
      title: "Global Fleet Management",
      desc: "Monitor and manage your fleet worldwide with real-time tracking and intelligent insights.",
    },
    {
      icon: "groups",
      title: "Crew Management",
      desc: "Efficiently manage crew rotations, certifications, and performance metrics.",
    },
    {
      icon: "bar_chart",
      title: "Advanced Analytics",
      desc: "Leverage powerful data analytics to optimize performance and drive strategic decisions.",
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
      <section className="relative py-28 px-4 sm:px-8 overflow-hidden">

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(59,130,246,0.10) 0%, transparent 60%)",
          }}
        />

        {/* Subtle blue glows on top of overlay */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "rgba(59,130,246,0.15)", filter: "blur(130px)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "rgba(37,99,235,0.10)", filter: "blur(120px)" }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* CTA blob */}
          <div className="max-w-5xl mx-auto">
            <div
              className="rounded-2xl md:rounded-3xl p-12 lg:p-20 text-center border shadow-2xl shadow-black/30"
              style={{
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                background: "rgba(255,255,255,0.07)",
                borderColor: "rgba(255,255,255,0.15)",
              }}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div>
                <h2 className="mb-6" data-aos="fade-up" data-aos-delay="100">
                  Ready to optimize your fleet?
                </h2>
                <div className="max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="200">
                  <p>
                    Join the industry leaders already using our platform to drive the
                    future of maritime logistics. Transform your data into actionable
                    intelligence today.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <button
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all duration-300 hover:opacity-90 hover:scale-[1.03] active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                    boxShadow: "0 8px 24px rgba(59,130,246,0.35)",
                  }}
                >
                  Get Started Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                <button
                  className="px-8 py-4 rounded-xl font-semibold text-white text-base border transition-all duration-300 hover:bg-white/10 active:scale-95"
                  style={{
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    borderColor: "rgba(255,255,255,0.25)",
                    background: "rgba(255,255,255,0.05)",
                  }}
                >
                  Talk to an Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}