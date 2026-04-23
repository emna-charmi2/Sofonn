"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Demo() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120, easing: "ease-out-cubic" });
  }, []);

  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    companyWebsite: "",
    companyAddress: "",
    addressName: "",
    addressEmail: "",
    firstName: "",
    lastName: "",
    email: "",
    subject: "demo",
    message: "",
    consent: false,
  });

 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // your submit logic here
    console.log("Form submitted", formData);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        rel="stylesheet"
      />

      <div className="demo-fixed-theme">
        <style jsx>{`
          .demo-fixed-theme,
          .demo-fixed-theme * {
            color-scheme: only light;
            forced-color-adjust: none;
            --tw-bg-opacity: 1;
            --tw-text-opacity: 1;
          }
          .demo-fixed-theme section,
          .demo-fixed-theme p,
          .demo-fixed-theme h2,
          .demo-fixed-theme label,
          .demo-fixed-theme input,
          .demo-fixed-theme button {
            color: white !important;
          }
          .demo-fixed-theme input {
            background-color: rgba(255, 255, 255, 0.05) !important;
            border-color: rgba(255, 255, 255, 0.07) !important;
          }
          .demo-fixed-theme button {
            background-color: #2563eb !important;
          }
          .demo-fixed-theme button:hover {
            background-color: #1d4ed8 !important;
          }
        `}</style>

        <section className="py-28 px-4 sm:px-8 relative overflow-hidden min-h-screen">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format')`,
              }}
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </div>

          <div className="w-[90%] max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl p-4 font-bold text-white" data-aos="fade-up">
                Book your demo
              </h2>
              <div
                className="w-16 h-0.75 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full mx-auto mt-6"
                data-aos="fade-up"
                data-aos-delay="200"
              />
              <p className="text-slate-100 mt-4" data-aos="fade-up" data-aos-delay="100">
                Discover how Sofonn transforms maritime fleet management.
                Fill out the form, and our team will contact you within 24 hours.
              </p>
            </div>

            <div className="overflow-hidden" data-aos="fade-up" data-aos-delay="300">
              <form onSubmit={handleSubmit} className="p-4 md:p-12">
                {/* Company Details Section */}
                <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
                  <h2 className="text-white border-l-4 border-blue-500 pl-4 mb-8">
                    Company Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        placeholder="e.g. Acme Corporation"
                        className="w-full px-4 py-2.5 rounded-lg border border-white/[0.07] bg-white/[0.05] text-white placeholder:text-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition backdrop-blur-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-1">
                        Company Email
                      </label>
                      <input
                        type="email"
                        name="companyEmail"
                        value={formData.companyEmail}
                        placeholder="e.g. contact@acme.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-white/[0.07] bg-white/[0.05] text-white placeholder:text-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition backdrop-blur-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-1">
                        Company Phone
                      </label>
                      <input
                        type="tel"
                        name="companyPhone"
                        value={formData.companyPhone}
                        placeholder="e.g. +33 1 23 45 67 89"
                        className="w-full px-4 py-2.5 rounded-lg border border-white/[0.07] bg-white/[0.05] text-white placeholder:text-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition backdrop-blur-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-1">
                        Company Website
                      </label>
                      <input
                        type="url"
                        name="companyWebsite"
                        value={formData.companyWebsite}
                        placeholder="https://www.acme.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-white/[0.07] bg-white/[0.05] text-white placeholder:text-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition backdrop-blur-sm"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-white mb-1">
                        Company Address
                      </label>
                      <input
                        type="text"
                        name="companyAddress"
                        value={formData.companyAddress}
                        placeholder="e.g. 128 Boulevard de la Technologie, Paris"
                        className="w-full px-4 py-2.5 rounded-lg border border-white/[0.07] bg-white/[0.05] text-white placeholder:text-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition backdrop-blur-sm"
                      />
                    </div>
                  </div>
                </div>

                <hr className="my-2 border-white/[0.1]" data-aos="fade-up" data-aos-delay="150" />

                {/* Additional Contact Section */}
                <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
                  <h2 className="text-white border-l-4 border-blue-500 pl-4 mb-8">
                    Additional Contact
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-1">
                        Name (optional)
                      </label>
                      <input
                        type="text"
                        name="addressName"
                        value={formData.addressName}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 rounded-lg border border-white/[0.07] bg-white/[0.05] text-white placeholder:text-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition backdrop-blur-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-1">
                        Email (optional)
                      </label>
                      <input
                        type="email"
                        name="addressEmail"
                        value={formData.addressEmail}
                        placeholder="e.g. alternate@acme.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-white/[0.07] bg-white/[0.05] text-white placeholder:text-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition backdrop-blur-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-900/30 hover:bg-blue-700 transition-all duration-300"
                  >
                    Request a demo
                    <span className="material-symbols-outlined text-base">send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}