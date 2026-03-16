import Image from 'next/image';

const WHY_ITEMS = [
  { icon: '/icons/home/verified-user.png', title: 'Ensure Regulatory Compliance', desc: 'Stay ahead of maritime regulations with automated tracking and proactive compliance tools.' },
  { icon: '/icons/home/icon-fleet.png',    title: 'Global Fleet Management',      desc: 'Monitor and manage your fleet worldwide with real-time tracking and intelligent insights.' },
  { icon: '/icons/home/icon-crew.png',     title: 'Crew Management',              desc: 'Efficiently manage crew rotations, certifications, and performance metrics.' },
  { icon: '/icons/home/icon-analytics.png',title: 'Advanced Analytics',           desc: 'Leverage powerful data analytics to optimize performance and drive strategic decisions.' },
];
export default function Why() {
  return (
      <section className="section-s2 relative py-20 overflow-hidden">
        <div className="glow-br" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="eyebrow mb-3">Our Advantage</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight" style={{ color: 'var(--text-primary)' }}>Why Choose Us?</h2>
              <p className="text-m font-medium transition-colors " style={{ color: 'var(--text-secondary)' }}>We tailor our services to your needs, ensuring maritime excellence, compliance, and efficiency.</p>
              <div className="quote-card">
                <p className="text-m font-medium transition-colors " style={{ color: 'var(--text-primary)' }}>
                  &ldquo;90% OF SHIPPING COMPANIES STRUGGLE WITH DATA ISSUES AFFECTING THEIR DECISION-MAKING&rdquo;
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_ITEMS.map((item, i) => (
                <div key={i} className="card p-5 flex flex-col gap-4 group">
                  <div className="icon-box">
                    <Image src={item.icon} alt={item.title} width={20} height={20} className="object-contain" />
                  </div>
                  <div >
                    <h4 className="text-sm font-bold mb-1.5 transition-colors group-hover:text-blue-400" style={{ color: 'var(--text-primary)' }}>{item.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
    )}