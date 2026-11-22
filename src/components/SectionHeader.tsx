import React from 'react';
import { cn } from '../lib/utils';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = false,
  className,
}) => {
  return (
    <div className={cn('mb-10', centered ? 'text-center' : 'text-left', className)}>
      {badge && (
        <div
          className={cn(
            'inline-flex items-center gap-2 rounded-full border border-antiqueGold/35 bg-antiqueGold/10 px-3.5 py-1 text-xs font-mono font-medium tracking-widest text-champagne mb-3',
            centered && 'justify-center'
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-antiqueGold animate-subtle-pulse" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-warmWhite dark:text-warmWhite light:text-deepCharcoal">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm md:text-base text-mutedGray dark:text-mutedGray light:text-gray-600 leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};
