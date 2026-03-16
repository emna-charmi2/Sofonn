import Image from "next/image"

export default function Operations() {
  const seafarerFeatures = [
    {
      icon: 'badge',
      title: 'Digital Professional Identity',
      desc: 'Every crew member gets a personal account, showcasing their qualifications, certifications, and experience.',
    },
    {
      icon: 'work_history',
      title: 'Effortless Career Management',
      desc: 'Seafarers can easily update their profiles, track training, and explore new opportunities.',
    },
    {
      icon: 'forum',
      title: 'Real-time Communication',
      desc: 'Stay connected with shore-based teams and management through integrated communication channels.',
    },
    {
      icon: 'task_alt',
      title: 'Simplified Task Management',
      desc: 'Receive, track, and update tasks assigned by ship management in real-time.',
    },
  ]

  const companyFeatures = [
    {
      icon: 'verified',
      title: 'Smart Certification Tracking',
      desc: 'Never miss a renewal with automated alerts and real-time monitoring of vessel certifications.',
    },
    {
      icon: 'policy',
      title: 'Proactive Compliance',
      desc: 'Manage findings and deficiencies efficiently with streamlined reporting and resolution workflows.',
    },
    {
      icon: 'notifications',
      title: 'Intelligent Alert System',
      desc: 'Receive instant notifications about critical events and potential non-compliance issues. Performance Optimization: Track fuel consumption, emissions, and other key metrics to identify areas for improvement.',
    },

    {
      icon: 'hub',
      title: 'Streamlined Management',
      desc: 'ardize operations, simplify management tasks, and tailor templates for documents and checklists specific to each asset type.',
    },
    {
      icon: 'handshake',
      title: 'Enhanced Collaboration',
      desc: 'Facilitate communication and collaboration within divisions, fostering teamwork and knowledge sharing.',
    },
  ]

  return (
    <section className="py-6 px-2 bg-[#050c1a] relative overflow-hidden">
      <style>{`
        /* ── two-panel card ───────────────────────── */
        .ops-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          min-height: 500px;
        }
        @media (max-width: 1023px) {
          .ops-card { grid-template-columns: 1fr; }
        }

        /* ── content panel ───────────────────────── */
        .c-panel {
          padding: 52px 46px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .c-panel.right {
          border-right: none;        }

        /* ── image panel ─────────────────────────── */
        .i-panel {
          position: relative;
          overflow: hidden;
          background: #060e21;
        }
        .i-panel::after {
          content: '';
          position: absolute; inset: 0;
          z-index: 2;
          pointer-events: none;
        }


        /* ── section heading ─────────────────────── */
        .sec-heading {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }
        .heading-icon {
          width: 40px; height: 40px;
          border-radius: 12px;
          border: 1px solid rgba(0,123,255,0.28);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .accent-rule {
          width: 38px; height: 2px;
          background: linear-gradient(90deg, #007bff 0%, transparent 100%);
          border-radius: 2px;
          margin: 8px 0 26px;
        }

      
        
        .f-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }
        .f-icon {
          flex-shrink: 0;
          width: 28px; height: 28px;
          border-radius: 7px;
          background: rgba(0,123,255,0.14);
          border: 1px solid rgba(0,123,255,0.26);
          display: flex; align-items: center; justify-content: center;
        }
      `}</style>

      {/* bg glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#007bff]/[0.04] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#007bff]/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            How Marine IQ Transforms Operations
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
            A unified platform bridging the gap between shore and sea.
          </p>
          <div className="mt-6 mx-auto w-12 h-[2px] bg-gradient-to-r from-transparent via-[#007bff]/60 to-transparent rounded-full" />
        </div>

        <div className="flex flex-col gap-8">

          {/* ══════════ FOR SEAFARERS ══════════ */}
          {/* content panel and image panel are direct children of ops-card — no shared wrapper */}
          <div className="ops-card">

            {/* content — left */}
            <div className="c-panel">
              <div className="sec-heading">
                <div className="heading-icon">
                  <span className="material-symbols-outlined text-[#007bff]" style={{ fontSize: '1.15rem' }}>anchor</span>
                </div>
                <h3 className="text-xl font-extrabold text-white">For Seafarers</h3>
              </div>
              <div className="accent-rule" />
              <ul className="flex flex-col gap-3">
                {seafarerFeatures.map(({ icon, title, desc }) => (
                  <li key={title}>
                    <div className="f-row">
                      <div className="f-icon">
                        <span className="material-symbols-outlined text-[#007bff]" style={{ fontSize: '0.9rem' }}>{icon}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white">{title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed" style={{ paddingLeft: '38px' }}>{desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* image — right */}
            <div className="i-panel">
             
              <Image
                src="/images/seafarers-dashboard.png"
                alt="Seafarers dashboard"
                fill
                className="object-cover object-top"
                style={{ paddingTop: '30px' }}
              />
            </div>

          </div>

         {/* ══════════ FOR SHIPPING COMPANIES ══════════ */}
          <div className="ops-card">

            {/* image — left */}
            <div className="i-panel">
              <div className="win-bar">
                <div className="dot" style={{ background: 'rgba(0,123,255,0.75)' }} />
                <div className="dot" style={{ background: 'rgba(255,255,255,0.22)' }} />
                <div className="dot" style={{ background: 'rgba(255,255,255,0.1)' }} />
              </div>
              <Image
                src="/images/shipping-dashboard.png"
                alt="Shipping dashboard"
                fill
                className="object-cover object-top"
                style={{ paddingTop: '30px' }}
              />
            </div>

            {/* content — right */}
            <div className="c-panel right">
              <div className="sec-heading">
                <div className="heading-icon">
                  <span className="material-symbols-outlined text-[#007bff]" style={{ fontSize: '1.15rem' }}>corporate_fare</span>
                </div>
                <h3 className="text-xl font-extrabold text-white">For Shipping Companies &amp; Vessels</h3>
              </div>
              <div className="accent-rule" />
             <ul className="flex flex-col gap-3">
                {companyFeatures.map(({ icon, title, desc }) => (
                  <li key={title}>
                    <div className="f-row">
                      <div className="f-icon">
                        <span className="material-symbols-outlined text-[#007bff]" style={{ fontSize: '0.9rem' }}>{icon}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white">{title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed" style={{ paddingLeft: '38px' }}>{desc}</p>
                  </li>
                ))}
              </ul>
             
            </div>

          </div>


        </div>
      </div>
    </section>
  )
}