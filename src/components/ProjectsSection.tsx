import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { ProjectItem } from '../types';
import {
  Github,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  X,
  ExternalLink,
  Layers,
  Star,
  Maximize2,
  Info,
} from 'lucide-react';
import { cn } from '../lib/utils';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 bg-darkSurface border-t border-darkBorder relative overflow-hidden">
      {/* Ambient Crimson Glow */}
      <div className="pointer-events-none absolute top-1/4 right-0 h-96 w-96 rounded-full bg-crimson/5 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-crimson/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-crimson font-bold block mb-2">
              03 / SELECTED WORK
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-cream">
              Featured Projects.
            </h2>
            <p className="mt-3 text-sm text-mutedGray max-w-2xl font-sans leading-relaxed">
              Hands-on engineering implementations across full-stack web platforms, relational SQL analytics, machine learning classification, and automated testing frameworks.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-darkBorder bg-darkCard px-4 py-1.5 font-mono text-xs text-cream/80">
            <Sparkles className="h-4 w-4 text-crimson" />
            <span>6 Real Project Implementations</span>
          </div>
        </div>

        {/* PROJECTS LIST (Strict Order: FitVerse First & Most Prominent) */}
        <div className="space-y-16">
          {projectsData.map((project, idx) => {
            const isFitVerse = project.id === 'fitverse';
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.id}
                className={cn(
                  'group rounded-3xl border transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12 relative overflow-hidden',
                  isFitVerse
                    ? 'border-crimson/50 bg-gradient-to-b from-darkCard via-darkCard to-darkBg shadow-2xl ring-1 ring-crimson/20'
                    : 'border-darkBorder bg-darkCard/90 hover:border-crimson/40 shadow-editorial-card'
                )}
              >
                {/* FitVerse Special Corner Banner */}
                {isFitVerse && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-crimson px-5 py-1.5 rounded-bl-2xl font-mono text-xs uppercase font-bold tracking-widest text-white shadow-crimson-subtle flex items-center gap-1.5">
                      <Star className="h-3 w-3 fill-white text-white" />
                      <span>FLAGSHIP FULL-STACK PLATFORM</span>
                    </div>
                  </div>
                )}

                {/* Left/Right Text Content */}
                <div
                  className={cn(
                    'space-y-6 lg:col-span-6',
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  )}
                >
                  {/* Category & Status Pill */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-crimson font-bold uppercase tracking-wider">
                      0{idx + 1} // {project.category}
                    </span>
                    <span className="text-darkBorder">·</span>
                    <span
                      className={cn(
                        'font-mono text-xs px-2.5 py-0.5 rounded-full border uppercase tracking-wider',
                        project.status === 'Completed'
                          ? 'bg-white/5 border-white/10 text-cream/80'
                          : 'bg-crimson/10 border-crimson/30 text-crimson font-semibold'
                      )}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3
                    className={cn(
                      'font-display font-black text-cream group-hover:text-white transition-colors leading-tight',
                      isFitVerse ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-3xl'
                    )}
                  >
                    {project.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-mutedGray font-sans leading-relaxed">
                    {project.shortDesc || project.objective}
                  </p>

                  {/* FitVerse Architecture Highlight */}
                  {project.rolesOverview && (
                    <div className="rounded-xl border border-crimson/25 bg-crimson/5 p-4 text-xs font-mono text-cream/90 space-y-1">
                      <span className="font-bold text-crimson block uppercase tracking-wider text-xs">
                        Multi-Role System Architecture:
                      </span>
                      <p className="text-cream/80 text-xs leading-relaxed">
                        {project.rolesOverview}
                      </p>
                    </div>
                  )}

                  {/* Technology Tags */}
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-mutedGray block mb-2 font-semibold">
                      Tech Stack:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-darkBorder bg-darkSurface px-3 py-1 font-mono text-xs text-cream/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights Bullet Points */}
                  <div className="space-y-2 pt-1">
                    {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-mutedGray">
                        <CheckCircle2 className="h-4 w-4 text-crimson shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-darkBorder/60">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 rounded-xl bg-crimson px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson transition-all duration-200 shadow-crimson-subtle"
                    >
                      <span>EXPLORE PROJECT METHODS</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-darkBorder bg-darkSurface px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-cream hover:border-crimson hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson transition-all duration-200"
                      >
                        <Github className="h-4 w-4 text-crimson" />
                        <span>GITHUB REPO</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-mutedGray bg-white/5 border border-white/10 px-3.5 py-3 rounded-xl">
                        <Info className="h-3.5 w-3.5 text-crimson" />
                        <span>Active Development (Private Repo)</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Right/Left Screenshot or Clean Text-Only Architecture Card */}
                <div
                  className={cn(
                    'lg:col-span-6 relative',
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  )}
                >
                  <div
                    tabIndex={0}
                    role="button"
                    aria-label={`View methodology and details for ${project.name}`}
                    onClick={() => {
                      if (project.screenshot) setPreviewImage(project.screenshot);
                      else setSelectedProject(project);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        if (project.screenshot) setPreviewImage(project.screenshot);
                        else setSelectedProject(project);
                      }
                    }}
                    className="group/img relative aspect-[16/10] sm:aspect-video rounded-2xl overflow-hidden border border-white/10 bg-darkSurface shadow-2xl cursor-pointer transition-all duration-500 hover:border-crimson hover:shadow-crimson-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
                  >
                    {project.screenshot ? (
                      <>
                        <img
                          src={project.screenshot}
                          alt={`${project.name} Screenshot`}
                          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-darkBg/90 via-transparent to-transparent opacity-60 group-hover/img:opacity-30 transition-opacity" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-darkBg/80 backdrop-blur-md px-3.5 py-2 border border-white/10 font-mono text-xs text-cream">
                          <span className="text-crimson font-bold uppercase tracking-wider">
                            {project.category.split('&')[0]}
                          </span>
                          <span className="inline-flex items-center gap-1 text-mutedGray group-hover/img:text-cream transition-colors">
                            <Maximize2 className="h-3.5 w-3.5 text-crimson" />
                            <span>CLICK TO ENLARGE</span>
                          </span>
                        </div>
                      </>
                    ) : (
                      /* Clean Text-Only Card Style: Project Name, Tools Used, One-Line Outcome */
                      <div className="h-full w-full flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-darkSurface via-[#141414] to-darkBg text-left relative select-none">
                        {/* Background Subtle Tech Motif */}
                        <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                        {/* Top: Category Tag & Status */}
                        <div className="flex items-center justify-between gap-3 relative z-10">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-crimson/30 bg-crimson/10 px-3 py-1 font-mono text-xs font-bold text-crimson uppercase tracking-wider">
                            <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                            <span>{project.category.split('&')[0].trim()}</span>
                          </span>
                          <span className="font-mono text-xs text-mutedGray flex items-center gap-1">
                            <CheckCircle2 className="h-3.5 w-3.5 text-crimson" />
                            <span>{project.status}</span>
                          </span>
                        </div>

                        {/* Middle: Project Name & One-Line Outcome */}
                        <div className="my-auto py-2 relative z-10">
                          <h4 className="font-display text-lg sm:text-2xl font-bold text-cream tracking-tight group-hover/img:text-crimson transition-colors leading-snug">
                            {project.name.split('—')[0].trim()}
                          </h4>
                          <p className="mt-2 text-xs sm:text-sm text-cream/80 font-sans line-clamp-2 leading-relaxed">
                            {project.shortDesc || project.objective}
                          </p>
                        </div>

                        {/* Bottom: Tools Used & Action Cue */}
                        <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 relative z-10">
                          <div className="flex flex-wrap gap-1.5 max-w-[75%]">
                            {project.technologies.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className="rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-xs text-cream/90 font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 4 && (
                              <span className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-xs text-mutedGray">
                                +{project.technologies.length - 4}
                              </span>
                            )}
                          </div>
                          <span className="inline-flex items-center gap-1 font-mono text-xs text-crimson font-bold group-hover/img:translate-x-0.5 transition-transform">
                            <span>DETAILS</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* FULL PROJECT METHODOLOGY & ARCHITECTURE MODAL */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border border-darkBorder bg-darkCard p-6 sm:p-10 shadow-2xl text-cream"
          >
            {/* Modal Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-crimson to-transparent" />

            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-darkBorder pb-5 mb-6">
              <div>
                <span className="font-mono text-xs text-crimson uppercase tracking-wider font-bold">
                  {selectedProject.category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black text-cream mt-1">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close project modal"
                onClick={() => setSelectedProject(null)}
                className="rounded-full border border-darkBorder p-2 text-mutedGray hover:text-cream hover:border-crimson focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 text-sm font-sans">
              
              {/* Screenshot Preview if available */}
              {selectedProject.screenshot && (
                <div className="rounded-xl overflow-hidden border border-darkBorder bg-darkSurface aspect-video">
                  <img
                    src={selectedProject.screenshot}
                    alt={selectedProject.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}

              {/* Problem & Objective */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-darkBorder bg-darkSurface p-4">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-crimson font-bold mb-2">
                    THE PROBLEM
                  </h4>
                  <p className="text-xs text-mutedGray leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>
                <div className="rounded-xl border border-darkBorder bg-darkSurface p-4">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-crimson font-bold mb-2">
                    ENGINEERING OBJECTIVE
                  </h4>
                  <p className="text-xs text-mutedGray leading-relaxed">
                    {selectedProject.objective}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-cream font-bold mb-2">
                  TECHNOLOGIES & TOOLS USED
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-darkBorder bg-darkSurface px-3 py-1 font-mono text-xs text-cream/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Methodology & Steps */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-cream font-bold mb-3">
                  METHODOLOGY & IMPLEMENTATION STEPS
                </h4>
                <div className="space-y-2">
                  {selectedProject.methodology.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-3 rounded-lg border border-darkBorder/60 bg-darkSurface/50 p-3 text-xs text-mutedGray">
                      <span className="font-mono text-crimson font-bold text-xs">
                        0{mIdx + 1}
                      </span>
                      <span className="text-cream/80">{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What was learned */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-cream font-bold mb-2">
                  TECHNICAL TAKEAWAYS
                </h4>
                <div className="space-y-2">
                  {selectedProject.whatWasLearned.map((w, wIdx) => (
                    <div key={wIdx} className="flex items-start gap-2.5 text-xs text-mutedGray">
                      <CheckCircle2 className="h-4 w-4 text-crimson shrink-0 mt-0.5" />
                      <span className="text-cream/80">{w}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-darkBorder flex items-center justify-between">
              {selectedProject.githubUrl ? (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-crimson px-4 py-2 font-mono text-xs font-bold text-white hover:bg-crimson-bright transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>VIEW REPO ON GITHUB</span>
                </a>
              ) : (
                <span className="font-mono text-xs text-mutedGray">
                  Repository in active development
                </span>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-xl border border-darkBorder px-4 py-2 font-mono text-xs text-mutedGray hover:text-cream"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STANDALONE IMAGE LIGHTBOX MODAL */}
      {previewImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setPreviewImage(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full rounded-2xl overflow-hidden border border-crimson/50 shadow-2xl bg-darkBg"
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 z-20 rounded-full bg-darkBg/80 border border-white/20 p-2 text-white hover:bg-crimson transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={previewImage}
              alt="Dashboard Preview"
              className="w-full h-auto max-h-[85vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}

    </section>
  );
};
