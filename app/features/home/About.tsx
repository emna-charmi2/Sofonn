"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SOFONN_PILLARS = [
  {
    icon: "lightbulb",
    label: "Innovative Solutions",
    detail:
      "Leverage cutting-edge technology to optimize vessel performance, reduce operational costs, and enhance decision-making with real-time data insights.",
  },
  {
    icon: "verified_user",
    label: "Compliance Excellence",
    detail:
      "Ensure regulatory compliance with automated certification tracking, proactive deficiency management, and streamlined audits.",
  },
  {
    icon: "groups",
    label: "Crew Management",
    detail:
      "Manage crew assignments, track qualifications, and ensure your team is equipped with the skills needed for smooth vessel operations.",
  },
  {
    icon: "speed",
    label: "Operational Efficiency",
    detail:
      "Streamline vessel tracking, optimize resource allocation, and enhance operational efficiency with intelligent alert systems.",
  },
];

const rows = [
  SOFONN_PILLARS.slice(0, 2),
  SOFONN_PILLARS.slice(2, 4),
];

// Composant pour une statistique animée
const AnimatedStat = ({ 
  value, 
  label, 
  large = false 
}: { 
  value: string; 
  label: string; 
  large?: boolean;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const numericValue = parseFloat(value);
  const suffix = value.includes("+") ? "+" : value.includes("%") ? "%" : "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            let start = 0;
            const end = numericValue;
            const duration = 2000;
            const stepTime = 16;
            const steps = duration / stepTime;
            const increment = end / steps;

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setDisplayValue(end);
                clearInterval(timer);
              } else {
                setDisplayValue(Math.floor(start));
              }
            }, stepTime);

            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <div ref={elementRef} className="text-center">
      <p
        className={`font-extrabold ${large ? "text-4xl sm:text-5xl" : "text-3xl"}`}
        style={{
          background: "linear-gradient(90deg,#60a5fa,#818cf8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {displayValue}
        {suffix}
      </p>
      <p className={`text-slate-500 ${large ? "text-sm mt-2" : "text-xs uppercase tracking-wider mt-1"}`}>
        {label}
      </p>
    </div>
  );
};



export default function AboutUs() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <style jsx global>{`
        @keyframes fadeMove {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Section 1 : Meet Sofonn - métriques triangulaires */}
      <section className="py-28 px-4 sm:px-8 bg-[#050c1a] relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-[90%] max-w-6xl mx-auto relative z-10">
          {/* Titre accrocheur */}
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-extrabold text-white mb-4 tracking-tight">
              Meet{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#60a5fa,#3b82f6,#818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Sofonn
              </span>
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              The maritime intelligence platform that transforms complex operations into streamlined success.
              Reduce errors, save time, and gain complete visibility — from bridge to back office.
            </p>
            <div className="w-20 h-[3px] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mt-6" />
          </div>

          {/* Mise en page triangulaire des métriques */}
          <div className="relative flex flex-col items-center justify-center mt-12">
            {/* Carte principale : 100% au centre/haut */}
            <div
              className="group relative bg-white/5 backdrop-blur-sm rounded-[40px] p-8 text-center border border-white/10 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/8 hover:scale-[1.02] w-full max-w-md mx-auto"
              style={{
                animation: `fadeMove 0.6s ease-out 0s forwards`,
                opacity: 0,
                transform: 'translateY(-20px)',
              }}
            >
              <div className="mb-4 flex justify-center">
              </div>
              <AnimatedStat value="100%" label="" large />
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                real-time visibility across deck operations
              </p>
            </div>

            {/* Deux cartes secondaires en bas : gauche et droite */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 w-full mt-8">
              {[
                { value: "85%", label: "reduction in manual reporting errors" },
                { value: "80%", label: "less time spent on manual logs" },
              ].map((metric, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-[40px] p-6 text-center border border-white/10 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/8 hover:scale-[1.02] w-full sm:w-80"
                  style={{
                    animation: `fadeMove 0.6s ease-out ${0.2 + idx * 0.1}s forwards`,
                    opacity: 0,
                    transform: 'translateY(20px)',
                  }}
                >
                  <div className="mb-4 flex justify-center">
                   
                  </div>
                  <AnimatedStat value={metric.value} label="" large />
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

 
      </section>
    </>
  );
}