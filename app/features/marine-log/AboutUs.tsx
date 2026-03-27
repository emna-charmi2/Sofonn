"use client";
import React, { useRef, useEffect } from "react";
 
const heroContent = {
  title: "Unlock the Future of Vessel Management with ",
  highlight: "Marine Log",
  description:
    "Imagine this: A single, integrated platform for all vessel reporting, automated data entry, real-time compliance monitoring, and insightful performance analysis – all accessible at your fingertips, even offline. That's the power of Marine Log. This secure, yet easily accessible storage system, coupled with a comprehensive audit trail, ensures data integrity and transparency.",
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToNextSection = () => {
    if (sectionRef.current) {
      const nextSection = sectionRef.current.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
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
      {/* AOS CSS */}
      <link
        href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        rel="stylesheet"
      />
      <section
        ref={sectionRef}
        className="min-h-screen relative overflow-hidden"
      >
        {/* Background glows */}

        {/* Original background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FFC700]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FFC700]/5 rounded-full blur-3xl" />
        </div>

        <div className="w-[80%] max-w-480 mx-auto relative z-10">
          {/* Two-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-28">
            {/* Left column: Centered text */}
            <div
              className="relative text-center lg:text-left"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div>
                <h1>
                  {heroContent.title}
                  <span className="text-[#FFC700]">{heroContent.highlight}</span>
                </h1>
              </div>
              <p className="max-w-md mx-auto lg:mx-0 mb-10">
                {heroContent.description}
              </p>
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={scrollToNextSection}
                  className="group px-8 py-3 bg-[#FFC700] rounded-full hover:bg-[#FFC700]/90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-[#FFC700]/25"
                >
                  Learn More
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Right column: Animated icons */}
            <div
              className="relative flex justify-center items-center"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                {/* Floating icons */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-pulse-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#FFC700]/20 border border-[#FFC700]/30 flex items-center justify-center animate-float">
                    <span className="material-symbols-outlined text-[#FFC700] text-3xl">anchor</span>
                  </div>
                  <div className="absolute top-1/4 right-0 w-12 h-12 rounded-full bg-[#FFC700]/20 border border-[#FFC700]/30 flex items-center justify-center animate-float-delay">
                    <span className="material-symbols-outlined text-[#FFC700] text-2xl">waves</span>
                  </div>
                  <div className="absolute bottom-1/4 left-0 w-12 h-12 rounded-full bg-[#FFC700]/20 border border-[#FFC700]/30 flex items-center justify-center animate-float-delay-2">
                    <span className="material-symbols-outlined text-[#FFC700] text-2xl">map</span>
                  </div>
                  <div className="absolute bottom-0 right-1/4 w-10 h-10 rounded-full bg-[#FFC700]/20 border border-[#FFC700]/30 flex items-center justify-center animate-float">
                    <span className="material-symbols-outlined text-[#FFC700] text-xl">radar</span>
                  </div>
                </div>
                {/* Central glowing ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[#FFC700]/20 animate-spin-slow" />
                <div className="absolute inset-8 rounded-full border border-[#FFC700]/10 animate-spin-slow-reverse" />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes spin-slow-reverse {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes float-delay {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          @keyframes float-delay-2 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          .animate-spin-slow-reverse {
            animation: spin-slow-reverse 25s linear infinite;
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          .animate-float-delay {
            animation: float-delay 4s ease-in-out infinite 0.5s;
          }
          .animate-float-delay-2 {
            animation: float-delay-2 4s ease-in-out infinite 1s;
          }
        `}</style>
      </section>
    </>
  );
}