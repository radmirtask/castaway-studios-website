# Castaway Studios Website

This is the official website for Castaway Studios built with Astro and vanilla CSS.

## Project Structure
```
├── public/
│ ├── images/
│ ├── fonts/
│ └── videos/
├── src/
│ ├── components/
│ │ ├── componentName/
│ │ │ ├── componentName.astro
│ │ │ └── componentName.css
│ ├── layouts/
│ ├── pages/
│ ├── styles/
│ │ └── global.css
│ └── content/
├── .github/
│ └── workflows/
├── astro.config.mjs
├── package.json
├── netlify.toml
└── README.md
```

## Component Organization

We use a component-based organization where each component has its own directory:

```
src/components/hero/
├── hero.astro
└── hero.css
```

This structure keeps component-specific styles with their markup, making it easier to maintain and understand the codebase.

## CSS Strategy

- Global styles, variables, and utility classes are in `src/styles/global.css`
- Component-specific styles are in their respective `.css` files alongside the component
- We use BEM naming convention for CSS classes (Block__Element--Modifier)

## Getting Started

1. Clone the repo:
   ```
   git clone https://github.com/your-username/castaway-studios-website.git
   cd castaway-studios-website
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run locally:
   ```
   npm run dev
   ```

4. Build for production:
   ```
   npm run build
   ```

Deploy is handled automatically by Netlify whenever you push to main.

