"use client";

export default function MarineEcoModules() {
    const modules = [
  { icon: "co2",                title: "Emission Analytics",      desc: "GHG profiling, CII scoring, and trend analysis per vessel and fleet." },
  { icon: "local_gas_station",  title: "Fuel Optimizer",          desc: "Multi-stream fuel tracking with AI-driven speed recommendations." },
  { icon: "fact_check",         title: "Compliance Hub",          desc: "MARPOL, EU MRV, IMO DCS, CII — automated and audit-ready." },
  { icon: "monitoring",         title: "Live Dashboards",         desc: "60 Hz multi-stream sensor data visualized in real time, vessel by vessel." },
  { icon: "menu_book",          title: "Decarbonization Book",    desc: "Integrated tactical guide with proven reduction strategies and case studies." },
  { icon: "compare_arrows",     title: "Fleet Benchmarking",      desc: "Rank vessels by efficiency, emissions, and fuel cost across the fleet." },
  { icon: "engineering",        title: "Maintenance Link",        desc: "Correlate fuel anomalies with maintenance events — predictive before costly." },
  { icon: "bar_chart",          title: "ESG Reporting",           desc: "Investor-grade sustainability exports aligned with GHG Protocol and Poseidon." },
];

  // Découpage identique à l'exemple : 3, 2, 3
  const rows = [
    modules.slice(0, 3),
    modules.slice(3, 5),
    modules.slice(5, 8),
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />

      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
 
        <div className="w-[80%] max-w-7xl mx-auto relative z-10">
          {/* En-tête */}
          <div className="text-center mb-16">
            <div>
              <h2 className="text-5xl font-bold tracking-tighter text-white mb-5">
                Marine-ECO Modules
              </h2>
            </div>
            <p className="max-w-2xl mx-auto text-zinc-400 text-sm leading-relaxed">
              The complete ecosystem for maritime decarbonization — every tool your fleet needs,
              in one unified platform.
            </p>
            <div className="w-16 h-0.75 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 rounded-full mx-auto mt-6" />
          </div>

          {/* Cartes organisées en lignes (3, 2, 3) */}
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
                {row.map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="
                      flex gap-5 items-start p-7 rounded-2xl
                      backdrop-blur-md
                      bg-emerald-500/5
                      border border-emerald-500/20
                      transition-all duration-200
                      hover:border-emerald-500/40
                      hover:bg-emerald-500/10
                      hover:shadow-xl hover:shadow-emerald-500/10
                    "
                  >
                    {/* Icône avec effet glass */}
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-emerald-400 text-[2rem] leading-none">
                        {icon}
                      </span>
                    </div>

                    {/* Texte */}
                    <div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-1 pt-4">
                          {title}
                        </h4>
                      </div>
                      <p className="text-sm text-zinc-300 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}