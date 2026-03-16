export default function Why(){
    return(
            <section className="px-6 lg:px-20 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold text-white mb-3">Why Choose Marine Log?</h2>
              <p className="text-slate-500 text-[0.95rem] leading-[1.7] mb-10">
                Leading the maritime industry with robust technology designed for the harsh realities of sea operations.
              </p>
              {[
                { icon: 'security', title: 'Enhanced Compliance',   desc: 'Stay ahead of IMO, MARPOL, and regional regulations effortlessly.' },
                { icon: 'bolt',     title: 'Improved Efficiency',   desc: 'Eliminate manual paperwork and reduce operational overhead by up to 40%.' },
                { icon: 'insights', title: 'Data-Driven Decisions', desc: 'Leverage historical data to optimize routes and fuel consumption.' },
                { icon: 'expand',   title: 'Scalability',           desc: 'From a single vessel to a global fleet of hundreds, Sofonn grows with you.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-[#FFC700]/[0.12] border border-[#FFC700]/25 flex items-center justify-center text-[#FFC700] shrink-0">
                    <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>{icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 text-[0.95rem]">{title}</h4>
                    <p className="text-[0.82rem] text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Uptime visual */}
            <div className="border border-white/[0.07] rounded-[2rem] bg-white/[0.02] aspect-square max-w-sm w-full mx-auto flex items-center justify-center flex-col gap-4 relative overflow-hidden">
              <div className="absolute w-48 h-48 bg-[#FFC700]/[0.08] rounded-full blur-[60px]" />
              <div className="w-24 h-24 rounded-full bg-[#FFC700]/[0.12] border border-[#FFC700]/25 flex items-center justify-center shadow-[0_0_50px_rgba(255,199,0,0.25)] relative z-10">
                <span className="material-symbols-outlined text-[#FFC700]" style={{ fontSize: '2.8rem' }}>verified</span>
              </div>
              <div className="text-center relative z-10">
                <p className="text-[2.8rem] font-black text-white leading-none">99.9%</p>
                <p className="text-slate-500 font-semibold text-[0.85rem] mt-1">Uptime Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}