// Features data (can be placed outside the component for reusability)
const features = [
  {
    icon: "security",
    title: "Enhanced Compliance",
    desc: "Stay ahead of IMO, MARPOL, and regional regulations effortlessly.",
  },
  {
    icon: "bolt",
    title: "Improved Efficiency",
    desc: "Eliminate manual paperwork and reduce operational overhead by up to 40%.",
  },
  {
    icon: "insights",
    title: "Data-Driven Decisions",
    desc: "Leverage historical data to optimize routes and fuel consumption.",
  },
  {
    icon: "expand",
    title: "Scalability",
    desc: "From a single vessel to a global fleet of hundreds, Sofonn grows with you.",
  },
];

export default function Why() {
  return (
    <section
      className="py-32 w-[95%] mx-auto min-h-[80vh] flex items-center"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="w-full max-w-[95%] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left column */}
          <div data-aos="fade-right" data-aos-delay="200">
            <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold text-white mb-3">
              Why Choose Marine Log?
            </h2>
            <p className="text-slate-500 text-[0.95rem] leading-[1.7] mb-10">
              Leading the maritime industry with robust technology designed for
              the harsh realities of sea operations.
            </p>
            {features.map(({ icon, title, desc }, index) => (
              <div
                key={title}
                className="flex gap-4 mb-8"
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFC700]/[0.12] border border-[#FFC700]/25 flex items-center justify-center text-[#FFC700] shrink-0">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "1.2rem" }}
                  >
                    {icon}
                  </span>
                </div>
                <div>
                  <h4 className="text-[1rem] font-bold text-white mb-1 pt-4">
                    {title}
                  </h4>
                  <p className="text-[0.8rem] text-slate-500 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column: image with proportional sizing */}
          <div
            className="flex justify-center lg:justify-start items-start"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <img
              src="/icons/log/screen.png"
              alt="Marine Log dashboard preview"
              className="w-full max-w-md aspect-square object-cover rounded-2xl border border-white/[0.07] bg-white/[0.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}