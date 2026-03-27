"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CallToAction() {
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

      <section className="relative py-28 px-4 sm:px-8 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

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
                <h2
                  className="mb-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Ready to harness the power of Marine IQ?
                </h2>
                <div
                  className="max-w-2xl mx-auto mb-12"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <p>
                    Join leading shipping lines worldwide in digitizing your maritime operations with our all-in-one platform.
                  </p>
                </div>
              </div>

              <div
                className="flex justify-center gap-8 flex-wrap mb-8"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <span className="flex items-center gap-2 text-slate-400 text-sm">
                  <span className="material-symbols-outlined text-[#007bff]">mail</span> contact@sofonn.iq
                </span>
                <span className="flex items-center gap-2 text-slate-400 text-sm">
                  <span className="material-symbols-outlined text-[#007bff]">call</span> +1 (555) MARINE-IQ
                </span>
              </div>

              <button
                className="bg-[#007bff] text-white font-extrabold text-base px-10 py-4 rounded-xl hover:shadow-[0_0_28px_rgba(0,123,255,0.4)] transition-shadow"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}