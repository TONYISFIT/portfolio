import React, { useState } from 'react';
import { profileData } from '../data/profile';
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
  ExternalLink,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { contact } = profileData;
  const [copied, setCopied] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // anti-bot spam
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [submittedEmail, setSubmittedEmail] = useState<string>('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Please provide your full name (min 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errors.subject = 'Please enter a subject (min 3 characters).';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please write a message with at least 10 characters.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot (bots fill hidden fields)
    if (formData.honeypot) return;

    if (!validateForm()) return;

    // Production safety: Validation + Mailto (No paid backend, 100% reliable)
    const subjectEncoded = encodeURIComponent(`[Portfolio Connect] ${formData.subject.trim()} — from ${formData.name.trim()}`);
    const bodyEncoded = encodeURIComponent(
      `Hi Vishwaraj,\n\n${formData.message.trim()}\n\n---\nSender Details:\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}`
    );

    const mailtoUrl = `mailto:${contact.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setSubmittedEmail(formData.email);
    setStatus('success');

    // Trigger prefilled email client
    window.location.href = mailtoUrl;

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      honeypot: '',
    });
    setFormErrors({});
  };

  return (
    <section id="contact" className="py-24 bg-darkSurface border-t border-darkBorder relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-crimson/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-crimson font-bold block mb-2">
            07 / GET IN TOUCH
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-cream">
            Let's Build Something Together
          </h2>
          <p className="mt-3 text-sm text-mutedGray max-w-2xl font-sans leading-relaxed">
            Have an opportunity, project idea or collaboration in mind? Feel free to reach out. I'd love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: DIRECT CONTACT DETAILS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-darkBorder bg-darkCard p-6 sm:p-8 space-y-6 shadow-editorial-card">
              
              <div className="inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/10 px-3.5 py-1 text-xs font-mono text-crimson uppercase tracking-wider font-bold">
                <span className="h-2 w-2 rounded-full bg-crimson animate-pulse" />
                <span>{profileData.availabilityStatus}</span>
              </div>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl border border-darkBorder bg-darkSurface">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-darkBorder bg-darkCard text-crimson">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-[10px] uppercase text-mutedGray block">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-mono text-sm text-cream hover:text-crimson transition-colors truncate block font-medium"
                    >
                      {contact.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="shrink-0 p-2 text-mutedGray hover:text-cream transition-colors"
                  >
                    {copied ? (
                      <span className="font-mono text-[10px] text-crimson font-bold">COPIED</span>
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl border border-darkBorder bg-darkSurface">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-darkBorder bg-darkCard text-crimson">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-[10px] uppercase text-mutedGray block">
                      PHONE NUMBER
                    </span>
                    <a
                      href={`tel:${contact.phone}`}
                      className="font-mono text-sm text-cream hover:text-crimson transition-colors truncate block font-medium"
                    >
                      {contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl border border-darkBorder bg-darkSurface">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-darkBorder bg-darkCard text-crimson">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-[10px] uppercase text-mutedGray block">
                      LOCATION
                    </span>
                    <span className="font-mono text-sm text-cream font-medium">
                      {contact.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-darkBorder">
                <span className="font-mono text-[11px] uppercase tracking-wider text-mutedGray block mb-3 font-semibold">
                  Professional Profiles:
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-darkBorder bg-darkSurface px-4 py-2.5 font-mono text-xs text-cream hover:border-crimson hover:text-white transition-all duration-200"
                  >
                    <Github className="h-4 w-4 text-crimson" />
                    <span>GitHub Profile</span>
                    <ExternalLink className="h-3 w-3 text-mutedGray" />
                  </a>

                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-darkBorder bg-darkSurface px-4 py-2.5 font-mono text-xs text-cream hover:border-crimson hover:text-white transition-all duration-200"
                  >
                    <Linkedin className="h-4 w-4 text-crimson" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="h-3 w-3 text-mutedGray" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: FUNCTIONAL MESSAGE DELIVERY FORM */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-darkBorder bg-darkCard p-6 sm:p-10 shadow-editorial-card">
              
              <div className="mb-6">
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-cream">
                  Send a Direct Message
                </h3>
                <p className="mt-1 text-xs text-mutedGray font-sans">
                  Fill in your details below to launch your email client with a prefilled message directly addressed to Vishwaraj Algude.
                </p>
              </div>

              {/* SUCCESS CONFIRMATION BANNER */}
              {status === 'success' && (
                <div className="mb-6 rounded-2xl border border-crimson/50 bg-crimson/10 p-5 text-sm text-cream flex items-start gap-3.5 animate-fade-in">
                  <CheckCircle2 className="h-6 w-6 text-crimson shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display font-bold text-base text-cream">
                      Email Client Initiated!
                    </p>
                    <p className="text-xs text-cream/80 mt-1 leading-relaxed">
                      Your message has been composed for <span className="font-mono text-crimson font-bold">{contact.email}</span>. If your mail app did not open automatically, click the email link on the left or send directly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot Anti-Spam Field */}
                <input
                  type="text"
                  name="_gotcha"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-mutedGray mb-2 font-semibold">
                      Your Name <span className="text-crimson">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full rounded-xl border border-darkBorder bg-darkSurface px-4 py-3.5 font-sans text-sm text-cream placeholder-mutedGray/40 focus:border-crimson focus:outline-none transition-colors"
                    />
                    {formErrors.name && (
                      <p className="mt-1 font-mono text-[11px] text-red-400">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-mutedGray mb-2 font-semibold">
                      Your Email Address <span className="text-crimson">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex.morgan@company.com"
                      className="w-full rounded-xl border border-darkBorder bg-darkSurface px-4 py-3.5 font-sans text-sm text-cream placeholder-mutedGray/40 focus:border-crimson focus:outline-none transition-colors"
                    />
                    {formErrors.email && (
                      <p className="mt-1 font-mono text-[11px] text-red-400">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-mutedGray mb-2 font-semibold">
                    Subject <span className="text-crimson">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Entry-Level Developer Role / Technical Discussion"
                    className="w-full rounded-xl border border-darkBorder bg-darkSurface px-4 py-3.5 font-sans text-sm text-cream placeholder-mutedGray/40 focus:border-crimson focus:outline-none transition-colors"
                  />
                  {formErrors.subject && (
                    <p className="mt-1 font-mono text-[11px] text-red-400">{formErrors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-mutedGray mb-2 font-semibold">
                    Message <span className="text-crimson">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please write your opportunity details, inquiry or message..."
                    className="w-full rounded-xl border border-darkBorder bg-darkSurface px-4 py-3.5 font-sans text-sm text-cream placeholder-mutedGray/40 focus:border-crimson focus:outline-none transition-colors resize-none"
                  />
                  {formErrors.message && (
                    <p className="mt-1 font-mono text-[11px] text-red-400">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-crimson px-7 py-4 font-mono text-xs uppercase tracking-wider font-bold text-white transition-all duration-300 hover:bg-crimson-bright hover:shadow-crimson-glow"
                >
                  <Send className="h-4 w-4" />
                  <span>COMPOSE MESSAGE</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
