// pages/convenience/index.jsx (총학생회 버전)
import React from "react";
import Link from "next/link";

// ── 외부 링크/폼(운영 주체별 실제 URL로 교체하세요) ─────────────────────────────
const URLS = {
  reportForm: "/report-form", // 제보/건의 구글폼 또는 Notion 폼
  rentalGuide: "/rental-guide", // 물품대여 규정 문서
  eventsCalendar: "/events-calendar", // 간식배부/행사 캘린더(구글 캘린더/노션)
  jobsBoard: "/jobs-board", // 알바/공모전 큐레이션(노션/시트)
  marketBoard: "/market-board", // 중고장터 게시판
  welfareDesk: "/welfare-desk", // 복지 연계 접수 폼
  // 공식 학교/기관 링크 모음(총학생회가 운영하지 않음)
  dining: "/dining",
  shuttle: "/shuttle",
  librarySeats: "/library-seats",
  academicNotice: "/academic-notice",
  certificates: "/certificates",
  scholarship: "/scholarship",
  itWifi: "/it-wifi",
};

const CARDS = [
  { id: "report", title: "제보 · 건의", desc: "학내 불편/개선 사항 익명 접수" },
  { id: "rental", title: "물품 대여", desc: "우산/보조배터리/돗자리 등" },
  { id: "events", title: "행사 · 혜택", desc: "간식배부 · 문화/제휴 할인" },
  { id: "jobs", title: "알바 · 공모전", desc: "교내외 모집/공모 큐레이션" },
  {
    id: "welfare",
    title: "복지 · 상담 연계",
    desc: "1차 안내 및 공식기관 연계",
  },
  { id: "links", title: "캠퍼스 생활 링크", desc: "학식/셔틀/좌석/학사 공지" },
];

const CAMPUSES = [
  {
    name: "돈암수정캠퍼스",
    image: null,
    lines: [
      "위치: 학생회관 2F 총학생회실",
      "운영: 평일 10:00~17:00 (점심 12:30~13:30)",
      "안내: 물품대여/제보·건의/행사 문의",
    ],
  },
  {
    name: "미아운정캠퍼스",
    image: null,
    lines: [
      "위치: 학생회관 2F 총학생회실",
      "운영: 평일 10:00~17:00 (점심 12:30~13:30)",
      "안내: 물품대여/제보·건의/행사 문의",
    ],
  },
];

export default function ConveniencePage() {
  const [query, setQuery] = React.useState("");

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
          {/* 헤더 */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight">편의 정보</h1>
            <p className="mt-1 text-sm text-slate-600">
              학생들이 가장 자주 찾는 정보만 빠르게. 총학생회가 직접 운영하거나,
              신뢰 가능한 공식 경로로 연결합니다.
            </p>
          </div>

          {/* 검색 + 칩 + 캠퍼스 토글 */}
          <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto_auto]">
            {/* 검색 (너무 길지 않게 최대 너비 제한) */}
            <div className="flex w-full items-center gap-2 max-w-md">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="예: 제보, 대여, 행사, 장터, 복지..."
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

            {/* 캠퍼스는 카드/섹션에서 동시 표기 (토글 제거) */}
            <div />
          </div>

          {/* 핵심 카드 */}
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

          {/* 캠퍼스 요약 박스: 두 캠퍼스를 병렬로 표기 */}
          <section className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {CAMPUSES.map((campus) => (
                <div
                  key={campus.name}
                  className="rounded-md border border-slate-200 bg-white p-4"
                >
                  <p className="text-sm font-semibold">
                    {campus.name} 총학생회 창구
                  </p>
                  <div className="mt-2 aspect-[16/9] w-full rounded-md bg-slate-200" />
                  <ul className="mt-3 space-y-1 text-sm text-slate-700">
                    {campus.lines.map((line, i) => (
                      <li key={i}>· {line}</li>
                    ))}
                  </ul>
                  <div className="mt-3 text-xs text-slate-600">
                    문의:{" "}
                    <a
                      href="mailto:sungshinchonghak@sungshin.ac.kr"
                      className="underline"
                    >
                      sungshinchonghak@sungshin.ac.kr
                    </a>{" "}
                    / 02-920-0000
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 총학생회가 직접 제공/연계하는 섹션들 */}
          <div className="mt-10 space-y-6">
            {/* 제보/건의 */}
            <Section id="report" title="제보 · 건의" cta="제보/건의 폼 열기">
              <SmallGrid cols={2}>
                <Item title="접수 방법">
                  <List
                    items={[
                      "학내 시설/수업/행정 불편, 차별·폭력 등 제보",
                      "익명 가능(필요시 연락처 입력)",
                      "접수 → 검토 → 담당 부서/기관 연계 → 결과 안내",
                    ]}
                  />
                  <div className="mt-3">
                    <a
                      href={URLS.reportForm}
                      className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50"
                    >
                      제보/건의 폼 이동 ›
                    </a>
                  </div>
                  <Note>
                    ※ 민감 사안은 전문기관(성평위·학생상담센터 등)과 연계합니다.
                  </Note>
                </Item>
                <Item title="처리 현황(요약)">
                  <Placeholder h={72} />
                  <Note>※ 월간 처리 요약을 공개합니다(개인정보 비공개).</Note>
                </Item>
              </SmallGrid>
            </Section>

            {/* 물품 대여 */}
            <Section id="rental" title="물품 대여" cta="대여 규정 보기">
              {/* 상단 요약(기존) */}
              <SmallGrid cols={3}>
                <Item title="대여 품목(요약)">
                  <List
                    items={[
                      "우산",
                      "보조배터리",
                      "노트북 충전기",
                      "돗자리/행사 키트",
                    ]}
                  />
                </Item>
                <Item title="대여/반납">
                  <List
                    items={[
                      "학생증 지참",
                      "당일/익일 반납",
                      "연체 시 향후 이용 제한",
                    ]}
                  />
                </Item>
                <Item title="안내/예약">
                  <a
                    href={URLS.rentalGuide}
                    className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50"
                  >
                    대여 규정 문서 ›
                  </a>
                  <Note>※ 수량 한정, 선착순입니다.</Note>
                </Item>
              </SmallGrid>

              {/* ── 추가: '물품 대여 정보' 상세(홈 인덱스.jsx 참고 내용 삽입) ── */}
              <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-[#5b61a8]">
                  캠퍼스별 이용 안내
                </p>
                <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div className="rounded-md border border-slate-200 bg-white p-4">
                    <p className="text-sm font-medium text-[#5b61a8]">
                      돈암수정캠퍼스
                    </p>
                    <p className="mt-1 text-sm text-slate-700">
                      장소: 학생회관 220호 (총학생회실)
                    </p>
                    <p className="text-sm text-slate-700">
                      운영 시간: 월 ~ 금, 11:00 ~ 17:00
                    </p>
                  </div>
                  <div className="rounded-md border border-slate-200 bg-white p-4">
                    <p className="text-sm font-medium text-[#5b61a8]">
                      미아운정캠퍼스
                    </p>
                    <p className="mt-1 text-sm text-slate-700">
                      B동 지하 1층 119호 (총학생회실)
                    </p>
                    <p className="text-sm text-slate-700">
                      운영 시간: 월 ~ 금, 11:00 ~ 17:00
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div className="rounded-md border border-slate-200 bg-white p-4">
                    <p className="text-sm font-medium text-[#5b61a8]">
                      대여 물품
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      충전기: 연결 케이블, 변환 젠더, 보조배터리, 일체형 충전기,
                      어댑터, 노트북 충전기
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      전자제품: 고데기, 드라이기, 레이저 포인터, 공학용 계산기,
                      빔 프로젝터, 무선마우스(수정), HDMI 케이블(운정)
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      보드게임: 할리갈리, 루미큐브, 젠가, 부루마불(운정)
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      문구류 및 기타: 우산꽂힘기, 담요, 우산, 돗자리(운정),
                      클립보드(운정), 박스테이프(운정)
                    </p>
                  </div>

                  <div className="rounded-md border border-slate-200 bg-white p-4">
                    <p className="text-sm font-medium text-[#5b61a8]">
                      이용 팁
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-slate-700">
                      <li>
                        · 인기 품목은 수량이 제한되어 조기 마감될 수 있어요.
                      </li>
                      <li>
                        · 고가 전자기기는 대여 전/후 상태를 함께 확인합니다.
                      </li>
                      <li>· 반납 시간 엄수(연체 시 일정 기간 이용 제한).</li>
                    </ul>
                    <div className="mt-3">
                      <a
                        href={URLS.rentalGuide}
                        className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50"
                      >
                        대여 규정 자세히 보기 ›
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* 행사/혜택 */}
            <Section id="events" title="행사 · 혜택" cta="캘린더 보기">
              <SmallGrid cols={2}>
                <Item title="이번 달 일정">
                  <Placeholder h={64} />
                  <div className="mt-2">
                    <a
                      href={URLS.eventsCalendar}
                      className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50"
                    >
                      행사 캘린더 ›
                    </a>
                  </div>
                </Item>
                <Item title="제휴/할인">
                  <List
                    items={[
                      "문화·편의 제휴 상시 업데이트",
                      "학생증 지참 시 할인",
                    ]}
                  />
                </Item>
              </SmallGrid>
            </Section>

            {/* 알바/공모전 큐레이션 */}
            <Section id="jobs" title="알바 · 공모전" cta="큐레이션 열기">
              <SmallGrid cols={2}>
                <Item title="안전 가이드">
                  <List
                    items={[
                      "급여·근로조건 확인",
                      "계약서/신분증 사본 주의",
                      "피싱·보증금 요구 신고",
                    ]}
                  />
                </Item>
                <Item title="모아보기">
                  <a
                    href={URLS.jobsBoard}
                    className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50"
                  >
                    알바/공모전 보드 ›
                  </a>
                  <Note>※ 총학생회 검토 후 게시(사기/유해 공고 배제).</Note>
                </Item>
              </SmallGrid>
            </Section>

            {/* 복지/상담 연계 */}
            <Section id="welfare" title="복지 · 상담 연계" cta="연계 신청">
              <SmallGrid cols={2}>
                <Item title="무엇을 돕나요?">
                  <List
                    items={[
                      "장학/생활 지원 안내",
                      "심리상담/법률·노무 상담 연계",
                      "긴급 지원 기관 연락처 안내",
                    ]}
                  />
                </Item>
                <Item title="연계 신청">
                  <a
                    href={URLS.welfareDesk}
                    className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50"
                  >
                    복지 연계 접수 ›
                  </a>
                  <Note>※ 민감 정보는 최소 수집, 비공개 처리합니다.</Note>
                </Item>
              </SmallGrid>
            </Section>

            {/* 캠퍼스 생활 링크(공식 사이트로 연결) */}
            <Section id="links" title="캠퍼스 생활 링크" cta="모두 보기">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                {[
                  { label: "학식 메뉴", href: URLS.dining },
                  { label: "셔틀/교통", href: URLS.shuttle },
                  { label: "도서관 좌석", href: URLS.librarySeats },
                  { label: "학사 공지", href: URLS.academicNotice },
                  { label: "증명서 발급", href: URLS.certificates },
                  { label: "장학/학자금", href: URLS.scholarship },
                  { label: "IT 서비스/와이파이", href: URLS.itWifi },
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
              <Note>
                ※ 아래 링크는 총학생회가 <b>운영하지 않으며</b>, 공식 기관의
                최신 공지를 확인하세요.
              </Note>
            </Section>
          </div>

          {/* FAQ (총학생회 역할에 맞게 조정) */}
          <section className="mt-10">
            <h2 className="text-lg font-semibold">FAQ</h2>
            <div className="mt-3 divide-y rounded-md border border-slate-200 bg-white">
              {[
                {
                  q: "도서관 좌석/학식 정보가 틀리면 어디에 말하나요?",
                  a: "총학생회에 알려주시면 공식 채널을 통해 정정 요청을 전달합니다. 정확한 운영 정보는 각 기관 공지를 우선 확인해 주세요.",
                },
                {
                  q: "제보는 익명으로 가능한가요?",
                  a: "가능합니다. 다만 추가 확인이 필요한 경우 연락처를 남겨 주시면 처리 속도가 빨라집니다.",
                },
                {
                  q: "중고 거래 분쟁은 해결해 주나요?",
                  a: "총학생회는 거래 당사자가 아니므로 법적 분쟁에 개입할 수 없습니다. 사기 의심 건은 즉시 신고해 주시고, 안전 거래 수칙을 꼭 확인해 주세요.",
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
