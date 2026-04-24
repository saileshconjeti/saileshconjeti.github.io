# saileshconjeti.github.io (Astro)

Modernized static personal website built with Astro and deployed via GitHub Pages.

## Stack
- Astro (static output)
- Markdown content collections for projects, publications, and writing
- GitHub Actions for build + deployment

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Build production site:
   ```bash
   npm run build
   ```
4. Preview production build:
   ```bash
   npm run preview
   ```

## Content Structure
- Pages: `src/pages/`
- Layouts and components: `src/layouts/`, `src/components/`
- Markdown content:
  - `src/content/publications/`
  - `src/content/projects/`
  - `src/content/writing/`
- Static assets:
  - `public/images/`
  - `public/files/`

## Legacy Archive
The previous AcademicPages/Jekyll site is archived under:

- `archive/jekyll-legacy/`

This is kept for reference and safe rollback of legacy content.

## GitHub Pages Deployment
Deployment is configured in `.github/workflows/deploy.yml` using official GitHub Pages actions.

Expected repository URL and Astro config:
- Site: `https://saileshconjeti.github.io`
- Base path: `/`

### One-time GitHub Settings
In the GitHub repository settings:
1. Go to **Pages**.
2. Set **Build and deployment** source to **GitHub Actions**.

After that, pushes to `main` deploy automatically.
