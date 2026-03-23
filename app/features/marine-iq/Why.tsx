"use client";

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

  const rows = [
    features.slice(0, 3),
    features.slice(3, 6),
  ];

  return (
    <section className="py-28 px-4 sm:px-8 bg-[#050c1a] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-[80%] max-w-480 mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold text-white mb-5 leading-tight tracking-tight">
            Why Choose Marine IQ?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-[clamp(1rem,1.5vw,1.2rem)] leading-relaxed">
            Marine IQ is more than just a software solution. It's a strategic partner dedicated to your maritime success.
            Here's why leading ship owners, shipping companies, and charterers choose Marine IQ.
          </p>
          <div className="w-16 h-0.75 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-5">
          {rows.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {row.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-5 items-start p-7 rounded-2xl bg-white/3 border border-white/[0.07] transition-all duration-200 hover:border-blue-500/40 hover:bg-blue-500/10 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  {/* Icon */}
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-400 text-[2rem] leading-none">
                      {icon}
                    </span>
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-[1.4rem] font-bold text-white mb-2 leading-snug">{title}</h4>
                    <p className="text-[1.1rem] text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}