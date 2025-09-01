// pages/convenience/partners.jsx
import React from "react";
import Link from "next/link";
import ConvenienceSideNav from "@/components/ConvenienceSideNav";

const PARTNERS = [
  {
    id: "cafe-aurora",
    name: "카페 오로라",
    category: "카페/디저트",
    discount: "학생증 제시 시 10% 할인",
    period: "상시",
    address: "성북구 동소문로 00",
    link: "https://example.com/aurora",
    note: "테이크아웃만 적용",
  },
  {
    id: "movie-planet",
    name: "무비플래닛",
    category: "문화/영화",
    discount: "주중 2D 2,000원 할인",
    period: "~ 2025-12-31",
    address: "동대문구 장한로 00",
    link: "https://example.com/movie",
    note: "현장 구매만",
  },
];

const CATEGORIES = [
  "전체",
  ...Array.from(new Set(PARTNERS.map((p) => p.category))),
];

export default function PartnersPage() {
  const [query, setQuery] = React.useState("");
  const [cat, setCat] = React.useState("전체");

  const filtered = PARTNERS.filter((p) => {
    const q = query.toLowerCase().trim();
    const qHit =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.discount.toLowerCase().includes(q) ||
      (p.address || "").toLowerCase().includes(q) ||
      (p.note || "").toLowerCase().includes(q);
    const cHit = cat === "전체" || p.category === cat;
    return qHit && cHit;
  });

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
          <strong className="text-slate-900">제휴할인</strong>
        </div>
      </div>

      <main className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-8 md:grid-cols-[200px_1fr]">
          <ConvenienceSideNav />

          <section>
            <h1 className="text-2xl font-bold">제휴할인</h1>
            <p className="mt-1 text-sm text-slate-600">
              총학생회 제휴 혜택 모음. 조건/기간은 제휴처 사정에 따라 변경될 수
              있습니다.
            </p>

            {/* 컨트롤 바 */}
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto]">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="예: 카페, 영화, 전 품목 5%..."
                className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-[#5b61a8]"
              />
              <select
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-[#5b61a8]"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* 카드 그리드 */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.length === 0 && (
                <div className="col-span-full rounded-md border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
                  조건에 맞는 제휴가 없습니다.
                </div>
              )}
              {filtered.map((p) => (
                <PartnershipCard key={p.id} partner={p} />
              ))}
            </div>

            <p className="mt-4 text-xs text-slate-500">
              제휴 문의/제안:{" "}
              <a
                href="mailto:sungshinchonghak@sungshin.ac.kr"
                className="underline"
              >
                sungshinchonghak@sungshin.ac.kr
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

function PartnershipCard({ partner }) {
  const { name, discount, period, category, address, link, note } = partner;
  return (
    <article className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-4 transition hover:shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-full border border-slate-200 px-2 py-0.5 text-[11px] text-slate-600">
          {category}
        </span>
      </div>
      <h3 className="mt-2 text-base font-semibold">{name}</h3>
      <p className="mt-1 text-sm">{discount}</p>
      <p className="mt-1 text-xs text-slate-500">기간: {period}</p>
      {address && <p className="mt-2 text-xs text-slate-600">📍 {address}</p>}
      {note && <p className="mt-1 text-xs text-slate-500">※ {note}</p>}
      {link && (
        <div className="mt-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-[#5b61a8] px-3 py-1.5 text-xs font-medium text-white"
          >
            자세히 보기 ›
          </a>
        </div>
      )}
    </article>
  );
}
