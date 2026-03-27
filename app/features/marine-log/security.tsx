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
      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        {/* Background glows */}
 
        <div className="w-[80%] max-w-480 mx-auto relative z-10">
        <div className="text-center">
          <h2 className="mb-2">Security Measures</h2>
        </div>
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
              <div>
                <h4 className="mb-1 pt-4">{title}</h4>
              </div>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}