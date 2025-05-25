# Castaway Studios Website

## Prerequisites

* Node.js >= 18.x
* npm >= 8.x
* Git

---

## Getting Started

1. **Clone the repository**

   ```
   git clone https://github.com/radmirtask/castaway-studios-website.git
   cd castaway-studios-website
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Run the development server**

   ```
   npm run dev
   ```

   Open [http://localhost:4321](http://localhost:4321) to view in your browser.
---

## Environment Variables
```
Пока нету :)
```
---

## Project Structure

```
src/
├── components/       # React components (Nav, Footer, etc.)
├── content/          # Markdown content collections
│   ├── games/
│   ├── team/
│   └── careers/
├── layouts/          # Shared Astro layout components (BaseLayout)
├── pages/            # Astro pages & dynamic routes
│   ├── index.astro
│   ├── games/        # Games listing & detail
│   ├── team.astro    # Team page
│   ├── careers/      # Careers listing & detail ([slug].astro)
│   ├── contact.astro # Contact page
│   └── api/          # Server routes (contact.js)
└── styles/           # global.css (Tailwind entrypoint)
```

---

## Adding Content

* **Games**: Add headless Markdown under `src/content/games/`. See schema in `src/content/config.ts`.
* **Team**: Add profile Markdown under `src/content/team/`.
* **Careers**: Add job posting Markdown under `src/content/careers/`.

Frontmatter is validated by the Zod schemas in `src/content/config.ts`.
https://zod.dev/

---

## Git Workflow & Contributions

1. Create feature branches off `main`:

   ```
   git checkout -b feat/your-feature
   ```
2. Commit with semantic messages:

   ```
   describe your change
   example:
   "added responsive React Footer component"
   ```
3. Push and open a Pull Request for review.

---


