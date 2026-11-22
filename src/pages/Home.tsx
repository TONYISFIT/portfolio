import React, { useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { MomentsStrip } from '../components/MomentsStrip';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ProcessSection } from '../components/ProcessSection';
import { EducationSection } from '../components/EducationSection';
import { CertificationsSection } from '../components/CertificationsSection';
import { ResumeSection } from '../components/ResumeSection';
import { ContactSection } from '../components/ContactSection';
import { ResumeModal } from '../components/ResumeModal';

interface HomeProps {
  onOpenResume?: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenResume }) => {
  const [internalModalOpen, setInternalModalOpen] = useState(false);

  const handleOpenResume = () => {
    if (onOpenResume) {
      onOpenResume();
    } else {
      setInternalModalOpen(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-darkBg text-cream selection:bg-crimson selection:text-white">
      {/* 01 / HERO SECTION */}
      <HeroSection onOpenResume={handleOpenResume} />

      {/* 02 / ABOUT ME SECTION */}
      <AboutSection />

      {/* 03 / PERSONAL CHRONICLE & LIFESTYLE MOMENTS */}
      <MomentsStrip />

      {/* 04 / SKILLS & TECHNOLOGIES */}
      <SkillsSection />

      {/* 05 / FEATURED PROJECTS (FitVerse First & Most Prominent) */}
      <ProjectsSection />

      {/* 06 / DEVELOPMENT PROCESS */}
      <ProcessSection />

      {/* 07 / EDUCATION TIMELINE */}
      <EducationSection />

      {/* 08 / CERTIFICATIONS */}
      <CertificationsSection />

      {/* 09 / RESUME CALL-TO-ACTION */}
      <ResumeSection onOpenResume={handleOpenResume} />

      {/* 10 / CONTACT & RECRUITER CONNECT */}
      <ContactSection />

      {/* Fallback internal resume modal if not triggered from App root */}
      {!onOpenResume && (
        <ResumeModal
          isOpen={internalModalOpen}
          onClose={() => setInternalModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Home;
