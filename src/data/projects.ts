import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  // 01: FITVERSE (FIRST AND MOST PROMINENT)
  {
    id: 'fitverse',
    name: 'FitVerse — Personalized Training, Diet & Progress Tracker',
    category: 'Full-Stack Development & PostgreSQL',
    status: 'In progress',
    isFeatured: true,
    isFlagship: true,
    isFavorite: true,
    imageUrl: '/projects/fitverse-dashboard.jpg',
    shortDesc:
      'A fitness management platform that combines workout tracking, diet planning, fitness progress monitoring and personalized activity management into one interactive platform.',
    problem:
      'Fitness enthusiasts, trainers, and gym facility administrators experience fragmented workflows when managing structured workout plans, nutrition goals, daily calorie tracking, and client progress monitoring.',
    objective:
      'A fitness management platform that combines workout tracking, diet planning, fitness progress monitoring and personalized activity management into one interactive platform.',
    technologies: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Supabase',
      'SQL',
      'FastAPI',
      'TypeScript',
    ],
    rolesOverview:
      'Three dedicated operational roles: User (manage fitness goals, access workout plans, track calories, monitor progress), Trainer (manage clients, design plans, track performance), Admin (manage users, trainers, and platform activities).',
    keyFeatures: [
      'Workout and exercise tracking with custom routines',
      'Fitness progress monitoring and body-weight tracking',
      'Diet planning and daily calorie intake logs',
      'Body-weight tracking and historical progression records',
      'Interactive fitness dashboard with real-time analytics',
      'CRUD-based data management and role-based views (User, Trainer, Admin)',
      'Reusable UI components and client-side routing',
    ],
    methodology: [
      'System design defining User, Trainer, and Admin entity-relationship models in PostgreSQL',
      'Implementing authenticated data workflows with Supabase Auth, Row-Level Security, and Storage',
      'Validating workout and biometric telemetry using SQL and Python to analyze progression patterns',
      'Crafting clean, responsive UI with Tailwind CSS optimized for gym-floor mobile and desktop interfaces',
    ],
    whatWasLearned: [
      'End-to-end full-stack web development: frontend-to-backend integration, database normalization, and auth flows',
      'Managing state and multi-role access control across User, Trainer, and Admin user experiences',
      'Integrating PostgreSQL database queries with client-side CRUD interfaces and Python analytics services',
    ],
    architectureOrHighlights: [
      'React.js + Tailwind UI -> Supabase Auth & Storage -> PostgreSQL Relational DB -> Python/FastAPI Microservice',
    ],
    githubUrl: undefined,
    githubLabel: undefined,
  },

  // 02: E-COMMERCE SALES & CUSTOMER ANALYTICS DASHBOARD
  {
    id: 'ecommerce-analytics',
    name: 'E-commerce Sales & Customer Analytics Dashboard',
    category: 'Data Analytics & Business Intelligence',
    status: 'Completed',
    isFeatured: true,
    imageUrl: '/projects/ecommerce-dashboard.jpg',
    shortDesc:
      'End-to-end commercial analytics pipeline utilizing SQL, Excel, Python, and Power BI to analyze business performance, customer RFM cohorts, and revenue growth.',
    problem:
      'Raw transactional logs from online retail stores reside in disparate relational tables, making it difficult for commercial leads to monitor profitability, customer cohort retention, and product category trends.',
    objective:
      'Architect a normalized MySQL analytical database, execute rigorous SQL transformations, and build an interactive Power BI dashboard tracking revenue, customer lifetime value, and retention patterns.',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'SQL',
      'MySQL',
      'Microsoft Excel',
      'Power BI',
      'DAX',
      'Power Query',
    ],
    keyFeatures: [
      'Data cleaning, handling missing values, and preprocessing',
      'Exploratory Data Analysis (EDA) across sales records',
      'Customer segmentation and RFM (Recency, Frequency, Monetary) analysis',
      'Sales and revenue analysis across categories and channels',
      'KPI reporting and visualization (Revenue, Orders, AOV, Cohort retention)',
      'Interactive multi-page business intelligence dashboard in Power BI',
    ],
    methodology: [
      'Structured database design adhering to dimensional star-schema modeling principles',
      'SQL data wrangling: aggregating order histories, calculating repeat purchase intervals, and categorizing returns',
      'DAX measure development: dynamic time-intelligence calculations (YTD, MTD, MoM growth rates)',
      'Visual hierarchy design following user experience best practices for executive decision-makers',
    ],
    whatWasLearned: [
      'Difference between transactional (OLTP) and analytical (OLAP) schemas for business intelligence performance',
      'Constructing robust DAX calculations that handle context transition across multiple related tables',
      'Applying RFM logic to transform static sales logs into actionable customer segmentation insights',
    ],
    architectureOrHighlights: [
      'MySQL Transactional DB -> SQL Window Aggregations -> Power Query ETL -> Star Schema -> Power BI Dashboard',
    ],
    githubUrl: 'https://github.com/TONYISFIT/ecommerce-sales-customer-analytics',
    githubLabel: 'View Repository on GitHub',
  },

  // 03: GYMPULSE
  {
    id: 'gympulse',
    name: 'GymPulse — Fitness Facility Analytics Dashboard',
    category: 'Business Intelligence & Facility Management',
    status: 'Completed',
    isFeatured: true,
    imageUrl: '/projects/gympulse-dashboard.jpg',
    shortDesc:
      'A gym management and fitness analytics project tracking member retention, attendance trends, facility utilization, and subscription renewals.',
    problem:
      'Fitness club operators struggle to track member churn, peak-hour facility congestion, and membership plan renewals when check-in systems and billing records are uncoordinated.',
    objective:
      'Consolidate member attendance logs and subscription records into an analytical model and build an executive Power BI dashboard tracking facility utilization and retention trends.',
    technologies: [
      'Python',
      'SQL',
      'Microsoft Excel',
      'Power BI',
      'Pandas',
      'DAX',
    ],
    keyFeatures: [
      'Membership lifecycle tracking: active members, renewal rates, and churn patterns',
      'Attendance monitoring and peak-hour facility utilization heatmaps',
      'Revenue analysis across monthly, quarterly, and annual subscription tiers',
      'Customer retention analysis and churn rate monitoring',
      'KPI reporting and actionable fitness business insights',
    ],
    methodology: [
      'Extracting and cleaning attendance logs and payment transaction records',
      'Aggregating check-in timestamp data into hourly capacity intervals using SQL GROUP BY',
      'Designing a cohesive Power BI layout with dark luxury styling and accessible contrast',
    ],
    whatWasLearned: [
      'Modeling time-series check-in telemetry for peak operational resource planning',
      'Using advanced Excel formulas to cross-validate data extracts before dashboard ingestion',
    ],
    architectureOrHighlights: [
      'Member Logs -> Python ETL -> SQL Analytical Views -> Power BI Dashboard',
    ],
    githubUrl: 'https://github.com/TONYISFIT',
    githubLabel: 'View on GitHub Profile',
  },

  // 04: IPL ANALYTICS & BUSINESS INTELLIGENCE DASHBOARD
  {
    id: 'ipl-analytics',
    name: 'IPL Analytics & Business Intelligence Dashboard',
    category: 'Sports Analytics & Exploratory Data Analysis',
    status: 'Completed',
    isFeatured: true,
    imageUrl: '/projects/ipl-dashboard.jpg',
    shortDesc:
      'Comprehensive multi-season Indian Premier League analytics dashboard turning ball-by-ball and match telemetry into interactive strategic insights.',
    problem:
      'Cricket tournament datasets span multiple seasons with hundreds of matches, ball-by-ball records, and disparate venue conditions, requiring consolidated analytical exploration to uncover strategic insights.',
    objective:
      'Perform exploratory data analysis and build a multi-season interactive Power BI dashboard evaluating franchise performance trends, toss decision impact, and venue-specific scoring patterns.',
    technologies: [
      'Power BI',
      'DAX',
      'Data Cleaning',
      'Data Analysis',
      'Power Query',
      'Microsoft Excel',
    ],
    keyFeatures: [
      'Multi-season IPL longitudinal match analysis (950+ matches analyzed)',
      'Team performance analysis across home, away, and neutral venues',
      'Venue analysis evaluating average first-innings scores and pitch tendencies',
      'Toss and match outcome analysis evaluating batting first vs. chasing win rates',
      'Player and match performance insights including top run scorers and strike rates',
      'Interactive dashboards with team-specific filters and dynamic DAX measures',
    ],
    methodology: [
      'Data cleaning: resolving player name variations, venue renaming discrepancies, and missing ball telemetry',
      'Dimensional modeling linking match-level summaries with granular ball-by-ball delivery tables',
      'Interactive dashboard design with team filtering, season slicers, and dynamic visual tooltips',
    ],
    whatWasLearned: [
      'Data wrangling techniques for resolving naming inconsistencies across longitudinal datasets',
      'Structuring multi-page analytical dashboards that allow users to transition from tournament summaries to match drill-downs',
    ],
    architectureOrHighlights: [
      'Kaggle Multi-Season Data -> Power Query Normalization -> DAX Measures -> Power BI Visuals',
    ],
    githubUrl: 'https://github.com/TONYISFIT',
    githubLabel: 'View on GitHub Profile',
  },

  // 05: CUSTOMER CHURN PREDICTION AND RETENTION INTELLIGENCE
  {
    id: 'churn-analytics',
    name: 'Customer Churn Prediction and Retention Intelligence',
    category: 'Machine Learning & Predictive Analytics',
    status: 'Completed',
    isFeatured: true,
    imageUrl: '/projects/churn-dashboard.jpg',
    shortDesc:
      'Supervised classification pipeline identifying at-risk subscription customers using Scikit-learn, XGBoost, and SHAP explainability.',
    problem:
      'Customer churn directly erodes recurring business revenue. Subscription businesses often fail to identify high-risk customer segments early enough to deploy targeted retention interventions before cancellation occurs.',
    objective:
      'Develop an end-to-end predictive machine learning workflow to identify at-risk customers, uncover underlying behavioural churn drivers, and deploy an explainable decision dashboard for retention teams.',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'XGBoost',
      'SHAP',
      'SQL',
      'Streamlit',
      'Matplotlib',
      'Seaborn',
    ],
    keyFeatures: [
      'Data profiling and preprocessing pipeline handling categorical encoding and numerical scaling',
      'Comparative evaluation across Logistic Regression, Random Forest, and XGBoost classifiers',
      'Model validation using Precision, Recall, F1-Score, Confusion Matrix, and ROC-AUC curves',
      'SHAP (SHapley Additive exPlanations) integration to make complex model decisions transparent to business stakeholders',
      'Interactive dashboard visualization of customer risk segments and retention actions',
    ],
    methodology: [
      'Exploratory data analysis to understand churn distributions and correlate tenure, monthly charges, and contract types',
      'Feature engineering: derived usage intensity ratios, contract duration categorizations, and service bundle flags',
      'Stratified k-fold cross-validation and hyperparameter tuning using GridSearchCV',
      'Model interpretability: generated SHAP summary and waterfall plots for individual prediction explanations',
    ],
    whatWasLearned: [
      'Balancing precision and recall based on the cost asymmetry between false positives and false negatives',
      'Why tree-based ensembles require careful regularization to avoid overfitting on imbalanced training splits',
      'How SHAP values bridge the gap between technical ML metrics and business stakeholder trust',
    ],
    architectureOrHighlights: [
      'Data Ingestion -> Feature Pipeline -> Model Benchmark -> SHAP Explanation -> Decision Dashboard',
    ],
    githubUrl: 'https://github.com/TONYISFIT/customer-churn-retention-analytics',
    githubLabel: 'View Repository on GitHub',
  },

  // 06: E-COMMERCE QA AUTOMATION FRAMEWORK
  {
    id: 'qa-automation',
    name: 'E-Commerce QA Automation Framework',
    category: 'Automation & Software Testing',
    status: 'Completed',
    isFeatured: true,
    imageUrl: '/projects/qa-dashboard.jpg',
    shortDesc:
      'Production-style automated testing framework utilizing Selenium WebDriver, PyTest, Page Object Model, API validation, and database assertions.',
    problem:
      'Manual regression testing of dynamic e-commerce flows (catalog browsing, cart modifications, checkout steps, API interactions) is slow, prone to human oversight, and delays deployment cycles.',
    objective:
      'Engineer a maintainable, scalable automated test framework using Python, Selenium WebDriver, and PyTest incorporating the Page Object Model, API validation, database assertions, and CI/CD integration.',
    technologies: [
      'Python',
      'Selenium WebDriver',
      'PyTest',
      'SQL',
      'MySQL',
      'REST API',
      'Postman',
      'Git',
      'GitHub Actions',
    ],
    keyFeatures: [
      'Page Object Model (POM) architecture cleanly separating element locators and page actions from test scripts',
      'Comprehensive test coverage encompassing functional, regression, smoke, sanity, UI, API, and database test cases',
      'Data-driven testing with parameterized fixtures and external test-data feeds',
      'REST API integration testing validating status codes, JSON payload schemas, and response latencies',
      'Database assertions verifying that front-end order completions correctly persist state into MySQL tables',
      'Automated HTML test execution reports with failure screenshots and execution logs',
    ],
    methodology: [
      'Requirements analysis and test suite design mapping user journeys into structured test matrices',
      'Implementation of robust explicit waits and dynamic element synchronization to eliminate test flakiness',
      'Defect tracking workflow documenting reproduction steps, expected vs. actual results, and severity levels',
      'CI/CD workflow configuration: containerized headless Chrome browser execution in GitHub Actions runner',
    ],
    whatWasLearned: [
      'How to design decoupled Page Objects that withstand frequent UI redesigns without breaking test suites',
      'Conducting three-tier test verification: UI action -> API call validation -> backend database assertion',
      'Automating headless test runs within GitHub Actions CI/CD workflows',
    ],
    architectureOrHighlights: [
      'PyTest Runner -> Page Object Model (POM) -> Selenium Chrome -> REST API Requests -> MySQL DB Verification -> GitHub Actions CI',
    ],
    githubUrl: 'https://github.com/TONYISFIT/selenium-python-automation-framework',
    githubLabel: 'View Repository on GitHub',
  },
];
