import React, { useEffect, useState, useCallback, useRef } from 'react';
import { PhotoItem } from '../types';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

interface LightboxProps {
  photos: PhotoItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [imgError, setImgError] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const activePhoto = photos[currentIndex];

  const handleNext = useCallback(() => {
    if (photos.length <= 1) return;
    setImgError(false);
    onNavigate((currentIndex + 1) % photos.length);
  }, [currentIndex, photos.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (photos.length <= 1) return;
    setImgError(false);
    onNavigate((currentIndex - 1 + photos.length) % photos.length);
  }, [currentIndex, photos.length, onNavigate]);

  // Keyboard navigation: Esc, Left, Right
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  useEffect(() => {
    setImgError(false);
  }, [currentIndex]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  if (!isOpen || !activePhoto) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Photo Lightbox"
    >
      {/* Top action bar: counter + close button */}
      <div className="absolute top-4 inset-x-4 md:inset-x-8 flex items-center justify-between z-20 text-cream">
        <div className="font-mono text-xs tracking-widest text-crimson font-bold">
          FRAME {currentIndex + 1} / {photos.length}
        </div>
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-darkSurface/80 text-cream transition-colors hover:border-crimson hover:text-crimson focus:outline-none"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Prev button */}
      {photos.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Previous photo"
          className="absolute left-3 md:left-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-darkBorder bg-darkCard/80 text-cream transition-all hover:border-crimson hover:bg-crimson/20 focus:outline-none"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {/* Main photo container */}
      <div className="relative max-h-[82vh] max-w-[90vw] md:max-w-[80vw] flex flex-col items-center">
        {!imgError ? (
          <img
            src={activePhoto.src}
            alt={activePhoto.alt}
            onError={() => setImgError(true)}
            className="max-h-[72vh] max-w-full rounded-2xl border border-crimson/40 object-contain shadow-2xl transition-transform duration-300"
          />
        ) : (
          <div className="flex h-80 w-[85vw] max-w-xl flex-col items-center justify-center rounded-2xl border border-crimson/50 bg-darkCard p-8 text-center shadow-crimson-subtle">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-crimson/50 bg-crimson/10">
              <span className="font-display text-2xl font-bold tracking-widest text-crimson">VA</span>
            </div>
            <p className="font-display text-base font-semibold tracking-wider text-cream uppercase">
              Photo Frame Slot
            </p>
            <p className="mt-2 text-xs text-mutedGray">
              {activePhoto.src}
            </p>
          </div>
        )}

        {/* Film-style caption at bottom of lightbox */}
        {activePhoto.caption && (
          <div className="mt-4 max-w-xl px-4 text-center">
            <p className="font-mono text-xs tracking-wide text-cream/90 md:text-sm">
              {activePhoto.caption}
            </p>
          </div>
        )}
      </div>

      {/* Next button */}
      {photos.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Next photo"
          className="absolute right-3 md:right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-darkBorder bg-darkCard/80 text-cream transition-all hover:border-crimson hover:bg-crimson/20 focus:outline-none"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};
