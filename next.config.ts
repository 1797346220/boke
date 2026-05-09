import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/boke",
  images: {
    unoptimized: true,
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  trailingSlash: true,
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
