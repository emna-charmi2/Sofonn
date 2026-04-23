'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const SOLUTIONS = [
  { name: 'Marine IQ', slug: 'marine-iq', color: '#00b0ff' },
  { name: 'Marine LOG', slug: 'marine-log', color: '#FFC700' },
  { name: 'Marine ECO', slug: 'marine-eco', color: '#22c55e' },
  { name: 'Marine IA', slug: 'marine-ia', color: '#e1294c' },
];

function SolutionLink({
  item,
  onClick,
  className = '',
  defaultColor = 'var(--text-primary)',
}: {
  item: (typeof SOLUTIONS)[0];
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
      className={`block px-4 py-3 font-semibold text-base transition-colors ${className}`}
      style={{
        color: hovered ? item.color : defaultColor,
        transition: 'color 0.2s ease',
      }}
    >
      {item.name}
    </Link>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocked, setIsLocked] = useState(false); // verrouillage après clic
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Theme
  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
    const initial = saved ?? preferred;
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  // Bootstrap Icons
  useEffect(() => {
    if (!document.getElementById('bootstrap-icons-cdn')) {
      const link = document.createElement('link');
      link.id = 'bootstrap-icons-cdn';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css';
      document.head.appendChild(link);
    }
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  // Fermeture si clic en dehors (déverrouille aussi)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setIsLocked(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Empêcher scroll mobile
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setIsLocked(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSolutionsOpen(false);
  };

  // Gestion hover + clic
  const handleMouseEnter = () => {
    if (!isLocked) setIsOpen(true);
  };
  const handleMouseLeave = () => {
    if (!isLocked) setIsOpen(false);
  };
  const handleClick = () => {
    if (isLocked) {
      // Si déjà verrouillé, on ferme et déverrouille
      setIsOpen(false);
      setIsLocked(false);
    } else {
      // Sinon on ouvre et verrouille
      setIsOpen(true);
      setIsLocked(true);
    }
  };

  const logoSrc = theme === 'dark' ? '/logo-blanc-sofonn.png' : '/logo-dark-sofonn.png';

  const headerStyle = scrolled
    ? {
        background: 'var(--bg-blur)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-subtle)',
      }
    : {
        background: 'var(--bg-level-1)',
        borderBottom: '1px solid var(--border-subtle)',
      };

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={headerStyle}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-25 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center z-10">
            <Image
              src={logoSrc}
              alt="Sofonn Logo"
              width={130}
              height={130}
              className="transition-opacity hover:opacity-80"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-12">
            <Link
              href="/"
              className="text-base lg:text-lg tracking-wide hover:opacity-70 transition-colors"
              style={{ color: 'var(--text-primary)' }}
            >
              Home
            </Link>

            {/* Solutions Dropdown - HOVER + CLIC */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={handleClick}
                className="flex items-center gap-1 text-base lg:text-lg tracking-wide hover:opacity-70 transition-colors focus:outline-none"
                style={{ color: 'var(--text-primary)' }}
              >
                Solutions
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-64 rounded-2xl py-2 transition-all duration-200 origin-top z-50
                  ${isOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible -translate-y-2 scale-95 pointer-events-none'}`}
                style={{
                  background: 'var(--bg-level-2)',
                  border: '1px solid var(--border-card)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                {SOLUTIONS.map((item) => (
                  <SolutionLink
                    key={item.slug}
                    item={item}
                    onClick={closeMenu} // ferme menu et déverrouille
                  />
                ))}
              </div>
            </div>

            <Link href="/marine-edge" className="text-base lg:text-lg  tracking-wide hover:opacity-70 transition-colors" style={{ color: 'var(--text-primary)' }}>
              Marine Edge
            </Link>
            <Link href="/blog" className="text-base lg:text-lg tracking-wide hover:opacity-70 transition-colors" style={{ color: 'var(--text-primary)' }}>
              Blogs
            </Link>
            <Link href="/contact" className="text-base lg:text-lg tracking-wide hover:opacity-70 transition-colors" style={{ color: 'var(--text-primary)' }}>
              Contact
            </Link>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-5">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:opacity-70 transition-all"
            >
              {theme === 'dark' ? (
                <i className="bi bi-moon-fill text-xl text-gray-400" />
              ) : (
                <i className="bi bi-sun-fill text-xl text-amber-400" />
              )}
            </button>

            <Link
              href="/login"
              className="px-6 py-2.5 hover:opacity-80 text-base font-semibold rounded-full transition-all hover:scale-105"
              style={{
                color: 'var(--text-primary)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
              }}
            >
              Login
            </Link>
          </div>

          {/* Mobile Right Side */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center"
            >
              {theme === 'dark' ? (
                <i className="bi bi-moon-fill text-lg text-gray-400" />
              ) : (
                <i className="bi bi-sun-fill text-lg text-amber-400" />
              )}
            </button>

            <Link
              href="/login"
              className="px-4 py-1.5 text-sm font-semibold rounded-full"
              style={{
                color: 'var(--text-primary)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
              }}
            >
              Login
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 rounded transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} style={{ background: 'var(--text-primary)' }} />
                <span className={`block h-0.5 rounded transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} style={{ background: 'var(--text-primary)' }} />
                <span className={`block h-0.5 rounded transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} style={{ background: 'var(--text-primary)' }} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="px-4 py-6 flex flex-col gap-2" style={{ background: 'var(--bg-level-1)', borderTop: '1px solid var(--border-subtle)' }}>
          <Link href="/" onClick={closeMobileMenu} className="px-4 py-3 text-base hover:opacity-80">Home</Link>

          {/* Mobile Solutions Accordéon */}
          <div>
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="w-full px-4 py-3 text-base flex items-center justify-between hover:opacity-80"
              style={{ color: 'var(--text-primary)' }}
            >
              Solutions
              <svg className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`pl-4 transition-all duration-300 ${mobileSolutionsOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              {SOLUTIONS.map((item) => (
                <SolutionLink
                  key={item.slug}
                  item={item}
                  onClick={closeMobileMenu}
                  className="text-base"
                  defaultColor="var(--text-secondary)"
                />
              ))}
            </div>
          </div>

          <Link href="/marine-edge" onClick={closeMobileMenu} className="px-4 py-3 text-base  hover:opacity-80">Marine Edge</Link>
          <Link href="/blog" onClick={closeMobileMenu} className="px-4 py-3 text-base hover:opacity-80">Blogs</Link>
          <Link href="/contact" onClick={closeMobileMenu} className="px-4 py-3 text-base hover:opacity-80">Contact</Link>
        </nav>
      </div>
    </header>
  );
}