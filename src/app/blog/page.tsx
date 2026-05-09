import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Footer from "@/components/Footer";

export const metadata = {
  title: "博客 - 热血青年",
  description: "关于 AI、量化交易和软件工程的文章。",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = ["全部", ...new Set(posts.map((p) => p.category))];

  return (
    <>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">博客</span>
          </h1>
          <p className="text-gray-400 text-lg mb-12">
            关于 AI、量化交易和软件工程的思考
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-gray-400 border border-white/5"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Posts list */}
          <div className="space-y-6">
            {posts.length === 0 ? (
              <div className="glass-card p-12 text-center">
                <p className="text-gray-400 text-lg">暂无文章</p>
                <p className="text-gray-500 text-sm mt-2">
                  在 <code className="text-primary">content/posts/</code> 目录下添加 .mdx 文件即可开始写作
                </p>
              </div>
            ) : (
              posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="block group"
                >
                  <article className="glass-card p-6 hover:border-white/10 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-500">
                            {post.readingTime}
                          </span>
                        </div>
                        <h2 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                      <time className="text-sm text-gray-500 shrink-0">
                        {post.date}
                      </time>
                    </div>
                  </article>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
