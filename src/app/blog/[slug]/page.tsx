import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import Footer from "@/components/Footer";
import Link from "next/link";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // We need to handle this synchronously for static export
  return {
    title: "文章 - 热血青年",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            返回博客
          </Link>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20">
                {post.category}
              </span>
              <span className="text-xs text-gray-500">{post.readingTime}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <time>{post.date}</time>
              {post.tags.length > 0 && (
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded bg-white/5 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          {/* Divider */}
          <hr className="border-white/5 mb-10" />

          {/* Content */}
          <div className="prose">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
