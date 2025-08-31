import React from "react";
import Link from "next/link";

export default function NoticesPage() {
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
          <strong className="text-slate-900">공지사항</strong>
        </div>
      </div>

      {/* 콘텐츠 */}
      <main className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-8 md:grid-cols-[200px_1fr]">
          {/* 좌측 탭 */}
          <aside className="md:pt-2">
            <h3 className="mb-2 text-sm font-semibold text-slate-700">공지</h3>
            <nav className="space-y-1 text-sm">
              <span className="block rounded-md bg-violet-50 px-3 py-2 font-medium text-[#5b61a8] ring-1 ring-violet-200">
                공지사항
              </span>
              <Link
                href="/notices/board"
                className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                게시판
              </Link>
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
            <h1 className="mb-3 text-xl font-bold tracking-tight">공지사항</h1>
            <p className="text-sm text-slate-600 mb-6">
              학우들에게 필요한 공식 안내를 모았습니다.
            </p>

            <ul className="divide-y rounded-lg border border-slate-200 bg-white">
              <li className="px-4 py-3 hover:bg-slate-50">
                [공지] 2학기 학생복지 지원 안내{" "}
                <span className="ml-2 text-xs text-slate-500">2025-08-30</span>
              </li>
              <li className="px-4 py-3 hover:bg-slate-50">
                [모집] 대동제 운영 스태프 추가 모집{" "}
                <span className="ml-2 text-xs text-slate-500">2025-08-25</span>
              </li>
              <li className="px-4 py-3 hover:bg-slate-50">
                [안내] 학내 공간 대관 절차 변경{" "}
                <span className="ml-2 text-xs text-slate-500">2025-08-18</span>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
