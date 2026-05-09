import Hero from "@/components/Hero";
import About from "@/components/About";
import BlogPreview from "@/components/BlogPreview";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <About />
      <BlogPreview posts={posts} />
      <Projects />
      <Footer />
    </>
  );
}
