import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initialResumesData } from '../data/resumes';
import { getAllCustomResumes } from '../lib/indexedDb';
import { ResumeItem } from '../types';
import {
  FileText,
  Download,
  Eye,
  Star,
  ChevronDown,
  ArrowRight,
  Clock,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { cn } from '../lib/utils';

export const ResumeDropdown: React.FC<{ onPreview?: (resume: ResumeItem) => void }> = ({ onPreview }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [resumes, setResumes] = useState<ResumeItem[]>(initialResumesData);

  // Sync custom uploads from IndexedDB
  useEffect(() => {
    async function loadIndexedDbResumes() {
      const customMap = await getAllCustomResumes();
      if (Object.keys(customMap).length > 0) {
        setResumes((prev) =>
          prev.map((r) => {
            if (customMap[r.id]) {
              const custom = customMap[r.id];
              return {
                ...r,
                status: 'Available',
                filePath: URL.createObjectURL(custom.fileBlob),
                uploadedAt: 'Custom Upload (IndexedDB)',
              };
            }
            return r;
          })
        );
      }
    }
    loadIndexedDbResumes();
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 rounded-lg border border-antiqueGold/40 bg-plum/60 px-3.5 py-1.5 font-mono text-xs font-semibold text-champagne backdrop-blur-md transition-all hover:bg-antiqueGold hover:text-midnight hover:border-antiqueGold"
        aria-expanded={isOpen}
      >
        <FileText className="h-3.5 w-3.5" />
        <span>Resumes (9)</span>
        <ChevronDown className={cn('h-3 w-3 transition-transform duration-200', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop to close */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

          <div className="absolute right-0 mt-2 z-50 w-80 sm:w-96 rounded-xl border border-antiqueGold/35 bg-plum/95 backdrop-blur-xl p-3 shadow-2xl animate-fade-in divide-y divide-white/5">
            <div className="px-2 pb-2.5 flex items-center justify-between">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-wider text-warmWhite">
                  Role-Specific Resumes
                </p>
                <p className="text-xs font-mono text-mutedIndigo">
                  6 Available · 3 Awaiting Upload
                </p>
              </div>
              <Link
                to="/resumes"
                onClick={() => setIsOpen(false)}
                className="font-mono text-xs text-antiqueGold hover:underline flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-antiqueGold rounded"
              >
                <span>Full Centre</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="max-h-72 overflow-y-auto py-1.5 space-y-1 scrollbar-none">
              {resumes.map((resume) => (
                <div
                  key={resume.id}
                  className="group flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-white/5 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="font-sans text-xs font-semibold text-warmWhite truncate">
                        {resume.category}
                      </p>
                      {resume.isPreferred && (
                        <Star className="h-3 w-3 fill-antiqueGold text-antiqueGold flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-mutedIndigo truncate">
                      {resume.mappedRole}
                    </p>
                  </div>

                  {resume.status === 'Available' && resume.filePath ? (
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <a
                        href={resume.filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded p-1 text-mutedIndigo hover:text-antiqueGold hover:bg-antiqueGold/10 transition-colors"
                        title="Preview PDF"
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={resume.filePath}
                        download={resume.fileName || `${resume.slug}.pdf`}
                        className="rounded p-1 text-antiqueGold hover:text-warmWhite hover:bg-antiqueGold/20 transition-colors"
                        title="Download PDF"
                      >
                        <Download className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  ) : (
                    <span className="font-mono text-[9px] rounded border border-white/10 px-1.5 py-0.5 text-mutedIndigo">
                      Awaiting
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-2 px-2">
              <Link
                to="/resumes"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-antiqueGold/15 border border-antiqueGold/35 py-1.5 font-mono text-xs font-semibold text-champagne hover:bg-antiqueGold hover:text-midnight transition-colors"
              >
                <span>Manage & Upload Custom Resumes</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
