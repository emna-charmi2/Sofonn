const crewFeatures = [
  {
    icon: "edit_note",
    title: "Simplified Reporting",
    desc: "Intuitive interfaces for fast entry.",
  },
  {
    icon: "memory",
    title: "Automated Data Capture",
    desc: "Sensor integration reduces manual work.",
  },
  {
    icon: "forum",
    title: "Real-time Communication",
    desc: "Instant updates between ship and shore.",
  },
  {
    icon: "rule",
    title: "Best Practice Guidance",
    desc: "Embedded compliance checklists.",
  },
  {
    icon: "cloud_off",
    title: "Offline Accessibility",
    desc: "Full functionality without internet.",
  },
];

const companyFeatures = [
  {
    icon: "center_focus_strong",
    title: "Centralized Reporting",
    desc: "All fleet data in one place.",
    wide: false,
  },
  {
    icon: "assignment_turned_in",
    title: "Automated Compliance",
    desc: "Instant regulatory alignment.",
    wide: false,
  },
  {
    icon: "speed",
    title: "Performance Monitoring",
    desc: "Track efficiency and fuel usage.",
    wide: false,
  },
  {
    icon: "analytics",
    title: "Data-Driven Insights",
    desc: "Advanced analytics for optimization.",
    wide: false,
  },
  {
    icon: "notification_important",
    title: "Automated Alerts",
    desc: "Proactive notifications for anomalies.",
    wide: false,
  },
  {
    icon: "encrypted",
    title: "Secure Data Storage",
    desc: "Encrypted cloud infrastructure.",
    wide: false,
  },
  {
    icon: "history_edu",
    title: "Full Audit Trail",
    desc: "Detailed history of all changes across the entire fleet management lifecycle.",
    wide: true,
  },
];

export default function Operations() {
  return (
       <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        {/* Background glows */}

        <div className="w-[80%] max-w-480 mx-auto relative z-10">
        <h2 className="text-center mb-16">
          How Marine Log Transforms Maritime Operations
        </h2>
        <div className="w-12 h-[3px] bg-[#FFC700] rounded-full mx-auto mt-3 mb-14" />

        {/* For Crew */}
        <div className="mb-14" data-aos="fade-up" data-aos-delay="100">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="">
              For Crew
            </h3>
            <div className="flex-1 h-px bg-white/[0.07]" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {crewFeatures.map(({ icon, title, desc }, index) => (
              <div
                key={title}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 transition-all duration-200 hover:border-[#FFC700]/25 hover:bg-[#FFC700]/[0.04] relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={150 + index * 50}
              >
                {/* Blur effect for icon */}
                <div className="absolute w-12 h-12 bg-[#FFC700]/[0.08] rounded-full blur-[20px] -top-2 -left-2" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#FFC700]/[0.12] border border-[#FFC700]/25 flex items-center justify-center text-[#FFC700] shrink-0">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "1.2rem" }}
                    >
                      {icon}
                    </span>
                  </div>
                  <div className="pt-4">
                    <h4>{title}</h4>
                  </div>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* For Shipping Companies */}
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="flex items-center gap-4 mb-8">
            <h3 >
              For Shipping Companies
            </h3>
            <div className="flex-1 h-px bg-white/[0.07]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {companyFeatures.map(({ icon, title, desc, wide }, index) => (
              <div
                key={title}
                className={`bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 transition-all duration-200 hover:border-[#FFC700]/25 hover:bg-[#FFC700]/[0.04] relative overflow-hidden ${
                  wide ? "sm:col-span-2" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={250 + index * 50}
              >
                {/* Blur effect for icon */}
                <div className="absolute w-12 h-12 bg-[#FFC700]/[0.08] rounded-full blur-[20px] -top-2 -left-2" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#FFC700]/[0.12] border border-[#FFC700]/25 flex items-center justify-center text-[#FFC700] shrink-0">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "1.2rem" }}
                    >
                      {icon}
                    </span>
                  </div>
                   <div className="pt-4">
                    <h4>{title}</h4>
                  </div>
                  <p>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}