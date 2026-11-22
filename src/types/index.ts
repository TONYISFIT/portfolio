export interface IntroductionContent {
  greeting: string;
  education: string;
  technical: string;
  experience: string;
  projects: string;
  certifications: string;
  personal: string;
  shortTermGoal: string;
  longTermGoal: string;
  closing: string;
}

export interface Profile {
  name: string;
  tagline: string;
  headline: string;
  bioHeadline: string;
  summary: string;
  introduction: IntroductionContent;
  education: {
    degree: string;
    field: string;
    institution: string;
    institutionShort: string;
    location: string;
    period: string;
    cgpa: string;
    affiliation: string;
    isAffiliationConfirmed: boolean;
    hsc: {
      percentage: string;
      year: string;
      institution: string;
      location: string;
      label: string;
    };
    ssc: {
      percentage: string;
      year: string;
      institution: string;
      location: string;
      label: string;
    };
  };
  contact: {
    email: string;
    phone: string;
    phoneDisplay: string;
    location: string;
    github: string;
    linkedin: string;
  };
  availabilityStatus: string;
}

export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  tag?: string;
  caption?: string;
  focalPoint?: string;
  orientation: 'landscape' | 'portrait' | 'wide';
  isHero?: boolean;
}

export type SkillLevel = 'Demonstrated through projects' | 'Working knowledge' | 'Currently learning';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  category: string;
  relatedProjectId?: string;
  notes?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export type ProjectStatus = 'Completed' | 'In progress';

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  status: ProjectStatus;
  isFeatured: boolean;
  isFlagship?: boolean;
  shortDesc?: string;
  imageUrl?: string;
  problem: string;
  objective: string;
  technologies: string[];
  keyFeatures: string[];
  methodology: string[];
  githubUrl?: string;
  githubLabel?: string;
  whatWasLearned: string[];
  architectureOrHighlights?: string[];
  isFavorite?: boolean;
  rolesOverview?: string;
}

export interface GitHubRepoItem {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
  visibility: string;
  isFeatured?: boolean;
  honestNote?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Internship';
  technologies: string[];
  responsibilities: string[];
  learnings: string[];
  disclaimer?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  skillsCovered: string[];
}

export type ResumeStatus = 'Available' | 'Awaiting upload';

export interface ResumeItem {
  id: string;
  label: string;
  category: string;
  targetRole: string;
  slug: string;
  filePath?: string; // e.g. /resumes/<slug>.pdf
  uploadedAt: string;
  isPreferred: boolean;
  status: ResumeStatus;
  mappedRole: string;
  fileSize?: string;
  fileName?: string;
  keySkillsHighlighted: string[];
  summaryNote: string;
  pdfDataUri?: string; // Stored in IndexedDB for client uploads
}

export interface CareerRoleItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  demonstratedSkills: string[];
  learnedSkills: string[];
  currentlyDevelopingSkills: string[];
  dependsOnJobDescription: string[];
  relevantProjects: string[];
  relevantInternship: string;
  recommendedResumeId: string;
  githubEvidenceUrls: { label: string; url: string }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Academic' | 'Professional' | 'Technical' | 'Future / Placeholder';
  details: string;
  yearOrStatus: string;
  isPlaceholder?: boolean;
}
