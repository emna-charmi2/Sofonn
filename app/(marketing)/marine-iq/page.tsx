import '@/app/globals.css';
import Operations from '@/features/marine-iq/Operations';
import WhyIQ from '@/features/marine-iq/Why';
import Modules from '@/features/marine-iq/modules';
import CompetitiveEdge from '@/features/marine-iq/competitive';
import StorytellingSection from '@/features/marine-iq/story';
import CallToAction from '@/features/marine-iq/CTA';
import type { Metadata } from 'next';
import AboutUs from '@/features/marine-iq/AboutUs';
import Section from '@/features/marine-iq/Section';
export const metadata: Metadata = {
  title: 'Sofonn',
  description: 'Maritime Intelligence Platform',
};

export default function MarineIQPage() {
  return (
    <div className="ds-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
        * { font-family: 'Inter', sans-serif; }
        .material-symbols-outlined { font-family: 'Material Symbols Outlined'; line-height: 1; display: inline-flex; align-items: center; }

        .card {
          border: 1px solid var(--border-card);
          border-radius: 0.75rem;
          transition: background 0.2s;
        }
        .card:hover { background: var(--bg-card-hover); }

        .liquid { background: radial-gradient(circle at top left, var(--accent-glow) 0%, transparent 55%); }
        @keyframes ping { 0%{transform:scale(1);opacity:.6} 100%{transform:scale(2.2);opacity:0} }
        .ping-anim { animation: ping 1.2s ease-out infinite; }
        .grad-text {
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
      `}</style>
          <div className="fixed inset-0 pointer-events-none">
  <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#00b0ff]/5 blur-[130px]" />
  <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#00b0ff]/7 blur-[120px]" />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00b0ff]/10 blur-[150px]" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,176,255,0.08)_0%,transparent_70%)]" />
</div>
     
<AboutUs />
      <CompetitiveEdge />
      <Operations />
<StorytellingSection/>
      <WhyIQ />
      <Modules />
      <CallToAction />
    </div>
  );
}

