"use client";

import { useState } from "react";

export default function Section() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <> 
      <main className="xl:ml-64 pt-28 sm:pt-32 pb-24 px-5 sm:px-10 md:px-16 lg:px-24">
        <section className="max-w-7xl mx-auto">

          {/* ── Bento Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

            {/* Dynamic Route Optimization — spans 2 cols on md+ */}
            <div
              className="bento-card group relative md:col-span-2 p-8 sm:p-10 rounded-2xl overflow-hidden"
              style={{ background: "var(--surface-cl)" }}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-6 sm:mb-8 border"
                    style={{ background: "rgba(0,176,255,0.08)", borderColor: "rgba(0,176,255,0.2)" }}
                  >
                    <span className="material-symbols-outlined text-2xl sm:text-3xl" style={{ color: "var(--primary-c)" }}>route</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-headline font-bold mb-3 sm:mb-4" style={{ color: "var(--on-s)" }}>
                    Dynamic Route Optimization
                  </h3>
                  <p className="leading-relaxed max-w-lg text-sm sm:text-base" style={{ color: "var(--on-sv)" }}>
                    Real-time recalculation of global shipping lanes based on oceanic currents,
                    meteorological shifts, and geopolitical instability. We don't just find a path;
                    we engineer the most efficient trajectory through chaos.
                  </p>
                </div>
                <div className="mt-8 sm:mt-12 flex items-center gap-4 sm:gap-6">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-widest mb-1" style={{ color: "#64748b" }}>Latency Reduction</span>
                    <span className="text-lg sm:text-xl font-bold" style={{ color: "var(--primary)" }}>-12.5%</span>
                  </div>
                  <div className="w-px h-8" style={{ background: "rgba(62,72,81,0.4)" }} />
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-widest mb-1" style={{ color: "#64748b" }}>Fuel Economy</span>
                    <span className="text-lg sm:text-xl font-bold" style={{ color: "var(--primary)" }}>+18.2%</span>
                  </div>
                </div>
              </div>

              {/* Background decorative */}
              <div className="bento-img absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none flex items-center justify-end pr-6">
                <span className="material-symbols-outlined" style={{ fontSize: "180px", color: "var(--primary)", opacity: 0.3 }}>
                  hub
                </span>
              </div>
            </div>

            {/* Global Inventory Visibility */}
            <div
              className="bento-card p-8 sm:p-10 rounded-2xl flex flex-col justify-between border border-transparent"
              style={{ background: "var(--surface-cl)" }}
            >
              <div>
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-6 sm:mb-8 border"
                  style={{ background: "rgba(0,176,255,0.08)", borderColor: "rgba(0,176,255,0.2)" }}
                >
                  <span className="material-symbols-outlined text-2xl sm:text-3xl" style={{ color: "var(--primary-c)" }}>inventory_2</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-headline font-bold mb-3 sm:mb-4" style={{ color: "var(--on-s)" }}>
                  Global Inventory Visibility
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--on-sv)" }}>
                  Granular tracking of every payload at the molecular level. From orbital
                  coordinates to internal hull temperature, we provide 100% visibility.
                </p>
              </div>
              <ul className="mt-8 space-y-3 sm:space-y-4">
                {["Sub-meter GPS Precision", "Automated Customs Clearance"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "#94a3b8" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "16px", color: "var(--primary)" }}>check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>
      </main>


    </>
  );
}