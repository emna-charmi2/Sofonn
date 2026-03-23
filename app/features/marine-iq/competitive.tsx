"use client";

import { useState } from "react";
import Image from "next/image";

export default function CompetitiveEdge() {
  const items = [
    {
      id: "efficiency",
      icon: "trending_up",
      title: "Improve Efficiency",
      desc: "Streamline workflows with automated intelligence, reducing manual data entry and operational lag.",
    },
    {
      id: "profitability",
      icon: "payments",
      title: "Boost Profitability",
      desc: "Reduce overhead and optimize resource allocation through data-driven financial insights.",
    },
    {
      id: "standards",
      icon: "verified_user",
      title: "Enhance Standards",
      desc: "Maintain peak compliance and safety protocols with automated tracking and real-time audits.",
    },
  ];

  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-28 px-4 sm:px-8 bg-[#050c1a] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-[80%] max-w-480 mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-widest">
            BENEFITS
          </span>
          <h2 className="text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold text-white mt-3 mb-5 leading-tight tracking-tight">
            Your Competitive Edge
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-[clamp(1rem,1.5vw,1.2rem)] leading-relaxed">
            Tools that move the needle for modern maritime operators.
          </p>
          <div className="w-16 h-0.75 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full mx-auto mt-6" />
        </div>

        {/* Content: two columns */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Accordion list */}
          <div className="flex-1 w-full">
            {items.map(({ id, icon, title, desc }, index) => (
              <div key={id}>
                {/* Top divider */}
                {index === 0 && <div className="h-px bg-white/[0.07]" />}

                <div
                  className="cursor-pointer group py-7 px-2 transition-all duration-200"
                  onClick={() => toggle(id)}
                >
                  <div className="flex gap-5 items-start">
                    {/* Icon */}
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center transition-colors duration-200 group-hover:bg-blue-500/25 group-hover:border-blue-500/40">
                      <span className="material-symbols-outlined text-blue-400 text-[2rem] leading-none">
                        {icon}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-[1.4rem] font-bold text-white leading-snug">
                        {title}
                      </h3>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expanded === id ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-[1.1rem] text-slate-400 leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>

                    {/* Chevron */}
                    <div className="shrink-0 self-center ml-2">
                      <span
                        className={`material-symbols-outlined text-slate-500 text-[1.4rem] leading-none transition-transform duration-300 ${
                          expanded === id ? "rotate-180" : ""
                        }`}
                      >
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom divider */}
                <div className="h-px bg-white/[0.07]" />
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/3 border border-white/[0.07] shadow-xl shadow-blue-500/5">
              <Image
                src="/gem.png"
                alt="Competitive edge illustration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}