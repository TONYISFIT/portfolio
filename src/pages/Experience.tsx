import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';
import { experienceData } from '../data/experience';
import { ExperienceItem } from '../types';
import {
  CheckCircle2,
  Calendar,
  Building,
  MapPin,
  Lightbulb,
  ShieldAlert,
  Code2,
} from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <SectionHeader
        badge="Verified Experience"
        title="Technical Internships & Industry Exposure"
        subtitle="Chronicle of structured engineering internships at Hi-Tech Computer Solutions. Explicitly documented as internships, reflecting genuine technical tasks and code delivered without misrepresenting them as senior full-time employment."
      />

      {/* Honesty & Transparency Notice */}
      <div className="mb-12 rounded-xl border border-antiqueGold/30 bg-antiqueGold/5 p-4 sm:p-5 flex items-start gap-3">
        <ShieldAlert className="h-5 w-5 text-antiqueGold flex-shrink-0 mt-0.5" />
        <div className="text-xs text-warmWhite/90 leading-relaxed font-sans">
          <p className="font-semibold font-mono text-champagne text-xs uppercase mb-1">
            Professional Transparency Disclaimer
          </p>
          <p>
            Vishwaraj Algude is an engineering graduate (fresher, B.Tech CSE Class of 2026). The roles below represent verified technical internship tenures conducted during undergraduate studies, focused on automated data extraction, quality validation, and supervised learning pipelines.
          </p>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-12">
        {experienceData.map((exp: ExperienceItem, idx) => (
          <article
            key={exp.id}
            className="rounded-2xl border border-antiqueGold/25 bg-gradient-to-b from-cardDark via-richBlack to-[#131317] p-6 sm:p-8 md:p-10 shadow-luxury-card transition-all hover:border-antiqueGold/45"
          >
            {/* Header: Role & Period */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <Badge variant="gold">Internship #{2 - idx}</Badge>
                  <span className="font-mono text-xs text-mutedGray">
                    {exp.type}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-warmWhite">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-3 mt-2 font-mono text-xs text-antiqueGold">
                  <span className="flex items-center gap-1.5">
                    <Building className="h-3.5 w-3.5" />
                    {exp.organization}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5 text-mutedGray">
                    <MapPin className="h-3.5 w-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-xs">
                <Calendar className="h-4 w-4 text-antiqueGold" />
                <Badge variant="champagne">{exp.period}</Badge>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="mb-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-mutedGray mb-2.5 font-semibold">
                Technologies & Tools Applied
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-champagne"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Responsibilities */}
            <div className="mb-8 rounded-xl border border-white/5 bg-richBlack/40 p-5">
              <h4 className="font-serif text-base font-bold text-warmWhite mb-4 flex items-center gap-2">
                <Code2 className="h-4 w-4 text-antiqueGold" />
                <span>Primary Technical Responsibilities</span>
              </h4>
              <ul className="space-y-3">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-warmWhite/85 leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-antiqueGold flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Learnings & Engineering Outcomes */}
            <div className="rounded-xl border border-white/5 bg-cardDark/30 p-5">
              <h4 className="font-serif text-base font-bold text-champagne mb-3 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-antiqueGold" />
                <span>Key Practical Learnings & Professional Growth</span>
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {exp.learnings.map((learning, lIdx) => (
                  <li
                    key={lIdx}
                    className="rounded-lg border border-white/5 bg-richBlack/50 p-4 text-xs text-mutedGray leading-relaxed font-sans"
                  >
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
