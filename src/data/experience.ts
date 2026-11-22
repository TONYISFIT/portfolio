import { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'internship-ml',
    role: 'Junior Machine Learning Engineer Intern',
    organization: 'Hi-Tech Computer Solutions',
    location: 'Maharashtra, India',
    period: 'Feb 2026 – Apr 2026',
    type: 'Internship',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Data Quality Validation',
      'Supervised Learning Pipelines',
    ],
    responsibilities: [
      'Analyzed and validated raw client and benchmark datasets utilizing Python (Pandas) to detect anomalies and schema mismatches.',
      'Conducted rigorous data quality checks, identifying missing records, duplicate entries, and categorical inconsistencies.',
      'Resolved data discrepancies across cross-referenced tables prior to training pipeline ingestion.',
      'Implemented robust data preprocessing scripts (scaling, one-hot encoding, and feature normalization) for supervised learning model pipelines.',
      'Collaborated with senior engineers to prepare structured validation reports and verify training split integrity.',
    ],
    learnings: [
      'Understood that real-world machine learning reliability depends overwhelmingly on the rigor of data validation and quality controls.',
      'Gained practical experience diagnosing distribution drift and preventing data leakage across training and test splits.',
      'Developed disciplined code documentation habits and modular script authoring standards.',
    ],
    disclaimer: 'Verified 3-month technical internship program focusing on data preparation and ML pipelines.',
  },
  {
    id: 'internship-python',
    role: 'Junior Python Developer Intern',
    organization: 'Hi-Tech Computer Solutions',
    location: 'Maharashtra, India',
    period: 'Sep 2025 – Nov 2025',
    type: 'Internship',
    technologies: [
      'Python',
      'SQL',
      'Object-Oriented Programming (OOP)',
      'Exception Handling',
      'Data Extraction & Transformation',
    ],
    responsibilities: [
      'Authored automated Python scripts for data extraction from flat files, CSVs, and relational database sources.',
      'Executed data transformation and structural formatting routines adhering to strict schema specifications.',
      'Constructed and validated SQL queries to verify data consistency between extraction sources and target tables.',
      'Architected reusable, modular helper functions applying Object-Oriented Programming (OOP) paradigms.',
      'Integrated defensive programming strategies with structured exception handling (try-except blocks) to prevent pipeline failures.',
    ],
    learnings: [
      'Learned to write clean, maintainable Python code adhering to PEP 8 standards with modular class design.',
      'Mastered SQL data verification techniques for cross-checking pipeline extraction outputs against source records.',
      'Experienced the importance of error logging and failure handling in automated data workflows.',
    ],
    disclaimer: 'Verified 3-month technical internship program focusing on Python scripting, SQL, and data automation.',
  },
];
