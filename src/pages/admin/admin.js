// pages/admin/index.jsx
import React from "react";
import { useRouter } from "next/router";

export default function AdminLoginPage() {
  const router = useRouter();
  const [form, setForm] = React.useState({ email: "", password: "" });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  function onChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "로그인에 실패했습니다.");
      }
      router.replace("/admin/dashboard");
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen grid place-items-center bg-[#f7f7fb] text-slate-900">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <h1 className="text-lg font-bold">관리자 로그인</h1>
        <p className="mt-1 text-xs text-slate-500">
          관리 페이지 접근을 위해 인증이 필요합니다.
        </p>

        <label className="mt-5 block text-xs font-medium text-slate-600">
          아이디
          <input
            className="mt-1 h-10 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-[#5b61a8]"
            name="id"
            type="id"
            value={form.id}
            onChange={onChange}
            required
          />
        </label>

        <label className="mt-3 block text-xs font-medium text-slate-600">
          비밀번호
          <input
            className="mt-1 h-10 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-[#5b61a8]"
            name="password"
            type="password"
            value={form.password}
            onChange={onChange}
            required
          />
        </label>

        {error && <p className="mt-3 text-sm text-rose-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-5 h-10 w-full rounded-md bg-[#5b61a8] text-sm font-semibold text-white disabled:opacity-60"
        >
          {loading ? "로그인 중..." : "로그인"}
        </button>
      </form>
    </div>
  );
}
