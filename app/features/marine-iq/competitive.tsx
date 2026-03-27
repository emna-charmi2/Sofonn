"use client";

import { useState, useEffect } from "react";

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

  // Initialize AOS
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init({
        duration: 800,
        once: true,
        offset: 100,
      });
    });
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />
      {/* Include AOS CSS (if not already present) */}
      <link
        href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        rel="stylesheet"
      />

      <section className="py-28 px-6 lg:px-20 relative overflow-hidden min-h-screen grid place-items-center">
        {/* Background glows – preserved */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-[90%] max-w-480 mx-auto relative z-10">
          {/* Header with AOS */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="bg-clip-text text-transparent mb-5">
              Your Competitive Edge
            </h2>
            <p className="max-w-2xl mx-auto text-lg">
              Tools that move the needle for modern maritime operators.
            </p>
            <div className="w-16 h-0.75 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full mx-auto mt-6" />
          </div>

          {/* Two‑column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left column – accordion */}
            <div
              className="space-y-4"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-offset="50"
            >
              {items.map(({ id, icon, title, desc }) => (
                <div
                  key={id}
                  className={`group bg-white/[0.03] border rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden ${
                    expanded === id
                      ? "border-blue-500/40 bg-blue-500/10"
                      : "border-white/[0.07] hover:border-blue-500/40 hover:bg-blue-500/10"
                  }`}
                  onClick={() => toggle(id)}
                >
                  <div className="flex gap-5 items-start">
                    {/* Icon with blur effect */}
                    <div className="relative shrink-0">
                      <div className="absolute w-12 h-12 bg-blue-500/10 rounded-full blur-[20px] -top-2 -left-2" />
                      <div className="relative w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400">
                        <span className="material-symbols-outlined" style={{ fontSize: "1.5rem" }}>
                          {icon}
                        </span>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h4>{title}</h4>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expanded === id ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="leading-relaxed">{desc}</p>
                      </div>
                    </div>

                    {/* Chevron */}
                    <div className="shrink-0 self-center">
                      <span
                        className={`material-symbols-outlined leading-none transition-transform duration-300 ${
                          expanded === id ? "rotate-180" : ""
                        }`}
                      >
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column – orbital icons */}
            <div
              className="relative flex justify-center items-center"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-offset="50"
            >
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                {/* Central hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-blue-500/20 border border-blue-500/40 shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl">hub</span>
                  </div>
                </div>

                {/* Orbiting nodes */}
                <div className="absolute inset-0 animate-orbit-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-400 text-xl">anchor</span>
                  </div>
                </div>
                <div className="absolute inset-0 animate-orbit-medium">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-400 text-xl">radar</span>
                  </div>
                </div>
                <div className="absolute inset-0 animate-orbit-fast">
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-400 text-xl">waves</span>
                  </div>
                </div>
                <div className="absolute inset-0 animate-orbit-medium-reverse">
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-400 text-xl">map</span>
                  </div>
                </div>

                {/* Radar sweep effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 animate-radar-sweep" />
                </div>

                {/* Outer rings */}
                <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-pulse-slow" />
                <div className="absolute inset-4 rounded-full border border-blue-500/10 animate-pulse-slow" />
                <div className="absolute inset-8 rounded-full border border-blue-500/5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes orbit-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-medium {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-fast {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-medium-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes radar-sweep {
          0% { transform: translateX(-100%) rotate(0deg); }
          100% { transform: translateX(100%) rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.02); }
        }
        .animate-orbit-slow {
          animation: orbit-slow 20s linear infinite;
        }
        .animate-orbit-medium {
          animation: orbit-medium 15s linear infinite;
        }
        .animate-orbit-fast {
          animation: orbit-fast 10s linear infinite;
        }
        .animate-orbit-medium-reverse {
          animation: orbit-medium-reverse 18s linear infinite;
        }
        .animate-radar-sweep {
          animation: radar-sweep 6s linear infinite;
          transform-origin: center;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}