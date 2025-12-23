import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, type Project } from "../../../../data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.oneLiner,
  };
}

function getProjectBySlug(slug: string): Project | null {
  return projects.find((project) => project.slug === slug) || null;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
        >
          ← Back to Projects
        </Link>
      </div>

      <header className="mb-12">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-neutral-50">
              {project.title}
            </h1>
            <p className="text-lg text-neutral-300">{project.oneLiner}</p>
            {project.featured && (
              <span className="inline-block rounded-full bg-sky-500/20 px-3 py-1 text-sm font-semibold text-sky-200">
                Featured Project
              </span>
            )}
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.links.github || project.links.demo || project.links.writeup) && (
          <div className="flex flex-wrap gap-3">
            {project.links.demo && (
              <Link
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-neutral-700 px-6 py-3 text-sm text-neutral-200 transition hover:border-sky-400 hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                View Demo ↗
              </Link>
            )}
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-neutral-700 px-6 py-3 text-sm text-neutral-200 transition hover:border-sky-400 hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                View Code ↗
              </Link>
            )}
            {project.links.writeup && (
              <Link
                href={project.links.writeup}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-neutral-700 px-6 py-3 text-sm text-neutral-200 transition hover:border-sky-400 hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                Read Writeup ↗
              </Link>
            )}
          </div>
        )}
      </header>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="mb-6 text-2xl font-semibold text-neutral-50">
              Overview
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              {project.description}
            </p>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold text-neutral-50">
              Problem
            </h2>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <p className="text-neutral-300 leading-relaxed">
                {project.slug === "android-perf-oss" && 
                  "Android apps struggle with performance visibility. Traditional monitoring tools capture crashes and ANRs but miss critical user experience metrics like Time to First Render (TTFR) and Time to Interactive (TTI). Worse, there's no connection between performance drops and user behavior like navigation cancellations or feature abandonment."
                }
                {project.slug === "agentic-pr-review" && 
                  "Code review processes are bottlenecked by manual triage of feedback. PR comments often contain similar issues across different files, regression risks go unnoticed, and actionable fixes require significant reviewer effort to propose. Teams need automated assistance to cluster related findings and suggest targeted remediation."
                }
                {project.slug === "portfolio-blog" && 
                  "Technical professionals need a platform that effectively showcases their work while supporting long-form content creation. Existing solutions often sacrifice performance for features or require heavy CMSs that complicate the publishing workflow. The challenge was building a fast, maintainable portfolio that serves both as a project showcase and a technical blog."
                }
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold text-neutral-50">
              Approach
            </h2>
            <div className="space-y-6">
              {project.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-xs font-semibold text-sky-200">
                    {index + 1}
                  </span>
                  <p className="text-neutral-300">{highlight}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold text-neutral-50">
              Results
            </h2>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <p className="text-neutral-300 leading-relaxed">
                {project.slug === "android-perf-oss" && 
                  "Delivered a lightweight library that captures critical render metrics with minimal overhead. Teams can now correlate performance drops with specific user journeys, enabling data-driven optimization decisions. The pluggable architecture supports custom instrumentation while maintaining compatibility with existing observability stacks."
                }
                {project.slug === "agentic-pr-review" && 
                  "Created an AI-powered workflow that processes PR feedback efficiently, reducing review cycles by clustering related issues and auto-generating targeted fix suggestions. The system runs safely in CI environments with built-in guardrails, improving both review velocity and code quality assurance."
                }
                {project.slug === "portfolio-blog" && 
                  "Delivered a high-performance portfolio platform using Next.js with static generation, achieving excellent Core Web Vitals scores. The MDX-based blog system enables rich technical content while maintaining fast load times. The structured project data model allows for consistent presentation across different views and scales easily with new content."
                }
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold text-neutral-50">
              What I'd Do Next
            </h2>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <p className="text-neutral-300 leading-relaxed">
                {project.slug === "android-perf-oss" && 
                  "Add real-time alerting for performance regressions, expand trace correlation with business metrics, and build dashboard templates for common performance KPIs. Consider integrating with A/B testing frameworks to measure performance impact on user behavior."
                }
                {project.slug === "agentic-pr-review" && 
                  "Enhance the clustering algorithm with semantic analysis of code changes, add integration with issue tracking systems for automated follow-up, and expand the fix suggestion engine to handle more complex refactoring scenarios. Consider adding support for design pattern recommendations."
                }
                {project.slug === "portfolio-blog" && 
                  "Add OpenAI-powered content summarization for blog posts, implement RSS feeds and enhanced meta tags for better discoverability, and integrate view analytics to understand reader engagement. Consider adding search functionality and interactive code examples for technical posts."
                }
              </p>
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <section>
            <h3 className="mb-4 text-lg font-semibold text-neutral-50">
              Tech Stack
            </h3>
            <div className="space-y-3">
              {project.stack.map((tech) => (
                <div
                  key={tech}
                  className="rounded-lg border border-neutral-800 bg-neutral-900/40 px-4 py-2 text-sm text-neutral-200"
                >
                  {tech}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-4 text-lg font-semibold text-neutral-50">
              Key Features
            </h3>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="text-sm text-neutral-400">
                  • {highlight}
                </li>
              ))}
            </ul>
          </section>

          {(project.links.github || project.links.demo || project.links.writeup) && (
            <section>
              <h3 className="mb-4 text-lg font-semibold text-neutral-50">
                Links
              </h3>
              <div className="space-y-2">
                {project.links.demo && (
                  <Link
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-neutral-800 bg-neutral-900/40 px-4 py-2 text-sm text-neutral-200 transition hover:border-sky-400 hover:text-sky-200"
                  >
                    Live Demo ↗
                  </Link>
                )}
                {project.links.github && (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-neutral-800 bg-neutral-900/40 px-4 py-2 text-sm text-neutral-200 transition hover:border-sky-400 hover:text-sky-200"
                  >
                    Source Code ↗
                  </Link>
                )}
                {project.links.writeup && (
                  <Link
                    href={project.links.writeup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-neutral-800 bg-neutral-900/40 px-4 py-2 text-sm text-neutral-200 transition hover:border-sky-400 hover:text-sky-200"
                  >
                    Technical Writeup ↗
                  </Link>
                )}
              </div>
            </section>
          )}
        </aside>
      </div>
    </main>
  );
}