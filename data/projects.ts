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
      "Modern portfolio and blog platform built with Next.js, featuring dynamic content management, MDX blog posts, and a clean dark theme. Designed to showcase engineering projects while providing a space for technical writing.",
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "MDX", "Vercel"],
    highlights: [
      "Server-side rendered with static generation for optimal performance and SEO.",
      "Dynamic project showcase with structured data model and detailed case studies.",
      "MDX-powered blog system with frontmatter support and markdown rendering.",
      "Responsive dark theme with accessible navigation and clean typography.",
      "Automated deployment pipeline with Vercel integration and GitHub Actions.",
    ],
    links: {
      github: "https://github.com/singhsume123/my-portfolio-ai-v2",
      demo: "https://my-portfolio-ai-v2.vercel.app/",
    },
    featured: true,
  },
];
