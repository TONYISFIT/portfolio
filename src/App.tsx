import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { FooterSection } from './components/FooterSection';
import { FilmGrain } from './components/FilmGrain';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { ClickEffects } from './components/ClickEffects';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ResumeModal } from './components/ResumeModal';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Repositories } from './pages/Repositories';
import { Experience } from './pages/Experience';
import { Certifications } from './pages/Certifications';
import { ResumeCentre } from './pages/ResumeCentre';
import { Career } from './pages/Career';
import { Achievements } from './pages/Achievements';
import { Contact } from './pages/Contact';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, [pathname, hash]);

  return null;
}

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-darkBg text-cream selection:bg-crimson selection:text-white transition-colors duration-300 font-sans">
      {/* 01 / CINEMATIC PRELOADER */}
      {!isPreloaded && <Preloader onComplete={() => setIsPreloaded(true)} />}

      {/* Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Desktop Custom Precision Cursor */}
      <CustomCursor />

      {/* Tactile Click Bursts */}
      <ClickEffects />

      {/* Editorial Vignette & Grain */}
      <FilmGrain />

      {/* Smooth Route & Anchor Scroll Restoration */}
      <ScrollToTop />

      {/* 02 / GLOBAL FLOATING NAVIGATION */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onOpenResume={() => setResumeModalOpen(true)} />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/resumes" element={<ResumeCentre />} />
          <Route path="/career" element={<Career />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home onOpenResume={() => setResumeModalOpen(true)} />} />
        </Routes>
      </main>

      {/* 12 / EDITORIAL FOOTER */}
      <FooterSection />

      {/* GLOBAL 9-ROLE RESUME MODAL */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
