// pages/notices/organization.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const YEARS = ["37대", "36대", "35대"];
const DEPTS = [
  "교육정책국",
  "대외협력국",
  "문화사업국",
  "미디어기획국",
  "사무운영국",
  "인권생활국",
  "재정복지국",
  "학생자치국",
];

export default function OrganizationPage() {
  const [activeYear, setActiveYear] = React.useState("37대");
  const [activeDept, setActiveDept] = React.useState(DEPTS[0]);

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
          <strong className="text-slate-900">조직도</strong>
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
              <span className="block rounded-md bg-violet-50 px-3 py-2 font-medium text-[#5b61a8] ring-1 ring-violet-200">
                조직도
              </span>
              <Link
                href="/intro/history"
                className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                연혁 소개
              </Link>
            </nav>
          </aside>

          {/* 우측 콘텐츠 */}
          <section>
            <div className="mb-6 flex items-end justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">조직도</h1>
              </div>
              {/* 연도 탭 */}
              <div className="flex flex-wrap items-center gap-5 text-sm text-slate-600">
                {YEARS.map((y, i) => (
                  <button
                    key={`${y}-${i}`}
                    onClick={() => setActiveYear(y)}
                    className={`pb-1 transition ${
                      activeYear === y
                        ? "font-semibold text-[#5b61a8] border-b-2 border-[#5b61a8]"
                        : "hover:text-slate-900"
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            {/* 조직도 본문 레이아웃 */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_260px_1fr]">
              {/* 좌: 회장/부회장 원형 */}
              <div className="space-y-10">
                <LeaderCircle label="총학생회장" />
                <LeaderCircle label="부총학생회장" />
              </div>

              {/* 중: 부서 리스트 (세로 일렬 버튼, 원래 배치 그대로) */}
              <div>
                <div className="mx-auto w-full max-w-[260px] space-y-3">
                  {DEPTS.map((d) => (
                    <button
                      key={d}
                      onClick={() => setActiveDept(d)}
                      className={`w-full rounded-full border px-4 py-2 text-sm transition ${
                        activeDept === d
                          ? "border-[#5b61a8] text-white bg-[#5b61a8]"
                          : "border-[#5b61a8] text-[#5b61a8] bg-white hover:bg-violet-50"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* 우: 말풍선 박스 */}
              <div>
                <div
                  className="relative rounded-lg border border-slate-200 bg-slate-100/70 p-4
                                before:absolute before:-left-3 before:top-6 before:border-y-8 before:border-y-transparent
                                before:border-r-8 before:border-r-slate-200 after:absolute after:-left-2 after:top-[26px]
                                after:border-y-7 after:border-y-transparent after:border-r-7 after:border-r-slate-100/70"
                >
                  <div className="aspect-[16/10] rounded-md bg-slate-200" />
                  <p className="mt-3 text-sm text-slate-600">
                    <span className="font-semibold">{activeDept}</span> 부서
                    소개 영역입니다. 담당 업무/주요 프로그램/문의 채널 등을
                    입력하세요.
                  </p>
                </div>

                {/* 활동 내역: 말풍선 밑으로 */}
                <div className="mt-6">
                  <p className="text-sm font-semibold text-[#5b61a8]">
                    {new Date().getFullYear()} 활동내역
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                        무슨 활동을 적어요
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

/* ───── 작은 컴포넌트 ───── */
function LeaderCircle({ label }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-20 w-20 shrink-0 rounded-full bg-[#6A6FB3]/30 ring-1 ring-[#6A6FB3]/40" />
      <span className="text-sm text-slate-700">{label}</span>
    </div>
  );
}
