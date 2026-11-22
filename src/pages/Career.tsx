import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';
import { careerRolesData } from '../data/career';
import { initialResumesData } from '../data/resumes';
import { profileData } from '../data/profile';
import { CareerRoleItem } from '../types';
import {
  Briefcase,
  CheckCircle2,
  BookOpen,
  TrendingUp,
  HelpCircle,
  FileText,
  Github,
  Mail,
  ArrowRight,
  ExternalLink,
  Download,
  Eye,
  Target,
  Compass,
} from 'lucide-react';
import { cn } from '../lib/utils';

export const Career: React.FC = () => {
  const location = useLocation();

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

  // Map each role to its recommended resume item
  const getResumeForRole = (roleId: string) => {
    const mapping: Record<string, string> = {
      'role-data-analyst': 'resume-data-analyst',
      'role-business-analyst': 'resume-business-analyst',
      'role-bi-analyst': 'resume-business-intelligence',
      'role-associate-data-scientist': 'resume-data-scientist',
      'role-associate-data-engineer': 'resume-data-engineer',
      'role-python-developer': 'resume-python-developer',
      'role-software-developer': 'resume-software-developer',
      'role-qa-automation-engineer': 'resume-qa-automation',
    };
    const targetResumeId = mapping[roleId];
    return initialResumesData.find((r) => r.id === targetResumeId);
  };

  return (
    <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <SectionHeader
        badge="Strategic Alignment"
        title="Roles I Can Contribute To (Entry-Level Opportunities)"
        subtitle="Transparent evaluation of how my computer science foundations, internship projects, and coursework map to 8 entry-level engineering and analytics roles. Explicitly distinguishes demonstrated skills from developing competencies, without fabricated match percentages."
      />

      {/* ADDENDUM v2.1 Requirement: Short-term and Long-term Goals in Header */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Short-Term Goal */}
        <div className="rounded-2xl border border-antiqueGold/35 bg-gradient-to-br from-plum via-midnight to-inkTeal p-6 shadow-indigo-card">
          <div className="flex items-center gap-2 font-mono text-xs text-antiqueGold uppercase tracking-wider mb-2 font-semibold">
            <Target className="h-4 w-4" />
            <span>Short-Term Professional Goal</span>
          </div>
          <p className="font-sans text-sm text-warmWhite leading-relaxed">
            "{profileData.introduction.shortTermGoal}"
          </p>
        </div>

        {/* Long-Term Goal */}
        <div className="rounded-2xl border border-auroraTeal/35 bg-gradient-to-br from-inkTeal via-midnight to-plum p-6 shadow-indigo-card">
          <div className="flex items-center gap-2 font-mono text-xs text-auroraTeal uppercase tracking-wider mb-2 font-semibold">
            <Compass className="h-4 w-4" />
            <span>Long-Term Professional Vision</span>
          </div>
          <p className="font-sans text-sm text-warmWhite leading-relaxed">
            "{profileData.introduction.longTermGoal}"
          </p>
        </div>
      </div>

      {/* Role Navigation Quick Strip */}
      <div className="mb-12 flex flex-wrap gap-2 border-b border-white/10 pb-4">
        {careerRolesData.map((role) => (
          <a
            key={role.id}
            href={`#${role.id}`}
            className="rounded-lg border border-white/10 bg-plum/60 px-3.5 py-1.5 font-mono text-xs text-mutedIndigo hover:border-antiqueGold hover:text-champagne hover:bg-antiqueGold/10 transition-colors"
          >
            {role.title}
          </a>
        ))}
      </div>

      {/* Career Roles Detailed Cards */}
      <div className="space-y-16">
        {careerRolesData.map((role: CareerRoleItem) => {
          const matchedResume = getResumeForRole(role.id);
          const isResumeAvailable = matchedResume?.status === 'Available' && matchedResume.filePath;

          return (
            <article
              key={role.id}
              id={role.id}
              className="rounded-2xl border border-antiqueGold/25 bg-gradient-to-b from-plum via-midnight to-inkTeal p-6 sm:p-8 md:p-10 shadow-indigo-card scroll-mt-28 transition-all hover:border-antiqueGold/45"
            >
              {/* Role Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="h-4 w-4 text-antiqueGold" />
                    <Badge variant="gold">Target Entry-Level Track</Badge>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-warmWhite">
                    {role.title}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-champagne/90">
                    {role.subtitle}
                  </p>
                </div>

                {/* Recommended Resume Preview/Download Action Bar */}
                <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
                  {isResumeAvailable ? (
                    <>
                      <a
                        href={matchedResume.filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-antiqueGold/40 bg-plum px-3.5 py-2 font-mono text-xs font-semibold text-champagne hover:border-antiqueGold hover:text-warmWhite transition-colors"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>Preview Resume</span>
                      </a>
                      <a
                        href={matchedResume.filePath}
                        download={matchedResume.fileName || `${matchedResume.slug}.pdf`}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-antiqueGold px-3.5 py-2 font-mono text-xs font-bold text-midnight hover:bg-champagne transition-colors shadow-gold-glow"
                      >
                        <Download className="h-3.5 w-3.5" />
                        <span>Download PDF</span>
                      </a>
                    </>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-mutedIndigo">
                      <FileText className="h-3.5 w-3.5" />
                      <span>{matchedResume?.category}: Awaiting Upload</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description Narrative */}
              <p className="text-xs sm:text-sm text-warmWhite/85 leading-relaxed font-sans mb-8">
                {role.description}
              </p>

              {/* 4-Tier Honest Competency Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {/* Tier 1: Demonstrated */}
                <div className="rounded-xl border border-antiqueGold/30 bg-antiqueGold/5 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-antiqueGold mb-2.5">
                      <CheckCircle2 className="h-4 w-4 text-antiqueGold" />
                      <span>Demonstrated Skills</span>
                    </div>
                    <ul className="space-y-2 text-[11px] text-warmWhite/85 leading-relaxed font-sans">
                      {role.demonstratedSkills.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-antiqueGold">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="mt-3 font-mono text-[10px] text-antiqueGold/70">
                    Verified in active projects
                  </span>
                </div>

                {/* Tier 2: Learned in Coursework/Internships */}
                <div className="rounded-xl border border-champagne/20 bg-champagne/5 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-champagne mb-2.5">
                      <BookOpen className="h-4 w-4 text-champagne" />
                      <span>Learned & Applied</span>
                    </div>
                    <ul className="space-y-2 text-[11px] text-warmWhite/85 leading-relaxed font-sans">
                      {role.learnedSkills.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-champagne">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="mt-3 font-mono text-[10px] text-champagne/70">
                    Grounded in practice
                  </span>
                </div>

                {/* Tier 3: Currently Developing */}
                <div className="rounded-xl border border-auroraTeal/20 bg-auroraTeal/5 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-auroraTeal mb-2.5">
                      <TrendingUp className="h-4 w-4 text-auroraTeal" />
                      <span>Currently Developing</span>
                    </div>
                    <ul className="space-y-2 text-[11px] text-warmWhite/85 leading-relaxed font-sans">
                      {role.currentlyDevelopingSkills.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-auroraTeal">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="mt-3 font-mono text-[10px] text-auroraTeal/70">
                    Active self-study & builds
                  </span>
                </div>

                {/* Tier 4: Role-Specific Tooling */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-mutedIndigo mb-2.5">
                      <HelpCircle className="h-4 w-4 text-mutedIndigo" />
                      <span>Role-Specific Tooling</span>
                    </div>
                    <ul className="space-y-2 text-[11px] text-mutedIndigo leading-relaxed font-sans">
                      {role.dependsOnJobDescription.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-mutedIndigo">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="mt-3 font-mono text-[10px] text-mutedIndigo/70">
                    Adaptable upon onboarding
                  </span>
                </div>
              </div>

              {/* Evidence Row */}
              <div className="pt-6 border-t border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2 text-xs">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-mutedIndigo">Relevant Projects:</span>
                    {role.relevantProjects.map((pId) => (
                      <Link
                        key={pId}
                        to={`/projects#${pId}`}
                        className="rounded border border-antiqueGold/30 bg-antiqueGold/10 px-2.5 py-0.5 font-mono text-[11px] text-champagne hover:underline"
                      >
                        {pId}
                      </Link>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-mutedIndigo">
                    <span className="font-mono">Internship Alignment:</span>
                    <span className="text-warmWhite/90">{role.relevantInternship}</span>
                  </div>
                </div>

                {/* GitHub Evidence and Contact CTAs */}
                <div className="flex flex-wrap items-center gap-3">
                  {role.githubEvidenceUrls.map((repo, rIdx) => (
                    <a
                      key={rIdx}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-plum px-3 py-1.5 font-mono text-xs text-warmWhite hover:border-antiqueGold hover:text-champagne transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>{repo.label}</span>
                      <ExternalLink className="h-3 w-3 opacity-60" />
                    </a>
                  ))}

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-emberCoral px-4 py-1.5 font-mono text-xs font-bold text-midnight hover:bg-emberCoral-hover transition-colors shadow-coral-glow"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Enquire For This Role</span>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
