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
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(59,130,246,0.10) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "rgba(59,130,246,0.18)", filter: "blur(120px)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "rgba(37,99,235,0.10)", filter: "blur(140px)" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide uppercase rounded-full px-4 py-1.5 mb-5 border border-blue-500/20">
              Our Advantage
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight tracking-tight">
              Why Choose Us?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              We tailor our services to your needs, ensuring maritime excellence,
              compliance, and efficiency.
            </p>
            <div
              className="rounded-full mx-auto mt-6"
              style={{
                width: "4rem",
                height: "3px",
                background: "linear-gradient(to right, #60a5fa, #3b82f6, #2563eb)",
              }}
            />
          </div>

          {/* Cards — 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_ITEMS.map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className="group flex flex-col items-center text-center p-7 rounded-2xl border transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/40 hover:bg-blue-500/10"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(59,130,246,0.15)",
                    border: "1px solid rgba(59,130,246,0.20)",
                  }}
                >
                  <span
                    className="material-symbols-outlined leading-none"
                    style={{ fontSize: "2rem", color: "#60a5fa" }}
                  >
                    {icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white leading-snug mb-2">
                  {title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}