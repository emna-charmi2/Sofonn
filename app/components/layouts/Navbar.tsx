'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const SOLUTIONS = [
  { name: 'Marine IQ',  slug: 'marine-iq',  color: '#00b0ff' },
  { name: 'Marine LOG', slug: 'marine-log', color: '#FFC700' },
  { name: 'Marine ECO', slug: 'marine-eco', color: '#22c55e' },
  { name: 'Marine IA',  slug: 'marine-ia',  color: '#e1294c' },
];

function SolutionLink({
  item,
  onClick,
  className,
  defaultColor = 'var(--text-primary)',
}: {
  item: typeof SOLUTIONS[0];
  onClick?: () => void;
  className?: string;
  defaultColor?: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={`/${item.slug}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={{ color: hovered ? item.color : defaultColor, transition: 'color 0.2s ease' }}
    >
      {item.name}
    </Link>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const initial = saved ?? preferred;
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  useEffect(() => {
    if (!document.getElementById('bootstrap-icons-cdn')) {
      const link = document.createElement('link');
      link.id = 'bootstrap-icons-cdn';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css';
      document.head.appendChild(link);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsLocked(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleMouseEnter = () => { if (!isLocked) setIsOpen(true); };
  const handleMouseLeave = () => { if (!isLocked) setIsOpen(false); };
  const handleClick = () => {
    if (isLocked) { setIsLocked(false); setIsOpen(false); }
    else { setIsLocked(true); setIsOpen(true); }
  };
  const closeMenu = () => { setIsLocked(false); setIsOpen(false); };
  const closeMobileMenu = () => { setMobileMenuOpen(false); setMobileSolutionsOpen(false); };

  const logoSrc = theme === 'dark' ? '/logo-blanc-sofonn.png' : '/logo-dark-sofonn.png';

  return (
    <header
      className="w-full  fixed  z-800 "
      style={{ background: 'var(--bg-level-1)', borderBottom: '1px solid var(--border-subtle)' }}
    >
      <div className="mx-auto max-w-7xl p-4 sm:px-4 lg:px-6">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-10 test-align z-10">
            <Image src={logoSrc} alt="Sofonn Logo" width={100} height={100} style={{ transition: 'opacity 0.3s ease' }} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-20 text-align">
            <Link href="/" className="text-m font-bold font-arimo transition-colors hover:opacity-70" style={{ color: 'var(--text-primary)' }}>
              Home
            </Link>

            {/* Solutions */}
            <div className="relative" ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button
                type="button"
                onClick={handleClick}
                className="text-m font-medium transition-colors flex items-center gap-1 focus:outline-none hover:opacity-70"
                style={{ color: 'var(--text-primary)' }}
              >
                Solutions
                <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-56 rounded-xl py-2 text-sm transition-all duration-200 origin-top
                  ${isOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-2 scale-95 pointer-events-none'}`}
                style={{ background: 'var(--bg-level-2)', border: '1px solid var(--border-card)', boxShadow: 'var(--shadow-card)' }}
              >
                {SOLUTIONS.map((item) => (
                  <SolutionLink key={item.slug} item={item} onClick={closeMenu} className="block px-4 py-2.5 font-medium" />
                ))}
              </div>
            </div>

            <Link href="/marine-edge" className="text-m font-medium transition-colors hover:opacity-70" style={{ color: 'var(--text-primary)' }}>Marine Edge</Link>
            <Link href="/blog"        className="text-m font-medium transition-colors hover:opacity-70" style={{ color: 'var(--text-primary)' }}>Blogs</Link>
            <Link href="/contact"     className="text-m font-medium transition-colors hover:opacity-70" style={{ color: 'var(--text-primary)' }}>Contact</Link>
          </nav>

          {/* Desktop: Theme Toggle + Login */}
          <div className="hidden md:flex items-center gap-5">

            {/* Icône seule : 🌙 lune en dark, ☀️ soleil en light */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 focus:outline-none hover:opacity-70"
            >
              {theme === 'dark' ? (
                <i className="bi bi-moon-fill" style={{ fontSize: '1.1rem', color: '#a0aec0' }} />
              ) : (
                <i className="bi bi-sun-fill" style={{ fontSize: '1.1rem', color: '#f0c040' }} />
              )}
            </button>

            <Link
              href="/login"
              className="px-6 py-2 text-m font-medium rounded-full transition-colors duration-200 hover:opacity-80"
              style={{ color: 'var(--text-primary)', background: 'var(--bg-card)', border: '1px solid var(--border-card)' }}
            >
              Login
            </Link>
          </div>

          {/* Mobile: icône unique qui montre ce vers quoi on va switcher */}
          <div className="flex md:hidden items-center gap-5">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 focus:outline-none hover:opacity-70"
            >
              {theme === 'dark' ? (
                <i className="bi bi-moon-fill" style={{ fontSize: '1rem', color: '#a0aec0' }} />
              ) : (
                <i className="bi bi-sun-fill"  style={{ fontSize: '1rem', color: '#f0c040' }} />
              )}
            </button>

            <Link
              href="/login"
              className="px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200"
              style={{ color: 'var(--text-primary)', background: 'var(--bg-card)', border: '1px solid var(--border-card)' }}
            >
              Login
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 rounded transition-all duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} style={{ background: 'var(--text-primary)' }} />
                <span className={`block h-0.5 rounded transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} style={{ background: 'var(--text-primary)' }} />
                <span className={`block h-0.5 rounded transition-all duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} style={{ background: 'var(--text-primary)' }} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="px-4 py-4 flex flex-col gap-1" style={{ background: 'var(--bg-level-1)', borderTop: '1px solid var(--border-subtle)' }}>
          <Link href="/" onClick={closeMobileMenu} className="text-sm font-medium px-4 py-3 rounded-lg transition-colors hover:opacity-80" style={{ color: 'var(--text-primary)' }}>Home</Link>

          <div>
            <button
              type="button"
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="w-full text-sm font-medium px-4 py-3 rounded-lg transition-colors flex items-center justify-between hover:opacity-80"
              style={{ color: 'var(--text-primary)' }}
            >
              Solutions
              <svg className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${mobileSolutionsOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pl-4 flex flex-col gap-1 py-1">
                {SOLUTIONS.map((item) => (
                  <SolutionLink key={item.slug} item={item} onClick={closeMobileMenu} className="text-sm px-4 py-2.5 rounded-lg font-medium" defaultColor="var(--text-secondary)" />
                ))}
              </div>
            </div>
          </div>

          <Link href="/marine-edge" onClick={closeMobileMenu} className="text-sm font-medium px-4 py-3 rounded-lg transition-colors hover:opacity-80" style={{ color: 'var(--text-primary)' }}>Marine Edge</Link>
          <Link href="/blog"        onClick={closeMobileMenu} className="text-sm font-medium px-4 py-3 rounded-lg transition-colors hover:opacity-80" style={{ color: 'var(--text-primary)' }}>Blogs</Link>
          <Link href="/contact"     onClick={closeMobileMenu} className="text-sm font-medium px-4 py-3 rounded-lg transition-colors hover:opacity-80" style={{ color: 'var(--text-primary)' }}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}