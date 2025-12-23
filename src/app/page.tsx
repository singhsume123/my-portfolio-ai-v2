import Link from "next/link";
import { projects } from "../../data/projects";

const posts: { title: string; date: string; summary: string }[] = [];

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <header className="space-y-6">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
          Portfolio
        </p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight text-neutral-50 sm:text-5xl">
            Sumeet Singh Arora
          </h1>
          <p className="text-lg text-neutral-300 sm:max-w-2xl">
            Building thoughtful digital experiences across product, design, and
            AI. I blend systems thinking with hands-on execution to ship work
            that feels deliberate and useful.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#featured-projects"
            className="rounded-full bg-sky-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            Featured Projects
          </a>
          <Link
            href="/about"
            className="rounded-full border border-neutral-700 px-5 py-2 text-sm font-medium text-neutral-200 transition hover:border-sky-400 hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            About Page
          </Link>
        </div>
      </header>

      <section
        id="about"
        className="grid gap-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 sm:grid-cols-3 sm:items-start"
      >
        <div className="sm:col-span-1">
          <h2 className="text-xl font-semibold text-neutral-50">About</h2>
          <p className="mt-2 text-sm text-neutral-400">
            A bit of context and how I approach work.
          </p>
        </div>
        <div className="sm:col-span-2 space-y-4 text-neutral-200">
          <p>
            I love building cohesive products—pairing clear information
            architecture with pragmatic engineering. I move from discovery to
            delivery quickly, shaping ideas through prototypes and iterating
            with real feedback.
          </p>
          <p>
            Right now I am focused on AI-assisted experiences, design systems,
            and performant web apps. I enjoy collaborating closely with
            designers, engineers, and stakeholders to align on outcomes and ship
            high-quality work.
          </p>
        </div>
      </section>

      <section id="featured-projects" className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-neutral-50">
              Featured Projects
            </h2>
            <p className="text-sm text-neutral-400">
              Selected work spanning product, design, and engineering.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <article
                key={project.slug}
                className="flex flex-col gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-neutral-900/60"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-neutral-50">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-300">
                      {project.oneLiner || project.description}
                    </p>
                  </div>
                  <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-200">
                    Featured
                  </span>
                </div>
                <p className="text-sm text-neutral-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {(project.links.github ||
                  project.links.demo ||
                  project.links.writeup) && (
                  <div className="flex flex-wrap gap-3 text-sm">
                    {project.links.demo && (
                      <Link
                        href={project.links.demo}
                        className="rounded-full border border-neutral-700 px-4 py-2 text-neutral-200 transition hover:border-sky-400 hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                      >
                        Demo
                      </Link>
                    )}
                    {project.links.github && (
                      <Link
                        href={project.links.github}
                        className="rounded-full border border-neutral-700 px-4 py-2 text-neutral-200 transition hover:border-sky-400 hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                      >
                        GitHub
                      </Link>
                    )}
                    {project.links.writeup && (
                      <Link
                        href={project.links.writeup}
                        className="rounded-full border border-neutral-700 px-4 py-2 text-neutral-200 transition hover:border-sky-400 hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                      >
                        Writeup
                      </Link>
                    )}
                  </div>
                )}
              </article>
            ))}
        </div>
      </section>

      <section id="latest-blog-posts" className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-neutral-50">
            Latest Blog Posts
          </h2>
          <p className="text-sm text-neutral-400">
            Writing on process, systems, and experiments.
          </p>
        </div>
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 text-neutral-300">
            Coming soon — writing on engineering, AI, and product craft.
          </div>
        ) : (
          <div className="grid gap-4">
            {posts.map((post) => (
              <article
                key={post.title}
                className="flex flex-col gap-2 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 transition hover:border-sky-400/40 hover:bg-neutral-900/60"
              >
                <div className="flex items-center justify-between text-sm text-neutral-400">
                  <span>{post.date}</span>
                  <span className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-200">
                    Article
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-50">
                  {post.title}
                </h3>
                <p className="text-sm text-neutral-300">{post.summary}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
