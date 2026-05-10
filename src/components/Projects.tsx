"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "QQQ Live 实盘交易系统",
    desc: "QQQ 0DTE 实盘交易系统 v6.2，1 分钟 K 线实时订阅，双路径突破信号，Tkinter 桌面控制面板 + Web 仪表盘，系统托盘常驻，PyInstaller 打包，看门狗崩溃恢复。",
    tags: ["Python", "Longbridge", "Tkinter", "PyInstaller"],
    slug: "qqq-live",
    github: "https://github.com/1797346220/qqq-trading-system",
  },
  {
    title: "QQQ 0DTE 高频策略 v7",
    desc: "QQQ 末日期权全自动交易系统，5 大信号引擎并行（VWAP 突破、布林带挤压、RSI 背离、EMA 交叉、开盘区间突破），VIX 波动率过滤，实时 WebSocket 仪表盘，飞书通知。",
    tags: ["Python", "FastAPI", "Longbridge", "WebSocket"],
    slug: "qqq-hf-v7",
  },
  {
    title: "QQQ 量化交易系统",
    desc: "QQQ 0DTE 双路径突破交易系统，经典+加速模式，Black-Scholes 定价回测引擎，分阶段超时退出，动态止盈止损，Flask Web 仪表盘。",
    tags: ["Python", "Flask", "Longbridge", "NumPy"],
    slug: "qqq-quant",
  },
  {
    title: "霓虹突击",
    desc: "霓虹风格纵版射击游戏，简单/困难/地狱三种难度，4种独特战机（幻影/烈焰/寒冰/雷霆），多种子弹样式与拖尾特效，Boss 战，道具掉落，触屏适配。",
    tags: ["HTML5", "Canvas", "JavaScript"],
    slug: "wey-miniprogram",
    link: "https://1797346220.github.io/feiji/",
  },
];

export default function Projects() {
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
            精选 <span className="gradient-text">项目</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            我开发的量化交易系统与应用
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link || `/boke/projects/${project.slug}/`}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              className="group block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="glass-card p-6 h-full hover:border-white/10 transition-all glow">
                <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors mb-4 flex items-center gap-2">
                  {project.title}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20 transition-colors"
                    >
                      已开源
                    </a>
                  )}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {project.desc}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 group-hover:text-primary transition-colors flex items-center gap-1">
                    查看详情
                    <svg
                      className="w-3.5 h-3.5"
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
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
