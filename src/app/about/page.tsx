// Build an About page for my portfolio.
// Include:
// - My role: Staff Engineer at Meta
// - Focus: Android performance, AI agents for quality, mobile infra
// - Mentions of hackathon judging and program committees
// Use semantic HTML and Tailwind for nice typography on a dark background.

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-12">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
          About
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-neutral-50 sm:text-5xl">
          Sumeet Singh Arora
        </h1>
        <p className="text-lg text-neutral-300">
          Staff Engineer at Meta focused on Android performance, AI agents for
          quality, and resilient mobile infrastructure.
        </p>
      </header>

      <section className="space-y-4 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
        <h2 className="text-2xl font-semibold text-neutral-50">What I do</h2>
        <p className="text-neutral-300">
          I design and ship systems that keep large-scale Android apps fast,
          reliable, and observable. My current work combines mobile performance
          tooling with AI-powered agents that monitor quality, spot regressions,
          and automate fixes before they reach users.
        </p>
        <p className="text-neutral-300">
          On the infrastructure side, I partner with product teams to harden
          build pipelines, optimize startup and rendering paths, and ensure our
          developer experience scales across hundreds of contributors.
        </p>
      </section>

      <section className="grid gap-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 sm:grid-cols-2">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-neutral-50">AI for Quality</h3>
          <p className="text-neutral-300">
            Prototyping agents that watch performance budgets, surface anomalies,
            and suggest targeted remediation. I enjoy blending telemetry with LLM
            reasoning to keep apps healthy without slowing teams down.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-neutral-50">Android Performance</h3>
          <p className="text-neutral-300">
            Deep dives into traces, cold start, and rendering pipelines. I focus
            on pragmatic wins: fewer jank sources, lighter bundles, and better
            on-device profiling signals for engineers.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
        <h2 className="text-2xl font-semibold text-neutral-50">Community</h2>
        <p className="text-neutral-300">
          I regularly serve as a hackathon judge and participate on program
          committees, helping evaluate projects at the intersection of mobile,
          AI, and developer experience. I enjoy coaching teams to refine their
          narrative and sharpen technical impact.
        </p>
      </section>
    </main>
  );
}
