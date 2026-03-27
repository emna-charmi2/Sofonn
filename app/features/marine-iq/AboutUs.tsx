"use client";

import React, { useRef } from "react";

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToNextSection = () => {
    if (sectionRef.current) {
      const nextSection = sectionRef.current.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        className="min-h-screen flex  items-center justify-center text-center relative overflow-hidden"
      >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-5">
            Operational{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h1>
          <p className="text-lg mb-10">
            Modern maritime fleets powered by Sofonn IQ. Precision engineering
            for global shipping operations, compliance, and crew management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
            <button
            onClick={scrollToNextSection}
              className="group px-8 py-3 border border-white/20 font-semibold rounded-full hover:bg-white/10 hover:border-blue-500/40 transition-all duration-300 flex items-center gap-2"
          >
            Learn More
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
          </button>
        
          </div>
        </div>
      </section>
    </>
  );
}