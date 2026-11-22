import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';
import { profileData } from '../data/profile';
import { initialResumesData } from '../data/resumes';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Download,
  Eye,
  FileText,
  Sparkles,
} from 'lucide-react';
import { cn } from '../lib/utils';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    recruiterName: '',
    company: '',
    email: '',
    jobPosition: 'Data Analyst',
    message: '',
    websiteHoneypot: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submittedStatus, setSubmittedStatus] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Find recommended resume matching the current jobPosition field
  const recommendedResume = initialResumesData.find((r) =>
    r.category.toLowerCase().includes(formData.jobPosition.toLowerCase()) ||
    formData.jobPosition.toLowerCase().includes(r.category.toLowerCase()) ||
    r.mappedRole.toLowerCase().includes(formData.jobPosition.toLowerCase())
  ) || initialResumesData.find((r) => r.isPreferred);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (formData.websiteHoneypot.trim() !== '') {
      return;
    }

    if (!formData.recruiterName.trim() || !formData.company.trim() || !formData.email.trim() || !formData.message.trim()) {
      setValidationError('Please complete all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setValidationError('Please provide a valid email address.');
      return;
    }

    const subject = encodeURIComponent(
      `[Opportunity Enquiry] ${formData.jobPosition ? formData.jobPosition + ' at ' : ''}${formData.company}`
    );
    const body = encodeURIComponent(
      `Hello Vishwaraj,\n\n` +
      `My name is ${formData.recruiterName} from ${formData.company}.\n` +
      `Position: ${formData.jobPosition || 'Fresher / Junior Role'}\n` +
      `Contact Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `-- Sent via Vishwaraj Algude's Portfolio Recruiter Enquiry Form`
    );

    const mailtoUrl = `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`;
    setSubmittedStatus(true);
    window.location.href = mailtoUrl;
  };

  return (
    <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <SectionHeader
        badge="Recruiter & Team Outreach"
        title="Get in Touch with Vishwaraj"
        subtitle="Open to entry-level engineering and analytics opportunities. Contact directly via verified phone, email, LinkedIn, or send an enquiry below."
      />

      {/* ADDENDUM v2.1 Requirement: Closing line quote */}
      <div className="mb-12 rounded-2xl border border-antiqueGold/35 bg-gradient-to-r from-plum/80 via-midnight/80 to-inkTeal/80 p-5 sm:p-6 backdrop-blur-md flex items-center justify-between gap-4 shadow-indigo-card">
        <div className="flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-antiqueGold flex-shrink-0" />
          <p className="font-accent italic text-lg sm:text-xl text-champagne">
            "{profileData.introduction.closing}"
          </p>
        </div>
        <span className="font-mono text-xs text-mutedIndigo flex-shrink-0 hidden sm:inline">
          — Vishwaraj Algude
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Verified Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl border border-antiqueGold/35 bg-gradient-to-b from-plum via-midnight to-inkTeal p-6 sm:p-8 shadow-indigo-card">
            <h3 className="font-display text-xl font-bold text-warmWhite mb-6">
              Verified Direct Channels
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-antiqueGold/40 bg-antiqueGold/10 text-antiqueGold flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-mutedIndigo">
                      Personal & Professional Email
                    </span>
                    <a
                      href={`mailto:${profileData.contact.email}`}
                      className="block font-sans text-base font-bold text-warmWhite hover:text-antiqueGold transition-colors"
                    >
                      {profileData.contact.email}
                    </a>
                    <span className="text-[11px] text-auroraTeal font-mono">
                      Click to launch default mail app
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(profileData.contact.email, 'email')}
                  title="Copy email to clipboard"
                  className="rounded-lg border border-white/10 p-2 text-mutedIndigo hover:text-antiqueGold hover:border-antiqueGold transition-colors"
                >
                  {copiedField === 'email' ? (
                    <Check className="h-4 w-4 text-auroraTeal" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-antiqueGold/40 bg-antiqueGold/10 text-antiqueGold flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-mutedIndigo">
                      Direct Mobile (Public Display)
                    </span>
                    <a
                      href={`tel:${profileData.contact.phone.replace(/\s+/g, '')}`}
                      className="block font-sans text-base font-bold text-warmWhite hover:text-antiqueGold transition-colors"
                    >
                      {profileData.contact.phoneDisplay}
                    </a>
                    <span className="text-[11px] text-auroraTeal font-mono">
                      tel:+917770052955
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(profileData.contact.phone, 'phone')}
                  title="Copy phone to clipboard"
                  className="rounded-lg border border-white/10 p-2 text-mutedIndigo hover:text-antiqueGold hover:border-antiqueGold transition-colors"
                >
                  {copiedField === 'phone' ? (
                    <Check className="h-4 w-4 text-auroraTeal" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-antiqueGold flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-mutedIndigo">
                    Current Location
                  </span>
                  <p className="font-sans text-base font-bold text-warmWhite">
                    {profileData.contact.location}
                  </p>
                  <p className="text-[11px] text-mutedIndigo font-mono">
                    Open to on-site, hybrid, or remote opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-antiqueGold/40 bg-antiqueGold/10 py-2.5 font-mono text-xs font-semibold text-champagne hover:bg-antiqueGold hover:text-midnight transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
                <ExternalLink className="h-3 w-3" />
              </a>

              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-midnight py-2.5 font-mono text-xs font-semibold text-warmWhite hover:border-auroraTeal hover:text-auroraTeal transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Availability Box */}
          <div className="rounded-xl border border-white/10 bg-plum/40 p-5 flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-auroraTeal animate-pulse flex-shrink-0" />
            <div className="text-xs">
              <p className="font-display font-bold text-warmWhite">Status: {profileData.availabilityStatus}</p>
              <p className="text-mutedIndigo mt-0.5 font-sans">
                Ready for technical interviews and engineering problem-solving rounds.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Recruiter Enquiry Form + Tied Resume Selector */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-antiqueGold/25 bg-gradient-to-b from-plum via-midnight to-inkTeal p-6 sm:p-8 md:p-10 shadow-indigo-card">
            <div className="flex items-center justify-between gap-2 mb-2">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-warmWhite">
                Recruiter & Hiring Enquiry
              </h3>
              <Badge variant="gold">Direct Email Delivery</Badge>
            </div>

            {/* Architecture notice */}
            <div className="mb-6 rounded-lg border border-white/10 bg-midnight/60 p-3.5 text-xs text-mutedIndigo flex items-start gap-2.5">
              <ShieldCheck className="h-4 w-4 text-antiqueGold flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed font-sans">
                Submitting validates your inputs and immediately composes a pre-formatted email to{' '}
                <span className="text-antiqueGold font-mono">vishualgude@gmail.com</span> with zero fake backend simulation.
              </p>
            </div>

            {/* Dynamic Tied Resume Download Box */}
            {recommendedResume && (
              <div className="mb-6 rounded-xl border border-antiqueGold/40 bg-plum/60 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-antiqueGold flex-shrink-0" />
                  <div>
                    <p className="font-mono text-[10px] uppercase text-antiqueGold tracking-wider">
                      Recommended Resume For Position:
                    </p>
                    <p className="font-sans text-xs font-bold text-warmWhite">
                      {recommendedResume.label}
                    </p>
                  </div>
                </div>

                {recommendedResume.status === 'Available' && recommendedResume.filePath ? (
                  <div className="flex items-center gap-2">
                    <a
                      href={recommendedResume.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded border border-white/20 px-2.5 py-1 font-mono text-[11px] text-mutedIndigo hover:text-champagne transition-colors"
                    >
                      <Eye className="h-3 w-3" />
                      <span>Preview</span>
                    </a>
                    <a
                      href={recommendedResume.filePath}
                      download={recommendedResume.fileName || `${recommendedResume.slug}.pdf`}
                      className="inline-flex items-center gap-1 rounded bg-antiqueGold px-3 py-1 font-mono text-[11px] font-bold text-midnight hover:bg-champagne transition-colors shadow-gold-glow"
                    >
                      <Download className="h-3 w-3" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                ) : (
                  <span className="font-mono text-[10px] text-mutedIndigo">
                    Awaiting Upload
                  </span>
                )}
              </div>
            )}

            {validationError && (
              <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {submittedStatus && (
              <div className="mb-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-emerald-300 flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-emerald-200">
                    Your email client has been launched with the enquiry prefilled!
                  </p>
                  <p className="mt-1 text-emerald-300/80">
                    If not opened automatically, please email Vishwaraj directly at{' '}
                    <a href={`mailto:${profileData.contact.email}`} className="text-white underline font-mono">
                      {profileData.contact.email}
                    </a>
                    .
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="website_url"
                  value={formData.websiteHoneypot}
                  onChange={(e) => setFormData({ ...formData, websiteHoneypot: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-mutedIndigo mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.recruiterName}
                    onChange={(e) => setFormData({ ...formData, recruiterName: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-midnight px-3.5 py-2.5 text-xs sm:text-sm text-warmWhite placeholder:text-mutedIndigo/50 focus:border-antiqueGold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-mutedIndigo mb-1.5">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. TechCorp Analytics"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-midnight px-3.5 py-2.5 text-xs sm:text-sm text-warmWhite placeholder:text-mutedIndigo/50 focus:border-antiqueGold focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-mutedIndigo mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. s.jenkins@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-midnight px-3.5 py-2.5 text-xs sm:text-sm text-warmWhite placeholder:text-mutedIndigo/50 focus:border-antiqueGold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-mutedIndigo mb-1.5">
                    Target Job Role / Opportunity
                  </label>
                  <select
                    value={formData.jobPosition}
                    onChange={(e) => setFormData({ ...formData, jobPosition: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-midnight px-3.5 py-2.5 text-xs sm:text-sm text-warmWhite focus:border-antiqueGold focus:outline-none font-mono"
                  >
                    <option value="Data Analyst">Data Analyst</option>
                    <option value="Business Analyst">Business Analyst</option>
                    <option value="Business Intelligence">Business Intelligence</option>
                    <option value="Data Scientist">Associate Data Scientist</option>
                    <option value="Associate Data Engineer">Associate Data Engineer / SQL</option>
                    <option value="Python Developer">Python Developer</option>
                    <option value="Software Developer">Software Developer</option>
                    <option value="QA Automation">QA Automation Engineer</option>
                    <option value="General Fresher">General Engineering Fresher</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-mutedIndigo mb-1.5">
                  Message / Opportunity Details *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share details about the role, team, location, or interview scheduling..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-midnight px-3.5 py-2.5 text-xs sm:text-sm text-warmWhite placeholder:text-mutedIndigo/50 focus:border-antiqueGold focus:outline-none font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emberCoral py-3.5 font-mono text-xs sm:text-sm font-bold text-midnight hover:bg-emberCoral-hover transition-all shadow-coral-glow"
              >
                <Send className="h-4 w-4" />
                <span>Compose & Send Enquiry to Vishwaraj</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
