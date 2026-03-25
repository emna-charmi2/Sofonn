export default function Why() {
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

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />

      <section className="py-28 px-4 sm:px-8 bg-[#050c1a] relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-[80%] max-w-480 mx-auto relative z-10">
          {/* Header avec sous-titre */}
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold text-white mb-5 leading-tight tracking-tight">
              Why Choose Us?
            </h2>
            <div className="w-16 h-0.75 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full mx-auto mt-6" />
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mt-8">
              We tailor our services to your needs, ensuring maritime excellence,
              compliance, and efficiency.
            </p>
          </div>

          {/* Cartes agrandies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_ITEMS.map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className="group flex flex-col items-center text-center p-8 rounded-2xl h border transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/40 hover:bg-blue-500/10"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                {/* Icône plus grande */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: "rgba(59,130,246,0.15)",
                    border: "1px solid rgba(59,130,246,0.20)",
                  }}
                >
                  <span
                    className="material-symbols-outlined leading-none"
                    style={{ fontSize: "2.5rem", color: "#60a5fa" }}
                  >
                    {icon}
                  </span>
                </div>

                {/* Titre agrandi */}
                <h3 className="text-xl font-bold text-white leading-snug mb-3">
                  {title}
                </h3>

                {/* Description agrandie */}
                <p className="text-base text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}