"use client";

import { useEffect } from "react";
import AOS from "aos";

const IMAGES = {
  /* Grande image hero — cargo ship aerial */
  hero: {
    url: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=900&h=420&fit=crop&q=80",
    width: 900,
    height: 420,
    alt: "Aerial view of a cargo ship on the ocean",
  },
} as const;

/* ─── Feature card ──────────────────────────────────────────── */
function FeatureCard({
  icon,
  title,
  desc,
  aosDelay = 0,
  compact = false,
}: {
  icon: string;
  title: string;
  desc: string;
  aosDelay?: number;
  compact?: boolean;
}) {
  return (
    <div
      className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl transition-all duration-200 hover:border-blue-500/40 hover:bg-blue-500/10 relative overflow-hidden flex flex-col h-full"
      style={{ padding: compact ? "1rem" : "1.5rem" }}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      data-aos-duration="600"
    >
      <div className="absolute w-12 h-12 bg-blue-500/10 rounded-full blur-[20px] -top-2 -left-2" />
      <div className="relative z-10 flex flex-col flex-1">
        <div
          className="rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400 mb-3 shrink-0"
          style={{
            width:  compact ? "2.25rem" : "2.75rem",
            height: compact ? "2.25rem" : "2.75rem",
          }}
        >
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <h4 className="text-white font-semibold text-lg mb-1">{title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ─── Main ──────────────────────────────────────────────────── */
export default function WhyIQ() {
  const features = [
    {
      icon: "settings_suggest",
      title: "Tailored to Your Needs",
      desc: "Customizable dashboards and reporting modules to fit your specific fleet size and vessel types.",
    },
    {
      icon: "gavel",
      title: "Streamlined Compliance",
      desc: "Stay ahead of evolving environmental and safety regulations with automated documentation.",
    },
    {
      icon: "hub",
      title: "Real-time Collaboration",
      desc: "Bridge the gap between ship and shore with instant data synchronization and secure messaging.",
    },
    {
      icon: "report_problem",
      title: "Proactive Deficiency Mgmt",
      desc: "Identify and resolve potential risks before they lead to costly detentions or accidents.",
    },
    {
      icon: "trending_up",
      title: "Scalable for Growth",
      desc: "Whether managing 5 or 500 vessels, our infrastructure scales with your business expansion.",
    },
    {
      icon: "eco",
      title: "Optimize Fuel & Emissions",
      desc: "Powerful analytics to reduce fuel consumption and meet decarbonization targets (CII/EEXI).",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120, easing: "ease-out-cubic" });
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />

      <style jsx>{`
        /* Styles responsifs pour la bento grid */
        .bento-grid {
          display: grid;
          gap: 1rem;
        }

        /* Mobile (par défaut) : 1 colonne */
        .bento-grid {
          grid-template-columns: 1fr;
        }

        /* Tablette (≥ 768px) : 2 colonnes, image prend la première ligne entière */
        @media (min-width: 768px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hero-image {
            grid-column: span 2;
          }
          .card-1, .card-2 {
            grid-column: span 1;
          }
          .bottom-cards {
            display: contents; /* Permet aux cartes du bas de se placer dans la grille */
          }
          .bottom-card {
            grid-column: span 1;
          }
        }

        /* Desktop (≥ 1024px) : 4 colonnes, disposition bento originale */
        @media (min-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: auto auto auto;
          }
          .hero-image {
            grid-column: span 3;
            grid-row: span 2;
          }
          .card-1 {
            grid-column: 4 / 5;
            grid-row: 1 / 2;
          }
          .card-2 {
            grid-column: 4 / 5;
            grid-row: 2 / 3;
          }
          .bottom-cards {
            display: contents;
          }
          .bottom-card {
            grid-column: span 1;
            grid-row: 3 / 4;
          }
        }
      `}</style>

      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        {/* Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-[80%] max-w-480 mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white" data-aos="fade-up">
              Why Choose Marine IQ?
            </h2>
            <p
              className="max-w-2xl mx-auto text-slate-300 mt-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Marine IQ is more than just a software solution. It's a strategic partner dedicated to your
              maritime success. Here's why leading ship owners, shipping companies, and charterers choose Marine IQ.
            </p>
            <div
              className="w-16 h-0.75 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full mx-auto mt-6"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>

          {/* ── BENTO GRID RESPONSIVE ── */}
          <div className="bento-grid">
            {/* Image hero */}
            <div
              className="hero-image relative rounded-2xl overflow-hidden border border-white/[0.07] aspect-[21/9] md:aspect-auto"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <img
                src={IMAGES.hero.url}
                alt={IMAGES.hero.alt}
                width={IMAGES.hero.width}
                height={IMAGES.hero.height}
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 z-10">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-400" style={{ fontSize: "1rem" }}>
                    anchor
                  </span>
                  <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">
                    Marine IQ Fleet Intelligence
                  </span>
                </div>
              </div>
            </div>

            {/* Premier card (colonne droite haut) */}
            <div className="card-1">
              <FeatureCard {...features[0]} aosDelay={100} compact />
            </div>

            {/* Deuxième card (colonne droite bas) */}
            <div className="card-2">
              <FeatureCard {...features[1]} aosDelay={200} compact />
            </div>

            {/* Cartes du bas (4 cartes) */}
            <div className="bottom-cards">
              {features.slice(2, 6).map((f, i) => (
                <div key={i} className="bottom-card">
                  <FeatureCard {...f} aosDelay={300 + i * 100} compact />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}