import fs from 'fs';
import path from 'path';

// Helper to create a single-page valid PDF with text streams
function createPdf(title, sections) {
  // Page size: Letter 612 x 792 pt
  let textStream = '';
  let y = 745;
  const left = 45;
  const right = 567;

  // Header: Name
  textStream += `BT /F1 16 Tf ${left} ${y} Td (${title}) Tj ET\n`;
  y -= 14;

  // Contact line
  const contact = 'Akluj, Maharashtra, India | +91 7770052955 | vishualgude@gmail.com | LinkedIn | GitHub';
  textStream += `BT /F2 8.5 Tf ${left} ${y} Td (${contact}) Tj ET\n`;
  y -= 14;

  // Divider line
  textStream += `0.2 w ${left} ${y} m ${right} ${y} l S\n`;
  y -= 14;

  for (const sec of sections) {
    if (y < 60) break;
    // Section Title
    textStream += `BT /F1 10.5 Tf ${left} ${y} Td (${sec.title}) Tj ET\n`;
    y -= 4;
    textStream += `0.2 w ${left} ${y} m ${right} ${y} l S\n`;
    y -= 11;

    // Items
    for (const item of sec.items) {
      if (y < 50) break;
      if (item.type === 'bold-line') {
        textStream += `BT /F1 9 Tf ${left} ${y} Td (${item.text}) Tj ET\n`;
        y -= 11;
      } else if (item.type === 'bullet') {
        // Bullet point
        const bulletText = `\\(bullet\\) ${item.text.replace(/[()]/g, '\\$&')}`;
        textStream += `BT /F2 8.5 Tf ${left + 8} ${y} Td (${bulletText}) Tj ET\n`;
        y -= 11;
      } else if (item.type === 'paragraph') {
        const pText = item.text.replace(/[()]/g, '\\$&');
        textStream += `BT /F2 8.5 Tf ${left} ${y} Td (${pText}) Tj ET\n`;
        y -= 11;
      }
    }
    y -= 6;
  }

  const streamLength = Buffer.byteLength(textStream, 'utf8');

  // Build PDF structure
  const pdfBody = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
6 0 obj
<< /Length ${streamLength} >>
stream
${textStream}endstream
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000325 00000 n 
0000000401 00000 n 
trailer
<< /Size 7 /Root 1 0 R >>
startxref
${500 + streamLength}
%%EOF`;

  return pdfBody;
}

const resumes = [
  {
    filename: 'data-analyst.pdf',
    title: 'VISHWARAJ ALGUDE — DATA ANALYST',
    sections: [
      {
        title: 'PROFESSIONAL SUMMARY',
        items: [
          { type: 'paragraph', text: 'Computer Science & Engineering graduate (CGPA 7.91) with hands-on experience in SQL, Python, Excel and Power BI.' },
          { type: 'paragraph', text: 'Skilled in data analysis, data cleaning, EDA, data validation, KPI reporting and interactive dashboard development.' },
        ],
      },
      {
        title: 'TECHNICAL SKILLS',
        items: [
          { type: 'bullet', text: 'Programming & Data Analysis: Python (Pandas, NumPy, Matplotlib, Seaborn), EDA, Data Cleaning, Data Wrangling' },
          { type: 'bullet', text: 'SQL & Databases: SQL, MySQL, PostgreSQL, Joins, Subqueries, CTEs, Window Functions, Aggregations' },
          { type: 'bullet', text: 'BI & Visualization: Power BI (Power Query, DAX, Data Modeling), Tableau, KPI Dashboards, Data Visualization' },
          { type: 'bullet', text: 'Excel: Advanced Excel, PivotTables, Power Query, XLOOKUP, VLOOKUP, SUMIFS, COUNTIFS, Data Cleaning' },
        ],
      },
      {
        title: 'KEY PROJECTS',
        items: [
          { type: 'bold-line', text: 'E-commerce Sales & Customer Analytics Dashboard | SQL, MySQL, Python, Pandas, Excel, Power BI' },
          { type: 'bullet', text: 'Built end-to-end analytics solution across Customers, Orders, Products, and Payments to generate KPI reports.' },
          { type: 'bullet', text: 'Performed RFM segmentation, customer retention, repeat-purchase, and CLV analysis.' },
          { type: 'bold-line', text: 'GymPulse — End-to-End Gym Analytics Pipeline | Python, Pandas, SQL, Excel, Power BI' },
          { type: 'bullet', text: 'Extracted membership, attendance and revenue data; cleaned and validated records using Pandas.' },
          { type: 'bold-line', text: 'IPL Analytics Dashboard | Power BI, DAX, Data Cleaning, EDA' },
          { type: 'bullet', text: 'Multi-season IPL analytics measuring toss impact, venue scoring trends, and match performance.' },
        ],
      },
      {
        title: 'WORK EXPERIENCE',
        items: [
          { type: 'bold-line', text: 'Junior Machine Learning Engineer Intern | Hi-Tech Computer Solutions (Feb 2026 - Apr 2026)' },
          { type: 'bullet', text: 'Performed data cleaning, validation and quality checks on raw datasets using Python (Pandas).' },
          { type: 'bold-line', text: 'Junior Python Developer Intern | Hi-Tech Computer Solutions (Sep 2025 - Nov 2025)' },
          { type: 'bullet', text: 'Authored Python scripts for data extraction, transformation, validation and data handling.' },
        ],
      },
      {
        title: 'EDUCATION',
        items: [
          { type: 'bold-line', text: 'B.Tech, Computer Science & Engineering | SMSMPITR, Akluj (DBATU Lonere) 2022 - 2026 | CGPA: 7.91' },
          { type: 'bullet', text: 'Higher Secondary Certificate (HSC) | MSMP, Yashwantnagar, Akluj | 76.83% (2022)' },
          { type: 'bullet', text: 'Secondary School Certificate (SSC) | JSPM, Sarati | 86.60% (2020)' },
        ],
      },
    ],
  },
  {
    filename: 'business-analyst.pdf',
    title: 'VISHWARAJ ALGUDE — BUSINESS ANALYST',
    sections: [
      {
        title: 'PROFESSIONAL SUMMARY',
        items: [
          { type: 'paragraph', text: 'Computer Science & Engineering graduate (CGPA 7.91) with hands-on experience in SQL, Excel, Python and Power BI.' },
          { type: 'paragraph', text: 'Strong foundation in business analysis, KPI reporting, and translating findings into actionable business insights.' },
        ],
      },
      {
        title: 'TECHNICAL SKILLS',
        items: [
          { type: 'bullet', text: 'Business Analysis: KPI Analysis, Process Analysis, Data-Driven Decision Making, Business Reporting' },
          { type: 'bullet', text: 'Data Analysis & SQL: SQL, MySQL, PostgreSQL, Data Cleaning, Data Wrangling, EDA, Joins, Subqueries, CTEs' },
          { type: 'bullet', text: 'BI & Reporting: Power BI (Power Query, DAX), Tableau, KPI Dashboards, Interactive Dashboards' },
          { type: 'bullet', text: 'Excel: Advanced Excel, PivotTables, XLOOKUP, VLOOKUP, SUMIFS, COUNTIFS, Power Query' },
        ],
      },
      {
        title: 'KEY PROJECTS',
        items: [
          { type: 'bold-line', text: 'GymPulse — Business & Operational Analytics | SQL, Excel, Power BI, Python' },
          { type: 'bullet', text: 'Analyzed membership, attendance and revenue data to identify business trends and retention drivers.' },
          { type: 'bullet', text: 'Developed Power BI dashboard with KPIs for active members, churn rate, and attendance trends.' },
          { type: 'bold-line', text: 'FitVerse — Data-Driven Fitness Platform | Python, PostgreSQL (Supabase), SQL' },
          { type: 'bullet', text: 'Queried and validated workout and biometric datasets to analyze progress and trainer metrics.' },
        ],
      },
      {
        title: 'EDUCATION',
        items: [
          { type: 'bold-line', text: 'B.Tech, Computer Science & Engineering | SMSMPITR, Akluj (DBATU Lonere) 2022 - 2026 | CGPA: 7.91' },
          { type: 'bullet', text: 'HSC: 76.83% (2022) | SSC: 86.60% (2020)' },
        ],
      },
    ],
  },
  {
    filename: 'data-scientist.pdf',
    title: 'VISHWARAJ ALGUDE — DATA SCIENTIST',
    sections: [
      {
        title: 'PROFESSIONAL SUMMARY',
        items: [
          { type: 'paragraph', text: 'Computer Science & Engineering graduate (CGPA 7.91) specializing in Python, Scikit-learn, XGBoost, and SHAP.' },
          { type: 'paragraph', text: 'Hands-on experience developing supervised learning classification pipelines, model evaluation, and explainability.' },
        ],
      },
      {
        title: 'TECHNICAL SKILLS',
        items: [
          { type: 'bullet', text: 'Machine Learning: Scikit-learn, Supervised Learning, Regression, Classification, Model Evaluation, XGBoost, SHAP' },
          { type: 'bullet', text: 'Data Science: Python, Pandas, NumPy, Matplotlib, Seaborn, Feature Engineering, EDA' },
          { type: 'bullet', text: 'Databases: SQL, MySQL, PostgreSQL, Query Optimization, Data Validation' },
        ],
      },
      {
        title: 'KEY PROJECTS',
        items: [
          { type: 'bold-line', text: 'Customer Churn Prediction & Retention Intelligence | Scikit-learn, XGBoost, SHAP, Streamlit' },
          { type: 'bullet', text: 'Built end-to-end churn prediction comparing Logistic Regression, Random Forest, and XGBoost.' },
          { type: 'bullet', text: 'Implemented SHAP explainability for global and customer-level feature attribution.' },
        ],
      },
      {
        title: 'EDUCATION & INTERNSHIPS',
        items: [
          { type: 'bold-line', text: 'Junior ML Engineer Intern | Hi-Tech Computer Solutions (Feb 2026 - Apr 2026)' },
          { type: 'bold-line', text: 'B.Tech CSE | SMSMPITR, Akluj (DBATU Lonere) 2022 - 2026 | CGPA: 7.91' },
        ],
      },
    ],
  },
  {
    filename: 'python-developer.pdf',
    title: 'VISHWARAJ ALGUDE — PYTHON DEVELOPER',
    sections: [
      {
        title: 'PROFESSIONAL SUMMARY',
        items: [
          { type: 'paragraph', text: 'Computer Science & Engineering graduate with hands-on experience in Python scripting, OOP, and data pipelines.' },
          { type: 'paragraph', text: 'Experienced through 3-month Python Developer internship developing data extraction and validation scripts.' },
        ],
      },
      {
        title: 'TECHNICAL SKILLS',
        items: [
          { type: 'bullet', text: 'Python 3: OOP, Exception Handling, Scripting, Reusable Modules, Data Transformation' },
          { type: 'bullet', text: 'Libraries & Tools: Pandas, NumPy, Git/GitHub, Jupyter Notebook, VS Code' },
          { type: 'bullet', text: 'Databases: SQL, MySQL, PostgreSQL, CRUD Validation, Joins, Aggregations' },
        ],
      },
      {
        title: 'EXPERIENCE & PROJECTS',
        items: [
          { type: 'bold-line', text: 'Junior Python Developer Intern | Hi-Tech Computer Solutions (Sep 2025 - Nov 2025)' },
          { type: 'bullet', text: 'Developed automated Python scripts for data extraction, transformation, and database verification.' },
          { type: 'bold-line', text: 'Selenium QA Automation Suite & Analytics Pipeline | Python, PyTest, SQL' },
        ],
      },
      {
        title: 'EDUCATION',
        items: [
          { type: 'bold-line', text: 'B.Tech CSE | SMSMPITR, Akluj (DBATU Lonere) 2022 - 2026 | CGPA: 7.91' },
        ],
      },
    ],
  },
  {
    filename: 'qa-automation.pdf',
    title: 'VISHWARAJ ALGUDE — QA AUTOMATION ENGINEER',
    sections: [
      {
        title: 'PROFESSIONAL SUMMARY',
        items: [
          { type: 'paragraph', text: 'Computer Science & Engineering graduate skilled in automated test framework engineering, PyTest, and Selenium.' },
          { type: 'paragraph', text: 'Proficient in Page Object Model (POM), functional/regression testing, API testing, and database assertions.' },
        ],
      },
      {
        title: 'TECHNICAL SKILLS',
        items: [
          { type: 'bullet', text: 'Test Automation: Selenium WebDriver, PyTest, Page Object Model (POM), Explicit Waits, Test Parameterization' },
          { type: 'bullet', text: 'API & DB Testing: REST API, Postman, SQL, MySQL, Database Validation Queries' },
          { type: 'bullet', text: 'CI/CD & Tools: Git, GitHub Actions, HTML Reporting, Defect Tracking' },
        ],
      },
      {
        title: 'KEY PROJECTS',
        items: [
          { type: 'bold-line', text: 'E-Commerce QA & Test Automation Framework | Python, Selenium, PyTest, POM, CI/CD' },
          { type: 'bullet', text: 'Automated test suite covering login, search, cart, checkout, payment, and database verification.' },
          { type: 'bold-line', text: 'FitVerse Platform Data Validation | Python, PostgreSQL, SQL' },
        ],
      },
      {
        title: 'EDUCATION',
        items: [
          { type: 'bold-line', text: 'B.Tech CSE | SMSMPITR, Akluj (DBATU Lonere) 2022 - 2026 | CGPA: 7.91' },
        ],
      },
    ],
  },
  {
    filename: 'sql-developer.pdf',
    title: 'VISHWARAJ ALGUDE — ASSOCIATE DATA ENGINEER / SQL DEVELOPER',
    sections: [
      {
        title: 'PROFESSIONAL SUMMARY',
        items: [
          { type: 'paragraph', text: 'Computer Science & Engineering graduate specializing in relational database modeling, SQL, MySQL, and PostgreSQL.' },
          { type: 'paragraph', text: 'Proficient in complex queries, window functions, CTEs, schema normalization, and Python data pipelines.' },
        ],
      },
      {
        title: 'TECHNICAL SKILLS',
        items: [
          { type: 'bullet', text: 'Database & SQL: MySQL, PostgreSQL, CTEs, Window Functions, Joins, Aggregations, GROUP BY, Indexing' },
          { type: 'bullet', text: 'Database Concepts: Normalization (3NF), Primary/Foreign Keys, Constraints, Views, CRUD' },
          { type: 'bullet', text: 'Tools: Supabase, Git, VS Code, Excel, Python (Pandas, NumPy)' },
        ],
      },
      {
        title: 'KEY PROJECTS',
        items: [
          { type: 'bold-line', text: 'FitVerse Fitness Management Platform | PostgreSQL (Supabase), SQL, Python, React' },
          { type: 'bullet', text: 'Designed relational schemas and analytical views for client progress and multi-role operations.' },
          { type: 'bold-line', text: 'GymPulse — Gym Management & Database Analytics | SQL, MySQL, Python' },
          { type: 'bullet', text: 'Wrote complex analytical queries using CTEs, window functions, and case statements.' },
        ],
      },
      {
        title: 'EDUCATION',
        items: [
          { type: 'bold-line', text: 'B.Tech CSE | SMSMPITR, Akluj (DBATU Lonere) 2022 - 2026 | CGPA: 7.91' },
        ],
      },
    ],
  },
];

const outDir = path.resolve('public/resumes');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

for (const r of resumes) {
  const filePath = path.join(outDir, r.filename);
  const content = createPdf(r.title, r.sections);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Generated: ${filePath}`);
}
