import { CareerRoleItem } from '../types';

export const careerRolesData: CareerRoleItem[] = [
  {
    id: 'role-data-analyst',
    title: 'Data Analyst (Fresher / Junior)',
    subtitle: 'Extracting patterns, building analytical metrics, and communicating empirical insights.',
    description:
      'As a computer science graduate with proven experience writing SQL queries, manipulating DataFrames with Pandas, and designing interactive Power BI dashboards, I can contribute directly to cleaning raw datasets, uncovering customer purchasing behaviors, and generating weekly/monthly executive reports.',
    demonstratedSkills: [
      'SQL querying with JOINs, aggregations, window functions, and CTEs',
      'Data wrangling and exploratory data analysis using Python (Pandas, NumPy)',
      'Data visualization using Matplotlib, Seaborn, and Power BI',
      'Spreadsheet modeling with Excel (PivotTables, XLOOKUP, SUMIFS)',
    ],
    learnedSkills: [
      'RFM customer segmentation methodology',
      'Cohort retention and lifetime value (CLV) calculation principles',
      'Statistical distributions, skewness analysis, and anomaly detection',
    ],
    currentlyDevelopingSkills: [
      'Advanced statistical hypothesis testing and A/B test analysis',
      'Automated scheduled report pipelines via Python scripts',
    ],
    dependsOnJobDescription: [
      'Proprietary data warehouse platforms (Snowflake, BigQuery, Databricks)',
      'Domain-specific business KPIs and telemetry definitions',
    ],
    relevantProjects: ['churn-analytics', 'ecommerce-analytics', 'ipl-analytics'],
    relevantInternship: 'Junior Machine Learning Engineer Intern (Data validation & discrepancy checks at Hi-Tech Computer Solutions)',
    recommendedResumeId: 'resume-data-analyst',
    githubEvidenceUrls: [
      {
        label: 'E-commerce Analytics Repo',
        url: 'https://github.com/TONYISFIT/ecommerce-sales-customer-analytics',
      },
      {
        label: 'SQL Case Studies Repo',
        url: 'https://github.com/TONYISFIT/sql-business-analytics-case-studies',
      },
    ],
  },
  {
    id: 'role-business-analyst',
    title: 'Business Analyst (Entry-Level)',
    subtitle: 'Bridging commercial requirements with technical data structures and KPI reporting.',
    description:
      'Equipped with strong analytical reasoning and stakeholder presentation instincts, I can translate operational business questions into structured database queries, design executive KPI tiles, and synthesize multi-channel sales performance.',
    demonstratedSkills: [
      'Translating business questions into structured SQL queries and reports',
      'Building stakeholder-friendly dashboards in Power BI and Microsoft Excel',
      'Documenting functional requirements and data validation criteria',
    ],
    learnedSkills: [
      'User journey mapping and requirement traceability matrices',
      'Sales cycle analysis, conversion bottlenecks, and return-rate tracking',
    ],
    currentlyDevelopingSkills: [
      'Business process modeling notation (BPMN)',
      'Agile user story estimation and backlog grooming workflows',
    ],
    dependsOnJobDescription: [
      'Enterprise ERP/CRM tooling (Salesforce, SAP, NetSuite)',
      'Specific industry regulatory compliance standards',
    ],
    relevantProjects: ['ecommerce-analytics', 'gympulse'],
    relevantInternship: 'Junior Python Developer Intern (Data verification & extraction at Hi-Tech Computer Solutions)',
    recommendedResumeId: 'resume-business-analyst',
    githubEvidenceUrls: [
      {
        label: 'E-commerce Sales Dashboard',
        url: 'https://github.com/TONYISFIT/ecommerce-sales-customer-analytics',
      },
    ],
  },
  {
    id: 'role-bi-analyst',
    title: 'BI Analyst / Power BI Developer',
    subtitle: 'Architecting dimensional star schemas and building responsive executive dashboards.',
    description:
      'Specialized in building end-to-end business intelligence dashboards, transforming messy relational data via Power Query M scripts, and authoring DAX measures for dynamic time-intelligence and KPI tracking.',
    demonstratedSkills: [
      'Power BI dashboard design, page navigation, and responsive card visuals',
      'DAX measures (CALCULATE, FILTER, ALL, time-intelligence functions)',
      'Power Query ETL transformations, unpivoting, merging, and type casting',
      'Data modeling with star-schema fact and dimension tables',
    ],
    learnedSkills: [
      'Report performance optimization and relationship cardinalities',
      'User-centric dashboard visual hierarchy and color contrast rules',
    ],
    currentlyDevelopingSkills: [
      'Power BI Service workspace administration and scheduled gateway refresh',
      'Row-level security (RLS) configuration in Power BI reports',
    ],
    dependsOnJobDescription: [
      'Enterprise reporting servers and deployment pipelines',
      'Integration with cloud semantic models',
    ],
    relevantProjects: ['ecommerce-analytics', 'ipl-analytics', 'gympulse'],
    relevantInternship: 'Data analysis and extraction workflows across internships at Hi-Tech Computer Solutions',
    recommendedResumeId: 'resume-business-intelligence',
    githubEvidenceUrls: [
      {
        label: 'E-commerce Analytics Repo',
        url: 'https://github.com/TONYISFIT/ecommerce-sales-customer-analytics',
      },
      {
        label: 'GitHub Profile Dashboards',
        url: 'https://github.com/TONYISFIT',
      },
    ],
  },
  {
    id: 'role-associate-data-scientist',
    title: 'Associate Data Scientist / Junior ML Engineer',
    subtitle: 'Structuring predictive workflows, preprocessing features, and explaining model outputs.',
    description:
      'Grounded in supervised learning fundamentals with Scikit-learn and XGBoost. Capable of handling raw dataset cleaning, mitigating class imbalances, comparing cross-validated model candidates, and applying SHAP explainability to prevent black-box opacity.',
    demonstratedSkills: [
      'End-to-end classification pipeline design using Scikit-learn',
      'Feature engineering: scaling, encoding, interaction terms, missing value imputations',
      'Model evaluation: Precision, Recall, F1-Score, Confusion Matrices, ROC-AUC curves',
      'Model interpretability with SHAP summary and waterfall plots',
    ],
    learnedSkills: [
      'Hyperparameter exploration with GridSearchCV and cross-validation splits',
      'Handling class imbalance via stratified sampling and weighting strategies',
      'Deploying lightweight ML inference apps with Streamlit',
    ],
    currentlyDevelopingSkills: [
      'Advanced ensemble architectures and feature selection algorithms',
      'Model serialization, monitoring, and automated retraining pipelines',
    ],
    dependsOnJobDescription: [
      'Deep learning frameworks (PyTorch, TensorFlow)',
      'Production ML serving platforms and cloud deployment infrastructure',
    ],
    relevantProjects: ['churn-analytics'],
    relevantInternship: 'Junior Machine Learning Engineer Intern (Data quality checks & pipeline preprocessing at Hi-Tech Computer Solutions)',
    recommendedResumeId: 'resume-data-scientist',
    githubEvidenceUrls: [
      {
        label: 'Customer Churn & Retention Repo',
        url: 'https://github.com/TONYISFIT/customer-churn-retention-analytics',
      },
    ],
  },
  {
    id: 'role-associate-data-engineer',
    title: 'Associate Data Engineer / SQL Developer',
    subtitle: 'Designing relational schemas, writing complex queries, and automating data extracts.',
    description:
      'Demonstrated competence in relational database design, schema normalization, and writing intricate SQL queries utilizing window functions, subqueries, and Common Table Expressions. Adept at orchestrating automated data ingestion scripts with Python.',
    demonstratedSkills: [
      'Relational database modeling, primary/foreign key design, and normalization (3NF)',
      'Advanced SQL: CTEs (WITH), window functions (ROW_NUMBER, DENSE_RANK, LAG, LEAD)',
      'Automated data extraction and validation scripts in Python',
      'Relational databases: MySQL and PostgreSQL (Supabase)',
    ],
    learnedSkills: [
      'Data reconciliation scripts validating row counts and checksums across sources',
      'Database indexing strategies and query execution plan fundamentals',
    ],
    currentlyDevelopingSkills: [
      'Distributed computing frameworks and columnar databases',
      'Automated workflow orchestrators (Airflow or Prefect)',
    ],
    dependsOnJobDescription: [
      'Cloud data warehouse architectures (Snowflake, Redshift, BigQuery)',
      'Streaming data pipelines (Kafka)',
    ],
    relevantProjects: ['ecommerce-analytics', 'fitverse'],
    relevantInternship: 'Junior Python Developer Intern (Automating SQL extraction & validation at Hi-Tech Computer Solutions)',
    recommendedResumeId: 'resume-data-engineer',
    githubEvidenceUrls: [
      {
        label: 'SQL Business Analytics Studies',
        url: 'https://github.com/TONYISFIT/sql-business-analytics-case-studies',
      },
      {
        label: 'E-commerce Database Analytics',
        url: 'https://github.com/TONYISFIT/ecommerce-sales-customer-analytics',
      },
    ],
  },
  {
    id: 'role-python-developer',
    title: 'Junior Python Developer',
    subtitle: 'Authoring clean, object-oriented scripts, utilities, and backend automation modules.',
    description:
      'Possesses strong command of Python core fundamentals: Object-Oriented Programming (OOP), modular packaging, exception handling, and data processing libraries. Backed by practical internship experience creating automated data extraction and validation utilities.',
    demonstratedSkills: [
      'Python 3 programming with clean OOP design and PEP 8 conventions',
      'Structured exception handling (try-except-finally) and defensive programming',
      'File handling (CSV, JSON, flat files) and relational database connectivity',
      'Scripting for data transformation and batch validation routines',
    ],
    learnedSkills: [
      'Building modular libraries with reusable functions and classes',
      'Automating repetitive data extraction tasks and generating formatted outputs',
    ],
    currentlyDevelopingSkills: [
      'Asynchronous programming with asyncio',
      'FastAPI / Flask microservice backend development',
    ],
    dependsOnJobDescription: [
      'Production WSGI/ASGI web servers and cloud serverless functions',
      'High-throughput message queue integrations',
    ],
    relevantProjects: ['churn-analytics', 'qa-automation'],
    relevantInternship: 'Junior Python Developer Intern (Extraction scripts and OOP utilities at Hi-Tech Computer Solutions)',
    recommendedResumeId: 'resume-python-developer',
    githubEvidenceUrls: [
      {
        label: 'Python Data Analysis Automation Toolkit',
        url: 'https://github.com/TONYISFIT/python-data-analysis-automation-toolkit',
      },
      {
        label: 'Selenium Python Automation Framework',
        url: 'https://github.com/TONYISFIT/selenium-python-automation-framework',
      },
    ],
  },
  {
    id: 'role-software-developer',
    title: 'Software Developer (Frontend / Full-Stack Fresher)',
    subtitle: 'Developing responsive web interfaces, state management, and relational database CRUD.',
    description:
      'Equipped with solid core Computer Science foundations in algorithms, data structures, and modern web application development using React, TypeScript, and PostgreSQL. Experienced in building responsive UI layouts and connecting client state to relational backends.',
    demonstratedSkills: [
      'Modern web development with React, TypeScript, and Tailwind CSS',
      'Relational backend integration with Supabase (PostgreSQL)',
      'Responsive design, mobile-first layouts, and component-driven architecture',
      'Version control collaboration using Git and GitHub',
    ],
    learnedSkills: [
      'Client-side state management, custom React hooks, and form validation',
      'REST API consumption and asynchronous promise handling',
    ],
    currentlyDevelopingSkills: [
      'Server-side rendering (Next.js) and edge computing patterns',
      'End-to-end frontend performance optimization and bundle splitting',
    ],
    dependsOnJobDescription: [
      'Enterprise monorepo build tools and micro-frontend architectures',
      'Specific backend frameworks (Node/Express, Django, Spring Boot)',
    ],
    relevantProjects: ['fitverse'],
    relevantInternship: 'Hands-on programming and system design during B.Tech coursework and technical internships',
    recommendedResumeId: 'resume-software-developer',
    githubEvidenceUrls: [
      {
        label: 'GitHub Profile',
        url: 'https://github.com/TONYISFIT',
      },
    ],
  },
  {
    id: 'role-qa-automation-engineer',
    title: 'QA Automation Engineer / SDET (Fresher)',
    subtitle: 'Designing comprehensive test suites, Page Object Models, and automated CI/CD checks.',
    description:
      'Hands-on expertise engineering automated testing frameworks from scratch using Python, Selenium WebDriver, and PyTest. Proficient in designing test cases across functional, regression, smoke, UI, REST API, and database layers, with CI/CD execution via GitHub Actions.',
    demonstratedSkills: [
      'Page Object Model (POM) architecture in Python',
      'PyTest test framework: fixtures (conftest.py), parameterization, markers, and assertions',
      'Selenium WebDriver: locators (XPath/CSS), synchronization, explicit waits, headless execution',
      'REST API test automation with Postman and Python requests',
      'Database verification assertions against relational tables (MySQL)',
      'Continuous integration setup via GitHub Actions workflows',
    ],
    learnedSkills: [
      'Test-case design across functional, regression, smoke, sanity, UI, API, and database scopes',
      'Defect lifecycle reporting: reproducing steps, severity classification, and root cause analysis',
      'Generating automated HTML execution reports with failure captures',
    ],
    currentlyDevelopingSkills: [
      'Cross-browser parallel test grid execution (Playwright or Selenium Grid)',
      'Performance / load testing with Locust or JMeter',
    ],
    dependsOnJobDescription: [
      'Mobile app test automation (Appium)',
      'Enterprise test management platforms (Jira Xray, Zephyr)',
    ],
    relevantProjects: ['qa-automation'],
    relevantInternship: 'Python scripting, validation checks, and data assertion workflows at Hi-Tech Computer Solutions',
    recommendedResumeId: 'resume-qa-automation',
    githubEvidenceUrls: [
      {
        label: 'Selenium Python Automation Framework',
        url: 'https://github.com/TONYISFIT/selenium-python-automation-framework',
      },
    ],
  },
];
