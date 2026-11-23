import React from 'react';
import { initialResumesData } from '../data/resumes';
import { ResumeItem } from '../types';
import {
  FileText,
  Download,
  Eye,
  Star,
  X,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { cn } from '../lib/utils';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumes?: ResumeItem[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  resumes = initialResumesData,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-2xl border border-darkBorder bg-darkCard p-6 sm:p-8 shadow-2xl text-cream overflow-hidden"
      >
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-crimson to-transparent" />

        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-crimson/30 bg-crimson/10 px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-crimson mb-2 font-bold">
              <Star className="h-3 w-3 fill-crimson text-crimson" />
              <span>Verified PDF Resumes</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-cream">
              Select & Download Resume
            </h3>
            <p className="mt-1 text-xs text-mutedGray font-sans">
              Choose the role-targeted resume matching your hiring requirements.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full border border-darkBorder p-2 text-mutedGray hover:text-cream hover:border-crimson transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Resumes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto pr-1">
          {resumes.map((resume) => {
            const isAvailable = resume.status === 'Available' && resume.filePath;

            return (
              <div
                key={resume.id}
                className={cn(
                  'flex flex-col justify-between rounded-xl border p-4 transition-all',
                  resume.isPreferred
                    ? 'border-crimson/60 bg-crimson/5 shadow-crimson-subtle'
                    : 'border-darkBorder bg-darkSurface hover:border-crimson/40'
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-sans text-xs font-bold text-cream">
                      {resume.category}
                    </span>
                    {resume.isPreferred ? (
                      <span className="inline-flex items-center gap-1 rounded bg-crimson/20 px-1.5 py-0.5 font-mono text-[9px] font-bold text-crimson">
                        Primary
                      </span>
                    ) : (
                      <span
                        className={cn(
                          'font-mono text-[9px] px-1.5 py-0.5 rounded',
                          isAvailable
                            ? 'text-cream/80 bg-white/5'
                            : 'text-mutedGray bg-darkBorder/40'
                        )}
                      >
                        {resume.status}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-mutedGray line-clamp-2">
                    {resume.summaryNote}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-darkBorder flex items-center justify-between gap-2">
                  {isAvailable ? (
                    <>
                      <a
                        href={resume.filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-mutedGray hover:text-cream transition-colors"
                      >
                        <Eye className="h-3 w-3" />
                        <span>Preview</span>
                      </a>
                      <a
                        href={resume.filePath}
                        download={resume.fileName || `${resume.slug}.pdf`}
                        className="inline-flex items-center gap-1 rounded-md bg-crimson px-2.5 py-1 font-mono text-xs font-semibold text-white hover:bg-crimsonLight transition-colors"
                      >
                        <Download className="h-3 w-3" />
                        <span>Download</span>
                      </a>
                    </>
                  ) : (
                    <span className="font-mono text-xs text-mutedGray">
                      Awaiting Upload
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Bottom Strip */}
        <div className="mt-6 pt-4 border-t border-darkBorder flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="font-mono text-[11px] text-mutedGray">
            Stored locally & optimized for applicant tracking systems.
          </span>
          <button
            onClick={onClose}
            className="rounded-lg border border-darkBorder bg-darkSurface px-4 py-1.5 font-mono text-xs text-mutedGray hover:text-cream hover:border-crimson transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
