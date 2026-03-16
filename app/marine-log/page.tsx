import '@/app/globals.css';
import type { Metadata } from 'next';
import Operations from '../features/marine-log/Operations';
import Why from '../features/marine-log/why';
import Modules from '../features/marine-log/modules';
import ModSecurity from '../features/marine-log/security';
import CTA from '../features/marine-log/CTA';
export const metadata: Metadata = {
  title: 'Sofonn — Marine Log',
  description: 'Maritime Intelligence Platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

        :root {
          --accent: #FFC700;
          --accent-dim: rgba(255,199,0,0.12);
          --accent-border: rgba(255,199,0,0.25);
          --bg: #0a0a0f;
          --bg-card: rgba(255,255,255,0.03);
          --border: rgba(255,255,255,0.07);
          --text-muted: #64748b;
        }

        body { background: var(--bg); color: #e2e8f0; font-family: 'Inter', sans-serif; }

        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          line-height: 1;
          display: inline-flex;
          align-items: center;
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }

        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .animate-pulse-custom { animation: pulse 2s infinite; }
      `}</style>

      {/* ── HERO ── */}
      
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6 lg:px-20 pt-28 pb-16 relative overflow-hidden bg-[#0a0a0f]">
        {/* Left */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#FFC700]/25 rounded-full px-3.5 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC700] animate-pulse-custom" />
            <span className="text-[#FFC700] text-[0.65rem] font-bold tracking-widest uppercase">Maritime Intelligence Platform</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-black leading-[1.1] text-white mb-5">
            Unlock the Future of Vessel Management with{' '}
            <span className="text-[#FFC700]">Marine Log</span>
          </h1>
          <p className="text-sm text-slate-500 leading-[1.75] max-w-md mb-10">
            Integrated vessel reporting, automated data entry, and real-time compliance for modern maritime operations. Streamline your fleet's journey with precision.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 bg-[#FFC700] text-black font-extrabold text-sm px-8 py-3.5 rounded-xl border-none cursor-pointer transition-all hover:opacity-90 hover:shadow-[0_0_28px_rgba(255,199,0,0.4)]">
              Get Started
            </button>
            <button className="inline-flex items-center gap-2 bg-transparent text-slate-200 font-bold text-sm px-8 py-3.5 rounded-xl border border-white/[0.07] cursor-pointer transition-all hover:bg-white/[0.06]">
              <span className="material-symbols-outlined text-[#FFC700]" style={{ fontSize: '1.2rem' }}>play_circle</span>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right — dashboard visual */}
        <div className="rounded-2xl overflow-hidden border border-white/[0.07] shadow-[0_24px_80px_rgba(0,0,0,0.6)] relative">
          <div className="bg-[#0f1a2e] aspect-video flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,rgba(255,199,0,0.06)_0%,transparent_65%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(0,100,255,0.07)_0%,transparent_55%)]" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFC700" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <div className="relative z-10 text-center">
              <span className="material-symbols-outlined text-[#FFC700]/30" style={{ fontSize: '4rem' }}>map</span>
            </div>
          </div>
        </div>
      </section>

      <main>{children}</main>

      {/* ── HOW IT TRANSFORMS ── */}
     <Operations/>

      {/* ── WHY CHOOSE (list) ── */}
        <Why/>

      {/* ── WHY CHOOSE (CTA card) ── */}
      <section className="px-6 lg:px-20 py-24 bg-white/[0.015]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#FFC700]/[0.04] border border-[#FFC700]/25 rounded-[2.5rem] p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white leading-[1.1] mb-4">
                Why Choose <span className="text-[#FFC700]">Marine Log?</span>
              </h2>
              <p className="text-slate-400 text-[0.9rem] leading-[1.75] mb-8">
                Choosing Marine Log is a strategic choice for forward-thinking maritime leaders. Our platform integrates high-performance computing with deep domain expertise to deliver a solution that doesn't just record data, but drives operational excellence.
              </p>
              <ul className="list-none mb-8 space-y-4">
                {['Strategic Fleet Optimization', 'Future-Proof Compliance Framework', 'Enterprise-Grade Security'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-white font-semibold text-[0.9rem]">
                    <span className="material-symbols-outlined text-[#FFC700]" style={{ fontSize: '1rem' }}>verified</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="inline-flex items-center gap-2 bg-[#FFC700] text-black font-extrabold text-sm px-8 py-3.5 rounded-xl border-none cursor-pointer transition-all hover:opacity-90 hover:shadow-[0_0_28px_rgba(255,199,0,0.4)]">
                Explore Strategy
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/[0.07] aspect-video bg-[#0f1a2e] relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,15,0.6)] to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#FFC700]/20" style={{ fontSize: '4rem' }}>directions_boat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
 <Modules/>

      {/* ── SECURITY ── */}
                  <ModSecurity/>
      {/* ── JOIN CTA ── */}
    <CTA/>

    
    </>
  );
}