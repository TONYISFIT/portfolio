import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';
import { certificationsData } from '../data/certifications';
import { CertificationItem } from '../types';
import {
  Award,
  CheckCircle,
  Building2,
  PlusCircle,
} from 'lucide-react';

export const Certifications: React.FC = () => {
  const [certs, setCerts] = useState<CertificationItem[]>(certificationsData);
  const [isAddingOpen, setIsAddingOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newIssuer, setNewIssuer] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const handleAddPlaceholderCert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newIssuer.trim()) return;

    const newCert: CertificationItem = {
      id: `cert-custom-${Date.now()}`,
      title: newTitle.trim(),
      issuer: newIssuer.trim(),
      category: newCategory.trim() || 'General Certification',
      skillsCovered: ['Newly completed verified certification'],
    };

    setCerts((prev) => [...prev, newCert]);
    setNewTitle('');
    setNewIssuer('');
    setNewCategory('');
    setIsAddingOpen(false);
  };

  return (
    <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <SectionHeader
        badge="Verified Credentials"
        title="Professional & Academic Certifications"
        subtitle="Curated professional certifications completed through established university programs and industry organizations. Presented strictly by title and issuing institution without artificial verification links or unverified IDs."
      />

      {/* Verified Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {certs.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col justify-between rounded-xl border border-antiqueGold/25 bg-gradient-to-b from-cardDark via-richBlack to-[#131317] p-6 shadow-luxury-card transition-all hover:border-antiqueGold hover:shadow-gold-glow"
          >
            <div>
              {/* Top: Category Tag */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <Badge variant="gold">{cert.category}</Badge>
                <Award className="h-4 w-4 text-antiqueGold" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg font-bold text-warmWhite leading-snug">
                {cert.title}
              </h3>

              {/* Issuer */}
              <div className="mt-2.5 flex items-center gap-2 font-mono text-xs text-champagne">
                <Building2 className="h-3.5 w-3.5 text-antiqueGold flex-shrink-0" />
                <span>{cert.issuer}</span>
              </div>

              {/* Skills covered */}
              {cert.skillsCovered && cert.skillsCovered.length > 0 && (
                <div className="mt-5 pt-4 border-t border-white/10">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-mutedGray mb-2">
                    Core Focus Areas
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill, idx) => (
                      <span
                        key={idx}
                        className="rounded border border-white/5 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-mutedGray"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
              <CheckCircle className="h-3 w-3" />
              <span>Verified Coursework</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add Certification Placeholder Area */}
      <div className="rounded-2xl border border-dashed border-antiqueGold/40 bg-cardDark/40 p-8 text-center max-w-2xl mx-auto">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-antiqueGold/40 bg-antiqueGold/10 text-antiqueGold mb-4">
          <PlusCircle className="h-6 w-6" />
        </div>

        <h4 className="font-serif text-lg font-bold text-warmWhite">
          Owner Action: Add Future Certification
        </h4>

        <p className="mt-2 text-xs text-mutedGray leading-relaxed max-w-md mx-auto">
          Reserved editable placeholder. As you complete future industry certifications, you can record them here.
        </p>

        {!isAddingOpen ? (
          <button
            onClick={() => setIsAddingOpen(true)}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-antiqueGold px-5 py-2.5 font-mono text-xs font-semibold text-richBlack hover:bg-champagne transition-colors"
          >
            <PlusCircle className="h-4 w-4" />
            <span>Add New Certification</span>
          </button>
        ) : (
          <form onSubmit={handleAddPlaceholderCert} className="mt-6 text-left space-y-4 max-w-md mx-auto">
            <div>
              <label className="block font-mono text-[11px] text-mutedGray uppercase mb-1">
                Certification Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. AWS Certified Cloud Practitioner"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-richBlack px-3 py-2 text-xs text-warmWhite focus:border-antiqueGold focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] text-mutedGray uppercase mb-1">
                Issuing Institution / Organization *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Amazon Web Services / Coursera"
                value={newIssuer}
                onChange={(e) => setNewIssuer(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-richBlack px-3 py-2 text-xs text-warmWhite focus:border-antiqueGold focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] text-mutedGray uppercase mb-1">
                Category
              </label>
              <input
                type="text"
                placeholder="e.g. Cloud Architecture, Data Engineering"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-richBlack px-3 py-2 text-xs text-warmWhite focus:border-antiqueGold focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsAddingOpen(false)}
                className="rounded-lg border border-white/10 px-4 py-2 font-mono text-xs text-mutedGray hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-antiqueGold px-5 py-2 font-mono text-xs font-semibold text-richBlack hover:bg-champagne transition-colors"
              >
                Save to Portfolio
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
