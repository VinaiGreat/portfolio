Portfolio – Xavier L.
Multi-page portfolio (Home, About, Projects, Blog) built with Astro and Tailwind CSS, featuring a light/dark theme, sand‑toned animated “particles” background, card‑based layout, and a structure designed to be fast, readable, and easy to maintain.

The public site targeted by the Astro configuration is https://… (fill in your actual deployment URL: Vercel, Netlify, etc.).

What this project includes
Pages & content

Standalone pages: index.astro (home), about.astro, projects.astro, blog.astro.

Centralized content in src/config/content.ts: texts, titles, descriptions, links (about, projects, blog, social, email).

Optional blog via src/content/posts/ (Markdown) if you want to publish articles.

UI & design system

Astro rendering + Tailwind CSS utilities for layout (flex, grid), typography, and responsive design.

Light/dark theme handled via dark: variants and inline scripts that apply the user’s preference on load (using localStorage) to avoid theme “flash”.

Professional portfolio look: neutral typography, warm sand tones, structured content blocks, and CTAs pointing to key sections.

Background & animations

Global background: hexagonal dot pattern (.dot-hexagon-light / .dot-hexagon-dark) in sand and golden tones (#C49A6C, #F0B473) + radial glow + circular halo.

“Particles” effect: subtle background translation (@keyframes particlesDrift via .particles-layer) to create motion without impacting readability.

Optional sand color breathing animation via CSS (sandGlow…) on key pages (home, about) for a soft light variation.

SEO & accessibility

Page titles & descriptions via aboutContent.meta, projectsContent.meta, etc.

Clean heading structure (h1/h2) to improve accessibility and basic SEO.

Static site generation with Astro (SSG) for fast, easily indexable pages.

How it “communicates” (architecture)
Multi-page routing (Astro)
Entry points: users arrive on /, /about, /projects, /blog.

Astro manages each page via src/pages/*.astro.

Text and metadata are injected from src/config/content.ts so you don’t duplicate copy inside templates.

Global navigation (Navigation.astro) connects all pages and is included in each layout.

Astro server rendering → shared layout

Each page layout (e.g. index.astro, about.astro) is responsible for:

Meta tags (<title>, <meta name="description">) based on siteConfig / aboutContent.meta / projectsContent.meta.

Injecting the animated background (hexagons + radial glow + halo) via <style> blocks and div.absolute.inset-0 wrappers.

Rendering the top navigation (Navigation) and bottom footer (Footer) to ensure visual consistency across pages.

Client-side orchestration (theme & interactions)

Inline scripts in the <head> sections:

Theme preferences: read localStorage.getItem("theme") (dark, light, system) and apply the dark class to <html> or <body> early in the render pipeline.

Reacting to prefers-color-scheme: listen to window.matchMedia("(prefers-color-scheme: dark)") when the theme is set to system, so the UI adapts to OS changes.

Client-side interactions:

Project cards hover: subtle translation, hover effect on the link icon, border/background accent on hover.

Home hero image: floatLoop animation for a gentle floating effect plus a stronger hover transform.

“Content ↔ pages” contract (stable mapping)

The mapping between pages and their content/config is centralized in src/config/content.ts:

homeContent: title, hero text, call-to-action button, light/dark hero images.

aboutContent: meta, title, description, skills, experience timeline, contact block (email).

projectsContent: meta, title, description, project list (title, description, image, href).

blogContent: meta, blog page texts, pagination configuration.

This contract is used by:

Astro pages (index.astro, about.astro, projects.astro, blog.astro) to fetch data without duplicating it.

Navigation components to display the correct labels.

UI components to keep a stable structure even when content changes.

Key directories
src/pages/: main pages (index.astro, about.astro, projects.astro, blog.astro).

src/components/: UI components (Navigation, Footer, shared sections).

src/config/content.ts: site, home, about, projects, blog configuration.

src/content/posts/: Markdown blog posts (if the blog system is enabled).

public/: static assets (images, favicon, etc.).

Tech stack
Astro: rendering & build (astro.config.mjs), multi‑route pages.

Tailwind CSS v4: layout utilities, typography, responsive design, dark: theme variant.

TypeScript: client scripts and configuration.

Markdown + Astro Content Collections: blog system (posts, pagination, metadata).