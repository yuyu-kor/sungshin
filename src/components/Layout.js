// components/Layout.jsx
import React from "react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#f7f7fb] text-slate-900">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
