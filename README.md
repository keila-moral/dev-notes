# Stack Sprint

A software dev blog with a Swiss poster-grid design, built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Writing

```bash
npm install
npm run new "My post title"   # creates src/content/posts/my-post-title.md as a draft
npm run dev                   # http://localhost:4321, drafts visible
```

Posts are Markdown files in `src/content/posts/`. Remove `draft: true` from the front matter to
publish, then push to `main`; the GitHub Action builds and deploys the site.

## Customising

- **Name, tagline, links:** `src/consts.ts`
- **Colours, fonts and grid:** `src/styles/global.css` (the `:root` variables at the top)
- **About page:** `src/pages/about.astro`

## Email subscriptions

1. Create a free account at [buttondown.com](https://buttondown.com).
2. Put your Buttondown username in `BUTTONDOWN_USERNAME` in `src/consts.ts`.
3. Optional: in Buttondown, enable *RSS-to-email* with your feed URL (`/rss.xml`) so new posts
   are emailed to subscribers automatically.

## Deploying

In the repo on GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
Every push to `main` then deploys. The workflow works out the URL itself: a repo named
`<user>.github.io` is served from the root, any other repo from `/<repo-name>/`.

## Feeds

- RSS: `/rss.xml`
- Sitemap: `/sitemap-index.xml`
