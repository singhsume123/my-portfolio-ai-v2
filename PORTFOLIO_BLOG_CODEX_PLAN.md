# Portfolio + Projects + Blog (Canonical) + Substack Cross-Post (Codex-Friendly Plan)

This plan is optimized for executing **step-by-step with OpenAI Codex in VS Code**. Each step is small, testable, and resumable.

**Chosen publishing model:**  
✅ **Website is canonical** (source of truth) → **Substack is distribution** (cross-post link-back).

---

## Operating principles (for you + Codex)

- **No unrelated refactors.**
- Each step should touch the **smallest set of files**.
- Prefer **boring, stable** libraries.
- **Projects are first-class** (not optional).
- Blog posts are **MDX in-repo** for v1.
- Cross-posting to Substack is **manual** (copy/paste) with explicit **cross-links**.

---

## Outcome targets

### v1 (ship)
- `/` Home: hero + featured projects + latest posts
- `/projects` Projects list
- `/projects/[slug]` Project case studies (at least 2)
- `/blog` Blog index (MDX)
- `/blog/[slug]` Blog post (MDX render)
- AI feature: **Generate TL;DR** on blog posts (OpenAI API)
- Cross-post workflow:
  - Each canonical blog post optionally displays “Also on Substack →”
  - Each Substack post links back to canonical website URL

### v2 (later)
- DB-backed projects/posts (Prisma + Postgres)
- “Ask my blog” (RAG) with embeddings + vector search
- Admin authoring UI + draft workflow
- RSS + sitemap + analytics + newsletter enhancements

---

## Repository structure

```
app/
  layout.tsx
  page.tsx
  about/page.tsx
  projects/page.tsx
  projects/[slug]/page.tsx
  blog/page.tsx
  blog/[slug]/page.tsx
  blog/[slug]/AiSummary.tsx
  api/summary/route.ts
content/
  posts/*.mdx
  projects/*.mdx          (or keep projects in data/ for v1)
data/
  projects.ts             (v1 recommended)
lib/
  posts.ts
  projects.ts             (helpers)
STATUS.md
```

If your app uses `src/app`, mirror under `src/`.

---

# Step-by-step plan

## Step 0 — Baseline sanity check

**Objective:** Confirm dev server + lint/build work.

**Codex Task Prompt**
> Run `npm run dev` and confirm the starter page renders. Ensure `npm run lint` passes. Do not change code unless a fix is required.

**Verification**
```bash
npm run dev
npm run lint
```

**DoD**
- Dev server starts cleanly
- Lint passes

---

## Step 1 — Global layout + navigation (includes Projects)

**Objective:** Add a global dark layout and nav: Home, Projects, Blog, About.

**Codex Task Prompt**
> Update `app/layout.tsx` to add a top nav with links to Home (/), Projects (/projects), Blog (/blog), About (/about) and a minimal footer. Use Tailwind for a clean dark theme. Keep it responsive. No external UI libraries.

**Verification**
```bash
npm run dev
```

**DoD**
- Nav visible on all pages
- All routes exist or show Next’s default 404 until created

---

## Step 2 — Home page (Projects are featured)

**Objective:** Home showcases you + featured projects + latest posts.

**Codex Task Prompt**
> Update `app/page.tsx` to implement:
> - Hero: name + tagline + buttons to Projects and Blog
> - Featured Projects section: render 3 project cards from `data/projects.ts` (create if missing)
> - Latest Posts section: show 2 latest posts from `lib/posts.ts` (stub until blog steps)
> Use Tailwind for clean layout.

**Verification**
```bash
npm run dev
```

**DoD**
- Home page renders cleanly
- Featured Projects section exists (even if placeholder data)

---

## Step 3 — Projects data model (`data/projects.ts`)

**Objective:** Store projects as typed data in a single file.

**Codex Task Prompt**
> Create `data/projects.ts` exporting:
> - `Project` type with: slug, title, oneLiner, description, stack (string[]), highlights (string[]), links { github?, demo?, writeup? }, featured (boolean)
> - `projects: Project[]` with at least 3 entries (include your Android perf library + 2 others)
> Keep descriptions concise and metrics-oriented.

**Verification**
- Typecheck in editor (no TS errors)

**DoD**
- `data/projects.ts` exists and exports type + data

---

## Step 4 — Projects list page `/projects`

**Objective:** Projects are not optional. Build a great Projects page.

**Codex Task Prompt**
> Create `app/projects/page.tsx`:
> - Load `projects` from `data/projects.ts`
> - Render featured first, then remaining
> - Each project card links to `/projects/[slug]`
> - Show stack chips and 2–4 highlight bullets per project
> Tailwind dark UI, responsive.

**Verification**
```bash
npm run dev
```

**DoD**
- `/projects` lists all projects, links work

---

## Step 5 — Project case study page `/projects/[slug]`

**Objective:** Each project has a dedicated case-study page.

**Codex Task Prompt**
> Create `app/projects/[slug]/page.tsx`:
> - Use `params.slug` to find a project in `data/projects.ts`
> - If not found -> `notFound()`
> - Render title, description, stack, highlights, links
> - Add sections: Problem, Approach, Results, What I’d do next (use project data + placeholders if needed)
> - Implement `generateStaticParams()` based on `projects`.

**Verification**
```bash
npm run dev
```

**DoD**
- Visiting `/projects/<slug>` works for all slugs
- Unknown slug returns 404

---

## Step 6 — About page

**Objective:** About supports narrative + credibility.

**Codex Task Prompt**
> Create `app/about/page.tsx` with semantic HTML:
> - 2–4 paragraphs about Android performance + AI for quality
> - bullet list of areas of focus
> - a “Connect” section with placeholders for LinkedIn/GitHub/Substack

**Verification**
```bash
npm run dev
```

**DoD**
- `/about` looks consistent with site styling

---

## Step 7 — Enable MDX support for blog posts

**Objective:** Allow `.mdx` posts in repo.

**Codex Task Prompt**
> Add MDX support:
> - Install `@next/mdx` and `@types/mdx` if missing
> - Update `next.config.mjs` to support MDX and include `mdx` in `pageExtensions`
> Keep changes minimal.

**Verification**
```bash
npm install
npm run dev
```

**DoD**
- App runs after MDX config change

---

## Step 8 — Create canonical blog posts in `content/posts`

**Objective:** Create 2–3 MDX posts with frontmatter + Substack field.

**Frontmatter required**
- `title`
- `date` (YYYY-MM-DD)
- `slug`
- `tags` (string array)
- `substackUrl` (string or empty)

**Codex Task Prompt**
> Create `content/posts/` and add 2–3 `.mdx` posts with the required frontmatter. For now set `substackUrl` to empty string. Keep body technical and structured with headings and code blocks where relevant.

**Verification**
- Files exist and frontmatter is valid YAML

**DoD**
- At least 2 posts ready to render

---

## Step 9 — Implement `lib/posts.ts` (load MDX + frontmatter)

**Objective:** Read posts, parse frontmatter, return metadata and content.

**Codex Task Prompt**
> Create `lib/posts.ts`:
> - Read all `.mdx` files in `content/posts`
> - Parse frontmatter with `gray-matter`
> - Define `PostMeta` type: slug, title, date, tags, substackUrl?
> - Export:
>   - `getAllPosts(): PostMeta[]` sorted by date desc
>   - `getPostBySlug(slug): { meta: PostMeta; content: string } | null`
> Add `gray-matter` dependency if missing.

**Verification**
```bash
npm install
npm run dev
```

**DoD**
- Functions compile and return expected shapes

---

## Step 10 — Blog index `/blog`

**Objective:** List posts from `lib/posts.ts`.

**Codex Task Prompt**
> Create/update `app/blog/page.tsx`:
> - Call `getAllPosts()`
> - Render cards with title/date/tags/snippet
> - Link to `/blog/[slug]`
> Tailwind dark cards, responsive.

**Verification**
```bash
npm run dev
```

**DoD**
- `/blog` renders and shows all posts

---

## Step 11 — Blog post page `/blog/[slug]` (MDX render + Substack link)

**Objective:** Render MDX content and show Substack cross-post link when present.

**Codex Task Prompt**
> Implement `app/blog/[slug]/page.tsx`:
> - Use `params.slug` with `getPostBySlug`
> - If missing -> `notFound()`
> - Render title/date/tags
> - Render MDX body to React (choose a simple approach compatible with Next + MDX setup)
> - If `meta.substackUrl` is non-empty, show a link: “Also on Substack →”
> - Add a placeholder section above content for AI TL;DR.
> - Add `generateStaticParams()` for all slugs.
> Optional: implement `generateMetadata()` per post.

**Verification**
```bash
npm run dev
```

**DoD**
- Posts render correctly
- Substack link shows only when configured

---

## Step 12 — OpenAI summary API route

**Objective:** Create server route to summarize content.

**Codex Task Prompt**
> Create `app/api/summary/route.ts`:
> - POST JSON `{ content: string }`
> - Validate content (non-empty, reasonable length)
> - Use `openai` JS SDK to generate a 2–3 sentence TL;DR
> - Return `{ summary: string }`
> - Handle errors gracefully; no secret logging
> Update `README.md` with `.env.local`:
> - `OPENAI_API_KEY=...`

**Verification**
```bash
npm install openai
npm run dev
curl -s -X POST http://localhost:3000/api/summary   -H "Content-Type: application/json"   -d '{"content":"Hello world. This is a test post about Android performance."}' | cat
```

**DoD**
- API returns JSON with a summary

---

## Step 13 — AI TL;DR UI component

**Objective:** Add a client component on blog posts that calls the summary API.

**Codex Task Prompt**
> Create `app/blog/[slug]/AiSummary.tsx` (client component):
> - Props: `{ content: string }`
> - Button “Generate TL;DR”
> - Loading, error, and summary state
> - POST to `/api/summary`
> Style as a compact callout box with Tailwind.
> Integrate into `app/blog/[slug]/page.tsx` above the MDX content.

**Verification**
```bash
npm run dev
```

**DoD**
- Clicking button generates and displays TL;DR

---

## Step 14 — Canonical + Substack cross-posting workflow (Docs + post metadata)

**Objective:** Make cross-posting repeatable and low-friction.

**Codex Task Prompt**
> Update `README.md` with a “Publishing workflow (Website canonical + Substack cross-post)” section:
> - Website is source-of-truth (canonical)
> - After publishing on website, copy/paste to Substack
> - Add a link in Substack post pointing back to canonical URL
> - Set `substackUrl` in MDX frontmatter after Substack is published
> Update blog post page to render `substackUrl` link nicely if present.

**Verification**
- Manual: publish one post to Substack and set `substackUrl` in MDX; confirm link appears on the site.

**DoD**
- Documented workflow exists
- Site supports linking out to Substack when you provide the URL

---

## Step 15 — Production readiness + deployment (Vercel)

**Objective:** Deploy your canonical website.

**Codex Task Prompt**
> Add deployment docs in `README.md`:
> - Deploy to Vercel from GitHub
> - Add env var `OPENAI_API_KEY` in Vercel settings
> - Confirm `npm run build` works locally
> - Mention how to set custom domain (optional)
> Avoid adding config files unless necessary.

**Verification**
```bash
npm run build
npm run start
```

**DoD**
- Local build succeeds
- Deployed site loads
- AI TL;DR works in production after env var is set

---

# STATUS.md template

```md
# Status

## Completed
- [ ] Step 0 — Baseline sanity check
- [ ] Step 1 — Global layout + navigation
- [ ] Step 2 — Home page
- [ ] Step 3 — Projects data model
- [ ] Step 4 — Projects list page
- [ ] Step 5 — Project case study page
- [ ] Step 6 — About page
- [ ] Step 7 — MDX support
- [ ] Step 8 — Sample posts
- [ ] Step 9 — lib/posts.ts
- [ ] Step 10 — Blog index
- [ ] Step 11 — Blog post page (MDX render + Substack link)
- [ ] Step 12 — OpenAI summary API
- [ ] Step 13 — AI TL;DR UI
- [ ] Step 14 — Publishing workflow (website canonical + Substack cross-post)
- [ ] Step 15 — Deployment (Vercel)

## Next 3 tasks
1.
2.
3.

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
