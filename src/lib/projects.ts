import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export interface ProjectMeta {
  slug: string;
  title: string;
  desc: string;
  tags: string[];
  tech: string;
}

export interface Project extends ProjectMeta {
  content: string;
}

export function getAllProjects(): ProjectMeta[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory).filter((name) =>
    name.endsWith(".mdx")
  );

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      desc: data.desc || "",
      tags: data.tags || [],
      tech: data.tech || "",
    };
  });
}

export function getProjectBySlug(slug: string): Project | null {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    desc: data.desc || "",
    tags: data.tags || [],
    tech: data.tech || "",
    content,
  };
}
