# Akash S — Machine Learning Developer Portfolio

A production-ready, high-performance portfolio website engineered for **Akash S**, aspiring Machine Learning Developer specializing in Python, Computer Vision, and Applied AI.

Built with **React 19**, **TypeScript**, **Vite**, and a bespoke **Vanilla CSS design system** featuring dark-mode cybernetic aesthetics, interactive neural loss telemetry, and built-in document & media viewers.

---

## ⚡ Key Highlights & Features

- **Interactive Neural Loss Telemetry Playground**:
  - Live SVG loss and accuracy visualizer directly in the hero section.
  - Interactive optimizer switching (`AdamW`, `SGD`, `RMSprop`), learning rate tuning (`0.001`, `0.01`, `0.1`), and real-time epoch stepping with convergence feedback.
- **Embedded Document & Media Viewer Modal**:
  - In-app inspection for PDF certificates (Oracle, NPTEL, Tata GenAI, Sriram Industries, C++, Java).
  - High-resolution modal viewer for academic marksheets (Class 10 & 12) and achievement awards (Hack Odyssey 4.0).
  - In-app HTML5 video player for the **Flame-Based Mobile Charging System** hardware demo video.
  - Fallback buttons for instant direct download and opening in a new browser tab.
- **Projects Showcase & Live Filtering**:
  - Category filters (`All`, `AI & ML`, `Computer Vision`, `Hardware & IoT`).
  - Real-time search by tag or keyword (e.g., `OpenCV`, `FastAPI`, `MediaPipe`, `React`).
  - Hackathon winner spotlight for **BuildGuard-AI** (₹30,000 First Prize Winner at Hack Odyssey 4.0).
- **Communication & Micro-Interactions**:
  - One-click copy-to-clipboard for Email and Phone with toast notification feedback.
  - Functional message form with validation.
  - Confetti celebration micro-interaction for achievement cards.
  - Smooth scroll-spy navigation with sticky glassmorphic navbar and mobile drawer menu.
  - Floating back-to-top button.
- **SEO & Search Indexing**:
  - Structured JSON-LD metadata for Google rich snippets.
  - Open Graph & Twitter card previews.
  - Pre-connected Google Fonts (`Space Grotesk`, `Inter`, `JetBrains Mono`).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 8](https://vite.dev/)
- **Styling**: Vanilla CSS Design Tokens (Custom CSS variables, fluid clamp typography, glassmorphism, responsive grid layouts)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVGs
- **Celebrations**: Canvas Confetti

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18.0 or newer — tested on Node v24)
- **npm** (v9.0 or newer)

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
The site will run locally at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
Creates an optimized, tree-shaken static production bundle in `dist/` ready to host anywhere.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 🌐 One-Click Deployment

### Deploy to Vercel
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of production portfolio"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**.
5. Click **Deploy**. Vercel will build and assign you a free `*.vercel.app` domain with automatic HTTPS.

### Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and import the repository.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.

### Deploy to GitHub Pages
Add `"base": "/<repo-name>/"` into `vite.config.ts`, build, and deploy the `dist/` folder via GitHub Actions or `gh-pages`.

---

## 📁 Directory Structure

```
c:/Users/SRIDHAR/Portfolio/
├── public/
│   ├── certificates/     # Verified PDF & image certificates (Oracle, NPTEL, Tata, Sriram, C++, Java, etc.)
│   ├── documents/        # Marksheets (10th, 12th) & College Academic Records
│   ├── images/           # Professional profile image
│   └── videos/           # Flame-Based Mobile Charging demo video MP4
├── src/
│   ├── components/
│   │   ├── About.tsx          # Summary & metric highlights
│   │   ├── Achievements.tsx   # Hackathon 1st place, Science Day finalist & CM Trophy
│   │   ├── BackToTop.tsx      # Smooth scroll-to-top floating button
│   │   ├── Certifications.tsx # Oracle 4x & NPTEL elite badges
│   │   ├── Contact.tsx        # Channels, copy feedback & message form
│   │   ├── Education.tsx      # Academic records with document triggers
│   │   ├── Experience.tsx     # Timeline for Tata GenAI & Sriram Industries
│   │   ├── Hero.tsx           # Dynamic headline, avatar halo & role cycling
│   │   ├── MediaModal.tsx     # In-app viewer for PDF, Image & Video proofs
│   │   ├── MlPlayground.tsx   # Interactive neural training loss visualizer
│   │   ├── Navbar.tsx         # Sticky glassmorphic navbar & mobile drawer
│   │   ├── Projects.tsx       # Searchable & filterable engineering showcase
│   │   ├── Skills.tsx         # Categorized matrix with certificate proofs
│   │   └── Toast.tsx          # Real-time alert notifications
│   ├── data/
│   │   └── portfolioData.ts   # Centralized portfolio content & metadata
│   ├── styles/
│   │   └── globals.css        # CSS variables, typography, keyframe animations
│   ├── types/
│   │   └── portfolio.ts       # TypeScript type definitions
│   ├── App.tsx                # App root layout & state orchestration
│   ├── main.tsx               # DOM mount point
│   └── index.css              # Global styles entry
├── index.html                 # SEO meta tags, Google Fonts, JSON-LD Schema
├── package.json               # Dependencies and build scripts
└── vite.config.ts             # Vite configuration
```

---

## 📄 License
Personal portfolio of Akash S. All rights reserved.
