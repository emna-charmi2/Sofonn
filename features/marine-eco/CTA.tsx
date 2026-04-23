"use client";

import { useEffect } from "react";
import AOS from "aos";
import Button from "@/components/ui/Button";

export default function CallToAction() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative py-28 px-4 sm:px-8 overflow-hidden">
      {/* Dégradé de fond global (vert émeraude) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(16,185,129,0.10) 0%, transparent 60%)",
        }}
      />

      {/* Lueurs émeraude sur le dessus */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "rgba(16,185,129,0.15)", filter: "blur(130px)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "rgba(5,150,105,0.10)", filter: "blur(120px)" }}
      />

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl md:rounded-3xl p-12 lg:p-20 text-center border shadow-2xl shadow-black/30"
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              background: "rgba(255,255,255,0.07)",
              borderColor: "rgba(255,255,255,0.15)",
            }}
            data-aos="fade-up"
            data-aos-duration="800"
          >
         

            {/* Titre principal */}
            <h2
              className="text-5xl font-black tracking-tighter mb-5 text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Ready to Lead the
              <br />
              <span className="text-emerald-400">Green Transition?</span>
            </h2>

            {/* Description */}
            <div
              className="max-w-2xl mx-auto mb-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="text-zinc-400 leading-relaxed text-sm">
                Join forward-thinking maritime leaders who are already optimizing
                their environmental impact with Sofonn Intelligence cutting costs
                while meeting every regulatory milestone.
              </p>
            </div>

            {/* Boutons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
            
              <Button
                text="Request Demo"
                backgroundColor="#45a894"

                href="/request-demo"
                target="_self"
                showArrow={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
