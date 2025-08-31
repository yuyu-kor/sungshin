// pages/resources/index.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const YEARS = ["2025", "2024", "2023"];
const TAGS = [
  "회의록",
  "보고서",
  "정책",
  "양식",
  "브랜딩",
  "미디어",
  "예산",
  "데이터",
];

const DOCS = [
  { title: "정기회의 회의록(1월 2주차)", tag: "회의록", date: "2025-01-12" },
  { title: "학기 초 사업계획(안)", tag: "보고서", date: "2025-02-28" },
  { title: "학생 복지 지침 v1.2", tag: "정책", date: "2025-03-10" },
  { title: "공문 양식(대내)", tag: "양식", date: "2025-01-03" },
  { title: "로고 가이드라인 v3", tag: "브랜딩", date: "2025-02-02" },
  { title: "보도자료 템플릿", tag: "미디어", date: "2025-03-03" },
  { title: "1분기 예산 집행 요약", tag: "예산", date: "2025-04-05" },
  { title: "행사 만족도 설문 데이터 샘플", tag: "데이터", date: "2025-05-01" },
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
    const byQuery =
      d.title.toLowerCase().includes(query.toLowerCase()) ||
      d.tag.toLowerCase().includes(query.toLowerCase());
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
          {/* 좌측 서브내비 */}
          <aside className="md:pt-2">
            <h3 className="mb-2 text-sm font-semibold text-slate-700">메뉴</h3>
            <nav className="space-y-1 text-sm">
              <Link
                href="/convenience"
                className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                편의 정보
              </Link>
              <Link
                href="/communication"
                className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                소통
              </Link>
              <span className="block rounded-md bg-violet-50 px-3 py-2 font-medium text-[#5b61a8] ring-1 ring-violet-200">
                자료
              </span>
            </nav>

            {/* 업로드 안내 카드 (자리표시자) */}
            <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold">업로드 안내</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>
                  · 파일명 규칙:{" "}
                  <span className="font-mono">[연도]_[분류]_[제목]_vX</span>
                </li>
                <li>· 허용 확장자: PDF, DOCX, PPTX, XLSX, ZIP</li>
                <li>· 버전 관리: v1, v1.1, v2…</li>
              </ul>
            </div>
          </aside>

          {/* 우측 콘텐츠 */}
          <section>
            <div className="mb-6">
              <h1 className="text-2xl font-bold tracking-tight">자료</h1>
              <p className="mt-1 text-sm text-slate-600">
                회의록, 보고서, 정책/규정, 양식, 브랜딩 에셋, 미디어 키트,
                예산·결산 자료를 모았습니다.
              </p>
            </div>

            {/* 검색/태그/연도 탭 */}
            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-2">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="예: 회의록, 양식, 로고, 예산..."
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

            {/* 문서 자료실 (표) */}
            <section id="docs" className="scroll-mt-20">
              <h2 className="text-lg font-semibold">문서 자료실</h2>
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
                      className="grid grid-cols-1 gap-2 px-4 py-3 sm:grid-cols-[1fr_120px_120px_120px] sm:items-center"
                    >
                      <div className="text-slate-800">{d.title}</div>
                      <div className="text-xs text-slate-600">{d.tag}</div>
                      <div className="text-xs text-slate-600">{d.date}</div>
                      <div>
                        <a
                          href="#"
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

            {/* 회의록/보고서 카드 */}
            <section id="minutes" className="mt-10 scroll-mt-20">
              <h2 className="text-lg font-semibold">회의록 · 보고서</h2>
              <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-3">
                {[
                  {
                    title: "정기회의 회의록 템플릿",
                    desc: "목차/안건/의결/액션아이템",
                    tag: "회의록",
                  },
                  {
                    title: "사업계획 보고서 템플릿",
                    desc: "배경/목표/일정/예산",
                    tag: "보고서",
                  },
                  {
                    title: "사업 결과 보고서 템플릿",
                    desc: "성과/지표/개선사항",
                    tag: "보고서",
                  },
                ].map((c, idx) => (
                  <Card key={idx} title={c.title} tag={c.tag}>
                    <p className="text-xs text-slate-500">{c.desc}</p>
                    <div className="mt-3 flex gap-2">
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
                  </Card>
                ))}
              </div>
            </section>

            {/* 정책/규정 & 양식 다운로드 */}
            <section id="policies" className="mt-10 scroll-mt-20">
              <h2 className="text-lg font-semibold">정책 · 규정</h2>
              <div className="mt-3 rounded-lg border border-slate-200 bg-white p-4">
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                    회계/집행 규정 v1.4 (PDF)
                    <a href="#" className="ml-auto text-xs underline">
                      다운로드
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                    학생 복지 지침 v1.2 (PDF)
                    <a href="#" className="ml-auto text-xs underline">
                      다운로드
                    </a>
                  </li>
                </ul>
              </div>

              <h3 className="mt-8 text-base font-semibold">양식 다운로드</h3>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { label: "공문 양식(대내)", ext: "DOCX" },
                  { label: "공문 양식(대외)", ext: "DOCX" },
                  { label: "집행 요청서", ext: "XLSX" },
                  { label: "회의록 양식", ext: "DOCX" },
                  { label: "사업계획서", ext: "PPTX" },
                  { label: "결과 보고서", ext: "PPTX" },
                ].map((f) => (
                  <a
                    key={f.label}
                    href="#"
                    className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-4 py-3 text-sm hover:bg-slate-50"
                  >
                    <span>{f.label}</span>
                    <span className="text-xs text-slate-400">{f.ext}</span>
                  </a>
                ))}
              </div>
            </section>

            {/* 브랜딩 에셋 & 미디어 키트 */}
            <section id="brand" className="mt-10 scroll-mt-20">
              <h2 className="text-lg font-semibold">
                브랜딩 에셋 · 미디어 키트
              </h2>
              <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold">로고 & 가이드</p>
                  <div className="mt-2 aspect-[16/9] w-full rounded-md bg-slate-100" />
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    <li>· 로고(ai, svg, png)</li>
                    <li>· 색상/폰트 사용 규정</li>
                  </ul>
                  <div className="mt-3 flex gap-2">
                    <a
                      href="#"
                      className="rounded-md border border-slate-300 px-3 py-1 text-xs hover:bg-slate-50"
                    >
                      가이드 보기
                    </a>
                    <a
                      href="#"
                      className="rounded-md bg-[#5b61a8] px-3 py-1 text-xs text-white"
                    >
                      ZIP 다운로드
                    </a>
                  </div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold">미디어 키트</p>
                  <div className="mt-2 aspect-[16/9] w-full rounded-md bg-slate-100" />
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    <li>· 소개자료 PDF</li>
                    <li>· 사진/영상 셋(선택)</li>
                  </ul>
                  <div className="mt-3 flex gap-2">
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
                      ZIP 다운로드
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* 예산/결산 & 공개 데이터 */}
            <section id="finance" className="mt-10 scroll-mt-20">
              <h2 className="text-lg font-semibold">
                예산 · 결산 · 공개 데이터
              </h2>
              <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold">예산/결산 요약</p>
                  <div className="mt-2 h-28 w-full rounded-md bg-slate-100" />
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    <li>· 분기별 집행 요약</li>
                    <li>· 주요 항목 변화</li>
                  </ul>
                  <a
                    href="#"
                    className="mt-3 inline-block rounded-md border border-slate-300 px-3 py-1 text-xs hover:bg-slate-50"
                  >
                    상세 다운로드
                  </a>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold">공개 데이터 샘플</p>
                  <div className="mt-2 h-28 w-full rounded-md bg-slate-100" />
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    <li>· 설문/행사 데이터(비식별)</li>
                    <li>· 이용 통계</li>
                  </ul>
                  <a
                    href="#"
                    className="mt-3 inline-block rounded-md border border-slate-300 px-3 py-1 text-xs hover:bg-slate-50"
                  >
                    CSV 다운로드
                  </a>
                </div>
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
