import React, { useState, useEffect, useMemo } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { GitHubRepoItem } from '../types';
import {
  Github,
  Star,
  GitFork,
  Search,
  ArrowUpRight,
  RefreshCw,
  AlertTriangle,
  Sparkles,
} from 'lucide-react';
import { formatDate, cn } from '../lib/utils';

// Static verification metadata for specific repos to ensure transparent descriptions
const REPO_NOTES: Record<string, { honestNote: string; isFeatured: boolean }> = {
  'customer-churn-retention-analytics': {
    honestNote: 'Machine learning churn classification pipeline with Logistic Regression, Random Forest, XGBoost, and SHAP explainability.',
    isFeatured: true,
  },
  'ecommerce-sales-customer-analytics': {
    honestNote: 'Relational MySQL database analytics, advanced SQL queries (CTEs, Window Functions), and Power BI executive sales dashboard.',
    isFeatured: true,
  },
  'selenium-python-automation-framework': {
    honestNote: 'Python test automation suite using Selenium WebDriver, PyTest, Page Object Model (POM), API tests, and GitHub Actions CI/CD.',
    isFeatured: true,
  },
  'sql-business-analytics-case-studies': {
    honestNote: 'Curated collection of complex SQL business query case studies. Exists exclusively as a GitHub repository (not a resume project).',
    isFeatured: true,
  },
  'python-data-analysis-automation-toolkit': {
    honestNote: 'Data validation, profiling, and summary reporting automation scripts in Python (structured validation, not arbitrary data cleaning). Exists exclusively as a GitHub repository.',
    isFeatured: true,
  },
  'unemployment-and-mental-health': {
    honestNote: 'Static HTML informational website discussing mental health and employment challenges (informational article website, not a data project).',
    isFeatured: false,
  },
  'TONYISFIT': {
    honestNote: 'GitHub personal profile README repository for Vishwaraj Algude.',
    isFeatured: false,
  },
};

export const Repositories: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'updated' | 'stars'>('updated');

  const fetchRepos = async (force: boolean = false) => {
    setLoading(true);
    setError(null);

    const cacheKey = 'va_github_repos_cache';
    const cacheTimeKey = 'va_github_repos_time';
    const cachedData = sessionStorage.getItem(cacheKey);
    const cachedTime = sessionStorage.getItem(cacheTimeKey);

    // Cache valid for 10 minutes to respect GitHub public API rate limit (60 requests/hr)
    if (!force && cachedData && cachedTime && Date.now() - Number(cachedTime) < 10 * 60 * 1000) {
      try {
        setRepos(JSON.parse(cachedData));
        setLoading(false);
        return;
      } catch {
        // Continue to fresh fetch on parse error
      }
    }

    try {
      const response = await fetch('https://api.github.com/users/TONYISFIT/repos?per_page=100', {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      });

      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('GitHub API rate limit reached for unauthenticated client. Please try again shortly or view profile directly.');
        }
        throw new Error(`GitHub API responded with status ${response.status}`);
      }

      const data = await response.json();

      // Enrich repos with honest notes & featured flags
      const enrichedRepos: GitHubRepoItem[] = data.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        language: repo.language,
        updated_at: repo.updated_at,
        topics: repo.topics || [],
        visibility: repo.visibility || 'public',
        isFeatured: REPO_NOTES[repo.name]?.isFeatured || false,
        honestNote: REPO_NOTES[repo.name]?.honestNote,
      }));

      setRepos(enrichedRepos);
      sessionStorage.setItem(cacheKey, JSON.stringify(enrichedRepos));
      sessionStorage.setItem(cacheTimeKey, String(Date.now()));
    } catch (err: any) {
      console.error('Failed to fetch repos:', err);
      setError(err.message || 'Unable to fetch live GitHub repositories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  // Unique languages
  const availableLanguages = useMemo(() => {
    const langs = new Set<string>();
    repos.forEach((r) => {
      if (r.language) langs.add(r.language);
    });
    return Array.from(langs);
  }, [repos]);

  // Filtered and sorted repos
  const processedRepos = useMemo(() => {
    return repos
      .filter((repo) => {
        const matchesLang = selectedLanguage === 'all' || repo.language === selectedLanguage;
        const matchesSearch =
          searchQuery.trim() === '' ||
          repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (repo.honestNote && repo.honestNote.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesLang && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'stars') {
          return b.stargazers_count - a.stargazers_count;
        }
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      });
  }, [repos, selectedLanguage, searchQuery, sortBy]);

  const featuredRepos = useMemo(() => {
    return processedRepos.filter((r) => r.isFeatured);
  }, [processedRepos]);

  const otherRepos = useMemo(() => {
    return processedRepos.filter((r) => !r.isFeatured);
  }, [processedRepos]);

  return (
    <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <SectionHeader
          badge="Live Codebase"
          title="GitHub Repositories"
          subtitle="Directly synced from github.com/TONYISFIT via GitHub's public API. Star and fork counts reflect real live figures without fabrication."
          className="mb-0"
        />

        <div className="flex items-center gap-3">
          <button
            onClick={() => fetchRepos(true)}
            disabled={loading}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-cardDark/80 px-3.5 py-2 font-mono text-xs text-champagne hover:border-antiqueGold hover:text-white transition-colors"
          >
            <RefreshCw className={cn('h-3.5 w-3.5', loading && 'animate-spin')} />
            <span>Refresh API</span>
          </button>

          <a
            href="https://github.com/TONYISFIT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-antiqueGold/40 bg-antiqueGold/15 px-3.5 py-2 font-mono text-xs font-semibold text-antiqueGold hover:bg-antiqueGold hover:text-richBlack transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>Profile: TONYISFIT</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="mb-10 rounded-xl border border-white/10 bg-cardDark/60 p-4 sm:p-6 backdrop-blur-md space-y-4">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-mutedGray" />
          <input
            type="text"
            placeholder="Search repositories by name, keywords, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-richBlack/60 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-warmWhite placeholder:text-mutedGray/60 focus:border-antiqueGold focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-mutedGray">Language:</span>
            <button
              onClick={() => setSelectedLanguage('all')}
              className={cn(
                'rounded px-2.5 py-1 font-mono text-xs transition-colors',
                selectedLanguage === 'all'
                  ? 'bg-antiqueGold text-richBlack font-bold'
                  : 'bg-white/5 text-mutedGray hover:text-white'
              )}
            >
              All ({repos.length})
            </button>
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={cn(
                  'rounded px-2.5 py-1 font-mono text-xs transition-colors',
                  selectedLanguage === lang
                    ? 'bg-antiqueGold text-richBlack font-bold'
                    : 'bg-white/5 text-mutedGray hover:text-white'
                )}
              >
                {lang}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-mutedGray">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="rounded border border-white/10 bg-richBlack px-3 py-1 font-mono text-xs text-champagne focus:border-antiqueGold focus:outline-none"
            >
              <option value="updated">Recently Updated</option>
              <option value="stars">Star Count</option>
            </select>
          </div>
        </div>
      </div>

      {/* Error state */}
      {error && (
        <div className="mb-10 rounded-xl border border-red-500/30 bg-red-500/10 p-5 text-warmWhite flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-serif text-sm font-bold text-red-200">GitHub API Notice</h4>
            <p className="text-xs text-red-300/80 mt-1">{error}</p>
            <p className="text-xs text-mutedGray mt-2">
              You can still browse all repositories directly on{' '}
              <a
                href="https://github.com/TONYISFIT?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-antiqueGold underline"
              >
                github.com/TONYISFIT
              </a>
              .
            </p>
          </div>
        </div>
      )}

      {/* Loading Skeletons */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-48 rounded-xl border border-white/10 bg-cardDark/40 p-6 animate-pulse"
            />
          ))}
        </div>
      )}

      {/* Repositories Display */}
      {!loading && (
        <div className="space-y-12">
          {/* Featured Repositories */}
          {featuredRepos.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-4 w-4 text-antiqueGold" />
                <h3 className="font-serif text-xl font-bold text-warmWhite">
                  Key Featured Repositories
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredRepos.map((repo) => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            </div>
          )}

          {/* Other Repositories */}
          {otherRepos.length > 0 && (
            <div>
              <h3 className="font-serif text-xl font-bold text-warmWhite mb-6">
                All Public Repositories ({otherRepos.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherRepos.map((repo) => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            </div>
          )}

          {processedRepos.length === 0 && !loading && (
            <div className="rounded-xl border border-white/10 bg-cardDark/40 p-12 text-center">
              <p className="font-serif text-base font-semibold text-warmWhite">
                No repositories matched your filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLanguage('all');
                }}
                className="mt-4 rounded-lg bg-antiqueGold/15 border border-antiqueGold/30 px-4 py-2 font-mono text-xs text-champagne"
              >
                Clear Search & Filters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Sub-component for individual repo card
const RepoCard: React.FC<{ repo: GitHubRepoItem }> = ({ repo }) => {
  return (
    <div
      className={cn(
        'group flex flex-col justify-between rounded-xl border bg-gradient-to-b from-cardDark via-richBlack to-[#131317] p-5 shadow-luxury-card transition-all hover:border-antiqueGold/50 hover:shadow-gold-glow',
        repo.isFeatured ? 'border-antiqueGold/35' : 'border-white/10'
      )}
    >
      <div>
        {/* Top bar: Name + Link */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-base font-bold text-warmWhite group-hover:text-champagne transition-colors flex items-center gap-1.5 break-all"
          >
            <span>{repo.name}</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 flex-shrink-0" />
          </a>
          <span className="font-mono text-xs rounded border border-white/10 px-1.5 py-0.5 text-mutedGray uppercase flex-shrink-0">
            {repo.visibility}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-mutedGray line-clamp-2 leading-relaxed mb-3 font-sans">
          {repo.description || 'No description provided on GitHub.'}
        </p>

        {/* Honest Note for clarity */}
        {repo.honestNote && (
          <div className="mb-4 rounded border border-antiqueGold/20 bg-antiqueGold/5 p-2.5 text-[11px] text-champagne/90 leading-relaxed font-sans">
            <span className="font-semibold text-antiqueGold font-mono text-xs block uppercase mb-0.5">
              Repository Scope:
            </span>
            {repo.honestNote}
          </div>
        )}

        {/* Topics */}
        {repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {repo.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="rounded border border-white/5 bg-white/5 px-2 py-0.5 font-mono text-xs text-mutedGray"
              >
                #{topic}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer: Language, Stars, Forks, Last Updated */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-mutedGray">
        <div className="flex items-center gap-3">
          {repo.language && (
            <span className="flex items-center gap-1 text-champagne">
              <span className="h-2 w-2 rounded-full bg-antiqueGold" />
              {repo.language}
            </span>
          )}
          <span className="flex items-center gap-1" title="Real GitHub Star Count">
            <Star className="h-3 w-3 text-antiqueGold" />
            <span>{repo.stargazers_count}</span>
          </span>
          <span className="flex items-center gap-1" title="Real GitHub Fork Count">
            <GitFork className="h-3 w-3" />
            <span>{repo.forks_count}</span>
          </span>
        </div>

        <span title={`Updated: ${repo.updated_at}`}>
          {formatDate(repo.updated_at)}
        </span>
      </div>
    </div>
  );
};
