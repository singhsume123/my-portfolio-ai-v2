export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  description: string;
  stack: string[];
  highlights: string[];
  links: {
    github?: string;
    demo?: string;
    writeup?: string;
  };
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "android-perf-oss",
    title: "Android Screen Performance OSS",
    oneLiner: "Open-source observability for TTFR/TTI with cancellation and failure tracking [Upcoming]",
    description:
      "Lightweight Android library that instruments critical render points, captures TTFR/TTI, and ties traces to cancellation and failure reasons to close the loop with product metrics. Currently in development.",
    stack: ["Kotlin", "Android", "Perfetto", "OpenTelemetry"],
    highlights: [
      "Built pluggable interceptors for navigation, rendering, and cold start paths.",
      "Added cancellation/failure taxonomy to correlate drops with user intent.",
      "Exports traces to OTLP and dashboards with actionable budgets.",
    ],
    links: {
      github: "https://github.com/example/android-perf-oss",
      writeup: "https://example.com/blog/android-perf-oss",
    },
    featured: false,
  },
  {
    slug: "portfolio-blog",
    title: "Full-Stack Portfolio & Blog",
    oneLiner: "This site: opinionated portfolio with featured projects and writing.",
    description:
      "Full-stack portfolio and blog experience with themed layout, featured work, and space for writing about engineering, AI, and product craft.",
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    highlights: [
      "Global dark theme with accessible navigation and layout.",
      "Featured projects sourced from structured content.",
      "Blog-ready sections with planned CMS integration.",
    ],
    links: {
      github: "https://github.com/example/portfolio-blog",
      demo: "https://example.com",
    },
    featured: true,
  },
];
