"use client";

import Image from "next/image";


const solutions = [
  {
    name: "Sofonn IQ",
    desc: "Intelligent Quality Monitoring",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF0yCo4-fZDjoSWcmhbFE5AgVt65Y-WVW-CiXFDgNMfc9KyZ3kzJlb0Gd9Hl1vfD55GKehsYdYzdW3DNitrccnONadzexBTlMLFIe_f5odVejSyyNxBAYycU2L4ES2lNY_VAZ4qNIb6myKHNS4VRyJGzYy5Son4bAt18jRwxftSrbVXao1hCwd2_T6sgQV2YZeZ0sw9A62PqnbZnfJM21JXn-eURLPbNBOhY1yvKi3dudFrhzqZvwMroElnfdZDOA_vzG6kL8xAi4",
  },
  {
    name: "Sofonn LOG",
    desc: "Advanced Telemetry Logging",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo5B89StPTOcIwVFCl_WJq6oxRvPX2C_OC4SwGHNxDDCBqmcIAnGY0aRGEV19dHraUvHO21z8dlDxbC4MpPAjc2WeZitx-n7g3Ck3yED-LWgtkv0EQzKF-dSujnq1GEst484Bq_cOypu8SDGNJsxrA0BxC2eneeftd8EfDphMSvD7MXto1AFixUiNCoWiG3pN_aqZM_XswQTWl2Jhg8Kqb3WGRBANkBJYu3rCuG_BE5iajOlvzz5qNuR6IXYFXCsMSBMWTVl-5gHs",
  },
  {
    name: "Sofonn ECO",
    desc: "Environmental Efficiency",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAs_3_sQSJW3HZDo13qN1B6NdyLEbutfsKSVa9hRksPdBx3F11K8iTypiq0ZUNMDxuMaJkuNghQi-t3wc2737AYcfe9dgGuW-QLpN7QmS5_ARci_DcMu3kJvV2QoTvl7rsG6njjZ4M5oZM10hRnO1-LASZR2TjOx7cXriDCSBIHeztCEXbHMSNXvuJ9BTL9bFPHFhZAoKkYyRNYC6IA6A6O7t4PxxRcdnpZGpNIjL6ie1RHmJrzPGGIq-xR_7oBN3a1IoF9Z5XCnVs",
  },
  {
    name: "Sofonn IA",
    desc: "Integrated AI Analytics",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9qt7CfAP49myDG34peF6xtaDlT-iH9mG7ytP3AapsdvJ8pJPOT7AjophdpOYquXFBWAkFBMHGKGCItB3LeYCFLvSAnocca9yUYgvay4hvkhUZnpH1K6rF500Is3JShx59ut4ncOTZuOt1lPb7bPCuZpL2wJEfS4sZQRtYP3529rb-zkFz1LSuTPp2WlCt4myIXVJZqrvKovrK63FvafDFw1ulJDK5IHlSD86-PmZZ9cDN2fhKQ6x-DtWloQJ6hanj5Jyqub7Ni6A",
  },
];

const equipment = [
  {
    name: "SVDR",
    desc: "Voyage Data Recorder",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpwTPOE5SGbLGWyNTSB-6494Gs7g-XhSwDxus6NSRma5hVBWOK_yY7JbGR8848zJTdtJHcgAykOPnMel_I4yp9AzYHeKXpHZqTDhfETvlvOPN2CZgWOn9jx08qlwaWKO94Djd7QAeKT5iEc4kDrJwmdLQIv1a4cRM6hoDpeo2lvGCqjlhZgxmt5Bu-Q6TUUWZaiJ7cf-AFI81f4s7wrM0msRHdGYJNZoWQ5E57nPsObopiowDIIjqs8C8yYvCfIb8XzuX4fFQSMMc",
  },
  {
    name: "CCTV",
    desc: "Video Surveillance System",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3B326VUNidpK-fzioSgBr1_1Wrj_PjrEFniaZqQ0qKaOE5WkVu8qufTSVMKLIRPlDQ6YS28IK78WqP4T2LG7ppNzERujZVdoiimEOAOnDV-nr0zzuq8AYzPJYeBjLY9s6wctJmL6dZ21Dv1I0XQQfHJ38TeuGJ2Alkabsj92sRPDH3U2hdrYTcAhV77PaIrMINvV3fK4ME9geDwEn4dEBNhq6FX0ZwjZzu1puUBPIaA5r5S-uo9WFPubJAGYYnwYIF4FV4H5XmxY",
  },
  {
    name: "TLG",
    desc: "Thermal Logging & Guard",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCz2Dx78JJv47VWNSBZGIgm61AIY33gm5gt_hx003arvc88O1h_srHEwDaqx5_HkYSb2fV4zbC5t2W21oqAO47owDXWOHsibHSdY7Z3NMhC7FWj23REGxFSXiuubXvToqgYnztSEH78woZAsJvV6yjwh_zkBPWI2qSrEyiUVy9VoSpmHtx-ELNnxL-E9WB9g8qEy0lgbTW_QzT_WF7N1BRHmN1xvoUW6R1jLHS5BZ4uK2_ypJkNa1-u_ZWnaok0DNevkFa36hqDOi8",
  },
];

const strengths = [
  {
    title: "Low-Latency Edge Processing",
    desc: "Analyze data where it's generated, reducing satellite bandwidth costs and ensuring immediate response.",
  },
  {
    title: "Hybrid Cloud Architecture",
    desc: "Seamless synchronization between on-vessel systems and shore-side management consoles.",
  },
  {
    title: "Rugged AI Integration",
    desc: "Sophisticated computer vision and predictive models designed specifically for marine conditions.",
  },
];


export default function MarineEdgePage() {
  return (
    <div className="font-sans section" style={{ color: 'var(--text-primary)' }}>

      {/* ── NAVBAR ────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b" style={{ background: 'var(--bg-level-1)', borderColor: 'var(--border-card)' }}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="material-icons text-[var(--text-accent)] text-3xl">anchor</span>
            <span className="text-xl font-bold tracking-tight">
              MARINE<span className="text-[var(--text-accent)]">EDGE</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#intro" className="hover:text-[var(--text-accent)] transition-colors">Solution</a>
            <a href="#structure" className="hover:text-[var(--text-accent)] transition-colors">Infrastructure</a>
            <a href="#strengths" className="hover:text-[var(--text-accent)] transition-colors">Strengths</a>
            <a href="#demo" className="hover:text-[var(--text-accent)] transition-colors">Demo</a>
            <button className="px-6 py-2 rounded font-semibold transition-all" style={{ background: 'var(--accent)', color: 'var(--text-primary)' }}>
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHMjpJPZrR6dV8iBVBBzMNEOUfRygPuMbuRbrIekPDP_AVH-7NUXW5VA1r8N0h4qMJl_4g3uEAp1uaHyPbRqYxGMTA5v2MfHKCWQpx-51IbwiMb2kE7sW5y1vBsA_gNFkO3almlF2D0u0Gs4myxeNgReUBOI1tpRtRh68YaRzpfIGzegTaNSdV04ysGB8ITAJu7eBDOvAc0uRyJEfI5yhPISj9wmJ4q02N8QAjENK3ItwoQ3mlBJztn_GF0XhGtQprDCAXVxHcTl0"
            alt="Deep ocean dark waters with digital nodes"
            fill
            className="object-cover opacity-60 dark:opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-[var(--bg-level-1)] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
              MARINE<br />
              <span className="text-[var(--text-accent)]">EDGE</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Revolutionizing maritime operations with real-time edge intelligence
              and seamless cloud integration.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 font-bold rounded-lg hover:scale-105 transition-transform" style={{ background: 'var(--accent)', color: 'var(--text-primary)' }}>
                Explore Technology
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-all">
                View Roadmap
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section id="intro" className="py-24 relative overflow-hidden section">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Bridging the Gap Between Ocean and Insight
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Marine Edge provides an end-to-end data ecosystem designed for the harshest
            environments. From vessel-based edge computing to global cloud synchronization,
            we empower maritime fleets with AI-driven analytics, ensuring safety, efficiency,
            and compliance at every nautical mile.
          </p>
        </div>
      </section>




    <section className="relative bg-linear-to-b from-slate-950 via-indigo-950/40 to-slate-950 py-16 px-4 md:px-8 overflow-hidden">
      {/* Fond subtil */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-linear(circle_at_30%_20%,var(--accent)_0%,transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-linear(circle_at_70%_80%,var(--accent-light)_0%,transparent_40%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Titre principal (optionnel) */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 tracking-tight">
          Sofonn Ecosystem
        </h2>

        {/* Conteneur principal du diagramme */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* Colonne GAUCHE - SOLUTIONS */}
          <div className="flex flex-col items-center gap-6 md:gap-8 w-full md:w-5/12">
            <h3 className="text-2xl font-semibold text-cyan-300 tracking-wide mb-4">SOLUTIONS</h3>

            <div className="grid grid-cols-2 gap-6 w-full max-w-xs md:max-w-sm">
              {/* Sofonn IQ */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-slate-700 shadow-lg shadow-indigo-900/30 mb-2">
                  <Image
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400"
                    alt="Sofonn IQ"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-slate-200">Sofonn IQ</p>
              </div>

              {/* Sofonn LOG */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-slate-700 shadow-lg shadow-purple-900/30 mb-2">
                  <Image
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400"
                    alt="Sofonn LOG"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-slate-200">Sofonn LOG</p>
              </div>

              {/* Sofonn ECO */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-slate-700 shadow-lg shadow-emerald-900/30 mb-2">
                  <Image
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400"
                    alt="Sofonn ECO"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-slate-200">Sofonn ECO</p>
              </div>

              {/* Sofonn IA */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-slate-700 shadow-lg shadow-pink-900/30 mb-2">
                  <Image
                    src="https://images.unsplash.com/photo-1555949963-aa79d0ebc8fb?w=400"
                    alt="Sofonn IA"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-slate-200">Sofonn IA</p>
              </div>
            </div>
          </div>

          {/* Centre - CLOUD + Connexions */}
          <div className="relative flex flex-col items-center z-10">
            {/* Cloud central */}
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-linear-to-br from-indigo-600/30 via-purple-600/30 to-fuchsia-600/20 border border-indigo-500/40 flex items-center justify-center shadow-2xl shadow-indigo-900/50 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-4xl md:text-5xl mb-1">☁️</div>
                <p className="text-lg font-bold text-white tracking-wide">SofonnCloud</p>
              </div>
            </div>

            {/* VDR SERVER (boîte centrale basse) */}
            <div className="mt-10 w-64 md:w-72 bg-slate-900/70 border border-slate-600 rounded-xl p-4 text-center backdrop-blur-md">
              <p className="text-base font-semibold text-slate-200 mb-1">VDR SERVER</p>
              <p className="text-xs text-slate-400">
                Contient les modules d&apos;application nécessaires
                <br />
                (Docker compatible)
              </p>
            </div>

            {/* EDGE GATEWAY (petit rond en bas) */}
            <div className="mt-6 w-28 h-28 rounded-full bg-linear-to-br from-cyan-700/40 to-teal-700/30 border border-cyan-500/50 flex items-center justify-center shadow-lg">
              <p className="text-sm font-bold text-cyan-200 text-center leading-tight">
                EDGE
                <br />
                GATEWAY
              </p>
            </div>
          </div>

          {/* Colonne DROITE - EQUIPEMENT */}
          <div className="flex flex-col items-center gap-6 md:gap-8 w-full md:w-5/12">
            <h3 className="text-2xl font-semibold text-fuchsia-300 tracking-wide mb-4">EQUIPEMENT</h3>

            <div className="flex flex-col gap-6 w-full max-w-xs md:max-w-sm">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-slate-700 shadow-lg shadow-red-900/30 mb-2">
                  <Image
                    src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=400"
                    alt="SVDR"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-slate-200">SVDR</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-slate-700 shadow-lg shadow-orange-900/30 mb-2">
                  <Image
                    src="https://images.unsplash.com/photo-1558008258-3256797b43f3?w=400"
                    alt="CCTV"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-slate-200">CCTV</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-slate-700 shadow-lg shadow-yellow-900/30 mb-2">
                  <Image
                    src="https://images.unsplash.com/photo-1503387762-592deb58caa5?w=400"
                    alt="TLG"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-slate-200">TLG</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lignes de connexion (approximation avec SVG ou pseudo-éléments) */}
        {/* Pour des lignes plus précises → on peut utiliser react-flow ou svg, ici version simplifiée */}
      </div>

      
    </section>


      {/* ── STRENGTHS ─────────────────────────────────────────────────────── */}
      <section id="strengths" className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">What Makes Marine Edge Unique?</h2>
              <ul className="space-y-6">
                {strengths.map((item) => (
                  <li key={item.title} className="flex items-start space-x-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--accent-dim)] flex items-center justify-center">
                      <span className="material-icons text-[var(--text-accent)] text-sm">check</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA02Jzx3CIvJO7-z4nKli-CDG6BKYR8evKzLkneJlnDYvcNiAgSNEpm4bQJOvW9o3NzGjg46RDqdTkhAB-niyow04LWfZ8sNVPpBtottwlS7_N3MoWe_IqZdxVlAdVyr-SplIBYCYj0lkM4FP7ob7bxxgH-5bZfvDxwydPHeUSnv7G0EHtCpdLL8iKx4JORjbgbFfcd3ysFJoR4Zvzp3aA0sNVT6sqR1drD1MZNICMln53U-IDHZ_O1WXkdFZsJq8rbvQb1xrPu2gQ"
                alt="Ship command center"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full"
              />
             
            </div>
          </div>
        </div>
      </section>

      {/* ── DEMO ──────────────────────────────────────────────────────────── */}
      <section id="demo" className="py-24 section">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">See It In Action</h2>
            <p className="text-slate-400">
              Watch how Marine Edge transforms vessel management through our intuitive interface.
            </p>
          </div>
          <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative flex items-center justify-center group cursor-pointer">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjizJp8EL3mfmZwuAeu-CXETxbpLCdlJWq_JF-lzZyPZmEFWtKutc60cnDa61fZkJP0FwbWg_od03IR6JtrjFVagbU3JaZM1cMsnOO5FhvLgN9eW47syeTY_ryPUDPeEc9ca2NNAjDxhhJf3XbCDINNcepDGTq_8osKW8pojIuTF9zx_Zhb9yxwbWvntc4FrsI37RvLlrCwoDGfb92YRawon91edTu3n_semAcujkGoXrWkBkdZDJodTomvopWtkZ_vVVUq0y9ODE"
              alt="Vessel on dark blue ocean"
              fill
              className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl" style={{ background: 'var(--accent)' }}>
              <span className="material-icons text-slate-900 text-5xl translate-x-1">play_arrow</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--accent-dim)] -skew-y-3 transform translate-y-12" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Optimize Your Fleet?
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Join the leading maritime companies already using Marine Edge to drive
            the future of sea travel.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-10 py-5 font-bold rounded-xl text-lg hover:shadow-2xl transition-all" style={{ background: 'var(--accent)', color: 'var(--text-primary)' }}>
              Request a Custom Demo
            </button>
            <button className="px-10 py-5 border-2 border-slate-700 dark:text-white font-bold rounded-xl text-lg hover:bg-slate-800 transition-all">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>


   
  );
}


    
