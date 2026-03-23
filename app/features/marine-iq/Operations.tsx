export default function Operations() {
  const seafarerFeatures = [
    { icon: 'badge', title: 'Digital Professional Identity', desc: 'Every crew member gets a personal account, showcasing their qualifications, certifications, and experience.' },
    { icon: 'work_history', title: 'Effortless Career Management', desc: 'Seafarers can easily update their profiles, track training, and explore new opportunities.' },
    { icon: 'forum', title: 'Real-time Communication', desc: 'Stay connected with shore-based teams and management through integrated communication channels.' },
    { icon: 'task_alt', title: 'Simplified Task Management', desc: 'Receive, track, and update tasks assigned by ship management in real-time.' },
  ];

  const companyFeatures = [
    { icon: 'verified', title: 'Smart Certification Tracking', desc: 'Never miss a renewal with automated alerts and real-time monitoring of vessel certifications.' },
    { icon: 'policy', title: 'Proactive Compliance', desc: 'Manage findings and deficiencies efficiently with streamlined reporting and resolution workflows.' },
    { icon: 'notifications', title: 'Intelligent Alert System', desc: 'Receive instant notifications about critical events and potential non-compliance issues. Performance Optimization: Track fuel consumption, emissions, and other key metrics to identify areas for improvement.', wide: true },
    { icon: 'hub', title: 'Streamlined Management', desc: 'Simplify operations, management tasks, and tailor templates for documents and checklists specific to each asset type.', wide: true },
    { icon: 'handshake', title: 'Enhanced Collaboration', desc: 'Facilitate communication and collaboration within divisions, fostering teamwork and knowledge sharing.',wide: true },
  ];

  return (
    <section className="px-6 lg:px-20 py-24 bg-black relative overflow-hidden">
      {/* Dégradés de fond subtils (bleus) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* En‑tête */}
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold text-white text-center mb-2">
          How Marine IQ Transforms Maritime Operations
        </h2>
        <div className="w-12 h-[3px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full mx-auto mt-3 mb-14" />

        {/* Section For Seafarers */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-[1.1rem] font-extrabold text-white whitespace-nowrap">For Seafarers</h3>
            <div className="flex-1 h-px bg-white/[0.07]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {seafarerFeatures.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 transition-all duration-200 hover:border-blue-500/40 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/10"
              >
                            <div className="w-15 h-15 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center mb-4">
    <span className="material-symbols-outlined text-blue-400 text-[3.5rem] leading-none">
      {icon}
    </span>
  </div>
                <h4 className="text-[0.9rem] font-bold text-white mb-2">{title}</h4>
                <p className="text-[0.75rem] text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section For Shipping Companies */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-[1.1rem] font-extrabold text-white whitespace-nowrap">For Shipping Companies & Vessels</h3>
            <div className="flex-1 h-px bg-white/[0.07]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {companyFeatures.map(({ icon, title, desc, wide }) => (
              <div
                key={title}
                className={`bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 transition-all duration-200 hover:border-blue-500/40 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/10 ${
                  wide ? 'sm:col-span-2' : ''
                }`}
              >
            <div className="w-15 h-15 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center mb-4">
    <span className="material-symbols-outlined text-blue-400 text-[3.5rem] leading-none">
      {icon}
    </span>
  </div>                <h4 className="text-[0.9rem] font-bold text-white mb-2">{title}</h4>
                <p className="text-[0.75rem] text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}