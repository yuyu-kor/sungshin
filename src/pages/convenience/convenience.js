// pages/convenience/index.jsx
import React from "react";
import Link from "next/link";
import ConvenienceSideNav from "@/components/ConvenienceSideNav";

const URLS = { rentalGuide: "/rental-guide" };

export default function ConveniencePage() {
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

      <main className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-8 md:grid-cols-[200px_1fr]">
          <ConvenienceSideNav />

          <section>
            <h1 className="text-2xl font-bold">물품대여</h1>
            <p className="mt-1 text-sm text-slate-600">
              우산/보조배터리/노트북 충전기/돗자리 등. 학생증 지참 및 당일·익일
              반납.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
              <Card
                title="대여 품목(요약)"
                list={[
                  "우산",
                  "보조배터리",
                  "노트북 충전기",
                  "돗자리/행사 키트",
                ]}
              />
              <Card
                title="대여/반납"
                list={[
                  "학생증 지참",
                  "당일/익일 반납",
                  "연체 시 향후 이용 제한",
                ]}
              />
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-medium">안내/예약</p>
                <a
                  href={URLS.rentalGuide}
                  className="mt-2 inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50"
                >
                  대여 규정 문서 ›
                </a>
                <p className="mt-2 text-xs text-slate-500">
                  ※ 수량 한정, 선착순입니다.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-[#5b61a8]">
                캠퍼스별 이용 안내
              </p>
              <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
                <InfoBox
                  title="돈암수정캠퍼스"
                  lines={[
                    "장소: 학생회관 220호 (총학생회실)",
                    "운영 시간: 월~금, 11:00~17:00",
                  ]}
                />
                <InfoBox
                  title="미아운정캠퍼스"
                  lines={[
                    "B동 지하 1층 119호 (총학생회실)",
                    "운영 시간: 월~금, 11:00~17:00",
                  ]}
                />
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                <Box title="대여 물품">
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    충전기: 연결 케이블, 변환 젠더, 보조배터리, 일체형 충전기,
                    어댑터, 노트북 충전기
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
                </Box>
                <Box title="이용 팁">
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    <li>· 인기 품목은 수량 제한으로 조기 마감될 수 있어요.</li>
                    <li>
                      · 고가 전자기기는 대여 전/후 상태를 함께 확인합니다.
                    </li>
                    <li>· 반납 시간 엄수(연체 시 일정 기간 이용 제한).</li>
                  </ul>
                </Box>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function Card({ title, list }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-sm font-medium">{title}</p>
      <ul className="mt-2 space-y-1 text-sm text-slate-700">
        {list.map((t, i) => (
          <li key={i}>· {t}</li>
        ))}
      </ul>
    </div>
  );
}
function InfoBox({ title, lines }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4">
      <p className="text-sm font-medium text-[#5b61a8]">{title}</p>
      <ul className="mt-2 space-y-1 text-sm text-slate-700">
        {lines.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </div>
  );
}
function Box({ title, children }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4">
      <p className="text-sm font-medium text-[#5b61a8]">{title}</p>
      <div>{children}</div>
    </div>
  );
}
