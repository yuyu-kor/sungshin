// components/ConvenienceSideNav.jsx
import Link from "next/link";
import { useRouter } from "next/router";

// 필요시 로케일 prefix를 제거하도록 처리
function normalizePath(path) {
  // 해시/쿼리 제거
  let p = path.split("#")[0].split("?")[0];

  // 끝 슬래시 제거(루트는 제외)
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);

  return p;
}

const NAV = [
  { href: "/convenience/convenience", label: "물품대여" },
  { href: "/convenience/events", label: "행사혜택" },
  { href: "/convenience/partners", label: "제휴할인" },
  { href: "/convenience/jobs", label: "공모전" },
  { href: "/convenience/links", label: "캠퍼스생활링크" },
];

export default function ConvenienceSideNav() {
  const router = useRouter();

  // router.asPath가 실제 URL과 가장 가깝습니다.
  const current = normalizePath(router.asPath || router.pathname || "");

  return (
    <aside className="md:pt-2">
      <h3 className="mb-2 text-sm font-semibold text-slate-700">편의 정보</h3>
      <nav className="space-y-1 text-sm">
        {NAV.map((n) => {
          const hrefNorm = normalizePath(n.href);

          // /convenience = 물품대여(인덱스) 활성화
          // 하위 페이지는 정확히 일치할 때만 활성화
          const active = current === hrefNorm;

          return (
            <Link
              key={n.href}
              href={n.href}
              className={[
                "block rounded-md px-3 py-2",
                active
                  ? "bg-violet-50 font-medium text-[#5b61a8] ring-1 ring-violet-200"
                  : "text-slate-700 hover:bg-slate-50",
              ].join(" ")}
            >
              {n.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
