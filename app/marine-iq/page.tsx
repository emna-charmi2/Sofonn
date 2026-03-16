import '@/app/globals.css';
import VideoHome from '../components/ui/video-home';
import Operations from '../features/marine-iq/Operations';
import WhyIQ from '../features/marine-iq/Why';
import Modules from '../features/marine-iq/modules';
import CallToAction from '../features/marine-iq/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sofonn',
  description: 'Maritime Intelligence Platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
        * { font-family: 'Inter', sans-serif; }
        .material-symbols-outlined { font-family: 'Material Symbols Outlined'; line-height: 1; display: inline-flex; align-items: center; }

        /* Unified card style — same as "Why Choose" section */
        .card {          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 0.75rem;
          transition: background 0.2s;
        }
        .card:hover { background: rgba(255,255,255,0.03); }

        .liquid { background: radial-gradient(circle at top left, rgba(0,123,255,0.06) 0%, transparent 55%); }
        @keyframes ping { 0%{transform:scale(1);opacity:.6} 100%{transform:scale(2.2);opacity:0} }
        .ping-anim { animation: ping 1.2s ease-out infinite; }
        .grad-text {
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .section-divider {
          width: 3.5rem; height: 3px;
          background: #007bff;
          border-radius: 9999px;
          margin: 0.75rem auto 3.5rem;
        }
      `}</style>
  <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1rem 4rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Title */}
      <h1 style={{
        fontSize: 'clamp(2.8rem, 7vw, 5rem)',
        fontWeight: 900,
        lineHeight: 1.05,
        letterSpacing: '-0.04em',
        marginBottom: '1.2rem',
      }}>
        Operational{' '}
        <span style={{
          background: 'linear-gradient(90deg, #007bff 0%, #f59e0b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Intelligence
        </span>
      </h1>

      {/* Subtitle */}
      <p style={{
        fontSize: '0.95rem',
        color: '#94a3b8',
        maxWidth: 420,
        lineHeight: 1.7,
        marginBottom: '2rem',
        fontWeight: 400,
      }}>
        Modern maritime fleets powered by Sofonn IQ. Precision engineering
        for global shipping operations, compliance, and crew management.
      </p>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          background: '#007bff',
          color: '#fff',
          fontWeight: 700,
          fontSize: '0.9rem',
          padding: '0.8rem 1.8rem',
          borderRadius: '0.6rem',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 0 0 rgba(0,123,255,0)',
          transition: 'box-shadow 0.2s',
        }}
         
        >
          Request Demo
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        <button style={{
          background: 'rgba(15,23,42,0.6)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: '#94a3b8',
          fontWeight: 700,
          fontSize: '0.9rem',
          padding: '0.8rem 1.8rem',
          borderRadius: '0.6rem',
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
>
          Learn More
        </button>
      </div>

      {/* Video container */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: 860,
        borderRadius: '1rem',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
        aspectRatio: '16/9',
        background: '#050c1a',
        cursor: 'pointer',
      }}>
        <VideoHome/>
      </div>
    </section>
   

      {/* ── YOUR COMPETITIVE EDGE ── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-2">Your Competitive Edge</h2>
          <p className="text-slate-500 text-center">Tools that move the needle for modern maritime operators.</p>
          <div className="section-divider" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {icon:'trending_up', title:'Improve Efficiency', desc:'Streamline workflows with automated intelligence, reducing manual data entry and operational lag.'},
              {icon:'payments', title:'Boost Profitability', desc:'Reduce overhead and optimize resource allocation through data-driven financial insights.'},
              {icon:'verified_user', title:'Enhance Standards', desc:'Maintain peak compliance and safety protocols with automated tracking and real-time audits.'},
            ].map(({icon,title,desc}) => (
              <div key={title} className="card p-6">
                <span className="material-symbols-outlined text-[#007bff] mb-3 block" style={{fontSize:'1.6rem'}}>{icon}</span>
                <h3 className="text-sm font-bold text-[#007bff] mb-1.5">{title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT TRANSFORMS ── */}
            <Operations/>

      {/* ── WHY CHOOSE ── */}
            <WhyIQ/>

      {/* ── MODULES ── */}
     <Modules/>
      {/* ── CTA ── */}
      <CallToAction/>

    </>
  );
}