// pages/convenience/links.jsx
import React from "react";
import Link from "next/link";
import ConvenienceSideNav from "@/components/ConvenienceSideNav";

const URLS = {
  dining: "/dining",
  shuttle: "/shuttle",
  librarySeats: "/library-seats",
  academicNotice: "/academic-notice",
  certificates: "/certificates",
  scholarship: "/scholarship",
  itWifi: "/it-wifi",
};

export default function LinksPage() {
  const LINKS = [
    { label: "학식 메뉴", href: URLS.dining },
    { label: "셔틀/교통", href: URLS.shuttle },
    { label: "도서관 좌석", href: URLS.librarySeats },
    { label: "학사 공지", href: URLS.academicNotice },
    { label: "증명서 발급", href: URLS.certificates },
    { label: "장학/학자금", href: URLS.scholarship },
    { label: "IT 서비스/와이파이", href: URLS.itWifi },
  ];

  return (
    <div className="min-h-screen bg-[#f7f7fb] text-slate-900">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 text-xs text-slate-500">
          <Link href="/" className="hover:underline">
            홈
          </Link>
          <span>›</span>
          <Link href="/convenience" className="hover:underline">
            편의 정보
          </Link>
          <span>›</span>
          <strong className="text-slate-900">캠퍼스생활링크</strong>
        </div>
      </div>

      <main className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-8 md:grid-cols-[200px_1fr]">
          <ConvenienceSideNav />

          <section>
            <h1 className="text-2xl font-bold">캠퍼스생활링크</h1>
            <p className="mt-1 text-sm text-slate-600">
              총학생회가 운영하지 않는 공식 경로로 연결합니다. 최신 공지는 각
              기관 공지를 확인하세요.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-4 py-3 text-sm hover:bg-slate-50"
                >
                  <span>{l.label}</span>
                  <span className="text-xs text-slate-400">›</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
