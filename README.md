# Vishwaraj Algude — Personal Portfolio Website

A cinematic, responsive developer portfolio website designed for **Vishwaraj Algude**, Computer Science and Engineering graduate (Class of 2026) from SMSMPITR, Akluj, affiliated to Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere.

Built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Local Development Server
```bash
npm run dev
```
Opens locally at `http://localhost:5173/`.

### 3. Production Build
```bash
npm run build
```
Typechecks and compiles production-ready static assets to the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```
Serves the compiled `dist/` bundle locally on `http://localhost:5173/`.

---

## 🌐 Deploy to Vercel (Hobby Plan - Free)

1. Push this repository to your GitHub account (`https://github.com/TONYISFIT/portfolio`).
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Keep the default settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./` (or `portfolio` if deploying from monorepo)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**.

SPA routing is handled automatically via `vercel.json` (`rewrites: [ { "source": "/(.*)", "destination": "/" } ]`).

---

## 📁 Key Directories

- `src/components/`: Reusable modular sections and UI elements.
- `src/pages/`: Route pages (Home, About, Skills, Projects, Repositories, Experience, Certifications, Resumes, Career, Achievements, Contact).
- `src/data/`: Structured data models for profile, projects, skills, education, certifications, and resumes.
- `public/photos/`: Real high-resolution personal photography.
- `public/projects/`: Real project dashboard screenshots.
- `public/resumes/`: 6 verified PDF resumes ready for download.
