import React from 'react';
import { cn } from '../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'champagne' | 'muted' | 'outline' | 'success';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  size = 'sm',
  className,
}) => {
  const variantStyles = {
    gold: 'border-antiqueGold/40 bg-antiqueGold/10 text-champagne dark:text-champagne',
    champagne: 'border-champagne/30 bg-champagne/10 text-champagne',
    muted: 'border-white/10 bg-white/5 text-mutedGray',
    outline: 'border-antiqueGold/30 text-champagne bg-transparent',
    success: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
  }[variant];

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5',
    md: 'text-xs px-3 py-1',
  }[size];

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border font-mono font-medium tracking-wide transition-colors',
        variantStyles,
        sizeStyles,
        className
      )}
    >
      {children}
    </span>
  );
};
