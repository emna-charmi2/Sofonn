"use client";
import { useState } from "react";

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

  // Regrouper les modules dans les lignes souhaitées
  const rows = [
    modules.slice(0, 3), // 3 premiers
    modules.slice(3, 5), // 2 suivants
    modules.slice(5, 8), // 3 derniers
  ];

  return (
    <section className="py-24 px-4 bg-[#050c1a] relative overflow-hidden">
      {/* Dégradés de fond */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#007bff]/[0.04] blur-[80px] rounded-full pointer-events-none" />
      <div className="max-w-5xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-2">
          Marine IQ Modules
        </h2>
        <p className="text-slate-500 text-center max-w-lg mx-auto">
          The complete ecosystem for maritime excellence.
        </p>
        <div className="w-12 h-0.5 bg-blue-500 mx-auto mt-3 mb-12 rounded-full" />

        <div className="flex flex-col gap-12">
          {rows.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${
                row.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'
              } ${row.length === 2 ? 'md:justify-center md:mx-auto md:w-2/3' : ''}`}
            >
              {row.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 items-start p-4 rounded-xl transition-colors hover:bg-white/[0.02]"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-400 text-xl">
                      {icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {desc}
                    </p>
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