import React, { useEffect, useState } from 'react';

export const CinematicIntro: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if intro has already played in this browser session
    const hasPlayed = sessionStorage.getItem('va_cinematic_intro_seen');
    if (!hasPlayed) {
      setVisible(true);
      const timer = setTimeout(() => {
        handleDismiss();
      }, 1900); // Under 2 seconds total

      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('va_cinematic_intro_seen', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      onClick={handleDismiss}
      className="fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center bg-richBlack transition-opacity duration-700 select-none"
    >
      <div className="relative flex flex-col items-center animate-fade-up">
        {/* Monogram Seal */}
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-antiqueGold/60 bg-antiqueGold/5 shadow-gold-glow">
          <span className="font-serif text-3xl font-bold tracking-widest text-antiqueGold">VA</span>
        </div>

        <h1 className="font-serif text-3xl md:text-5xl font-semibold tracking-wider text-warmWhite">
          VISHWARAJ ALGUDE
        </h1>

        <div className="mt-3 flex items-center gap-3">
          <div className="h-[1px] w-8 bg-antiqueGold/50" />
          <p className="font-mono text-xs tracking-widest text-champagne uppercase">
            Computer Science & Engineering · Fresher Portfolio
          </p>
          <div className="h-[1px] w-8 bg-antiqueGold/50" />
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDismiss();
        }}
        className="absolute bottom-8 rounded border border-white/20 px-3 py-1 font-mono text-xs text-mutedGray hover:text-champagne hover:border-antiqueGold"
      >
        Click to enter / Press any key
      </button>
    </div>
  );
};
