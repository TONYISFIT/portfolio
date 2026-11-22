import React, { useEffect, useState } from 'react';
import { useTheme } from '../lib/theme';

export const CustomCursor: React.FC = () => {
  const { reducedMotion } = useTheme();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest('a, button, [role="button"], input, select, textarea, .interactive-hover');
      const customLabel = target?.closest('[data-cursor]')?.getAttribute('data-cursor');

      if (customLabel) {
        setCursorText(customLabel);
        setIsHovered(true);
      } else if (interactive) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth trailing position
  useEffect(() => {
    if (isTouch || reducedMotion) return;
    let animId: number;

    const follow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.2,
        y: prev.y + (pos.y - prev.y) * 0.2,
      }));
      animId = requestAnimationFrame(follow);
    };

    animId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animId);
  }, [pos, isTouch, reducedMotion]);

  if (isTouch || reducedMotion) return null;

  return (
    <>
      {/* Central dot */}
      <div
        className="pointer-events-none fixed z-50 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson transition-transform duration-100 ease-out"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />

      {/* Trailing follower circle */}
      <div
        className={`pointer-events-none fixed z-50 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-crimson/60 backdrop-blur-[1px] transition-all duration-200 ease-out ${
          isHovered
            ? 'h-12 w-12 bg-darkSurface/60 border-crimson shadow-crimson-glow'
            : 'h-8 w-8 bg-transparent'
        }`}
        style={{ left: `${trailingPos.x}px`, top: `${trailingPos.y}px` }}
      >
        {cursorText && (
          <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-cream">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};
