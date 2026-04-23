"use client";

import { useEffect } from "react";
import AOS from "aos";
import Button from "@/components/ui/Button";

export default function CallToAction() {
  const WHY_ITEMS = [
    {
      icon: "verified_user",
      title: "Ensure Regulatory Compliance",
      desc: "Stay ahead of maritime regulations with automated tracking and proactive compliance tools.",
    },
    {
      icon: "travel_explore",
      title: "Global Fleet Management",
      desc: "Monitor and manage your fleet worldwide with real-time tracking and intelligent insights.",
    },
    {
      icon: "groups",
      title: "Crew Management",
      desc: "Efficiently manage crew rotations, certifications, and performance metrics.",
    },
    {
      icon: "bar_chart",
      title: "Advanced Analytics",
      desc: "Leverage powerful data analytics to optimize performance and drive strategic decisions.",
    },
  ];

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
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* CTA blob */}
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
                  Ready to optimize your fleet?
                </h2>
                <div className="max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="200">
                  <p>
                    Join the industry leaders already using our platform to drive the
                    future of maritime logistics. Transform your data into actionable
                    intelligence today.
                  </p>
                </div>
              </div>
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
