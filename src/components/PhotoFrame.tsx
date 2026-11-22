import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { Camera, Sparkles } from 'lucide-react';

interface PhotoFrameProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: '21/9' | '16/9' | '4/3' | '1/1' | 'portrait';
  className?: string;
  letterbox?: boolean;
  priority?: boolean;
  onClick?: () => void;
}

export const PhotoFrame: React.FC<PhotoFrameProps> = ({
  src,
  alt,
  caption,
  aspectRatio = '21/9',
  className,
  letterbox = true,
  priority = false,
  onClick,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Aspect ratio classes
  const aspectClass = {
    '21/9': 'aspect-[21/9]',
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    'portrait': 'aspect-[3/4]',
  }[aspectRatio];

  return (
    <div className={cn('group relative flex flex-col', className)}>
      <div
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={(e) => {
          if (onClick && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onClick();
          }
        }}
        className={cn(
          'relative w-full overflow-hidden transition-all duration-500',
          aspectClass,
          letterbox ? 'rounded-lg border border-antiqueGold/40 shadow-luxury-card' : 'rounded-lg border border-white/10',
          onClick ? 'cursor-pointer hover:border-antiqueGold hover:shadow-gold-glow' : ''
        )}
      >
        {/* If image loads properly */}
        {!hasError ? (
          <>
            <img
              src={src}
              alt={alt}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
              className={cn(
                'h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]',
                !isLoaded && 'opacity-0',
                isLoaded && 'opacity-100'
              )}
            />
            {/* Subtle cinematic gradient vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-richBlack/80 via-transparent to-richBlack/20" />
          </>
        ) : null}

        {/* Elegant "VA" Initials Placeholder Frame (Shown when photo is missing or fails to load) */}
        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-cardDark via-richBlack to-[#121215] p-6 text-center select-none">
            {/* Subtle luxury geometric pattern background */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:16px_16px]" />
            
            <div className="relative mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-antiqueGold/50 bg-antiqueGold/10 shadow-gold-glow transition-transform duration-300 group-hover:scale-105">
              <span className="font-serif text-2xl font-bold tracking-widest text-antiqueGold">VA</span>
            </div>

            <div className="relative z-10">
              <p className="font-serif text-sm font-semibold tracking-wider text-champagne uppercase">
                Photo to be uploaded
              </p>
              <p className="mt-1 flex items-center justify-center gap-1.5 text-xs text-mutedGray">
                <Camera className="h-3.5 w-3.5 text-antiqueGold/70" />
                <span>Reserved for Vishwaraj Algude</span>
              </p>
            </div>

            {/* Corner ornaments for luxury letterbox feel */}
            <div className="pointer-events-none absolute top-2 left-2 h-3 w-3 border-t border-l border-antiqueGold/50" />
            <div className="pointer-events-none absolute top-2 right-2 h-3 w-3 border-t border-r border-antiqueGold/50" />
            <div className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b border-l border-antiqueGold/50" />
            <div className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b border-r border-antiqueGold/50" />
          </div>
        )}

        {/* Click to expand overlay hint */}
        {onClick && (
          <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1 rounded bg-black/60 px-2 py-1 text-[11px] font-medium text-champagne opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <Sparkles className="h-3 w-3 text-antiqueGold" />
            <span>Click to expand</span>
          </div>
        )}
      </div>

      {/* Film-style caption in small champagne type */}
      {caption && (
        <div className="mt-2.5 px-1">
          <p className="font-mono text-xs tracking-wide text-champagne/90 dark:text-champagne/80">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
};
