export default function CallToAction() {
  return (
    <section className="py-24 px-4 bg-[#050c1a]">
        <div className="max-w-3xl mx-auto">
          <div className="card p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#007bff]/[0.07] blur-[80px] rounded-full pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Ready to harness the power of Marine IQ?</h2>
              <p className="text-slate-500 max-w-md mx-auto mb-8 text-sm leading-relaxed">Join leading shipping lines worldwide in digitizing your maritime operations with our all-in-one platform.</p>
              <div className="flex justify-center gap-8 flex-wrap mb-8">
                <span className="flex items-center gap-2 text-slate-400 text-sm">
                  <span className="material-symbols-outlined text-[#007bff]">mail</span> contact@sofonn.iq
                </span>
                <span className="flex items-center gap-2 text-slate-400 text-sm">
                  <span className="material-symbols-outlined text-[#007bff]">call</span> +1 (555) MARINE-IQ
                </span>
              </div>
              <button className="bg-[#007bff] text-white font-extrabold text-base px-10 py-4 rounded-xl hover:shadow-[0_0_28px_rgba(0,123,255,0.4)] transition-shadow">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
  )}