import React, { useState } from 'react';
import { certificationsData } from '../data/certifications';
import { Award, CheckCircle2, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { cn } from '../lib/utils';

export const CertificationsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'ALL CERTIFICATIONS' },
    { id: 'Databases & Querying', name: 'DATABASES & SQL' },
    { id: 'Programming & Data Science', name: 'PYTHON & DEV' },
    { id: 'Machine Learning', name: 'MACHINE LEARNING' },
    { id: 'Business Analytics & Industry Simulation', name: 'JOB SIMULATION' },
    { id: 'AI & Modern Analytics', name: 'GENERATIVE AI' },
  ];

  const filteredCerts = selectedCategory === 'all'
    ? certificationsData
    : certificationsData.filter((c) => c.category === selectedCategory || (selectedCategory === 'AI & Modern Analytics' && (c.category.includes('AI') || c.category.includes('Generative'))));

  return (
    <section id="certifications" className="py-24 bg-darkSurface border-t border-darkBorder relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-crimson/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-crimson font-bold block mb-2">
              06 / CERTIFICATIONS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-cream">
              Learning Never Stops.
            </h2>
            <p className="mt-3 text-sm text-mutedGray max-w-2xl font-sans">
              Verified certifications and training programs spanning relational databases, Python data structures, industry job simulations, and machine learning.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-darkBorder bg-darkCard px-4 py-1.5 font-mono text-xs text-cream/80">
            <Award className="h-4 w-4 text-crimson" />
            <span>6 Verified Credentials</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  'rounded-lg px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 border',
                  isActive
                    ? 'border-crimson bg-crimson text-white shadow-crimson-subtle'
                    : 'border-darkBorder bg-darkCard text-mutedGray hover:text-cream hover:border-crimson/40'
                )}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl border border-darkBorder bg-darkCard p-6 transition-all duration-300 hover:border-crimson hover:shadow-crimson-subtle flex flex-col justify-between group"
            >
              <div>
                {/* Header badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="rounded-md border border-crimson/30 bg-crimson/10 px-2.5 py-1 font-mono text-[10px] text-crimson uppercase tracking-wider font-semibold">
                    {cert.category}
                  </span>
                  <Award className="h-4 w-4 text-mutedGray group-hover:text-crimson transition-colors" />
                </div>

                {/* Title & Issuer */}
                <h3 className="font-display text-lg font-bold text-cream group-hover:text-white transition-colors mb-2">
                  {cert.title}
                </h3>
                <p className="font-mono text-xs text-crimson mb-5 font-medium">
                  {cert.issuer}
                </p>

                {/* Skills covered */}
                <div className="space-y-2 pt-4 border-t border-darkBorder">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-mutedGray block mb-2 font-semibold">
                    Core Competencies Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className="rounded border border-darkBorder bg-darkSurface px-2 py-0.5 font-mono text-[11px] text-cream/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-darkBorder flex items-center justify-between text-xs text-mutedGray font-mono">
                <span className="flex items-center gap-1.5 text-cream/60">
                  <CheckCircle2 className="h-3.5 w-3.5 text-crimson" />
                  Verified Credential
                </span>
                <span className="text-[11px] text-mutedGray">Self-Paced / Guided</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
