import Image from 'next/image';

export default function CallToAction() {
  return (

      <section className="section-s1 relative py-12 overflow-hidden">
        <div className="glow-tl" /><div className="glow-br" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cta-blob p-12 lg:p-20 text-center">
          
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Ready to optimize your fleet?</h2>
            <p className="text-base leading-relaxed max-w-2xl mx-auto mb-12" style={{ color: 'var(--text-secondary)' }}>
              Join the industry leaders already using Sofonn to drive the future of maritime logistics. Transform your data into actionable intelligence today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center gap-2 group">
                Get Started Now <Image src="/right-arrow.png" alt="arrow" width={16} height={16} />
              </button>
              <button className="btn-ghost">Talk to an Expert</button>
            </div>
          </div>
        </div>
      </section>
   



  )}