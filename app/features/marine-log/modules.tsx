const modulesData = [
  {
    icon: "event_note",
    title: "Daily Reporting",
    items: [
      "Timesheet & Activities",
      "Consumption & Cargo",
      "Engine Usage",
      "Regulatory Compliance",
      "Approval Workflow",
    ],
  },
  {
    icon: "explore",
    title: "Navigation & Position Tracking",
    items: ["Vessel Tracking", "Route History", "Activity Integration"],
  },
  {
    icon: "bar_chart",
    title: "Data Analysis & Reporting",
    items: ["KPI Dashboard", "Customizable Reports", "Data Export"],
  },
];

export default function Modules() {
  return (
        <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        {/* Background glows */}

        <div className="w-[80%] max-w-480 mx-auto relative z-10">
        <div className=" text-center">
          <h2 className="mb-2">Marine Log Modules</h2>
        </div>
        <div className="w-12 h-[3px] bg-[#FFC700] rounded-full mx-auto mt-3 mb-14" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {modulesData.map(({ icon, title, items }, index) => (
            <div
              key={title}
              className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 transition-all duration-200 hover:border-[#FFC700]/25"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFC700]/[0.12] border border-[#FFC700]/25 flex items-center justify-center text-[#FFC700] shrink-0">
                <span
                  className="material-symbols-outlined "
                  style={{ fontSize: "1.2rem" }}
                >
                  {icon}
                </span>
              </div>
              <div>
                <h4 className="mb-1 pt-4">{title}</h4>
              </div>
              <ul className="mt-6 flex flex-col gap-3.5 list-none">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[0.85rem] leading-relaxed"
                  >
                    <span
                      className="material-symbols-outlined text-[#FFC700]"
                      style={{ fontSize: "1rem" }}
                    >
                      check
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}