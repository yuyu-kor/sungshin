// pages/convenience/index.jsx
import React from "react";
import Link from "next/link";

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
  { id: "dining", title: "학식 · 식당", desc: "오늘의 학식 / 교내·주변 식당" },
  { id: "transport", title: "셔틀 · 교통", desc: "셔틀 시간표 / 환승 / 주차" },
  { id: "library", title: "도서관 좌석", desc: "좌석 현황 / 열람실 안내" },
  { id: "print", title: "프린트 · 복사", desc: "무인 복합기 위치 / 요금" },
  { id: "lostfound", title: "분실물", desc: "습득물 등록·조회 / 문의처" },
  { id: "health", title: "의료 · 상담", desc: "보건실 / 심리상담 / 응급" },
  { id: "calendar", title: "학사 일정", desc: "학기 일정 / 수강 / 졸업" },
];

const CAMPUS = ["돈암수정캠퍼스", "미아운정캠퍼스"];

export default function ConveniencePage() {
  const [query, setQuery] = React.useState("");
  const [activeCampus, setActiveCampus] = React.useState(CAMPUS[0]);

  const filtered = CARDS.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f7f7fb] text-slate-900">
      {/* 부드러운 앵커 스크롤 */}
      <style jsx global>{`
        html:focus-within {
          scroll-behavior: smooth;
        }
      `}</style>

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
        <div className="mx-auto max-w-6xl px-4 py-8">
          {/* 헤더: 제목 + 설명 */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight">편의 정보</h1>
            <p className="mt-1 text-sm text-slate-600">
              복잡함은 최소로, 자주 찾는 정보만 모았습니다.
            </p>
          </div>

          {/* 검색 + 빠른칩 + 캠퍼스 토글 (한 줄 구성, 모바일은 세 줄로 쌓임) */}
          <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto_auto]">
            {/* 검색 */}
            <div className="flex items-center gap-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="예: 학식, 셔틀, 좌석, 프린트, 분실물..."
                className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-[#5b61a8]"
              />
              <button
                className="h-10 rounded-md bg-[#5b61a8] px-4 text-sm font-medium text-white"
                onClick={() => {
                  const el = document.querySelector("#results");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                검색
              </button>
            </div>

            {/* 빠른칩 (데스크톱에선 보이게 / 모바일에선 아래 카드로 바로 이동 가능) */}
            <div className="hidden items-center gap-2 md:flex">
              {QUICK_LINKS.slice(0, 4).map((q) => (
                <a
                  key={q.href}
                  href={q.href}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 hover:bg-slate-50"
                >
                  #{q.label}
                </a>
              ))}
            </div>

            {/* 캠퍼스 토글 */}
            <div className="flex items-center justify-end">
              <div className="flex overflow-hidden rounded-full ring-1 ring-slate-200">
                {CAMPUS.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveCampus(c)}
                    className={`px-3 py-1.5 text-xs transition ${
                      activeCampus === c
                        ? "bg-[#5b61a8] text-white"
                        : "bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 핵심 카드: 단순 정보 + 바로가기만 */}
          <section
            id="results"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {(query ? filtered : CARDS).map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="group rounded-lg border border-slate-200 bg-white p-4 transition hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{c.title}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{c.desc}</p>
                  </div>
                  <span className="text-xs text-slate-400">바로가기 ›</span>
                </div>
              </a>
            ))}
          </section>

          {/* 캠퍼스 박스 (간단 요약) */}
          <section className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold">{activeCampus}</p>
                <div className="mt-2 aspect-[16/9] w-full rounded-md bg-slate-200" />
                <ul className="mt-3 space-y-1 text-sm text-slate-700">
                  <li>· 지하철: 인근 역 도보 5~10분</li>
                  <li>· 버스: 정류장 도보 3분</li>
                  <li>· 주차: 지정 구역 이용(방문 전 확인)</li>
                </ul>
              </div>
              <div>
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
          </section>

          {/* 간단 섹션들 — 핵심 정보만 + CTA 하나 */}
          <div className="mt-10 space-y-6">
            {/* 학식/식당 */}
            <Section id="dining" title="학식 · 식당" cta="학식 더보기">
              <SmallGrid>
                <Item title="오늘의 학식">
                  <Placeholder h={64} />
                  <Note>※ 실제 메뉴는 당일 기준 업데이트</Note>
                </Item>
                <Item title="교내 식당">
                  <List
                    items={[
                      "학생식당 (11:00~18:00)",
                      "카페테리아 (08:30~19:00)",
                      "푸드코트 (11:00~20:00)",
                    ]}
                  />
                </Item>
                <Item title="주변 식당">
                  <List
                    items={["한식/분식/샐러드 도보 5분", "단체예약 가능 매장"]}
                  />
                </Item>
              </SmallGrid>
            </Section>

            {/* 셔틀/교통 */}
            <Section id="transport" title="셔틀 · 교통" cta="셔틀 시간표">
              <SmallGrid>
                <Item title="셔틀 시간표">
                  <Placeholder h={80} />
                </Item>
                <Item title="지하철/버스">
                  <List
                    items={["최근접 역/정류장 및 도보", "첫차/막차, 배차 간격"]}
                  />
                </Item>
                <Item title="주차 안내">
                  <List items={["방문 차량 등록 절차", "요금 및 위치"]} />
                </Item>
              </SmallGrid>
            </Section>

            {/* 도서관 좌석 */}
            <Section id="library" title="도서관 좌석" cta="좌석 현황 열기">
              <SmallGrid cols={2}>
                <Item title="좌석 현황">
                  <Placeholder h={64} />
                  <Note>※ 실시간 연동 예정</Note>
                </Item>
                <Item title="이용 안내">
                  <List
                    items={["열람실/스터디룸 예약", "대출/반납/연장 규정"]}
                  />
                </Item>
              </SmallGrid>
            </Section>

            {/* 프린트/복사 */}
            <Section id="print" title="프린트 · 복사" cta="복합기 위치 보기">
              <SmallGrid cols={3}>
                <Item title="무인 복합기">
                  <List items={["학생회관 1F", "도서관 1F/3F"]} />
                </Item>
                <Item title="요금">
                  <List items={["A4 흑백/컬러", "스캔/팩스 요금"]} />
                </Item>
                <Item title="사용 방법">
                  <List items={["모바일 출력", "스캔 to 이메일"]} />
                </Item>
              </SmallGrid>
            </Section>

            {/* 분실물 */}
            <Section id="lostfound" title="분실물" cta="분실물 등록/조회">
              <Box>
                <List
                  items={[
                    "습득물 등록/조회 폼",
                    "보관 기간 및 인계 절차",
                    "담당자 연락처",
                  ]}
                />
              </Box>
            </Section>

            {/* 의료/상담 */}
            <Section id="health" title="의료 · 상담" cta="상담 예약 안내">
              <SmallGrid cols={2}>
                <Item title="보건실">
                  <List items={["운영시간 · 위치", "응급키트/상비약 이용"]} />
                </Item>
                <Item title="심리상담">
                  <List items={["예약 방법 · 절차", "비밀보장 · 비용"]} />
                </Item>
              </SmallGrid>
            </Section>

            {/* 학사 일정 */}
            <Section id="calendar" title="학사 일정" cta="학사 공지 바로가기">
              <SmallGrid cols={2}>
                <Item title="주요 일정">
                  <List
                    items={["수강신청 / 정정", "중간/기말고사", "휴·복학 접수"]}
                  />
                </Item>
                <Item title="바로가기">
                  <List
                    items={["학사 공지", "학적 · 증명 발급", "졸업 요건"]}
                    bullets="• "
                  />
                </Item>
              </SmallGrid>
            </Section>
          </div>

          {/* 자주 찾는 링크 (간결 버전) */}
          <section className="mt-10">
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
                  <span className="text-xs text-slate-400">›</span>
                </a>
              ))}
            </div>
          </section>

          {/* FAQ (3개로 축소) */}
          <section className="mt-10">
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
                  <div className="px-4 pb-4 text-sm text-slate-600">{f.a}</div>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

/* ───────── 미니 컴포넌트 (간결/재사용) ───────── */
function Section({ id, title, cta, children }) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="flex items-end justify-between">
        <h3 className="text-base font-semibold">{title}</h3>
        <a href={`#${id}`} className="text-xs text-[#5b61a8] hover:underline">
          {cta}
        </a>
      </div>
      <div className="mt-3">{children}</div>
    </section>
  );
}
function SmallGrid({ children, cols = 3 }) {
  const cls =
    cols === 2
      ? "grid grid-cols-1 gap-3 md:grid-cols-2"
      : "grid grid-cols-1 gap-3 md:grid-cols-3";
  return <div className={cls}>{children}</div>;
}
function Item({ title, children }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-sm font-medium">{title}</p>
      <div className="mt-2 text-sm text-slate-700">{children}</div>
    </div>
  );
}
function Box({ children }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      {children}
    </div>
  );
}
function List({ items, bullets = "· " }) {
  return (
    <ul className="space-y-1">
      {items.map((t, i) => (
        <li key={i} className="text-sm text-slate-700">
          {bullets}
          {t}
        </li>
      ))}
    </ul>
  );
}
function Placeholder({ h = 64 }) {
  return <div className={`rounded-md bg-slate-100`} style={{ height: h }} />;
}
function Note({ children }) {
  return <p className="mt-2 text-xs text-slate-500">{children}</p>;
}
