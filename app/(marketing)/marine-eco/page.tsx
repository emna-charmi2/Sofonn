"use client";


import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import EcoHero from "@/features/marine-eco/AboutUs";
import EcoInitiatives from "@/features/marine-eco/initiative";
import CompetitiveEco from "@/features/marine-eco/Competitive";
import IntelligenceEngine from "@/features/marine-eco/engine";
import WhyEco from "@/features/marine-eco/why";
import MarineEcoModules from "@/features/marine-eco/Modules";
import CallToAction from "@/features/marine-eco/CTA";
/* ══════════════════════════════ DATA ══════════════════════════════════════ */

const INITIATIVES = [
  {
    icon: "waves",
    title: "Hull Optimization",
    desc: "Minimize drag and reduce fuel consumption with advanced hydrodynamic data modeling and real-time fouling analysis.",
  },
  {
    icon: "route",
    title: "AI Route Management",
    desc: "Dynamic pathfinding adjusts for currents, weather, and port traffic — reducing engine load and transit time via neural networks.",
  },
  {
    icon: "battery_charging_full",
    title: "Auxiliary Power Control",
    desc: "Smart management of on-board power systems and shore-side connectivity to lower harbor emissions to near-zero.",
  },
];

const EDGE_ACCORDION = [
  {
    icon: "trending_up",
    title: "Cut Your Carbon Footprint",
    body: "Pinpoint your highest-emission sources in seconds. Marine-ECO maps every gram of CO₂, NOₓ, and SOₓ across your fleet so you can act with surgical precision — not guesswork.",
  },
  {
    icon: "payments",
    title: "Reduce Operational Costs",
    body: "Fuel is your biggest variable cost. Our real-time optimization engine continuously identifies voyage inefficiencies, delivering an average 15–25% reduction in fuel spend within the first quarter.",
  },
  {
    icon: "verified_user",
    title: "Stay Ahead of Regulations",
    body: "MARPOL, IMO 2030, CII, EEXI — compliance deadlines don't wait. Marine-ECO automates documentation and sends proactive alerts before any certification or threshold is breached.",
  },
];


/* ══════════════════════════════ PAGE ══════════════════════════════════════ */

export default function MarineEcoPage() {
  const [tab, setTab] = useState<"operators" | "vessels">("operators");
  const [statsOn, setStatsOn] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsOn(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ── FONTS & ICONS ── */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
      />
      <style>{`
        .mso { font-family:'Material Symbols Outlined';font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;line-height:1;display:inline-flex;align-items:center; }
        @keyframes ping { 75%,100%{transform:scale(2);opacity:0} }
        .ping { animation:ping 1.5s cubic-bezier(0,0,0.2,1) infinite; }
        @keyframes pulse-line { 0%,100%{opacity:.6} 50%{opacity:1} }
        .pulse-line { animation:pulse-line 2s ease-in-out infinite; }
        .eco-grid-bg {
          background-image:
            linear-gradient(rgba(16,185,129,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16,185,129,.035) 1px, transparent 1px);
          background-size: 56px 56px;
        }
        .tab-active  { background:#059669; color:#fff; }
        .tab-passive { color:#94a3b8; }
        .tab-passive:hover { color:#fff; }
      `}</style>


<div className="fixed inset-0 pointer-events-none">
  <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#45a894]/10 blur-[130px]" />
  <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#45a894]/6 blur-[120px]" />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#45a894]/10 blur-[150px]" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(69,168,148,0.08)_0%,transparent_70%)]" />
</div>
                <EcoHero />
                <EcoInitiatives/>
                <CompetitiveEco/>

                <WhyEco/>
   
                <IntelligenceEngine/>
    
             
   
              <MarineEcoModules/>
      
<CallToAction />
 
    </>
  );
}
