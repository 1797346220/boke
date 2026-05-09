import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export const metadata = {
  title: "项目 - 热血青年",
  description: "开源项目与工具。",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="pt-16">
        <Projects />
      </div>
      <Footer />
    </>
  );
}
