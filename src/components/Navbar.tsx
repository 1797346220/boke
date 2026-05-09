"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/blog/", label: "博客" },
  { href: "/projects/", label: "项目" },
  { href: "/about/", label: "关于" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight gradient-text"
        >
          热血青年
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="切换菜单"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#050816]/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
