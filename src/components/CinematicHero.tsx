import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profile';
import { photosData } from '../data/photos';
import { useTheme } from '../lib/theme';
import { ResumeModal } from './ResumeModal';
import {
  Play,
  Pause,
  ArrowRight,
  Github,
  FileText,
  Mail,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { cn } from '../lib/utils';

export const CinematicHero: React.FC = () => {
  const { reducedMotion } = useTheme();
  const heroPhotos = photosData.filter((p) => p.isHero);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(!reducedMotion);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const nextSlide = useCallback(() => {
    if (heroPhotos.length <= 1) return;
    setCurrentSlide((prev) => (prev + 1) % heroPhotos.length);
  }, [heroPhotos.length]);

  useEffect(() => {
    if (reducedMotion || !isPlaying || heroPhotos.length <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(timer);
  }, [isPlaying, reducedMotion, nextSlide, heroPhotos.length]);

  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden bg-midnight flex flex-col justify-between pt-8 pb-12">
      {/* Background Subtle Gradient Mesh (Indigo -> Deep Plum -> Ink Teal) */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,#1A1033_0%,transparent_50%),radial-gradient(circle_at_80%_80%,#0F2230_0%,transparent_50%)]" />

      {/* Floating geometric crosshairs and orbit elements */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden select-none">
        <span className="absolute top-12 left-10 font-mono text-xs text-antiqueGold/40">+ 01 / INTRO</span>
        <span className="absolute top-12 right-12 font-mono text-xs text-auroraTeal/40">+ CS_GRADUATE</span>
        <span className="absolute bottom-16 left-12 font-mono text-xs text-mutedIndigo/40">+ CGPA_7.91</span>

        {/* Rotating Circular Dotted Orbit Ring with "PORTFOLIO · PORTFOLIO ·" text (Reference 1) */}
        <div className="absolute -top-10 -right-10 md:top-16 md:right-24 h-36 w-36 md:h-44 md:w-44 rounded-full border border-antiqueGold/25 flex items-center justify-center animate-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full text-antiqueGold/60 fill-current">
            <path
              id="orbitCircle"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="font-mono text-[8px] uppercase tracking-[3px]">
              <textPath href="#orbitCircle">
                PORTFOLIO · VISHWARAJ ALGUDE · FRESHER · 
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* Hero Core: Split Layer with Giant Outline Word behind Photo (Reference 3 & 4) */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 z-30 animate-fade-up">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-antiqueGold/40 bg-plum/70 px-4 py-1.5 backdrop-blur-md shadow-gold-glow mb-6">
              <span className="h-2 w-2 rounded-full bg-auroraTeal animate-pulse" />
              <span className="font-mono text-xs font-semibold tracking-wider text-champagne">
                {profileData.availabilityStatus}
              </span>
              <span className="text-antiqueGold/40">·</span>
              <span className="font-mono text-[11px] text-mutedIndigo">
                SMSMPITR · DBATU (2022–2026)
              </span>
            </div>

            {/* Display Name with Outline-and-fill Effect */}
            <div className="mb-4">
              <span className="font-mono text-xs tracking-widest text-antiqueGold uppercase font-semibold">
                [01] COMPUTER SCIENCE & ENGINEERING GRADUATE
              </span>
              <h1 className="mt-2 font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-warmWhite">
                VISHWARAJ <br />
                <span className="text-stroke-gold text-transparent transition-all">
                  ALGUDE
                </span>
              </h1>
            </div>

            {/* Headline with Instrument Serif Italic accent */}
            <p className="font-sans text-xl sm:text-2xl md:text-3xl text-champagne font-light leading-snug mb-5">
              Turning <span className="font-accent italic text-warmWhite text-2xl sm:text-3xl md:text-4xl">Data</span>, Technology & <span className="font-accent italic text-warmWhite text-2xl sm:text-3xl md:text-4xl">Ideas</span> Into Real-World Solutions.
            </p>

            {/* Supporting Copy */}
            <p className="max-w-2xl text-xs sm:text-sm text-mutedIndigo leading-relaxed font-sans mb-8">
              Technically versatile fresher specializing across <strong className="text-antiqueGold font-semibold">Python</strong>, <strong className="text-antiqueGold font-semibold">SQL</strong>, <strong className="text-antiqueGold font-semibold">Advanced Excel</strong>, <strong className="text-antiqueGold font-semibold">Power BI</strong>, <strong className="text-antiqueGold font-semibold">QA test automation</strong>, and <strong className="text-antiqueGold font-semibold">software development</strong>. Committed to writing maintainable code and deriving clear intelligence from data.
            </p>

            {/* CTAs with Ember Coral accents & Magnetic feel */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              {/* Primary CTA with Ember Coral Wipe */}
              <Link
                to="/projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-antiqueGold px-6 py-3.5 font-mono text-xs sm:text-sm font-bold text-midnight shadow-gold-glow transition-all hover:shadow-coral-glow"
              >
                <span className="absolute inset-0 bg-emberCoral translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-warmWhite transition-colors">
                  <span>Explore My Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              {/* Download Resume Modal Trigger */}
              <button
                onClick={() => setResumeModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-lg border border-antiqueGold/40 bg-plum/60 px-5 py-3.5 font-mono text-xs sm:text-sm font-semibold text-champagne backdrop-blur-md transition-all hover:border-antiqueGold hover:bg-antiqueGold/15 hover:text-warmWhite"
              >
                <FileText className="h-4 w-4 text-antiqueGold" />
                <span>Download My Resume</span>
              </button>

              {/* GitHub Link */}
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3.5 font-mono text-xs sm:text-sm font-medium text-warmWhite hover:border-auroraTeal hover:text-auroraTeal transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>

              {/* Contact Link */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-3 py-3.5 font-mono text-xs text-mutedIndigo hover:text-emberCoral transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Contact</span>
                <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Right Column: Layered Giant Word + Real Photo Composition (Reference 3 & 4) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Giant Outlined Word Behind Portrait */}
            <div
              aria-hidden="true"
              className="absolute -top-12 lg:-top-16 -left-12 lg:-left-20 z-0 select-none pointer-events-none opacity-20 dark:opacity-15"
            >
              <span className="font-display text-7xl sm:text-9xl font-black uppercase tracking-tighter text-stroke-gold">
                PORTFOLIO
              </span>
            </div>

            {/* Overlapping Main Photo Frame with Ken Burns & Crossfade */}
            <div className="relative z-20 w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-antiqueGold/40 bg-gradient-to-br from-plum via-midnight to-inkTeal shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
              {heroPhotos.map((photo, index) => {
                const isActive = index === currentSlide;

                return (
                  <div
                    key={photo.id}
                    className={cn(
                      'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                      isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    )}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                      className={cn(
                        'h-full w-full object-cover',
                        !reducedMotion && isActive && 'animate-ken-burns'
                      )}
                    />
                    {/* Layered Gradient Vignette */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
                  </div>
                );
              })}

              {/* Foreground Overlay Labels */}
              <div className="absolute bottom-4 left-4 right-4 z-30 flex items-end justify-between">
                <div className="rounded-lg bg-midnight/80 backdrop-blur-md border border-white/10 px-3 py-1.5">
                  <p className="font-display text-xs uppercase font-bold text-warmWhite">
                    Vishwaraj Algude
                  </p>
                  <p className="font-mono text-xs text-champagne">
                    SMSMPITR · DBATU Lonere
                  </p>
                </div>

                {/* Slideshow Control */}
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-midnight/80 border border-antiqueGold/40 text-champagne hover:text-warmWhite backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-antiqueGold"
                >
                  {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ADDENDUM v2.1 Requirement: Short 2-3 sentence "Hello, I'm Vishwaraj" intro under hero */}
      <div className="relative z-30 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="rounded-xl border border-antiqueGold/25 bg-gradient-to-r from-plum/80 via-midnight/80 to-inkTeal/80 p-5 sm:p-6 backdrop-blur-lg flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-indigo-card">
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-[11px] text-antiqueGold uppercase tracking-wider font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Hello, I'm Vishwaraj Algude</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-warmWhite/90 leading-relaxed">
              "{profileData.introduction.greeting} {profileData.introduction.education} {profileData.introduction.technical}"
            </p>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-lg border border-antiqueGold/40 bg-antiqueGold/15 px-4 py-2 font-mono text-xs font-bold text-champagne hover:bg-antiqueGold hover:text-midnight transition-colors self-start md:self-center flex-shrink-0"
          >
            <span>Read Full Introduction</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </section>
  );
};
