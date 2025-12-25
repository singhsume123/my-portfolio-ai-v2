import Link from "next/link";
import { projects } from "../../data/projects";
import { getAllPosts } from "../lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 2); // Show latest 2 posts
  return (
    <main className="flex flex-col gap-16">
      <header className="space-y-6">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Portfolio
        </p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl">
            Sumeet Singh Arora
          </h1>
          <p className="text-xl text-neutral-700 font-medium">
            Computer science as a way of thinking
          </p>
          <p className="text-lg text-neutral-600 sm:max-w-2xl">
            Essays, projects, and experiments on mental models, systems, and AI—focused on how engineers reason about complex software.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            View All Projects
          </Link>
          <Link
            href="/blogs"
            className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-700 transition hover:border-blue-500 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Read All Blogs
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-700 transition hover:border-blue-500 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            About Me
          </Link>
        </div>
      </header>

      <div className="grid gap-12 lg:grid-cols-2">
        <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900">
              Featured Projects
            </h2>
            <p className="text-sm text-neutral-500">
              Selected work spanning product, design, and engineering.
            </p>
          </div>
        </div>
        <div className="grid gap-6">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <article className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 transition group-hover:-translate-y-1 group-hover:border-blue-400 group-hover:bg-neutral-100">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-blue-700">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {project.oneLiner || project.description}
                    </p>
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    Featured
                  </span>
                </div>
                <p className="text-sm text-neutral-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-700"
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
                      <span className="rounded-full border border-neutral-300 px-4 py-2 text-neutral-700">
                        Demo Available
                      </span>
                    )}
                    {project.links.github && (
                      <span className="rounded-full border border-neutral-300 px-4 py-2 text-neutral-700">
                        Open Source
                      </span>
                    )}
                    {project.links.writeup && (
                      <span className="rounded-full border border-neutral-300 px-4 py-2 text-neutral-700">
                        Case Study
                      </span>
                    )}
                  </div>
                )}
                </article>
              </Link>
            ))}
        </div>
        </section>

        <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900">
            Latest Blog Posts
          </h2>
          <p className="text-sm text-neutral-500">
            Writing on process, systems, and experiments.
          </p>
        </div>
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 text-neutral-600">
            Coming soon — writing on engineering, AI, and product craft.
          </div>
        ) : (
          <div className="grid gap-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group block"
              >
                <article className="flex flex-col gap-2 rounded-2xl border border-neutral-200 bg-white p-5 transition group-hover:border-blue-400 group-hover:bg-neutral-100">
                  <div className="flex items-center justify-between text-sm text-neutral-500">
                    <span>{post.date}</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs text-neutral-700">
                      Article
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-blue-700">
                    {post.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-neutral-300 px-2 py-1 text-xs text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
        </section>
      </div>
    </main>
  );
}
