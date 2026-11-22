import React from 'react';
import { FileText, Download, ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  const roles = [
    { title: 'Python Developer', tag: 'Core Python, Automation, Algorithms' },
    { title: 'Data Analyst', tag: 'SQL, Power BI, Advanced Excel, EDA' },
    { title: 'SQL Developer', tag: 'Schema Design, CTEs, Window Functions' },
    { title: 'Business Analyst', tag: 'Requirements, KPI Dashboards, Stakeholders' },
    { title: 'QA / Automation', tag: 'Selenium, PyTest, Test Frameworks' },
    { title: 'Data Scientist', tag: 'Machine Learning, Scikit-learn, Classification' },
  ];

  return (
    <section className="py-24 bg-darkBg border-t border-darkBorder relative overflow-hidden">
      {/* Dramatic Crimson Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-crimson/10 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl border border-darkBorder bg-gradient-to-b from-darkCard to-darkSurface p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-crimson to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-crimson font-bold">
                <Sparkles className="h-3.5 w-3.5" />
                <span>HIRING-READY CANDIDATE</span>
              </div>

              <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-cream leading-[1.05]">
                LET’S MAKE SOMETHING HAPPEN.
              </h2>

              <p className="text-base text-mutedGray max-w-xl font-sans leading-relaxed">
                Explore my technical background, academic foundation, verified skill stacks, and hands-on project implementations tailored for entry-level engineering and analytics positions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenResume}
                  className="group inline-flex items-center gap-3 rounded-xl bg-crimson px-7 py-4 font-mono text-xs uppercase tracking-wider font-bold text-white transition-all duration-300 hover:bg-crimsonLight hover:shadow-crimson-glow"
                >
                  <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>DOWNLOAD MY RESUME</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-darkBorder bg-darkCard px-6 py-4 font-mono text-xs uppercase tracking-wider font-bold text-cream transition-all duration-200 hover:border-crimson hover:text-white"
                >
                  <span>GET IN TOUCH</span>
                </a>
              </div>

              {/* Verification Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-mutedGray">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-crimson" />
                  Fresher Positioning Verified
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-crimson" />
                  6 PDF Resumes Ready
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Role Preview Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-darkBorder bg-darkSurface/90 p-6 sm:p-8 backdrop-blur-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-darkBorder">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-crimson" />
                    <span className="font-display text-sm font-bold uppercase tracking-wider text-cream">
                      Tailored Resumes Available
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase text-mutedGray">
                    PDF FORMAT
                  </span>
                </div>

                <div className="space-y-2.5">
                  {roles.map((r) => (
                    <div
                      key={r.title}
                      onClick={onOpenResume}
                      className="cursor-pointer group flex items-center justify-between p-2.5 rounded-lg border border-darkBorder bg-darkCard/50 hover:border-crimson hover:bg-crimson/5 transition-all duration-200"
                    >
                      <div>
                        <p className="font-display text-xs font-bold text-cream group-hover:text-white">
                          {r.title}
                        </p>
                        <p className="font-mono text-[10px] text-mutedGray group-hover:text-crimson transition-colors">
                          {r.tag}
                        </p>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-mutedGray group-hover:text-crimson transition-transform group-hover:translate-x-0.5" />
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={onOpenResume}
                    className="font-mono text-[11px] text-crimson hover:underline uppercase tracking-wider font-semibold"
                  >
                    View All 9 Specialization Profiles →
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
