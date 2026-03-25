"use client";

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
    { icon: 'handshake', title: 'Enhanced Collaboration', desc: 'Facilitate communication and collaboration within divisions, fostering teamwork and knowledge sharing.', wide: true },
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
            How Marine IQ Transforms Maritime Operations
          </h2>
          <div className="w-16 h-0.75 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full mx-auto mt-6" />
        </div>

        {/* Section For Seafarers */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-[1.5rem] text-2xl font-extrabold text-white whitespace-nowrap">For Seafarers</h3>
            <div className="flex-1 h-px bg-white/[0.07]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {seafarerFeatures.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-5 items-start p-7 rounded-2xl bg-white/3 border border-white/[0.07] transition-all duration-200 hover:border-blue-500/40 hover:bg-blue-500/10 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-400 text-[2rem] leading-none">
                    {icon}
                  </span>
                </div>
                <div>
                 <h4 className="text-[1.15rem] font-bold text-white mb-1 pt-4">{title}</h4>
                  <p className="text-[1.05rem] text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section For Shipping Companies */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-[1.5rem] font-extrabold text-white whitespace-nowrap">For Shipping Companies & Vessels</h3>
            <div className="flex-1 h-px bg-white/[0.07]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {companyFeatures.map(({ icon, title, desc, wide }) => (
              <div
                key={title}
                className={`flex gap-5 items-start p-7 rounded-2xl bg-white/3 border border-white/[0.07] transition-all duration-200 hover:border-blue-500/40 hover:bg-blue-500/10 hover:shadow-xl hover:shadow-blue-500/10 ${
                  wide ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-400 text-[2rem] leading-none">
                    {icon}
                  </span>
                </div>
                <div>
                  <h4 className="text-[1.15rem] font-bold text-white mb-1 pt-4">{title}</h4>
                  <p className="text-[1.05rem] text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}