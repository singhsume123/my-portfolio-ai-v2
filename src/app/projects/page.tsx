import Link from "next/link";
import { projects } from "../../../data/projects";

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-neutral-900">Projects</h1>
        <p className="text-lg text-neutral-600">
          A collection of engineering projects focused on performance,
          observability, and developer experience.
        </p>
      </div>

      {featuredProjects.length > 0 && (
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-semibold text-neutral-900">
            Featured
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <article className="flex h-full flex-col gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition group-hover:-translate-y-1 group-hover:border-blue-400 group-hover:bg-neutral-100">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-blue-700">
                        {project.title}
                      </h3>
                      <p className="text-sm text-neutral-600">
                        {project.oneLiner}
                      </p>
                    </div>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      Featured
                    </span>
                  </div>

                  <p className="text-sm text-neutral-500">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-1">
                      {project.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="text-xs text-neutral-500">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {(project.links.github || project.links.demo || project.links.writeup) && (
                    <div className="mt-auto flex flex-wrap gap-2 text-xs">
                      {project.links.demo && (
                        <span className="rounded-full border border-neutral-300 px-3 py-1 text-neutral-600">
                          Demo
                        </span>
                      )}
                      {project.links.github && (
                        <span className="rounded-full border border-neutral-300 px-3 py-1 text-neutral-600">
                          GitHub
                        </span>
                      )}
                      {project.links.writeup && (
                        <span className="rounded-full border border-neutral-300 px-3 py-1 text-neutral-600">
                          Writeup
                        </span>
                      )}
                    </div>
                  )}
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {otherProjects.length > 0 && (
        <section>
          <h2 className="mb-8 text-2xl font-semibold text-neutral-900">
            Other Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <article className="flex h-full flex-col gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition group-hover:-translate-y-1 group-hover:border-blue-400 group-hover:bg-neutral-100">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-blue-700">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {project.oneLiner}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, index) => (
                      <li key={index} className="text-xs text-neutral-500">
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}