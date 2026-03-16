import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marine AI - The Maritime Digital Brain',
  description: 'AI-powered maritime operations with deep analytics and predictive models.',
};

export default function MarineAIPage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-[#05070a] text-slate-100 font-sans">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        * { font-family: 'Inter', sans-serif; }
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;
          line-height: 1; display: inline-flex; align-items: center;
        }
        .liquid-glass {
          background: rgba(10,15,25,0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,31,31,0.15);
        }
        .red-glow { box-shadow: 0 0 20px rgba(255,31,31,0.15); }
        .text-gradient-red {
          background: linear-gradient(to right, #ffffff, #ff1f1f);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .bar-hover { transition: width 0.6s ease; }
        @keyframes ping-dot {
          0%,100% { transform: scale(1); opacity: 0.75; }
          50% { transform: scale(2); opacity: 0; }
        }
        .ping-dot { animation: ping-dot 1.4s ease-out infinite; }
      `}</style>

    

      {/* ── HERO ── */}
      <section className="relative pt-20 pb-32 px-6">
        {/* Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#ff1f1f]/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-[#ff1f1f]/20 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 h-24 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff1f1f]/10 border border-[#ff1f1f]/20 text-[#ff1f1f] text-xs font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-[#ff1f1f] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff1f1f]" />
            </span>
            Neural Core v4.0 Active
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-gradient-red">
            Marine AI: The Maritime Digital Brain
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Our AI module revolutionizes maritime operations with deep analytics and predictive models for optimized routes, predictive maintenance, and continuous improvement, driving efficiency, cost reduction, and risk mitigation.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-8 py-4 bg-[#ff1f1f] text-white font-bold rounded-xl hover:scale-105 transition-transform flex items-center gap-2 red-glow cursor-pointer">
              Explore the Engine
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
              Watch Technical Demo
            </button>
          </div>
        </div>

        {/* Hero visual */}
        <div className="max-w-7xl mx-auto mt-24">
          <div className="liquid-glass rounded-2xl p-4 overflow-hidden group">
            <div className="aspect-video w-full rounded-xl bg-slate-900 overflow-hidden relative">
              {/* Dark gradient placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-[#0d1117] via-[#1a0a0a] to-[#05070a] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#ff1f1f]/20" style={{fontSize:'8rem'}}>hub</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent" />

              {/* Stats overlay */}
              <div className="absolute bottom-10 left-10 flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-[#ff1f1f] text-2xl font-black">94%</span>
                  <span className="text-xs uppercase text-slate-400 font-bold tracking-widest">Accuracy</span>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-[#ff1f1f] text-2xl font-black">12.4k</span>
                  <span className="text-xs uppercase text-slate-400 font-bold tracking-widest">Nodes Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL CORE ── */}
      <section className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <h2 className="text-[#ff1f1f] font-bold uppercase tracking-[0.2em] text-sm mb-4">
                Neural Architecture
              </h2>
              <h3 className="text-4xl md:text-5xl font-black mb-8">The Engineered Intelligence</h3>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                At the center of Marine AI is a multi-layered neural network trained on petabytes of historical maritime data. Our architecture processes real-time environmental variables to synthesize optimal operational decisions.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: 'database',
                    title: 'Deep Analytics',
                    desc: 'Processing massive datasets to uncover hidden operational patterns and seasonal fluctuations across global trade routes.',
                    accent: true,
                  },
                  {
                    icon: 'hub',
                    title: 'Neural Networks',
                    desc: 'Sophisticated AI layers simulating complex maritime decision-making, considering fuel viscosity, hull drag, and current velocities.',
                    accent: false,
                  },
                  {
                    icon: 'query_stats',
                    title: 'Predictive Modeling',
                    desc: 'Forecasting future states with high fidelity to prevent downtime and optimize performance through proactive adjustments.',
                    accent: false,
                  },
                ].map(({ icon, title, desc, accent }) => (
                  <div
                    key={title}
                    className={`liquid-glass p-6 rounded-xl flex gap-6 items-start ${accent ? 'border-l-4 border-l-[#ff1f1f]' : ''}`}
                  >
                    <div className="bg-[#ff1f1f]/10 p-3 rounded-lg flex-shrink-0">
                      <span className="material-symbols-outlined text-[#ff1f1f]">{icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{title}</h4>
                      <p className="text-slate-400 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — visual */}
            <div className="relative">
              <div className="absolute -inset-10 bg-[#ff1f1f]/5 blur-[100px] rounded-full" />
              <div className="relative z-10 rounded-3xl border border-white/5 overflow-hidden aspect-square bg-gradient-to-br from-[#1a0505] via-[#0d0a0a] to-[#05070a] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#ff1f1f]/20" style={{fontSize:'12rem'}}>memory</span>
                {/* Grid overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="redgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ff1f1f" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#redgrid)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC BENEFITS ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Strategic Benefits</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Tangible operational advantages delivered through our integrated AI framework.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'route',
                title: 'Optimized Routes',
                desc: 'Dynamic route calculation based on real-time weather, port congestion, and fuel efficiency metrics. Reductions in transit time by up to 15%.',
              },
              {
                icon: 'build_circle',
                title: 'Predictive Maintenance',
                desc: 'Sensor-driven anomaly detection identifies equipment fatigue before failure. Transition from reactive to preventative maintenance schedules.',
              },
              {
                icon: 'security',
                title: 'Risk Mitigation',
                desc: 'AI-powered threat assessment for navigation and cybersecurity. Early warning systems for hazardous weather and geopolitical disruptions.',
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="liquid-glass p-10 rounded-2xl group hover:border-[#ff1f1f]/40 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-[#ff1f1f]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[#ff1f1f] text-3xl">{icon}</span>
                </div>
                <h4 className="text-2xl font-bold mb-4">{title}</h4>
                <p className="text-slate-400 leading-relaxed mb-6">{desc}</p>
                <div className="h-1 w-12 bg-[#ff1f1f]/20 rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPERATIONAL IMPACT ── */}
      <section className="py-24 px-6 bg-slate-950/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="liquid-glass rounded-3xl p-12 overflow-hidden relative">
            {/* Bg icon */}
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[#ff1f1f]" style={{fontSize:'200px'}}>analytics</span>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-12">System Efficiency Gains</h3>
              <div className="grid md:grid-cols-4 gap-12">
                {[
                  { label: 'Fuel Savings',   value: '22%', pct: '22%' },
                  { label: 'CO2 Reduction',  value: '18%', pct: '18%' },
                  { label: 'Time Savings',   value: '35%', pct: '35%' },
                  { label: 'Cost Reduction', value: '28%', pct: '28%' },
                ].map(({ label, value, pct }) => (
                  <div key={label} className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">{label}</span>
                      <span className="text-[#ff1f1f] font-bold">{value}</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-[#ff1f1f] rounded-full" style={{ width: pct }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}