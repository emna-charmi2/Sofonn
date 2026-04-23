import '@/app/globals.css';
import type { Metadata } from 'next';
import Operations from '@/features/marine-log/Operations';
import Why from '@/features/marine-log/why';
import Modules from '@/features/marine-log/modules';
import ModSecurity from '@/features/marine-log/security';
import CTA from '@/features/marine-log/CTA';
import GlobalSection from '@/features/marine-log/GlobalSection';
import AboutUs from '@/features/marine-log/AboutUs';
export const metadata: Metadata = {
  title: 'Sofonn — Marine Log',
  description: 'Maritime Intelligence Platform',
};

export default function MarineLogPage() {
  return (
    <div className="ds-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20@48,100@700,0@1,-50@200');

        body { background: var(--bg-base); color: var(--text-primary); font-family: 'Inter', sans-serif; }

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
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#FFC700]/3 blur-[130px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#FFC700]/6 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#FFC700]/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,199,0,0.08)_0%,transparent_70%)]" />
      </div>
      <AboutUs />

      {/* ── HOW IT TRANSFORMS ── */}
     <Operations/>

      {/* ── WHY CHOOSE (list) ── */}
        <Why/>
      
      <GlobalSection/>

   <ModSecurity/>
    <Modules/>
    <CTA/>

    </div>
  );
}