"use client";

import { useEffect } from "react";
import AOS from "aos";
import HeroSectionMarineIA from "@/features/marine-ia/AboutUs";
import CoreIntelligence from "@/features/marine-ia/core";
import WhyChooseMarineIA from "@/features/marine-ia/Why";
import MarineIAModules from "@/features/marine-ia/modules";
import StrategicBenefits from "@/features/marine-ia/strategicBenefits";
import RolesAndModules from "@/features/marine-ia/Operations";
import IntelligencePipeline from "@/features/marine-ia/pipline";
import CallToAction from "@/features/marine-ia/CTA";
export default function MarineSolutionPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="min-h-screen  overflow-x-hidden">
      {/* Polices & icônes Material Symbols */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@20..48,100..700,0..1"
        rel="stylesheet"
      />

        {/* ========== SECTION HERO (contenu inchangé) ========== */}
        <div className="fixed inset-0 pointer-events-none">
  <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#e1294c]/10 blur-[130px]" />
  <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#e1294c]/8 blur-[120px]" />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#e1294c]/10 blur-[150px]" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(225,41,76,0.08)_0%,transparent_70%)]" />
</div>
<HeroSectionMarineIA/>
        {/* ========== SECTION REAL-TIME DATA ANALYSIS ========== */}
      
              <CoreIntelligence/>
    

        
<WhyChooseMarineIA/>
        {/* ========== KEY CAPABILITIES ========== */}
       
 
        {/* ========== SECTION : WHY MARINE IA (LISTE DES AVANTAGES) ========== */}
      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
  <div className="w-[90%] max-w-7xl mx-auto relative z-10">
    {/* En-tête */}
    <div className="text-center mb-16">
    
      <h2 className="text-5xl font-bold tracking-tighter text-white mt-3" data-aos="fade-up" data-aos-delay="100">
        The Clear Advantage
      </h2>
      <p className="max-w-2xl mx-auto text-zinc-400 text-sm leading-relaxed mt-4" data-aos="fade-up" data-aos-delay="200">
        Designed to tackle your toughest maritime challenges
      </p>
      <div className="w-16 h-0.75 bg-gradient-to-r from-[#e1294c] via-[#e1294c] to-[#e1294c] rounded-full mx-auto mt-6" data-aos="fade-up" data-aos-delay="200" />
    </div>

    {/* Cartes en grille 3 colonnes */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { icon: "verified_user", title: "Improved safety", desc: "Real-time risk alerts that help you avoid collisions, grounding, and other hazards." },
        { icon: "speed", title: "Operational efficiency", desc: "Lower fuel consumption through optimized routes and better voyage planning." },
        { icon: "insights", title: "Data-driven decisions", desc: "No more guesswork – clear, AI-powered recommendations for every situation." },
        { icon: "savings", title: "Resource savings", desc: "Automation for the crew reduces manual paperwork and repetitive tasks." },
        { icon: "gavel", title: "Compliance", desc: "Automatic regulatory checks and audit-ready reports for IMO, MARPOL, and more." },
        { icon: "visibility", title: "Full Visibility", desc: "Gain a complete overview of your operations anytime, anywhere in the world." }
      ].map((item, idx) => (
        <div
          key={item.title}
          className="flex gap-5 items-start p-7 rounded-2xl backdrop-blur-md bg-[#e1294c]/5 border border-[#e1294c]/20 transition-all duration-200 hover:border-[#e1294c]/40 hover:bg-[#e1294c]/10 hover:shadow-xl hover:shadow-[#e1294c]/10"
          data-aos="fade-up"
          data-aos-delay={idx * 80}
        >
          <div className="shrink-0 w-14 h-14 rounded-xl bg-[#e1294c]/15 border border-[#e1294c]/20 flex items-center justify-center transition group-hover:scale-110">
            <span className="material-symbols-outlined text-[#e1294c] text-[2rem] leading-none">{item.icon}</span>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
            <span className="text-zinc-500 leading-relaxed">{item.desc}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
 
<StrategicBenefits/>

       
<RolesAndModules />
        
               {/* ========== INTELLIGENCE PIPELINE ========== */}
               <IntelligencePipeline/>
        
                      {/* ========== FLEET CLASSIFICATION ENHANCEMENT ========== */}
       <MarineIAModules/>

      
        <CallToAction />
      

      {/* Bouton retour en haut */}
      <a href="#" className="fixed bottom-6 right-6 bg-white text-slate-900 p-3 rounded-full shadow-lg border border-slate-200 hover:bg-[#e1294c] hover:text-white transition z-50">
        <span className="material-symbols-outlined text-sm">arrow_upward</span>
      </a>
    </div>
  );
}
