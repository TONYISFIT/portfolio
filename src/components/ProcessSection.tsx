import React from 'react';
import { Search, Compass, Code, CheckCircle, RefreshCw } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Understand the problem and requirements.',
      desc: 'Analyze business needs, data structures, edge cases, and user expectations before writing code.',
      icon: <Search className="h-5 w-5" />,
    },
    {
      num: '02',
      title: 'PLAN',
      subtitle: 'Identify the approach, tools, and structure.',
      desc: 'Architect relational schemas, design component trees, select Python/SQL/React stacks, and define test matrices.',
      icon: <Compass className="h-5 w-5" />,
    },
    {
      num: '03',
      title: 'DEVELOP',
      subtitle: 'Write clean, organized, maintainable code.',
      desc: 'Implement modular functions, clean OOP paradigms, readable SQL transformations, and responsive UI components.',
      icon: <Code className="h-5 w-5" />,
    },
    {
      num: '04',
      title: 'TEST',
      subtitle: 'Validate functionality and identify issues.',
      desc: 'Execute unit tests, automated Selenium suites, API validation checks, and verify data consistency across queries.',
      icon: <CheckCircle className="h-5 w-5" />,
    },
    {
      num: '05',
      title: 'IMPROVE',
      subtitle: 'Refine performance, usability, and implementation.',
      desc: 'Optimize SQL execution plans, refine UX states, handle exceptions gracefully, and document architecture.',
      icon: <RefreshCw className="h-5 w-5" />,
    },
  ];

  return (
    <section id="process" className="py-24 bg-darkBg border-t border-darkBorder relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-crimson font-bold block mb-2">
            04 / HOW I WORK
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-cream">
            From Ideas to Implementation.
          </h2>
          <p className="mt-3 text-sm text-mutedGray max-w-2xl font-sans">
            A disciplined, engineering-first development methodology applied across academic coursework, technical internships, and personal projects.
          </p>
        </div>

        {/* Timeline Grid with Thin Crimson Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/4 left-10 right-10 h-[2px] bg-gradient-to-r from-crimson/20 via-crimson to-crimson/20 z-0" />

          {steps.map((step) => (
            <div
              key={step.num}
              className="relative z-10 rounded-2xl border border-darkBorder bg-darkCard p-6 flex flex-col justify-between transition-all duration-300 hover:border-crimson hover:shadow-crimson-subtle group"
            >
              <div>
                {/* Number & Icon badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-darkBorder bg-darkBg text-crimson group-hover:border-crimson group-hover:bg-crimson group-hover:text-cream transition-all duration-300">
                    {step.icon}
                  </div>
                  <span className="font-mono text-sm font-black text-mutedGray group-hover:text-crimson transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-cream group-hover:text-crimson-bright transition-colors uppercase tracking-wide">
                  {step.title}
                </h3>

                <p className="mt-1 font-mono text-xs text-crimson font-medium">
                  {step.subtitle}
                </p>

                <p className="mt-3 text-xs text-mutedGray font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 font-mono text-[9px] text-mutedGray uppercase tracking-widest">
                STAGE {step.num} // ENG
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
