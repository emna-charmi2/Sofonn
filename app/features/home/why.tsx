export default function Why() {
  // Icônes SVG vectorielles (pas de pixellisation)
  const icons = {
    compliance: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    fleet: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="8" y1="9" x2="16" y2="9" />
        <line x1="8" y1="13" x2="12" y2="13" />
        <circle cx="18" cy="15" r="1" />
        <circle cx="6" cy="15" r="1" />
      </svg>
    ),
    crew: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <line x1="12" y1="11" x2="12" y2="15" />
        <line x1="10" y1="13" x2="14" y2="13" />
      </svg>
    ),
    analytics: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="22" y1="20" x2="2" y2="20" />
      </svg>
    ),
  };

  const WHY_ITEMS = [
    {
      icon: icons.compliance,
      title: 'Ensure Regulatory\nCompliance',
      desc: 'Stay ahead of maritime regulations with automated tracking and proactive compliance tools.',
    },
    {
      icon: icons.fleet,
      title: 'Global Fleet\nManagement',
      desc: 'Monitor and manage your fleet worldwide with real-time tracking and intelligent insights.',
    },
    {
      icon: icons.crew,
      title: 'Crew\nManagement',
      desc: 'Efficiently manage crew rotations, certifications, and performance metrics.',
    },
    {
      icon: icons.analytics,
      title: 'Advanced\nAnalytics',
      desc: 'Leverage powerful data analytics to optimize performance and drive strategic decisions.',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-white">
      {/* Décoration en haut */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-br from-blue-50/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-[var(--accent-dim)] text-[var(--accent)] text-sm font-semibold tracking-wide uppercase rounded-full px-4 py-1.5 mb-5">
            Our Advantage
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
            Why Choose Us?
          </h2>
          <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            We tailor our services to your needs, ensuring maritime excellence, compliance, and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100/80 shadow-sm"
            >
              <div className="flex justify-center mb-5">
                <div className="relative w-24 h-24 rounded-2xl bg-[var(--accent-light)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm">
                  {/* Bordure pointillée blanche interne */}
                  <div className="absolute inset-2 rounded-xl border-2 border-white/60 border-dashed pointer-events-none" />
                  <div className="w-10 h-10 text-white">
                    {item.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] whitespace-pre-line mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-[220px] mx-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}