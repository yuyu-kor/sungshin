// pages/communication/index.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CommunicationPage() {
  const [form, setForm] = React.useState({
    name: "",
    dept: "",
    email: "",
    type: "문의",
    message: "",
    agree: false,
  });
  const [submitted, setSubmitted] = React.useState(false);

  function onChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <div className="min-h-screen bg-[#f7f7fb] text-slate-900">
      {/* 브레드크럼 */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 text-xs text-slate-500">
          <Link href="/" className="hover:underline">
            홈
          </Link>
          <span>›</span>
          <strong className="text-slate-900">소통</strong>
        </div>
      </div>

      {/* 본문 */}
      <main className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-8 md:grid-cols-[250px_1fr]">
          {/* 좌측 aside: 연락처 + SNS */}
          <aside className="space-y-6 md:pt-2">
            {/* 연락처 카드 */}
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold">연락처 · 운영시간</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>
                  · 이메일:{" "}
                  <a
                    className="underline"
                    href="mailto:sungshinchonghak@sungshin.ac.kr"
                  >
                    sungshinchonghak@sungshin.ac.kr
                  </a>
                </li>
                <li>· 전화: 02-920-0000</li>
                <li>· 평일 09:00~18:00 (점심 12:00~13:00)</li>
              </ul>
            </div>

            {/* SNS 링크 */}
            <div className="space-y-2">
              <a
                href="https://instagram.com/sungshinchonghak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={18}
                  height={18}
                />
                Instagram
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <Image
                  src="/icons/kakao.svg"
                  alt="Kakao"
                  width={18}
                  height={18}
                />
                KakaoTalk 채널
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <Image
                  src="/icons/youtube.svg"
                  alt="YouTube"
                  width={18}
                  height={18}
                />
                YouTube
              </a>
            </div>
          </aside>

          {/* 우측 메인 콘텐츠 */}
          <section>
            <div className="mb-6">
              <h1 className="text-2xl font-bold tracking-tight">소통</h1>
              <p className="mt-1 text-sm text-slate-600">
                민원, 건의, 협업 제안, 인터뷰/취재 요청 등 무엇이든 편하게
                남겨주세요.
              </p>
            </div>

            {/* 상단 3카드 */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <InfoCard title="학생 건의/민원" desc="학사·시설·생활 전반 의견">
                <a
                  className="inline-block rounded-full border border-[#5b61a8] px-3 py-1 text-xs text-[#5b61a8] hover:bg-violet-50"
                  href="#form"
                >
                  건의 남기기
                </a>
              </InfoCard>
              <InfoCard
                title="대외 제휴/협업"
                desc="기업·기관·동아리 협력 제안"
              >
                <a
                  className="inline-block rounded-full border border-[#5b61a8] px-3 py-1 text-xs text-[#5b61a8] hover:bg-violet-50"
                  href="#partner"
                >
                  제휴 안내
                </a>
              </InfoCard>
              <InfoCard title="언론/취재 요청" desc="보도자료·인터뷰 문의">
                <a
                  className="inline-block rounded-full border border-[#5b61a8] px-3 py-1 text-xs text-[#5b61a8] hover:bg-violet-50"
                  href="#press"
                >
                  취재 요청
                </a>
              </InfoCard>
            </div>

            {/* 제휴/언론 안내 */}
            <div
              id="partner"
              className="mt-8 rounded-lg border border-slate-200 bg-white p-4"
            >
              <h2 className="text-base font-semibold">대외 제휴/협업 안내</h2>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>· 대상: 기업/기관/학생단체/동아리</li>
                <li>· 제안서 형식: PDF 또는 링크</li>
                <li>· 회신: 영업일 기준 3~5일 내 이메일 회신</li>
              </ul>
            </div>
            <div
              id="press"
              className="mt-4 rounded-lg border border-slate-200 bg-white p-4"
            >
              <h2 className="text-base font-semibold">언론/취재 요청</h2>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>· 요청 내용: 매체/게재일/질문지/촬영 여부</li>
                <li>
                  · 연락:{" "}
                  <a
                    className="underline"
                    href="mailto:sungshinchonghak@sungshin.ac.kr"
                  >
                    sungshinchonghak@sungshin.ac.kr
                  </a>
                </li>
              </ul>
            </div>

            {/* 폼 */}
            <div id="form" className="mt-10">
              <h2 className="text-lg font-semibold">문의/건의 접수</h2>
              <form
                onSubmit={onSubmit}
                className="mt-3 grid grid-cols-1 gap-4 rounded-lg border border-slate-200 bg-white p-4"
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Field label="이름" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                      className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-[#5b61a8]"
                    />
                  </Field>
                  <Field label="소속/학과" htmlFor="dept">
                    <input
                      id="dept"
                      name="dept"
                      value={form.dept}
                      onChange={onChange}
                      placeholder="예: 글로벌비즈니스학과 20"
                      className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-[#5b61a8]"
                    />
                  </Field>
                </div>
                <Field label="이메일" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-[#5b61a8]"
                  />
                </Field>
                <Field label="분류" htmlFor="type">
                  <div className="flex flex-wrap gap-2">
                    {["문의", "건의", "민원", "제휴", "취재"].map((t) => (
                      <label
                        key={t}
                        className={`cursor-pointer rounded-full border px-3 py-1 text-xs ${
                          form.type === t
                            ? "border-[#5b61a8] bg-[#5b61a8] text-white"
                            : "border-[#5b61a8] text-[#5b61a8] hover:bg-violet-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="type"
                          value={t}
                          checked={form.type === t}
                          onChange={onChange}
                          className="hidden"
                        />
                        {t}
                      </label>
                    ))}
                  </div>
                </Field>
                <Field label="내용" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={6}
                    className="w-full rounded-md border border-slate-200 p-3 text-sm outline-none focus:border-[#5b61a8]"
                    placeholder="구체적인 상황과 원하는 해결/결과를 적어주세요."
                  />
                </Field>
                <label className="flex items-center gap-2 text-xs text-slate-600">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={form.agree}
                    onChange={onChange}
                    required
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  개인정보 수집·이용에 동의합니다. (문의 처리 목적·보관 3년)
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    className="h-10 rounded-md bg-[#5b61a8] px-4 text-sm font-medium text-white"
                  >
                    제출
                  </button>
                  {submitted && (
                    <span className="text-sm text-emerald-600">
                      접수되었습니다. 감사합니다!
                    </span>
                  )}
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

/* ───── 작은 컴포넌트 ───── */
function InfoCard({ title, desc, children }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-xs text-slate-500">{desc}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="text-xs font-medium text-slate-600">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
