import React, { useState, useEffect, useRef } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';
import { initialResumesData } from '../data/resumes';
import { saveResumePdf, getAllCustomResumes } from '../lib/indexedDb';
import { ResumeItem } from '../types';
import {
  FileText,
  Upload,
  Download,
  Eye,
  Star,
  RefreshCw,
  AlertCircle,
  X,
  FileCheck,
  Calendar,
  Sparkles,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { cn } from '../lib/utils';

export const ResumeCentre: React.FC = () => {
  const [resumes, setResumes] = useState<ResumeItem[]>(() => {
    const saved = localStorage.getItem('va_resumes_meta');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialResumesData;
      }
    }
    return initialResumesData;
  });

  const [activePreviewResume, setActivePreviewResume] = useState<ResumeItem | null>(null);
  const [previewBlobUrl, setPreviewBlobUrl] = useState<string | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadTargetId, setUploadTargetId] = useState<string | null>(null);

  // Sync with IndexedDB custom uploads on mount
  useEffect(() => {
    async function syncIndexedDb() {
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
                fileName: custom.metadata?.fileName || r.fileName,
                fileSize: custom.metadata?.fileSize || r.fileSize,
              };
            }
            return r;
          })
        );
      }
    }
    syncIndexedDb();
  }, []);

  const saveMeta = (list: ResumeItem[]) => {
    setResumes(list);
    try {
      localStorage.setItem('va_resumes_meta', JSON.stringify(list));
    } catch (e) {
      console.warn('Could not save metadata:', e);
    }
  };

  // Handle PDF Upload / Replace with IndexedDB persistence
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !uploadTargetId) return;

    if (file.type !== 'application/pdf') {
      alert('Please upload a valid PDF file.');
      return;
    }

    const blobUrl = URL.createObjectURL(file);
    const fileSizeStr = `${(file.size / 1024).toFixed(1)} KB`;

    // Save to IndexedDB
    await saveResumePdf(uploadTargetId, file, {
      fileName: file.name,
      fileSize: fileSizeStr,
    });

    const updated = resumes.map((res) => {
      if (res.id === uploadTargetId) {
        return {
          ...res,
          status: 'Available' as const,
          uploadedAt: `Updated ${new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`,
          fileSize: fileSizeStr,
          fileName: file.name,
          filePath: blobUrl,
        };
      }
      return res;
    });

    saveMeta(updated);
    setUploadTargetId(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const triggerUpload = (resumeId: string) => {
    setUploadTargetId(resumeId);
    fileInputRef.current?.click();
  };

  const togglePreferred = (resumeId: string) => {
    const updated = resumes.map((res) => ({
      ...res,
      isPreferred: res.id === resumeId,
    }));
    saveMeta(updated);
  };

  const openPreview = (resume: ResumeItem) => {
    setActivePreviewResume(resume);
    if (resume.filePath) {
      setPreviewBlobUrl(resume.filePath);
    } else {
      setPreviewBlobUrl(null);
    }
  };

  const closePreview = () => {
    setActivePreviewResume(null);
    setPreviewBlobUrl(null);
  };

  const filteredResumes = resumes.filter((r) => {
    if (selectedCategoryFilter === 'all') return true;
    if (selectedCategoryFilter === 'available') return r.status === 'Available';
    if (selectedCategoryFilter === 'awaiting') return r.status === 'Awaiting upload';
    return r.category.toLowerCase().includes(selectedCategoryFilter.toLowerCase());
  });

  return (
    <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hidden File Input for IndexedDB Uploads */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="application/pdf"
        className="hidden"
      />

      {/* Header */}
      <SectionHeader
        badge="Resume Architecture"
        title="Resume Centre (9 Role-Specific Formats)"
        subtitle="Dedicated resume variations tailored for specific career tracks. Supports instant PDF upload persisted with IndexedDB, live document preview drawer, version tracking, and direct download."
      />

      {/* Filter Tabs */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All 9 Resumes' },
            { id: 'available', label: 'Files Ready (6)' },
            { id: 'awaiting', label: 'Awaiting Upload (3)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategoryFilter(tab.id)}
              className={cn(
                'rounded-lg px-4 py-2 font-mono text-xs transition-colors',
                selectedCategoryFilter === tab.id
                  ? 'bg-antiqueGold text-midnight font-bold shadow-gold-glow'
                  : 'bg-plum/60 text-mutedIndigo hover:text-champagne hover:bg-plum'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-mutedIndigo">
          <ShieldCheck className="h-4 w-4 text-auroraTeal" />
          <span>IndexedDB Client Persistence Active</span>
        </div>
      </div>

      {/* Resumes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResumes.map((resume) => {
          const isUploaded = !!resume.filePath && resume.status === 'Available';

          return (
            <div
              key={resume.id}
              className={cn(
                'group flex flex-col justify-between rounded-2xl border bg-gradient-to-b from-plum via-midnight to-inkTeal p-6 shadow-indigo-card transition-all hover:border-antiqueGold hover:shadow-gold-glow',
                resume.isPreferred ? 'border-antiqueGold/70 ring-1 ring-antiqueGold/50' : 'border-white/10'
              )}
            >
              <div>
                {/* Top Badge bar */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant={resume.status === 'Available' ? 'gold' : 'muted'}>
                    {resume.category}
                  </Badge>

                  <div className="flex items-center gap-1.5">
                    {resume.isPreferred && (
                      <span className="inline-flex items-center gap-1 rounded bg-antiqueGold/20 px-2 py-0.5 font-mono text-[10px] font-bold text-antiqueGold">
                        <Star className="h-3 w-3 fill-antiqueGold text-antiqueGold" />
                        Preferred
                      </span>
                    )}
                    <button
                      onClick={() => togglePreferred(resume.id)}
                      title={resume.isPreferred ? 'Preferred resume' : 'Mark as preferred resume'}
                      className="text-mutedIndigo hover:text-antiqueGold transition-colors"
                    >
                      <Star
                        className={cn(
                          'h-4 w-4',
                          resume.isPreferred && 'fill-antiqueGold text-antiqueGold'
                        )}
                      />
                    </button>
                  </div>
                </div>

                {/* Target Role */}
                <h3 className="font-display text-base font-bold text-warmWhite">
                  {resume.targetRole}
                </h3>

                {/* Summary Note */}
                <p className="mt-2 text-xs leading-relaxed text-mutedIndigo line-clamp-3 font-sans">
                  {resume.summaryNote}
                </p>

                {/* Key Skills Highlighted */}
                <div className="mt-4 pt-3 border-t border-white/5">
                  <p className="font-mono text-[10px] text-antiqueGold uppercase tracking-wider mb-2">
                    Key Competencies Highlighted:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {resume.keySkillsHighlighted.map((skill) => (
                      <span
                        key={skill}
                        className="rounded border border-white/5 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-champagne"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metadata Row */}
                <div className="mt-5 flex items-center justify-between text-[11px] font-mono text-mutedIndigo">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-antiqueGold" />
                    {resume.uploadedAt}
                  </span>
                  <span>{resume.fileSize}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-2">
                {isUploaded ? (
                  <div className="flex items-center gap-2">
                    {/* View Preview Button */}
                    <button
                      onClick={() => openPreview(resume)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-antiqueGold/40 bg-plum py-2 font-mono text-xs font-semibold text-champagne hover:bg-antiqueGold hover:text-midnight transition-colors"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>Preview PDF</span>
                    </button>

                    {/* Download Button */}
                    <a
                      href={resume.filePath}
                      download={resume.fileName || `${resume.slug}.pdf`}
                      className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-midnight p-2 text-warmWhite hover:border-antiqueGold hover:text-antiqueGold transition-colors"
                      title="Download PDF"
                    >
                      <Download className="h-4 w-4" />
                    </a>

                    {/* Replace Button */}
                    <button
                      onClick={() => triggerUpload(resume.id)}
                      className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-midnight p-2 text-mutedIndigo hover:border-antiqueGold hover:text-champagne transition-colors"
                      title="Replace with new PDF version"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between font-mono text-[11px] text-mutedIndigo rounded bg-white/5 px-2.5 py-1">
                      <span className="flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        <span>Awaiting Upload</span>
                      </span>
                      <span>Owner upload</span>
                    </div>

                    <button
                      onClick={() => triggerUpload(resume.id)}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-antiqueGold/15 border border-antiqueGold/40 py-2 font-mono text-xs font-semibold text-champagne hover:bg-antiqueGold hover:text-midnight transition-colors"
                    >
                      <Upload className="h-3.5 w-3.5" />
                      <span>Upload PDF for {resume.category}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* PDF Preview Modal */}
      {activePreviewResume && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/95 backdrop-blur-md p-4 animate-fade-in"
        >
          <div className="relative flex h-[90vh] w-full max-w-5xl flex-col rounded-2xl border border-antiqueGold/40 bg-plum shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-midnight">
              <div className="flex items-center gap-3">
                <FileCheck className="h-5 w-5 text-antiqueGold" />
                <div>
                  <h3 className="font-display text-sm font-bold text-warmWhite">
                    {activePreviewResume.targetRole}
                  </h3>
                  <p className="font-mono text-xs text-champagne">
                    {activePreviewResume.fileName || 'Resume Document'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {activePreviewResume.filePath && (
                  <a
                    href={activePreviewResume.filePath}
                    download={activePreviewResume.fileName || `${activePreviewResume.slug}.pdf`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-antiqueGold px-3.5 py-1.5 font-mono text-xs font-bold text-midnight hover:bg-champagne transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </a>
                )}
                <button
                  onClick={closePreview}
                  className="rounded-full border border-white/10 p-1.5 text-mutedIndigo hover:text-warmWhite hover:border-antiqueGold"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF or fallback */}
            <div className="flex-1 bg-midnight/80 overflow-auto">
              {previewBlobUrl ? (
                <iframe
                  src={previewBlobUrl}
                  title="Resume PDF Viewer"
                  className="h-full w-full border-none"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <FileText className="h-16 w-16 text-antiqueGold/40 mb-4" />
                  <h4 className="font-display text-base font-bold text-warmWhite">
                    PDF Document
                  </h4>
                  <p className="mt-1 text-xs text-mutedIndigo max-w-sm">
                    This resume profile is structured and awaiting owner upload.
                  </p>
                  <button
                    onClick={() => {
                      closePreview();
                      triggerUpload(activePreviewResume.id);
                    }}
                    className="mt-5 inline-flex items-center gap-2 rounded-lg bg-antiqueGold px-5 py-2 font-mono text-xs font-bold text-midnight hover:bg-champagne"
                  >
                    <Upload className="h-4 w-4" />
                    <span>Upload PDF Now</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
