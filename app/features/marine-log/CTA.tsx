export default function CTA(){
    return(
      <>

       <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        {/* Background glows */}

        <div className="w-[80%] max-w-480 mx-auto relative z-10">

 

        {/* Content */}
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
Join the Maritime Revolution
                </h2>
                <div className="max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="200">
                  <p>
                  Streamline your operations, ensure total compliance, and lead with data-driven precision. The future of the sea is digital.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <button
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-[#d1af34] text-base transition-all duration-300 hover:opacity-90 hover:scale-[1.03] active:scale-95"
               
                >
            Get Started with Marine Log
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      </>
    )
}