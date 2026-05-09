export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lg font-bold gradient-text">热血青年</span>
            <p className="text-sm text-gray-500 mt-1">
              永远相信美好的事情即将发生
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/1797346220"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="代码仓库"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://wpa.qq.com/msgrd?v=3&uin=1797346220&site=qq&menu=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="QQ"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474c0 .665.17 1.025.395 1.025.19 0 .46-.31.762-.867.15.4.442.998.84 1.49-.413.252-.682.617-.682.967 0 .687.906.943 2.148.943.496 0 .932-.063 1.274-.168.26.563.684 1.164 1.208 1.596-.48.14-.868.397-.868.71 0 .474.793.673 2.023.673s2.023-.199 2.023-.673c0-.313-.388-.57-.868-.71.524-.432.948-1.033 1.208-1.596.342.105.778.168 1.274.168 1.242 0 2.148-.256 2.148-.943 0-.35-.27-.715-.682-.967.398-.492.69-1.09.84-1.49.302.558.572.867.762.867.226 0 .395-.36.395-1.025 0-2.514-2.167-6.954-2.167-6.954V9.325C18.29 3.364 14.268 2 12.003 2z" />
              </svg>
            </a>
            <a
              href="https://longbridge.com/zh-CN/profiles/17928542"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="长桥"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1.5 2v14h15V5h-15zm3 3h3v2h-3V8zm0 4h9v2h-9v-2zm0 4h6v2h-6v-2z" />
              </svg>
            </a>
            <a
              href="mailto:1797346220@qq.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="邮箱"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} 热血青年
        </div>
      </div>
    </footer>
  );
}
