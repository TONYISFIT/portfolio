import React, { useState } from 'react';
import {
  Code2,
  Database,
  BarChart3,
  Cpu,
  Layers,
  Wrench,
  CheckCircle,
} from 'lucide-react';
import { cn } from '../lib/utils';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'ALL SKILLS' },
    { id: 'programming', name: 'PROGRAMMING' },
    { id: 'database', name: 'DATABASE' },
    { id: 'python-eco', name: 'PYTHON ECOSYSTEM' },
    { id: 'analytics', name: 'DATA ANALYTICS' },
    { id: 'development', name: 'DEVELOPMENT' },
    { id: 'tools', name: 'TOOLS' },
  ];

  const skills = [
    // PROGRAMMING
    { name: 'Python', category: 'programming', desc: 'Core OOP, scripting, data wrangling & testing' },
    { name: 'JavaScript', category: 'programming', desc: 'ES6+, DOM, asynchronous requests, React logic' },
    { name: 'HTML & CSS', category: 'programming', desc: 'Semantic layouts, responsive styling, Flexbox/Grid' },
    { name: 'Data Structures & Algorithms', category: 'programming', desc: 'Arrays, lists, trees, sorting, searching algorithms' },
    { name: 'Object-Oriented Programming', category: 'programming', desc: 'Classes, inheritance, encapsulation in Python' },
    { name: 'Exception Handling', category: 'programming', desc: 'Defensive programming with try-except-finally blocks' },

    // DATABASE
    { name: 'SQL', category: 'database', desc: 'Complex querying, joins, aggregations, data integrity' },
    { name: 'MySQL', category: 'database', desc: 'Relational database schema design, indexing, foreign keys' },
    { name: 'PostgreSQL', category: 'database', desc: 'Supabase relational backend, constraints, relational views' },
    { name: 'CTEs & Window Functions', category: 'database', desc: 'ROW_NUMBER, RANK, LAG, LEAD, modular subqueries' },

    // PYTHON ECOSYSTEM
    { name: 'Pandas', category: 'python-eco', desc: 'DataFrames, merging, grouping, feature engineering' },
    { name: 'NumPy', category: 'python-eco', desc: 'Vectorized mathematical operations, array transforms' },
    { name: 'Matplotlib', category: 'python-eco', desc: 'Multi-axis statistical plotting & distribution graphs' },
    { name: 'Seaborn', category: 'python-eco', desc: 'Correlation heatmaps, pairplots, category distributions' },

    // DATA ANALYTICS
    { name: 'Data Cleaning', category: 'analytics', desc: 'Null value imputation, deduplication, type casting' },
    { name: 'Data Wrangling', category: 'analytics', desc: 'Reshaping, melting, pivoting, cross-table transforms' },
    { name: 'Exploratory Data Analysis', category: 'analytics', desc: 'Distribution analysis, skewness, anomaly detection' },
    { name: 'Statistical Analysis', category: 'analytics', desc: 'Descriptive metrics, standard deviation, interquartile ranges' },
    { name: 'Power BI', category: 'analytics', desc: 'Star-schema modeling, DAX measures, interactive dashboards' },
    { name: 'Advanced Excel', category: 'analytics', desc: 'PivotTables, XLOOKUP, VLOOKUP, SUMIFS, COUNTIFS' },

    // DEVELOPMENT
    { name: 'React.js', category: 'development', desc: 'Hooks, component architecture, state management' },
    { name: 'Responsive Web Design', category: 'development', desc: 'Mobile-first fluid layouts with Tailwind CSS' },
    { name: 'REST API Fundamentals', category: 'development', desc: 'HTTP verbs, JSON payloads, endpoint validation' },

    // TOOLS
    { name: 'Git', category: 'tools', desc: 'Branching, committing, staging, conflict resolution' },
    { name: 'GitHub', category: 'tools', desc: 'Remote repositories, pull requests, GitHub Actions CI' },
    { name: 'VS Code', category: 'tools', desc: 'Primary IDE for Python, TypeScript & web development' },
    { name: 'Jupyter Notebook', category: 'tools', desc: 'Interactive data analysis & exploratory workflows' },
  ];

  const filteredSkills = skills.filter((s) => activeCategory === 'all' || s.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-darkBg border-t border-darkBorder relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-crimson font-bold block mb-2">
            02 / TECH STACK
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-cream">
            Tools I Work With.
          </h2>
          <p className="mt-3 text-sm text-mutedGray max-w-2xl font-sans">
            Categorized technical capabilities backed by real undergraduate coursework, dual internships, and practical engineering projects.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="mb-10 flex flex-wrap gap-2 border-b border-darkBorder pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'rounded-lg px-3.5 py-1.5 font-mono text-xs tracking-wider transition-all duration-200',
                activeCategory === cat.id
                  ? 'bg-crimson text-cream font-bold shadow-crimson-subtle'
                  : 'bg-darkCard text-mutedGray hover:text-cream hover:bg-darkSurface border border-darkBorder'
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Minimal Technical Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-xl border border-darkBorder bg-darkCard/80 p-5 transition-all duration-300 hover:border-crimson hover:bg-darkCard hover:shadow-crimson-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-display text-sm font-bold text-cream group-hover:text-crimson-bright transition-colors">
                    {skill.name}
                  </h3>
                  <span className="h-1.5 w-1.5 rounded-full bg-darkBorder group-hover:bg-crimson transition-colors" />
                </div>
                <p className="text-xs text-mutedGray font-sans leading-relaxed">
                  {skill.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-xs text-mutedGray">
                <span className="uppercase text-crimson/80">{skill.category}</span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-crimson" />
                  <span>Demonstrated</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
