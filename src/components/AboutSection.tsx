import React, { useState } from 'react';
import { profileData } from '../data/profile';
import {
  GraduationCap,
  MapPin,
  Sparkles,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Code2,
  CheckCircle2,
} from 'lucide-react';
import { cn } from '../lib/utils';

export const AboutSection: React.FC = () => {
  const [isTeleprompterOpen, setIsTeleprompterOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

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

  return (
    <section id="about" className="py-24 bg-darkSurface border-t border-darkBorder relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="pointer-events-none absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-crimson/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-crimson font-bold block mb-2">
              01 / ABOUT ME
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-cream">
              Beyond the Code.
            </h2>
          </div>

          {/* Teleprompter Toggle for Interview Read Mode */}
          <button
            onClick={() => setIsTeleprompterOpen(!isTeleprompterOpen)}
            className="inline-flex items-center gap-2 rounded-lg border border-darkBorder bg-darkCard px-4 py-2 font-mono text-xs text-mutedGray hover:text-cream hover:border-crimson transition-all"
          >
            <BookOpen className="h-4 w-4 text-crimson" />
            <span>{isTeleprompterOpen ? 'Show Standard Bio' : 'Interview Teleprompter View'}</span>
          </button>
        </div>

        {/* Teleprompter View Mode */}
        {isTeleprompterOpen ? (
          <div className="mb-12 rounded-2xl border border-crimson/40 bg-darkCard p-8 sm:p-14 text-center animate-fade-in shadow-crimson-subtle">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex items-center justify-between font-mono text-xs text-crimson">
                <span>{introBlocks[activeStep].tag}</span>
                <span>STEP {activeStep + 1} / {introBlocks.length}</span>
              </div>

              <h3 className="font-display text-sm uppercase tracking-widest text-mutedGray">
                {introBlocks[activeStep].label}
              </h3>

              <p className="font-sans text-xl sm:text-2xl md:text-3xl text-cream font-light leading-relaxed">
                "{introBlocks[activeStep].text}"
              </p>

              {/* Step Navigation Controls */}
              <div className="pt-8 flex items-center justify-center gap-4">
                <button
                  onClick={() => setActiveStep((prev) => (prev - 1 + introBlocks.length) % introBlocks.length)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-darkBorder bg-darkBg text-cream hover:border-crimson"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex items-center gap-1.5">
                  {introBlocks.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={cn(
                        'h-1.5 rounded-full transition-all',
                        i === activeStep ? 'w-6 bg-crimson' : 'w-2 bg-white/20'
                      )}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % introBlocks.length)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-darkBorder bg-darkBg text-cream hover:border-crimson"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Two-Column Editorial Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT: Editorial Photograph */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-darkCard shadow-editorial-card group">
                <img
                  src="/photos/about-motion.jpg"
                  alt="Vishwaraj Algude - Editorial Movement Portrait"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent opacity-80" />
                
                {/* Frame Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between border-t border-white/10 pt-3 font-mono text-xs">
                  <span className="text-crimson font-bold">AKLUJ, MAHARASHTRA</span>
                  <span className="text-mutedGray">02 // PROFILE</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Professional Introduction & Credentials */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="prose prose-invert max-w-none text-mutedGray font-sans text-sm sm:text-base leading-relaxed space-y-4">
                <p className="text-cream text-base sm:text-lg font-medium">
                  "I am a Computer Science Engineering graduate passionate about technology, programming, and building practical digital solutions. I enjoy exploring software development, working with data, solving technical problems, and continuously improving my skills."
                </p>

                <p>
                  Graduated with a <strong className="text-cream font-semibold">B.Tech in Computer Science and Engineering</strong> from <strong className="text-cream font-semibold">SMSMPITR, Akluj</strong>, affiliated to <strong className="text-crimson-bright font-semibold">Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere</strong> with a CGPA of <strong className="text-cream font-semibold">7.91 / 10</strong>.
                </p>

                <p>
                  My engineering journey combines core computer science fundamentals—algorithms, database design, and object-oriented patterns—with practical implementations across Python automation, machine learning classification, and responsive web applications.
                </p>
              </div>

              {/* Information Block */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl border border-darkBorder bg-darkCard font-mono text-xs">
                <div>
                  <span className="text-crimson block font-bold text-xs uppercase mb-1">DEGREE</span>
                  <span className="text-cream font-medium">B.Tech in CSE</span>
                </div>
                <div>
                  <span className="text-crimson block font-bold text-xs uppercase mb-1">EXPERIENCE</span>
                  <span className="text-cream font-medium">Fresher / Junior</span>
                </div>
                <div>
                  <span className="text-crimson block font-bold text-xs uppercase mb-1">LOCATION</span>
                  <span className="text-cream font-medium">Maharashtra, India</span>
                </div>
                <div>
                  <span className="text-crimson block font-bold text-xs uppercase mb-1">CAREER STATUS</span>
                  <span className="text-crimson-bright font-medium">Open to Offers</span>
                </div>
              </div>

              {/* Academic Highlights Line */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-mutedGray pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-crimson" />
                  <span>B.Tech CSE: 7.91 CGPA</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-crimson" />
                  <span>HSC: 76.83% (2022)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-crimson" />
                  <span>SSC: 86.60% (2020)</span>
                </span>
              </div>

              {/* Signature-style Element */}
              <div className="pt-4 border-t border-darkBorder/60 flex items-center justify-between">
                <div>
                  <span className="font-display text-xl font-bold tracking-tight text-cream">
                    Vishwaraj Algude
                  </span>
                  <span className="block font-mono text-xs text-mutedGray">
                    Software Developer & Data Analyst (Fresher)
                  </span>
                </div>
                <div className="font-mono text-xs text-crimson tracking-widest">
                  // VERIFIED PROFILE
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
