// pages/notices/index.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NoticeIntroPage() {
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
          <span className="text-slate-700">공지</span>
          <span>›</span>
          <strong className="text-slate-900">총학생회 소개</strong>
        </div>
      </div>

      {/* 콘텐츠 래퍼 */}
      <main className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-8 md:grid-cols-[200px_1fr]">
          {/* 좌측 서브 내비 */}
          <aside className="md:pt-2">
            <h3 className="mb-2 text-sm font-semibold text-slate-700">소개</h3>
            <nav className="space-y-1 text-sm">
              {/* 현재 페이지: 총학생회 소개 */}
              <span className="block rounded-md bg-violet-50 px-3 py-2 font-medium text-[#5b61a8] ring-1 ring-violet-200">
                총학생회 소개
              </span>

              {/* 조직도 링크 */}
              <Link
                href="/notices/organization"
                className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                조직도
              </Link>

              {/* 연혁 소개 (아직 미구현이라면 # 대신 차후 경로로) */}
              <a
                href="/notices/history"
                className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                연혁 소개
              </a>
            </nav>
          </aside>

          {/* 우측 본문 */}
          <section>
            {/* 타이틀 */}
            <div className="mb-3">
              <h1 className="text-xl font-bold tracking-tight">
                제37대 총학생회 소망이랑 소개
              </h1>
            </div>

            {/* 상단 큰 이미지/배너 자리 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-100/70">
              <div className="aspect-[16/7] w-full rounded-2xl"></div>
            </div>

            {/* 소개 본문 */}
            <div className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
              <p>
                안녕하세요, 성신여자대학교 제37대 총학생회{" "}
                <strong>‘소망이랑’</strong>입니다.
              </p>
              <p>‘소망’이란 ‘어떤 일을 바라는 마음’을 뜻하며,</p>
              <p>
                ‘이랑’은 ‘언제나 수정이들과 함께’ 하겠다는 소망이랑의 바람을
                담고 있습니다.
              </p>
              <p>
                ‘소망이랑’은 학우 여러분과의 소통을 가장 중요한 가치로 삼고,
                여러분의 의견을 성신의 변화로 이어가는 연결고리가 되고자 합니다.
              </p>
              <p>
                우리 앞에 펼쳐질 어떤 길이라도 망설임 없이 나아가며, 모든
                수정이들이 자신의 소망을 실현할 수 있도록 ‘소망이랑’은 든든한
                조력자가 되고자 합니다.
              </p>
              <p>‘소망이랑’은 흔들림 없이 전진하겠습니다.</p>
            </div>

            {/* 서명/직함 */}
            <div className="mt-5 flex flex-col items-end gap-1 text-sm">
              <p className="text-slate-600">
                성신여자대학교 제37대 총학생회장{" "}
                <span className="font-semibold text-[#5b61a8]">홍 은영</span>
              </p>
              <p className="text-slate-600">
                성신여자대학교 제37대 부총학생회장{" "}
                <span className="font-semibold text-[#5b61a8]">박 수아</span>
              </p>
            </div>

            {/* 구분선 */}
            <div className="my-8 h-px w-full bg-slate-200" />

            {/* 인사말 섹션 */}
            <h2 className="mb-4 text-base font-semibold">인사말</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr]">
              {/* 회장 사진 자리 */}
              <div className="rounded-2xl border border-slate-200 bg-slate-100/80">
                <div className="aspect-[4/4] w-full rounded-2xl"></div>
              </div>

              {/* 인사말 텍스트(회장/부회장) */}
              <div className="space-y-6 text-sm leading-7 text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">
                    총학생회장 홍은영
                  </p>
                  <p className="mt-1">
                    공지 내용은 여기에 입력해 주세요. 공지 내용은 여기에 입력해
                    주세요. 공지 내용은 여기에 입력해 주세요. 공지 내용은 여기에
                    입력해 주세요. 공지 내용은 여기에 입력해 주세요. 공지 내용은
                    여기에 입력해 주세요. 내용은 여기에 입력해 주세요.내용은
                    여기에 입력해 주세요.내용은 여기에 입력해 주세요.내용은
                    여기에 입력해 주세요. 공지 내용은 여기에 입력해 주세요. 공지
                    내용은 여기에 입력해 주세요. 공지 내용은 여기에 입력해
                    주세요. 공지 내용은 여기에 입력해 주세요. 공지 내용은 여기에
                    입력해 주세요. 공지 내용은 여기에 입력해 주세요.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    부총학생회장 박수아
                  </p>
                  <p className="mt-1">
                    공지 내용은 여기에 입력해 주세요. 공지 내용은 여기에 입력해
                    주세요. 공지 내용은 여기에 입력해 주세요. 공지 내용은 여기에
                    입력해 주세요. 공지 내용은 여기에 입력해 주세요. 공지 내용은
                    여기에 입력해 주세요. 내용은 여기에 입력해 주세요.내용은
                    여기에 입력해 주세요.내용은 여기에 입력해 주세요.내용은
                    여기에 입력해 주세요. 공지 내용은 여기에 입력해 주세요. 공지
                    내용은 여기에 입력해 주세요. 공지 내용은 여기에 입력해
                    주세요. 공지 내용은 여기에 입력해 주세요. 공지 내용은 여기에
                    입력해 주세요. 공지 내용은 여기에 입력해 주세요.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* 하단 푸터(간단) */}
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
