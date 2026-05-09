import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <p className="text-gray-400 text-lg mb-8">页面未找到</p>
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition text-white"
        >
          返回首页
        </Link>
      </div>
    </section>
  );
}
