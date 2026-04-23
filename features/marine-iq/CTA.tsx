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
    <>
      <section className="relative py-28 px-4 sm:px-8 overflow-hidden">
        {/* Overlay gradient (identique à la seconde section) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(59,130,246,0.10) 0%, transparent 60%)",
          }}
        />

        {/* Glow bleus (strictement identiques) */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "rgba(59,130,246,0.15)", filter: "blur(130px)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "rgba(37,99,235,0.10)", filter: "blur(120px)" }}
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
              <div>
                <h2 className="mb-6" data-aos="fade-up" data-aos-delay="100">
                  Ready to harness the power of Marine IQ?
                </h2>
                <div
                  className="max-w-2xl mx-auto mb-12"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <p>
                    Join leading shipping lines worldwide in digitizing your
                    maritime operations with our all-in-one platform.
                  </p>
                </div>
              </div>

              {/* Wrapper du bouton – identique à la seconde section */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
<Button 
  text="Get Started Now" 
  href="request-demo"
  target="_self"
  showArrow={true}
/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
