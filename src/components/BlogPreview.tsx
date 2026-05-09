"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

export default function BlogPreview({ posts }: { posts: Post[] }) {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            最新 <span className="gradient-text">文章</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            关于 AI、量化交易和软件工程的思考
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}/`} className="block group">
                <article className="glass-card p-6 h-full hover:border-white/10 transition-all glow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20">
                      {post.category}
                    </span>
                    <time className="text-xs text-gray-500">{post.date}</time>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 text-sm text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    阅读更多
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 hover:border-white/20 transition-all"
          >
            查看全部文章
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
