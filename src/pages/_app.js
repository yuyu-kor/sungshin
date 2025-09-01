import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* 하이드레이션 이후 브라우저에서만 실행 */}
      <Script
        id="firebase-init"
        type="module"
        strategy="afterInteractive"
        src="/firebase-init.js"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
