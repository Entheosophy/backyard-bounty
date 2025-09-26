// pages/_app.jsx
import Layout from "../components/Layout.jsx";
import "../index.css";

export default function App({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}
