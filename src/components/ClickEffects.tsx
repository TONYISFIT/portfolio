import React, { useEffect, useState } from 'react';
import { useTheme } from '../lib/theme';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export const ClickEffects: React.FC = () => {
  const { reducedMotion } = useTheme();
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    if (reducedMotion) return;

    const handleClick = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      } else {
        return;
      }

      const newRipple: Ripple = {
        id: Date.now() + Math.random(),
        x: clientX,
        y: clientY,
      };

      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 650);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {ripples.map((ripple) => (
        <React.Fragment key={ripple.id}>
          {/* Inner crimson ripple */}
          <span
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-crimson bg-crimson/10 animate-ripple"
            style={{
              left: `${ripple.x}px`,
              top: `${ripple.y}px`,
              width: '28px',
              height: '28px',
            }}
          />
          {/* Outer glow wave */}
          <span
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-crimson/30 animate-ripple-delayed"
            style={{
              left: `${ripple.x}px`,
              top: `${ripple.y}px`,
              width: '48px',
              height: '48px',
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
};
