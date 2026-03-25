const securityMeasures = [
  {
    icon: "lock_open",
    title: "Encryption",
    desc: "State-of-the-art encryption protocols for data at rest and in transit.",
  },
  {
    icon: "admin_panel_settings",
    title: "Access Controls",
    desc: "Granular user permissions and multi-factor authentication.",
  },
  {
    icon: "history",
    title: "Audit Trails",
    desc: "Comprehensive logging of all system actions for full accountability.",
  },
  {
    icon: "security_update_good",
    title: "Assessments",
    desc: "Regular third-party security audits and penetration testing.",
  },
];

export default function ModSecurity() {
  return (
    <section
      className="px-6 lg:px-20 py-24 bg-white/[0.015]"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold text-white text-center mb-2">
          Security Measures
        </h2>
        <div className="w-12 h-[3px] bg-[#FFC700] rounded-full mx-auto mt-3 mb-14" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityMeasures.map(({ icon, title, desc }, index) => (
            <div
              key={title}
              className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 transition-all duration-200 hover:border-[#FFC700]/25 hover:bg-[#FFC700]/[0.04]"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFC700]/[0.12] border border-[#FFC700]/25 flex items-center justify-center text-[#FFC700] shrink-0">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "1.2rem" }}
                >
                  {icon}
                </span>
              </div>
              <h4 className="text-[1rem] font-bold text-white mb-1 pt-4">
                {title}
              </h4>
              <p className="text-[0.8rem] text-slate-500 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}