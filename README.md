# Andrea Zavatta — Software Engineer Portfolio

A clean, minimalist dark-mode portfolio and interactive resume designed for recruiters and engineering peers. Built with Vite, React 19, TypeScript, and Tailwind CSS.

🌐 **Live Site:** [https://andreazavatta.github.io](https://andreazavatta.github.io)

---

## ⚡ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) + Custom SVG brand marks
- **Deployment:** GitHub Pages via GitHub Actions

---

## ✨ Features

- 🎯 **Clean & Minimalist Dark Theme:** Sleek typography, subtle borders, high contrast and readability.
- 🚀 **Dynamic In-Browser Repository Addition:** Add any public GitHub repository directly from the live site without touching code:
  - Enter a repository URL (e.g. `https://github.com/owner/repo` or `owner/repo`).
  - Auto-fetches live metadata from the GitHub REST API (stars, forks, description, primary language, topics).
  - Customize description, live demo URL, or tags.
  - Automatically persists in `localStorage` and provides a 1-click **Export JSON** button.
- 🔍 **Interactive Filtering & Search:** Filter by technology tags (Java, TypeScript, Real-Time, Docker, etc.) or search in real time.
- 💼 **Recruiter-Focused Sections:**
  - **Hero:** Tagline, open-to-work status badge, quick GitHub statistics.
  - **About:** Architectural pillars (OOP, Distributed Systems, Microservices, DevOps).
  - **Projects:** Featured repositories with live metrics and source/demo links.
  - **Experience & Education:** Timeline of roles and academic background.
  - **Skills:** Categorized competencies (Languages, Backend, Frontend, DevOps).
  - **Contact:** 1-click email copy, direct mailto, and LinkedIn profile links.

---

## 🛠️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run dev server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🚀 GitHub Pages Setup

This repository includes an automated GitHub Actions deployment workflow (`.github/workflows/deploy.yml`).

To enable it on GitHub:
1. Go to your repository on GitHub: **Settings** → **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Push changes to the `main` branch — GitHub will automatically build and deploy the site!
