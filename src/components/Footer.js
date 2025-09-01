// components/Footer.jsx
import React from "react";

export default function Footer({
  className = "border-t bg-[#6A6FB3] text-white",
  containerClassName = "mx-auto max-w-6xl px-4 py-10",
  orgName = "성신여자대학교 총학생회",
  email = "sungshinchonghak@sungshin.ac.kr",
  phone = "02-920-0000",
  address1 = "돈암수정캠퍼스 학생회관 219호",
  address2 = "미아운정캠퍼스 B동 지하 1층 119호",
  instagramHref = "https://instagram.com/sungshinchonghak",
  kakaoHref = "#",
  instagramHandle = "@sungshinchonghak",
  kakaoHandle = "SSWU_chonghak",
}) {
  return (
    <footer className={className}>
      <div className={containerClassName}>
        <div className="grid gap-6 md:grid-cols-2">
          {/* 좌측 - 조직 정보 */}
          <div>
            <p className="text-sm font-semibold">{orgName}</p>
            <p className="mt-1 text-xs opacity-90">이메일: {email}</p>
            <p className="mt-1 text-xs opacity-90">전화번호: {phone}</p>
            <p className="mt-1 text-xs opacity-90">
              주소: {address1} / {address2}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
