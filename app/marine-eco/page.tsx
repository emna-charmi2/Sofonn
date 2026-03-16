import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marine ECO | Sustainable Maritime Intelligence',
  description: 'AI-Driven Decarbonization for Maritime Operations',
};

export default function MarineEcoPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#020617] text-slate-100">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        * { font-family: 'Inter', sans-serif; box-sizing: border-box; }

        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          line-height: 1;
          display: inline-flex;
          align-items: center;
        }

        .glass-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .text-gradient {
          background: linear-gradient(to right, #10b981, #14b8a6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .pulse-dot { animation: pulse-dot 2s infinite; }
      `}</style>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 w-full glass-card border-b border-white/5 px-6 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0a182e] border border-[#14b8a6]/30">
              <span className="material-symbols-outlined text-[#14b8a6]">tsunami</span>
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white">
                Marine <span className="text-[#10b981]">ECO</span>
              </h2>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">by Sofonn</p>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {['Solutions', 'Compliance', 'Intelligence', 'Sustainability'].map(item => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-slate-300 hover:text-[#14b8a6] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex px-5 py-2 text-sm font-bold glass-card rounded-lg hover:bg-white/10 transition-all border border-white/10 text-white cursor-pointer">
              Client Portal
            </button>
            <button className="px-5 py-2 text-sm font-bold bg-[#10b981] text-[#0a182e] rounded-lg hover:bg-[#14b8a6] transition-all shadow-lg shadow-[#10b981]/20 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">

        {/* ── HERO ── */}
        <section className="relative pt-20 pb-32 px-6 lg:px-20 overflow-hidden">
          {/* Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#10b981]/20 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#14b8a6]/20 blur-[150px]" />
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 w-fit">
                <span className="material-symbols-outlined text-[#10b981] text-sm">verified_user</span>
                <span className="text-xs font-bold text-[#10b981] tracking-wide uppercase">AI-Driven Decarbonization</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-white">
                Environmental Intelligence for a{' '}
                <span className="text-gradient">Sustainable</span> Fleet
              </h1>

              <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                Empowering maritime operations with real-time eco-efficiency tracking, emissions compliance monitoring, and AI-optimized fuel consumption.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#10b981] text-[#0a182e] font-bold rounded-xl hover:scale-105 transition-transform shadow-xl shadow-[#10b981]/20 flex items-center gap-2 cursor-pointer">
                  <span className="material-symbols-outlined">analytics</span>
                  View Solutions
                </button>
                <button className="px-8 py-4 glass-card text-white font-bold rounded-xl hover:bg-white/5 transition-all flex items-center gap-2 cursor-pointer">
                  <span className="material-symbols-outlined">play_circle</span>
                  Request Demo
                </button>
              </div>
            </div>

            {/* Right — Visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#10b981]/20 to-[#14b8a6]/20 rounded-3xl blur-2xl" />
              <div className="relative glass-card rounded-3xl overflow-hidden aspect-video border border-white/20 shadow-2xl">
                {/* Placeholder with green gradient when no image */}
                <div className="w-full h-full bg-gradient-to-br from-[#0a182e] via-[#0d2a1a] to-[#020617] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#10b981]/30" style={{fontSize:'5rem'}}>directions_boat</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a182e]/80 via-transparent to-transparent" />
                {/* Live badge */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="glass-card p-4 rounded-xl border border-white/10">
                    <p className="text-[10px] text-[#10b981] font-bold uppercase mb-1">Live Efficiency</p>
                    <p className="text-2xl font-bold text-white">94.2%</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-[#10b981] pulse-dot" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ECO-EFFICIENCY INITIATIVES ── */}
        <section className="py-24 px-6 lg:px-20 bg-slate-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Eco-Efficiency Initiatives</h2>
              <div className="w-20 h-1 bg-[#10b981] mx-auto rounded-full" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'waves',
                  color: '#10b981',
                  bg: 'rgba(16,185,129,0.1)',
                  title: 'Hull Optimization',
                  desc: 'Minimize drag and reduce fuel consumption with advanced hydrodynamic data modeling and real-time fouling analysis.',
                },
                {
                  icon: 'route',
                  color: '#14b8a6',
                  bg: 'rgba(20,184,166,0.1)',
                  title: 'AI Route Management',
                  desc: 'Dynamic pathfinding adjusts for currents, weather, and traffic to reduce engine load and transit time via neural networks.',
                },
                {
                  icon: 'battery_charging_full',
                  color: '#10b981',
                  bg: '#0a182e',
                  border: 'rgba(16,185,129,0.2)',
                  title: 'Auxiliary Power',
                  desc: 'Smart management of on-board power systems and shore-side connectivity to lower harbor emissions to near-zero.',
                },
              ].map(({ icon, color, bg, border, title, desc }) => (
                <div
                  key={title}
                  className="glass-card p-8 rounded-2xl border border-white/5 hover:border-[#10b981]/30 transition-all hover:-translate-y-2 group"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{ background: bg, border: border ? `1px solid ${border}` : undefined }}
                  >
                    <span className="material-symbols-outlined text-3xl" style={{ color }}>{icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTEGRATED SUSTAINABILITY ── */}
        <section className="py-24 px-6 lg:px-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

            {/* Analytics card */}
            <div className="order-2 lg:order-1 relative">
              <div className="glass-card rounded-3xl p-6 border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#10b981]">query_stats</span>
                    Environmental Analytics
                  </h4>
                  <div className="px-3 py-1 rounded-full bg-[#10b981]/20 text-[#10b981] text-[10px] font-bold uppercase">
                    Real-time Data
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Progress bar */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Fuel Savings Target</span>
                      <span className="text-[#10b981] font-bold">88% Achieved</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-[#10b981] rounded-full" style={{ width: '88%' }} />
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">CO2 Reduction</p>
                      <p className="text-2xl font-black text-white">-12.4 <span className="text-xs font-normal">tons</span></p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">SECA Compliance</p>
                      <p className="text-2xl font-black text-[#10b981]">Active</p>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="h-40 w-full relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14b8a6]/10 to-transparent rounded-lg" />
                    <svg className="w-full h-full" viewBox="0 0 400 100">
                      <path d="M0,80 Q50,70 100,75 T200,50 T300,60 T400,20" fill="none" stroke="#14b8a6" strokeWidth="3" />
                      <path d="M0,90 Q50,85 100,88 T200,70 T300,75 T400,50" fill="none" stroke="#10b981" strokeDasharray="4" strokeWidth="2" />
                    </svg>
                    <div className="absolute top-4 right-4 flex gap-3">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#14b8a6]" />
                        <span className="text-[10px] text-slate-400">Predicted</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#10b981]" />
                        <span className="text-[10px] text-slate-400">Actual</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features list */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-white mb-8">Integrated Sustainability Features</h2>
              <div className="space-y-8">
                {[
                  {
                    icon: 'oil_barrel',
                    color: '#10b981',
                    border: 'rgba(16,185,129,0.3)',
                    title: 'Fuel Optimization',
                    desc: 'Compare real-time consumption against predicted AI-modeled routes to identify inefficiencies instantly.',
                  },
                  {
                    icon: 'co2',
                    color: '#14b8a6',
                    border: 'rgba(20,184,166,0.3)',
                    title: 'Emissions Tracking',
                    desc: 'Automated CO2 reduction reporting and proactive SECA zone compliance monitoring with geofenced alerts.',
                  },
                  {
                    icon: 'assignment_turned_in',
                    color: '#10b981',
                    border: 'rgba(16,185,129,0.3)',
                    title: 'MARPOL Compliance',
                    desc: 'One-click automated data reporting for Annex VI sulfur emissions, ensuring total regulatory adherence with zero manual entry.',
                  },
                ].map(({ icon, color, border, title, desc }) => (
                  <div key={title} className="flex gap-6">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0a182e] border flex items-center justify-center"
                      style={{ borderColor: border, color }}
                    >
                      <span className="material-symbols-outlined">{icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
                      <p className="text-slate-400">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE ── */}
        <section className="py-24 px-6 lg:px-20 bg-[#0a182e]/30 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Marine ECO?</h2>
            <p className="text-xl text-slate-400 mb-12">
              We bridge the gap between profitable operations and environmental responsibility through high-fidelity data.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                {
                  title: 'Environmental Legacy',
                  desc: 'Significant reduction in your fleet\'s carbon footprint supporting global ESG goals.',
                },
                {
                  title: 'Cost-Efficiency',
                  desc: 'Up to 15% reduction in annual fuel costs through precision AI route management.',
                },
                {
                  title: 'Future-Proofing',
                  desc: 'Stay ahead of evolving maritime regulations like the EEXI and CII requirements.',
                },
                {
                  title: 'Operational Clarity',
                  desc: 'Unified dashboard providing visibility across the entire fleet for all stakeholders.',
                },
              ].map(({ title, desc }) => (
                <div key={title} className="glass-card p-6 rounded-xl border border-white/10 flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#10b981] mt-1">check_circle</span>
                  <div>
                    <h5 className="text-white font-bold mb-1">{title}</h5>
                    <p className="text-sm text-slate-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="py-20 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto glass-card rounded-3xl p-12 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 -z-10"
              style={{ background: 'linear-gradient(to right, rgba(16,185,129,0.1), rgba(20,184,166,0.1), rgba(10,24,46,0.1))' }}
            />
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
              Ready to Lead the Green Transition?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
              Join forward-thinking maritime leaders who are already optimizing their environmental impact with Sofonn Intelligence.
            </p>
            <button className="px-10 py-5 bg-[#10b981] text-[#0a182e] text-lg font-bold rounded-2xl hover:bg-[#14b8a6] transition-all shadow-2xl shadow-[#10b981]/30 cursor-pointer">
              Schedule a Consultation
            </button>
          </div>
        </section>

      </main>


    </div>
  );
}