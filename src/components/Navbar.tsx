import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, FileText, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Process', href: '#process' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<{ onOpenResume: () => void }> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Detect active section
      const sections = ['hero', 'about', 'skills', 'projects', 'process', 'education', 'certifications', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname === '/') {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/' + href);
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300',
        scrolled
          ? 'bg-darkBg/90 backdrop-blur-xl border-b border-darkBorder py-3.5 shadow-editorial-card'
          : 'bg-transparent border-b border-transparent py-5'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Personal Logo VA */}
        <a
          href={location.pathname === '/' ? '#hero' : '/#hero'}
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-darkBorder bg-darkCard transition-all duration-300 group-hover:border-crimson group-hover:shadow-crimson-glow">
            <span className="font-display text-sm font-black tracking-wider text-cream group-hover:text-crimson transition-colors">
              VA
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xs sm:text-sm font-bold tracking-tight text-cream leading-tight">
              Vishwaraj Algude
            </span>
            <span className="text-xs font-mono tracking-widest text-mutedGray uppercase">
              B.Tech CSE · Fresher
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 border border-darkBorder/60 bg-darkSurface/70 backdrop-blur-md rounded-full px-4 py-1.5 shadow-inner">
          {navItems.map((item) => {
            const isActive = location.pathname === '/' && activeSection === item.href.replace('#', '');
            const targetHref = location.pathname === '/' ? item.href : '/' + item.href;
            return (
              <a
                key={item.name}
                href={targetHref}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  'px-3 py-1 text-xs font-mono tracking-wider transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson',
                  isActive
                    ? 'text-cream font-bold bg-crimson shadow-crimson-subtle'
                    : 'text-mutedGray hover:text-cream hover:bg-white/5'
                )}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right: Availability Status & Download Resume Button */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Availability Dot */}
          <div className="hidden xl:flex items-center gap-2 rounded-full border border-darkBorder bg-darkCard px-3 py-1 text-xs font-mono text-mutedGray">
            <span className="h-2 w-2 rounded-full bg-crimson animate-pulse" />
            <span>Open to Fresher Roles</span>
          </div>

          {/* Download Resume Button */}
          <button
            onClick={onOpenResume}
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-lg bg-crimson px-4 py-2 font-mono text-xs font-bold text-cream shadow-crimson-subtle transition-all duration-300 hover:bg-crimson-bright hover:shadow-crimson-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume (6 Roles)</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenResume}
            className="rounded-lg bg-crimson px-3 py-1.5 font-mono text-xs font-bold text-cream sm:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
          >
            Resume (6)
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-darkBorder bg-darkCard text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-darkBorder bg-darkBg/98 backdrop-blur-2xl px-5 pt-4 pb-6 shadow-2xl animate-fade-in">
          <div className="flex flex-col space-y-1 mb-5">
            {navItems.map((item) => {
              const targetHref = location.pathname === '/' ? item.href : '/' + item.href;
              return (
                <a
                  key={item.name}
                  href={targetHref}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center justify-between py-2 text-sm font-mono text-mutedGray hover:text-crimson border-b border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson rounded-md px-1"
                >
                  <span>{item.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 opacity-50" />
                </a>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-crimson py-2.5 font-mono text-xs font-bold text-cream shadow-crimson-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
            >
              <FileText className="h-4 w-4" />
              <span>Download Role Resumes (6 Roles)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
