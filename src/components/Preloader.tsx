import React, { useEffect, useState } from 'react';
import { useTheme } from '../lib/theme';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const { reducedMotion } = useTheme();
  const [percent, setPercent] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const isMotionReduced =
      reducedMotion ||
      (typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    if (isMotionReduced) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFadingOut(true), 80);
          setTimeout(() => onComplete(), 280);
          return 100;
        }
        const jump = Math.floor(Math.random() * 16) + 12;
        return Math.min(100, prev + jump);
      });
    }, 20);

    return () => clearInterval(interval);
  }, [reducedMotion, onComplete]);

  const isMotionReduced =
    reducedMotion ||
    (typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  if (isMotionReduced) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between bg-darkBg px-6 py-12 transition-opacity duration-200 select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top Label */}
      <div className="w-full flex items-center justify-between text-xs font-mono tracking-widest text-mutedGray">
        <span>VISHWARAJ ALGUDE</span>
        <span className="text-crimson font-bold">PORTFOLIO // 2026</span>
      </div>

      {/* Center Initials */}
      <div className="flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center">
          <span className="font-display text-7xl sm:text-9xl font-black tracking-tight text-cream">
            VA
          </span>
          <span className="absolute -bottom-2 font-mono text-xs text-crimson uppercase tracking-[0.3em]">
            CSE GRADUATE
          </span>
        </div>
      </div>

      {/* Bottom Progress Bar & Counter */}
      <div className="w-full max-w-md space-y-3">
        <div className="flex items-center justify-between font-mono text-xs text-mutedGray">
          <span className="tracking-widest">LOADING EXPERIENCE</span>
          <span className="text-cream font-bold">{percent}%</span>
        </div>
        {/* Thin Crimson Progress Line */}
        <div className="h-[2px] w-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-crimson transition-all duration-75 ease-out shadow-crimson-glow"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
};
