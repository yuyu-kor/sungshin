// constants/navigation.js
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { SiKakaotalk } from "react-icons/si";

export const NAV = [
  { label: "소개", href: "/intro/intro" },
  { label: "공지", href: "/notices/notices" },
  { label: "편의 정보", href: "/convenience/convenience" },
  { label: "소통", href: "/communication/communication" },
  { label: "자료", href: "/resources/resources" },
];

export const SOCIALS = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@sungshinchonghak",
    icon: <FaYoutube size={20} color="#FF0000" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sungshinchonghak/",
    icon: <FaInstagram size={20} color="#E4405F" />,
  },
  {
    label: "KakaoTalk",
    href: "http://pf.kakao.com/_axivXb",
    icon: <SiKakaotalk size={20} color="#000000" />,
  },
];
