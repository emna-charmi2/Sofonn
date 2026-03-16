export default function Operations(){

    return(
         <section className="px-6 lg:px-20 py-24 bg-white/[0.015]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold text-white text-center mb-2">
            How Marine Log Transforms Maritime Operations
          </h2>
          <div className="w-12 h-[3px] bg-[#FFC700] rounded-full mx-auto mt-3 mb-14" />

          {/* For Crew */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-[1.1rem] font-extrabold text-white whitespace-nowrap">For Crew</h3>
              <div className="flex-1 h-px bg-white/[0.07]" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { icon: 'edit_note',  title: 'Simplified Reporting',   desc: 'Intuitive interfaces for fast entry.' },
                { icon: 'memory',    title: 'Automated Data Capture',  desc: 'Sensor integration reduces manual work.' },
                { icon: 'forum',     title: 'Real-time Communication', desc: 'Instant updates between ship and shore.' },
                { icon: 'rule',      title: 'Best Practice Guidance',  desc: 'Embedded compliance checklists.' },
                { icon: 'cloud_off', title: 'Offline Accessibility',   desc: 'Full functionality without internet.' },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 transition-all duration-200 hover:border-[#FFC700]/25 hover:bg-[#FFC700]/[0.04]"
                >
                  <span className="material-symbols-outlined text-[#FFC700] block mb-4" style={{ fontSize: '1.8rem' }}>{icon}</span>
                  <h4 className="text-[0.8rem] font-bold text-white mb-1">{title}</h4>
                  <p className="text-[0.72rem] text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* For Shipping Companies */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-[1.1rem] font-extrabold text-white whitespace-nowrap">For Shipping Companies</h3>
              <div className="flex-1 h-px bg-white/[0.07]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: 'center_focus_strong',   title: 'Centralized Reporting',  desc: 'All fleet data in one place.',                    wide: false },
                { icon: 'assignment_turned_in',  title: 'Automated Compliance',   desc: 'Instant regulatory alignment.',                   wide: false },
                { icon: 'speed',                 title: 'Performance Monitoring', desc: 'Track efficiency and fuel usage.',                wide: false },
                { icon: 'analytics',             title: 'Data-Driven Insights',   desc: 'Advanced analytics for optimization.',            wide: false },
                { icon: 'notification_important',title: 'Automated Alerts',       desc: 'Proactive notifications for anomalies.',          wide: false },
                { icon: 'encrypted',             title: 'Secure Data Storage',    desc: 'Encrypted cloud infrastructure.',                 wide: false },
                { icon: 'history_edu',           title: 'Full Audit Trail',       desc: 'Detailed history of all changes across the entire fleet management lifecycle.', wide: true },
              ].map(({ icon, title, desc, wide }) => (
                <div
                  key={title}
                  className={`bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 transition-all duration-200 hover:border-[#FFC700]/25 hover:bg-[#FFC700]/[0.04] ${wide ? 'sm:col-span-2' : ''}`}
                >
                  <span className="material-symbols-outlined text-[#FFC700] block mb-4" style={{ fontSize: '1.8rem' }}>{icon}</span>
                  <h4 className="text-[0.9rem] font-bold text-white mb-1">{title}</h4>
                  <p className="text-[0.78rem] text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
}