```md
# Status

## Completed
- [ ] Step 0 — Baseline sanity check
- [x] Step 1 — Global layout + navigation
- [x] Step 2 — Home page
- [x] Step 3 — Projects data model
- [x] Step 4 — Projects list page
- [x] Step 5 — Project case study page
- [x] Step 6 — About page
- [x] Step 7 — MDX support
- [x] Step 8 — Sample posts
- [x] Step 9 — lib/posts.ts
- [x] Step 10 — Blog index (renamed to /blogs)
- [x] Step 11 — Blog post page (MDX render + Substack link)
- [ ] Step 12 — OpenAI summary API
- [ ] Step 13 — AI TL;DR UI
- [ ] Step 14 — Publishing workflow (website canonical + Substack cross-post)
- [ ] Step 15 — Deployment (Vercel)

## Next 3 tasks
1. Step 12 — OpenAI summary API
2. Step 13 — AI TL;DR UI
3. Step 14 — Publishing workflow

## Notes / decisions
- Website is canonical; Substack is distribution.
- Substack URL stored in MDX frontmatter as `substackUrl`.
```

---

# Optional enhancements (after v1)

- Generate RSS feed from your website (`/feed.xml`)
- Add sitemap (`/sitemap.xml`)
- Add image/OG generation
- Add “Copy for Substack” export script
- Add structured “Project impact” metrics and screenshots
