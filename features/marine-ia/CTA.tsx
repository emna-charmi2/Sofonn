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
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />

      <section className="relative py-28 px-4 sm:px-8 overflow-hidden ">
        {/* Glows rouges */}
      

        {/* Contenu */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <div
            className="rounded-2xl md:rounded-3xl p-12 lg:p-20 text-center border shadow-2xl shadow-black/30"
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              background: "rgba(255,255,255,0.05)",
              borderColor: "rgba(255,255,255,0.12)",
            }}
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {/* Icône rocket_launch */}
           

            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Ready to bring AI decision support to your fleet?
            </h2>

            <p
              className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Join maritime leaders who trust Marine IA to transform their operations. Start with a
              personalized demo today.
            </p>

            <div
              className="flex flex-wrap justify-center gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
                                  <Button 
        text="            Get Started with Marine IA
" 
  href="request-demo"
  target="_self"
        backgroundColor="#e1294c"
        showArrow={true}
      />
        

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
