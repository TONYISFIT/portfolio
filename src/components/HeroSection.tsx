import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowRight, FileText, Sparkles, MapPin, GraduationCap, Award } from 'lucide-react';
import { cn } from '../lib/utils';
import { profileData } from '../data/profile';

export const HeroSection: React.FC<{ onOpenResume: () => void }> = ({ onOpenResume }) => {
  const titles = [
    'Python Developer',
    'Software Developer',
    'Data Analyst',
    'Full-Stack Developer',
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setFadeState(true);
      }, 280);
    }, 2800);

    return () => clearInterval(interval);
  }, [titles.length]);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-darkBg flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden"
    >
      {/* 1. Controlled Decorative Background Container (Strictly Clipped, No Viewport Spillover) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        {/* Soft Ambient Crimson Lighting */}
        <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-crimson/10 blur-[140px]" />
        <div className="absolute bottom-1/3 left-10 h-80 w-80 rounded-full bg-crimson/8 blur-[120px]" />

        {/* Faint Background Typography: Clamped, Centered, Constrained to Viewport */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.03] font-display font-black uppercase tracking-wider text-cream whitespace-nowrap"
          style={{ fontSize: 'clamp(3.5rem, 14vw, 11rem)', lineHeight: 1 }}
        >
          ALGUDE
        </div>

        {/* Subtle Background Radial Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C8102E_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* 2. Main Hero Content Grid (Left Content + Right Portrait) */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 xl:col-span-7 z-20 space-y-6 lg:pr-6">
            
            {/* Greeting & Live Availability Status */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-crimson font-bold">
                HELLO, I'M
              </span>
              <span className="text-darkBorder">/</span>
              <div className="inline-flex items-center gap-2 rounded-full border border-darkBorder bg-darkCard/80 backdrop-blur-sm px-3.5 py-1 font-mono text-[11px] tracking-wider text-mutedGray">
                <span className="h-2 w-2 rounded-full bg-crimson animate-pulse" />
                <span>OPEN TO FRESHER ROLES</span>
              </div>
            </div>

            {/* Main Name Heading — Clean Responsive Sizing with clamp, zero overlap */}
            <div className="space-y-2">
              <h1
                className="font-display font-black uppercase tracking-tight text-cream"
                style={{ fontSize: 'clamp(2.5rem, 5.2vw, 5.2rem)', lineHeight: 1.05 }}
              >
                <span className="block">VISHWARAJ</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cream via-cream to-crimson">
                  ALGUDE
                </span>
              </h1>
              <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-crimson font-semibold">
                B.Tech Computer Science & Engineering Graduate
              </p>
            </div>

            {/* Dynamic Rotating Designation */}
            <div className="flex items-center gap-3 font-mono text-base sm:text-lg text-cream/90 h-8">
              <span className="text-crimson font-bold">►</span>
              <span
                className={cn(
                  'font-bold tracking-wide transition-opacity duration-300 text-cream',
                  fadeState ? 'opacity-100' : 'opacity-0'
                )}
              >
                {titles[currentTitleIndex]}
              </span>
            </div>

            {/* Short Introduction */}
            <p className="max-w-xl text-sm sm:text-base text-mutedGray font-sans leading-relaxed">
              Technically versatile fresher with strong Computer Science fundamentals and practical, project-driven experience across software development, Python, relational database management, and data analytics.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-crimson px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-crimson-bright hover:shadow-crimson-glow"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 rounded-xl border border-darkBorder bg-darkCard px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-cream transition-all duration-300 hover:border-crimson hover:text-white hover:bg-darkSurface"
              >
                <FileText className="h-4 w-4 text-crimson" />
                <span>DOWNLOAD RESUME</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: REFINED CINEMATIC PORTRAIT FRAME */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center lg:justify-end z-20">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[390px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-darkSurface shadow-editorial-card group">
              {/* Subtle Crimson Rim Glow inside the frame */}
              <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl shadow-[inset_0_0_50px_rgba(200,16,46,0.35)] transition-all duration-500 group-hover:shadow-[inset_0_0_70px_rgba(200,16,46,0.55)]" />

              {/* High-Resolution Professional Portrait */}
              <img
                src="/photos/portrait-suit.jpg"
                alt="Vishwaraj Algude — Computer Science Engineering Graduate"
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
                decoding="async"
              />

              {/* Controlled Gradient Overlay for Contrast */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-darkBg via-darkBg/25 to-transparent" />

              {/* Bottom Editorial Caption */}
              <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between border-t border-white/10 pt-3">
                <span className="font-mono text-xs tracking-[0.2em] text-crimson font-bold uppercase">
                  THINK. BUILD. CREATE.
                </span>
                <span className="font-mono text-xs text-mutedGray">
                  01 // CSE FRESHER
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. HERO BOTTOM BAR: DEGREE, UNIVERSITY, CGPA & LOCATION */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full mt-12 pt-6 border-t border-darkBorder/60">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs text-mutedGray">
          <div>
            <span className="block text-crimson font-bold text-xs uppercase tracking-wider mb-1">
              DEGREE
            </span>
            <span className="text-cream font-medium block">
              {profileData.education.degree}
            </span>
          </div>

          <div>
            <span className="block text-crimson font-bold text-xs uppercase tracking-wider mb-1">
              UNIVERSITY
            </span>
            <span className="text-cream font-medium block">
              {profileData.education.institutionShort}
            </span>
            <span className="text-xs text-mutedGray block">
              DBATU Lonere Affiliated
            </span>
          </div>

          <div>
            <span className="block text-crimson font-bold text-xs uppercase tracking-wider mb-1">
              ACADEMIC MERIT
            </span>
            <span className="text-cream font-medium block">
              CGPA: {profileData.education.cgpa}
            </span>
            <span className="text-xs text-mutedGray block">
              Class of 2026
            </span>
          </div>

          <div>
            <span className="block text-crimson font-bold text-xs uppercase tracking-wider mb-1">
              LOCATION
            </span>
            <span className="text-cream font-medium block">
              {profileData.education.location}
            </span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Anchor */}
      <a
        href="#about"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-mutedGray hover:text-crimson focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson rounded transition-colors"
      >
        <span>SCROLL DOWN</span>
        <ArrowDown className="h-3 w-3 text-crimson animate-bounce" />
      </a>
    </section>
  );
};
