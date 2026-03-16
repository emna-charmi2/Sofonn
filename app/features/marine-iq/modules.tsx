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

  return (
    <section className="py-24 px-4 bg-[#050c1a] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#007bff]/[0.04] blur-[80px] rounded-full pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-2">Marine IQ Modules</h2>
        <p className="text-slate-500 text-center max-w-lg mx-auto">The complete ecosystem for maritime excellence.</p>
        <div className="section-divider" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {modules.map(({ icon, title, desc }) => (
            <div key={title} className="card p-6 cursor-pointer">
              <span className="material-symbols-outlined text-[#007bff] mb-3 block" style={{ fontSize: '1.6rem' }}>{icon}</span>
              <h4 className="text-sm font-bold text-white mb-1.5">{title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}