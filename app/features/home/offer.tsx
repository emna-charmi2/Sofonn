"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const OFFER_ITEMS = [
  {
    icon: "/icons/home/light-bulb.png",
    title: "Innovative Solutions",
    desc: "Leverage cutting-edge technology to optimize vessel performance, reduce operational costs, and enhance decision-making with real-time data insights.",
  },
  {
    icon: "/icons/home/icon-compilance.png",
    title: "Compliance Excellence",
    desc: "Ensure regulatory compliance with automated certification tracking, proactive deficiency management, and streamlined audits across your fleet.",
  },
  {
    icon: "/icons/home/icon-crew-mangement.png",
    title: "Crew Management",
    desc: "Manage crew assignments, track qualifications, and ensure your team is equipped with the skills needed for smooth vessel operations.",
  },
  {
    icon: "/icons/home/icon-efficiency.png",
    title: "Operational Efficiency",
    desc: "Streamline vessel tracking, optimize resource allocation, and enhance operational efficiency with intelligent alert systems.",
  },
];

interface Feature {
  id: string;
  title: string;
  desc: string;
  side: "left" | "right";
  icon: React.ReactNode;
}

const FEATURES: Feature[] = OFFER_ITEMS.map((item, index) => ({
  id: item.title.toLowerCase().replace(/\s+/g, "-"),
  side: index % 2 === 0 ? "left" : "right",
  title: item.title,
  desc: item.desc,
  icon: (
    <Image
      src={item.icon}
      alt={item.title}
      width={32}
      height={32}
      className="object-contain"
      style={{
        filter:
          "brightness(0) saturate(100%) invert(59%) sepia(86%) saturate(1277%) hue-rotate(196deg) brightness(96%) contrast(92%)",
      }}
    />
  ),
}));

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);
  return matches;
}

/* ─── Node with blue inactive / violet active ─── */
function Node({ active }: { active: boolean }) {
  return (
    <div className="relative flex items-center justify-center z-10">
      <div
        className={`
          w-4 h-4 rounded-full border-2 transition-all duration-500
          ${
            active
              ? "bg-violet-500 border-violet-400/80 scale-[1.3] shadow-[0_0_0_4px_rgba(139,92,246,0.2),0_0_16px_rgba(139,92,246,0.6),0_0_40px_rgba(139,92,246,0.35)]"
              : "bg-blue-500/30 border-blue-400/50 scale-100"
          }
        `}
      />
      {active && (
        <div className="absolute inset-[-6px] rounded-full border border-violet-400/35 animate-ping" />
      )}
    </div>
  );
}

/* ─── FeatureCard (unchanged) ─── */
function FeatureCard({
  feature,
  active,
  cardRef,
}: {
  feature: Feature;
  active: boolean;
  cardRef: (el: HTMLDivElement | null) => void;
}) {
  const { title, desc, icon, side } = feature;
  const isRight = side === "right";

  return (
    <div
      ref={cardRef}
      className={`
        group flex flex-col p-8 rounded-2xl border transition-all duration-200
        ${isRight ? "items-end text-right" : "items-start text-left"}
        hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/40 hover:bg-blue-500/10
        ${
          active
            ? "bg-blue-400/10 border-blue-400/30 shadow-[0_0_0_1px_rgba(96,165,250,0.08),0_8px_32px_rgba(96,165,250,0.1),0_0_60px_rgba(96,165,250,0.05)]"
            : "bg-white/5 border-white/10"
        }
      `}
      style={{
        background: active ? "rgba(59,130,246,0.1)" : "rgba(255,255,255,0.03)",
        borderColor: active ? "rgba(96,165,250,0.3)" : "rgba(255,255,255,0.07)",
      }}
    >
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
        style={{
          background: "rgba(59,130,246,0.15)",
          border: "1px solid rgba(59,130,246,0.20)",
        }}
      >
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

/* ─── Connector with violet when active ─── */
function Connector({
  side,
  active,
  connectorRef,
}: {
  side: "left" | "right";
  active: boolean;
  connectorRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={connectorRef}
      className="absolute top-1/2 -translate-y-1/2 h-px pointer-events-none z-[3]"
      style={{
        width: 0,
        opacity: 0,
        transition: "width 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease",
        ...(side === "left"
          ? {
              right: 0,
              background: active
                ? "linear-gradient(90deg, rgba(139,92,246,0.2), rgba(139,92,246,0.8))"
                : "linear-gradient(90deg, rgba(96,165,250,0.15), rgba(96,165,250,0.6))",
            }
          : {
              left: 0,
              background: active
                ? "linear-gradient(90deg, rgba(139,92,246,0.8), rgba(139,92,246,0.2))"
                : "linear-gradient(90deg, rgba(96,165,250,0.6), rgba(96,165,250,0.15))",
            }),
      }}
    />
  );
}

/* ─── Main Section ─── */
export default function TimelineSection() {
  const [activeSet, setActiveSet] = useState<Set<string>>(new Set());
  const [lineProgress, setLineProgress] = useState(0);

  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const connectorRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const nodeRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const setCardRef = useCallback(
    (id: string) => (el: HTMLDivElement | null) => {
      cardRefs.current[id] = el;
    },
    []
  );

  const setConnectorRef = useCallback(
    (id: string) => (el: HTMLDivElement | null) => {
      connectorRefs.current[id] = el;
    },
    []
  );

  const setNodeRef = useCallback(
    (id: string) => (el: HTMLDivElement | null) => {
      nodeRefs.current[id] = el;
    },
    []
  );

  const measureConnector = useCallback((feature: Feature) => {
    const nodeEl = nodeRefs.current[feature.id];
    const cardEl = cardRefs.current[feature.id];
    if (!nodeEl || !cardEl) return 0;
    const nodeRect = nodeEl.getBoundingClientRect();
    const cardRect = cardEl.getBoundingClientRect();
    const nodeCenterX = nodeRect.left + nodeRect.width / 2;
    if (feature.side === "left") {
      return Math.max(0, nodeCenterX - cardRect.right);
    } else {
      return Math.max(0, cardRect.left - nodeCenterX);
    }
  }, []);

  const applyConnectors = useCallback(
    (nextActive: Set<string>) => {
      FEATURES.forEach((feature) => {
        const conEl = connectorRefs.current[feature.id];
        if (!conEl) return;
        const w = measureConnector(feature);
        const active = nextActive.has(feature.id);
        conEl.style.width = active ? `${w}px` : "0px";
        conEl.style.opacity = active ? "1" : "0";
        
        // update gradient to violet if active, else blue
        if (active) {
          conEl.style.background =
            feature.side === "left"
              ? "linear-gradient(90deg, rgba(139,92,246,0.2), rgba(139,92,246,0.8))"
              : "linear-gradient(90deg, rgba(139,92,246,0.8), rgba(139,92,246,0.2))";
        } else {
          conEl.style.background =
            feature.side === "left"
              ? "linear-gradient(90deg, rgba(96,165,250,0.15), rgba(96,165,250,0.6))"
              : "linear-gradient(90deg, rgba(96,165,250,0.6), rgba(96,165,250,0.15))";
        }
      });
    },
    [measureConnector]
  );

  useEffect(() => {
    const updateTimeline = () => {
      const trigger = window.innerHeight * 0.62;

      if (trackRef.current && !isMobile) {
        const rect = trackRef.current.getBoundingClientRect();
        const progress = ((trigger - rect.top) / rect.height) * 100;
        setLineProgress(Math.max(0, Math.min(100, progress)));
      }

      const next = new Set<string>();
      FEATURES.forEach(({ id }) => {
        const el = cardRefs.current[id];
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const nodeMid = rect.top + rect.height / 2;
        if (nodeMid < trigger) next.add(id);
      });

      setActiveSet((prev) => {
        const changed =
          prev.size !== next.size ||
          [...next].some((id) => !prev.has(id));
        return changed ? next : prev;
      });

      applyConnectors(next);
    };

    const handleScroll = () => requestAnimationFrame(updateTimeline);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    const t = setTimeout(updateTimeline, 120);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(t);
    };
  }, [isMobile, applyConnectors]);

  return (
    <section className="relative py-28 px-4 sm:px-8 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.06)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="w-[90%] max-w-[960px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-5" data-aos="fade-up">
            What We Offer
          </h2>
          <div className="w-16 h-0.75 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full mx-auto mt-6" />
          <p className="max-w-2xl mx-auto mt-8" data-aos="fade-up">
            Marine IQ delivers a comprehensive suite of tools designed to
            streamline every aspect of maritime operations.
          </p>
        </div>

        {/* ── Desktop Timeline ── */}
        {!isMobile ? (
          <div className="relative">
            {/* Vertical spine - blue base line */}
            <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 pointer-events-none bg-blue-500/30 rounded-full z-[1]">
              <div ref={trackRef} className="relative h-full w-full">
                <div
                  className="absolute top-0 left-0 w-full rounded-full transition-[height] duration-[80ms] linear"
                  style={{
                    height: `${lineProgress}%`,
                    background:
                      "linear-gradient(180deg, rgba(139,92,246,0) 0%, rgba(139,92,246,0.8) 40%, rgba(139,92,246,0.6) 100%)",
                    filter: "drop-shadow(0 0 6px rgba(139,92,246,0.6))",
                  }}
                />
              </div>
            </div>

            {/* Rows */}
            <div className="flex flex-col gap-20">
              {FEATURES.map((feature) => {
                const active = activeSet.has(feature.id);
                const isLeft = feature.side === "left";

                return (
                  <div
                    key={feature.id}
                    className="relative grid items-center"
                    style={{ gridTemplateColumns: "minmax(0,1fr) 56px minmax(0,1fr)" }}
                  >
                    {isLeft ? (
                      <>
                        <div className="relative pr-0">
                          <FeatureCard
                            feature={feature}
                            active={active}
                            cardRef={setCardRef(feature.id)}
                          />
                          <Connector
                            side="left"
                            active={active}
                            connectorRef={setConnectorRef(feature.id)}
                          />
                        </div>
                        <div
                          className="flex items-center justify-center"
                          ref={setNodeRef(feature.id)}
                        >
                          <Node active={active} />
                        </div>
                        <div />
                      </>
                    ) : (
                      <>
                        <div />
                        <div
                          className="flex items-center justify-center"
                          ref={setNodeRef(feature.id)}
                        >
                          <Node active={active} />
                        </div>
                        <div className="relative pl-0">
                          <Connector
                            side="right"
                            active={active}
                            connectorRef={setConnectorRef(feature.id)}
                          />
                          <FeatureCard
                            feature={feature}
                            active={active}
                            cardRef={setCardRef(feature.id)}
                          />
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* ── Mobile ── */
          <div className="flex flex-col gap-8">
            {FEATURES.map((feature) => {
              const active = activeSet.has(feature.id);
              return (
                <FeatureCard
                  key={feature.id}
                  feature={{ ...feature, side: "left" }}
                  active={active}
                  cardRef={setCardRef(feature.id)}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}