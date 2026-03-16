import Image from 'next/image';

export default function AboutUs() {
  return (

          <section className="section-s5 relative py-20 overflow-hidden">
        <div className="glow-tl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>About Sofonn</h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>Sofonn is at the forefront of the digital maritime revolution. We specialize in building sophisticated software ecosystems that connect hardware, data, and human intelligence. Our mission is to make the oceans more transparent, efficient, and sustainable through advanced computational models.</p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: 'var(--accent)' }}>
                Discover our history -
              </a>
            </div>
          </div>
        </div>
      </section>
  )}
