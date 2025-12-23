import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-neutral-50">Blogs</h1>
        <p className="text-lg text-neutral-300">
          Writing on engineering, AI, and product craft.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 text-center">
          <h2 className="mb-2 text-xl font-semibold text-neutral-50">
            No posts yet
          </h2>
          <p className="text-neutral-400">
            Posts will appear here once they're published.
          </p>
        </div>
      ) : (
        <div className="grid gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group block"
            >
              <article className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 transition group-hover:-translate-y-1 group-hover:border-sky-400/40 group-hover:bg-neutral-900/60">
                <div className="mb-4 flex items-center justify-between">
                  <time className="text-sm text-neutral-400">{post.date}</time>
                  <span className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-200">
                    Article
                  </span>
                </div>
                
                <h2 className="mb-4 text-2xl font-semibold text-neutral-50 group-hover:text-sky-200">
                  {post.title}
                </h2>
                
                {post.tags.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {post.substackUrl && (
                  <div className="mt-4 text-sm text-neutral-400">
                    Also available on Substack →
                  </div>
                )}
              </article>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}