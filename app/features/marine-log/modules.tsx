export default function Modules(){
  
    return(
             <section className="px-6 lg:px-20 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold text-white text-center mb-2">Marine Log Modules</h2>
          <div className="w-12 h-[3px] bg-[#FFC700] rounded-full mx-auto mt-3 mb-14" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'event_note', title: 'Daily Reporting',
                items: ['Timesheet & Activities', 'Consumption & Cargo', 'Engine Usage', 'Regulatory Compliance', 'Approval Workflow'],
              },
              {
                icon: 'explore', title: 'Navigation & Position Tracking',
                items: ['Vessel Tracking', 'Route History', 'Activity Integration'],
              },
              {
                icon: 'bar_chart', title: 'Data Analysis & Reporting',
                items: ['KPI Dashboard', 'Customizable Reports', 'Data Export'],
              },
            ].map(({ icon, title, items }) => (
              <div
                key={title}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 transition-all duration-200 hover:border-[#FFC700]/25"
              >
                <div className="w-14 h-14 bg-[#FFC700] rounded-[0.85rem] flex items-center justify-center text-black mb-6">
                  <span className="material-symbols-outlined" style={{ fontSize: '1.8rem' }}>{icon}</span>
                </div>
                <h3 className="text-[1.1rem] font-extrabold text-white">{title}</h3>
                <ul className="mt-6 flex flex-col gap-3.5 list-none">
                  {items.map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-[0.85rem] text-slate-300">
                      <span className="material-symbols-outlined text-[#FFC700]" style={{ fontSize: '1rem' }}>check</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}