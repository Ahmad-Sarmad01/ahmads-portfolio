# Ahmad Sarmad — Portfolio

A responsive single-page portfolio built with React, Vite, Tailwind CSS v4, Framer Motion, and React Icons. Configured for GitHub Pages using `gh-pages`.

## Run locally

```bash
npm install
npm run dev
```

## Before publishing

1. In `vite.config.js`, make sure `repoName` matches the GitHub repository name exactly. It is currently `ahmads-portfolio`.
2. Add your portrait as `public/profile.jpg` (JPG/WebP recommended).
3. Add your CV as `public/resume.pdf` if you want the Resume links to work.
4. Replace the placeholder project information and add your real live/demo and GitHub URLs in `src/components/Projects.jsx`.
5. Replace placeholder certifications and education details.
6. Replace `your.email@example.com` in `src/components/Contact.jsx` and update GitHub/LinkedIn profile links in `src/components/Layout.jsx` and `Hero.jsx`.
7. Update the description/title in `index.html` if desired.

## Deploy to GitHub Pages

Create a repository named `ahmads-portfolio` (or change `repoName` in `vite.config.js` to match your chosen repository). Push the project to GitHub, then run:

```bash
npm run deploy
```

The `predeploy` script builds the site and `gh-pages -d dist` publishes the generated `dist` folder to the `gh-pages` branch. In the GitHub repository, open **Settings → Pages** and choose **Deploy from a branch**, branch `gh-pages`, folder `/ (root)`.

Your project site URL will be `https://YOUR-GITHUB-USERNAME.github.io/ahmads-portfolio/` after Pages finishes publishing.

For local production-build testing:

```bash
npm run build
npm run preview
```

## Important

This is a static site. GitHub Pages does not execute backend code or process contact forms. The contact form opens an email draft using `mailto:`. For a working form without an email app, connect a third-party form service or build a backend elsewhere.
