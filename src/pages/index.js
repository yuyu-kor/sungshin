import React from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * 성신여자대학교 총학생회 – 단일 페이지 (Pages Router)
 * Tailwind 필요: @tailwind base; @tailwind components; @tailwind utilities;
 * 선택 리소스: public/icons/instagram.svg, public/icons/kakao.svg, public/pattern.svg
 */

// 상단 내비게이션
const NAV = [
  { label: "소개", href: "#about" },
  { label: "공지", href: "/notices/intro" },
  { label: "편의 정보", href: "#about" },
  { label: "소통", href: "#contact" },
  { label: "자료", href: "#resources" },
];

const NOTICES = [
  {
    id: 1,
    title: "[공지] 2학기 학생복지 지원 안내",
    excerpt:
      "장학/대여/상담 등 학우 복지 프로그램 일정 및 신청 방법을 정리했습니다.",
    date: "2025.08.30",
    tag: "복지",
  },
  {
    id: 2,
    title: "[모집] 대동제 운영 스태프 추가 모집",
    excerpt: "행사 운영/안전/홍보 파트에서 함께 할 학우를 기다립니다.",
    date: "2025.08.25",
    tag: "모집",
  },
  {
    id: 3,
    title: "[안내] 학내 공간 대관 절차 변경",
    excerpt:
      "학생회실/동아리방 등 공용 공간 대관 신청 양식 및 일정이 일부 변경됩니다.",
    date: "2025.08.18",
    tag: "안내",
  },
];

const RECENT = [
  {
    id: 11,
    title: "[공지] 동아리 지원금 2차 지급 안내",
    tag: "재정",
    date: "08.17",
  },
  {
    id: 12,
    title: "[결과] 설문조사 요약 리포트 공개",
    tag: "보고",
    date: "08.16",
  },
  {
    id: 13,
    title: "[공지] 분실물 통합 보관소 운영",
    tag: "안내",
    date: "08.14",
  },
  {
    id: 14,
    title: "[모집] 문화탐방 프로그램 참가자",
    tag: "모집",
    date: "08.12",
  },
];

export default function SungshinStudentCouncilPage() {
  return (
    <div className="min-h-screen bg-[#f7f7fb] text-slate-900">
      {/* ====================== Hero + Header (배너 + 네비) ====================== */}
      <section className="relative isolate bg-[#6A6FB3] text-white">
        {/* Header */}
        <div className="absolute inset-x-0 top-0 z-40">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
            {/* 로고 */}
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-white/15 ring-1 ring-white/30">
                <span className="absolute inset-0 grid place-items-center text-[10px] font-semibold">
                  SS
                </span>
              </div>
              <span className="text-sm font-semibold tracking-tight">
                성신여자대학교 총학생회
              </span>
            </div>

            {/* 네비게이션 */}
            <ul className="hidden items-center gap-10 md:flex">
              {NAV.map((n) => (
                <li key={n.label} className="relative group">
                  <Link
                    href={n.href}
                    className="text-sm font-medium text-white/90 hover:text-white"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* SNS 버튼 */}
            <div className="hidden items-center gap-2 md:flex">
              <SocialCircle label="유튜브" abbr="유튜브" href="#" />
              <SocialCircle
                label="인스타그램"
                abbr="인스타"
                href="https://instagram.com/sungshinchonghak"
              />
              <SocialCircle label="카카오톡" abbr="카톡" href="#" />
            </div>
          </div>
        </div>

        {/* 배너 영역(빈 공간 + 도트) */}
        <div className="mx-auto flex min-h-[360px] max-w-6xl flex-col items-center justify-center px-4 pt-16 pb-12">
          <div className="mt-24" />
          <div className="mt-24 flex items-center justify-center gap-3 pb-2">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={`h-2.5 w-2.5 rounded-full ${
                  i === 0 ? "bg-white" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ====================== 중간 1: 소망은 크고/학사일정 + 게시판 ====================== */}
      <section id="notice" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-3">
            {/* 좌: 타이틀 + 학사일정 달력 */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-tight text-[#5b61a8]">
                소망은 크고
                <br />
                망설임은 작게
              </h2>
              <p className="mt-2 text-sm font-medium text-[#5b61a8]">
                N월 학사일정
              </p>

              <article className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="grid aspect-[4/3] w-full place-items-center overflow-hidden rounded-xl bg-slate-200 text-sm text-slate-600">
                  (학사 달력)
                </div>
              </article>

              <div className="mt-4 text-right">
                <Link
                  href="#"
                  className="text-sm font-medium text-[#5b61a8] hover:underline"
                >
                  더보기
                </Link>
              </div>
            </div>

            {/* 우: 총학생회 게시판 */}
            <div className="md:col-span-2">
              <h3 className="text-sm font-semibold text-[#5b61a8]">
                총학생회 게시판
              </h3>
              <ul className="mt-3 space-y-6">
                {NOTICES.map((n, idx) => (
                  <li key={n.id} className="border-b border-slate-200 pb-4">
                    <p className="text-sm font-semibold text-slate-900">
                      {n.title}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-600">
                      {n.excerpt}
                    </p>
                    {idx === 2 && (
                      <div className="mt-3 grid aspect-[4/2] w-full place-items-center rounded-lg bg-slate-100 text-xs text-slate-500">
                        (사진)
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== 중간 2: 최근 공지(라벤더 그라데이션) ====================== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#e9e2ff] via-[#efeaff] to-white">
        {/* 우측 배경 장식(선택) */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-20"
          style={{
            backgroundImage: "url('/pattern.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center right",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14">
          <h2 className="mb-6 text-center text-lg font-bold text-[#5b61a8]">
            최근 올라온 공지사항을 확인해보세요 &gt;
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {RECENT.map((p) => (
              <article
                key={p.id}
                className="group relative rounded-3xl border border-violet-200/50 bg-white/90 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow"
              >
                <div className="grid aspect-[3/4] w-full place-items-center rounded-2xl bg-slate-100 text-sm text-slate-500">
                  (카드뉴스)
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#5b61a8]">
                    {p.tag}
                  </span>
                  <time className="text-xs text-slate-500">{p.date}</time>
                </div>
                <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-slate-900">
                  {p.title}
                </h3>
                <Link
                  href="#"
                  className="mt-2 inline-block rounded-md border border-slate-300 px-2 py-1 text-[11px] text-slate-700 transition hover:bg-slate-50"
                >
                  더보기
                </Link>
              </article>
            ))}
          </div>

          {/* 도트 네비 */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === 1 ? "bg-[#5b61a8]" : "bg-[#5b61a8]/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ====================== 하단 정보(물품대여 정보 – 타이포형) ====================== */}
      <section id="about" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {/* 섹션 타이틀 */}
          <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-[#5b61a8]">
            물품대여 정보
          </h2>

          {/* 캠퍼스별 정보 */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* 돈암수정캠퍼스 */}
            <div className="text-center">
              <h3 className="text-base font-semibold text-[#5b61a8]">
                돈암수정캠퍼스
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                장소: 학생회관 220호 (총학생회실)
              </p>
              <p className="text-sm text-slate-700">
                운영 시간: 월 ~ 금, 11:00 ~ 17:00
              </p>
            </div>

            {/* 미아운정캠퍼스 */}
            <div className="text-center">
              <h3 className="text-base font-semibold text-[#5b61a8]">
                미아운정캠퍼스
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                B동 지하 1층 119호 (총학생회실)
              </p>
              <p className="text-sm text-slate-700">
                운영 시간: 월 ~ 금, 11:00 ~ 17:00
              </p>
            </div>
          </div>

          {/* 구분선 */}
          <div className="mx-auto my-10 h-px w-24 rounded bg-[#5b61a8]/30" />

          {/* 대여 물품 리스트 */}
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-base font-semibold text-[#5b61a8]">
              대여 물품
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              충전기: 연결 케이블, 변환 젠더, 보조배터리, 일체형 충전기, 어댑터,
              노트북 충전기
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              전자제품: 고데기, 드라이기, 레이저 포인터, 공학용 계산기, 빔
              프로젝터, 무선마우스(수정), HDMI 케이블(운정)
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              보드게임: 할리갈리, 루미큐브, 젠가, 부루마불(운정)
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              문구류 및 기타: 우산꽂힘기, 담요, 우산, 돗자리(운정),
              클립보드(운정), 박스테이프(운정)
            </p>
          </div>
        </div>
      </section>

      {/* ====================== Footer(그대로 유지) ====================== */}
      <footer className="border-t bg-[#6A6FB3] text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
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
            <div className="flex flex-col items-end justify-end gap-3">
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
                />
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
                />
                SSWU_chonghak
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- 스몰 컴포넌트 ---------- */
function DropdownItem({ href, label }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-slate-50"
    >
      <span>{label}</span>
      <span className="text-slate-400 transition group-hover:translate-x-0.5">
        ›
      </span>
    </Link>
  );
}

function SocialCircle({ label, abbr, href }) {
  return (
    <a
      href={href}
      className="grid h-9 w-9 place-items-center rounded-full bg-white/95 text-xs font-semibold text-slate-900 shadow hover:bg-white"
      aria-label={label}
    >
      {abbr}
    </a>
  );
}
