import Image from 'next/image';


const OFFER_ITEMS = [
  { icon: '/icons/home/light-bulb.png',          title: 'Innovative Solutions',   desc: 'Leverage cutting-edge technology to optimize vessel performance, reduce operational costs, and enhance decision-making with real-time data insights.' },
  { icon: '/icons/home/icon-compilance.png',     title: 'Compliance Excellence',  desc: 'Ensure regulatory compliance with automated certification tracking, proactive deficiency management, and streamlined audits.' },
  { icon: '/icons/home/icon-crew-mangement.png', title: 'Crew Management',        desc: 'Manage crew assignments, track qualifications, and ensure your team is equipped with the skills needed for smooth vessel operations.' },
  { icon:'/icons/home/icon-efficiency.png',     title: 'Operational Efficiency', desc: 'Streamline vessel tracking, optimize resource allocation, and enhance operational efficiency with intelligent alert systems.' },
];

export default function Offers() {
  return (
<section className="section-s3 relative py-20 overflow-hidden"  data-aos="zoom-in-up">
        <div className="glow-tl" data-aos="fade-up"/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3">Our Platform</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>What We Offer</h2>
            <p className="text-m font-medium transition-colors " style={{ color: 'var(--text-secondary)' }}>Marine IQ delivers a comprehensive suite of tools designed to streamline and optimize every aspect of maritime operations, ensuring efficiency, compliance, and profitability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {OFFER_ITEMS.map((item, i) => (
              <div key={i} className="card p-7 flex items-start gap-6 group">
                <div className="icon-box" style={{ width: '3rem', height: '3rem' }}>
                  <Image src={item.icon} alt={item.title} width={26} height={26} className="object-contain" /> 
                </div>
                <div>
                  <h3 className="text-base font-bold mb-2 transition-colors group-hover:text-blue-400" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        )}