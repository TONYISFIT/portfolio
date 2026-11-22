import React from 'react';
import { profileData } from '../data/profile';
import { navItems } from './Navbar';
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-darkBg border-t border-darkBorder py-16 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Section with Brand & Quote */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-darkBorder items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-darkBorder bg-darkCard text-crimson">
                <span className="font-display text-sm font-black tracking-wider text-cream">
                  VA
                </span>
              </div>
              <div>
                <span className="font-display text-base font-bold text-cream tracking-tight block">
                  {profileData.name}
                </span>
                <span className="font-mono text-xs text-crimson block">
                  B.Tech CSE Graduate // Class of 2026
                </span>
              </div>
            </div>

            <p className="text-xs text-mutedGray max-w-sm font-sans leading-relaxed">
              Technically versatile fresher in software development, Python, data analytics, and relational databases. SMSMPITR, Akluj — affiliated to DBATU, Lonere.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-cream font-bold block">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-mutedGray">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-crimson transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Closing Editorial Quote */}
          <div className="md:col-span-3 flex flex-col justify-between h-full space-y-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-crimson font-bold block mb-1">
                CREATIVE CREED
              </span>
              <p className="font-display text-sm font-bold uppercase tracking-wider text-cream leading-snug">
                "DESIGNED WITH CURIOSITY. BUILT WITH CODE."
              </p>
            </div>

            <div className="flex items-center gap-3 text-mutedGray">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="p-2 rounded-lg border border-darkBorder bg-darkCard hover:text-crimson hover:border-crimson transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="p-2 rounded-lg border border-darkBorder bg-darkCard hover:text-crimson hover:border-crimson transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profileData.contact.email}`}
                title="Email"
                className="p-2 rounded-lg border border-darkBorder bg-darkCard hover:text-crimson hover:border-crimson transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={`tel:${profileData.contact.phone}`}
                title="Phone"
                className="p-2 rounded-lg border border-darkBorder bg-darkCard hover:text-crimson hover:border-crimson transition-colors"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-mutedGray">
          <div>
            <span>© 2026 Vishwaraj Algude. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-lg border border-darkBorder bg-darkCard px-3 py-1.5 text-cream hover:border-crimson hover:text-crimson transition-all duration-200"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
