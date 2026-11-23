import React from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profile';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-24 border-t border-antiqueGold/20 bg-gradient-to-b from-midnight via-plum to-[#070B18] text-mutedIndigo transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Positioning */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-antiqueGold/50 bg-plum shadow-gold-glow">
                <span className="font-display text-sm font-bold text-antiqueGold">VA</span>
              </div>
              <span className="font-display text-base font-bold text-warmWhite">
                {profileData.name}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-mutedIndigo font-sans">
              Computer Science & Engineering graduate (fresher) positioning across data analytics, business intelligence, Python automation, databases, and software development.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-antiqueGold/30 bg-antiqueGold/10 px-3 py-1 font-mono text-[11px] text-champagne w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-auroraTeal animate-pulse" />
              <span>{profileData.availabilityStatus}</span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div>
            <h3 className="font-display text-xs font-bold tracking-wider text-champagne uppercase mb-4">
              Explore Pages
            </h3>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link to="/about" className="hover:text-antiqueGold transition-colors">About & Education</Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-antiqueGold transition-colors">Technical Skills</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-antiqueGold transition-colors">Engineering Projects</Link>
              </li>
              <li>
                <Link to="/repositories" className="hover:text-antiqueGold transition-colors">GitHub Repositories</Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-antiqueGold transition-colors">Verified Internships</Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-antiqueGold transition-colors">Certifications</Link>
              </li>
            </ul>
          </div>

          {/* Careers & Portfolio */}
          <div>
            <h3 className="font-display text-xs font-bold tracking-wider text-champagne uppercase mb-4">
              Opportunities & Resumes
            </h3>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link to="/resumes" className="hover:text-antiqueGold transition-colors flex items-center gap-1.5 font-bold text-champagne">
                  <FileText className="h-3.5 w-3.5 text-antiqueGold" />
                  <span>Resume Centre (6 Roles)</span>
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-antiqueGold transition-colors">Roles I Can Contribute To</Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-antiqueGold transition-colors">Academic Milestones</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-antiqueGold transition-colors">Recruiter Enquiry Form</Link>
              </li>
            </ul>
          </div>

          {/* Direct Verified Contact Channels */}
          <div>
            <h3 className="font-display text-xs font-bold tracking-wider text-champagne uppercase mb-4">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={`mailto:${profileData.contact.email}`}
                  aria-label="Send email to Vishwaraj Algude"
                  className="flex items-center gap-2 text-warmWhite hover:text-antiqueGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-antiqueGold rounded transition-colors group"
                >
                  <Mail className="h-4 w-4 text-antiqueGold" />
                  <span>{profileData.contact.email}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profileData.contact.phone.replace(/\s+/g, '')}`}
                  aria-label="Call Vishwaraj Algude"
                  className="flex items-center gap-2 text-warmWhite hover:text-antiqueGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-antiqueGold rounded transition-colors group"
                >
                  <Phone className="h-4 w-4 text-antiqueGold" />
                  <span>{profileData.contact.phoneDisplay}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li className="flex items-center gap-2 text-mutedIndigo font-mono text-[11px]">
                <MapPin className="h-4 w-4 text-antiqueGold/70" />
                <span>{profileData.contact.location}</span>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-plum text-champagne transition-colors hover:border-auroraTeal hover:text-auroraTeal"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-plum text-champagne transition-colors hover:border-antiqueGold hover:text-warmWhite"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-mutedIndigo">
          <p>© {new Date().getFullYear()} Vishwaraj Algude · SMSMPITR / DBATU Lonere.</p>
          <p className="text-center md:text-right">
            Verified Fresher Portfolio · Transparent Academic & Internship Documentation
          </p>
        </div>
      </div>
    </footer>
  );
};
