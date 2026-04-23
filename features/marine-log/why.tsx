
const features = [
  {
    icon: "eco",
    title: "Environmental Legacy",
    desc: "Significant reduction in your fleet's carbon footprint supporting global ESG goals and investor expectations.",
  },
  {
    icon: "savings",
    title: "Cost-Efficiency",
    desc: "Up to 25% reduction in annual fuel costs through precision AI route management and real-time anomaly detection.",
  },
  {
    icon: "policy",
    title: "Future-Proofing",
    desc: "Stay ahead of evolving maritime regulations: EEXI, CII, EU ETS — auto-tracked and audit-ready.",
  },
  {
    icon: "dashboard",
    title: "Operational Clarity",
    desc: "Unified dashboard providing full visibility across the entire fleet for every stakeholder, on any device.",
  },
];
export default function Why() {
  return (
       <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        {/* Background glows */}

        <div className="w-[80%] max-w-480 mx-auto relative z-10">
        {/* Header avec sous-titre */}
        <div className="text-center mb-16">
          <h2 className="mb-5" data-aos="fade-up">
            Why Choose Marine Log?
          </h2>
          <div
            className="w-16 h-0.75 bg-[#FFC700] rounded-full mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <p
            className="max-w-2xl mx-auto mt-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Leading the maritime industry with robust technology designed for
            the harsh realities of sea operations.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left column: text content */}
          <div className="flex flex-col justify-center">
            {/* Features list */}
            <div className="mt-12">
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
                    <div>
                      <h4>{title}</h4>
                    </div>
                    <span className="text-zinc-500 leading-relaxed">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className=" lg:flex justify-center items-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <img
              src="/icons/log/screen.png"
              alt="Marine Log dashboard preview"
              className="w-[700px] h-auto object-contain rounded-2xl border border-white/[0.07] bg-white/[0.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}