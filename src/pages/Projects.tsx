import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';
import { projectsData } from '../data/projects';
import { ProjectItem } from '../types';
import {
  Github,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Workflow,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { cn } from '../lib/utils';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const location = useLocation();

  // Scroll to hash if present (e.g. /projects#churn-analytics)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location.hash]);

  const categories = [
    { id: 'all', name: 'All Projects (6)' },
    { id: 'featured', name: 'Featured Highlights' },
    { id: 'Machine Learning & Analytics', name: 'Machine Learning' },
    { id: 'Business Intelligence & SQL', name: 'Business Intelligence' },
    { id: 'Automation & Testing', name: 'QA & Automation' },
    { id: 'Software Development & Databases', name: 'Full-Stack Software' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'featured') return project.isFeatured;
    return project.category.includes(selectedFilter);
  });

  return (
    <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <SectionHeader
        badge="Applied Engineering"
        title="Engineering Projects & Practical Implementations"
        subtitle="End-to-end technical projects demonstrating problem formulation, data processing, statistical validation, automated testing, and software design. Strictly documented with real methodologies, avoiding fabricated metrics."
      />

      {/* Filter Tabs */}
      <div className="mb-12 flex flex-wrap gap-2 border-b border-white/10 pb-4">
        {categories.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedFilter(tab.id)}
            className={cn(
              'rounded-lg px-4 py-2 font-mono text-xs transition-colors',
              selectedFilter === tab.id
                ? 'bg-antiqueGold text-richBlack font-bold shadow-gold-glow'
                : 'bg-cardDark/60 text-mutedGray hover:text-champagne hover:bg-cardDark'
            )}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="space-y-16">
        {filteredProjects.map((project: ProjectItem) => (
          <article
            key={project.id}
            id={project.id}
            className={cn(
              'rounded-2xl border bg-gradient-to-b from-cardDark via-richBlack to-[#131317] p-6 sm:p-8 md:p-10 shadow-luxury-card scroll-mt-28 transition-all',
              project.isFeatured ? 'border-antiqueGold/45' : 'border-white/10'
            )}
          >
            {/* Top row: Category, Status, Featured Pill */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2.5">
                <Badge variant="gold">{project.category}</Badge>
                {project.isFeatured && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-antiqueGold/40 bg-antiqueGold/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-antiqueGold">
                    <Sparkles className="h-3 w-3" />
                    Featured Project
                  </span>
                )}
              </div>

              <span
                className={cn(
                  'inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-3 py-1 rounded-full border',
                  project.status === 'Completed'
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                    : 'border-amber-500/30 bg-amber-500/10 text-amber-300'
                )}
              >
                <span
                  className={cn(
                    'h-1.5 w-1.5 rounded-full',
                    project.status === 'Completed' ? 'bg-emerald-400' : 'bg-amber-300 animate-pulse'
                  )}
                />
                {project.status}
              </span>
            </div>

            {/* Project Title & GitHub Link */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-warmWhite">
                {project.name}
              </h3>

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-antiqueGold/40 bg-antiqueGold/10 px-4 py-2 font-mono text-xs font-medium text-champagne hover:bg-antiqueGold hover:text-richBlack transition-colors self-start md:self-auto"
                >
                  <Github className="h-4 w-4" />
                  <span>{project.githubLabel || 'View Repository'}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : (
                /* FitVerse specific status note */
                <div className="inline-flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-2 font-mono text-xs text-amber-300 self-start md:self-auto">
                  <AlertCircle className="h-4 w-4" />
                  <span>Active Development · Repo Private Until Release</span>
                </div>
              )}
            </div>

            {/* Problem & Objective Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 rounded-xl border border-white/5 bg-richBlack/50 p-5">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-antiqueGold mb-1.5 font-semibold">
                  Problem Statement
                </h4>
                <p className="text-xs sm:text-sm text-warmWhite/80 leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-antiqueGold mb-1.5 font-semibold">
                  Project Objective
                </h4>
                <p className="text-xs sm:text-sm text-warmWhite/80 leading-relaxed">
                  {project.objective}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="font-mono text-xs uppercase tracking-wider text-mutedGray mb-3 font-semibold">
                Technology Stack & Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-antiqueGold/25 bg-antiqueGold/5 px-2.5 py-1 font-mono text-xs text-champagne"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features & Methodology (Methods, not numbers!) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Features */}
              <div className="rounded-xl border border-white/10 bg-cardDark/40 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Workflow className="h-4 w-4 text-antiqueGold" />
                  <h4 className="font-serif text-base font-bold text-warmWhite">
                    Implemented Architecture & Key Features
                  </h4>
                </div>
                <ul className="space-y-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-warmWhite/85 leading-relaxed">
                      <CheckCircle2 className="h-3.5 w-3.5 text-antiqueGold flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Methodology */}
              <div className="rounded-xl border border-white/10 bg-cardDark/40 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Workflow className="h-4 w-4 text-champagne" />
                  <h4 className="font-serif text-base font-bold text-warmWhite">
                    Technical Methodology & Engineering Steps
                  </h4>
                </div>
                <ul className="space-y-2.5">
                  {project.methodology.map((meth, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-warmWhite/85 leading-relaxed">
                      <span className="font-mono text-[11px] text-antiqueGold font-bold">
                        0{idx + 1}.
                      </span>
                      <span>{meth}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* What Was Learned (Honest fresher growth insights) */}
            <div className="rounded-xl border border-white/10 bg-cardDark/25 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-4 w-4 text-antiqueGold" />
                <h4 className="font-serif text-sm font-bold text-warmWhite">
                  Key Learnings & Engineering Takeaways
                </h4>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.whatWasLearned.map((learn, idx) => (
                  <li
                    key={idx}
                    className="rounded-lg border border-white/5 bg-richBlack/40 p-3 text-xs text-mutedGray leading-relaxed"
                  >
                    {learn}
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
