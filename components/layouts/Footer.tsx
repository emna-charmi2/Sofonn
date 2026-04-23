'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const SOLUTIONS = [
  { label: 'Marine IA',   href: '/marine-ia',   color: '#e1294c' },
  { label: 'Marine ECO',  href: '/marine-eco',  color: '#22c55e' },
  { label: 'Marine LOG',  href: '/marine-log',  color: '#FFC700' },
  { label: 'Marine IQ',   href: '/marine-iq',   color: '#00b0ff' },
  { label: 'Marine Edge', href: '/marine-edge', color: '#a855f7' },
];

const COMPANY = [
  { label: 'About Us', href: '/about' },
  { label: 'Blog',     href: '/blog'    },
  { label: 'Contact',  href: '/contact' },
];

const SOCIALS = [
  { icon: 'bi bi-linkedin', label: 'LinkedIn', href: '#', color: '#0A66C2' },
  { icon: 'bi bi-twitter-x', label: 'X (Twitter)', href: '#', color: '#ffffff' },
  { icon: 'bi bi-envelope-fill', label: 'Email', href: 'mailto:contact@sofonn.com', color: '#00b0ff' },
];

function FooterLink({ label, href, color }: { label: string; href: string; color: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-sm transition-all duration-200 hover:translate-x-1"
      style={{ color: 'var(--text-muted)' }}
      onMouseEnter={(e) => { e.currentTarget.style.color = color; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
    >
      <p className="transition-transform duration-200 group-hover:translate-x-1">›</p>
      {label}
    </Link>
  );
}

export default function Footer() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const initial = saved ?? preferred;
    setTheme(initial);
  }, []);

  // Listen for theme changes from header
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme') as 'dark' | 'light';
          if (newTheme) setTheme(newTheme);
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const logoSrc = theme === 'dark' ? '/logo-blanc-sofonn.png' : '/logo-dark-sofonn.png';

  return (
    <footer
      className="w-full mt-auto"
      style={{
        background: 'var(--bg-level-1)',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >

      <div className=" w-[90%] sm:w-[85%] lg:w-[80%] max-w-480 mx-auto relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5 transition-opacity hover:opacity-80">
              <Image
                src={logoSrc}
                alt="Sofonn Logo"
                width={130}
                height={130}
                className="h-auto w-28 lg:w-32"
                priority
              />
            </Link>
            <p>
              SOFONN optimizes marine operations with digital solutions. Marine-Eco
              supports eco-conscious practices through emission reduction and fuel optimization.
            </p>
            <div className="flex gap-3 mt-6">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-lg transition-all duration-200 hover:scale-110 hover:shadow-md"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = social.color; e.currentTarget.style.borderColor = social.color; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-card)'; }}
                >
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-base font-semibold tracking-wide" style={{ color: 'var(--text-primary)' }}>
              Solutions
            </h4>
            <ul className="space-y-3 pt-4">
              {SOLUTIONS.map((s) => (
                <li key={s.label} className="paragraph-style ">
                  <FooterLink {...s} />
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-base font-semibold tracking-wide" style={{ color: 'var(--text-primary)' }}>
              Company
            </h4>
            <ul className="space-y-3 pt-4">
              {COMPANY.map((c) => (
                <li key={c.label} className="paragraph-style">
                  <FooterLink {...c} color="#00b0ff" />
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-base font-semibold tracking-wide" style={{ color: 'var(--text-primary)' }}>
              Newsletter
            </h4>
            <div className="pt-4">
              <p>
                Stay updated with our latest maritime tech insights and innovations.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const input = e.currentTarget.querySelector('input');
                  if (input?.value) alert(`Thanks for subscribing! (Demo: ${input.value})`);
                }}
                className="relative flex flex-col sm:flex-row gap-3 sm:gap-2"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="w-full rounded-xl py-3 px-4 text-sm focus:outline-none transition-all duration-200"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', color: 'var(--text-primary)' }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#00b0ff'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,176,255,0.1)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-card)'; e.currentTarget.style.boxShadow = 'none'; }}
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #00b0ff, #0070cc)', boxShadow: '0 4px 12px rgba(0,176,255,0.25)' }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-5 mt-12 pt-8 text-xs"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <div style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Sofonn Technologies. All rights reserved.
          </div>
         
        </div>
      </div>
    </footer>
  );
}