# maxmudovdev.uz — portfolio

Interactive developer portfolio styled as a code editor, built with React + Vite.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL in your browser.

## Build for production

```bash
npm run build
```

The static site is generated in `dist/`. Upload the contents of `dist/` to your hosting
(Netlify, Vercel, GitHub Pages, cPanel, etc.) to publish it at maxmudovdev.uz.

## Structure

- `src/data/content.js` — all editable copy: bio, skills, projects, social links.
  Edit this file to update your info without touching any component code.
- `src/components/LoadingScreen.jsx` — terminal boot animation shown before the site loads.
- `src/components/Sidebar.jsx` — file-explorer navigation + social links + status bar.
- `src/components/CodePane.jsx` — main content, rendered as syntax-highlighted "code".
- `src/index.css` — design tokens and all styling.

## Customizing

- To add a project, add an object to the `projects` array in `src/data/content.js`.
- To change colors, edit the CSS variables at the top of `src/index.css`.
- To change the boot sequence text, edit `LINES` in `src/components/LoadingScreen.jsx`.
