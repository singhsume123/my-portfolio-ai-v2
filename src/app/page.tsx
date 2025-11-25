import Link from "next/link";

const projects = [
  {
    title: "AI-Powered Portfolio",
    description:
      "An interactive portfolio experience that showcases work using AI-driven summaries and tailored content.",
    tech: ["Next.js", "Tailwind", "OpenAI"],
  },
];

const posts: { title: string; date: string; summary: string }[] = [];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16 sm:py-20">
        <header className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Portfolio
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Sumeet Singh Arora
            </h1>
            <p className="text-lg text-neutral-700 sm:max-w-2xl">
              Building thoughtful digital experiences across product, design, and
              AI. I blend systems thinking with hands-on execution to ship work
              that feels deliberate and useful.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#featured-projects"
              className="rounded-full bg-sky-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-sky-500"
            >
              Featured Projects
            </a>
            <Link
              href="/about"
              className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-700 transition hover:border-sky-400 hover:text-sky-700"
            >
              About Page
            </Link>
          </div>
        </header>

        <section
          id="about"
          className="grid gap-8 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm sm:grid-cols-3 sm:items-start"
        >
          <div className="sm:col-span-1">
            <h2 className="text-xl font-semibold">About</h2>
            <p className="mt-2 text-sm text-neutral-500">
              A bit of context and how I approach work.
            </p>
          </div>
          <div className="sm:col-span-2 space-y-4 text-neutral-800">
            <p>
              I love building cohesive products—pairing clear information
              architecture with pragmatic engineering. I move from discovery to
              delivery quickly, shaping ideas through prototypes and iterating
              with real feedback.
            </p>
            <p>
              Right now I am focused on AI-assisted experiences, design systems,
              and performant web apps. I enjoy collaborating closely with
              designers, engineers, and stakeholders to align on outcomes and
              ship high-quality work.
            </p>
          </div>
        </section>

        <section id="featured-projects" className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Featured Projects</h2>
              <p className="text-sm text-neutral-500">
                Selected work spanning product, design, and engineering.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                    Case Study
                  </span>
                </div>
                <p className="text-sm text-neutral-700">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="latest-blog-posts" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Latest Blog Posts</h2>
            <p className="text-sm text-neutral-500">
              Writing on process, systems, and experiments.
            </p>
          </div>
          <div className="grid gap-4">
            {posts.map((post) => (
              <article
                key={post.title}
                className="flex flex-col gap-2 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-sky-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between text-sm text-neutral-500">
                  <span>{post.date}</span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
                    Article
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {post.title}
                </h3>
                <p className="text-sm text-neutral-700">{post.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
