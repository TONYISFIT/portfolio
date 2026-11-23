import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';
import { achievementsData } from '../data/achievements';
import { AchievementItem } from '../types';
import {
  Trophy,
  GraduationCap,
  Briefcase,
  Code2,
  Calendar,
  Info,
  Clock,
} from 'lucide-react';

export const Achievements: React.FC = () => {
  const verifiedAchievements = achievementsData.filter((a) => !a.isPlaceholder);
  const placeholderAchievements = achievementsData.filter((a) => a.isPlaceholder);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Academic':
        return <GraduationCap className="h-5 w-5 text-antiqueGold" />;
      case 'Professional':
        return <Briefcase className="h-5 w-5 text-champagne" />;
      case 'Technical':
        return <Code2 className="h-5 w-5 text-antiqueGold" />;
      default:
        return <Clock className="h-5 w-5 text-mutedGray" />;
    }
  };

  return (
    <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <SectionHeader
        badge="Milestone Verification"
        title="Achievements & Academic Milestones"
        subtitle="Chronicle of verified undergraduate achievements, academic excellence, and technical deliveries. Strictly records authentic outcomes; future competitions and awards are preserved as clearly marked editable placeholders."
      />

      {/* Verified Achievements */}
      <div className="mb-16 space-y-6">
        <h3 className="font-serif text-xl font-bold text-warmWhite mb-6 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-antiqueGold" />
          <span>Verified Academic & Engineering Milestones</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {verifiedAchievements.map((item: AchievementItem) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-xl border border-antiqueGold/30 bg-gradient-to-b from-cardDark via-richBlack to-[#131317] p-6 shadow-luxury-card transition-all hover:border-antiqueGold hover:shadow-gold-glow"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="gold">{item.category}</Badge>
                  <span className="font-mono text-xs text-champagne flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-antiqueGold" />
                    {item.yearOrStatus}
                  </span>
                </div>

                <div className="flex items-start gap-3 mt-2">
                  <div className="mt-1 flex-shrink-0">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-warmWhite">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-warmWhite/80 leading-relaxed font-sans">
                      {item.details}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2 font-mono text-[11px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Verified Documentation</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Future / Editable Placeholder Area */}
      <div className="rounded-2xl border border-dashed border-white/20 bg-cardDark/30 p-8 sm:p-10">
        <div className="flex items-start gap-3 mb-6">
          <Info className="h-5 w-5 text-antiqueGold flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-serif text-lg font-bold text-warmWhite">
              Reserved Slots: Future Competitions & Publications
            </h3>
            <p className="text-xs text-mutedGray mt-1 leading-relaxed max-w-2xl font-sans">
              To strictly adhere to integrity guidelines, no unverified prizes or fabricated rankings are listed. Vishwaraj can activate and populate the following placeholder entries as new milestones are completed:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholderAchievements.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-white/10 bg-richBlack/50 p-5 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block rounded border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 font-mono text-xs text-amber-300 uppercase mb-3">
                  {item.yearOrStatus}
                </span>
                <h4 className="font-serif text-sm font-semibold text-warmWhite">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs text-mutedGray leading-relaxed font-sans">
                  {item.details}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[11px] text-antiqueGold/80">
                <span>Status: Awaiting Owner Update</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
