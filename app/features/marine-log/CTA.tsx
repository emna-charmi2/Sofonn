export default function CTA(){
    return(
          <section className="px-6 lg:px-20 py-24 text-center bg-[#FFC700]/[0.03] border-t border-white/[0.07]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-black text-white leading-[1.1] mb-4">
            Join the Maritime Revolution
          </h2>
          <p className="text-slate-500 text-[1.05rem] leading-[1.75] mb-10">
            Streamline your operations, ensure total compliance, and lead with data-driven precision. The future of the sea is digital.
          </p>
          <button className="inline-flex items-center gap-2 bg-[#FFC700] text-black font-extrabold text-base px-10 py-4 rounded-xl border-none cursor-pointer transition-all hover:opacity-90 hover:shadow-[0_0_28px_rgba(255,199,0,0.4)]">
            Get Started with Marine Log
          </button>
        </div>
      </section>
    )
}