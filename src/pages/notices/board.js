import React from "react";
import Link from "next/link";

export default function BoardPage() {
  return (
    <div className="min-h-screen bg-[#f7f7fb] text-slate-900">
      {/* 브레드크럼 */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 text-xs text-slate-500">
          <Link href="/" className="hover:underline">
            홈
          </Link>
          <span>›</span>
          <span className="text-slate-700">공지</span>
          <span>›</span>
          <strong className="text-slate-900">게시판</strong>
        </div>
      </div>

      {/* 콘텐츠 */}
      <main className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-8 md:grid-cols-[200px_1fr]">
          {/* 좌측 탭 */}
          <aside className="md:pt-2">
            <h3 className="mb-2 text-sm font-semibold text-slate-700">공지</h3>
            <nav className="space-y-1 text-sm">
              <Link
                href="/notices/notices"
                className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                공지사항
              </Link>
              <span className="block rounded-md bg-violet-50 px-3 py-2 font-medium text-[#5b61a8] ring-1 ring-violet-200">
                게시판
              </span>
              <Link
                href="/notices/calendar"
                className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                학사 일정
              </Link>
            </nav>
          </aside>

          {/* 우측 본문 */}
          <section>
            <h1 className="mb-3 text-xl font-bold tracking-tight">게시판</h1>
            <p className="text-sm text-slate-600 mb-6">
              학생회 게시판입니다. 의견과 소식을 공유해요.
            </p>

            <ul className="divide-y rounded-lg border border-slate-200 bg-white">
              <li className="px-4 py-3 hover:bg-slate-50">
                분실물 통합 보관소 운영{" "}
                <span className="ml-2 text-xs text-slate-500">2025-08-14</span>
              </li>
              <li className="px-4 py-3 hover:bg-slate-50">
                설문조사 요약 리포트 공개{" "}
                <span className="ml-2 text-xs text-slate-500">2025-08-16</span>
              </li>
              <li className="px-4 py-3 hover:bg-slate-50">
                문화탐방 프로그램 참가자 모집{" "}
                <span className="ml-2 text-xs text-slate-500">2025-08-12</span>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
