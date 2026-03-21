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
  const items2 = [
    {
      id: "efficiency",
      title: "Improve Efficiency",
      desc: "Streamline workflows with automated intelligence, reducing manual data entry and operational lag.",
      image: "/images/efficiency.jpg", // remplace par ta propre image
    },
    {
      id: "profitability",
      title: "Boost Profitability",
      desc: "Reduce overhead and optimize resource allocation through data-driven financial insights.",
      image: "/images/profitability.jpg",
    },
    {
      id: "standards",
      title: "Enhance Standards",
      desc: "Maintain peak compliance and safety protocols with automated tracking and real-time audits.",
      image: "/images/standards.jpg",
    },
  ];

  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <>
    <section className="py-24 px-4 bg-[#050c1a]">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            BENEFITS
          </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-2">Your Competitive Edge</h2>
          <p className="text-slate-500 text-center">Tools that move the needle for modern maritime operators.</p>
          <div className="section-divider" />
        </div>

        {/* Contenu : deux colonnes alignées verticalement au centre */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Colonne des blocs interactifs */}
          <div className="flex-1 space-y-6">
            {items.map(({ id, icon, title, desc }) => (
              <div
                key={id}
                className="cursor-pointer group"
                onClick={() => toggle(id)}
              >
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center transition-colors group-hover:bg-blue-100">
                    <span className="material-symbols-outlined text-blue-600 text-2xl">
                      {icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {title}
                    </h3>
                    {/* Description animée */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expanded === id ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
              <Image
                src="/gem.png"
                alt="Competitive edge illustration – replace with your Nano Banana generated image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

 <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
            Your Competitive Edge
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-6">
            Tools that move the needle for modern maritime operators.
          </p>
          <div className="flex justify-center">
            <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
              See More
            </button>
          </div>
        </div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items2.map(({ id, title, desc, image }) => (
            <div key={id} className="group cursor-pointer">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-bold text-black mb-1">{title}</h3>
              <p className="text-slate-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}