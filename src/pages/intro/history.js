// pages/notices/history.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

// 연도 탭 + 연혁 데이터 (예시)
const YEARS = ["37대", "36대", "35대"];
const HISTORY = {
  "37대": [
    {
      date: "06.21",
      title: "무슨 활동",
      body: "무슨 활동을 했다고 간단히 적어주세요. 두 줄까지 나와도 안정적입니다.",
    },
    {
      date: "06.11",
      title: "무슨 활동",
      body: "주요 행사 진행, 회칙 개정, 복지 사업 론칭 등 핵심 결과 중심으로 적으면 좋아요.",
    },
    {
      date: "06.02",
      title: "무슨 활동",
      body: "사진/자료는 상세 페이지에서 보이도록 연결할 수 있습니다.",
    },
  ],
  "36대": [
    { date: "12.15", title: "무슨 활동", body: "이전 대 회고를 간단히." },
    { date: "09.02", title: "무슨 활동", body: "성과 요약." },
  ],
  "35대": [{ date: "05.20", title: "무슨 활동", body: "주요 포인트만." }],
};

export default function HistoryPage() {
  const [activeYear, setActiveYear] = React.useState(YEARS[0]);
  const items = HISTORY[activeYear] ?? [];

  return (
    <div className="min-h-screen bg-[#f7f7fb] text-slate-900">
      {/* 브레드크럼 */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 text-xs text-slate-500">
          <Link href="/" className="hover:underline">
            홈
          </Link>
          <span>›</span>
          <Link href="/intro/intro" className="hover:underline text-slate-700">
            소개
          </Link>
          <span>›</span>
          <strong className="text-slate-900">연혁 소개</strong>
        </div>
      </div>

      {/* 본문 */}
      <main className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-8 md:grid-cols-[200px_1fr]">
          {/* 좌측 서브내비 */}
          <aside className="md:pt-2">
            <h3 className="mb-2 text-sm font-semibold text-slate-700">소개</h3>
            <nav className="space-y-1 text-sm">
              <Link
                href="/intro/intro"
                className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                총학생회 소개
              </Link>
              <Link
                href="/intro/organization"
                className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                조직도
              </Link>
              <span className="block rounded-md bg-violet-50 px-3 py-2 font-medium text-[#5b61a8] ring-1 ring-violet-200">
                연혁 소개
              </span>
            </nav>
          </aside>

          {/* 우측 콘텐츠 */}
          <section>
            {/* 타이틀 + 연도 탭 */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold tracking-tight">연혁 소개</h1>
              <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-slate-600">
                {YEARS.map((y) => (
                  <button
                    key={y}
                    onClick={() => setActiveYear(y)}
                    className={`pb-1 transition ${
                      activeYear === y
                        ? "border-b-2 border-[#5b61a8] font-semibold text-[#5b61a8]"
                        : "hover:text-slate-900"
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
              <div className="mt-4 h-px w-full bg-slate-200" />
            </div>

            {/* 타임라인 */}
            <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[140px_1fr]">
              {/* 좌측 세로 라인 */}
              <div className="relative">
                <div className="absolute left-[calc(100%-1px)] top-0 h-full w-[2px] bg-[#cfc8ff]" />
              </div>

              {/* 리스트 */}
              <div className="space-y-8">
                {items.map((it, idx) => (
                  <article key={idx} className="relative">
                    <div className="md:absolute md:-left-[calc(140px-10px)] md:top-0">
                      <time className="text-xs font-medium text-slate-500">
                        {it.date}
                      </time>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                          {it.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-700">
                          {it.body}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}

                {/* 항목이 없을 때 */}
                {items.length === 0 && (
                  <p className="text-sm text-slate-500">
                    해당 연도의 연혁이 아직 없습니다.
                  </p>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
