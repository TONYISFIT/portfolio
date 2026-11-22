import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { skillsCategoriesData } from '../data/skills';
import { SkillLevel, SkillItem } from '../types';
import {
  Search,
  Filter,
  CheckCircle,
  BookOpen,
  GraduationCap,
  ExternalLink,
  Code2,
  Database,
  BarChart3,
  Cpu,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { cn } from '../lib/utils';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Icon mapping for categories
  const categoryIcons: Record<string, React.ReactNode> = {
    programming: <Code2 className="h-4 w-4" />,
    'data-analytics': <BarChart3 className="h-4 w-4" />,
    databases: <Database className="h-4 w-4" />,
    'business-intelligence': <BarChart3 className="h-4 w-4" />,
    'machine-learning': <Cpu className="h-4 w-4" />,
    'automation-testing': <ShieldCheck className="h-4 w-4" />,
    tools: <Wrench className="h-4 w-4" />,
  };

  // Level badge styling
  const getLevelBadge = (level: SkillLevel) => {
    switch (level) {
      case 'Demonstrated through projects':
        return (
          <span className="inline-flex items-center gap-1 rounded-full border border-antiqueGold/40 bg-antiqueGold/10 px-2.5 py-0.5 text-[11px] font-mono font-medium text-antiqueGold">
            <CheckCircle className="h-3 w-3 text-antiqueGold" />
            <span>Demonstrated in Projects</span>
          </span>
        );
      case 'Working knowledge':
        return (
          <span className="inline-flex items-center gap-1 rounded-full border border-champagne/30 bg-champagne/10 px-2.5 py-0.5 text-[11px] font-mono font-medium text-champagne">
            <BookOpen className="h-3 w-3 text-champagne" />
            <span>Working Knowledge</span>
          </span>
        );
      case 'Currently learning':
        return (
          <span className="inline-flex items-center gap-1 rounded-full border border-sky-400/30 bg-sky-400/10 px-2.5 py-0.5 text-[11px] font-mono font-medium text-sky-300">
            <GraduationCap className="h-3 w-3 text-sky-400" />
            <span>Currently Learning</span>
          </span>
        );
    }
  };

  // Filter skills
  const filteredCategories = skillsCategoriesData
    .filter((cat) => (selectedCategory === 'all' ? true : cat.id === selectedCategory))
    .map((cat) => {
      const filteredSkills = cat.skills.filter((skill) => {
        const matchesLevel = selectedLevel === 'all' || skill.level === selectedLevel;
        const matchesSearch =
          searchQuery.trim() === '' ||
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (skill.notes && skill.notes.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesLevel && matchesSearch;
      });
      return { ...cat, skills: filteredSkills };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <SectionHeader
        badge="Verified Competencies"
        title="Technical Skills & Competency Matrix"
        subtitle="Transparent evaluation of technical capabilities. Every skill is classified by demonstrated project usage, working knowledge, or active learning. No arbitrary percentage bars."
      />

      {/* Filter and Search Bar */}
      <div className="mb-10 rounded-xl border border-white/10 bg-cardDark/70 p-4 sm:p-6 backdrop-blur-md space-y-4">
        {/* Top row: Search input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-mutedGray" />
          <input
            type="text"
            placeholder="Search skills, libraries, frameworks (e.g., Python, SQL, DAX, Selenium, SHAP)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-richBlack/60 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-warmWhite placeholder:text-mutedGray/60 focus:border-antiqueGold focus:outline-none focus:ring-1 focus:ring-antiqueGold"
          />
        </div>

        {/* Bottom row: Category Tabs & Level Filter */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-2 border-t border-white/5">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setSelectedCategory('all')}
              className={cn(
                'rounded-lg px-3 py-1.5 text-xs font-mono transition-colors',
                selectedCategory === 'all'
                  ? 'bg-antiqueGold text-richBlack font-bold'
                  : 'bg-white/5 text-mutedGray hover:text-champagne hover:bg-white/10'
              )}
            >
              All Categories
            </button>
            {skillsCategoriesData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-mono transition-colors',
                  selectedCategory === cat.id
                    ? 'bg-antiqueGold text-richBlack font-bold'
                    : 'bg-white/5 text-mutedGray hover:text-champagne hover:bg-white/10'
                )}
              >
                {categoryIcons[cat.id]}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Level Filter Dropdown */}
          <div className="flex items-center gap-2">
            <Filter className="h-3.5 w-3.5 text-mutedGray" />
            <span className="text-xs font-mono text-mutedGray">Status:</span>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="rounded-lg border border-white/10 bg-richBlack px-3 py-1.5 text-xs font-mono text-champagne focus:border-antiqueGold focus:outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="Demonstrated through projects">Demonstrated in Projects</option>
              <option value="Working knowledge">Working Knowledge</option>
              <option value="Currently learning">Currently Learning</option>
            </select>
          </div>
        </div>
      </div>

      {/* Skills Grid by Category */}
      {filteredCategories.length > 0 ? (
        <div className="space-y-12">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="space-y-4">
              <div className="flex items-center justify-between border-b border-antiqueGold/20 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-antiqueGold/40 bg-antiqueGold/10 text-antiqueGold">
                    {categoryIcons[cat.id]}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-warmWhite">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-mutedGray">{cat.description}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-champagne/80">
                  {cat.skills.length} {cat.skills.length === 1 ? 'skill' : 'skills'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill: SkillItem) => (
                  <div
                    key={skill.name}
                    className="flex flex-col justify-between rounded-xl border border-white/10 bg-cardDark/50 p-4 transition-all hover:border-antiqueGold/40 hover:bg-cardDark/80"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-serif text-sm font-bold text-warmWhite">
                          {skill.name}
                        </h4>
                        {getLevelBadge(skill.level)}
                      </div>

                      {skill.notes && (
                        <p className="text-xs leading-relaxed text-mutedGray/90 font-sans mt-2">
                          {skill.notes}
                        </p>
                      )}
                    </div>

                    {/* Linked project evidence */}
                    {skill.relatedProjectId && (
                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                        <span className="font-mono text-[10px] text-antiqueGold/80 uppercase tracking-wider">
                          Project Evidence:
                        </span>
                        <Link
                          to={`/projects#${skill.relatedProjectId}`}
                          className="inline-flex items-center gap-1 font-mono text-[11px] text-champagne hover:text-antiqueGold hover:underline"
                        >
                          <span>View Project</span>
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-white/10 bg-cardDark/40 p-12 text-center">
          <p className="font-serif text-base font-semibold text-warmWhite">
            No matching skills found
          </p>
          <p className="text-xs text-mutedGray mt-1">
            Try adjusting your search query or reset the category/status filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedLevel('all');
            }}
            className="mt-4 rounded-lg bg-antiqueGold/15 border border-antiqueGold/30 px-4 py-2 font-mono text-xs text-champagne hover:bg-antiqueGold hover:text-richBlack transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
