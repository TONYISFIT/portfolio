import React from 'react';
import { profileData } from '../data/profile';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { education } = profileData;

  const coursework = [
    'Data Structures & Algorithms',
    'Database Management Systems (DBMS)',
    'Object-Oriented Programming (OOP)',
    'Operating Systems',
    'Software Engineering',
    'Computer Networks',
    'Data Analytics',
    'Theory of Computation',
    'Web Technologies',
  ];

  return (
    <section id="education" className="py-24 bg-darkBg border-t border-darkBorder relative overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 rounded-full bg-crimson/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-crimson font-bold block mb-2">
            05 / EDUCATION
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-cream">
            My Academic Journey.
          </h2>
          <p className="mt-3 text-sm text-mutedGray max-w-2xl font-sans">
            Formal foundation in Computer Science and Engineering, core data structures, algorithms, relational databases, and applied computing.
          </p>
        </div>

        {/* Education Timeline / Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* B.Tech Major Card (Spans 8 columns) */}
          <div className="lg:col-span-8 rounded-2xl border border-darkBorder bg-darkCard p-8 sm:p-10 transition-all duration-300 hover:border-crimson hover:shadow-crimson-subtle relative group">
            
            {/* Top row */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-darkBorder bg-darkSurface text-crimson">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-crimson uppercase tracking-wider font-semibold">
                    UNDERGRADUATE DEGREE
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-cream">
                    {education.degree}
                  </h3>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="flex flex-col items-end">
                <span className="font-mono text-[11px] uppercase tracking-wider text-mutedGray">
                  Cumulative GPA
                </span>
                <span className="font-display text-2xl font-black text-crimson">
                  {education.cgpa}
                </span>
              </div>
            </div>

            {/* College & University Details */}
            <div className="space-y-3 mb-8">
              <p className="text-base font-medium text-cream/90 leading-snug">
                {education.institution}
              </p>
              
              {/* Confirmed DBATU Affiliation */}
              <div className="inline-flex items-center gap-2 rounded-md border border-crimson/30 bg-crimson/10 px-3 py-1.5 text-xs text-cream/90">
                <CheckCircle2 className="h-3.5 w-3.5 text-crimson shrink-0" />
                <span className="font-mono text-[11px]">
                  {education.affiliation}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-mutedGray font-mono">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-crimson" />
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-crimson" />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            {/* Coursework Modules */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="h-4 w-4 text-crimson" />
                <span className="font-mono text-xs uppercase tracking-wider text-mutedGray font-semibold">
                  Core Computer Science Coursework
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-lg border border-darkBorder bg-darkSurface px-3 py-1 font-mono text-xs text-cream/80 transition-colors group-hover:border-crimson/30"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary & High School Column (Spans 4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* HSC Card */}
            <div className="flex-1 rounded-2xl border border-darkBorder bg-darkCard p-6 sm:p-7 transition-all duration-300 hover:border-crimson hover:shadow-crimson-subtle flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-crimson font-bold">
                    HIGHER SECONDARY (12TH)
                  </span>
                  <span className="font-display text-lg font-black text-cream">
                    {education.hsc.percentage}
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-cream mb-2">
                  {education.hsc.label}
                </h4>
                <p className="text-xs text-mutedGray mb-3">
                  {education.hsc.institution}, {education.hsc.location}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-darkBorder text-xs text-mutedGray font-mono">
                <span>Completed {education.hsc.year}</span>
                <span className="text-crimson">Science Stream</span>
              </div>
            </div>

            {/* SSC Card */}
            <div className="flex-1 rounded-2xl border border-darkBorder bg-darkCard p-6 sm:p-7 transition-all duration-300 hover:border-crimson hover:shadow-crimson-subtle flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-crimson font-bold">
                    SECONDARY SCHOOL (10TH)
                  </span>
                  <span className="font-display text-lg font-black text-cream">
                    {education.ssc.percentage}
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-cream mb-2">
                  {education.ssc.label}
                </h4>
                <p className="text-xs text-mutedGray mb-3">
                  {education.ssc.institution}, {education.ssc.location}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-darkBorder text-xs text-mutedGray font-mono">
                <span>Completed {education.ssc.year}</span>
                <span className="text-crimson">State Board</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
