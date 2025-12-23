import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, type PostMeta } from "../../../lib/posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.meta.title} | Blog`,
    description: `${post.meta.title} - Published ${post.meta.date}`,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-8">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
        >
          ← Back to Blogs
        </Link>
      </div>

      <header className="mb-12">
        <div className="mb-6">
          <h1 className="mb-4 text-4xl font-bold text-neutral-50 leading-tight">
            {post.meta.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-neutral-400">
            <time dateTime={post.meta.date}>
              {new Date(post.meta.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>Article</span>
          </div>
        </div>

        {post.meta.tags.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            {post.meta.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {post.meta.substackUrl && (
          <div className="mb-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4">
            <Link
              href={post.meta.substackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-300 hover:text-sky-400"
            >
              Also available on Substack →
            </Link>
          </div>
        )}
      </header>

      <article className="prose prose-invert max-w-none">
        <div 
          className="
            [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-neutral-50 [&>h1]:mb-6
            [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-neutral-50 [&>h2]:mt-12 [&>h2]:mb-4
            [&>h3]:text-xl [&>h3]:font-medium [&>h3]:text-neutral-50 [&>h3]:mt-8 [&>h3]:mb-3
            [&>p]:text-neutral-300 [&>p]:leading-relaxed [&>p]:mb-6
            [&>ul]:text-neutral-300 [&>ul]:mb-6 [&>ul]:ml-6
            [&>li]:mb-2
            [&>strong]:text-neutral-100 [&>strong]:font-semibold
            [&>code]:text-sky-300 [&>code]:bg-neutral-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded
            [&>pre]:bg-neutral-900 [&>pre]:border [&>pre]:border-neutral-700 [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:mb-6 [&>pre]:overflow-x-auto
            [&>pre>code]:text-neutral-300 [&>pre>code]:bg-transparent [&>pre>code]:p-0
          "
          dangerouslySetInnerHTML={{ __html: post.html }} 
        />
      </article>

      <footer className="mt-16 border-t border-neutral-800 pt-8">
        <div className="flex items-center justify-between">
          <Link
            href="/blogs"
            className="rounded-full border border-neutral-700 px-6 py-3 text-sm text-neutral-200 transition hover:border-sky-400 hover:text-sky-200"
          >
            ← More Blogs
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-neutral-700 px-6 py-3 text-sm text-neutral-200 transition hover:border-sky-400 hover:text-sky-200"
          >
            About the Author
          </Link>
        </div>
      </footer>
    </main>
  );
}