"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

// ========== Données issues de OFFER_ITEMS ==========
const OFFER_ITEMS = [
  { icon: '/icons/home/light-bulb.png',          title: 'Innovative Solutions',   desc: 'Leverage cutting-edge technology to optimize vessel performance, reduce operational costs, and enhance decision-making with real-time data insights.' },
  { icon: '/icons/home/icon-compilance.png',     title: 'Compliance Excellence',  desc: 'Ensure regulatory compliance with automated certification tracking, proactive deficiency management, and streamlined audits.' },
  { icon: '/icons/home/icon-crew-mangement.png', title: 'Crew Management',        desc: 'Manage crew assignments, track qualifications, and ensure your team is equipped with the skills needed for smooth vessel operations.' },
  { icon:'/icons/home/icon-efficiency.png',      title: 'Operational Efficiency', desc: 'Streamline vessel tracking, optimize resource allocation, and enhance operational efficiency with intelligent alert systems.' },
];

// Transformation pour la timeline (ajout des ids et alternance left/right)
interface Feature {
  id: string;
  title: string;
  desc: string;
  side: "left" | "right";
  icon: React.ReactNode;
}

const FEATURES: Feature[] = OFFER_ITEMS.map((item, index) => ({
  id: item.title.toLowerCase().replace(/\s+/g, '-'),
  side: index % 2 === 0 ? 'left' : 'right', // alterne gauche/droite
  title: item.title,
  desc: item.desc,
  icon: (
    <Image
      src={item.icon}
      alt={item.title}
      width={28}
      height={28}
      className="object-contain"
    />
  ),
}));

// ========== Composants de la timeline (inchangés) ==========
function Node({ active }: { active: boolean }) {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        border: "4px solid rgba(255,255,255,0.92)",
        background: "#3b82f6",
        boxShadow: active
          ? "0 0 0 6px rgba(59,130,246,0.3), 0 0 24px rgba(59,130,246,0.4)"
          : "none",
        transition: "box-shadow 0.6s ease",
        position: "relative",
        zIndex: 30,
        flexShrink: 0,
      }}
    />
  );
}

function ZConnector({ side, active, uid }: { side: "left" | "right"; active: boolean; uid: string }) {
  const W = 320;
  const H = 80;
  const midY = H / 2;

  const startX = side === "left" ? W : 0;   // node
  const endX   = side === "left" ? 0 : W;   // card

  const offset = 80; // longueur du "Z"

  const d = side === "left"
    ? `M ${startX} ${midY} 
       L ${startX - offset} ${midY} 
       L ${offset} ${midY} 
       L ${endX} ${midY}`
    : `M ${startX} ${midY} 
       L ${startX + offset} ${midY} 
       L ${W - offset} ${midY} 
       L ${endX} ${midY}`;

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} fill="none">
      <path
        d={d}
        stroke={active ? "#818cf8" : "rgba(255,255,255,0.15)"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function FeatureCard({ feature, active, cardRef }: { feature: Feature; active: boolean; cardRef: (el: HTMLDivElement | null) => void }) {
  const { title, desc, icon, side } = feature;

  return (
    <div
      ref={cardRef}
      className={`relative rounded-2xl p-7 border ${side === "right" ? "text-right" : "text-left"}`}
      style={{
        background: active
          ? "linear-gradient(140deg, rgba(30,64,175,0.45), rgba(59,130,246,0.25))"
          : "rgba(255,255,255,0.03)",
        borderColor: active ? "rgba(96,165,250,0.4)" : "rgba(255,255,255,0.07)",
        boxShadow: active
          ? "0 0 0 1px rgba(96,165,250,0.25), 0 20px 70px rgba(30,64,175,0.22)"
          : "none",
        transform: active ? "scale(1.025)" : "scale(1)",
        transition: "all 0.65s cubic-bezier(0.34,1.2,0.64,1)",
      }}
    >
      <div className={`flex mb-4 ${side === "right" ? "justify-end" : "justify-start"}`}>
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center border"
          style={{
            borderColor: active ? "rgba(96,165,250,0.45)" : "rgba(255,255,255,0.09)",
            background: active ? "rgba(59,130,246,0.22)" : "rgba(255,255,255,0.025)",
            color: active ? "#dbeafe" : "rgba(255,255,255,0.3)",
          }}
        >
          {icon}
        </div>
      </div>
      <div style={{ color: active ? "#fff" : "rgba(255,255,255,0.35)" }}>
        <h3 className="mb-2">{title}</h3>
      </div>
      <div style={{ color: active ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.2)" }}>
        <p>{desc}</p>
      </div>
    </div>
  );
}

// ========== Composant principal ==========
export default function offersinspo() {
  const [activeSet, setActiveSet] = useState<Set<string>>(new Set());
  const [lineProgress, setLineProgress] = useState(0);

  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const trackRef = useRef<HTMLDivElement | null>(null);

  const setCardRef = useCallback((id: string) => (el: HTMLDivElement | null) => {
    cardRefs.current[id] = el;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const trigger = window.innerHeight * 0.52;
      if (trackRef.current) {
        const r = trackRef.current.getBoundingClientRect();
        const progress = ((trigger - r.top) / r.height) * 100;
        setLineProgress(Math.max(0, Math.min(100, progress)));
      }

      const next = new Set<string>();
      FEATURES.forEach(({ id }) => {
        const el = cardRefs.current[id];
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top + r.height * 0.4 < trigger) next.add(id);
      });
      setActiveSet(next);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-[#030712] overflow-hidden">
      {/* Glow optionnel (adapté de .glow-tl) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 75% 50% at 50% 35%, rgba(59,130,246,0.08), transparent)" }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-6">
        {/* Header repris de la section Offers */}
        <div className="text-center mb-20">
          <span className="text-blue-400/70 block uppercase tracking-wider mb-4">
            Our Platform
          </span>
          <div className="text-white">
            <h2 className="mb-5">What We Offer</h2>
          </div>
          <p className="max-w-2xl mx-auto">
            Marine IQ delivers a comprehensive suite of tools designed to streamline and optimize every aspect of maritime operations, ensuring efficiency, compliance, and profitability.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale */}
          <div
            className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 pointer-events-none"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <div ref={trackRef} className="relative h-full w-full">
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${lineProgress}%`,
                  background: "linear-gradient(to bottom, #60a5fa, #3b82f6)",
                  boxShadow: "0 0 20px rgba(59,130,246,0.5)",
                  transition: "height 0.06s linear",
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-30 md:gap-20 lg:gap-32">
            {FEATURES.map((feature) => {
              const active = activeSet.has(feature.id);
              const isLeft = feature.side === "left";

              return (
                <div key={feature.id} className="relative flex items-center min-h-35">
                  {isLeft ? (
                    <>
                      <div className="flex-1 pr-12 md:pr-20">
                        <FeatureCard feature={feature} active={active} cardRef={setCardRef(feature.id)} />
                      </div>
                      <div className="shrink-0 w-[320px]">
                        <ZConnector side="left" active={active} uid={feature.id} />
                      </div>
                      <div className="flex-1" />
                    </>
                  ) : (
                    <>
                      <div className="flex-1" />
                      <div className="shrink-0 w-[320px]">
                        <ZConnector side="right" active={active} uid={feature.id} />
                      </div>
                      <div className="flex-1 pl-12 md:pl-20">
                        <FeatureCard feature={feature} active={active} cardRef={setCardRef(feature.id)} />
                      </div>
                    </>
                  )}

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                    <Node active={active} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      
      </div>
    </section>
  );
}