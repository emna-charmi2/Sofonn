"use client";

export default function Modules() {
  const modules = [
    { icon: 'fact_check', title: 'Compliance', desc: 'Automate regulatory checks and maintain audit-ready documentation across your entire fleet.' },
    { icon: 'account_tree', title: 'Workflow', desc: 'Design and automate approval chains, task assignments, and operational procedures with ease.' },
    { icon: 'monitoring', title: 'Operations', desc: 'Monitor voyage performance, port calls, and operational KPIs in real time from one dashboard.' },
    { icon: 'group_add', title: 'Crewing', desc: 'Manage seafarer contracts, certifications, rotations, and payroll from a single unified hub.' },
    { icon: 'engineering', title: 'Technical', desc: 'Plan maintenance schedules, track spare parts, and manage dry-dock projects efficiently.' },
    { icon: 'health_and_safety', title: 'QHSE', desc: 'Record incidents, conduct risk assessments, and enforce safety protocols fleet-wide.' },
    { icon: 'terminal', title: 'Platform Setup', desc: 'Configure vessel profiles, user roles, and integrations to match your operational structure.' },
    { icon: 'settings', title: 'Settings', desc: 'Granular control over notifications, permissions, data retention, and system preferences.' },
  ];

  const rows = [
    modules.slice(0, 3),
    modules.slice(3, 5),
    modules.slice(5, 8),
  ];

  return (
    <section className="py-28 px-4 sm:px-8  relative overflow-hidden">
      {/* Background glows */}
  
      <div className="w-[80%] max-w-480 mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div>
            <h2 className="mb-5">Marine IQ Modules</h2>
          </div>
          <p className="max-w-2xl mx-auto">
            The complete ecosystem for maritime excellence — every tool your fleet needs, in one unified platform.
          </p>
          <div className="w-16 h-0.75 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-5">
          {rows.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 sm:grid-cols-2 gap-5 ${
                row.length === 2
                  ? 'lg:grid-cols-2 lg:w-2/3 lg:mx-auto'
                  : 'lg:grid-cols-3'
              }`}
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
                     <div>
                       <h4 className="mb-1 pt-4">{title}</h4>
                     </div>
                  <p>{desc}</p>
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