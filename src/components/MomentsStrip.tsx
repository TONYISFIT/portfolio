import React, { useState } from 'react';
import { photosData } from '../data/photos';
import { Lightbox } from './Lightbox';
import { Camera, Maximize2 } from 'lucide-react';

export const MomentsStrip: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightboxAt = (idx: number) => {
    setSelectedIdx(idx);
    setLightboxOpen(true);
  };

  return (
    <section className="py-24 bg-darkBg border-t border-darkBorder relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 h-80 w-80 rounded-full bg-crimson/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-crimson font-bold block mb-2">
              LIFE & DISCIPLINE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-cream">
              Corporate, Fitness & Creator
            </h2>
            <p className="mt-3 text-sm text-mutedGray max-w-2xl font-sans leading-relaxed">
              Academic milestones, physical discipline and fitness consistency, and outdoor companionship that inspire my work and problem solving.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-darkBorder bg-darkCard px-4 py-1.5 font-mono text-xs text-cream/80">
            <Camera className="h-4 w-4 text-crimson" />
            <span>Featured Gallery</span>
          </div>
        </div>

        {/* Gallery Grid: Single row of 3 on desktop (md:grid-cols-3), stacked one per row on mobile (grid-cols-1) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {photosData.map((photo, idx) => (
            <div
              key={photo.id}
              tabIndex={0}
              role="button"
              aria-label={`View photo ${photo.alt}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightboxAt(idx);
                }
              }}
              onClick={() => openLightboxAt(idx)}
              className="group relative rounded-2xl overflow-hidden border border-darkBorder bg-darkCard shadow-editorial-card cursor-pointer transition-all duration-300 hover:border-crimson hover:shadow-crimson-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson flex flex-col justify-between"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-darkSurface">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />

                {/* Subtle vignette and bottom dark gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Enlarge Icon Badge */}
                <div className="absolute top-3 right-3 rounded-full bg-darkBg/70 backdrop-blur-md p-2 border border-white/10 text-mutedGray group-hover:text-cream group-hover:border-crimson transition-colors">
                  <Maximize2 className="h-3.5 w-3.5 text-crimson" />
                </div>
              </div>

              {/* Caption & Metadata Footer with Custom Category Name (formal, gym, companionship) */}
              <div className="p-4 bg-darkCard border-t border-darkBorder/60 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-crimson font-bold uppercase tracking-wider">
                    0{idx + 1} // {photo.tag || 'FEATURED'}
                  </span>
                  <span className="text-mutedGray">CLICK TO ENLARGE</span>
                </div>
                <p className="text-xs text-cream/90 font-sans line-clamp-2 leading-snug">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Component */}
      <Lightbox
        photos={photosData}
        currentIndex={selectedIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setSelectedIdx(newIdx)}
      />
    </section>
  );
};
