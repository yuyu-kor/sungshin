// pages/notices/organization.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const YEARS = ["37대", "36대", "35대", "37대", "36대", "35대"]; // 시안 표기 그대로
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
      {/* 상단 슬림 네비 */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#6A6FB3] text-white">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="grid h-7 w-7 place-items-center rounded-full bg-white/20 text-[10px] font-bold">
              SS
            </div>
            <span className="text-sm font-semibold">
              성신여자대학교 총학생회
            </span>
          </Link>
          <nav className="hidden gap-8 md:flex">
            {[
              { label: "소개", href: "/#about" },
              { label: "공지", href: "/notices/intro" },
              { label: "편의 정보", href: "/#about" },
              { label: "소통", href: "/#contact" },
              { label: "자료", href: "/#resources" },
            ].map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-white/90 hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <a
              className="grid h-8 w-8 place-items-center rounded-full bg-white/90 text-[10px] font-semibold text-slate-900"
              href="#"
            >
              유튜브
            </a>
            <a
              className="grid h-8 w-8 place-items-center rounded-full bg-white/90 text-[10px] font-semibold text-slate-900"
              href="https://instagram.com/sungshinchonghak"
            >
              인스타
            </a>
            <a
              className="grid h-8 w-8 place-items-center rounded-full bg-white/90 text-[10px] font-semibold text-slate-900"
              href="#"
            >
              카톡
            </a>
          </div>
        </div>
      </header>

      {/* 브레드크럼 */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 text-xs text-slate-500">
          <Link href="/" className="hover:underline">
            홈
          </Link>
          <span>›</span>
          <Link
            href="/notices/intro"
            className="hover:underline text-slate-700"
          >
            총학생회 소개
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
                href="/notices/intro"
                className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                총학생회 소개
              </Link>
              <span className="block rounded-md bg-violet-50 px-3 py-2 font-medium text-[#5b61a8] ring-1 ring-violet-200">
                조직도
              </span>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                연혁 소개
              </a>
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

              {/* 중: 부서 리스트 (알약 버튼) */}
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

              {/* 우: 말풍선 박스 + 활동내역 */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_220px]">
                {/* 말풍선 콘텐츠 박스 */}
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

                {/* 활동 내역 */}
                <div>
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

      {/* 하단 푸터 */}
      <footer className="border-t bg-[#6A6FB3] text-white">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold">성신여자대학교 총학생회</p>
              <p className="mt-1 text-xs opacity-90">
                이메일: sungshinchonghak@sungshin.ac.kr
              </p>
              <p className="mt-1 text-xs opacity-90">전화번호: 02-920-0000</p>
              <p className="mt-1 text-xs opacity-90">
                주소: 돈암수정캠퍼스 학생회관 219호 / 미아운정캠퍼스 B동 지하
                1층 119호
              </p>
            </div>
            <div className="flex flex-col items-end justify-end gap-2">
              <a
                href="https://instagram.com/sungshinchonghak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />{" "}
                @sungshinchonghak
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <Image
                  src="/icons/kakao.svg"
                  alt="KakaoTalk"
                  width={20}
                  height={20}
                />{" "}
                SSWU_chonghak
              </a>
            </div>
          </div>
        </div>
      </footer>
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
