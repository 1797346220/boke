"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-gradient" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-gradient" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar */}
          <div className="relative mx-auto w-32 h-32 mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-40" />
            <img
              src="/boke/avatar.jpg"
              alt="热血青年"
              className="relative w-32 h-32 rounded-full border border-white/20 shadow-2xl object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="gradient-text">热血青年</span>
          </h1>

          {/* Slogan */}
          <p className="mt-6 text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            AI · 量化 · 交易 · 开发者
          </p>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            永远相信美好的事情即将发生
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="https://github.com/1797346220"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </span>
          </a>

          <a
            href="/blog/"
            className="px-8 py-3.5 rounded-xl border border-white/10 text-gray-300 font-medium transition-all hover:bg-white/5 hover:border-white/20 hover:-translate-y-0.5"
          >
            阅读博客
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-white/40"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
