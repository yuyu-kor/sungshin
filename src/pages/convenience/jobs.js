// pages/convenience/jobs.jsx
import React from "react";
import Link from "next/link";
import ConvenienceSideNav from "@/components/ConvenienceSideNav";

const URLS = { jobsBoard: "/jobs-board" };

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-[#f7f7fb] text-slate-900">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 text-xs text-slate-500">
          <Link href="/" className="hover:underline">
            홈
          </Link>
          <span>›</span>
          <Link href="/convenience" className="hover:underline">
            편의 정보
          </Link>
          <span>›</span>
          <strong className="text-slate-900">공모전</strong>
        </div>
      </div>

      <main className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-8 md:grid-cols-[200px_1fr]">
          <ConvenienceSideNav />

          <section>
            <h1 className="text-2xl font-bold">공모전</h1>
            <p className="mt-1 text-sm text-slate-600">
              교내외 공모/모집을 선별 큐레이션합니다. 사기/유해 공고는
              배제합니다.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-medium">안전 가이드</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  <li>· 급여·근로조건 확인</li>
                  <li>· 계약서/신분증 사본 주의</li>
                  <li>· 피싱/보증금 요구 신고</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-medium">모아보기</p>
                <a
                  href={URLS.jobsBoard}
                  className="mt-2 inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50"
                >
                  알바/공모전 보드 ›
                </a>
                <p className="mt-2 text-xs text-slate-500">
                  ※ 총학생회 검토 후 게시.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
