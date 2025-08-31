// components/NavBar.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { NAV, SOCIALS } from "@/constants/navigation";

export default function NavBar({
  logoSrc = "/logo.png",
  className = "bg-[#6A6FB3] text-white border-b border-white/10",
  innerClassName = "mx-auto flex h-16 max-w-6xl items-center justify-between px-4",
}) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const isActive = (href) => {
    if (href.startsWith("#")) return false;
    if (href === "/") return router.asPath === "/";
    return router.asPath.startsWith(href);
  };

  return (
    <header className={`sticky top-0 z-50 w-full ${className}`}>
      <div className={innerClassName}>
        {/* 로고 */}
        <Link href="/" aria-label="홈으로" className="shrink-0">
          <Image
            src={logoSrc}
            alt="성신여자대학교 로고"
            width={150}
            height={40}
            priority
          />
        </Link>

        {/* 데스크톱 네비 (밑줄 애니메이션) */}
        <nav className="hidden md:flex md:items-center md:gap-8">
          {NAV.map((n) => {
            const active = isActive(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`group relative pb-1 text-sm font-semibold tracking-tight transition-colors ${
                  active ? "text-white" : "text-white/90 hover:text-white"
                }`}
              >
                <span className="relative inline-block">
                  {n.label}
                  {/* 흰색 밑줄 (글자보다 길게) */}
                  <span
                    className={`pointer-events-none absolute -bottom-1 left-[-4px] h-[2px] w-[calc(100%+8px)] origin-left rounded-full bg-white transition-transform duration-300 ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </span>
              </Link>
            );
          })}
        </nav>

        {/* SNS 동그라미 버튼 */}
        <div className="hidden items-center gap-3 md:flex">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-full bg-white text-[11px] font-semibold text-slate-900 shadow ring-1 ring-black/5 hover:brightness-95"
            >
              {s.abbr}
            </a>
          ))}
        </div>

        {/* 모바일 토글 */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 md:hidden"
          aria-label="메뉴 열기"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* 모바일 드롭다운 */}
      {open && (
        <div className="md:hidden">
          <div className="mx-auto max-w-6xl px-4 pb-4">
            <nav className="space-y-1">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="group relative block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  <span className="relative inline-block">
                    {n.label}
                    <span className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#5b61a8] transition-transform duration-300 group-hover:scale-x-100" />
                  </span>
                </Link>
              ))}
            </nav>
            <div className="mt-3 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white text-[11px] font-semibold text-slate-900 shadow ring-1 ring-black/5"
                  onClick={() => setOpen(false)}
                >
                  {s.abbr}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
