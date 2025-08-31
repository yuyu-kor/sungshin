// pages/_app.jsx
import "@/styles/globals.css";
import Layout from "@/components/Layout"; // 공용 Layout 불러오기

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
