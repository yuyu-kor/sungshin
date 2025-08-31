import React from "react";
import Link from "next/link";

export default function CalendarPage() {
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
          <strong className="text-slate-900">학사 일정</strong>
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
              <Link
                href="/notices/board"
                className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                게시판
              </Link>
              <span className="block rounded-md bg-violet-50 px-3 py-2 font-medium text-[#5b61a8] ring-1 ring-violet-200">
                학사 일정
              </span>
            </nav>
          </aside>

          {/* 우측 본문 */}
          <section>
            <h1 className="mb-3 text-xl font-bold tracking-tight">학사 일정</h1>
            <p className="text-sm text-slate-600 mb-6">
              월간 학사 일정을 한눈에 확인하세요.
            </p>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="grid aspect-[4/3] w-full place-items-center overflow-hidden rounded-xl bg-slate-200 text-sm text-slate-600">
                (학사 일정 캘린더 자리)
              </div>
              <p className="mt-3 text-xs text-slate-600">
                월간 학사 일정이 표시됩니다. 데이터 연동 전까지는
                자리표시자입니다.
              </p>
              <div className="mt-3 flex gap-2">
                <a
                  href="#"
                  className="rounded-md border border-slate-300 px-3 py-1 text-xs hover:bg-slate-50"
                >
                  월간 보기
                </a>
                <a
                  href="#"
                  className="rounded-md bg-[#5b61a8] px-3 py-1 text-xs text-white"
                >
                  학사 상세
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
