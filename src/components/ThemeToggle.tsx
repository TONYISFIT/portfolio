import React from 'react';
import { useTheme } from '../lib/theme';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-antiqueGold/30 bg-richBlack/50 text-champagne backdrop-blur-md transition-colors hover:border-antiqueGold hover:text-warmWhite hover:bg-antiqueGold/15 focus:outline-none dark:bg-cardDark/80 dark:text-champagne light:bg-white light:text-deepCharcoal ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 text-antiqueGold transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 text-antiqueGold-dark transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};
