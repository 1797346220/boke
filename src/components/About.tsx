"use client";

import { motion } from "framer-motion";

const interests = [
  {
    icon: "🧠",
    title: "AI & 机器学习",
    desc: "利用大语言模型、智能体和现代机器学习技术构建智能系统。",
  },
  {
    icon: "📈",
    title: "量化交易",
    desc: "开发系统化交易策略与自动化执行系统。",
  },
  {
    icon: "💻",
    title: "软件工程",
    desc: "使用现代框架和云原生架构进行全栈开发。",
  },
  {
    icon: "🔬",
    title: "金融研究",
    desc: "深入研究市场微观结构、Alpha 生成与风险建模。",
  },
];

export default function About() {
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
            关于 <span className="gradient-text">我</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
            永远相信美好的事情即将发生
          </p>

          {/* Longbridge Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {[
              { label: "关注者", value: "1,500" },
              { label: "动态", value: "1,234" },
              { label: "获赞与收藏", value: "7,521" },
              { label: "徽章", value: "26" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card p-6 glow group hover:border-white/10 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
