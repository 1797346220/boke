import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory).filter((name) =>
    name.endsWith(".mdx")
  );

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || slug,
      date: data.date instanceof Date
        ? data.date.toISOString().split("T")[0]
        : String(data.date || "2024-01-01"),
      category: data.category || "General",
      excerpt: data.excerpt || content.slice(0, 160) + "...",
      tags: data.tags || [],
      readingTime: stats.text.replace("min read", "分钟阅读").replace("mins read", "分钟阅读"),
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || slug,
    date: data.date instanceof Date
      ? data.date.toISOString().split("T")[0]
      : String(data.date || "2024-01-01"),
    category: data.category || "General",
    excerpt: data.excerpt || content.slice(0, 160) + "...",
    tags: data.tags || [],
    readingTime: stats.text.replace("min read", "分钟阅读").replace("mins read", "分钟阅读"),
    content,
  };
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((p) => p.category));
  return Array.from(categories);
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter((p) => p.category === category);
}
