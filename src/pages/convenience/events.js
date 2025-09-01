// pages/convenience/events.jsx
import React from "react";
import Link from "next/link";
import ConvenienceSideNav from "@/components/ConvenienceSideNav";

const URLS = { eventsCalendar: "/events-calendar" };

export default function EventsPage() {
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
          <strong className="text-slate-900">행사혜택</strong>
        </div>
      </div>

      <main className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-8 md:grid-cols-[200px_1fr]">
          <ConvenienceSideNav />

          <section>
            <h1 className="text-2xl font-bold">행사혜택</h1>
            <p className="mt-1 text-sm text-slate-600">
              월간 간식배부/이벤트 일정과 주요 공지를 확인하세요.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-medium">이번 달 일정</p>
                <div className="mt-2 h-64 rounded-md bg-slate-100" />
                <a
                  href={URLS.eventsCalendar}
                  className="mt-3 inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50"
                >
                  행사 캘린더 열기 ›
                </a>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-medium">운영 안내</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  <li>· 월간 간식배부/이벤트 일정 공지</li>
                  <li>· 참여 시 학생증 지참</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
