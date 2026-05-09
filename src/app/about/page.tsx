import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata = {
  title: "关于 - 热血青年",
  description: "开发者、交易者和研究者。",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-16">
        <About />
      </div>
      <Footer />
    </>
  );
}
