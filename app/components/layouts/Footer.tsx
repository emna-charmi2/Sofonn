'use client'
import Link from 'next/link';
import Image from 'next/image';

const SOLUTIONS = [
  { label: 'Marine IA',   href: '/marine-ia',   color: '#e1294c' },
  { label: 'Marine ECO',  href: '/marine-eco',  color: '#22c55e' },
  { label: 'Marine LOG',  href: '/marine-log',  color: '#FFC700' },
  { label: 'Marine IQ',   href: '/marine-iq',   color: '#00b0ff' },
  { label: 'Marine Edge', href: '/marine-edge', color: '#a855f7' },
];

const COMPANY = [
  { label: 'About Us', href: '/'   },
  { label: 'Blog',     href: '/blog'    },
  { label: 'Contact',  href: '/contact' },
];

// Hover coloré compatible SSR (pas de useState, utilise onMouseEnter/Leave)
function FooterLink({ label, href, color }: { label: string; href: string; color: string }) {
  return (
    <Link
      href={href}
      className="text-sm flex items-center gap-2 transition-all duration-200"
      style={{ color: 'var(--text-muted)' }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = color;
         {/* el.style.transform = 'translateX(4px)'; */}
        
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = 'var(--text-muted)';
        el.style.transform = 'translateX(0)';
       
      }}
    >
      <span
        className="text-m font-medium transition-colors "
      />
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        background: 'var(--bg-level-1)',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 p-8">

        {/* ── Main grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Le logo qui change avec le thème est géré via CSS vars dans globals.css
                Alternative simple : deux images, visibilité contrôlée par data-theme */}
            <div style={{ color: 'var(--text-primary)' }}>
              <h4>About Us</h4>
            </div>
            <div className="mb-6 max-w-xs pt-3" style={{ color: 'var(--text-muted)' }}>
              <p>
              SOFONN optimizes marine operations with digital solutions. Marine-Eco
              supports eco-conscious practices through emission reduction and fuel optimization.
              </p>
            </div>
            <div className="flex gap-3">
              {[{ icon: 'in', label: 'LinkedIn' }, { icon: '𝕏', label: 'X' }, { icon: '@', label: 'Email' }].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-200 hover:scale-110"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#00b0ff'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <div style={{ color: 'var(--text-primary)' }}>
              <h4>Solutions</h4>
            </div>
            <ul className="space-y-3 pt-3">
              {SOLUTIONS.map((s) => (
                <li key={s.label}><FooterLink {...s} /></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div style={{ color: 'var(--text-primary)' }}>
              <h4>Company</h4>
            </div>
            <ul className="space-y-3 pt-3">
              {COMPANY.map((c) => (
                <li key={c.label}><FooterLink {...c} color="#00b0ff" /></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <div style={{ color: 'var(--text-primary)' }}>
              <h4>Newsletter</h4>
            </div>
            <div className="mb-4 pt-3" style={{ color: 'var(--text-muted)' }}>
              <p>
              Stay updated with our latest maritime tech insights and innovations.
              </p>
            </div>
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-lg py-3 pl-4 pr-16 text-sm focus:outline-none transition-all duration-200"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', color: 'var(--text-primary)' }}
                onFocus={(e) => { e.currentTarget.style.borderColor = '#00b0ff'; }}
                onBlur={(e)  => { e.currentTarget.style.borderColor = 'var(--border-card)'; }}
              />
              <button
                type="button"
                className="absolute right-2 h-8 px-3 rounded-md text-white text-xs font-semibold transition-all duration-200 hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #00b0ff, #0070cc)', boxShadow: '0 0 12px rgba(0,176,255,0.3)' }}
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* ── Copyright ─────────────────────────────────────────── */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-3 gap-4"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <div style={{ color: 'var(--text-muted)' }}>
            <p>
            © {new Date().getFullYear()} Sofonn Technologies. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <Link key={item} href="#" className="text-xs transition-colors hover:opacity-80" style={{ color: 'var(--text-muted)' }}>
                {item}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}