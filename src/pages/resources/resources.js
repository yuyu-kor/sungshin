// pages/resources/index.jsx
import React from "react";
import Link from "next/link";

// 연도/태그
const YEARS = ["2025", "2024", "2023"];
const TAGS = [
  "회의록",
  "선거 시행 세칙",
  "총학생회 회칙",
  "가이드라인",
  "전공선택 자료집",
  "양식",
];

// 데모 문서 데이터 (실제 배포 시 href 채워넣기)
const DOCS = [
  // 회의록
  {
    title: "정기회의 회의록(3월 2주차)",
    tag: "회의록",
    date: "2025-03-12",
    href: "#",
  },
  {
    title: "운영위원회 회의록(2월)",
    tag: "회의록",
    date: "2025-02-26",
    href: "#",
  },
  {
    title: "집행국 합동 회의록(1월)",
    tag: "회의록",
    date: "2025-01-18",
    href: "#",
  },

  // 선거 시행 세칙
  {
    title: "선거 시행 세칙 v2.1 (2025 개정)",
    tag: "선거 시행 세칙",
    date: "2025-02-05",
    href: "#",
  },

  // 총학생회 회칙
  {
    title: "총학생회 회칙 v4.0 (전면 개정)",
    tag: "총학생회 회칙",
    date: "2025-01-20",
    href: "#",
  },

  // 가이드라인
  {
    title: "행사 운영 가이드 v1.3",
    tag: "가이드라인",
    date: "2025-03-02",
    href: "#",
  },
  {
    title: "홍보물 제작 가이드 v1.1",
    tag: "가이드라인",
    date: "2025-02-14",
    href: "#",
  },

  // 전공선택 자료집
  {
    title: "전공선택 자료집 2025 (통합판)",
    tag: "전공선택 자료집",
    date: "2025-02-28",
    href: "#",
  },

  // 양식
  { title: "공문 양식(대내)", tag: "양식", date: "2025-01-03", href: "#" },
  { title: "사업계획서 템플릿", tag: "양식", date: "2025-01-15", href: "#" },
];

export default function ResourcesPage() {
  const [query, setQuery] = React.useState("");
  const [activeYear, setActiveYear] = React.useState(YEARS[0]);
  const [activeTags, setActiveTags] = React.useState([]);

  const toggleTag = (t) =>
    setActiveTags((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );

  const filtered = DOCS.filter((d) => {
    const q = query.toLowerCase();
    const byQuery =
      d.title.toLowerCase().includes(q) || d.tag.toLowerCase().includes(q);
    const byTag = activeTags.length === 0 || activeTags.includes(d.tag);
    const byYear = d.date.startsWith(activeYear);
    return byQuery && byTag && byYear;
  });

  return (
    <div className="min-h-screen bg-[#f7f7fb] text-slate-900">
      {/* 브레드크럼 */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 text-xs text-slate-500">
          <Link href="/" className="hover:underline">
            홈
          </Link>
          <span>›</span>
          <strong className="text-slate-900">자료</strong>
        </div>
      </div>

      {/* 본문 */}
      <main className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-8 md:grid-cols-[200px_1fr]">
          {/* 좌측 사이드: 업로드 안내 */}
          <aside className="md:pt-2">
            <h3 className="mb-2 text-sm font-semibold text-slate-700">안내</h3>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold">업로드 규칙</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>
                  · 파일명:{" "}
                  <span className="font-mono">[연도]_[분류]_[제목]_vX</span>
                </li>
                <li>· 확장자: PDF, DOCX, PPTX, XLSX, ZIP</li>
                <li>· 버전: v1, v1.1, v2… (변경 이력 유지)</li>
              </ul>
            </div>
          </aside>

          {/* 우측 콘텐츠 */}
          <section>
            <div className="mb-6">
              <h1 className="text-2xl font-bold tracking-tight">자료</h1>
              <p className="mt-1 text-sm text-slate-600">
                회의록, 선거 시행 세칙, 총학생회 회칙, 가이드라인, 전공선택
                자료집 등 학생회 배포 자료를 모았습니다.
              </p>
            </div>

            {/* 검색/태그/연도 */}
            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-2">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="예: 회의록, 세칙, 회칙, 가이드, 전공선택..."
                  className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none placeholder:text-slate-400 focus:border-[#5b61a8]"
                />
                <button className="h-10 rounded-md bg-[#5b61a8] px-4 text-sm font-medium text-white">
                  검색
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {TAGS.map((t) => (
                  <button
                    key={t}
                    onClick={() => toggleTag(t)}
                    className={`rounded-full border px-3 py-1 text-xs transition ${
                      activeTags.includes(t)
                        ? "border-[#5b61a8] bg-[#5b61a8] text-white"
                        : "border-[#5b61a8] text-[#5b61a8] bg-white hover:bg-violet-50"
                    }`}
                  >
                    #{t}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
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
            </div>

            {/* 전체 자료(필터 적용) */}
            <section id="docs" className="scroll-mt-20">
              <h2 className="text-lg font-semibold">전체 자료</h2>
              <div className="mt-3 overflow-hidden rounded-lg border border-slate-200">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-50 text-xs text-slate-500">
                    <tr>
                      <th className="px-4 py-2">제목</th>
                      <th className="px-4 py-2">분류</th>
                      <th className="px-4 py-2">날짜</th>
                      <th className="px-4 py-2">다운로드</th>
                    </tr>
                  </thead>
                </table>
                <ul className="divide-y">
                  {filtered.map((d, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-1 gap-2 px-4 py-3 sm:grid-cols-[1fr_160px_120px_120px] sm:items-center"
                    >
                      <div className="text-slate-800">{d.title}</div>
                      <div className="text-xs text-slate-600">{d.tag}</div>
                      <div className="text-xs text-slate-600">{d.date}</div>
                      <div>
                        <a
                          href={d.href}
                          className="inline-flex items-center rounded-md border border-slate-300 px-3 py-1 text-xs hover:bg-slate-50"
                        >
                          다운로드
                        </a>
                      </div>
                    </li>
                  ))}
                  {filtered.length === 0 && (
                    <li className="px-4 py-6 text-sm text-slate-500">
                      조건에 맞는 자료가 없습니다.
                    </li>
                  )}
                </ul>
              </div>
            </section>

            {/* 핵심 규정류: 회칙/세칙 */}
            <section id="bylaws" className="mt-10 scroll-mt-20">
              <h2 className="text-lg font-semibold">핵심 규정류</h2>
              <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                <RegCard
                  title="총학생회 회칙 v4.0 (전면 개정)"
                  date="2025-01-20"
                  desc="총학생회 조직/기능/의결/재정 등 기본 규범"
                  href="#"
                  badge="총학생회 회칙"
                />
                <RegCard
                  title="선거 시행 세칙 v2.1 (2025 개정)"
                  date="2025-02-05"
                  desc="선거 일정/자격/절차/선거운동/유의사항"
                  href="#"
                  badge="선거 시행 세칙"
                />
              </div>
            </section>

            {/* 가이드라인 */}
            <section id="guides" className="mt-10 scroll-mt-20">
              <h2 className="text-lg font-semibold">가이드라인</h2>
              <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                <GuideCard
                  title="행사 운영 가이드 v1.3"
                  points={[
                    "안전·시설·보험",
                    "진행 동선",
                    "리스크 관리 체크리스트",
                  ]}
                  href="#"
                />
                <GuideCard
                  title="홍보물 제작 가이드 v1.1"
                  points={["로고/색상/폰트 규정", "SNS·인쇄물 적용 예시"]}
                  href="#"
                />
              </div>
            </section>

            {/* 전공선택 자료집 */}
            <section id="majorbook" className="mt-10 scroll-mt-20">
              <h2 className="text-lg font-semibold">전공선택 자료집</h2>
              <div className="mt-3 rounded-lg border border-slate-200 bg-white p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold">
                      전공선택 자료집 2025 (통합판)
                    </p>
                    <p className="text-xs text-slate-600">
                      학과 소개 · 커리큘럼 · 선배 팁 · 비교과
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="rounded-md border border-slate-300 px-3 py-1 text-xs hover:bg-slate-50"
                    >
                      미리보기
                    </a>
                    <a
                      href="#"
                      className="rounded-md bg-[#5b61a8] px-3 py-1 text-xs text-white"
                    >
                      다운로드
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* 회의록 템플릿/예시 */}
            <section id="minutes" className="mt-10 scroll-mt-20">
              <h2 className="text-lg font-semibold">회의록</h2>
              <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-3">
                {[
                  {
                    title: "정기회의 회의록 템플릿",
                    desc: "목차/안건/의결/액션아이템",
                    href: "#",
                  },
                  {
                    title: "운영위원회 회의록 예시",
                    desc: "안건 정리·표결 기록 포맷",
                    href: "#",
                  },
                  {
                    title: "행사 결과 회의록 예시",
                    desc: "성과·지표·개선사항 회고",
                    href: "#",
                  },
                ].map((c, i) => (
                  <Card key={i} title={c.title} tag="회의록">
                    <p className="text-xs text-slate-500">{c.desc}</p>
                    <div className="mt-3 flex gap-2">
                      <a
                        href={c.href}
                        className="rounded-md border border-slate-300 px-3 py-1 text-xs hover:bg-slate-50"
                      >
                        미리보기
                      </a>
                      <a
                        href={c.href}
                        className="rounded-md bg-[#5b61a8] px-3 py-1 text-xs text-white"
                      >
                        다운로드
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* 양식 모음 */}
            <section id="forms" className="mt-10 scroll-mt-20">
              <h2 className="text-lg font-semibold">양식</h2>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { label: "공문 양식(대내)", ext: "DOCX", href: "#" },
                  { label: "공문 양식(대외)", ext: "DOCX", href: "#" },
                  { label: "집행 요청서", ext: "XLSX", href: "#" },
                  { label: "사업계획서 템플릿", ext: "PPTX", href: "#" },
                  { label: "결과 보고서 템플릿", ext: "PPTX", href: "#" },
                  { label: "회의록 양식", ext: "DOCX", href: "#" },
                ].map((f) => (
                  <a
                    key={f.label}
                    href={f.href}
                    className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-4 py-3 text-sm hover:bg-slate-50"
                  >
                    <span>{f.label}</span>
                    <span className="text-xs text-slate-400">{f.ext}</span>
                  </a>
                ))}
              </div>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}

/* ───── 작은 컴포넌트 ───── */
function Card({ title, tag, children }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">{title}</p>
        <span className="rounded-full border border-[#5b61a8] px-2 py-0.5 text-[10px] text-[#5b61a8]">
          {tag}
        </span>
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function RegCard({ title, date, desc, href, badge }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">{title}</p>
        <span className="rounded-full border border-[#5b61a8] px-2 py-0.5 text-[10px] text-[#5b61a8]">
          {badge}
        </span>
      </div>
      <p className="mt-1 text-xs text-slate-600">{date}</p>
      <p className="mt-2 text-xs text-slate-600">{desc}</p>
      <div className="mt-3 flex gap-2">
        <a
          href={href}
          className="rounded-md border border-slate-300 px-3 py-1 text-xs hover:bg-slate-50"
        >
          전문 보기
        </a>
        <a
          href={href}
          className="rounded-md bg-[#5b61a8] px-3 py-1 text-xs text-white"
        >
          다운로드
        </a>
      </div>
    </div>
  );
}

function GuideCard({ title, points = [], href = "#" }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-2 space-y-1 text-sm text-slate-700">
        {points.map((p, i) => (
          <li key={i}>· {p}</li>
        ))}
      </ul>
      <div className="mt-3 flex gap-2">
        <a
          href={href}
          className="rounded-md border border-slate-300 px-3 py-1 text-xs hover:bg-slate-50"
        >
          미리보기
        </a>
        <a
          href={href}
          className="rounded-md bg-[#5b61a8] px-3 py-1 text-xs text-white"
        >
          다운로드
        </a>
      </div>
    </div>
  );
}
