import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Lightbox } from '../components/Lightbox';
import { Badge } from '../components/Badge';
import { profileData } from '../data/profile';
import { photosData } from '../data/photos';
import {
  GraduationCap,
  Target,
  Sparkles,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Code2,
  Briefcase,
  Layers,
  Award,
  CheckCircle2,
  HelpCircle,
  FileText,
  Maximize2,
  Camera,
} from 'lucide-react';
import { cn } from '../lib/utils';

export const About: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  // Teleprompter / Interview Practice Mode
  const [isTeleprompterMode, setIsTeleprompterMode] = useState(false);
  const [teleprompterStep, setTeleprompterStep] = useState(0);

  const introBlocks = [
    { label: 'Who I Am', tag: '01 / GREETING', text: profileData.introduction.greeting },
    { label: 'Education', tag: '02 / ACADEMICS', text: profileData.introduction.education },
    { label: 'Technical Background', tag: '03 / SKILLS', text: profileData.introduction.technical },
    { label: 'Experience', tag: '04 / INTERNSHIP', text: profileData.introduction.experience },
    { label: 'Projects', tag: '05 / ENGINEERING', text: profileData.introduction.projects },
    { label: 'Certifications', tag: '06 / LEARNING', text: profileData.introduction.certifications },
    { label: 'How I Work', tag: '07 / WORK ETHIC', text: profileData.introduction.personal },
    { label: 'Short-Term Goal', tag: '08 / CAREER GOAL', text: profileData.introduction.shortTermGoal },
    { label: 'Long-Term Goal', tag: '09 / VISION', text: profileData.introduction.longTermGoal },
    { label: 'Closing', tag: '10 / CLOSING', text: profileData.introduction.closing },
  ];

  // Teleprompter keyboard navigation (ArrowLeft, ArrowRight)
  useEffect(() => {
    if (!isTeleprompterMode) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setTeleprompterStep((prev) => (prev + 1) % introBlocks.length);
      } else if (e.key === 'ArrowLeft') {
        setTeleprompterStep((prev) => (prev - 1 + introBlocks.length) % introBlocks.length);
      } else if (e.key === 'Escape') {
        setIsTeleprompterMode(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTeleprompterMode, introBlocks.length]);

  return (
    <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <SectionHeader
          badge="Verified Profile"
          title="About Vishwaraj Algude"
          subtitle="Computer Science & Engineering graduate from SMSMPITR, Akluj, affiliated to Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere (CGPA 7.91)."
          className="mb-0"
        />

        {/* Teleprompter Toggle for Interview Practice */}
        <button
          onClick={() => setIsTeleprompterMode(!isTeleprompterMode)}
          className={cn(
            'inline-flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-xs font-bold transition-all shadow-md',
            isTeleprompterMode
              ? 'bg-emberCoral text-midnight border border-emberCoral'
              : 'border border-antiqueGold/40 bg-plum text-champagne hover:border-antiqueGold hover:bg-antiqueGold/20'
          )}
        >
          <BookOpen className="h-4 w-4 text-antiqueGold" />
          <span>{isTeleprompterMode ? 'Standard Layout' : 'Teleprompter / Read View'}</span>
        </button>
      </div>

      {/* 1. Teleprompter View Mode (Interview Practice) */}
      {isTeleprompterMode ? (
        <section className="mb-20 rounded-2xl border-2 border-antiqueGold bg-gradient-to-br from-plum via-midnight to-inkTeal p-8 sm:p-14 shadow-2xl text-center animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between text-xs font-mono text-antiqueGold mb-8">
              <span>{introBlocks[teleprompterStep].tag}</span>
              <span>
                STEP {teleprompterStep + 1} / {introBlocks.length}
              </span>
            </div>

            <h3 className="font-display text-sm uppercase tracking-widest text-mutedIndigo mb-4">
              {introBlocks[teleprompterStep].label}
            </h3>

            <p className="font-sans text-xl sm:text-2xl md:text-3xl text-warmWhite font-light leading-relaxed">
              "{introBlocks[teleprompterStep].text}"
            </p>

            {/* Stepper Controls */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <button
                onClick={() =>
                  setTeleprompterStep((prev) => (prev - 1 + introBlocks.length) % introBlocks.length)
                }
                className="flex h-12 w-12 items-center justify-center rounded-full border border-antiqueGold/40 bg-plum text-champagne hover:bg-antiqueGold hover:text-midnight transition-colors"
                aria-label="Previous section"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="flex items-center gap-1.5">
                {introBlocks.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTeleprompterStep(i)}
                    className={cn(
                      'h-2 rounded-full transition-all',
                      i === teleprompterStep ? 'w-6 bg-antiqueGold' : 'w-2 bg-white/20'
                    )}
                  />
                ))}
              </div>

              <button
                onClick={() => setTeleprompterStep((prev) => (prev + 1) % introBlocks.length)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-antiqueGold/40 bg-plum text-champagne hover:bg-antiqueGold hover:text-midnight transition-colors"
                aria-label="Next section"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <p className="font-mono text-xs text-mutedIndigo mt-4">
              Use <kbd className="rounded border px-1">←</kbd> and <kbd className="rounded border px-1">→</kbd> arrow keys to navigate.
            </p>
          </div>
        </section>
      ) : (
        /* 2. Standard Full Introduction Layout: Labelled Blocks with Torn-Paper Collage (Reference 2) */
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Collage & Cut-out style portrait (Reference 2) */}
            <div className="lg:col-span-5 relative">
              {/* Main Cut-out Style Frame with Ember Coral Outline Stroke */}
              <div className="relative mx-auto max-w-sm rounded-3xl p-1.5 bg-gradient-to-br from-emberCoral via-antiqueGold to-auroraTeal shadow-coral-glow">
                <div className="aspect-[3/4] rounded-[22px] overflow-hidden bg-midnight">
                  <img
                    src={photosData[0].src}
                    alt={photosData[0].alt}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Tilted Polaroid Accent 1 */}
              <div className="hidden sm:block absolute -bottom-8 -left-6 w-36 rounded-xl border border-white/20 bg-paper-surface p-2 shadow-2xl rotate-[-8deg] hover:rotate-0 transition-transform">
                <div className="aspect-square rounded-lg overflow-hidden bg-midnight">
                  <img src={photosData[1].src} alt={photosData[1].alt} className="h-full w-full object-cover" />
                </div>
                <p className="mt-1 font-mono text-[9px] text-midnight text-center font-bold">
                  DISCIPLINE · 2026
                </p>
              </div>

              {/* Tilted Polaroid Accent 2 */}
              <div className="hidden sm:block absolute -top-6 -right-4 w-36 rounded-xl border border-white/20 bg-paper-surface p-2 shadow-2xl rotate-[9deg] hover:rotate-0 transition-transform">
                <div className="aspect-square rounded-lg overflow-hidden bg-midnight">
                  <img src={photosData[2].src} alt={photosData[2].alt} className="h-full w-full object-cover" />
                </div>
                <p className="mt-1 font-mono text-[9px] text-midnight text-center font-bold">
                  BALANCE · VA
                </p>
              </div>
            </div>

            {/* Right Blocks: The 10 Introduction Sections */}
            <div className="lg:col-span-7 space-y-4">
              {introBlocks.map((block) => (
                <div
                  key={block.tag}
                  className="rounded-xl border border-white/10 bg-plum/40 p-5 backdrop-blur-md transition-all hover:border-antiqueGold/40 hover:bg-plum/70"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-antiqueGold">
                      {block.label}
                    </span>
                    <span className="font-mono text-xs text-mutedIndigo">
                      {block.tag}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-warmWhite/90 leading-relaxed">
                    {block.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Featured Photo Gallery (Single row of 3 on desktop, stacked on mobile) */}
      <section className="mb-20">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-antiqueGold uppercase tracking-widest">[03] LIFESTYLE & DISCIPLINE</span>
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-warmWhite mt-1">
              Corporate, Fitness & Creator
            </h3>
            <p className="text-xs text-mutedIndigo font-sans mt-1">
              Academic focus, athletic consistency, and outdoor companionship behind the engineering discipline.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-plum/40 px-4 py-1.5 font-mono text-xs text-champagne">
            <Camera className="h-3.5 w-3.5 text-antiqueGold" />
            <span>3 Moments</span>
          </div>
        </div>

        {/* Gallery Grid: Single row of 3 on desktop (md:grid-cols-3), stacked one per row on mobile (grid-cols-1) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {photosData.map((photo, idx) => (
            <div
              key={photo.id}
              tabIndex={0}
              role="button"
              aria-label={`View photo ${photo.alt}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedPhotoIndex(idx);
                  setLightboxOpen(true);
                }
              }}
              onClick={() => {
                setSelectedPhotoIndex(idx);
                setLightboxOpen(true);
              }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-plum/40 shadow-indigo-card cursor-pointer transition-all duration-300 hover:border-antiqueGold/60 hover:shadow-gold-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-antiqueGold flex flex-col justify-between"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-midnight">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />

                {/* Subtle vignette and bottom dark gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Enlarge Icon Badge */}
                <div className="absolute top-3 right-3 rounded-full bg-midnight/70 backdrop-blur-md p-2 border border-white/10 text-champagne group-hover:text-warmWhite group-hover:border-antiqueGold transition-colors">
                  <Maximize2 className="h-3.5 w-3.5 text-antiqueGold" />
                </div>
              </div>

              {/* Caption & Metadata Footer with Custom Category Name (formal, gym, companionship) */}
              <div className="p-4 bg-plum/70 border-t border-white/10 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-antiqueGold font-bold uppercase tracking-wider">
                    0{idx + 1} // {photo.tag || 'FEATURED'}
                  </span>
                  <span className="text-mutedIndigo">CLICK TO ENLARGE</span>
                </div>
                <p className="text-xs text-warmWhite/90 font-sans line-clamp-2 leading-snug">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Verified Education Credentials Section */}
      <section className="mb-20">
        <SectionHeader
          badge="Verified Credentials"
          title="Education"
          subtitle="Four-year B.Tech CSE degree from SMSMPITR, Akluj, with confirmed affiliation to Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere."
        />

        <div className="space-y-6">
          {/* B.Tech Degree Card */}
          <div className="rounded-2xl border border-antiqueGold/40 bg-gradient-to-r from-plum via-midnight to-inkTeal p-6 sm:p-8 md:p-10 shadow-indigo-card">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-antiqueGold/50 bg-antiqueGold/10 text-antiqueGold flex-shrink-0">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-warmWhite">
                    {profileData.education.degree}
                  </h4>
                  <p className="font-semibold text-sm text-antiqueGold mt-1">
                    {profileData.education.institution} ({profileData.education.institutionShort})
                  </p>
                  <p className="text-xs text-auroraTeal font-mono mt-0.5 font-medium">
                    ✓ {profileData.education.affiliation}
                  </p>
                  <p className="text-xs text-mutedIndigo mt-0.5">
                    {profileData.education.location}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-1 font-mono">
                <Badge variant="gold">{profileData.education.period}</Badge>
                <span className="text-sm font-bold text-champagne mt-1">
                  CGPA: {profileData.education.cgpa}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="text-xs font-mono uppercase tracking-wider text-mutedIndigo mb-2.5">
                Core Undergraduate Modules Completed
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  'Data Structures & Algorithms',
                  'Database Management Systems (DBMS)',
                  'Object-Oriented Programming (OOP)',
                  'Operating Systems',
                  'Computer Networks',
                  'Software Engineering & QA Testing',
                  'Python Programming',
                  'Machine Learning Foundations',
                ].map((course) => (
                  <span
                    key={course}
                    className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-champagne text-[11px] font-mono"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary & Higher Secondary (HSC & SSC) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* HSC */}
            <div className="rounded-xl border border-white/10 bg-plum/50 p-6">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="champagne">{profileData.education.hsc.year}</Badge>
                <span className="font-mono text-base font-bold text-champagne">
                  {profileData.education.hsc.percentage}
                </span>
              </div>
              <h5 className="font-display text-sm font-bold text-warmWhite">
                {profileData.education.hsc.label}
              </h5>
              <p className="text-xs text-mutedIndigo mt-1">
                {profileData.education.hsc.institution}, {profileData.education.hsc.location}
              </p>
            </div>

            {/* SSC */}
            <div className="rounded-xl border border-white/10 bg-plum/50 p-6">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="champagne">{profileData.education.ssc.year}</Badge>
                <span className="font-mono text-base font-bold text-champagne">
                  {profileData.education.ssc.percentage}
                </span>
              </div>
              <h5 className="font-display text-sm font-bold text-warmWhite">
                {profileData.education.ssc.label}
              </h5>
              <p className="text-xs text-mutedIndigo mt-1">
                {profileData.education.ssc.institution}, {profileData.education.ssc.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox for Gallery */}
      <Lightbox
        photos={photosData}
        currentIndex={selectedPhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setSelectedPhotoIndex(newIdx)}
      />
    </div>
  );
};
