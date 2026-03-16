export default function WhyIQ() {
  return (


<section className="py-12 px-4 bg-[#050c1a] relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#007bff]/[0.04] blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-2">Why Choose Marine IQ?</h2>
          <p className="text-slate-500 text-center max-w-lg mx-auto">Marine IQ is more than just a software solution. It's a strategic partner dedicated to your maritime success. Here's why leading ship owners, shipping companies, and charterers choose Marine IQ.</p>
          <div className="section-divider" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {icon:'settings_suggest',title:'Tailored to Your Needs',desc:'Customizable dashboards and reporting modules to fit your specific fleet size and vessel types.'},
              {icon:'gavel',title:'Streamlined Compliance',desc:'Stay ahead of evolving environmental and safety regulations with automated documentation.'},
              {icon:'hub',title:'Real-time Collaboration',desc:'Bridge the gap between ship and shore with instant data synchronization and secure messaging.'},
              {icon:'report_problem',title:'Proactive Deficiency Management',desc:'Identify and resolve potential risks before they lead to costly detentions or accidents.'},
              {icon:'trending_up',title:'Scalable for Growth',desc:'Whether managing 5 or 500 vessels, our infrastructure scales with your business expansion.'},
              {icon:'eco',title:'Optimize Fuel & Emissions',desc:'Powerful analytics to reduce fuel consumption and meet decarbonization targets (CII/EEXI).'},
            ].map(({icon,title,desc}) => (
              <div key={title} className="card p-6">
                <span className="material-symbols-outlined text-[#007bff] mb-3 block" style={{fontSize:'1.6rem'}}>{icon}</span>
                <h4 className="text-sm font-bold text-white mb-1.5">{title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        )}