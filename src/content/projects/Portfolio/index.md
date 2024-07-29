---
title: "This website"
summary: "Astro static website using Github Actions"
date: "Jul 19 2024"
draft: false
tags:
- Astro.js
- Github Actions
- CI/CD
- Solid.js
- TailwindCSS
- MDX
- TypeScript
- JavaScript
---

### Overview
This portfolio website is built with Astro, a static site generator that can be enhanced with components from any (combination of) framework(s), such as Solid. It is hosted on Github Pages and uses Github Actions for CI/CD. The site is styled with TailwindCSS and uses MDX for the content (projects and blog). The website is built using Typescript and Javascript, using Bun as the runtime, and Vite for the build process.

### Plugins
SEO is handled using @astrolib/seo, which provides a simple way to add metadata to each page. @astrojs/rss is used to generate an RSS feed for the blog posts. A robots.txt and sitemap.xml are generated using the @astrojs/sitemap and astro-robots-txt plugins. Lastly, astro-compress is used to compress all files into gzip and brotli formats, which decreases up to 77% file size in my case.

### Search
The search uses a fuzzy search algorithm to search through the blog and project content. The search is powered by Fuse.js and implemented in a SolidJs component for reactivity.