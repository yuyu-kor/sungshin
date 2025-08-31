// pages/convenience/index.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const QUICK_LINKS = [
  { label: "학식 메뉴", href: "#dining" },
  { label: "셔틀/교통", href: "#transport" },
  { label: "도서관 좌석", href: "#library" },
  { label: "프린트/복사", href: "#print" },
  { label: "분실물", href: "#lostfound" },
  { label: "의료/상담", href: "#health" },
  { label: "학사 일정", href: "#calendar" },
];

const CARDS = [
  {
    id: "dining",
    title: "학식 · 식당",
    desc: "오늘의 학식, 교내·주변 식당 정보와 운영시간",
  },
  {
    id: "transport",
    title: "셔틀 · 교통",
    desc: "셔틀 시간표, 지하철·버스 환승 정보, 주차 안내",
  },
  {
    id: "library",
    title: "도서관 좌석",
    desc: "좌석 현황, 대출/반납, 열람실 이용 안내",
  },
  {
    id: "print",
    title: "프린트 · 복사",
    desc: "무인 복합기 위치, 요금, 스캔/팩스 사용법",
  },
  {
    id: "lostfound",
    title: "분실물 센터",
    desc: "습득물 등록/조회, 보관 기간 및 문의처",
  },
  {
    id: "health",
    title: "의료 · 상담",
    desc: "보건실, 심리상담, 응급 연락처 및 이용 절차",
  },
  {
    id: "calendar",
    title: "학사 일정",
    desc: "학기 일정, 수강/휴복학, 졸업 요건 바로가기",
  },
];

const CAMPUS = ["돈암수정캠퍼스", "미아운정캠퍼스"];

export default function ConveniencePage() {
  const [query, setQuery] = React.useState("");
  const [activeCampus, setActiveCampus] = React.useState(CAMPUS[0]);

  const filteredCards = CARDS.filter(
    (c) =>
      c.title.includes(query) ||
      c.desc.includes(query) ||
      c.id.includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f7f7fb] text-slate-900">
      {/* 브레드크럼 */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 text-xs text-slate-500">
          <Link href="/" className="hover:underline">
            홈
          </Link>
          <span>›</span>
          <strong className="text-slate-900">편의 정보</strong>
        </div>
      </div>

      {/* 본문 */}
      <main className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-8 md:grid-cols-[200px_1fr]">
          {/* 좌측 서브내비 */}
          <aside className="md:pt-2">
            <h3 className="mb-2 text-sm font-semibold text-slate-700">메뉴</h3>
            <nav className="space-y-1 text-sm">
              <span className="block rounded-md bg-violet-50 px-3 py-2 font-medium text-[#5b61a8] ring-1 ring-violet-200">
                편의 정보
              </span>
              <Link
                href="/notices/intro"
                className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                총학생회 소개
              </Link>
              <Link
                href="/notices/organization"
                className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                조직도
              </Link>
            </nav>

            {/* 캠퍼스 토글 */}
            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold text-slate-500">
                캠퍼스 선택
              </p>
              <div className="flex overflow-hidden rounded-full ring-1 ring-slate-200">
                {CAMPUS.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveCampus(c)}
                    className={`w-1/2 px-3 py-1.5 text-xs transition ${
                      activeCampus === c
                        ? "bg-[#5b61a8] text-white"
                        : "bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-[11px] text-slate-500">
                현재 선택: <span className="font-medium">{activeCampus}</span>
              </p>
            </div>
          </aside>

          {/* 우측 콘텐츠 */}
          <section>
            <div className="mb-6">
              <h1 className="text-2xl font-bold tracking-tight">편의 정보</h1>
              <p className="mt-1 text-sm text-slate-600">
                학생들이 자주 찾는 생활·이용 정보를 한 곳에 모았습니다.
              </p>
            </div>

            {/* 검색바 + 빠른바로가기 칩 */}
            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-2">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="예: 학식, 셔틀, 좌석, 프린트, 분실물..."
                  className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-[#5b61a8]"
                />
                <button className="h-10 rounded-md bg-[#5b61a8] px-4 text-sm font-medium text-white">
                  검색
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {QUICK_LINKS.map((q) => (
                  <a
                    key={q.href}
                    href={q.href}
                    className="rounded-full border border-[#5b61a8] bg-white px-3 py-1 text-xs text-[#5b61a8] hover:bg-violet-50"
                  >
                    #{q.label}
                  </a>
                ))}
              </div>
            </div>

            {/* 카드 그리드 */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCards.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="group rounded-lg border border-slate-200 bg-white p-4 transition hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-[#6A6FB3]/20 ring-1 ring-[#6A6FB3]/30">
                      <span className="text-[11px] font-semibold text-[#5b61a8]">
                        INFO
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{c.title}</p>
                      <p className="text-xs text-slate-500">{c.desc}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* 캠퍼스별 지도/오시는 길 */}
            <div className="mt-10">
              <h2 className="text-lg font-semibold">캠퍼스 안내</h2>
              <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold">{activeCampus}</p>
                  <div className="mt-2 aspect-[16/9] w-full rounded-md bg-slate-200" />
                  <ul className="mt-3 space-y-1 text-sm text-slate-700">
                    <li>· 지하철: 인근 역에서 도보 5~10분</li>
                    <li>· 버스: 정류장 도보 3분 이내</li>
                    <li>· 주차: 지정 구역 이용, 방문 전 확인</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold">연락처 · 운영시간</p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                      학생회관: 평일 09:00~18:00 (점심 12:00~13:00)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                      민원/문의: 02-920-0000,{" "}
                      <a
                        href="mailto:sungshinchonghak@sungshin.ac.kr"
                        className="underline"
                      >
                        sungshinchonghak@sungshin.ac.kr
                      </a>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                      비상 연락: 경비실 및 학내 보안요원
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 디테일 섹션 */}
            <div className="mt-10 space-y-8">
              {/* 학식/식당 */}
              <section id="dining" className="scroll-mt-20">
                <h3 className="text-base font-semibold">학식 · 식당</h3>
                <div className="mt-3 rounded-lg border border-slate-200">
                  <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
                    <div className="p-4">
                      <p className="text-sm font-medium">오늘의 학식</p>
                      <div className="mt-2 h-24 rounded-md bg-slate-100" />
                      <p className="mt-2 text-xs text-slate-500">
                        ※ 실제 메뉴는 당일 기준 업데이트
                      </p>
                    </div>
                    <div className="border-t border-slate-200 p-4 md:border-l md:border-t-0">
                      <p className="text-sm font-medium">교내 식당</p>
                      <ul className="mt-2 space-y-1 text-sm text-slate-700">
                        <li>· 학생식당 (11:00~18:00)</li>
                        <li>· 카페테리아 (08:30~19:00)</li>
                        <li>· 푸드코트 (11:00~20:00)</li>
                      </ul>
                    </div>
                    <div className="border-t border-slate-200 p-4 md:border-l md:border-t-0">
                      <p className="text-sm font-medium">주변 식당</p>
                      <ul className="mt-2 space-y-1 text-sm text-slate-700">
                        <li>· 한식/분식/샐러드 등 도보 5분</li>
                        <li>· 단체 예약 가능 매장 안내</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 셔틀/교통 */}
              <section id="transport" className="scroll-mt-20">
                <h3 className="text-base font-semibold">셔틀 · 교통</h3>
                <div className="mt-3 rounded-lg border border-slate-200 p-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                      <p className="text-sm font-medium">셔틀 시간표</p>
                      <div className="mt-2 h-28 rounded-md bg-slate-100" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">지하철/버스</p>
                      <ul className="mt-2 space-y-1 text-sm text-slate-700">
                        <li>· 최근접 역/정류장 및 도보 거리</li>
                        <li>· 첫차/막차, 배차 간격</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium">주차 안내</p>
                      <ul className="mt-2 space-y-1 text-sm text-slate-700">
                        <li>· 방문 차량 등록 절차</li>
                        <li>· 주차 요금 및 위치</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 도서관 좌석 */}
              <section id="library" className="scroll-mt-20">
                <h3 className="text-base font-semibold">도서관 좌석</h3>
                <div className="mt-3 rounded-lg border border-slate-200 p-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-medium">좌석 현황</p>
                      <div className="mt-2 h-24 rounded-md bg-slate-100" />
                      <p className="mt-2 text-xs text-slate-500">
                        ※ 실시간 연동 예정
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">이용 안내</p>
                      <ul className="mt-2 space-y-1 text-sm text-slate-700">
                        <li>· 열람실/스터디룸 예약 방법</li>
                        <li>· 대출/반납/연장 규정</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 프린트/복사 */}
              <section id="print" className="scroll-mt-20">
                <h3 className="text-base font-semibold">프린트 · 복사</h3>
                <div className="mt-3 rounded-lg border border-slate-200 p-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                      <p className="text-sm font-medium">무인 복합기 위치</p>
                      <ul className="mt-2 space-y-1 text-sm text-slate-700">
                        <li>· 학생회관 1F 로비</li>
                        <li>· 도서관 1F/3F</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium">요금</p>
                      <ul className="mt-2 space-y-1 text-sm text-slate-700">
                        <li>· A4 흑백/컬러 단가</li>
                        <li>· 스캔/팩스 요금</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium">사용 방법</p>
                      <ul className="mt-2 space-y-1 text-sm text-slate-700">
                        <li>· 모바일 출력 지원</li>
                        <li>· 스캔 to 이메일</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 분실물 */}
              <section id="lostfound" className="scroll-mt-20">
                <h3 className="text-base font-semibold">분실물 센터</h3>
                <div className="mt-3 rounded-lg border border-slate-200 p-4">
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>· 습득물 등록/조회 폼</li>
                    <li>· 보관 기간 및 인계 절차</li>
                    <li>· 담당자 연락처</li>
                  </ul>
                </div>
              </section>

              {/* 의료/상담 */}
              <section id="health" className="scroll-mt-20">
                <h3 className="text-base font-semibold">의료 · 상담</h3>
                <div className="mt-3 rounded-lg border border-slate-200 p-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-medium">보건실</p>
                      <ul className="mt-2 space-y-1 text-sm text-slate-700">
                        <li>· 운영시간 · 위치</li>
                        <li>· 응급키트/상비약 이용</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium">심리상담</p>
                      <ul className="mt-2 space-y-1 text-sm text-slate-700">
                        <li>· 예약 방법 · 이용 절차</li>
                        <li>· 비밀보장 및 비용</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 학사 일정 */}
              <section id="calendar" className="scroll-mt-20">
                <h3 className="text-base font-semibold">학사 일정</h3>
                <div className="mt-3 rounded-lg border border-slate-200 p-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-medium">주요 일정</p>
                      <ul className="mt-2 space-y-1 text-sm text-slate-700">
                        <li>· 수강신청 / 수강정정</li>
                        <li>· 중간/기말고사 기간</li>
                        <li>· 휴·복학 접수</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium">바로가기</p>
                      <ul className="mt-2 space-y-1 text-sm text-slate-700">
                        <li>
                          ·{" "}
                          <a href="#" className="underline">
                            학사 공지
                          </a>
                        </li>
                        <li>
                          ·{" "}
                          <a href="#" className="underline">
                            학적 · 증명 발급
                          </a>
                        </li>
                        <li>
                          ·{" "}
                          <a href="#" className="underline">
                            졸업 요건
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* 자주 찾는 링크 */}
            <div className="mt-10">
              <h2 className="text-lg font-semibold">자주 찾는 링크</h2>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                {[
                  { label: "통합정보시스템", href: "#" },
                  { label: "도서관", href: "#" },
                  { label: "학사 공지", href: "#" },
                  { label: "증명서 발급", href: "#" },
                  { label: "장학/학자금", href: "#" },
                  { label: "IT 서비스/와이파이", href: "#" },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-4 py-3 text-sm hover:bg-slate-50"
                  >
                    <span>{l.label}</span>
                    <span className="text-xs text-slate-400">바로가기 ›</span>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-10">
              <h2 className="text-lg font-semibold">FAQ</h2>
              <div className="mt-3 divide-y rounded-md border border-slate-200 bg-white">
                {[
                  {
                    q: "학생증을 잃어버렸어요. 어떻게 하나요?",
                    a: "분실물 센터 확인 → 신분증 지참 재발급 신청 → 일시 학생증 발급(필요 시).",
                  },
                  {
                    q: "도서관 좌석은 어디서 확인하나요?",
                    a: "도서관 포털 또는 모바일 앱에서 실시간 좌석 현황을 확인할 수 있습니다.",
                  },
                  {
                    q: "셔틀은 어디서 타나요?",
                    a: "캠퍼스별 정류장 위치를 참고하세요. 배차 간격은 시간표를 확인 바랍니다.",
                  },
                ].map((f, i) => (
                  <details key={i} className="group">
                    <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50">
                      {f.q}
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-600">
                      {f.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
